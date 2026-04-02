# MushroomBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MushroomBlock>` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<MushroomBlock> codec()
```

**Returns:** `MapCodec<MushroomBlock>`

### MushroomBlock

```java
public MushroomBlock(ResourceKey<ConfiguredFeature<?, ?>> p_256049_, BlockBehaviour.Properties p_256027_)
```

**Parameters:**

- `p_256049_` (`ResourceKey<ConfiguredFeature<?, ?>>`)
- `p_256027_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_54889_, BlockGetter p_54890_, BlockPos p_54891_, CollisionContext p_54892_)
```

**Parameters:**

- `p_54889_` (`BlockState`)
- `p_54890_` (`BlockGetter`)
- `p_54891_` (`BlockPos`)
- `p_54892_` (`CollisionContext`)

**Returns:** `VoxelShape`

### randomTick

```java
protected void randomTick(BlockState p_221784_, ServerLevel p_221785_, BlockPos p_221786_, RandomSource p_221787_)
```

**Parameters:**

- `p_221784_` (`BlockState`)
- `p_221785_` (`ServerLevel`)
- `p_221786_` (`BlockPos`)
- `p_221787_` (`RandomSource`)

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_54894_, BlockGetter p_54895_, BlockPos p_54896_)
```

**Parameters:**

- `p_54894_` (`BlockState`)
- `p_54895_` (`BlockGetter`)
- `p_54896_` (`BlockPos`)

**Returns:** `boolean`

### canSurvive

```java
protected boolean canSurvive(BlockState p_54880_, LevelReader p_54881_, BlockPos p_54882_)
```

**Parameters:**

- `p_54880_` (`BlockState`)
- `p_54881_` (`LevelReader`)
- `p_54882_` (`BlockPos`)

**Returns:** `boolean`

### growMushroom

```java
public boolean growMushroom(ServerLevel p_221774_, BlockPos p_221775_, BlockState p_221776_, RandomSource p_221777_)
```

**Parameters:**

- `p_221774_` (`ServerLevel`)
- `p_221775_` (`BlockPos`)
- `p_221776_` (`BlockState`)
- `p_221777_` (`RandomSource`)

**Returns:** `public boolean`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_255904_, BlockPos p_54871_, BlockState p_54872_)
```

**Parameters:**

- `p_255904_` (`LevelReader`)
- `p_54871_` (`BlockPos`)
- `p_54872_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_221779_, RandomSource p_221780_, BlockPos p_221781_, BlockState p_221782_)
```

**Parameters:**

- `p_221779_` (`Level`)
- `p_221780_` (`RandomSource`)
- `p_221781_` (`BlockPos`)
- `p_221782_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221769_, RandomSource p_221770_, BlockPos p_221771_, BlockState p_221772_)
```

**Parameters:**

- `p_221769_` (`ServerLevel`)
- `p_221770_` (`RandomSource`)
- `p_221771_` (`BlockPos`)
- `p_221772_` (`BlockState`)
