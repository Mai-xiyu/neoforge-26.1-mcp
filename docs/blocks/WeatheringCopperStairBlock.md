# WeatheringCopperStairBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `StairBlock`
**Implements:** `WeatheringCopper`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WeatheringCopperStairBlock>` |  |

## Methods

### codec

```java
public MapCodec<WeatheringCopperStairBlock> codec()
```

**Returns:** `MapCodec<WeatheringCopperStairBlock>`

### WeatheringCopperStairBlock

```java
public WeatheringCopperStairBlock(WeatheringCopper.WeatherState p_154951_, BlockState p_154952_, BlockBehaviour.Properties p_154953_)
```

**Parameters:**

- `p_154951_` (`WeatheringCopper.WeatherState`)
- `p_154952_` (`BlockState`)
- `p_154953_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### randomTick

```java
protected void randomTick(BlockState p_222675_, ServerLevel p_222676_, BlockPos p_222677_, RandomSource p_222678_)
```

**Parameters:**

- `p_222675_` (`BlockState`)
- `p_222676_` (`ServerLevel`)
- `p_222677_` (`BlockPos`)
- `p_222678_` (`RandomSource`)

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_154961_)
```

**Parameters:**

- `p_154961_` (`BlockState`)

**Returns:** `boolean`

### getAge

```java
public WeatheringCopper.WeatherState getAge()
```

**Returns:** `public WeatheringCopper.WeatherState`
