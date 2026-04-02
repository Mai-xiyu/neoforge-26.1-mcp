# WeatheringCopperDoorBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `DoorBlock`
**Implements:** `WeatheringCopper`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WeatheringCopperDoorBlock>` |  |

## Methods

### codec

```java
public MapCodec<WeatheringCopperDoorBlock> codec()
```

**Returns:** `MapCodec<WeatheringCopperDoorBlock>`

### WeatheringCopperDoorBlock

```java
public WeatheringCopperDoorBlock(BlockSetType p_309051_, WeatheringCopper.WeatherState p_308937_, BlockBehaviour.Properties p_309122_)
```

**Parameters:**

- `p_309051_` (`BlockSetType`)
- `p_308937_` (`WeatheringCopper.WeatherState`)
- `p_309122_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### randomTick

```java
protected void randomTick(BlockState p_308942_, ServerLevel p_309109_, BlockPos p_309034_, RandomSource p_309156_)
```

**Parameters:**

- `p_308942_` (`BlockState`)
- `p_309109_` (`ServerLevel`)
- `p_309034_` (`BlockPos`)
- `p_309156_` (`RandomSource`)

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_308997_)
```

**Parameters:**

- `p_308997_` (`BlockState`)

**Returns:** `boolean`

### getAge

```java
public WeatheringCopper.WeatherState getAge()
```

**Returns:** `public WeatheringCopper.WeatherState`
