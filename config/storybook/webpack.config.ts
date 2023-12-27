import path from 'path'
import { Configuration } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

type Props = { config: Configuration }
export default ({ config }: Props): Configuration => {
	const srcPath = path.resolve(__dirname, '..', '..', 'src')

	return {
		...config,
		resolve: {
			...config.resolve,
			modules: [srcPath, 'node_modules'],
			alias: {
				'@': srcPath,
				'@public': path.resolve(__dirname, '..', '..', 'public'),
			},
			extensions: [...config.resolve.extensions, '.ts', '.tsx'],
		},
		module: {
			...config.module,
			rules: [...config.module.rules, buildCssLoader(true)],
		},
	}
}
