import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const babelLoader = {
		test: /\.(m?js|tsx?)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [['@babel/preset-env', { targets: 'defaults' }]],
				plugins: [
					['i18next-extract', { locales: ['en', 'ru'], keyAsDefaultValue: true }],
				],
			},
		},
	}

	const typescriptLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const cssLoader: RuleSetRule = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (rPath: string) => rPath.endsWith('.module.scss'),
						localIdentName: isDev ? '[name]__[local]' : '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const yamlLoader = {
		test: /\.ya?ml$/,
		use: 'yaml-loader',
	}

	return [typescriptLoader, cssLoader, svgLoader, fileLoader, yamlLoader]
}
