# CandleCakeBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractCandleBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CandleCakeBlock>` |  |
| `LIT` | `BooleanProperty` |  |
| `AABB_OFFSET` | `float` |  |
| `CAKE_SHAPE` | `VoxelShape` |  |
| `CANDLE_SHAPE` | `VoxelShape` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<CandleCakeBlock> codec()
```

**Returns:** `MapCodec<CandleCakeBlock>`

### CandleCakeBlock

```java
public CandleCakeBlock(Block p_152859_, BlockBehaviour.Properties p_152860_)
```

**Parameters:**

- `p_152859_` (`Block`)
- `p_152860_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getParticleOffsets

```java
protected Iterable<Vec3> getParticleOffsets(BlockState p_152868_)
```

**Parameters:**

- `p_152868_` (`BlockState`)

**Returns:** `Iterable<Vec3>`

### getShape

```java
protected VoxelShape getShape(BlockState p_152875_, BlockGetter p_152876_, BlockPos p_152877_, CollisionContext p_152878_)
```

**Parameters:**

- `p_152875_` (`BlockState`)
- `p_152876_` (`BlockGetter`)
- `p_152877_` (`BlockPos`)
- `p_152878_` (`CollisionContext`)

**Returns:** `VoxelShape`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316571_, BlockState p_316514_, Level p_316171_, BlockPos p_316112_, Player p_316172_, InteractionHand p_316257_, BlockHitResult p_316286_)
```

**Parameters:**

- `p_316571_` (`ItemStack`)
- `p_316514_` (`BlockState`)
- `p_316171_` (`Level`)
- `p_316112_` (`BlockPos`)
- `p_316172_` (`Player`)
- `p_316257_` (`InteractionHand`)
- `p_316286_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### extinguish

```java
 extinguish()
```

**Returns:** ``

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_316519_, Level p_316226_, BlockPos p_316122_, Player p_316438_, BlockHitResult p_316849_)
```

**Parameters:**

- `p_316519_` (`BlockState`)
- `p_316226_` (`Level`)
- `p_316122_` (`BlockPos`)
- `p_316438_` (`Player`)
- `p_316849_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### dropResources

```java
 dropResources()
```

**Returns:** ``

### candleHit

```java
private static boolean candleHit(BlockHitResult p_152907_)
```

**Parameters:**

- `p_152907_` (`BlockHitResult`)

**Returns:** `private static boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_152905_)
```

**Parameters:**

- `p_152905_` (`StateDefinition.Builder<Block, BlockState>`)

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304662_, BlockPos p_152863_, BlockState p_152864_)
```

**Parameters:**

- `p_304662_` (`LevelReader`)
- `p_152863_` (`BlockPos`)
- `p_152864_` (`BlockState`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### updateShape

```java
protected BlockState updateShape(BlockState p_152898_, Direction p_152899_, BlockState p_152900_, LevelAccessor p_152901_, BlockPos p_152902_, BlockPos p_152903_)
```

**Parameters:**

- `p_152898_` (`BlockState`)
- `p_152899_` (`Direction`)
- `p_152900_` (`BlockState`)
- `p_152901_` (`LevelAccessor`)
- `p_152902_` (`BlockPos`)
- `p_152903_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_152891_, LevelReader p_152892_, BlockPos p_152893_)
```

**Parameters:**

- `p_152891_` (`BlockState`)
- `p_152892_` (`LevelReader`)
- `p_152893_` (`BlockPos`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_152880_, Level p_152881_, BlockPos p_152882_)
```

**Parameters:**

- `p_152880_` (`BlockState`)
- `p_152881_` (`Level`)
- `p_152882_` (`BlockPos`)

**Returns:** `int`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_152909_)
```

**Parameters:**

- `p_152909_` (`BlockState`)

**Returns:** `boolean`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_152870_, PathComputationType p_152873_)
```

**Parameters:**

- `p_152870_` (`BlockState`)
- `p_152873_` (`PathComputationType`)

**Returns:** `boolean`

### byCandle

```java
public static BlockState byCandle(CandleBlock p_316552_)
```

**Parameters:**

- `p_316552_` (`CandleBlock`)

**Returns:** `public static BlockState`

### canLight

```java
public static boolean canLight(BlockState p_152911_)
```

**Parameters:**

- `p_152911_` (`BlockState`)

**Returns:** `public static boolean`
