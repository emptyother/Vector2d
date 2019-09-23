import {
	assert,
	expect
} from 'chai';
import Vector2d from './vector2d';

describe('Typescript mocha test runner', () => {
	it('should run a test', () => {
		assert.equal(true, true);
	});
	it('should create a vector2d object', () => {
		expect(new Vector2d()).to.be.an('object');
		expect(new Vector2d()).to.have.property('x').equal(0);
		expect(new Vector2d()).to.have.property('y').equal(0);
	});

	it('should serialize to string', () => {
		expect(new Vector2d().toString()).to.be.a('string');
		expect(new Vector2d().toString()).to.equal('(0, 0)');
	});
});
