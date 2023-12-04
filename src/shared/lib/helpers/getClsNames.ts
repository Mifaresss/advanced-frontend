export function getClsNames(
	cls: string,
	additional: string[] = [],
	mods: Record<string, boolean> = {},
): string {
	return [
		cls,
		...additional,
		Object.entries(mods)
			.filter(([, v]) => v)
			.map(([cls]) => cls),
	].join(' ')
}
