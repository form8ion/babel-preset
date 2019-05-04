import env from '@babel/preset-env';

export default function () {
  return {
    presets: [[env, {targets: {node: 'current'}}]]
  };
}
