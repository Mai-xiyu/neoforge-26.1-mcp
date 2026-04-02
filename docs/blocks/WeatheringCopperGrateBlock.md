# WeatheringCopperGrateBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `WaterloggedTransparentBlock`
**Implements:** `WeatheringCopper`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WeatheringCopperGrateBlock>` |  |

## Methods

### codec

```java
protected MapCodec<WeatheringCopperGrateBlock> codec()
```

**Returns:** `MapCodec<WeatheringCopperGrateBlock>`

### WeatheringCopperGrateBlock

```java
public WeatheringCopperGrateBlock(WeatheringCopper.WeatherState p_309130_, BlockBehaviour.Properties p_309077_)
```

**Parameters:**

- `p_309130_` (`WeatheringCopper.WeatherState`)
- `p_309077_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### randomTick

```java
protected void randomTick(BlockState p_309111_, ServerLevel p_309121_, BlockPos p_309090_, RandomSource p_308865_)
```

**Parameters:**

- `p_309111_` (`BlockState`)
- `p_309121_` (`ServerLevel`)
- `p_309090_` (`BlockPos`)
- `p_308865_` (`RandomSource`)

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_309102_)
```

**Parameters:**

- `p_309102_` (`BlockState`)

**Returns:** `boolean`

### getAge

```java
public WeatheringCopper.WeatherState getAge()
```

**Returns:** `public WeatheringCopper.WeatherState`
