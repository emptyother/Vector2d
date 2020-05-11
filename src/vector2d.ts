/**
 * A 2-dimentional vector object
 */
export default class Vector2d {
	/**
	 * Creates an instance of Vector2d.
	 * @param x 
	 * @param y 
	 */
	constructor(
		public x: number = 0,
		public y: number = 0
	) { }

	/**
	* Return the vector as a formatted string. 
	* @example "(0, 4)"
	*/
	public toString(): string {
		return `(${this.x}, ${this.y})`;
	}

	/**
	* Return an Array containing the vector axes. 
	* @example [0, 4]
	*/
	public toArray(): [number, number] {
		return [this.x, this.y];
	}

	/**
	* Return an Object containing the vector axes. 
	* @example { x: 0, y: 4 }.
	*/
	public toObject(): XY {
		return {
			x: this.x,
			y: this.y
		};
	}

	/**
	 * For `JSON.stringify()`.
	 */
	public toJSON(): XY {
		return {
			x: this.x,
			y: this.y
		};
	}

	/**
	* Add the provided vector to this one.
	*/
	public add(vec: XY): this {
		this.x += vec.x;
		this.y += vec.y;
		return this;
	}

	/**
	 * Subtract the provided vector from this one.
	 */
	public subtract(vec: XY): this {
		this.x -= vec.x;
		this.y -= vec.y;
		return this;
	}

	/**
	 * Check if the provided vector equal to this one.
	 */
	public equals(vec: XY): boolean {
		return vec.x === this.x && vec.y === this.y;
	}

	/**
	 * Multiply this vector by the provided vector.
	 */
	public multiplyByVector(vec: XY): this {
		this.x *= vec.x;
		this.y *= vec.y;
		return this;
	}

	/**
	 * Divide this vector by the provided vector.
	 */
	public divideByVector(vec: XY): this {
		this.x /= vec.x;
		this.y /= vec.y;
		return this;
	}

	/**
	 * Multiply this vector by the provided number.
	 */
	public multiplyByScalar(n: number): this {
		this.x *= n;
		this.y *= n;
		return this;
	}

	/**
	 * Divive this vector by the provided number.
	 */
	public divideByScalar(n: number): this {
		this.x /= n;
		this.y /= n;
		return this;
	}

	/**
	 * Normalise this vector (set its length to 1).
	 */
	public normalise(): this {
		return this.divideByScalar(this.length());
	}

	/**
	 * Returns the magnitude (length) of this vector.
	 */
	public length(): number {
		return Math.sqrt(this.lengthSq());
	}

	/**
	 * Returns the squred length of this vector.
	 */
	public lengthSq(): number {
		return this.clone().dot(this);
	}

	/**
	 * Returns the dot product of this vector by another vector.
	 */
	public dot(vec: XY): number {
		return vec.x * this.x + vec.y * this.y;
	}

	/**
	 * Returns the cross product of this vector by another.
	 */
	public cross(vec: XY): number {
		return this.x * vec.y - this.y * vec.x;
	}

	/**
	 * Reverse this vector.
	 */
	public reverse(): this {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	}

	/**
	 * Set the vector axes values to absolute values.
	 */
	public abs(): this {
		this.x = Math.abs(this.x);
		this.y = Math.abs(this.y);
		return this;
	}

	/**
	 * Zeroes the vector i.e sets all axes to 0.
	 */
	public zero(): this {
		this.x = this.y = 0;
		return this;
	}

	/**
	 * Returns the distance between this vector and another
	 */
	public distance(vec: XY): number {
		const va = this.clone().subtract(vec);
		return Math.sqrt(va.dot(va));
	}

	/**
	 * Rotates the vetor by provided radians
	 */
	public rotate(rads: number): this {
		const cos = Math.cos(rads);
		const sin = Math.sin(rads);
		const ox = this.x;
		const oy = this.y;
		this.x = ox * cos - oy * sin;
		this.y = ox * sin + oy * cos;
		return this;
	}

	/**
	 * Rotate the vector by provided radians, around an origin.
	 * @param rads
	 * @param origin
	 */
	public rotateByOrigin(rads: number, origin: XY): this {
		return this.subtract(origin)
			.rotate(rads)
			.add(origin);
	}

	/**
	 * Multiply the vector around an origin.
	 * @param multipler
	 * @param origin
	 */
	public scale(multipler: XY, origin: XY): this {
		return this.subtract(origin)
			.multiplyByVector(multipler)
			.add(origin);
	}

	/**
	 * Returns a copy of this vector
	 */
	public clone(): Vector2d {
		return new Vector2d(this.x, this.y);
	}

	/**
	 * Get smallest angle between two vectors in radians.
	 * @param to
	 */
	public angleRad(to: XY): number {
		const cross = this.clone().cross(to);
		const dot = this.clone().dot(to);
		return Math.atan2(cross, dot);
	}

	/**
	 * Get the smallest angle between two vectors in degrees.
	 * @param to
	 */
	public angleDeg(to: XY): number {
		return Vector2d.radianToDegrees(this.angleRad(to));
	}

	/**
	 * Convert radians to degrees.
	 * @param radians
	 */
	public static radianToDegrees(radians: number): number {
		return radians * 180 / Math.PI;
	}
}

interface XY {
	x: number;
	y: number
}
