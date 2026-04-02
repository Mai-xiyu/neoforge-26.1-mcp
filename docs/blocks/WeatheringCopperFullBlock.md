# WeatheringCopperFullBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `WeatheringCopper`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WeatheringCopperFullBlock>` |  |

## Methods

### codec

```java
public MapCodec<WeatheringCopperFullBlock> codec()
```

**Returns:** `MapCodec<WeatheringCopperFullBlock>`

### WeatheringCopperFullBlock

```java
public WeatheringCopperFullBlock(WeatheringCopper.WeatherState p_154925_, BlockBehaviour.Properties p_154926_)
```

**Parameters:**

- `p_154925_` (`WeatheringCopper.WeatherState`)
- `p_154926_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### randomTick

```java
protected void randomTick(BlockState p_222665_, ServerLevel p_222666_, BlockPos p_222667_, RandomSource p_222668_)
```

**Parameters:**

- `p_222665_` (`BlockState`)
- `p_222666_` (`ServerLevel`)
- `p_222667_` (`BlockPos`)
- `p_222668_` (`RandomSource`)

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_154935_)
```

**Parameters:**

- `p_154935_` (`BlockState`)

**Returns:** `boolean`

### getAge

```java
public WeatheringCopper.WeatherState getAge()
```

**Returns:** `public WeatheringCopper.WeatherState`
