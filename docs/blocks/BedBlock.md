# BedBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HorizontalDirectionalBlock`
**Implements:** `EntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BedBlock>` |  |
| `PART` | `EnumProperty<BedPart>` |  |
| `OCCUPIED` | `BooleanProperty` |  |
| `HEIGHT` | `int` |  |
| `BASE` | `VoxelShape` |  |
| `LEG_NORTH_WEST` | `VoxelShape` |  |
| `LEG_SOUTH_WEST` | `VoxelShape` |  |
| `LEG_NORTH_EAST` | `VoxelShape` |  |
| `LEG_SOUTH_EAST` | `VoxelShape` |  |
| `NORTH_SHAPE` | `VoxelShape` |  |
| `SOUTH_SHAPE` | `VoxelShape` |  |
| `WEST_SHAPE` | `VoxelShape` |  |
| `EAST_SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<BedBlock> codec()
```

**Returns:** `MapCodec<BedBlock>`

### BedBlock

```java
public BedBlock(DyeColor p_49454_, BlockBehaviour.Properties p_49455_)
```

**Parameters:**

- `p_49454_` (`DyeColor`)
- `p_49455_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getBedOrientation

```java
public static Direction getBedOrientation(BlockGetter p_49486_, BlockPos p_49487_)
```

**Parameters:**

- `p_49486_` (`BlockGetter`)
- `p_49487_` (`BlockPos`)

**Returns:** `Direction`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_49515_, Level p_49516_, BlockPos p_49517_, Player p_49518_, BlockHitResult p_49520_)
```

**Parameters:**

- `p_49515_` (`BlockState`)
- `p_49516_` (`Level`)
- `p_49517_` (`BlockPos`)
- `p_49518_` (`Player`)
- `p_49520_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### canSetSpawn

```java
public static boolean canSetSpawn(Level p_49489_)
```

**Parameters:**

- `p_49489_` (`Level`)

**Returns:** `public static boolean`

### kickVillagerOutOfBed

```java
private boolean kickVillagerOutOfBed(Level p_49491_, BlockPos p_49492_)
```

**Parameters:**

- `p_49491_` (`Level`)
- `p_49492_` (`BlockPos`)

**Returns:** `private boolean`

### fallOn

```java
public void fallOn(Level p_152169_, BlockState p_152170_, BlockPos p_152171_, Entity p_152172_, float p_152173_)
```

**Parameters:**

- `p_152169_` (`Level`)
- `p_152170_` (`BlockState`)
- `p_152171_` (`BlockPos`)
- `p_152172_` (`Entity`)
- `p_152173_` (`float`)

### updateEntityAfterFallOn

```java
public void updateEntityAfterFallOn(BlockGetter p_49483_, Entity p_49484_)
```

**Parameters:**

- `p_49483_` (`BlockGetter`)
- `p_49484_` (`Entity`)

### bounceUp

```java
private void bounceUp(Entity p_49457_)
```

**Parameters:**

- `p_49457_` (`Entity`)

**Returns:** `private void`

### updateShape

```java
protected BlockState updateShape(BlockState p_49525_, Direction p_49526_, BlockState p_49527_, LevelAccessor p_49528_, BlockPos p_49529_, BlockPos p_49530_)
```

**Parameters:**

- `p_49525_` (`BlockState`)
- `p_49526_` (`Direction`)
- `p_49527_` (`BlockState`)
- `p_49528_` (`LevelAccessor`)
- `p_49529_` (`BlockPos`)
- `p_49530_` (`BlockPos`)

**Returns:** `BlockState`

### getNeighbourDirection

```java
private static Direction getNeighbourDirection(BedPart p_49534_, Direction p_49535_)
```

**Parameters:**

- `p_49534_` (`BedPart`)
- `p_49535_` (`Direction`)

**Returns:** `private static Direction`

### playerWillDestroy

```java
public BlockState playerWillDestroy(Level p_49505_, BlockPos p_49506_, BlockState p_49507_, Player p_49508_)
```

**Parameters:**

- `p_49505_` (`Level`)
- `p_49506_` (`BlockPos`)
- `p_49507_` (`BlockState`)
- `p_49508_` (`Player`)

**Returns:** `BlockState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_49479_)
```

**Parameters:**

- `p_49479_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getShape

```java
protected VoxelShape getShape(BlockState p_49547_, BlockGetter p_49548_, BlockPos p_49549_, CollisionContext p_49550_)
```

**Parameters:**

