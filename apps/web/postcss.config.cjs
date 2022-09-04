const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const openProps = require('open-props');
const postcssJitProps = require('postcss-jit-props');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		postcssPresetEnv,
		postcssJitProps(openProps),
		autoprefixer,
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};
