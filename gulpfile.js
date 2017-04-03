const gulp = require('gulp');
const ts = require('gulp-tsc');
const tslint = require('gulp-tslint');
const tsconfig = require('./tsconfig');
const fs = require('fs');
const cucumber = require('gulp-cucumber');

const paths = {
    dirBuild: './out',
    allSrcTs: './src/**/*.ts',
    allFeatures: './features/*.feature'
};

gulp.task('build-ts', function () {
    return gulp.src(paths.allSrcTs).pipe(ts(tsconfig.compilerOptions)).pipe(gulp.dest(paths.dirBuild));
});

gulp.task("tslint", () => {
    return gulp.src(paths.allSrcTs).pipe(tslint({formatter: "verbose"})).pipe(tslint.report())
});

gulp.task('build', ['tslint', 'build-ts']);

gulp.task('run-cucumber', ['build-ts'], function() {
    return gulp.src(paths.allFeatures)
    .pipe(cucumber({
        steps: paths.dirBuild + '/step_definitions/*.js',
        support: paths.dirBuild + '/support/*.js',
        tags: '@privnote'
    }));
});