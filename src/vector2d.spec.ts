import Vector2d from './vector2d';

test('tester should run', () => {
	expect(true).toEqual(true);
});

test('a Vector2d object should be created', () => {
	expect(new Vector2d(0,0)).toBeDefined();
	expect(new Vector2d(0,0)).toBeTruthy();
});

test('should create a vector2d object with default values', () => {
	expect(new Vector2d()).toBeDefined();
	expect(new Vector2d()).toBeTruthy();
});
