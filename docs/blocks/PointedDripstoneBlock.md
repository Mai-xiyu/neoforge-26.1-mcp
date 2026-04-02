# PointedDripstoneBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `Fallable`, `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<PointedDripstoneBlock>` |  |
| `TIP_DIRECTION` | `DirectionProperty` |  |
| `THICKNESS` | `EnumProperty<DripstoneThickness>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `WATER_TRANSFER_PROBABILITY_PER_RANDOM_TICK` | `float` |  |
| `LAVA_TRANSFER_PROBABILITY_PER_RANDOM_TICK` | `float` |  |

## Methods

### codec

```java
public MapCodec<PointedDripstoneBlock> codec()
```

**Returns:** `MapCodec<PointedDripstoneBlock>`

### PointedDripstoneBlock

```java
public PointedDripstoneBlock(BlockBehaviour.Properties p_154025_)
```

**Parameters:**

- `p_154025_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_154157_)
```

**Parameters:**

- `p_154157_` (`StateDefinition.Builder<Block, BlockState>`)

### canSurvive

```java
protected boolean canSurvive(BlockState p_154137_, LevelReader p_154138_, BlockPos p_154139_)
```

**Parameters:**

- `p_154137_` (`BlockState`)
- `p_154138_` (`LevelReader`)
- `p_154139_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_154147_, Direction p_154148_, BlockState p_154149_, LevelAccessor p_154150_, BlockPos p_154151_, BlockPos p_154152_)
```

**Parameters:**

- `p_154147_` (`BlockState`)
- `p_154148_` (`Direction`)
- `p_154149_` (`BlockState`)
- `p_154150_` (`LevelAccessor`)
- `p_154151_` (`BlockPos`)
- `p_154152_` (`BlockPos`)

**Returns:** `BlockState`

### onProjectileHit

```java
protected void onProjectileHit(Level p_154042_, BlockState p_154043_, BlockHitResult p_154044_, Projectile p_154045_)
```

**Parameters:**

- `p_154042_` (`Level`)
- `p_154043_` (`BlockState`)
- `p_154044_` (`BlockHitResult`)
- `p_154045_` (`Projectile`)

### fallOn

```java
public void fallOn(Level p_154047_, BlockState p_154048_, BlockPos p_154049_, Entity p_154050_, float p_154051_)
```

**Parameters:**

- `p_154047_` (`Level`)
- `p_154048_` (`BlockState`)
- `p_154049_` (`BlockPos`)
- `p_154050_` (`Entity`)
- `p_154051_` (`float`)

### animateTick

```java
public void animateTick(BlockState p_221870_, Level p_221871_, BlockPos p_221872_, RandomSource p_221873_)
```

**Parameters:**

- `p_221870_` (`BlockState`)
- `p_221871_` (`Level`)
- `p_221872_` (`BlockPos`)
- `p_221873_` (`RandomSource`)

### tick

```java
protected void tick(BlockState p_221865_, ServerLevel p_221866_, BlockPos p_221867_, RandomSource p_221868_)
```

**Parameters:**

- `p_221865_` (`BlockState`)
- `p_221866_` (`ServerLevel`)
- `p_221867_` (`BlockPos`)
- `p_221868_` (`RandomSource`)

### spawnFallingStalactite

```java
 spawnFallingStalactite()
```

**Returns:** ``

### randomTick

```java
protected void randomTick(BlockState p_221883_, ServerLevel p_221884_, BlockPos p_221885_, RandomSource p_221886_)
```

**Parameters:**

- `p_221883_` (`BlockState`)
- `p_221884_` (`ServerLevel`)
- `p_221885_` (`BlockPos`)
- `p_221886_` (`RandomSource`)

### growStalactiteOrStalagmiteIfPossible

```java
 growStalactiteOrStalagmiteIfPossible()
```

**Returns:** ``

### maybeTransferFluid

```java
public static void maybeTransferFluid(BlockState p_221860_, ServerLevel p_221861_, BlockPos p_221862_, float p_221863_)
```

**Parameters:**

- `p_221860_` (`BlockState`)
- `p_221861_` (`ServerLevel`)
- `p_221862_` (`BlockPos`)
- `p_221863_` (`float`)

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_154040_)
```

