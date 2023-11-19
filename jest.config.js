module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  /* use axios */
  transformIgnorePatterns: ['node_modules/(?!(axios)/)']
}
