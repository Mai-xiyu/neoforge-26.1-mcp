# KelpBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `GrowingPlantHeadBlock`
**Implements:** `LiquidBlockContainer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<KelpBlock>` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<KelpBlock> codec()
```

**Returns:** `MapCodec<KelpBlock>`

### KelpBlock

```java
public KelpBlock(BlockBehaviour.Properties p_54300_)
```

**Parameters:**

- `p_54300_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canGrowInto

```java
protected boolean canGrowInto(BlockState p_54321_)
```

**Parameters:**

- `p_54321_` (`BlockState`)

**Returns:** `boolean`

### getBodyBlock

```java
protected Block getBodyBlock()
```

**Returns:** `Block`

### canAttachTo

```java
protected boolean canAttachTo(BlockState p_153455_)
```

**Parameters:**

- `p_153455_` (`BlockState`)

**Returns:** `boolean`

### canPlaceLiquid

```java
public boolean canPlaceLiquid(Player p_295152_, BlockGetter p_54304_, BlockPos p_54305_, BlockState p_54306_, Fluid p_54307_)
```

**Parameters:**

- `p_295152_` (`Player`)
- `p_54304_` (`BlockGetter`)
- `p_54305_` (`BlockPos`)
- `p_54306_` (`BlockState`)
- `p_54307_` (`Fluid`)

**Returns:** `boolean`

### placeLiquid

```java
public boolean placeLiquid(LevelAccessor p_54309_, BlockPos p_54310_, BlockState p_54311_, FluidState p_54312_)
```

**Parameters:**

- `p_54309_` (`LevelAccessor`)
- `p_54310_` (`BlockPos`)
- `p_54311_` (`BlockState`)
- `p_54312_` (`FluidState`)

**Returns:** `boolean`

### getBlocksToGrowWhenBonemealed

```java
protected int getBlocksToGrowWhenBonemealed(RandomSource p_221366_)
```

**Parameters:**

- `p_221366_` (`RandomSource`)

**Returns:** `int`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_54302_)
```

**Parameters:**

- `p_54302_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_54319_)
```

**Parameters:**

- `p_54319_` (`BlockState`)

**Returns:** `FluidState`
