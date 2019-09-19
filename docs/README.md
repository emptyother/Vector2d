[Vector2d](README.md) › [Globals](globals.md)

# Vector2d


# Vector2d

A 2D vector class with vector calculation methods.

[Documentation][docs]

[docs]: /docs/classes/vector2d.html

## Quick Start

```npm
'@emptyother:registry=https://npm.pkg.github.com' >> .npmrc
npm install @emptyother/vector2d
```

```typescript
import Vector2d from 'vector2d';

const vec1 = new Vector2d(1,1);
const vec2 = new Vector2d(2,3);
vec1.add(vec2);
vec1.toString(); // (3, 4)
vec1.toArray(); // [3, 4]
vec1.toObject(); // { x: 0, y: 4 }
```