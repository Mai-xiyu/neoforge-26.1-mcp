# SoulFireBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseFireBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SoulFireBlock>` |  |

## Methods

### codec

```java
public MapCodec<SoulFireBlock> codec()
```

**Returns:** `MapCodec<SoulFireBlock>`

### SoulFireBlock

```java
public SoulFireBlock(BlockBehaviour.Properties p_56653_)
```

**Parameters:**

- `p_56653_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### updateShape

```java
protected BlockState updateShape(BlockState p_56659_, Direction p_56660_, BlockState p_56661_, LevelAccessor p_56662_, BlockPos p_56663_, BlockPos p_56664_)
```

**Parameters:**

- `p_56659_` (`BlockState`)
- `p_56660_` (`Direction`)
- `p_56661_` (`BlockState`)
- `p_56662_` (`LevelAccessor`)
- `p_56663_` (`BlockPos`)
- `p_56664_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_56655_, LevelReader p_56656_, BlockPos p_56657_)
```

**Parameters:**

- `p_56655_` (`BlockState`)
- `p_56656_` (`LevelReader`)
- `p_56657_` (`BlockPos`)

**Returns:** `boolean`

### canSurviveOnBlock

```java
public static boolean canSurviveOnBlock(BlockState p_154651_)
```

**Parameters:**

- `p_154651_` (`BlockState`)

**Returns:** `public static boolean`

### canBurn

```java
protected boolean canBurn(BlockState p_56668_)
```

**Parameters:**

- `p_56668_` (`BlockState`)

**Returns:** `boolean`
