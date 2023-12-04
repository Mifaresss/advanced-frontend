export function getClassNames(cls: string, additional: string[] = []): string {
	return [cls, ...additional].filter(Boolean).join(' ')
}
