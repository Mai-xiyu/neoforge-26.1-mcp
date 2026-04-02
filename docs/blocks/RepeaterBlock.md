# RepeaterBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `DiodeBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RepeaterBlock>` |  |
| `LOCKED` | `BooleanProperty` |  |
| `DELAY` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<RepeaterBlock> codec()
```

**Returns:** `MapCodec<RepeaterBlock>`

### RepeaterBlock

```java
public RepeaterBlock(BlockBehaviour.Properties p_55801_)
```

**Parameters:**

- `p_55801_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_55809_, Level p_55810_, BlockPos p_55811_, Player p_55812_, BlockHitResult p_55814_)
```

**Parameters:**

- `p_55809_` (`BlockState`)
- `p_55810_` (`Level`)
- `p_55811_` (`BlockPos`)
- `p_55812_` (`Player`)
- `p_55814_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getDelay

```java
protected int getDelay(BlockState p_55830_)
```

**Parameters:**

- `p_55830_` (`BlockState`)

**Returns:** `int`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_55803_)
```

**Parameters:**

- `p_55803_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_55821_, Direction p_55822_, BlockState p_55823_, LevelAccessor p_55824_, BlockPos p_55825_, BlockPos p_55826_)
```

**Parameters:**

- `p_55821_` (`BlockState`)
- `p_55822_` (`Direction`)
- `p_55823_` (`BlockState`)
- `p_55824_` (`LevelAccessor`)
- `p_55825_` (`BlockPos`)
- `p_55826_` (`BlockPos`)

**Returns:** `BlockState`

### isLocked

```java
public boolean isLocked(LevelReader p_55805_, BlockPos p_55806_, BlockState p_55807_)
```

**Parameters:**

- `p_55805_` (`LevelReader`)
- `p_55806_` (`BlockPos`)
- `p_55807_` (`BlockState`)

**Returns:** `boolean`

### sideInputDiodesOnly

```java
protected boolean sideInputDiodesOnly()
```

**Returns:** `boolean`

### animateTick

```java
public void animateTick(BlockState p_221964_, Level p_221965_, BlockPos p_221966_, RandomSource p_221967_)
```

**Parameters:**

- `p_221964_` (`BlockState`)
- `p_221965_` (`Level`)
- `p_221966_` (`BlockPos`)
- `p_221967_` (`RandomSource`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55828_)
```

**Parameters:**

- `p_55828_` (`StateDefinition.Builder<Block, BlockState>`)
