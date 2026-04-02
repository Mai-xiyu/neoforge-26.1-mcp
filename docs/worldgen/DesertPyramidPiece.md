# DesertPyramidPiece

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class
**Extends:** `ScatteredFeaturePiece`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `WIDTH` | `int` |  |
| `DEPTH` | `int` |  |

## Methods

### DesertPyramidPiece

```java
public DesertPyramidPiece(RandomSource p_227399_, int p_227400_, int p_227401_)
```

**Parameters:**

- `p_227399_` (`RandomSource`)
- `p_227400_` (`int`)
- `p_227401_` (`int`)

**Returns:** `public`

### DesertPyramidPiece

```java
public DesertPyramidPiece(CompoundTag p_227403_)
```

**Parameters:**

- `p_227403_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_227413_, CompoundTag p_227414_)
```

**Parameters:**

- `p_227413_` (`StructurePieceSerializationContext`)
- `p_227414_` (`CompoundTag`)

### postProcess

```java
public void postProcess(WorldGenLevel p_227405_, StructureManager p_227406_, ChunkGenerator p_227407_, RandomSource p_227408_, BoundingBox p_227409_, ChunkPos p_227410_, BlockPos p_227411_)
```

**Parameters:**

- `p_227405_` (`WorldGenLevel`)
- `p_227406_` (`StructureManager`)
- `p_227407_` (`ChunkGenerator`)
- `p_227408_` (`RandomSource`)
- `p_227409_` (`BoundingBox`)
- `p_227410_` (`ChunkPos`)
- `p_227411_` (`BlockPos`)

### addCellar

```java
private void addCellar(WorldGenLevel p_272769_, BoundingBox p_273155_)
```

**Parameters:**

- `p_272769_` (`WorldGenLevel`)
- `p_273155_` (`BoundingBox`)

**Returns:** `private void`

### addCellarStairs

```java
private void addCellarStairs(BlockPos p_272997_, WorldGenLevel p_272699_, BoundingBox p_273559_)
```

**Parameters:**

- `p_272997_` (`BlockPos`)
- `p_272699_` (`WorldGenLevel`)
- `p_273559_` (`BoundingBox`)

**Returns:** `private void`

### addCellarRoom

```java
private void addCellarRoom(BlockPos p_272733_, WorldGenLevel p_273390_, BoundingBox p_273517_)
```

**Parameters:**

- `p_272733_` (`BlockPos`)
- `p_273390_` (`WorldGenLevel`)
- `p_273517_` (`BoundingBox`)

**Returns:** `private void`

### placeSand

```java
private void placeSand(int p_279401_, int p_279451_, int p_279265_)
```

**Parameters:**

- `p_279401_` (`int`)
- `p_279451_` (`int`)
- `p_279265_` (`int`)

**Returns:** `private void`

### placeSandBox

```java
private void placeSandBox(int p_279483_, int p_279321_, int p_279271_, int p_279471_, int p_279229_, int p_279111_)
```

**Parameters:**

- `p_279483_` (`int`)
- `p_279321_` (`int`)
- `p_279271_` (`int`)
- `p_279471_` (`int`)
- `p_279229_` (`int`)
- `p_279111_` (`int`)

**Returns:** `private void`

### placeCollapsedRoofPiece

```java
private void placeCollapsedRoofPiece(WorldGenLevel p_272965_, int p_272618_, int p_273415_, int p_273110_, BoundingBox p_272645_)
```

**Parameters:**

- `p_272965_` (`WorldGenLevel`)
- `p_272618_` (`int`)
- `p_273415_` (`int`)
- `p_273110_` (`int`)
- `p_272645_` (`BoundingBox`)

**Returns:** `private void`

### placeCollapsedRoof

```java
private void placeCollapsedRoof(WorldGenLevel p_273438_, BoundingBox p_273058_, int p_272638_, int p_272826_, int p_273026_, int p_272750_, int p_272639_)
```

**Parameters:**

- `p_273438_` (`WorldGenLevel`)
- `p_273058_` (`BoundingBox`)
- `p_272638_` (`int`)
- `p_272826_` (`int`)
- `p_273026_` (`int`)
- `p_272750_` (`int`)
- `p_272639_` (`int`)

**Returns:** `private void`

### getPotentialSuspiciousSandWorldPositions

```java
public List<BlockPos> getPotentialSuspiciousSandWorldPositions()
```

**Returns:** `public List<BlockPos>`

### getRandomCollapsedRoofPos

```java
public BlockPos getRandomCollapsedRoofPos()
```

**Returns:** `public BlockPos`
