# PoolElementStructurePiece

**Package:** `net.minecraft.world.level.levelgen.structure`
**Type:** class
**Extends:** `StructurePiece`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `element` | `StructurePoolElement` |  |
| `position` | `BlockPos` |  |
| `rotation` | `Rotation` |  |

## Methods

### PoolElementStructurePiece

```java
public PoolElementStructurePiece(StructureTemplateManager p_226495_, StructurePoolElement p_226496_, BlockPos p_226497_, int p_226498_, Rotation p_226499_, BoundingBox p_226500_, LiquidSettings p_352307_)
```

**Parameters:**

- `p_226495_` (`StructureTemplateManager`)
- `p_226496_` (`StructurePoolElement`)
- `p_226497_` (`BlockPos`)
- `p_226498_` (`int`)
- `p_226499_` (`Rotation`)
- `p_226500_` (`BoundingBox`)
- `p_352307_` (`LiquidSettings`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### PoolElementStructurePiece

```java
public PoolElementStructurePiece(StructurePieceSerializationContext p_192406_, CompoundTag p_192407_)
```

**Parameters:**

- `p_192406_` (`StructurePieceSerializationContext`)
- `p_192407_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_192425_, CompoundTag p_192426_)
```

**Parameters:**

- `p_192425_` (`StructurePieceSerializationContext`)
- `p_192426_` (`CompoundTag`)

### postProcess

```java
public void postProcess(WorldGenLevel p_226502_, StructureManager p_226503_, ChunkGenerator p_226504_, RandomSource p_226505_, BoundingBox p_226506_, ChunkPos p_226507_, BlockPos p_226508_)
```

**Parameters:**

- `p_226502_` (`WorldGenLevel`)
- `p_226503_` (`StructureManager`)
- `p_226504_` (`ChunkGenerator`)
- `p_226505_` (`RandomSource`)
- `p_226506_` (`BoundingBox`)
- `p_226507_` (`ChunkPos`)
- `p_226508_` (`BlockPos`)

### place

```java
public void place(WorldGenLevel p_226510_, StructureManager p_226511_, ChunkGenerator p_226512_, RandomSource p_226513_, BoundingBox p_226514_, BlockPos p_226515_, boolean p_226516_)
```

**Parameters:**

- `p_226510_` (`WorldGenLevel`)
- `p_226511_` (`StructureManager`)
- `p_226512_` (`ChunkGenerator`)
- `p_226513_` (`RandomSource`)
- `p_226514_` (`BoundingBox`)
- `p_226515_` (`BlockPos`)
- `p_226516_` (`boolean`)

**Returns:** `public void`

### move

```java
public void move(int p_72616_, int p_72617_, int p_72618_)
```

**Parameters:**

- `p_72616_` (`int`)
- `p_72617_` (`int`)
- `p_72618_` (`int`)

### getRotation

```java
public Rotation getRotation()
```

**Returns:** `Rotation`

### toString

```java
public String toString()
```

**Returns:** `String`

### getElement

```java
public StructurePoolElement getElement()
```

**Returns:** `public StructurePoolElement`

### getPosition

```java
public BlockPos getPosition()
```

**Returns:** `public BlockPos`

### getGroundLevelDelta

```java
public int getGroundLevelDelta()
```

**Returns:** `public int`

### addJunction

```java
public void addJunction(JigsawJunction p_209917_)
```

**Parameters:**

- `p_209917_` (`JigsawJunction`)

**Returns:** `public void`

### getJunctions

```java
public List<JigsawJunction> getJunctions()
```

**Returns:** `public List<JigsawJunction>`
