
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

Set the vector axes values to absolute values

**Returns:** *this*

___

###  add

▸ **add**(`vec`: this): *this*

Add the provided vector to this one

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *this*

___

###  angleDeg

▸ **angleDeg**(`to`: [Vector2d](_vector2d_.vector2d.md)): *number*

Get angle between two vectors in degrees.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | [Vector2d](_vector2d_.vector2d.md) |   |

**Returns:** *number*

___

###  angleRad

▸ **angleRad**(`to`: [Vector2d](_vector2d_.vector2d.md)): *number*

Get angle between two vectors in radians.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | [Vector2d](_vector2d_.vector2d.md) |   |

**Returns:** *number*

___

###  clone

▸ **clone**(): *[Vector2d](_vector2d_.vector2d.md)*

Returns a copy of this vector

**Returns:** *[Vector2d](_vector2d_.vector2d.md)*

___

###  cross

▸ **cross**(`vec`: this): *number*

Returns the cross product of this vector by another.

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *number*

___

###  distance

▸ **distance**(`v`: this): *number*

Returns the distance between this vector and another

**Parameters:**

Name | Type |
------ | ------ |
`v` | this |

**Returns:** *number*

___

###  divideByScalar

▸ **divideByScalar**(`n`: number): *this*

Divive this vector by the provided number

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  divideByVector

▸ **divideByVector**(`vec`: this): *this*

Divide this vector by the provided vector

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *this*

___

###  dot

▸ **dot**(`vec`: this): *number*

Returns the dot product of this vector by another

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *number*

___

###  equals

▸ **equals**(`vec`: this): *boolean*

Check if the provided vector equal to this one

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *boolean*

___

###  length

▸ **length**(): *number*

Returns the magnitude (length) of this vector

**Returns:** *number*

___

###  lengthSq

▸ **lengthSq**(): *number*

Returns the squred length of this vector

**Returns:** *number*

___

###  multiplyByScalar

▸ **multiplyByScalar**(`n`: number): *this*

Multiply this vector by the provided number

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  multiplyByVector

▸ **multiplyByVector**(`vec`: this): *this*

Multiply this vector by the provided vector

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *this*

___

###  normalise

▸ **normalise**(): *this*

Normalise this vector

**Returns:** *this*

___

###  reverse

▸ **reverse**(): *this*

Reverses this vector i.e multiplies it by -1

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

▸ **rotateByOrigin**(`rads`: number, `origin`: this): *this*

Rotate the vector by provided radians, around an origin.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rads` | number | - |
`origin` | this |   |

**Returns:** *this*

___

###  scale

▸ **scale**(`multipler`: this, `origin`: this): *this*

Multiply the vector around an origin.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`multipler` | this | - |
`origin` | this |   |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`vec`: this): *this*

Subtract the provided vector from this one

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *[number, number]*

Return an Array containing the vector axes, e.g [0, 4]

**Returns:** *[number, number]*

___

###  toJSON

▸ **toJSON**(): *object*

For JSON.stringify

**Returns:** *object*

___

###  toObject

▸ **toObject**(): *object*

Return an Object containing the vector axes, e.g { x: 0, y: 4 }

**Returns:** *object*

___

###  toString

▸ **toString**(): *string*

Return the vector as a formatted string, e.g "(0, 4)"

**Returns:** *string*

___

###  zero

▸ **zero**(): *this*

Zeroes the vector i.e sets all axes to 0

**Returns:** *this*
