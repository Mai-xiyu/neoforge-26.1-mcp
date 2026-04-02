# StructurePiecesBuilder

**Package:** `net.minecraft.world.level.levelgen.structure.pieces`
**Type:** class
**Implements:** `StructurePieceAccessor`

## Methods

### addPiece

```java
public void addPiece(StructurePiece p_192791_)
```

**Parameters:**

- `p_192791_` (`StructurePiece`)

### findCollisionPiece

```java
public StructurePiece findCollisionPiece(BoundingBox p_192789_)
```

**Parameters:**

- `p_192789_` (`BoundingBox`)

**Returns:** `StructurePiece`

### offsetPiecesVertically

```java
public void offsetPiecesVertically(int p_192782_)
```

**Parameters:**

- `p_192782_` (`int`)

### moveBelowSeaLevel

```java
public int moveBelowSeaLevel(int p_226966_, int p_226967_, RandomSource p_226968_, int p_226969_)
```

**Parameters:**

- `p_226966_` (`int`)
- `p_226967_` (`int`)
- `p_226968_` (`RandomSource`)
- `p_226969_` (`int`)

**Returns:** `int`

### moveInsideHeights

```java
public void moveInsideHeights(RandomSource p_226971_, int p_226972_, int p_226973_)
```

**Parameters:**

- `p_226971_` (`RandomSource`)
- `p_226972_` (`int`)
- `p_226973_` (`int`)

### build

```java
public PiecesContainer build()
```

**Returns:** `public PiecesContainer`

### PiecesContainer

```java
return new PiecesContainer()
```

**Returns:** `return new`

### clear

```java
public void clear()
```

**Returns:** `public void`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### getBoundingBox

```java
public BoundingBox getBoundingBox()
```

**Returns:** `public BoundingBox`
