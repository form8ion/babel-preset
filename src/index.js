import env from '@babel/preset-env';
import restSpread from '@babel/plugin-proposal-object-rest-spread';

export default function (context, {targets = {}, modules, react} = {}) {
  return {
    presets: [
      [env, {
        targets: {node: targets.node || 'current'},
        ...(false === modules) && {modules: false},
        exclude: ['transform-regenerator', 'transform-async-to-generator']
      }],
      ...react ? [require('@babel/preset-react')] : []
    ],
    plugins: [
      [restSpread, {useBuiltIns: true}],
      ...react ? [require('babel-plugin-inline-react-svg').default] : []
    ]
  };
}
