const { configure, presets } = require('eslint-kit')

module.exports = configure({
  extends: '../../.eslintrc.cjs',
  root: __dirname,
  presets: [presets.typescript({ tsconfig: './tsconfig.app.json' })],
})
