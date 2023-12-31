import path from 'path'
import type { Configuration } from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
		public: path.resolve(__dirname, 'public'),
	}

	const mode: BuildMode = env.mode || 'development'
	const port = env.port ?? 4242

	const isDev = mode === 'development'

	const config: Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
	})

	return config
}
