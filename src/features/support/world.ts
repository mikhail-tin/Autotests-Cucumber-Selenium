import settings from '../../settings/settings';

function World(): void {
  this.settings = settings;
}

module.exports = function initWorld(): void {
  this.World = World;
};