# SeagrassBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `BonemealableBlock`, `LiquidBlockContainer`, `net.neoforged.neoforge.common.IShearable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SeagrassBlock>` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<SeagrassBlock> codec()
```

**Returns:** `MapCodec<SeagrassBlock>`

### SeagrassBlock

```java
public SeagrassBlock(BlockBehaviour.Properties p_154496_)
```

**Parameters:**

- `p_154496_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_154525_, BlockGetter p_154526_, BlockPos p_154527_, CollisionContext p_154528_)
```

**Parameters:**

- `p_154525_` (`BlockState`)
- `p_154526_` (`BlockGetter`)
- `p_154527_` (`BlockPos`)
- `p_154528_` (`CollisionContext`)

**Returns:** `VoxelShape`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_154539_, BlockGetter p_154540_, BlockPos p_154541_)
```

**Parameters:**

- `p_154539_` (`BlockState`)
- `p_154540_` (`BlockGetter`)
- `p_154541_` (`BlockPos`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_154503_)
```

**Parameters:**

- `p_154503_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_154530_, Direction p_154531_, BlockState p_154532_, LevelAccessor p_154533_, BlockPos p_154534_, BlockPos p_154535_)
```

**Parameters:**

- `p_154530_` (`BlockState`)
- `p_154531_` (`Direction`)
- `p_154532_` (`BlockState`)
- `p_154533_` (`LevelAccessor`)
- `p_154534_` (`BlockPos`)
- `p_154535_` (`BlockPos`)

**Returns:** `BlockState`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_295512_, BlockPos p_154506_, BlockState p_154507_)
```

**Parameters:**

- `p_295512_` (`LevelReader`)
- `p_154506_` (`BlockPos`)
- `p_154507_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_222428_, RandomSource p_222429_, BlockPos p_222430_, BlockState p_222431_)
```

**Parameters:**

- `p_222428_` (`Level`)
- `p_222429_` (`RandomSource`)
- `p_222430_` (`BlockPos`)
- `p_222431_` (`BlockState`)

**Returns:** `boolean`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_154537_)
```

**Parameters:**

- `p_154537_` (`BlockState`)

**Returns:** `FluidState`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_222423_, RandomSource p_222424_, BlockPos p_222425_, BlockState p_222426_)
```

**Parameters:**

- `p_222423_` (`ServerLevel`)
- `p_222424_` (`RandomSource`)
- `p_222425_` (`BlockPos`)
- `p_222426_` (`BlockState`)

### canPlaceLiquid

```java
public boolean canPlaceLiquid(Player p_296226_, BlockGetter p_296449_, BlockPos p_154511_, BlockState p_154512_, Fluid p_295712_)
```

**Parameters:**

- `p_296226_` (`Player`)
- `p_296449_` (`BlockGetter`)
- `p_154511_` (`BlockPos`)
- `p_154512_` (`BlockState`)
- `p_295712_` (`Fluid`)

**Returns:** `boolean`

### placeLiquid

```java
public boolean placeLiquid(LevelAccessor p_154520_, BlockPos p_154521_, BlockState p_154522_, FluidState p_154523_)
```

**Parameters:**

- `p_154520_` (`LevelAccessor`)
- `p_154521_` (`BlockPos`)
- `p_154522_` (`BlockState`)
- `p_154523_` (`FluidState`)

**Returns:** `boolean`
