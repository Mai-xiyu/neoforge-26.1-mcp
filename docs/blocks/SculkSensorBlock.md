# SculkSensorBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SculkSensorBlock>` |  |
| `ACTIVE_TICKS` | `int` |  |
| `COOLDOWN_TICKS` | `int` |  |
| `PHASE` | `EnumProperty<SculkSensorPhase>` |  |
| `POWER` | `IntegerProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<? extends SculkSensorBlock> codec()
```

**Returns:** `MapCodec<? extends SculkSensorBlock>`

### SculkSensorBlock

```java
public SculkSensorBlock(BlockBehaviour.Properties p_277588_)
```

**Parameters:**

- `p_277588_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_154396_)
```

**Parameters:**

- `p_154396_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_154479_)
```

**Parameters:**

- `p_154479_` (`BlockState`)

**Returns:** `FluidState`

### tick

```java
protected void tick(BlockState p_222137_, ServerLevel p_222138_, BlockPos p_222139_, RandomSource p_222140_)
```

**Parameters:**

- `p_222137_` (`BlockState`)
- `p_222138_` (`ServerLevel`)
- `p_222139_` (`BlockPos`)
- `p_222140_` (`RandomSource`)

### deactivate

```java
 deactivate()
```

**Returns:** ``

### stepOn

```java
public void stepOn(Level p_222132_, BlockPos p_222133_, BlockState p_222134_, Entity p_222135_)
```

**Parameters:**

- `p_222132_` (`Level`)
- `p_222133_` (`BlockPos`)
- `p_222134_` (`BlockState`)
- `p_222135_` (`Entity`)

### onPlace

```java
protected void onPlace(BlockState p_154471_, Level p_154472_, BlockPos p_154473_, BlockState p_154474_, boolean p_154475_)
```

**Parameters:**

- `p_154471_` (`BlockState`)
- `p_154472_` (`Level`)
- `p_154473_` (`BlockPos`)
- `p_154474_` (`BlockState`)
- `p_154475_` (`boolean`)

### onRemove

```java
protected void onRemove(BlockState p_154446_, Level p_154447_, BlockPos p_154448_, BlockState p_154449_, boolean p_154450_)
```

**Parameters:**

- `p_154446_` (`BlockState`)
- `p_154447_` (`Level`)
- `p_154448_` (`BlockPos`)
- `p_154449_` (`BlockState`)
- `p_154450_` (`boolean`)

### updateNeighbours

```java
 updateNeighbours()
```

**Returns:** ``

### updateShape

```java
protected BlockState updateShape(BlockState p_154457_, Direction p_154458_, BlockState p_154459_, LevelAccessor p_154460_, BlockPos p_154461_, BlockPos p_154462_)
```

**Parameters:**

- `p_154457_` (`BlockState`)
- `p_154458_` (`Direction`)
- `p_154459_` (`BlockState`)
- `p_154460_` (`LevelAccessor`)
- `p_154461_` (`BlockPos`)
- `p_154462_` (`BlockPos`)

**Returns:** `BlockState`

### updateNeighbours

```java
private static void updateNeighbours(Level p_278067_, BlockPos p_277440_, BlockState p_277354_)
```

**Parameters:**

- `p_278067_` (`Level`)
- `p_277440_` (`BlockPos`)
- `p_277354_` (`BlockState`)

**Returns:** `private static void`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_154466_, BlockState p_154467_)
```

**Parameters:**

- `p_154466_` (`BlockPos`)
- `p_154467_` (`BlockState`)

**Returns:** `BlockEntity`

### SculkSensorBlockEntity

```java
return new SculkSensorBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_154401_, BlockState p_154402_, BlockEntityType<T> p_154403_)
```

**Parameters:**

- `p_154401_` (`Level`)
- `p_154402_` (`BlockState`)
- `p_154403_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_154477_)
```

**Parameters:**

- `p_154477_` (`BlockState`)

**Returns:** `RenderShape`

### getShape

```java
protected VoxelShape getShape(BlockState p_154432_, BlockGetter p_154433_, BlockPos p_154434_, CollisionContext p_154435_)
```

**Parameters:**

- `p_154432_` (`BlockState`)
- `p_154433_` (`BlockGetter`)
- `p_154434_` (`BlockPos`)
- `p_154435_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_154484_)
```

**Parameters:**

- `p_154484_` (`BlockState`)

**Returns:** `boolean`

### getSignal

```java
protected int getSignal(BlockState p_154437_, BlockGetter p_154438_, BlockPos p_154439_, Direction p_154440_)
```

**Parameters:**

- `p_154437_` (`BlockState`)
- `p_154438_` (`BlockGetter`)
- `p_154439_` (`BlockPos`)
- `p_154440_` (`Direction`)

**Returns:** `int`

### getDirectSignal

```java
public int getDirectSignal(BlockState p_279407_, BlockGetter p_279217_, BlockPos p_279190_, Direction p_279273_)
```

**Parameters:**

- `p_279407_` (`BlockState`)
- `p_279217_` (`BlockGetter`)
- `p_279190_` (`BlockPos`)
- `p_279273_` (`Direction`)

**Returns:** `int`

### getPhase

```java
public static SculkSensorPhase getPhase(BlockState p_154488_)
```

**Parameters:**

- `p_154488_` (`BlockState`)

**Returns:** `public static SculkSensorPhase`

### canActivate

```java
public static boolean canActivate(BlockState p_154490_)
```

**Parameters:**

- `p_154490_` (`BlockState`)

**Returns:** `public static boolean`

### deactivate

```java
public static void deactivate(Level p_154408_, BlockPos p_154409_, BlockState p_154410_)
```

**Parameters:**

- `p_154408_` (`Level`)
- `p_154409_` (`BlockPos`)
- `p_154410_` (`BlockState`)

**Returns:** `public static void`

### updateNeighbours

```java
 updateNeighbours()