- `p_49547_` (`BlockState`)
- `p_49548_` (`BlockGetter`)
- `p_49549_` (`BlockPos`)
- `p_49550_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getConnectedDirection

```java
public static Direction getConnectedDirection(BlockState p_49558_)
```

**Parameters:**

- `p_49558_` (`BlockState`)

**Returns:** `public static Direction`

### getBlockType

```java
public static DoubleBlockCombiner.BlockType getBlockType(BlockState p_49560_)
```

**Parameters:**

- `p_49560_` (`BlockState`)

**Returns:** `public static DoubleBlockCombiner.BlockType`

### isBunkBed

```java
private static boolean isBunkBed(BlockGetter p_49542_, BlockPos p_49543_)
```

**Parameters:**

- `p_49542_` (`BlockGetter`)
- `p_49543_` (`BlockPos`)

**Returns:** `private static boolean`

### findStandUpPosition

```java
public static Optional<Vec3> findStandUpPosition(EntityType<?> p_261547_, CollisionGetter p_261946_, BlockPos p_261614_, Direction p_261648_, float p_261680_)
```

**Parameters:**

- `p_261547_` (`EntityType<?>`)
- `p_261946_` (`CollisionGetter`)
- `p_261614_` (`BlockPos`)
- `p_261648_` (`Direction`)
- `p_261680_` (`float`)

**Returns:** `public static Optional<Vec3>`

### findBunkBedStandUpPosition

```java
return findBunkBedStandUpPosition()
```

**Returns:** `return`

### findBunkBedStandUpPosition

```java
private static Optional<Vec3> findBunkBedStandUpPosition(EntityType<?> p_49464_, CollisionGetter p_49465_, BlockPos p_49466_, Direction p_49467_, Direction p_49468_)
```

**Parameters:**

- `p_49464_` (`EntityType<?>`)
- `p_49465_` (`CollisionGetter`)
- `p_49466_` (`BlockPos`)
- `p_49467_` (`Direction`)
- `p_49468_` (`Direction`)

**Returns:** `private static Optional<Vec3>`

### findStandUpPositionAtOffset

```java
private static Optional<Vec3> findStandUpPositionAtOffset(EntityType<?> p_49470_, CollisionGetter p_49471_, BlockPos p_49472_, int[][] p_49473_, boolean p_49474_)
```

**Parameters:**

- `p_49470_` (`EntityType<?>`)
- `p_49471_` (`CollisionGetter`)
- `p_49472_` (`BlockPos`)
- `p_49473_` (`int[][]`)
- `p_49474_` (`boolean`)

**Returns:** `private static Optional<Vec3>`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_49545_)
```

**Parameters:**

- `p_49545_` (`BlockState`)

**Returns:** `RenderShape`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_49532_)
```

**Parameters:**

- `p_49532_` (`StateDefinition.Builder<Block, BlockState>`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_152175_, BlockState p_152176_)
```

**Parameters:**

- `p_152175_` (`BlockPos`)
- `p_152176_` (`BlockState`)

**Returns:** `BlockEntity`

### BedBlockEntity

```java
return new BedBlockEntity()
```

**Returns:** `return new`

### setPlacedBy

```java
public void setPlacedBy(Level p_49499_, BlockPos p_49500_, BlockState p_49501_, LivingEntity p_49502_, ItemStack p_49503_)
```

**Parameters:**

- `p_49499_` (`Level`)
- `p_49500_` (`BlockPos`)
- `p_49501_` (`BlockState`)
- `p_49502_` (`LivingEntity`)
- `p_49503_` (`ItemStack`)

### getColor

```java
public DyeColor getColor()
```

**Returns:** `public DyeColor`

### getSeed

```java
protected long getSeed(BlockState p_49522_, BlockPos p_49523_)
```

**Parameters:**

- `p_49522_` (`BlockState`)
- `p_49523_` (`BlockPos`)

**Returns:** `long`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_49510_, PathComputationType p_49513_)
```

**Parameters:**

- `p_49510_` (`BlockState`)
- `p_49513_` (`PathComputationType`)

**Returns:** `boolean`

### bedStandUpOffsets

```java
private static int[][] bedStandUpOffsets(Direction p_49539_, Direction p_49540_)
```

**Parameters:**

- `p_49539_` (`Direction`)
- `p_49540_` (`Direction`)

**Returns:** `private static int[][]`

### bedSurroundStandUpOffsets

```java
private static int[][] bedSurroundStandUpOffsets(Direction p_49552_, Direction p_49553_)
```

**Parameters:**

- `p_49552_` (`Direction`)
- `p_49553_` (`Direction`)

**Returns:** `private static int[][]`

### bedAboveStandUpOffsets

```java
private static int[][] bedAboveStandUpOffsets(Direction p_49537_)
```

**Parameters:**

- `p_49537_` (`Direction`)

**Returns:** `private static int[][]`
