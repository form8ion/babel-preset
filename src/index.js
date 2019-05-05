import env from '@babel/preset-env';
import restSpread from '@babel/plugin-proposal-object-rest-spread';

export default function ({targets = {}} = {}) {
  return {
    presets: [[env, {targets: {node: targets.node || 'current'}}]],
    plugins: [[restSpread, {useBuiltIns: true}]]
  };
}