**Parameters:**

- `p_154040_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_154235_)
```

**Parameters:**

- `p_154235_` (`BlockState`)

**Returns:** `FluidState`

### getOcclusionShape

```java
protected VoxelShape getOcclusionShape(BlockState p_154170_, BlockGetter p_154171_, BlockPos p_154172_)
```

**Parameters:**

- `p_154170_` (`BlockState`)
- `p_154171_` (`BlockGetter`)
- `p_154172_` (`BlockPos`)

**Returns:** `VoxelShape`

### getShape

```java
protected VoxelShape getShape(BlockState p_154117_, BlockGetter p_154118_, BlockPos p_154119_, CollisionContext p_154120_)
```

**Parameters:**

- `p_154117_` (`BlockState`)
- `p_154118_` (`BlockGetter`)
- `p_154119_` (`BlockPos`)
- `p_154120_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isCollisionShapeFullBlock

```java
protected boolean isCollisionShapeFullBlock(BlockState p_181235_, BlockGetter p_181236_, BlockPos p_181237_)
```

**Parameters:**

- `p_181235_` (`BlockState`)
- `p_181236_` (`BlockGetter`)
- `p_181237_` (`BlockPos`)

**Returns:** `boolean`

### getMaxHorizontalOffset

```java
protected float getMaxHorizontalOffset()
```

**Returns:** `float`

### onBrokenAfterFall

```java
public void onBrokenAfterFall(Level p_154059_, BlockPos p_154060_, FallingBlockEntity p_154061_)
```

**Parameters:**

- `p_154059_` (`Level`)
- `p_154060_` (`BlockPos`)
- `p_154061_` (`FallingBlockEntity`)

### getFallDamageSource

```java
public DamageSource getFallDamageSource(Entity p_254432_)
```

**Parameters:**

- `p_254432_` (`Entity`)

**Returns:** `DamageSource`

### spawnFallingStalactite

```java
private static void spawnFallingStalactite(BlockState p_154098_, ServerLevel p_154099_, BlockPos p_154100_)
```

**Parameters:**

- `p_154098_` (`BlockState`)
- `p_154099_` (`ServerLevel`)
- `p_154100_` (`BlockPos`)

**Returns:** `private static void`

### growStalactiteOrStalagmiteIfPossible

```java
public static void growStalactiteOrStalagmiteIfPossible(BlockState p_221888_, ServerLevel p_221889_, BlockPos p_221890_, RandomSource p_221891_)
```

**Parameters:**

- `p_221888_` (`BlockState`)
- `p_221889_` (`ServerLevel`)
- `p_221890_` (`BlockPos`)
- `p_221891_` (`RandomSource`)

### grow

```java
 grow()
```

**Returns:** ``

### growStalagmiteBelow

```java
 growStalagmiteBelow()
```

**Returns:** ``

### growStalagmiteBelow

```java
private static void growStalagmiteBelow(ServerLevel p_154033_, BlockPos p_154034_)
```

**Parameters:**

- `p_154033_` (`ServerLevel`)
- `p_154034_` (`BlockPos`)

**Returns:** `private static void`

### grow

```java
 grow()
```

**Returns:** ``

### grow

```java
private static void grow(ServerLevel p_154036_, BlockPos p_154037_, Direction p_154038_)
```

**Parameters:**

- `p_154036_` (`ServerLevel`)
- `p_154037_` (`BlockPos`)
- `p_154038_` (`Direction`)

**Returns:** `private static void`

### createMergedTips

```java
 createMergedTips()
```

**Returns:** ``

### createDripstone

```java
 createDripstone()
