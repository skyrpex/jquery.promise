import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';

// eslint-disable-next-line import/no-commonjs
const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  name: 'jquery.promise',
  external: ['jquery'],
  globals: {
    jquery: 'jQuery',
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    buble({
      transforms: {
        dangerousForOf: true,
      },
    }),
    commonjs(),
    replace({
      'process.env': JSON.stringify({
        NODE_ENV: 'production',
      }),
    }),
    uglify(),
    filesize(),
  ],
  output: [{ file: pkg.browser, format: 'umd' }],
};
