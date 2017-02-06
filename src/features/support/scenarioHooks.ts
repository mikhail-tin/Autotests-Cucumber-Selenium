// import { defineSupportCode, Hooks, HookScenario } from 'cucumber';
import settings from '../../settings/settings';
import {expect} from 'chai';

function definitions(): void {
  this.Before('@tag', async function (): Promise<any> {
    console.log('Before');
  });

  this.After(async function (): Promise<any> {
    console.log('After');
  });
};

module.exports = definitions;