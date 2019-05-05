import env from '@babel/preset-env';
import restSpread from '@babel/plugin-proposal-object-rest-spread';
import {assert} from 'chai';
import any from '@travi/any';
import buildConfig from '../../src';

suite('core config', () => {
  test('that preset-env targets the current version of node by default and object rest-spread is enabled', () => {
    const config = buildConfig();

    assert.deepEqual(config.presets, [[env, {targets: {node: 'current'}}]]);
    assert.deepEqual(config.plugins, [[restSpread, {useBuiltIns: true}]]);
  });

  test('that preset-env targets the provided version of node', () => {
    let nodeVersion = any.integer();
    const config = buildConfig({targets: {node: nodeVersion}});

    assert.deepEqual(config.presets, [[env, {targets: {node: nodeVersion}}]]);
  });
});
