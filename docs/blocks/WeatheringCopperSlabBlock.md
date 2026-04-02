# WeatheringCopperSlabBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `SlabBlock`
**Implements:** `WeatheringCopper`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WeatheringCopperSlabBlock>` |  |

## Methods

### codec

```java
public MapCodec<WeatheringCopperSlabBlock> codec()
```

**Returns:** `MapCodec<WeatheringCopperSlabBlock>`

### WeatheringCopperSlabBlock

```java
public WeatheringCopperSlabBlock(WeatheringCopper.WeatherState p_154938_, BlockBehaviour.Properties p_154939_)
```

**Parameters:**

- `p_154938_` (`WeatheringCopper.WeatherState`)
- `p_154939_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### randomTick

```java
protected void randomTick(BlockState p_222670_, ServerLevel p_222671_, BlockPos p_222672_, RandomSource p_222673_)
```

**Parameters:**

- `p_222670_` (`BlockState`)
- `p_222671_` (`ServerLevel`)
- `p_222672_` (`BlockPos`)
- `p_222673_` (`RandomSource`)

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_154947_)
```

**Parameters:**

- `p_154947_` (`BlockState`)

**Returns:** `boolean`

### getAge

```java
public WeatheringCopper.WeatherState getAge()
```

**Returns:** `public WeatheringCopper.WeatherState`
