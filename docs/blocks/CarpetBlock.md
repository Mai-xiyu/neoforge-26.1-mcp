# CarpetBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CarpetBlock>` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<? extends CarpetBlock> codec()
```

**Returns:** `MapCodec<? extends CarpetBlock>`

### CarpetBlock

```java
public CarpetBlock(BlockBehaviour.Properties p_152915_)
```

**Parameters:**

- `p_152915_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_152917_, BlockGetter p_152918_, BlockPos p_152919_, CollisionContext p_152920_)
```

**Parameters:**

- `p_152917_` (`BlockState`)
- `p_152918_` (`BlockGetter`)
- `p_152919_` (`BlockPos`)
- `p_152920_` (`CollisionContext`)

**Returns:** `VoxelShape`

### updateShape

```java
protected BlockState updateShape(BlockState p_152926_, Direction p_152927_, BlockState p_152928_, LevelAccessor p_152929_, BlockPos p_152930_, BlockPos p_152931_)
```

**Parameters:**

- `p_152926_` (`BlockState`)
- `p_152927_` (`Direction`)
- `p_152928_` (`BlockState`)
- `p_152929_` (`LevelAccessor`)
- `p_152930_` (`BlockPos`)
- `p_152931_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_152922_, LevelReader p_152923_, BlockPos p_152924_)
```

**Parameters:**

- `p_152922_` (`BlockState`)
- `p_152923_` (`LevelReader`)
- `p_152924_` (`BlockPos`)

**Returns:** `boolean`
