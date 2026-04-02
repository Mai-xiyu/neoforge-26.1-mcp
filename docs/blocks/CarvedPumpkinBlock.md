# CarvedPumpkinBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HorizontalDirectionalBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CarvedPumpkinBlock>` |  |
| `FACING` | `DirectionProperty` |  |

## Methods

### codec

```java
public MapCodec<? extends CarvedPumpkinBlock> codec()
```

**Returns:** `MapCodec<? extends CarvedPumpkinBlock>`

### CarvedPumpkinBlock

```java
public CarvedPumpkinBlock(BlockBehaviour.Properties p_51375_)
```

**Parameters:**

- `p_51375_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onPlace

```java
protected void onPlace(BlockState p_51387_, Level p_51388_, BlockPos p_51389_, BlockState p_51390_, boolean p_51391_)
```

**Parameters:**

- `p_51387_` (`BlockState`)
- `p_51388_` (`Level`)
- `p_51389_` (`BlockPos`)
- `p_51390_` (`BlockState`)
- `p_51391_` (`boolean`)

### canSpawnGolem

```java
public boolean canSpawnGolem(LevelReader p_51382_, BlockPos p_51383_)
```

**Parameters:**

- `p_51382_` (`LevelReader`)
- `p_51383_` (`BlockPos`)

**Returns:** `public boolean`

### trySpawnGolem

```java
private void trySpawnGolem(Level p_51379_, BlockPos p_51380_)
```

**Parameters:**

- `p_51379_` (`Level`)
- `p_51380_` (`BlockPos`)

**Returns:** `private void`

### spawnGolemInWorld

```java
private static void spawnGolemInWorld(Level p_249110_, BlockPattern.BlockPatternMatch p_251293_, Entity p_251251_, BlockPos p_251189_)
```

**Parameters:**

- `p_249110_` (`Level`)
- `p_251293_` (`BlockPattern.BlockPatternMatch`)
- `p_251251_` (`Entity`)
- `p_251189_` (`BlockPos`)

**Returns:** `private static void`

### clearPatternBlocks

```java
 clearPatternBlocks()
```

**Returns:** ``

### updatePatternBlocks

```java
 updatePatternBlocks()
```

**Returns:** ``

### clearPatternBlocks

```java
public static void clearPatternBlocks(Level p_249604_, BlockPattern.BlockPatternMatch p_251190_)
```

**Parameters:**

- `p_249604_` (`Level`)
- `p_251190_` (`BlockPattern.BlockPatternMatch`)

**Returns:** `public static void`

### updatePatternBlocks

```java
public static void updatePatternBlocks(Level p_248711_, BlockPattern.BlockPatternMatch p_251935_)
```

**Parameters:**

- `p_248711_` (`Level`)
- `p_251935_` (`BlockPattern.BlockPatternMatch`)

**Returns:** `public static void`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_51377_)
```

**Parameters:**

- `p_51377_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51385_)
```

**Parameters:**

- `p_51385_` (`StateDefinition.Builder<Block, BlockState>`)

### getOrCreateSnowGolemBase

```java
private BlockPattern getOrCreateSnowGolemBase()
```

**Returns:** `private BlockPattern`

### getOrCreateSnowGolemFull

```java
private BlockPattern getOrCreateSnowGolemFull()
```

**Returns:** `private BlockPattern`

### getOrCreateIronGolemBase

```java
private BlockPattern getOrCreateIronGolemBase()
```

**Returns:** `private BlockPattern`

### getOrCreateIronGolemFull

```java
private BlockPattern getOrCreateIronGolemFull()
```

**Returns:** `private BlockPattern`
