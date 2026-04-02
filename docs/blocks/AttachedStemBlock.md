# AttachedStemBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AttachedStemBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `AABB_OFFSET` | `float` |  |

## Methods

### codec

```java
public MapCodec<AttachedStemBlock> codec()
```

**Returns:** `MapCodec<AttachedStemBlock>`

### AttachedStemBlock

```java
public AttachedStemBlock(ResourceKey<Block> p_304582_, ResourceKey<Block> p_304450_, ResourceKey<Item> p_304828_, BlockBehaviour.Properties p_152062_)
```

**Parameters:**

- `p_304582_` (`ResourceKey<Block>`)
- `p_304450_` (`ResourceKey<Block>`)
- `p_304828_` (`ResourceKey<Item>`)
- `p_152062_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_48858_, BlockGetter p_48859_, BlockPos p_48860_, CollisionContext p_48861_)
```

**Parameters:**

- `p_48858_` (`BlockState`)
- `p_48859_` (`BlockGetter`)
- `p_48860_` (`BlockPos`)
- `p_48861_` (`CollisionContext`)

**Returns:** `VoxelShape`

### updateShape

```java
protected BlockState updateShape(BlockState p_48848_, Direction p_48849_, BlockState p_48850_, LevelAccessor p_48851_, BlockPos p_48852_, BlockPos p_48853_)
```

**Parameters:**

- `p_48848_` (`BlockState`)
- `p_48849_` (`Direction`)
- `p_48850_` (`BlockState`)
- `p_48851_` (`LevelAccessor`)
- `p_48852_` (`BlockPos`)
- `p_48853_` (`BlockPos`)

**Returns:** `BlockState`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_48863_, BlockGetter p_48864_, BlockPos p_48865_)
```

**Parameters:**

- `p_48863_` (`BlockState`)
- `p_48864_` (`BlockGetter`)
- `p_48865_` (`BlockPos`)

**Returns:** `boolean`

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304950_, BlockPos p_48839_, BlockState p_48840_)
```

**Parameters:**

- `p_304950_` (`LevelReader`)
- `p_48839_` (`BlockPos`)
- `p_48840_` (`BlockState`)

**Returns:** `ItemStack`

### rotate

```java
protected BlockState rotate(BlockState p_48845_, Rotation p_48846_)
```

**Parameters:**

- `p_48845_` (`BlockState`)
- `p_48846_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_48842_, Mirror p_48843_)
```

**Parameters:**

- `p_48842_` (`BlockState`)
- `p_48843_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_48855_)
```

**Parameters:**

- `p_48855_` (`StateDefinition.Builder<Block, BlockState>`)
