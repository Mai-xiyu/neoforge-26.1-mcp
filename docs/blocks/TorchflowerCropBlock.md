# TorchflowerCropBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `CropBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TorchflowerCropBlock>` |  |
| `MAX_AGE` | `int` |  |
| `AGE` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<TorchflowerCropBlock> codec()
```

**Returns:** `MapCodec<TorchflowerCropBlock>`

### TorchflowerCropBlock

```java
public TorchflowerCropBlock(BlockBehaviour.Properties p_272642_)
```

**Parameters:**

- `p_272642_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_272679_)
```

**Parameters:**

- `p_272679_` (`StateDefinition.Builder<Block, BlockState>`)

### getShape

```java
public VoxelShape getShape(BlockState p_272748_, BlockGetter p_273408_, BlockPos p_272762_, CollisionContext p_272649_)
```

**Parameters:**

- `p_272748_` (`BlockState`)
- `p_273408_` (`BlockGetter`)
- `p_272762_` (`BlockPos`)
- `p_272649_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getAgeProperty

```java
protected IntegerProperty getAgeProperty()
```

**Returns:** `IntegerProperty`

### getMaxAge

```java
public int getMaxAge()
```

**Returns:** `int`

### getBaseSeedId

```java
protected ItemLike getBaseSeedId()
```

**Returns:** `ItemLike`

### getStateForAge

```java
public BlockState getStateForAge(int p_275698_)
```

**Parameters:**

- `p_275698_` (`int`)

**Returns:** `BlockState`

### randomTick

```java
public void randomTick(BlockState p_273361_, ServerLevel p_273515_, BlockPos p_273546_, RandomSource p_273261_)
```

**Parameters:**

- `p_273361_` (`BlockState`)
- `p_273515_` (`ServerLevel`)
- `p_273546_` (`BlockPos`)
- `p_273261_` (`RandomSource`)

### getBonemealAgeIncrease

```java
protected int getBonemealAgeIncrease(Level p_273475_)
```

**Parameters:**

- `p_273475_` (`Level`)

**Returns:** `int`
