import { assert } from 'chai';
import Vector2d from './vector2d';

describe('Typescript mocha test runner', () => {
	it('should run a test', () => {
		assert.equal(true, true);
	});
	it('should create a vector2d object', () => {
		assert.equal(!!new Vector2d(), true);
		assert.typeOf(new Vector2d(), 'object');
	});
});
