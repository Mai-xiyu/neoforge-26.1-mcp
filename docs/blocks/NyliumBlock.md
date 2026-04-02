# NyliumBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<NyliumBlock>` |  |

## Methods

### codec

```java
public MapCodec<NyliumBlock> codec()
```

**Returns:** `MapCodec<NyliumBlock>`

### NyliumBlock

```java
public NyliumBlock(BlockBehaviour.Properties p_55057_)
```

**Parameters:**

- `p_55057_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canBeNylium

```java
private static boolean canBeNylium(BlockState p_55079_, LevelReader p_55080_, BlockPos p_55081_)
```

**Parameters:**

- `p_55079_` (`BlockState`)
- `p_55080_` (`LevelReader`)
- `p_55081_` (`BlockPos`)

**Returns:** `private static boolean`

### randomTick

```java
protected void randomTick(BlockState p_221835_, ServerLevel p_221836_, BlockPos p_221837_, RandomSource p_221838_)
```

**Parameters:**

- `p_221835_` (`BlockState`)
- `p_221836_` (`ServerLevel`)
- `p_221837_` (`BlockPos`)
- `p_221838_` (`RandomSource`)

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256194_, BlockPos p_256152_, BlockState p_256389_)
```

**Parameters:**

- `p_256194_` (`LevelReader`)
- `p_256152_` (`BlockPos`)
- `p_256389_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_221830_, RandomSource p_221831_, BlockPos p_221832_, BlockState p_221833_)
```

**Parameters:**

- `p_221830_` (`Level`)
- `p_221831_` (`RandomSource`)
- `p_221832_` (`BlockPos`)
- `p_221833_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221825_, RandomSource p_221826_, BlockPos p_221827_, BlockState p_221828_)
```

**Parameters:**

- `p_221825_` (`ServerLevel`)
- `p_221826_` (`RandomSource`)
- `p_221827_` (`BlockPos`)
- `p_221828_` (`BlockState`)

### place

```java
private void place(Registry<ConfiguredFeature<?, ?>> p_255879_, ResourceKey<ConfiguredFeature<?, ?>> p_256032_, ServerLevel p_255631_, ChunkGenerator p_256445_, RandomSource p_255709_, BlockPos p_256019_)
```

**Parameters:**

- `p_255879_` (`Registry<ConfiguredFeature<?, ?>>`)
- `p_256032_` (`ResourceKey<ConfiguredFeature<?, ?>>`)
- `p_255631_` (`ServerLevel`)
- `p_256445_` (`ChunkGenerator`)
- `p_255709_` (`RandomSource`)
- `p_256019_` (`BlockPos`)

**Returns:** `private void`

### getType

```java
public BonemealableBlock.Type getType()
```

**Returns:** `BonemealableBlock.Type`
