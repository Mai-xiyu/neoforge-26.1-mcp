# NetherWartBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<NetherWartBlock>` |  |
| `MAX_AGE` | `int` |  |
| `AGE` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<NetherWartBlock> codec()
```

**Returns:** `MapCodec<NetherWartBlock>`

### NetherWartBlock

```java
public NetherWartBlock(BlockBehaviour.Properties p_54971_)
```

**Parameters:**

- `p_54971_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_54986_, BlockGetter p_54987_, BlockPos p_54988_, CollisionContext p_54989_)
```

**Parameters:**

- `p_54986_` (`BlockState`)
- `p_54987_` (`BlockGetter`)
- `p_54988_` (`BlockPos`)
- `p_54989_` (`CollisionContext`)

**Returns:** `VoxelShape`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_54991_, BlockGetter p_54992_, BlockPos p_54993_)
```

**Parameters:**

- `p_54991_` (`BlockState`)
- `p_54992_` (`BlockGetter`)
- `p_54993_` (`BlockPos`)

**Returns:** `boolean`

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_54979_)
```

**Parameters:**

- `p_54979_` (`BlockState`)

**Returns:** `boolean`

### randomTick

```java
protected void randomTick(BlockState p_221806_, ServerLevel p_221807_, BlockPos p_221808_, RandomSource p_221809_)
```

**Parameters:**

- `p_221806_` (`BlockState`)
- `p_221807_` (`ServerLevel`)
- `p_221808_` (`BlockPos`)
- `p_221809_` (`RandomSource`)

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304797_, BlockPos p_54974_, BlockState p_54975_)
```

**Parameters:**

- `p_304797_` (`LevelReader`)
- `p_54974_` (`BlockPos`)
- `p_54975_` (`BlockState`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54977_)
```

**Parameters:**

- `p_54977_` (`StateDefinition.Builder<Block, BlockState>`)
