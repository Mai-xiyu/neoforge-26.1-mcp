# FrogspawnBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FrogspawnBlock>` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<FrogspawnBlock> codec()
```

**Returns:** `MapCodec<FrogspawnBlock>`

### FrogspawnBlock

```java
public FrogspawnBlock(BlockBehaviour.Properties p_221177_)
```

**Parameters:**

- `p_221177_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_221199_, BlockGetter p_221200_, BlockPos p_221201_, CollisionContext p_221202_)
```

**Parameters:**

- `p_221199_` (`BlockState`)
- `p_221200_` (`BlockGetter`)
- `p_221201_` (`BlockPos`)
- `p_221202_` (`CollisionContext`)

**Returns:** `VoxelShape`

### canSurvive

```java
protected boolean canSurvive(BlockState p_221209_, LevelReader p_221210_, BlockPos p_221211_)
```

**Parameters:**

- `p_221209_` (`BlockState`)
- `p_221210_` (`LevelReader`)
- `p_221211_` (`BlockPos`)

**Returns:** `boolean`

### onPlace

```java
protected void onPlace(BlockState p_221227_, Level p_221228_, BlockPos p_221229_, BlockState p_221230_, boolean p_221231_)
```

**Parameters:**

- `p_221227_` (`BlockState`)
- `p_221228_` (`Level`)
- `p_221229_` (`BlockPos`)
- `p_221230_` (`BlockState`)
- `p_221231_` (`boolean`)

### getFrogspawnHatchDelay

```java
private static int getFrogspawnHatchDelay(RandomSource p_221186_)
```

**Parameters:**

- `p_221186_` (`RandomSource`)

**Returns:** `private static int`

### updateShape

```java
protected BlockState updateShape(BlockState p_221213_, Direction p_221214_, BlockState p_221215_, LevelAccessor p_221216_, BlockPos p_221217_, BlockPos p_221218_)
```

**Parameters:**

- `p_221213_` (`BlockState`)
- `p_221214_` (`Direction`)
- `p_221215_` (`BlockState`)
- `p_221216_` (`LevelAccessor`)
- `p_221217_` (`BlockPos`)
- `p_221218_` (`BlockPos`)

**Returns:** `BlockState`

### tick

```java
protected void tick(BlockState p_221194_, ServerLevel p_221195_, BlockPos p_221196_, RandomSource p_221197_)
```

**Parameters:**

- `p_221194_` (`BlockState`)
- `p_221195_` (`ServerLevel`)
- `p_221196_` (`BlockPos`)
- `p_221197_` (`RandomSource`)

### entityInside

```java
protected void entityInside(BlockState p_221204_, Level p_221205_, BlockPos p_221206_, Entity p_221207_)
```

**Parameters:**

- `p_221204_` (`BlockState`)
- `p_221205_` (`Level`)
- `p_221206_` (`BlockPos`)
- `p_221207_` (`Entity`)

### mayPlaceOn

```java
private static boolean mayPlaceOn(BlockGetter p_221188_, BlockPos p_221189_)
```

**Parameters:**

- `p_221188_` (`BlockGetter`)
- `p_221189_` (`BlockPos`)

**Returns:** `private static boolean`

### hatchFrogspawn

```java
private void hatchFrogspawn(ServerLevel p_221182_, BlockPos p_221183_, RandomSource p_221184_)
```

**Parameters:**

- `p_221182_` (`ServerLevel`)
- `p_221183_` (`BlockPos`)
- `p_221184_` (`RandomSource`)

**Returns:** `private void`

### destroyBlock

```java
private void destroyBlock(Level p_221191_, BlockPos p_221192_)
```

**Parameters:**

- `p_221191_` (`Level`)
- `p_221192_` (`BlockPos`)

**Returns:** `private void`

### spawnTadpoles

```java
private void spawnTadpoles(ServerLevel p_221221_, BlockPos p_221222_, RandomSource p_221223_)
```

**Parameters:**

- `p_221221_` (`ServerLevel`)
- `p_221222_` (`BlockPos`)
- `p_221223_` (`RandomSource`)

**Returns:** `private void`

### getRandomTadpolePositionOffset

```java
private double getRandomTadpolePositionOffset(RandomSource p_221225_)
```

**Parameters:**

- `p_221225_` (`RandomSource`)

**Returns:** `private double`

### setHatchDelay

```java
public static void setHatchDelay(int p_221179_, int p_221180_)
```

**Parameters:**

- `p_221179_` (`int`)
- `p_221180_` (`int`)

### setDefaultHatchDelay

```java
public static void setDefaultHatchDelay()
```
