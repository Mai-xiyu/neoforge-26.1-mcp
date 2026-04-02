# CommandBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`
**Implements:** `GameMasterBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CommandBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `CONDITIONAL` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<CommandBlock> codec()
```

**Returns:** `MapCodec<CommandBlock>`

### CommandBlock

```java
public CommandBlock(boolean p_153081_, BlockBehaviour.Properties p_153080_)
```

**Parameters:**

- `p_153081_` (`boolean`)
- `p_153080_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153083_, BlockState p_153084_)
```

**Parameters:**

- `p_153083_` (`BlockPos`)
- `p_153084_` (`BlockState`)

**Returns:** `BlockEntity`

### neighborChanged

```java
protected void neighborChanged(BlockState p_51838_, Level p_51839_, BlockPos p_51840_, Block p_51841_, BlockPos p_51842_, boolean p_51843_)
```

**Parameters:**

- `p_51838_` (`BlockState`)
- `p_51839_` (`Level`)
- `p_51840_` (`BlockPos`)
- `p_51841_` (`Block`)
- `p_51842_` (`BlockPos`)
- `p_51843_` (`boolean`)

### tick

```java
protected void tick(BlockState p_221005_, ServerLevel p_221006_, BlockPos p_221007_, RandomSource p_221008_)
```

**Parameters:**

- `p_221005_` (`BlockState`)
- `p_221006_` (`ServerLevel`)
- `p_221007_` (`BlockPos`)
- `p_221008_` (`RandomSource`)

### execute

```java
private void execute(BlockState p_51832_, Level p_51833_, BlockPos p_51834_, BaseCommandBlock p_51835_, boolean p_51836_)
```

**Parameters:**

- `p_51832_` (`BlockState`)
- `p_51833_` (`Level`)
- `p_51834_` (`BlockPos`)
- `p_51835_` (`BaseCommandBlock`)
- `p_51836_` (`boolean`)

**Returns:** `private void`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_51825_, Level p_51826_, BlockPos p_51827_, Player p_51828_, BlockHitResult p_51830_)
```

**Parameters:**

- `p_51825_` (`BlockState`)
- `p_51826_` (`Level`)
- `p_51827_` (`BlockPos`)
- `p_51828_` (`Player`)
- `p_51830_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_51814_)
```

**Parameters:**

- `p_51814_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_51821_, Level p_51822_, BlockPos p_51823_)
```

**Parameters:**

- `p_51821_` (`BlockState`)
- `p_51822_` (`Level`)
- `p_51823_` (`BlockPos`)

**Returns:** `int`

### setPlacedBy

```java
public void setPlacedBy(Level p_51804_, BlockPos p_51805_, BlockState p_51806_, LivingEntity p_51807_, ItemStack p_51808_)
```

**Parameters:**

- `p_51804_` (`Level`)
- `p_51805_` (`BlockPos`)
- `p_51806_` (`BlockState`)
- `p_51807_` (`LivingEntity`)
- `p_51808_` (`ItemStack`)

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_51853_)
```

**Parameters:**

- `p_51853_` (`BlockState`)

**Returns:** `RenderShape`

### rotate

```java
protected BlockState rotate(BlockState p_51848_, Rotation p_51849_)
```

**Parameters:**

- `p_51848_` (`BlockState`)
- `p_51849_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_51845_, Mirror p_51846_)
```

**Parameters:**

- `p_51845_` (`BlockState`)
- `p_51846_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51851_)
```

**Parameters:**

- `p_51851_` (`StateDefinition.Builder<Block, BlockState>`)

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_51800_)
```

**Parameters:**

- `p_51800_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### executeChain

```java
private static void executeChain(Level p_51810_, BlockPos p_51811_, Direction p_51812_)
```

**Parameters:**

- `p_51810_` (`Level`)
- `p_51811_` (`BlockPos`)
- `p_51812_` (`Direction`)

**Returns:** `private static void`
