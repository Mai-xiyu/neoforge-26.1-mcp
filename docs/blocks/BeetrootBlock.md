# BeetrootBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `CropBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BeetrootBlock>` |  |
| `MAX_AGE` | `int` |  |
| `AGE` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<BeetrootBlock> codec()
```

**Returns:** `MapCodec<BeetrootBlock>`

### BeetrootBlock

```java
public BeetrootBlock(BlockBehaviour.Properties p_49661_)
```

**Parameters:**

- `p_49661_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

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

### randomTick

```java
protected void randomTick(BlockState p_220778_, ServerLevel p_220779_, BlockPos p_220780_, RandomSource p_220781_)
```

**Parameters:**

- `p_220778_` (`BlockState`)
- `p_220779_` (`ServerLevel`)
- `p_220780_` (`BlockPos`)
- `p_220781_` (`RandomSource`)

### getBonemealAgeIncrease

```java
protected int getBonemealAgeIncrease(Level p_49663_)
```

**Parameters:**

- `p_49663_` (`Level`)

**Returns:** `int`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_49665_)
```

**Parameters:**

- `p_49665_` (`StateDefinition.Builder<Block, BlockState>`)

### getShape

```java
protected VoxelShape getShape(BlockState p_49672_, BlockGetter p_49673_, BlockPos p_49674_, CollisionContext p_49675_)
```

**Parameters:**

- `p_49672_` (`BlockState`)
- `p_49673_` (`BlockGetter`)
- `p_49674_` (`BlockPos`)
- `p_49675_` (`CollisionContext`)

**Returns:** `VoxelShape`
