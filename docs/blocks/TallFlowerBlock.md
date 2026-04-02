# TallFlowerBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `DoublePlantBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TallFlowerBlock>` |  |

## Methods

### codec

```java
public MapCodec<TallFlowerBlock> codec()
```

**Returns:** `MapCodec<TallFlowerBlock>`

### TallFlowerBlock

```java
public TallFlowerBlock(BlockBehaviour.Properties p_57296_)
```

**Parameters:**

- `p_57296_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256234_, BlockPos p_57304_, BlockState p_57305_)
```

**Parameters:**

- `p_256234_` (`LevelReader`)
- `p_57304_` (`BlockPos`)
- `p_57305_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_222573_, RandomSource p_222574_, BlockPos p_222575_, BlockState p_222576_)
```

**Parameters:**

- `p_222573_` (`Level`)
- `p_222574_` (`RandomSource`)
- `p_222575_` (`BlockPos`)
- `p_222576_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_222568_, RandomSource p_222569_, BlockPos p_222570_, BlockState p_222571_)
```

**Parameters:**

- `p_222568_` (`ServerLevel`)
- `p_222569_` (`RandomSource`)
- `p_222570_` (`BlockPos`)
- `p_222571_` (`BlockState`)
