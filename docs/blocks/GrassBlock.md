# GrassBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `SpreadingSnowyDirtBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<GrassBlock>` |  |

## Methods

### codec

```java
public MapCodec<GrassBlock> codec()
```

**Returns:** `MapCodec<GrassBlock>`

### GrassBlock

```java
public GrassBlock(BlockBehaviour.Properties p_53685_)
```

**Parameters:**

- `p_53685_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256229_, BlockPos p_256432_, BlockState p_255677_)
```

**Parameters:**

- `p_256229_` (`LevelReader`)
- `p_256432_` (`BlockPos`)
- `p_255677_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_221275_, RandomSource p_221276_, BlockPos p_221277_, BlockState p_221278_)
```

**Parameters:**

- `p_221275_` (`Level`)
- `p_221276_` (`RandomSource`)
- `p_221277_` (`BlockPos`)
- `p_221278_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221270_, RandomSource p_221271_, BlockPos p_221272_, BlockState p_221273_)
```

**Parameters:**

- `p_221270_` (`ServerLevel`)
- `p_221271_` (`RandomSource`)
- `p_221272_` (`BlockPos`)
- `p_221273_` (`BlockState`)

### getType

```java
public BonemealableBlock.Type getType()
```

**Returns:** `BonemealableBlock.Type`
