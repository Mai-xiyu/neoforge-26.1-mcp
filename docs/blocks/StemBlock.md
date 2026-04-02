# StemBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<StemBlock>` |  |
| `MAX_AGE` | `int` |  |
| `AGE` | `IntegerProperty` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE_BY_AGE` | `VoxelShape[]` |  |

## Methods

### codec

```java
public MapCodec<StemBlock> codec()
```

**Returns:** `MapCodec<StemBlock>`

### StemBlock

```java
public StemBlock(ResourceKey<Block> p_304976_, ResourceKey<Block> p_304671_, ResourceKey<Item> p_304942_, BlockBehaviour.Properties p_154730_)
```

**Parameters:**

- `p_304976_` (`ResourceKey<Block>`)
- `p_304671_` (`ResourceKey<Block>`)
- `p_304942_` (`ResourceKey<Item>`)
- `p_154730_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_57047_, BlockGetter p_57048_, BlockPos p_57049_, CollisionContext p_57050_)
```

**Parameters:**

- `p_57047_` (`BlockState`)
- `p_57048_` (`BlockGetter`)
- `p_57049_` (`BlockPos`)
- `p_57050_` (`CollisionContext`)

**Returns:** `VoxelShape`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_57053_, BlockGetter p_57054_, BlockPos p_57055_)
```

**Parameters:**

- `p_57053_` (`BlockState`)
- `p_57054_` (`BlockGetter`)
- `p_57055_` (`BlockPos`)

**Returns:** `boolean`

### randomTick

```java
protected void randomTick(BlockState p_222538_, ServerLevel p_222539_, BlockPos p_222540_, RandomSource p_222541_)
```

**Parameters:**

- `p_222538_` (`BlockState`)
- `p_222539_` (`ServerLevel`)
- `p_222540_` (`BlockPos`)
- `p_222541_` (`RandomSource`)

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304982_, BlockPos p_57027_, BlockState p_57028_)
```

**Parameters:**

- `p_304982_` (`LevelReader`)
- `p_57027_` (`BlockPos`)
- `p_57028_` (`BlockState`)

**Returns:** `ItemStack`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_255699_, BlockPos p_57031_, BlockState p_57032_)
```

**Parameters:**

- `p_255699_` (`LevelReader`)
- `p_57031_` (`BlockPos`)
- `p_57032_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_222533_, RandomSource p_222534_, BlockPos p_222535_, BlockState p_222536_)
```

**Parameters:**

- `p_222533_` (`Level`)
- `p_222534_` (`RandomSource`)
- `p_222535_` (`BlockPos`)
- `p_222536_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_222528_, RandomSource p_222529_, BlockPos p_222530_, BlockState p_222531_)
```

**Parameters:**

- `p_222528_` (`ServerLevel`)
- `p_222529_` (`RandomSource`)
- `p_222530_` (`BlockPos`)
- `p_222531_` (`BlockState`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57040_)
```

**Parameters:**

- `p_57040_` (`StateDefinition.Builder<Block, BlockState>`)
