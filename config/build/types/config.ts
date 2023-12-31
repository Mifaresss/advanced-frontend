import type { Configuration } from 'webpack'

export type BuildMode = Configuration['mode']

export interface BuildPaths {
	entry: string
	build: string
	html: string
	src: string
	public: string
}

export interface BuildOptions {
	mode: BuildMode
	paths: BuildPaths
	isDev: boolean
	port: number
}

export interface BuildEnv {
	mode: BuildMode
	port: number
}