```

**Returns:** ``

### createDripstone

```java
private static void createDripstone(LevelAccessor p_154088_, BlockPos p_154089_, Direction p_154090_, DripstoneThickness p_154091_)
```

**Parameters:**

- `p_154088_` (`LevelAccessor`)
- `p_154089_` (`BlockPos`)
- `p_154090_` (`Direction`)
- `p_154091_` (`DripstoneThickness`)

**Returns:** `private static void`

### createMergedTips

```java
private static void createMergedTips(BlockState p_154231_, LevelAccessor p_154232_, BlockPos p_154233_)
```

**Parameters:**

- `p_154231_` (`BlockState`)
- `p_154232_` (`LevelAccessor`)
- `p_154233_` (`BlockPos`)

**Returns:** `private static void`

### createDripstone

```java
 createDripstone()
```

**Returns:** ``

### createDripstone

```java
 createDripstone()
```

**Returns:** ``

### spawnDripParticle

```java
public static void spawnDripParticle(Level p_154063_, BlockPos p_154064_, BlockState p_154065_)
```

**Parameters:**

- `p_154063_` (`Level`)
- `p_154064_` (`BlockPos`)
- `p_154065_` (`BlockState`)

**Returns:** `public static void`

### spawnDripParticle

```java
private static void spawnDripParticle(Level p_154072_, BlockPos p_154073_, BlockState p_154074_, Fluid p_154075_)
```

**Parameters:**

- `p_154072_` (`Level`)
- `p_154073_` (`BlockPos`)
- `p_154074_` (`BlockState`)
- `p_154075_` (`Fluid`)

**Returns:** `private static void`

### calculateDripstoneThickness

```java
private static DripstoneThickness calculateDripstoneThickness(LevelReader p_154093_, BlockPos p_154094_, Direction p_154095_, boolean p_154096_)
```

**Parameters:**

- `p_154093_` (`LevelReader`)
- `p_154094_` (`BlockPos`)
- `p_154095_` (`Direction`)
- `p_154096_` (`boolean`)

**Returns:** `private static DripstoneThickness`

### canDrip

```java
public static boolean canDrip(BlockState p_154239_)
```

**Parameters:**

- `p_154239_` (`BlockState`)

**Returns:** `public static boolean`

### canTipGrow

```java
private static boolean canTipGrow(BlockState p_154195_, ServerLevel p_154196_, BlockPos p_154197_)
```

**Parameters:**

- `p_154195_` (`BlockState`)
- `p_154196_` (`ServerLevel`)
- `p_154197_` (`BlockPos`)

**Returns:** `private static boolean`

### findRootBlock

```java
private static Optional<BlockPos> findRootBlock(Level p_154067_, BlockPos p_154068_, BlockState p_154069_, int p_154070_)
```

**Parameters:**

- `p_154067_` (`Level`)
- `p_154068_` (`BlockPos`)
- `p_154069_` (`BlockState`)
- `p_154070_` (`int`)

**Returns:** `private static Optional<BlockPos>`

### isValidPointedDripstonePlacement

```java
private static boolean isValidPointedDripstonePlacement(LevelReader p_154222_, BlockPos p_154223_, Direction p_154224_)
```

**Parameters:**

- `p_154222_` (`LevelReader`)
- `p_154223_` (`BlockPos`)
- `p_154224_` (`Direction`)

**Returns:** `private static boolean`

### isTip

```java
private static boolean isTip(BlockState p_154154_, boolean p_154155_)
```

**Parameters:**

- `p_154154_` (`BlockState`)
- `p_154155_` (`boolean`)

**Returns:** `private static boolean`

### isUnmergedTipWithDirection

```java
private static boolean isUnmergedTipWithDirection(BlockState p_154144_, Direction p_154145_)
```

**Parameters:**

- `p_154144_` (`BlockState`)
- `p_154145_` (`Direction`)

**Returns:** `private static boolean`

### isStalactite

```java
private static boolean isStalactite(BlockState p_154241_)
```

**Parameters:**

- `p_154241_` (`BlockState`)

**Returns:** `private static boolean`

### isPointedDripstoneWithDirection

```java
return isPointedDripstoneWithDirection()
```

**Returns:** `return`

### isStalagmite

```java
private static boolean isStalagmite(BlockState p_154243_)
```

**Parameters:**

- `p_154243_` (`BlockState`)

**Returns:** `private static boolean`

### isPointedDripstoneWithDirection

```java
return isPointedDripstoneWithDirection()
```

**Returns:** `return`

### isStalactiteStartPos

```java
private static boolean isStalactiteStartPos(BlockState p_154204_, LevelReader p_154205_, BlockPos p_154206_)
```

**Parameters:**

- `p_154204_` (`BlockState`)
- `p_154205_` (`LevelReader`)
- `p_154206_` (`BlockPos`)

**Returns:** `private static boolean`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_154112_, PathComputationType p_154115_)
```

