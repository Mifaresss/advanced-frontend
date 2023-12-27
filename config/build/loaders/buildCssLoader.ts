import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'

export function buildCssLoader(isDev: boolean): RuleSetRule {
	return {
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
}
