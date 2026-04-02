# AABB

**Package:** `net.minecraft.world.phys`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INFINITE` | `AABB` |  |
| `minX` | `double` |  |
| `minY` | `double` |  |
| `minZ` | `double` |  |
| `maxX` | `double` |  |
| `maxY` | `double` |  |
| `maxZ` | `double` |  |

## Methods

### AABB

```java
public AABB(double p_82295_, double p_82296_, double p_82297_, double p_82298_, double p_82299_, double p_82300_)
```

**Parameters:**

- `p_82295_` (`double`)
- `p_82296_` (`double`)
- `p_82297_` (`double`)
- `p_82298_` (`double`)
- `p_82299_` (`double`)
- `p_82300_` (`double`)

**Returns:** `public`

### AABB

```java
public AABB(BlockPos p_82305_)
```

**Parameters:**

- `p_82305_` (`BlockPos`)

**Returns:** `public`

### AABB

```java
public AABB(Vec3 p_82302_, Vec3 p_82303_)
```

**Parameters:**

- `p_82302_` (`Vec3`)
- `p_82303_` (`Vec3`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### of

```java
public static AABB of(BoundingBox p_82322_)
```

**Parameters:**

- `p_82322_` (`BoundingBox`)

**Returns:** `public static AABB`

### unitCubeFromLowerCorner

```java
public static AABB unitCubeFromLowerCorner(Vec3 p_82334_)
```

**Parameters:**

- `p_82334_` (`Vec3`)

**Returns:** `public static AABB`

### AABB

```java
return new AABB(p_82334_.x + 1.0, p_82334_.y + 1.0, p_82334_.z + 1.0)
```

**Parameters:**

- `1.0` (`p_82334_.x +`)
- `1.0` (`p_82334_.y +`)
- `1.0` (`p_82334_.z +`)

**Returns:** `return new`

### encapsulatingFullBlocks

```java
public static AABB encapsulatingFullBlocks(BlockPos p_309165_, BlockPos p_308877_)
```

**Parameters:**

- `p_309165_` (`BlockPos`)
- `p_308877_` (`BlockPos`)

**Returns:** `public static AABB`

### setMinX

```java
public AABB setMinX(double p_165881_)
```

**Parameters:**

- `p_165881_` (`double`)

**Returns:** `public AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### setMinY

```java
public AABB setMinY(double p_165888_)
```

**Parameters:**

- `p_165888_` (`double`)

**Returns:** `public AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### setMinZ

```java
public AABB setMinZ(double p_165890_)
```

**Parameters:**

- `p_165890_` (`double`)

**Returns:** `public AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### setMaxX

```java
public AABB setMaxX(double p_165892_)
```

**Parameters:**

- `p_165892_` (`double`)

**Returns:** `public AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### setMaxY

```java
public AABB setMaxY(double p_165894_)
```

**Parameters:**

- `p_165894_` (`double`)

**Returns:** `public AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### setMaxZ

```java
public AABB setMaxZ(double p_165896_)
```

**Parameters:**

- `p_165896_` (`double`)

**Returns:** `public AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### min

```java
public double min(Direction.Axis p_82341_)
```

**Parameters:**

- `p_82341_` (`Direction.Axis`)

**Returns:** `public double`

### max

```java
public double max(Direction.Axis p_82375_)
```

**Parameters:**

- `p_82375_` (`Direction.Axis`)

**Returns:** `public double`

### equals

```java
public boolean equals(Object p_82398_)
```

**Parameters:**

- `p_82398_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### contract

```java
public AABB contract(double p_82311_, double p_82312_, double p_82313_)
```

**Parameters:**

- `p_82311_` (`double`)
- `p_82312_` (`double`)
- `p_82313_` (`double`)

**Returns:** `public AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### expandTowards

```java
public AABB expandTowards(Vec3 p_82370_)
```

**Parameters:**

- `p_82370_` (`Vec3`)

**Returns:** `public AABB`

### expandTowards

```java
public AABB expandTowards(double p_82364_, double p_82365_, double p_82366_)
```

**Parameters:**

- `p_82364_` (`double`)
- `p_82365_` (`double`)
- `p_82366_` (`double`)

**Returns:** `public AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### inflate

```java
public AABB inflate(double p_82378_, double p_82379_, double p_82380_)
```

**Parameters:**

- `p_82378_` (`double`)
- `p_82379_` (`double`)
- `p_82380_` (`double`)

**Returns:** `public AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### inflate

```java
public AABB inflate(double p_82401_)
```

**Parameters:**

- `p_82401_` (`double`)

**Returns:** `public AABB`

### intersect

```java
public AABB intersect(AABB p_82324_)
```

**Parameters:**

- `p_82324_` (`AABB`)

**Returns:** `public AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### minmax

```java
public AABB minmax(AABB p_82368_)
```

**Parameters:**

- `p_82368_` (`AABB`)

