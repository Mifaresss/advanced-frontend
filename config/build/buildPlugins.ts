import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {
	DefinePlugin,
	HotModuleReplacementPlugin,
	ProgressPlugin,
	WebpackPluginInstance,
} from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/config'

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
	const plugins: WebpackPluginInstance[] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin(),
		new DefinePlugin({
			_IS_DEV_: JSON.stringify(isDev),
		}),
	]

	if (isDev) {
		plugins.push(
			new HotModuleReplacementPlugin(),
			new ReactRefreshWebpackPlugin(),
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			}),
		)
	}

	return plugins
}
