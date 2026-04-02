# PitcherCropBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `DoublePlantBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<PitcherCropBlock>` |  |
| `AGE` | `IntegerProperty` |  |
| `MAX_AGE` | `int` |  |

## Methods

### codec

```java
public MapCodec<PitcherCropBlock> codec()
```

**Returns:** `MapCodec<PitcherCropBlock>`

### PitcherCropBlock

```java
public PitcherCropBlock(BlockBehaviour.Properties p_277780_)
```

**Parameters:**

- `p_277780_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_277448_)
```

**Parameters:**

- `p_277448_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getShape

```java
public VoxelShape getShape(BlockState p_277602_, BlockGetter p_277617_, BlockPos p_278005_, CollisionContext p_277514_)
```

**Parameters:**

- `p_277602_` (`BlockState`)
- `p_277617_` (`BlockGetter`)
- `p_278005_` (`BlockPos`)
- `p_277514_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getCollisionShape

```java
public VoxelShape getCollisionShape(BlockState p_277609_, BlockGetter p_277398_, BlockPos p_278042_, CollisionContext p_277995_)
```

**Parameters:**

- `p_277609_` (`BlockState`)
- `p_277398_` (`BlockGetter`)
- `p_278042_` (`BlockPos`)
- `p_277995_` (`CollisionContext`)

**Returns:** `VoxelShape`

### updateShape

```java
public BlockState updateShape(BlockState p_277518_, Direction p_277700_, BlockState p_277660_, LevelAccessor p_277653_, BlockPos p_277982_, BlockPos p_278106_)
```

**Parameters:**

- `p_277518_` (`BlockState`)
- `p_277700_` (`Direction`)
- `p_277660_` (`BlockState`)
- `p_277653_` (`LevelAccessor`)
- `p_277982_` (`BlockPos`)
- `p_278106_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
public boolean canSurvive(BlockState p_277671_, LevelReader p_277477_, BlockPos p_278085_)
```

**Parameters:**

- `p_277671_` (`BlockState`)
- `p_277477_` (`LevelReader`)
- `p_278085_` (`BlockPos`)

**Returns:** `boolean`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_277418_, BlockGetter p_277461_, BlockPos p_277608_)
```

**Parameters:**

- `p_277418_` (`BlockState`)
- `p_277461_` (`BlockGetter`)
- `p_277608_` (`BlockPos`)

**Returns:** `boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_277573_)
```

**Parameters:**

- `p_277573_` (`StateDefinition.Builder<Block, BlockState>`)

### entityInside

```java
public void entityInside(BlockState p_279266_, Level p_279469_, BlockPos p_279119_, Entity p_279372_)
```

**Parameters:**

- `p_279266_` (`BlockState`)
- `p_279469_` (`Level`)
- `p_279119_` (`BlockPos`)
- `p_279372_` (`Entity`)

### canBeReplaced

```java
public boolean canBeReplaced(BlockState p_277627_, BlockPlaceContext p_277759_)
```

**Parameters:**

- `p_277627_` (`BlockState`)
- `p_277759_` (`BlockPlaceContext`)

**Returns:** `boolean`

### setPlacedBy

```java
public void setPlacedBy(Level p_277432_, BlockPos p_277632_, BlockState p_277479_, LivingEntity p_277805_, ItemStack p_277663_)
```

**Parameters:**

- `p_277432_` (`Level`)
- `p_277632_` (`BlockPos`)
- `p_277479_` (`BlockState`)
- `p_277805_` (`LivingEntity`)
- `p_277663_` (`ItemStack`)

### isRandomlyTicking

```java
public boolean isRandomlyTicking(BlockState p_277483_)
```

**Parameters:**

- `p_277483_` (`BlockState`)

**Returns:** `boolean`

### randomTick

```java
public void randomTick(BlockState p_277950_, ServerLevel p_277589_, BlockPos p_277937_, RandomSource p_277887_)
```

**Parameters:**

- `p_277950_` (`BlockState`)
- `p_277589_` (`ServerLevel`)
- `p_277937_` (`BlockPos`)
- `p_277887_` (`RandomSource`)

### grow

```java
private void grow(ServerLevel p_277975_, BlockState p_277349_, BlockPos p_277585_, int p_277498_)
```

**Parameters:**

- `p_277975_` (`ServerLevel`)
- `p_277349_` (`BlockState`)
- `p_277585_` (`BlockPos`)
- `p_277498_` (`int`)

**Returns:** `private void`

### canGrowInto

```java
private static boolean canGrowInto(LevelReader p_290010_, BlockPos p_277823_)
```

**Parameters:**

- `p_290010_` (`LevelReader`)
- `p_277823_` (`BlockPos`)

**Returns:** `private static boolean`

### sufficientLight

```java
private static boolean sufficientLight(LevelReader p_290018_, BlockPos p_290011_)
```

**Parameters:**

- `p_290018_` (`LevelReader`)
- `p_290011_` (`BlockPos`)

**Returns:** `private static boolean`

### isLower

```java
private static boolean isLower(BlockState p_279488_)
```

**Parameters:**

- `p_279488_` (`BlockState`)

**Returns:** `private static boolean`

### isDouble

```java
private static boolean isDouble(int p_295217_)
```

**Parameters:**

- `p_295217_` (`int`)

**Returns:** `private static boolean`

### canGrow

```java
private boolean canGrow(LevelReader p_290007_, BlockPos p_290014_, BlockState p_290017_, int p_290008_)
```

**Parameters:**

- `p_290007_` (`LevelReader`)
- `p_290014_` (`BlockPos`)
- `p_290017_` (`BlockState`)
- `p_290008_` (`int`)

**Returns:** `private boolean`

### isMaxAge

```java
private boolean isMaxAge(BlockState p_277387_)
```

**Parameters:**

- `p_277387_` (`BlockState`)

**Returns:** `private boolean`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_277380_, BlockPos p_277500_, BlockState p_277715_)
```

**Parameters:**

- `p_277380_` (`LevelReader`)
- `p_277500_` (`BlockPos`)
- `p_277715_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_277920_, RandomSource p_277594_, BlockPos p_277401_, BlockState p_277434_)
```

**Parameters:**

- `p_277920_` (`Level`)
- `p_277594_` (`RandomSource`)
- `p_277401_` (`BlockPos`)
- `p_277434_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_277717_, RandomSource p_277870_, BlockPos p_277836_, BlockState p_278034_)
```

**Parameters:**

- `p_277717_` (`ServerLevel`)
- `p_277870_` (`RandomSource`)
- `p_277836_` (`BlockPos`)
- `p_278034_` (`BlockState`)

### PosAndState

```java
static record PosAndState(BlockPos pos, BlockState state)
```

**Parameters:**

- `pos` (`BlockPos`)
- `state` (`BlockState`)

**Returns:** `static record`