```

**Returns:** ``

### getActiveTicks

```java
public int getActiveTicks()
```

**Returns:** `int`

### activate

```java
public void activate(Entity p_277529_, Level p_277340_, BlockPos p_277386_, BlockState p_277799_, int p_277993_, int p_278003_)
```

**Parameters:**

- `p_277529_` (`Entity`)
- `p_277340_` (`Level`)
- `p_277386_` (`BlockPos`)
- `p_277799_` (`BlockState`)
- `p_277993_` (`int`)
- `p_278003_` (`int`)

**Returns:** `public void`

### updateNeighbours

```java
 updateNeighbours()
```

**Returns:** ``

### tryResonateVibration

```java
 tryResonateVibration()
```

**Returns:** ``

### tryResonateVibration

```java
public static void tryResonateVibration(Entity p_279315_, Level p_277804_, BlockPos p_277458_, int p_277347_)
```

**Parameters:**

- `p_279315_` (`Entity`)
- `p_277804_` (`Level`)
- `p_277458_` (`BlockPos`)
- `p_277347_` (`int`)

**Returns:** `public static void`

### animateTick

```java
public void animateTick(BlockState p_222148_, Level p_222149_, BlockPos p_222150_, RandomSource p_222151_)
```

**Parameters:**

- `p_222148_` (`BlockState`)
- `p_222149_` (`Level`)
- `p_222150_` (`BlockPos`)
- `p_222151_` (`RandomSource`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_154464_)
```

**Parameters:**

- `p_154464_` (`StateDefinition.Builder<Block, BlockState>`)

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_154481_)
```

**Parameters:**

- `p_154481_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_154442_, Level p_154443_, BlockPos p_154444_)
```

**Parameters:**

- `p_154442_` (`BlockState`)
- `p_154443_` (`Level`)
- `p_154444_` (`BlockPos`)

**Returns:** `int`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_154427_, PathComputationType p_154430_)
```

**Parameters:**

- `p_154427_` (`BlockState`)
- `p_154430_` (`PathComputationType`)

**Returns:** `boolean`

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_154486_)
```

**Parameters:**

- `p_154486_` (`BlockState`)

**Returns:** `boolean`

### spawnAfterBreak

```java
protected void spawnAfterBreak(BlockState p_222142_, ServerLevel p_222143_, BlockPos p_222144_, ItemStack p_222145_, boolean p_222146_)
```

**Parameters:**

- `p_222142_` (`BlockState`)
- `p_222143_` (`ServerLevel`)
- `p_222144_` (`BlockPos`)
- `p_222145_` (`ItemStack`)
- `p_222146_` (`boolean`)

### getExpDrop

```java
public int getExpDrop(BlockState state, net.minecraft.world.level.LevelAccessor level, BlockPos pos, .jetbrains.annotations.Nullable net.minecraft.world.level.block.entity.BlockEntity blockEntity, .jetbrains.annotations.Nullable net.minecraft.world.entity.Entity breaker, ItemStack tool)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`net.minecraft.world.level.LevelAccessor`)
- `pos` (`BlockPos`)
- `blockEntity` (`.jetbrains.annotations.Nullable net.minecraft.world.level.block.entity.BlockEntity`)
- `breaker` (`.jetbrains.annotations.Nullable net.minecraft.world.entity.Entity`)
- `tool` (`ItemStack`)

**Returns:** `int`
