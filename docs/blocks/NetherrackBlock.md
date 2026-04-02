# NetherrackBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<NetherrackBlock>` |  |

## Methods

### codec

```java
public MapCodec<NetherrackBlock> codec()
```

**Returns:** `MapCodec<NetherrackBlock>`

### NetherrackBlock

```java
public NetherrackBlock(BlockBehaviour.Properties p_54995_)
```

**Parameters:**

- `p_54995_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256620_, BlockPos p_55003_, BlockState p_55004_)
```

**Parameters:**

- `p_256620_` (`LevelReader`)
- `p_55003_` (`BlockPos`)
- `p_55004_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_221816_, RandomSource p_221817_, BlockPos p_221818_, BlockState p_221819_)
```

**Parameters:**

- `p_221816_` (`Level`)
- `p_221817_` (`RandomSource`)
- `p_221818_` (`BlockPos`)
- `p_221819_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221811_, RandomSource p_221812_, BlockPos p_221813_, BlockState p_221814_)
```

**Parameters:**

- `p_221811_` (`ServerLevel`)
- `p_221812_` (`RandomSource`)
- `p_221813_` (`BlockPos`)
- `p_221814_` (`BlockState`)

### getType

```java
public BonemealableBlock.Type getType()
```

**Returns:** `BonemealableBlock.Type`
