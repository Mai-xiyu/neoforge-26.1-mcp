# WeatheringCopperTrapDoorBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `TrapDoorBlock`
**Implements:** `WeatheringCopper`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WeatheringCopperTrapDoorBlock>` |  |

## Methods

### codec

```java
public MapCodec<WeatheringCopperTrapDoorBlock> codec()
```

**Returns:** `MapCodec<WeatheringCopperTrapDoorBlock>`

### WeatheringCopperTrapDoorBlock

```java
public WeatheringCopperTrapDoorBlock(BlockSetType p_309013_, WeatheringCopper.WeatherState p_309166_, BlockBehaviour.Properties p_308943_)
```

**Parameters:**

- `p_309013_` (`BlockSetType`)
- `p_309166_` (`WeatheringCopper.WeatherState`)
- `p_308943_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### randomTick

```java
protected void randomTick(BlockState p_309138_, ServerLevel p_309005_, BlockPos p_309123_, RandomSource p_309094_)
```

**Parameters:**

- `p_309138_` (`BlockState`)
- `p_309005_` (`ServerLevel`)
- `p_309123_` (`BlockPos`)
- `p_309094_` (`RandomSource`)

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_309078_)
```

**Parameters:**

- `p_309078_` (`BlockState`)

**Returns:** `boolean`

### getAge

```java
public WeatheringCopper.WeatherState getAge()
```

**Returns:** `public WeatheringCopper.WeatherState`
