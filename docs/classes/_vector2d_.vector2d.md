
# Class: Vector2d

A 2-dimentional vector object

## Hierarchy

* **Vector2d**

## Index

### Constructors

* [constructor](_vector2d_.vector2d.md#constructor)

### Properties

* [x](_vector2d_.vector2d.md#x)
* [y](_vector2d_.vector2d.md#y)

### Methods

* [abs](_vector2d_.vector2d.md#abs)
* [add](_vector2d_.vector2d.md#add)
* [angleDeg](_vector2d_.vector2d.md#angledeg)
* [angleRad](_vector2d_.vector2d.md#anglerad)
* [clone](_vector2d_.vector2d.md#clone)
* [cross](_vector2d_.vector2d.md#cross)
* [distance](_vector2d_.vector2d.md#distance)
* [divideByScalar](_vector2d_.vector2d.md#dividebyscalar)
* [divideByVector](_vector2d_.vector2d.md#dividebyvector)
* [dot](_vector2d_.vector2d.md#dot)
* [equals](_vector2d_.vector2d.md#equals)
* [length](_vector2d_.vector2d.md#length)
* [lengthSq](_vector2d_.vector2d.md#lengthsq)
* [multiplyByScalar](_vector2d_.vector2d.md#multiplybyscalar)
* [multiplyByVector](_vector2d_.vector2d.md#multiplybyvector)
* [normalise](_vector2d_.vector2d.md#normalise)
* [reverse](_vector2d_.vector2d.md#reverse)
* [rotate](_vector2d_.vector2d.md#rotate)
* [rotateByOrigin](_vector2d_.vector2d.md#rotatebyorigin)
* [scale](_vector2d_.vector2d.md#scale)
* [subtract](_vector2d_.vector2d.md#subtract)
* [toArray](_vector2d_.vector2d.md#toarray)
* [toJSON](_vector2d_.vector2d.md#tojson)
* [toObject](_vector2d_.vector2d.md#toobject)
* [toString](_vector2d_.vector2d.md#tostring)
* [zero](_vector2d_.vector2d.md#zero)
* [radianToDegrees](_vector2d_.vector2d.md#static-radiantodegrees)

## Constructors

###  constructor

\+ **new Vector2d**(`x`: number, `y`: number): *[Vector2d](_vector2d_.vector2d.md)*

Creates an instance of Vector2d.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | 0 | - |
`y` | number | 0 |   |

**Returns:** *[Vector2d](_vector2d_.vector2d.md)*

## Properties

###  x

• **x**: *number*

___

###  y

• **y**: *number*

## Methods

###  abs

▸ **abs**(): *this*

Set the vector axes values to absolute values.

**Returns:** *this*

___

###  add

▸ **add**(`vec`: XY): *this*

Add the provided vector to this one.

**Parameters:**

Name | Type |
------ | ------ |
`vec` | XY |

**Returns:** *this*

___

###  angleDeg

▸ **angleDeg**(`to`: XY): *number*

Get the smallest angle between two vectors in degrees.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | XY |   |

**Returns:** *number*

___

###  angleRad

▸ **angleRad**(`to`: XY): *number*

Get smallest angle between two vectors in radians.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | XY |   |

**Returns:** *number*

___

###  clone

▸ **clone**(): *[Vector2d](_vector2d_.vector2d.md)*

Returns a copy of this vector

**Returns:** *[Vector2d](_vector2d_.vector2d.md)*

___

###  cross

▸ **cross**(`vec`: XY): *number*

Returns the cross product of this vector by another.

**Parameters:**

Name | Type |
------ | ------ |
`vec` | XY |

**Returns:** *number*

___

###  distance

▸ **distance**(`vec`: XY): *number*

Returns the distance between this vector and another

**Parameters:**

Name | Type |
------ | ------ |
`vec` | XY |

**Returns:** *number*

___

###  divideByScalar

▸ **divideByScalar**(`n`: number): *this*

Divive this vector by the provided number.

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  divideByVector

▸ **divideByVector**(`vec`: XY): *this*

Divide this vector by the provided vector.

**Parameters:**

Name | Type |
------ | ------ |
`vec` | XY |

**Returns:** *this*

___

###  dot

▸ **dot**(`vec`: XY): *number*

Returns the dot product of this vector by another vector.

**Parameters:**

Name | Type |
------ | ------ |
`vec` | XY |

**Returns:** *number*

___

###  equals

▸ **equals**(`vec`: XY): *boolean*

Check if the provided vector equal to this one.

**Parameters:**

Name | Type |
------ | ------ |
`vec` | XY |

**Returns:** *boolean*

___

###  length

▸ **length**(): *number*

Returns the magnitude (length) of this vector.

**Returns:** *number*

___

###  lengthSq

▸ **lengthSq**(): *number*

Returns the squred length of this vector.

**Returns:** *number*

___

###  multiplyByScalar

▸ **multiplyByScalar**(`n`: number): *this*

Multiply this vector by the provided number.

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  multiplyByVector

▸ **multiplyByVector**(`vec`: XY): *this*

Multiply this vector by the provided vector.

**Parameters:**

Name | Type |
------ | ------ |
`vec` | XY |

**Returns:** *this*

___

###  normalise

▸ **normalise**(): *this*

Normalise this vector (set its length to 1).

**Returns:** *this*

___

###  reverse

▸ **reverse**(): *this*

Reverse this vector.

**Returns:** *this*

___

###  rotate

▸ **rotate**(`rads`: number): *this*

Rotates the vetor by provided radians

**Parameters:**

Name | Type |
------ | ------ |
`rads` | number |

**Returns:** *this*

___

###  rotateByOrigin

▸ **rotateByOrigin**(`rads`: number, `origin`: XY): *this*

Rotate the vector by provided radians, around an origin.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rads` | number | - |
`origin` | XY |   |

**Returns:** *this*

___

###  scale

▸ **scale**(`multipler`: XY, `origin`: XY): *this*

Multiply the vector around an origin.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`multipler` | XY | - |
`origin` | XY |   |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`vec`: XY): *this*

Subtract the provided vector from this one.

**Parameters:**

Name | Type |
------ | ------ |
`vec` | XY |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *[number, number]*

Return an Array containing the vector axes.

**`example`** [0, 4]

**Returns:** *[number, number]*

___

###  toJSON

▸ **toJSON**(): *XY*

For `JSON.stringify()`.

**Returns:** *XY*

___

###  toObject

▸ **toObject**(): *XY*

Return an Object containing the vector axes.

**`example`** { x: 0, y: 4 }.

**Returns:** *XY*

___

###  toString

▸ **toString**(): *string*

Return the vector as a formatted string.

**`example`** "(0, 4)"

**Returns:** *string*

___

###  zero

▸ **zero**(): *this*

Zeroes the vector i.e sets all axes to 0.

**Returns:** *this*

___

### `Static` radianToDegrees

▸ **radianToDegrees**(`radians`: number): *number*

Convert radians to degrees.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`radians` | number |   |

**Returns:** *number*
