export function getClsNames(
	cls: string,
	additional: string[] = [],
	mods: Record<string, boolean> = {},
): string {
	return [
		cls,
		...additional.filter(Boolean),
		Object.entries(mods)
			.filter(([, v]) => v)
			.map(([cls]) => cls),
	]
		.join(' ')
		.trim()
}
