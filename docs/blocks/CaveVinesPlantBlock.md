# CaveVinesPlantBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `GrowingPlantBodyBlock`
**Implements:** `BonemealableBlock`, `CaveVines`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CaveVinesPlantBlock>` |  |

## Methods

### codec

```java
public MapCodec<CaveVinesPlantBlock> codec()
```

**Returns:** `MapCodec<CaveVinesPlantBlock>`

### CaveVinesPlantBlock

```java
public CaveVinesPlantBlock(BlockBehaviour.Properties p_153000_)
```

**Parameters:**

- `p_153000_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getHeadBlock

```java
protected GrowingPlantHeadBlock getHeadBlock()
```

**Returns:** `GrowingPlantHeadBlock`

### updateHeadAfterConvertedFromBody

```java
protected BlockState updateHeadAfterConvertedFromBody(BlockState p_153028_, BlockState p_153029_)
```

**Parameters:**

- `p_153028_` (`BlockState`)
- `p_153029_` (`BlockState`)

**Returns:** `BlockState`

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304444_, BlockPos p_153008_, BlockState p_153009_)
```

**Parameters:**

- `p_304444_` (`LevelReader`)
- `p_153008_` (`BlockPos`)
- `p_153009_` (`BlockState`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_153021_, Level p_153022_, BlockPos p_153023_, Player p_153024_, BlockHitResult p_153026_)
```

**Parameters:**

- `p_153021_` (`BlockState`)
- `p_153022_` (`Level`)
- `p_153023_` (`BlockPos`)
- `p_153024_` (`Player`)
- `p_153026_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_153031_)
```

**Parameters:**

- `p_153031_` (`StateDefinition.Builder<Block, BlockState>`)

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_255942_, BlockPos p_153012_, BlockState p_153013_)
```

**Parameters:**

- `p_255942_` (`LevelReader`)
- `p_153012_` (`BlockPos`)
- `p_153013_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_220943_, RandomSource p_220944_, BlockPos p_220945_, BlockState p_220946_)
```

**Parameters:**

- `p_220943_` (`Level`)
- `p_220944_` (`RandomSource`)
- `p_220945_` (`BlockPos`)
- `p_220946_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_220938_, RandomSource p_220939_, BlockPos p_220940_, BlockState p_220941_)
```

**Parameters:**

- `p_220938_` (`ServerLevel`)
- `p_220939_` (`RandomSource`)
- `p_220940_` (`BlockPos`)
- `p_220941_` (`BlockState`)
