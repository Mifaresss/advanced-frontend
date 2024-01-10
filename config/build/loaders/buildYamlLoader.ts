import { RuleSetRule } from 'webpack'

export function buildYamlLoader(): RuleSetRule {
	return {
		test: /\.ya?ml$/,
		use: 'yaml-loader',
	}
}
