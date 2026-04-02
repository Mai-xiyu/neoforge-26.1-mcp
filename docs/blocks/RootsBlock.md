# RootsBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RootsBlock>` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<RootsBlock> codec()
```

**Returns:** `MapCodec<RootsBlock>`

### RootsBlock

```java
public RootsBlock(BlockBehaviour.Properties p_55912_)
```

**Parameters:**

- `p_55912_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_55915_, BlockGetter p_55916_, BlockPos p_55917_, CollisionContext p_55918_)
```

**Parameters:**

- `p_55915_` (`BlockState`)
- `p_55916_` (`BlockGetter`)
- `p_55917_` (`BlockPos`)
- `p_55918_` (`CollisionContext`)

**Returns:** `VoxelShape`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_55920_, BlockGetter p_55921_, BlockPos p_55922_)
```

**Parameters:**

- `p_55920_` (`BlockState`)
- `p_55921_` (`BlockGetter`)
- `p_55922_` (`BlockPos`)

**Returns:** `boolean`
