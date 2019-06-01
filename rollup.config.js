/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import autoExternal from 'rollup-plugin-auto-external';

export default {
  input: 'src/index.js',
  plugins: [autoExternal()],
  output: [
    {file: 'lib/index.cjs.js', format: 'cjs', sourcemap: true, freeze: false},
    {file: 'lib/index.es.js', format: 'es', sourcemap: true, freeze: false}
  ]
};