**Parameters:**

- `p_154112_` (`BlockState`)
- `p_154115_` (`PathComputationType`)

**Returns:** `boolean`

### isPointedDripstoneWithDirection

```java
private static boolean isPointedDripstoneWithDirection(BlockState p_154208_, Direction p_154209_)
```

**Parameters:**

- `p_154208_` (`BlockState`)
- `p_154209_` (`Direction`)

**Returns:** `private static boolean`

### canDripThrough

```java
> canDripThrough()
```

**Returns:** `>`

### findStalactiteTipAboveCauldron

```java
public static BlockPos findStalactiteTipAboveCauldron(Level p_154056_, BlockPos p_154057_)
```

**Parameters:**

- `p_154056_` (`Level`)
- `p_154057_` (`BlockPos`)

**Returns:** `BlockPos`

### canDripThrough

```java
> canDripThrough()
```

**Returns:** `>`

### getCauldronFillFluidType

```java
public static Fluid getCauldronFillFluidType(ServerLevel p_221850_, BlockPos p_221851_)
```

**Parameters:**

- `p_221850_` (`ServerLevel`)
- `p_221851_` (`BlockPos`)

**Returns:** `public static Fluid`

### getFluidAboveStalactite

```java
private static Optional<PointedDripstoneBlock.FluidInfo> getFluidAboveStalactite(Level p_154182_, BlockPos p_154183_, BlockState p_154184_)
```

**Parameters:**

- `p_154182_` (`Level`)
- `p_154183_` (`BlockPos`)
- `p_154184_` (`BlockState`)

**Returns:** `private static Optional<PointedDripstoneBlock.FluidInfo>`

### canFillCauldron

```java
private static boolean canFillCauldron(Fluid p_154159_)
```

**Parameters:**

- `p_154159_` (`Fluid`)

**Returns:** `private static boolean`

### canGrow

```java
private static boolean canGrow(BlockState p_154141_, BlockState p_154142_)
```

**Parameters:**

- `p_154141_` (`BlockState`)
- `p_154142_` (`BlockState`)

**Returns:** `private static boolean`

### getDripFluid

```java
private static Fluid getDripFluid(Level p_154053_, Fluid p_154054_)
```

**Parameters:**

- `p_154053_` (`Level`)
- `p_154054_` (`Fluid`)

**Returns:** `private static Fluid`

### findBlockVertical

```java
private static Optional<BlockPos> findBlockVertical(LevelAccessor p_202007_, BlockPos p_202008_, Direction.AxisDirection p_202009_, BiPredicate<BlockPos, BlockState> p_202010_, Predicate<BlockState> p_202011_, int p_202012_)
```

**Parameters:**

- `p_202007_` (`LevelAccessor`)
- `p_202008_` (`BlockPos`)
- `p_202009_` (`Direction.AxisDirection`)
- `p_202010_` (`BiPredicate<BlockPos, BlockState>`)
- `p_202011_` (`Predicate<BlockState>`)
- `p_202012_` (`int`)

**Returns:** `private static Optional<BlockPos>`

### canDripThrough

```java
private static boolean canDripThrough(BlockGetter p_202018_, BlockPos p_202019_, BlockState p_202020_)
```

**Parameters:**

- `p_202018_` (`BlockGetter`)
- `p_202019_` (`BlockPos`)
- `p_202020_` (`BlockState`)

**Returns:** `private static boolean`

### FluidInfo

```java
static record FluidInfo(BlockPos pos, Fluid fluid, BlockState sourceState)
```

**Parameters:**

- `pos` (`BlockPos`)
- `fluid` (`Fluid`)
- `sourceState` (`BlockState`)

**Returns:** `static record`
