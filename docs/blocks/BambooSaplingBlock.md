# BambooSaplingBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BambooSaplingBlock>` |  |
| `SAPLING_AABB_OFFSET` | `float` |  |
| `SAPLING_SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<BambooSaplingBlock> codec()
```

**Returns:** `MapCodec<BambooSaplingBlock>`

### BambooSaplingBlock

```java
public BambooSaplingBlock(BlockBehaviour.Properties p_48957_)
```

**Parameters:**

- `p_48957_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_49003_, BlockGetter p_49004_, BlockPos p_49005_, CollisionContext p_49006_)
```

**Parameters:**

- `p_49003_` (`BlockState`)
- `p_49004_` (`BlockGetter`)
- `p_49005_` (`BlockPos`)
- `p_49006_` (`CollisionContext`)

**Returns:** `VoxelShape`

### randomTick

```java
protected void randomTick(BlockState p_220753_, ServerLevel p_220754_, BlockPos p_220755_, RandomSource p_220756_)
```

**Parameters:**

- `p_220753_` (`BlockState`)
- `p_220754_` (`ServerLevel`)
- `p_220755_` (`BlockPos`)
- `p_220756_` (`RandomSource`)

### canSurvive

```java
protected boolean canSurvive(BlockState p_48986_, LevelReader p_48987_, BlockPos p_48988_)
```

**Parameters:**

- `p_48986_` (`BlockState`)
- `p_48987_` (`LevelReader`)
- `p_48988_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_48990_, Direction p_48991_, BlockState p_48992_, LevelAccessor p_48993_, BlockPos p_48994_, BlockPos p_48995_)
```

**Parameters:**

- `p_48990_` (`BlockState`)
- `p_48991_` (`Direction`)
- `p_48992_` (`BlockState`)
- `p_48993_` (`LevelAccessor`)
- `p_48994_` (`BlockPos`)
- `p_48995_` (`BlockPos`)

**Returns:** `BlockState`

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304956_, BlockPos p_48965_, BlockState p_48966_)
```

**Parameters:**

- `p_304956_` (`LevelReader`)
- `p_48965_` (`BlockPos`)
- `p_48966_` (`BlockState`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256136_, BlockPos p_256527_, BlockState p_255620_)
```

**Parameters:**

- `p_256136_` (`LevelReader`)
- `p_256527_` (`BlockPos`)
- `p_255620_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_220748_, RandomSource p_220749_, BlockPos p_220750_, BlockState p_220751_)
```

**Parameters:**

- `p_220748_` (`Level`)
- `p_220749_` (`RandomSource`)
- `p_220750_` (`BlockPos`)
- `p_220751_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_220743_, RandomSource p_220744_, BlockPos p_220745_, BlockState p_220746_)
```

**Parameters:**

- `p_220743_` (`ServerLevel`)
- `p_220744_` (`RandomSource`)
- `p_220745_` (`BlockPos`)
- `p_220746_` (`BlockState`)

### getDestroyProgress

```java
protected float getDestroyProgress(BlockState p_48981_, Player p_48982_, BlockGetter p_48983_, BlockPos p_48984_)
```

**Parameters:**

- `p_48981_` (`BlockState`)
- `p_48982_` (`Player`)
- `p_48983_` (`BlockGetter`)
- `p_48984_` (`BlockPos`)

**Returns:** `float`

### growBamboo

```java
protected void growBamboo(Level p_48973_, BlockPos p_48974_)
```

**Parameters:**

- `p_48973_` (`Level`)
- `p_48974_` (`BlockPos`)

**Returns:** `protected void`
