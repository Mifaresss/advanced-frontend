import { getClsNames } from './getClsNames'

describe('classNames', () => {
	test('one argument', () => {
		expect(getClsNames('someClass')).toBe('someClass')
	})

	test('two arguments', () => {
		expect(getClsNames('someClass', ['2'])).toBe('someClass 2')
	})

	test('all arguments; mods: true', () => {
		expect(getClsNames('someClass', ['2'], { hovered: true })).toBe(
			'someClass 2 hovered',
		)
	})

	test('all arguments; mods: false', () => {
		expect(getClsNames('someClass', ['2'], { hovered: false })).toBe('someClass 2')
	})

	test('all arguments; mods: null | undefined', () => {
		expect(getClsNames('someClass', ['2'], { hovered: null, active: undefined })).toBe(
			'someClass 2',
		)
	})
})
