# CropBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CropBlock>` |  |
| `MAX_AGE` | `int` |  |
| `AGE` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<? extends CropBlock> codec()
```

**Returns:** `MapCodec<? extends CropBlock>`

### CropBlock

```java
public CropBlock(BlockBehaviour.Properties p_52247_)
```

**Parameters:**

- `p_52247_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_52297_, BlockGetter p_52298_, BlockPos p_52299_, CollisionContext p_52300_)
```

**Parameters:**

- `p_52297_` (`BlockState`)
- `p_52298_` (`BlockGetter`)
- `p_52299_` (`BlockPos`)
- `p_52300_` (`CollisionContext`)

**Returns:** `VoxelShape`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_52302_, BlockGetter p_52303_, BlockPos p_52304_)
```

**Parameters:**

- `p_52302_` (`BlockState`)
- `p_52303_` (`BlockGetter`)
- `p_52304_` (`BlockPos`)

**Returns:** `boolean`

### getAgeProperty

```java
protected IntegerProperty getAgeProperty()
```

**Returns:** `protected IntegerProperty`

### getMaxAge

```java
public int getMaxAge()
```

**Returns:** `public int`

### getAge

```java
public int getAge(BlockState p_52306_)
```

**Parameters:**

- `p_52306_` (`BlockState`)

**Returns:** `public int`

### getStateForAge

```java
public BlockState getStateForAge(int p_52290_)
```

**Parameters:**

- `p_52290_` (`int`)

**Returns:** `public BlockState`

### isMaxAge

```java
public final boolean isMaxAge(BlockState p_52308_)
```

**Parameters:**

- `p_52308_` (`BlockState`)

**Returns:** `public final boolean`

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_52288_)
```

**Parameters:**

- `p_52288_` (`BlockState`)

**Returns:** `boolean`

### randomTick

```java
protected void randomTick(BlockState p_221050_, ServerLevel p_221051_, BlockPos p_221052_, RandomSource p_221053_)
```

**Parameters:**

- `p_221050_` (`BlockState`)
- `p_221051_` (`ServerLevel`)
- `p_221052_` (`BlockPos`)
- `p_221053_` (`RandomSource`)

### growCrops

```java
public void growCrops(Level p_52264_, BlockPos p_52265_, BlockState p_52266_)
```

**Parameters:**

- `p_52264_` (`Level`)
- `p_52265_` (`BlockPos`)
- `p_52266_` (`BlockState`)

**Returns:** `public void`

### getBonemealAgeIncrease

```java
protected int getBonemealAgeIncrease(Level p_52262_)
```

**Parameters:**

- `p_52262_` (`Level`)

**Returns:** `protected int`

### getGrowthSpeed

```java
protected static float getGrowthSpeed(BlockState blockState, BlockGetter p_52274_, BlockPos p_52275_)
```

**Parameters:**

- `blockState` (`BlockState`)
- `p_52274_` (`BlockGetter`)
- `p_52275_` (`BlockPos`)

**Returns:** `protected static float`

### canSurvive

```java
protected boolean canSurvive(BlockState p_52282_, LevelReader p_52283_, BlockPos p_52284_)
```

**Parameters:**

- `p_52282_` (`BlockState`)
- `p_52283_` (`LevelReader`)
- `p_52284_` (`BlockPos`)

**Returns:** `boolean`

### hasSufficientLight

```java
public static boolean hasSufficientLight(LevelReader p_294828_, BlockPos p_295989_)
```

**Parameters:**

- `p_294828_` (`LevelReader`)
- `p_295989_` (`BlockPos`)

**Returns:** `public static boolean`

### entityInside

```java
protected void entityInside(BlockState p_52277_, Level p_52278_, BlockPos p_52279_, Entity p_52280_)
```

**Parameters:**

- `p_52277_` (`BlockState`)
- `p_52278_` (`Level`)
- `p_52279_` (`BlockPos`)
- `p_52280_` (`Entity`)

### getBaseSeedId

```java
protected ItemLike getBaseSeedId()
```

**Returns:** `protected ItemLike`

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304482_, BlockPos p_52255_, BlockState p_52256_)
```

**Parameters:**

- `p_304482_` (`LevelReader`)
- `p_52255_` (`BlockPos`)
- `p_52256_` (`BlockState`)

**Returns:** `ItemStack`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_255715_, BlockPos p_52259_, BlockState p_52260_)
```

**Parameters:**

- `p_255715_` (`LevelReader`)
- `p_52259_` (`BlockPos`)
- `p_52260_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_221045_, RandomSource p_221046_, BlockPos p_221047_, BlockState p_221048_)
```

**Parameters:**

- `p_221045_` (`Level`)
- `p_221046_` (`RandomSource`)
- `p_221047_` (`BlockPos`)
- `p_221048_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221040_, RandomSource p_221041_, BlockPos p_221042_, BlockState p_221043_)
```

**Parameters:**

- `p_221040_` (`ServerLevel`)
- `p_221041_` (`RandomSource`)
- `p_221042_` (`BlockPos`)
- `p_221043_` (`BlockState`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_52286_)
```

**Parameters:**

- `p_52286_` (`StateDefinition.Builder<Block, BlockState>`)
