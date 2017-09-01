import json from 'rollup-plugin-json';
import buble from 'rollup-plugin-buble';
import filesize from 'rollup-plugin-filesize';

// eslint-disable-next-line import/no-commonjs
const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  external: ['jquery'],
  exports: 'named',
  plugins: [
    json(),
    buble({
      transforms: {
        dangerousForOf: true,
      },
    }),
    filesize(),
  ],
  output: [{ file: pkg.main, format: 'cjs' }],
};
