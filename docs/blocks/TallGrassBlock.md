# TallGrassBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `BonemealableBlock`, `net.neoforged.neoforge.common.IShearable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TallGrassBlock>` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<TallGrassBlock> codec()
```

**Returns:** `MapCodec<TallGrassBlock>`

### TallGrassBlock

```java
public TallGrassBlock(BlockBehaviour.Properties p_57318_)
```

**Parameters:**

- `p_57318_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_57336_, BlockGetter p_57337_, BlockPos p_57338_, CollisionContext p_57339_)
```

**Parameters:**

- `p_57336_` (`BlockState`)
- `p_57337_` (`BlockGetter`)
- `p_57338_` (`BlockPos`)
- `p_57339_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_255692_, BlockPos p_57326_, BlockState p_57327_)
```

**Parameters:**

- `p_255692_` (`LevelReader`)
- `p_57326_` (`BlockPos`)
- `p_57327_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_222583_, RandomSource p_222584_, BlockPos p_222585_, BlockState p_222586_)
```

**Parameters:**

- `p_222583_` (`Level`)
- `p_222584_` (`RandomSource`)
- `p_222585_` (`BlockPos`)
- `p_222586_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_222578_, RandomSource p_222579_, BlockPos p_222580_, BlockState p_222581_)
```

**Parameters:**

- `p_222578_` (`ServerLevel`)
- `p_222579_` (`RandomSource`)
- `p_222580_` (`BlockPos`)
- `p_222581_` (`BlockState`)
