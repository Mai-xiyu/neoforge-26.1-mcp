# TransparentBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HalfTransparentBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TransparentBlock>` |  |

## Methods

### TransparentBlock

```java
public TransparentBlock(BlockBehaviour.Properties p_309186_)
```

**Parameters:**

- `p_309186_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### codec

```java
protected MapCodec<? extends TransparentBlock> codec()
```

**Returns:** `MapCodec<? extends TransparentBlock>`

### getVisualShape

```java
protected VoxelShape getVisualShape(BlockState p_309057_, BlockGetter p_308936_, BlockPos p_308956_, CollisionContext p_309006_)
```

**Parameters:**

- `p_309057_` (`BlockState`)
- `p_308936_` (`BlockGetter`)
- `p_308956_` (`BlockPos`)
- `p_309006_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getShadeBrightness

```java
protected float getShadeBrightness(BlockState p_308911_, BlockGetter p_308952_, BlockPos p_308918_)
```

**Parameters:**

- `p_308911_` (`BlockState`)
- `p_308952_` (`BlockGetter`)
- `p_308918_` (`BlockPos`)

**Returns:** `float`

### propagatesSkylightDown

```java
protected boolean propagatesSkylightDown(BlockState p_309084_, BlockGetter p_309133_, BlockPos p_309097_)
```

**Parameters:**

- `p_309084_` (`BlockState`)
- `p_309133_` (`BlockGetter`)
- `p_309097_` (`BlockPos`)

**Returns:** `boolean`
