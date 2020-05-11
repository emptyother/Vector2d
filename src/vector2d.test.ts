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
		expect(new Vector2d(4, 5).toString()).to.equal('(4, 5)');
	});
	it('should be convertable to array', () => {
		expect(new Vector2d().toArray()).to.be.an('array');
		expect(new Vector2d().toArray()[0]).to.equal(0);
		expect(new Vector2d().toArray()[1]).to.equal(0);
		expect(new Vector2d(3, 2).toArray()[0]).to.equal(3);
		expect(new Vector2d(3, 2).toArray()[1]).to.equal(2);
	});
	it('should return a new object', () => {
		const vec = new Vector2d(3, 2);
		expect(vec.toObject()).to.be.a('object');
		expect(vec.toObject()).to.not.equal(vec);
	});
	it('should return a json stringifiable object', () => {
		const vec = new Vector2d(3, 2);
		expect(vec.toJSON()).to.be.a('object');
		expect(vec.toJSON()).to.not.equal(vec);
		expect(JSON.stringify(vec.toJSON())).to.equal(JSON.stringify(vec));
		expect(JSON.stringify(vec)).to.equal('{"x":3,"y":2}');
	});
	it('should add two vectors', () => {
		const vec1 = new Vector2d(3, 2);
		const vec2 = new Vector2d(4, 1);
		vec1.add({ x: 1, y: 2 });
		expect(vec1.x).to.equal(4);
		expect(vec1.y).to.equal(4);
		vec1.add(vec2);
		expect(vec1.x).to.equal(8);
		expect(vec1.y).to.equal(5);
	});
	it('should subract two vectors', () => {
		const vec1 = new Vector2d(3, 2);
		const vec2 = new Vector2d(4, 1);
		vec1.subtract({ x: 1, y: 2 });
		expect(vec1.x).to.equal(2);
		expect(vec1.y).to.equal(0);
		vec1.subtract(vec2);
		expect(vec1.x).to.equal(-2);
		expect(vec1.y).to.equal(-1);
	});
	it('should compare two vectors', () => {
		const vec1 = new Vector2d(3, 2);
		const vec2 = new Vector2d(4, 1);
		const vec3 = new Vector2d(3, 2);
		expect(vec1.equals(vec2)).to.be.false;
		expect(vec1.equals(vec3)).to.be.true;
		expect(vec1.equals({ x: 3, y: 2 })).to.be.true;
		expect(vec1.equals({ x: 3, y: 1 })).to.be.false;
		expect(vec1.equals(vec1)).to.be.true;
	});
	it('should multiply two vectors', () => {
		const vec1 = new Vector2d(3, 2);
		const vec2 = new Vector2d(4, 1);
		vec1.multiplyByVector({ x: 1, y: 2 });
		expect(vec1.x).to.equal(3);
		expect(vec1.y).to.equal(4);
		vec1.multiplyByVector(vec2);
		expect(vec1.x).to.equal(12);
		expect(vec1.y).to.equal(4);
	});
	it('should divide two vectors', () => {
		const vec1 = new Vector2d(3, 2);
		const vec2 = new Vector2d(4, 1);
		vec1.divideByVector({ x: 1, y: 2 });
		expect(vec1.x).to.equal(3);
		expect(vec1.y).to.equal(1);
		vec1.divideByVector(vec2);
		expect(vec1.x).to.equal(0.75);
		expect(vec1.y).to.equal(1);
	});
	it('should multiply a vector', () => {
		const vec = new Vector2d(3, 2);
		vec.multiplyByScalar(3);
		expect(vec.x).to.equal(9);
		expect(vec.y).to.equal(6);
	});
	it('should divide a vector', () => {
		const vec = new Vector2d(9, 3);
		vec.divideByScalar(3);
		expect(vec.x).to.equal(3);
		expect(vec.y).to.equal(1);
	});
	it('should calculate the squared length of the vector', () => {
		const vec = new Vector2d(9, 12);
		expect(vec.lengthSq()).to.equal(225);
	});
	it('should calculate the length of the vector', () => {
		const vec = new Vector2d(9, 12);
		expect(vec.length()).to.equal(15);
	});
	it('should normalise a vector', () => {
		const vec = new Vector2d(9, 12);
		vec.normalise();
		expect(vec.length()).to.equal(1);
		expect(vec.x).to.equal(0.6);
		expect(vec.y).to.equal(0.8);
	});
	it('should calculate the dot product of the vector', () => {
		const vec = new Vector2d(9, 12);
		expect(vec.dot({ x: 3, y: 15 })).to.equal(207);
	});
	it('should calculate the cross product of the vector', () => {
		const vec = new Vector2d(9, 12);
		expect(vec.cross({ x: 3, y: 15 })).to.equal(99);
	});
	it('should reverse the vector', () => {
		const vec = new Vector2d(-9, 12);
		vec.reverse();
		expect(vec.x).to.equal(9);
		expect(vec.y).to.equal(-12);
	});
	it('should set the vector axes to absolute values', () => {
		const vec = new Vector2d(-9.3, 12.142);
		vec.abs();
		expect(vec.x).to.equal(9.3);
		expect(vec.y).to.equal(12.142);
	});
	it('should set vector axes to zero', () => {
		const vec = new Vector2d(-9.3, 12.142);
		vec.zero();
		expect(vec.x).to.equal(0);
		expect(vec.y).to.equal(0);
	});
	it('should calculate the distance between two vectors', () => {
		const vec1 = new Vector2d(9, 12);
		const vec2 = new Vector2d(18, 24);
		expect(vec1.distance(vec2)).to.equal(15);
	});
	it('should rotate a vector by radians', () => {
		const vec = new Vector2d(-9, 12);
		vec.rotate(Math.PI);
		expect(vec.x).to.be.closeTo(9, 0.001);
		expect(vec.y).to.be.closeTo(-12, 0.001);
	});
	it('should rotate a vector by radians around another vector', () => {
		const vec1 = new Vector2d(3, 6);
		const vec2 = new Vector2d(6, 6);
		vec1.rotateByOrigin(Math.PI, vec2);
		expect(vec1.x).to.equal(9);
		expect(vec1.y).to.equal(6);
	});
	it('should scale a vector around an origin', () => {
		const vec1 = new Vector2d(3, 6);
		const vec2 = new Vector2d(2, 2);
		vec1.scale({ x: 3, y: 2 }, vec2);
		expect(vec1.x).to.equal(5);
		expect(vec1.y).to.equal(10);
	});
	it('should clone a vector', () => {
		const vec1 = new Vector2d(3, 6);
		const vec2 = vec1.clone();
		expect(vec2.x).to.equal(vec1.x);
		expect(vec2.y).to.equal(vec1.y);
		expect(vec1.equals(vec2)).to.be.true;
		expect(vec1 === vec2).to.be.false;
	});
	it('should calculate angle between two vectors', () => {
		const vec1 = new Vector2d(3, 0);
		const vec2 = new Vector2d(0, 3);
		const result = vec1.angleRad(vec2);
		expect(result).to.equal(Math.PI/2);
	});
	it('should calculate angle between two vectors in degrees', () => {
		const vec1 = new Vector2d(1, 0);
		const vec2 = new Vector2d(0, 1);
		expect(vec1.angleDeg(vec2)).to.equal(90);
		expect(vec2.angleDeg(vec1)).to.equal(-90);
	});
});
