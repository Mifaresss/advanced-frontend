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
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin(),
		new DefinePlugin({
			_IS_DEV_: JSON.stringify(isDev),
		}),
		new HotModuleReplacementPlugin(),
		new ReactRefreshWebpackPlugin(),
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
		}),
	]
}
