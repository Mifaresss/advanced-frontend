type Mods = Record<string, boolean | string>

export function getClassNames(cls: string, additional: string[], mods?: Mods): string {
	return [
		cls,
		...additional,
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([cls]) => cls),
	].join(' ')
}
