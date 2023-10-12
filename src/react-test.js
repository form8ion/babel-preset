import {assert} from 'chai';

import buildConfig from './index.js';

suite('react config', () => {
  test('that react is configured when specified', () => {
    const config = buildConfig(null, {react: true});

    assert.include(config.presets, require('@babel/preset-react'));

    assert.include(config.plugins, require('@babel/plugin-proposal-class-properties'));
    assert.include(config.plugins, require('babel-plugin-inline-react-svg').default);
  });
});
