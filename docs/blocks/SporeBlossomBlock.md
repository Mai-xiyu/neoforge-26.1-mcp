# SporeBlossomBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SporeBlossomBlock>` |  |

## Methods

### codec

```java
public MapCodec<SporeBlossomBlock> codec()
```

**Returns:** `MapCodec<SporeBlossomBlock>`

### SporeBlossomBlock

```java
public SporeBlossomBlock(BlockBehaviour.Properties p_154697_)
```

**Parameters:**

- `p_154697_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canSurvive

```java
protected boolean canSurvive(BlockState p_154709_, LevelReader p_154710_, BlockPos p_154711_)
```

**Parameters:**

- `p_154709_` (`BlockState`)
- `p_154710_` (`LevelReader`)
- `p_154711_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_154713_, Direction p_154714_, BlockState p_154715_, LevelAccessor p_154716_, BlockPos p_154717_, BlockPos p_154718_)
```

**Parameters:**

- `p_154713_` (`BlockState`)
- `p_154714_` (`Direction`)
- `p_154715_` (`BlockState`)
- `p_154716_` (`LevelAccessor`)
- `p_154717_` (`BlockPos`)
- `p_154718_` (`BlockPos`)

**Returns:** `BlockState`

### animateTick

```java
public void animateTick(BlockState p_222503_, Level p_222504_, BlockPos p_222505_, RandomSource p_222506_)
```

**Parameters:**

- `p_222503_` (`BlockState`)
- `p_222504_` (`Level`)
- `p_222505_` (`BlockPos`)
- `p_222506_` (`RandomSource`)

### getShape

```java
protected VoxelShape getShape(BlockState p_154699_, BlockGetter p_154700_, BlockPos p_154701_, CollisionContext p_154702_)
```

**Parameters:**

- `p_154699_` (`BlockState`)
- `p_154700_` (`BlockGetter`)
- `p_154701_` (`BlockPos`)
- `p_154702_` (`CollisionContext`)

**Returns:** `VoxelShape`
