module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'playground/**',
        'tests/**',
        'poi.config.js',
        'rollup.config.*.js',
      ],
      optionalDependencies: false,
    }],
    'no-param-reassign': 0
  },
};
