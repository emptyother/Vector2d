[Vector2d](../README.md) › [Globals](../globals.md) › [Vector2d](vector2d.md)

# Class: Vector2d


A 2-dimentional vector object

## Hierarchy

* **Vector2d**

## Index

### Constructors

* [constructor](vector2d.md#constructor)

### Properties

* [x](vector2d.md#x)
* [y](vector2d.md#y)

### Methods

* [abs](vector2d.md#abs)
* [add](vector2d.md#add)
* [angleDeg](vector2d.md#angledeg)
* [angleRad](vector2d.md#anglerad)
* [clone](vector2d.md#clone)
* [cross](vector2d.md#cross)
* [distance](vector2d.md#distance)
* [divideByScalar](vector2d.md#dividebyscalar)
* [divideByVector](vector2d.md#dividebyvector)
* [dot](vector2d.md#dot)
* [equals](vector2d.md#equals)
* [length](vector2d.md#length)
* [lengthSq](vector2d.md#lengthsq)
* [multiplyByScalar](vector2d.md#multiplybyscalar)
* [multiplyByVector](vector2d.md#multiplybyvector)
* [normalise](vector2d.md#normalise)
* [reverse](vector2d.md#reverse)
* [rotate](vector2d.md#rotate)
* [rotateByOrigin](vector2d.md#rotatebyorigin)
* [scale](vector2d.md#scale)
* [subtract](vector2d.md#subtract)
* [toArray](vector2d.md#toarray)
* [toJSON](vector2d.md#tojson)
* [toObject](vector2d.md#toobject)
* [toString](vector2d.md#tostring)
* [zero](vector2d.md#zero)

## Constructors

###  constructor

\+ **new Vector2d**(`x`: number, `y`: number): *[Vector2d](vector2d.md)*

*Defined in [vector2d.ts:4](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L4)*

Creates an instance of Vector2d.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | 0 | - |
`y` | number | 0 |   |

**Returns:** *[Vector2d](vector2d.md)*

## Properties

###  x

• **x**: *number*

*Defined in [vector2d.ts:11](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L11)*

___

###  y

• **y**: *number*

*Defined in [vector2d.ts:12](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L12)*

## Methods

###  abs

▸ **abs**(): *this*

*Defined in [vector2d.ts:161](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L161)*

Set the vector axes values to absolute values

**Returns:** *this*

___

###  add

▸ **add**(`vec`: this): *this*

*Defined in [vector2d.ts:52](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L52)*

Add the provided vector to this one

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *this*

___

###  angleDeg

▸ **angleDeg**(`to`: [Vector2d](vector2d.md)): *number*

*Defined in [vector2d.ts:238](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L238)*

Get angle between two vectors in degrees.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | [Vector2d](vector2d.md) |   |

**Returns:** *number*

___

###  angleRad

▸ **angleRad**(`to`: [Vector2d](vector2d.md)): *number*

*Defined in [vector2d.ts:230](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L230)*

Get angle between two vectors in radians.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | [Vector2d](vector2d.md) |   |

**Returns:** *number*

___

###  clone

▸ **clone**(): *[Vector2d](vector2d.md)*

*Defined in [vector2d.ts:222](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L222)*

Returns a copy of this vector

**Returns:** *[Vector2d](vector2d.md)*

___

###  cross

▸ **cross**(`vec`: this): *number*

*Defined in [vector2d.ts:145](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L145)*

Returns the cross product of this vector by another.

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *number*

___

###  distance

▸ **distance**(`v`: this): *number*

*Defined in [vector2d.ts:178](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L178)*

Returns the distance between this vector and another

**Parameters:**

Name | Type |
------ | ------ |
`v` | this |

**Returns:** *number*

___

###  divideByScalar

▸ **divideByScalar**(`n`: number): *this*

*Defined in [vector2d.ts:104](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L104)*

Divive this vector by the provided number

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  divideByVector

▸ **divideByVector**(`vec`: this): *this*

*Defined in [vector2d.ts:86](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L86)*

Divide this vector by the provided vector

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *this*

___

###  dot

▸ **dot**(`vec`: this): *number*

*Defined in [vector2d.ts:138](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L138)*

Returns the dot product of this vector by another

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *number*

___

###  equals

▸ **equals**(`vec`: this): *boolean*

*Defined in [vector2d.ts:70](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L70)*

Check if the provided vector equal to this one

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *boolean*

___

###  length

▸ **length**(): *number*

*Defined in [vector2d.ts:120](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L120)*

Returns the magnitude (length) of this vector

**Returns:** *number*

___

###  lengthSq

▸ **lengthSq**(): *number*

*Defined in [vector2d.ts:129](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L129)*

Returns the squred length of this vector

**Returns:** *number*

___

###  multiplyByScalar

▸ **multiplyByScalar**(`n`: number): *this*

*Defined in [vector2d.ts:95](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L95)*

Multiply this vector by the provided number

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  multiplyByVector

▸ **multiplyByVector**(`vec`: this): *this*

*Defined in [vector2d.ts:77](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L77)*

Multiply this vector by the provided vector

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *this*

___

###  normalise

▸ **normalise**(): *this*

*Defined in [vector2d.ts:113](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L113)*

Normalise this vector

**Returns:** *this*

___

###  reverse

▸ **reverse**(): *this*

*Defined in [vector2d.ts:152](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L152)*

Reverses this vector i.e multiplies it by -1

**Returns:** *this*

___

###  rotate

▸ **rotate**(`rads`: number): *this*

*Defined in [vector2d.ts:187](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L187)*

Rotates the vetor by provided radians

**Parameters:**

Name | Type |
------ | ------ |
`rads` | number |

**Returns:** *this*

___

###  rotateByOrigin

▸ **rotateByOrigin**(`rads`: number, `origin`: this): *this*

*Defined in [vector2d.ts:202](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L202)*

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

*Defined in [vector2d.ts:213](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L213)*

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

*Defined in [vector2d.ts:61](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L61)*

Subtract the provided vector from this one

**Parameters:**

Name | Type |
------ | ------ |
`vec` | this |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *[number, number]*

*Defined in [vector2d.ts:25](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L25)*

Return an Array containing the vector axes, e.g [0, 4]

**Returns:** *[number, number]*

___

###  toJSON

▸ **toJSON**(): *object*

*Defined in [vector2d.ts:42](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L42)*

For JSON.stringify

**Returns:** *object*

___

###  toObject

▸ **toObject**(): *object*

*Defined in [vector2d.ts:32](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L32)*

Return an Object containing the vector axes, e.g { x: 0, y: 4 }

**Returns:** *object*

___

###  toString

▸ **toString**(): *string*

*Defined in [vector2d.ts:18](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L18)*

Return the vector as a formatted string, e.g "(0, 4)"

**Returns:** *string*

___

###  zero

▸ **zero**(): *this*

*Defined in [vector2d.ts:170](https://github.com/emptyother/Vector2d/blob/535b09a/src/vector2d.ts#L170)*

Zeroes the vector i.e sets all axes to 0

**Returns:** *this*