# SculkSpreader

**Package:** `net.minecraft.world.level.block`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_GROWTH_RATE_RADIUS` | `int` |  |
| `MAX_CHARGE` | `int` |  |
| `MAX_DECAY_FACTOR` | `float` |  |
| `SHRIEKER_PLACEMENT_RATE` | `int` |  |

## Methods

### SculkSpreader

```java
public SculkSpreader(boolean p_222248_, TagKey<Block> p_222249_, int p_222250_, int p_222251_, int p_222252_, int p_222253_)
```

**Parameters:**

- `p_222248_` (`boolean`)
- `p_222249_` (`TagKey<Block>`)
- `p_222250_` (`int`)
- `p_222251_` (`int`)
- `p_222252_` (`int`)
- `p_222253_` (`int`)

**Returns:** `public`

### createLevelSpreader

```java
public static SculkSpreader createLevelSpreader()
```

**Returns:** `public static SculkSpreader`

### SculkSpreader

```java
return new SculkSpreader()
```

**Returns:** `return new`

### createWorldGenSpreader

```java
public static SculkSpreader createWorldGenSpreader()
```

**Returns:** `public static SculkSpreader`

### SculkSpreader

```java
return new SculkSpreader()
```

**Returns:** `return new`

### replaceableBlocks

```java
public TagKey<Block> replaceableBlocks()
```

**Returns:** `public TagKey<Block>`

### growthSpawnCost

```java
public int growthSpawnCost()
```

**Returns:** `public int`

### noGrowthRadius

```java
public int noGrowthRadius()
```

**Returns:** `public int`

### chargeDecayRate

```java
public int chargeDecayRate()
```

**Returns:** `public int`

### additionalDecayRate

```java
public int additionalDecayRate()
```

**Returns:** `public int`

### isWorldGeneration

```java
public boolean isWorldGeneration()
```

**Returns:** `public boolean`

### getCursors

```java
public List<SculkSpreader.ChargeCursor> getCursors()
```

**Returns:** `List<SculkSpreader.ChargeCursor>`

### clear

```java
public void clear()
```

**Returns:** `public void`

### load

```java
public void load(CompoundTag p_222270_)
```

**Parameters:**

- `p_222270_` (`CompoundTag`)

**Returns:** `public void`

### save

```java
public void save(CompoundTag p_222276_)
```

**Parameters:**

- `p_222276_` (`CompoundTag`)

**Returns:** `public void`

### addCursors

```java
public void addCursors(BlockPos p_222267_, int p_222268_)
```

**Parameters:**

- `p_222267_` (`BlockPos`)
- `p_222268_` (`int`)

**Returns:** `public void`

### addCursor

```java
private void addCursor(SculkSpreader.ChargeCursor p_222261_)
```

**Parameters:**

- `p_222261_` (`SculkSpreader.ChargeCursor`)

**Returns:** `private void`

### updateCursors

```java
public void updateCursors(LevelAccessor p_222256_, BlockPos p_222257_, RandomSource p_222258_, boolean p_222259_)
```

**Parameters:**

- `p_222256_` (`LevelAccessor`)
- `p_222257_` (`BlockPos`)
- `p_222258_` (`RandomSource`)
- `p_222259_` (`boolean`)

**Returns:** `public void`

### ChargeCursor

```java
private ChargeCursor(BlockPos p_222299_, int p_222300_, int p_222301_, int p_222302_, Optional<Set<Direction>> p_222303_)
```

**Parameters:**

- `p_222299_` (`BlockPos`)
- `p_222300_` (`int`)
- `p_222301_` (`int`)
- `p_222302_` (`int`)
- `p_222303_` (`Optional<Set<Direction>>`)

**Returns:** `private`

### ChargeCursor

```java
public ChargeCursor(BlockPos p_222296_, int p_222297_)
```

**Parameters:**

- `p_222296_` (`BlockPos`)
- `p_222297_` (`int`)

**Returns:** `public`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### getCharge

```java
public int getCharge()
```

**Returns:** `public int`

### getDecayDelay

```java
public int getDecayDelay()
```

**Returns:** `public int`

### getFacingData

```java
public Set<Direction> getFacingData()
```

**Returns:** `Set<Direction>`

### shouldUpdate

```java
private boolean shouldUpdate(LevelAccessor p_222326_, BlockPos p_222327_, boolean p_222328_)
```

**Parameters:**

- `p_222326_` (`LevelAccessor`)
- `p_222327_` (`BlockPos`)
- `p_222328_` (`boolean`)

**Returns:** `private boolean`

### update

```java
public void update(LevelAccessor p_222312_, BlockPos p_222313_, RandomSource p_222314_, SculkSpreader p_222315_, boolean p_222316_)
```

**Parameters:**

- `p_222312_` (`LevelAccessor`)
- `p_222313_` (`BlockPos`)
- `p_222314_` (`RandomSource`)
- `p_222315_` (`SculkSpreader`)
- `p_222316_` (`boolean`)

**Returns:** `public void`

### mergeWith

```java
void mergeWith(SculkSpreader.ChargeCursor p_222332_)
```

**Parameters:**

- `p_222332_` (`SculkSpreader.ChargeCursor`)

### getBlockBehaviour

```java
private static SculkBehaviour getBlockBehaviour(BlockState p_222334_)
```

**Parameters:**

- `p_222334_` (`BlockState`)

**Returns:** `private static SculkBehaviour`

### getRandomizedNonCornerNeighbourOffsets

```java
private static List<Vec3i> getRandomizedNonCornerNeighbourOffsets(RandomSource p_222306_)
```

**Parameters:**

- `p_222306_` (`RandomSource`)

**Returns:** `private static List<Vec3i>`

### isMovementUnobstructed

```java
private static boolean isMovementUnobstructed(LevelAccessor p_222318_, BlockPos p_222319_, BlockPos p_222320_)
```

**Parameters:**

- `p_222318_` (`LevelAccessor`)
- `p_222319_` (`BlockPos`)
- `p_222320_` (`BlockPos`)

**Returns:** `private static boolean`

### isUnobstructed

```java
private static boolean isUnobstructed(LevelAccessor p_222322_, BlockPos p_222323_, Direction p_222324_)
```

**Parameters:**

- `p_222322_` (`LevelAccessor`)
- `p_222323_` (`BlockPos`)
- `p_222324_` (`Direction`)

**Returns:** `private static boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ChargeCursor` | class |  |
