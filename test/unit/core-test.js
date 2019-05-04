import env from '@babel/preset-env';
import {assert} from 'chai';
import buildConfig from '../../src';

suite('core config', () => {
  test('that preset-env targets the current version of node by default', () => {
    const config = buildConfig();

    assert.deepEqual(config.presets, [[env, {targets: {node: 'current'}}]]);
  });
});
