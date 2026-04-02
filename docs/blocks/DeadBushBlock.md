# DeadBushBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `net.neoforged.neoforge.common.IShearable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DeadBushBlock>` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<DeadBushBlock> codec()
```

**Returns:** `MapCodec<DeadBushBlock>`

### DeadBushBlock

```java
public DeadBushBlock(BlockBehaviour.Properties p_52417_)
```

**Parameters:**

- `p_52417_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_52419_, BlockGetter p_52420_, BlockPos p_52421_, CollisionContext p_52422_)
```

**Parameters:**

- `p_52419_` (`BlockState`)
- `p_52420_` (`BlockGetter`)
- `p_52421_` (`BlockPos`)
- `p_52422_` (`CollisionContext`)

**Returns:** `VoxelShape`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_52424_, BlockGetter p_52425_, BlockPos p_52426_)
```

**Parameters:**

- `p_52424_` (`BlockState`)
- `p_52425_` (`BlockGetter`)
- `p_52426_` (`BlockPos`)

**Returns:** `boolean`
