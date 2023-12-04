export function getClassNames(cls: string, additional: string[] = []): string {
	return [
		cls,
		...additional,
	].join(' ')
}
