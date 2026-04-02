# WaterlilyBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WaterlilyBlock>` |  |
| `AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<WaterlilyBlock> codec()
```

**Returns:** `MapCodec<WaterlilyBlock>`

### WaterlilyBlock

```java
public WaterlilyBlock(BlockBehaviour.Properties p_58162_)
```

**Parameters:**

- `p_58162_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### entityInside

```java
protected void entityInside(BlockState p_58164_, Level p_58165_, BlockPos p_58166_, Entity p_58167_)
```

**Parameters:**

- `p_58164_` (`BlockState`)
- `p_58165_` (`Level`)
- `p_58166_` (`BlockPos`)
- `p_58167_` (`Entity`)

### getShape

```java
protected VoxelShape getShape(BlockState p_58169_, BlockGetter p_58170_, BlockPos p_58171_, CollisionContext p_58172_)
```

**Parameters:**

- `p_58169_` (`BlockState`)
- `p_58170_` (`BlockGetter`)
- `p_58171_` (`BlockPos`)
- `p_58172_` (`CollisionContext`)

**Returns:** `VoxelShape`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_58174_, BlockGetter p_58175_, BlockPos p_58176_)
```

**Parameters:**

- `p_58174_` (`BlockState`)
- `p_58175_` (`BlockGetter`)
- `p_58176_` (`BlockPos`)

**Returns:** `boolean`
