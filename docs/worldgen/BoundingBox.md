# BoundingBox

**Package:** `net.minecraft.world.level.levelgen.structure`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<BoundingBox>` |  |

## Methods

### BoundingBox

```java
public BoundingBox(BlockPos p_162364_)
```

**Parameters:**

- `p_162364_` (`BlockPos`)

**Returns:** `public`

### BoundingBox

```java
public BoundingBox(int p_71001_, int p_71002_, int p_71003_, int p_71004_, int p_71005_, int p_71006_)
```

**Parameters:**

- `p_71001_` (`int`)
- `p_71002_` (`int`)
- `p_71003_` (`int`)
- `p_71004_` (`int`)
- `p_71005_` (`int`)
- `p_71006_` (`int`)

**Returns:** `public`

### IllegalStateException

```java
throw new IllegalStateException()
```

**Returns:** `throw new`

### fromCorners

```java
public static BoundingBox fromCorners(Vec3i p_162376_, Vec3i p_162377_)
```

**Parameters:**

- `p_162376_` (`Vec3i`)
- `p_162377_` (`Vec3i`)

**Returns:** `public static BoundingBox`

### infinite

```java
public static BoundingBox infinite()
```

**Returns:** `public static BoundingBox`

### BoundingBox

```java
return new BoundingBox()
```

**Returns:** `return new`

### orientBox

```java
public static BoundingBox orientBox(int p_71032_, int p_71033_, int p_71034_, int p_71035_, int p_71036_, int p_71037_, int p_71038_, int p_71039_, int p_71040_, Direction p_71041_)
```

**Parameters:**

- `p_71032_` (`int`)
- `p_71033_` (`int`)
- `p_71034_` (`int`)
- `p_71035_` (`int`)
- `p_71036_` (`int`)
- `p_71037_` (`int`)
- `p_71038_` (`int`)
- `p_71039_` (`int`)
- `p_71040_` (`int`)
- `p_71041_` (`Direction`)

**Returns:** `public static BoundingBox`

### BoundingBox

```java
return new BoundingBox(p_71032_ + p_71035_, p_71033_ + p_71036_, p_71034_ + p_71037_, p_71032_ + p_71038_ - 1 + p_71035_, p_71033_ + p_71039_ - 1 + p_71036_, p_71034_ + p_71040_ - 1 + p_71037_)
```

**Parameters:**

- `p_71035_` (`p_71032_ +`)
- `p_71036_` (`p_71033_ +`)
- `p_71037_` (`p_71034_ +`)
- `p_71035_` (`p_71032_ + p_71038_ - 1 +`)
- `p_71036_` (`p_71033_ + p_71039_ - 1 +`)
- `p_71037_` (`p_71034_ + p_71040_ - 1 +`)

**Returns:** `return new`

### BoundingBox

```java
return new BoundingBox(p_71032_ + p_71035_, p_71033_ + p_71036_, p_71034_ - p_71040_ + 1 + p_71037_, p_71032_ + p_71038_ - 1 + p_71035_, p_71033_ + p_71039_ - 1 + p_71036_, p_71034_ + p_71037_)
```

**Parameters:**

- `p_71035_` (`p_71032_ +`)
- `p_71036_` (`p_71033_ +`)
- `p_71037_` (`p_71034_ - p_71040_ + 1 +`)
- `p_71035_` (`p_71032_ + p_71038_ - 1 +`)
- `p_71036_` (`p_71033_ + p_71039_ - 1 +`)
- `p_71037_` (`p_71034_ +`)

**Returns:** `return new`

### BoundingBox

```java
return new BoundingBox(p_71032_ - p_71040_ + 1 + p_71037_, p_71033_ + p_71036_, p_71034_ + p_71035_, p_71032_ + p_71037_, p_71033_ + p_71039_ - 1 + p_71036_, p_71034_ + p_71038_ - 1 + p_71035_)
```

**Parameters:**

- `p_71037_` (`p_71032_ - p_71040_ + 1 +`)
- `p_71036_` (`p_71033_ +`)
- `p_71035_` (`p_71034_ +`)
- `p_71037_` (`p_71032_ +`)
- `p_71036_` (`p_71033_ + p_71039_ - 1 +`)
- `p_71035_` (`p_71034_ + p_71038_ - 1 +`)

**Returns:** `return new`

### BoundingBox

```java
return new BoundingBox(p_71032_ + p_71037_, p_71033_ + p_71036_, p_71034_ + p_71035_, p_71032_ + p_71040_ - 1 + p_71037_, p_71033_ + p_71039_ - 1 + p_71036_, p_71034_ + p_71038_ - 1 + p_71035_)
```

**Parameters:**

- `p_71037_` (`p_71032_ +`)
- `p_71036_` (`p_71033_ +`)
- `p_71035_` (`p_71034_ +`)
- `p_71037_` (`p_71032_ + p_71040_ - 1 +`)
- `p_71036_` (`p_71033_ + p_71039_ - 1 +`)
- `p_71035_` (`p_71034_ + p_71038_ - 1 +`)

**Returns:** `return new`

### intersectingChunks

```java
public Stream<ChunkPos> intersectingChunks()
```

**Returns:** `public Stream<ChunkPos>`

### intersects

```java
public boolean intersects(BoundingBox p_71050_)
```

**Parameters:**

- `p_71050_` (`BoundingBox`)

**Returns:** `public boolean`

### intersects

```java
public boolean intersects(int p_71020_, int p_71021_, int p_71022_, int p_71023_)
```

**Parameters:**

- `p_71020_` (`int`)
- `p_71021_` (`int`)
- `p_71022_` (`int`)
- `p_71023_` (`int`)

**Returns:** `public boolean`

### encapsulatingPositions

```java
public static Optional<BoundingBox> encapsulatingPositions(Iterable<BlockPos> p_162379_)
```

**Parameters:**

- `p_162379_` (`Iterable<BlockPos>`)

**Returns:** `public static Optional<BoundingBox>`

### encapsulatingBoxes

```java
public static Optional<BoundingBox> encapsulatingBoxes(Iterable<BoundingBox> p_162389_)
```

**Parameters:**

- `p_162389_` (`Iterable<BoundingBox>`)

**Returns:** `public static Optional<BoundingBox>`

### encapsulate

```java
public BoundingBox encapsulate(BoundingBox p_162387_)
```

**Parameters:**

- `p_162387_` (`BoundingBox`)

**Returns:** `BoundingBox`

### encapsulate

```java
public BoundingBox encapsulate(BlockPos p_162372_)
```

**Parameters:**

- `p_162372_` (`BlockPos`)

**Returns:** `BoundingBox`

### move

```java
public BoundingBox move(int p_162368_, int p_162369_, int p_162370_)
```

**Parameters:**

- `p_162368_` (`int`)
- `p_162369_` (`int`)
- `p_162370_` (`int`)

**Returns:** `BoundingBox`

### move

```java
public BoundingBox move(Vec3i p_162374_)
```

**Parameters:**

- `p_162374_` (`Vec3i`)

**Returns:** `BoundingBox`

### moved

```java
public BoundingBox moved(int p_71046_, int p_71047_, int p_71048_)
```

**Parameters:**

- `p_71046_` (`int`)
- `p_71047_` (`int`)
- `p_71048_` (`int`)

**Returns:** `public BoundingBox`

### BoundingBox

```java
return new BoundingBox(this.minX + p_71046_, this.minY + p_71047_, this.minZ + p_71048_, this.maxX + p_71046_, this.maxY + p_71047_, this.maxZ + p_71048_)
```

**Parameters:**

- `p_71046_` (`this.minX +`)
- `p_71047_` (`this.minY +`)
- `p_71048_` (`this.minZ +`)
- `p_71046_` (`this.maxX +`)
- `p_71047_` (`this.maxY +`)
- `p_71048_` (`this.maxZ +`)

**Returns:** `return new`

### inflatedBy

```java
public BoundingBox inflatedBy(int p_191962_)
```

**Parameters:**

- `p_191962_` (`int`)

**Returns:** `public BoundingBox`

### inflatedBy

```java
public BoundingBox inflatedBy(int p_341249_, int p_340933_, int p_341033_)
```

**Parameters:**

- `p_341249_` (`int`)
- `p_340933_` (`int`)
- `p_341033_` (`int`)

**Returns:** `public BoundingBox`

### isInside

```java
public boolean isInside(Vec3i p_71052_)
```

**Parameters:**

- `p_71052_` (`Vec3i`)

**Returns:** `public boolean`

### isInside

```java
public boolean isInside(int p_261671_, int p_261537_, int p_261678_)
```

**Parameters:**

- `p_261671_` (`int`)
- `p_261537_` (`int`)
- `p_261678_` (`int`)

**Returns:** `public boolean`

### getLength

```java
public Vec3i getLength()
```

**Returns:** `public Vec3i`

### Vec3i

```java
return new Vec3i(this.maxX - this.minX, this.maxY - this.minY, this.maxZ - this.minZ)
```

**Parameters:**

- `this.minX` (`this.maxX -`)
- `this.minY` (`this.maxY -`)
- `this.minZ` (`this.maxZ -`)

**Returns:** `return new`

### getXSpan

```java
public int getXSpan()
```

**Returns:** `public int`

### getYSpan

```java
public int getYSpan()
```

**Returns:** `public int`

### getZSpan

```java
public int getZSpan()
```

**Returns:** `public int`

### getCenter

```java
public BlockPos getCenter()
```

**Returns:** `public BlockPos`

### forAllCorners

```java
public void forAllCorners(Consumer<BlockPos> p_162381_)
```

**Parameters:**

- `p_162381_` (`Consumer<BlockPos>`)

**Returns:** `public void`

### toString

```java
public String toString()
```

**Returns:** `String`

### equals

```java
public boolean equals(Object p_162393_)
```

**Parameters:**

- `p_162393_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### minX

```java
public int minX()
```

**Returns:** `public int`

### minY

```java
public int minY()
```

**Returns:** `public int`

### minZ

```java
public int minZ()
```

**Returns:** `public int`

### maxX

```java
public int maxX()
```

**Returns:** `public int`

### maxY

```java
public int maxY()
```

**Returns:** `public int`

### maxZ

```java
public int maxZ()
```

**Returns:** `public int`
