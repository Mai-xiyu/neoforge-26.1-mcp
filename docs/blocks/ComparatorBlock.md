# ComparatorBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `DiodeBlock`
**Implements:** `EntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ComparatorBlock>` |  |
| `MODE` | `EnumProperty<ComparatorMode>` |  |

## Methods

### codec

```java
public MapCodec<ComparatorBlock> codec()
```

**Returns:** `MapCodec<ComparatorBlock>`

### ComparatorBlock

```java
public ComparatorBlock(BlockBehaviour.Properties p_51857_)
```

**Parameters:**

- `p_51857_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDelay

```java
protected int getDelay(BlockState p_51912_)
```

**Parameters:**

- `p_51912_` (`BlockState`)

**Returns:** `int`

### updateShape

```java
public BlockState updateShape(BlockState p_301069_, Direction p_301249_, BlockState p_301318_, LevelAccessor p_301207_, BlockPos p_301025_, BlockPos p_301045_)
```

**Parameters:**

- `p_301069_` (`BlockState`)
- `p_301249_` (`Direction`)
- `p_301318_` (`BlockState`)
- `p_301207_` (`LevelAccessor`)
- `p_301025_` (`BlockPos`)
- `p_301045_` (`BlockPos`)

**Returns:** `BlockState`

### getOutputSignal

```java
protected int getOutputSignal(BlockGetter p_51892_, BlockPos p_51893_, BlockState p_51894_)
```

**Parameters:**

- `p_51892_` (`BlockGetter`)
- `p_51893_` (`BlockPos`)
- `p_51894_` (`BlockState`)

**Returns:** `int`

### calculateOutputSignal

```java
private int calculateOutputSignal(Level p_51904_, BlockPos p_51905_, BlockState p_51906_)
```

**Parameters:**

- `p_51904_` (`Level`)
- `p_51905_` (`BlockPos`)
- `p_51906_` (`BlockState`)

**Returns:** `private int`

### shouldTurnOn

```java
protected boolean shouldTurnOn(Level p_51861_, BlockPos p_51862_, BlockState p_51863_)
```

**Parameters:**

- `p_51861_` (`Level`)
- `p_51862_` (`BlockPos`)
- `p_51863_` (`BlockState`)

**Returns:** `boolean`

### getInputSignal

```java
protected int getInputSignal(Level p_51896_, BlockPos p_51897_, BlockState p_51898_)
```

**Parameters:**

- `p_51896_` (`Level`)
- `p_51897_` (`BlockPos`)
- `p_51898_` (`BlockState`)

**Returns:** `int`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_51880_, Level p_51881_, BlockPos p_51882_, Player p_51883_, BlockHitResult p_51885_)
```

**Parameters:**

- `p_51880_` (`BlockState`)
- `p_51881_` (`Level`)
- `p_51882_` (`BlockPos`)
- `p_51883_` (`Player`)
- `p_51885_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### checkTickOnNeighbor

```java
protected void checkTickOnNeighbor(Level p_51900_, BlockPos p_51901_, BlockState p_51902_)
```

**Parameters:**

- `p_51900_` (`Level`)
- `p_51901_` (`BlockPos`)
- `p_51902_` (`BlockState`)

### refreshOutputState

```java
private void refreshOutputState(Level p_51908_, BlockPos p_51909_, BlockState p_51910_)
```

**Parameters:**

- `p_51908_` (`Level`)
- `p_51909_` (`BlockPos`)
- `p_51910_` (`BlockState`)

**Returns:** `private void`

### tick

```java
protected void tick(BlockState p_221010_, ServerLevel p_221011_, BlockPos p_221012_, RandomSource p_221013_)
```

**Parameters:**

- `p_221010_` (`BlockState`)
- `p_221011_` (`ServerLevel`)
- `p_221012_` (`BlockPos`)
- `p_221013_` (`RandomSource`)

### triggerEvent

```java
protected boolean triggerEvent(BlockState p_51874_, Level p_51875_, BlockPos p_51876_, int p_51877_, int p_51878_)
```

**Parameters:**

- `p_51874_` (`BlockState`)
- `p_51875_` (`Level`)
- `p_51876_` (`BlockPos`)
- `p_51877_` (`int`)
- `p_51878_` (`int`)

**Returns:** `boolean`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153086_, BlockState p_153087_)
```

**Parameters:**

- `p_153086_` (`BlockPos`)
- `p_153087_` (`BlockState`)

**Returns:** `BlockEntity`

### ComparatorBlockEntity

```java
return new ComparatorBlockEntity()
```

**Returns:** `return new`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51887_)
```

**Parameters:**

- `p_51887_` (`StateDefinition.Builder<Block, BlockState>`)

### getWeakChanges

```java
public boolean getWeakChanges(BlockState state, net.minecraft.world.level.LevelReader world, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `world` (`net.minecraft.world.level.LevelReader`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### onNeighborChange

```java
public void onNeighborChange(BlockState state, net.minecraft.world.level.LevelReader world, BlockPos pos, BlockPos neighbor)
```

**Parameters:**

- `state` (`BlockState`)
- `world` (`net.minecraft.world.level.LevelReader`)
- `pos` (`BlockPos`)
- `neighbor` (`BlockPos`)
