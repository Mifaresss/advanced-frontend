import { RuleSetRule } from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildYamlLoader } from './loaders/buildYamlLoader'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const babelLoader = {
		test: /\.(m?js|tsx?)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [['@babel/preset-env', { targets: 'defaults' }]],
				// plugins: [
				// 	['i18next-extract', { locales: ['en', 'ru'], keyAsDefaultValue: true }],
				// ],
			},
		},
	}

	const typescriptLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const cssLoader: RuleSetRule = buildCssLoader(isDev)

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

	const yamlLoader = buildYamlLoader()

	return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader, yamlLoader]
}
