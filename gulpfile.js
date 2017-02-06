const gulp = require('gulp');
const ts = require('gulp-tsc');
const tslint = require('gulp-tslint');
const tsconfig = require('./tsconfig');
const fs = require('fs');
const cucumber = require('gulp-cucumber');

const paths = {
    dirBuild: './out',
    allSrcTs: './src/**/*.ts',
    allSrcFeature: './src/**/*.feature',
    allBuildFeatures: './out/features/*.feature',
    dirBuildFeatures: './out/features'
};

const extensions = {
    tsExt: '.ts',
    featuresExt: '.feature',
    jsExt: '.js',
    mapExt: '.map'
}

gulp.task('cleanup', ['cleanup-code', 'cleanup-features']);

gulp.task('cleanup-code', function(){
    findRemove(paths.dirBuild, extensions.jsExt);
    findRemove(paths.dirBuild, extensions.tsExt);
    findRemove(paths.dirBuild, extensions.mapExt);
});

gulp.task('cleanup-features', function(){
    findRemove(paths.dirBuild, extensions.featuresExt);
});

gulp.task('build-ts', ['cleanup-code'], function () {
    return gulp.src(paths.allSrcTs)
        .pipe(ts(tsconfig.compilerOptions))
        .pipe(gulp.dest(paths.dirBuild));
});

gulp.task('copy-features', ['cleanup-features'], function () {
    return gulp.src(paths.allSrcFeature)
        .pipe(gulp.dest(paths.dirBuild));
});

gulp.task("tslint", () =>
    gulp.src(paths.allSrcTs)
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
);

gulp.task('build', ['build-ts', 'tslint', 'copy-features']);

gulp.task('build-and-run', ['build', 'run-cucumber']);

gulp.task('run-cucumber', function(){
    return gulp.src(paths.allBuildFeatures)
    .pipe(cucumber({
        steps: paths.dirBuildFeatures + '/step_definitions/*.js',
        support: paths.dirBuildFeatures + '/support/*.js'
    }));
});

function findRemove(dir, ext){
    var files = getFiles(dir, []);
    for (var file of files){
        if(file.indexOf(ext) >= 0){
            fs.unlink(file, (err) => {
                console.log('delete: '+ file)
                if (err) throw err;
            });
        }
    }
}

function getFiles (dir, files_) {
  files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};
