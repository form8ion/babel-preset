import env from '@babel/preset-env';
import restSpread from '@babel/plugin-proposal-object-rest-spread';

export default function () {
  return {
    presets: [[env, {targets: {node: 'current'}}]],
    plugins: [[restSpread, {useBuiltIns: true}]]
  };
}