**Returns:** `public AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### move

```java
public AABB move(double p_82387_, double p_82388_, double p_82389_)
```

**Parameters:**

- `p_82387_` (`double`)
- `p_82388_` (`double`)
- `p_82389_` (`double`)

**Returns:** `public AABB`

### AABB

```java
return new AABB(this.minX + p_82387_, this.minY + p_82388_, this.minZ + p_82389_, this.maxX + p_82387_, this.maxY + p_82388_, this.maxZ + p_82389_)
```

**Parameters:**

- `p_82387_` (`this.minX +`)
- `p_82388_` (`this.minY +`)
- `p_82389_` (`this.minZ +`)
- `p_82387_` (`this.maxX +`)
- `p_82388_` (`this.maxY +`)
- `p_82389_` (`this.maxZ +`)

**Returns:** `return new`

### move

```java
public AABB move(BlockPos p_82339_)
```

**Parameters:**

- `p_82339_` (`BlockPos`)

**Returns:** `public AABB`

### move

```java
public AABB move(Vec3 p_82384_)
```

**Parameters:**

- `p_82384_` (`Vec3`)

**Returns:** `public AABB`

### move

```java
public AABB move(Vector3f p_346297_)
```

**Parameters:**

- `p_346297_` (`Vector3f`)

**Returns:** `public AABB`

### intersects

```java
public boolean intersects(AABB p_82382_)
```

**Parameters:**

- `p_82382_` (`AABB`)

**Returns:** `public boolean`

### intersects

```java
public boolean intersects(double p_82315_, double p_82316_, double p_82317_, double p_82318_, double p_82319_, double p_82320_)
```

**Parameters:**

- `p_82315_` (`double`)
- `p_82316_` (`double`)
- `p_82317_` (`double`)
- `p_82318_` (`double`)
- `p_82319_` (`double`)
- `p_82320_` (`double`)

**Returns:** `public boolean`

### intersects

```java
public boolean intersects(Vec3 p_82336_, Vec3 p_82337_)
```

**Parameters:**

- `p_82336_` (`Vec3`)
- `p_82337_` (`Vec3`)

**Returns:** `public boolean`

### contains

```java
public boolean contains(Vec3 p_82391_)
```

**Parameters:**

- `p_82391_` (`Vec3`)

**Returns:** `public boolean`

### contains

```java
public boolean contains(double p_82394_, double p_82395_, double p_82396_)
```

**Parameters:**

- `p_82394_` (`double`)
- `p_82395_` (`double`)
- `p_82396_` (`double`)

**Returns:** `public boolean`

### getSize

```java
public double getSize()
```

**Returns:** `public double`

### getXsize

```java
public double getXsize()
```

**Returns:** `public double`

### getYsize

```java
public double getYsize()
```

**Returns:** `public double`

### getZsize

```java
public double getZsize()
```

**Returns:** `public double`

### deflate

```java
public AABB deflate(double p_165898_, double p_165899_, double p_165900_)
```

**Parameters:**

- `p_165898_` (`double`)
- `p_165899_` (`double`)
- `p_165900_` (`double`)

**Returns:** `public AABB`

### deflate

```java
public AABB deflate(double p_82407_)
```

**Parameters:**

- `p_82407_` (`double`)

**Returns:** `public AABB`

### clip

```java
public Optional<Vec3> clip(Vec3 p_82372_, Vec3 p_82373_)
```

**Parameters:**

- `p_82372_` (`Vec3`)
- `p_82373_` (`Vec3`)

**Returns:** `public Optional<Vec3>`

### clip

```java
public static BlockHitResult clip(Iterable<AABB> p_82343_, Vec3 p_82344_, Vec3 p_82345_, BlockPos p_82346_)
```

**Parameters:**

- `p_82343_` (`Iterable<AABB>`)
- `p_82344_` (`Vec3`)
- `p_82345_` (`Vec3`)
- `p_82346_` (`BlockPos`)

**Returns:** `BlockHitResult`

### distanceToSqr

```java
public double distanceToSqr(Vec3 p_273572_)
```

**Parameters:**

- `p_273572_` (`Vec3`)

**Returns:** `public double`

### toString

```java
public String toString()
```

**Returns:** `String`

### hasNaN

```java
public boolean hasNaN()
```

**Returns:** `public boolean`

### getCenter

```java
public Vec3 getCenter()
```

**Returns:** `public Vec3`

### getBottomCenter

```java
public Vec3 getBottomCenter()
```

**Returns:** `public Vec3`

### getMinPosition

```java
public Vec3 getMinPosition()
```

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### getMaxPosition

```java
public Vec3 getMaxPosition()
```

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### ofSize

```java
public static AABB ofSize(Vec3 p_165883_, double p_165884_, double p_165885_, double p_165886_)
```

**Parameters:**

- `p_165883_` (`Vec3`)
- `p_165884_` (`double`)
- `p_165885_` (`double`)
- `p_165886_` (`double`)

**Returns:** `public static AABB`

### AABB

```java
return new AABB(p_165883_.x - p_165884_ / 2.0, p_165883_.y - p_165885_ / 2.0, p_165883_.z - p_165886_ / 2.0, p_165883_.x + p_165884_ / 2.0, p_165883_.y + p_165885_ / 2.0, p_165883_.z + p_165886_ / 2.0)
```

**Parameters:**

- `2.0` (`p_165883_.x - p_165884_ /`)
- `2.0` (`p_165883_.y - p_165885_ /`)
- `2.0` (`p_165883_.z - p_165886_ /`)
- `2.0` (`p_165883_.x + p_165884_ /`)
- `2.0` (`p_165883_.y + p_165885_ /`)
- `2.0` (`p_165883_.z + p_165886_ /`)

**Returns:** `return new`

### isInfinite

```java
public boolean isInfinite()
```

**Returns:** `boolean`
