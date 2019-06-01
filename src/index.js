import env from '@babel/preset-env';
import restSpread from '@babel/plugin-proposal-object-rest-spread';

export default function ({targets = {}, modules} = {}) {
  return {
    presets: [
      [env, {
        targets: {node: targets.node || 'current'},
        ...(false === modules) && {modules: false},
        exclude: ['transform-regenerator', 'transform-async-to-generator']
      }]
    ],
    plugins: [[restSpread, {useBuiltIns: true}]]
  };
}
