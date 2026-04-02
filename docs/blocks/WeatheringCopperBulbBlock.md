# WeatheringCopperBulbBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `CopperBulbBlock`
**Implements:** `WeatheringCopper`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WeatheringCopperBulbBlock>` |  |

## Methods

### codec

```java
protected MapCodec<WeatheringCopperBulbBlock> codec()
```

**Returns:** `MapCodec<WeatheringCopperBulbBlock>`

### WeatheringCopperBulbBlock

```java
public WeatheringCopperBulbBlock(WeatheringCopper.WeatherState p_308927_, BlockBehaviour.Properties p_309010_)
```

**Parameters:**

- `p_308927_` (`WeatheringCopper.WeatherState`)
- `p_309010_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### randomTick

```java
protected void randomTick(BlockState p_309163_, ServerLevel p_309177_, BlockPos p_309033_, RandomSource p_308946_)
```

**Parameters:**

- `p_309163_` (`BlockState`)
- `p_309177_` (`ServerLevel`)
- `p_309033_` (`BlockPos`)
- `p_308946_` (`RandomSource`)

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_308966_)
```

**Parameters:**

- `p_308966_` (`BlockState`)

**Returns:** `boolean`

### getAge

```java
public WeatheringCopper.WeatherState getAge()
```

**Returns:** `public WeatheringCopper.WeatherState`
