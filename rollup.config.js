import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  plugins: [babel()],
  moduleName: 'jquery.promise',
  globals: { jquery: 'jQuery' },
}
