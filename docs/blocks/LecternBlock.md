# LecternBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LecternBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `POWERED` | `BooleanProperty` |  |
| `HAS_BOOK` | `BooleanProperty` |  |
| `SHAPE_BASE` | `VoxelShape` |  |
| `SHAPE_POST` | `VoxelShape` |  |
| `SHAPE_COMMON` | `VoxelShape` |  |
| `SHAPE_TOP_PLATE` | `VoxelShape` |  |
| `SHAPE_COLLISION` | `VoxelShape` |  |
| `SHAPE_WEST` | `VoxelShape` |  |
| `SHAPE_NORTH` | `VoxelShape` |  |
| `SHAPE_EAST` | `VoxelShape` |  |
| `SHAPE_SOUTH` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<LecternBlock> codec()
```

**Returns:** `MapCodec<LecternBlock>`

### LecternBlock

```java
public LecternBlock(BlockBehaviour.Properties p_54479_)
```

**Parameters:**

- `p_54479_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_54559_)
```

**Parameters:**

- `p_54559_` (`BlockState`)

**Returns:** `RenderShape`

### getOcclusionShape

```java
protected VoxelShape getOcclusionShape(BlockState p_54584_, BlockGetter p_54585_, BlockPos p_54586_)
```

**Parameters:**

- `p_54584_` (`BlockState`)
- `p_54585_` (`BlockGetter`)
- `p_54586_` (`BlockPos`)

**Returns:** `VoxelShape`

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_54582_)
```

**Parameters:**

- `p_54582_` (`BlockState`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_54481_)
```

**Parameters:**

- `p_54481_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_54577_, BlockGetter p_54578_, BlockPos p_54579_, CollisionContext p_54580_)
```

**Parameters:**

- `p_54577_` (`BlockState`)
- `p_54578_` (`BlockGetter`)
- `p_54579_` (`BlockPos`)
- `p_54580_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getShape

```java
protected VoxelShape getShape(BlockState p_54561_, BlockGetter p_54562_, BlockPos p_54563_, CollisionContext p_54564_)
```

**Parameters:**

- `p_54561_` (`BlockState`)
- `p_54562_` (`BlockGetter`)
- `p_54563_` (`BlockPos`)
- `p_54564_` (`CollisionContext`)

**Returns:** `VoxelShape`

### rotate

```java
protected BlockState rotate(BlockState p_54540_, Rotation p_54541_)
```

**Parameters:**

- `p_54540_` (`BlockState`)
- `p_54541_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_54537_, Mirror p_54538_)
```

**Parameters:**

- `p_54537_` (`BlockState`)
- `p_54538_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54543_)
```

**Parameters:**

- `p_54543_` (`StateDefinition.Builder<Block, BlockState>`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153573_, BlockState p_153574_)
```

**Parameters:**

- `p_153573_` (`BlockPos`)
- `p_153574_` (`BlockState`)

**Returns:** `BlockEntity`

### LecternBlockEntity

```java
return new LecternBlockEntity()
```

**Returns:** `return new`

### tryPlaceBook

```java
public static boolean tryPlaceBook(LivingEntity p_347473_, Level p_270604_, BlockPos p_270276_, BlockState p_270445_, ItemStack p_270458_)
```

**Parameters:**

- `p_347473_` (`LivingEntity`)
- `p_270604_` (`Level`)
- `p_270276_` (`BlockPos`)
- `p_270445_` (`BlockState`)
- `p_270458_` (`ItemStack`)

**Returns:** `public static boolean`

### placeBook

```java
 placeBook()
```

**Returns:** ``

### placeBook

```java
private static void placeBook(LivingEntity p_347484_, Level p_270065_, BlockPos p_270155_, BlockState p_270753_, ItemStack p_270173_)
```

**Parameters:**

- `p_347484_` (`LivingEntity`)
- `p_270065_` (`Level`)
- `p_270155_` (`BlockPos`)
- `p_270753_` (`BlockState`)
- `p_270173_` (`ItemStack`)

**Returns:** `private static void`

### resetBookState

```java
 resetBookState()
```

**Returns:** ``

### resetBookState

```java
public static void resetBookState(Entity p_270231_, Level p_270114_, BlockPos p_270251_, BlockState p_270758_, boolean p_270452_)
```

**Parameters:**

- `p_270231_` (`Entity`)
- `p_270114_` (`Level`)
- `p_270251_` (`BlockPos`)
- `p_270758_` (`BlockState`)
- `p_270452_` (`boolean`)

**Returns:** `public static void`

### updateBelow

```java
 updateBelow()
```

**Returns:** ``

### signalPageChange

```java
public static void signalPageChange(Level p_54489_, BlockPos p_54490_, BlockState p_54491_)
```

**Parameters:**

- `p_54489_` (`Level`)
- `p_54490_` (`BlockPos`)
- `p_54491_` (`BlockState`)

**Returns:** `public static void`

### changePowered

```java
 changePowered()
```

**Returns:** ``

### changePowered

```java
private static void changePowered(Level p_54554_, BlockPos p_54555_, BlockState p_54556_, boolean p_54557_)
```

**Parameters:**

- `p_54554_` (`Level`)
- `p_54555_` (`BlockPos`)
- `p_54556_` (`BlockState`)
- `p_54557_` (`boolean`)

**Returns:** `private static void`

### updateBelow

```java
 updateBelow()
```

**Returns:** ``

### updateBelow

```java
private static void updateBelow(Level p_54545_, BlockPos p_54546_, BlockState p_54547_)
```

**Parameters:**

- `p_54545_` (`Level`)
- `p_54546_` (`BlockPos`)
- `p_54547_` (`BlockState`)

**Returns:** `private static void`

### tick

```java
protected void tick(BlockState p_221388_, ServerLevel p_221389_, BlockPos p_221390_, RandomSource p_221391_)
```

**Parameters:**

- `p_221388_` (`BlockState`)
- `p_221389_` (`ServerLevel`)
- `p_221390_` (`BlockPos`)
- `p_221391_` (`RandomSource`)

### changePowered

```java
 changePowered()
```

**Returns:** ``

### onRemove

```java
protected void onRemove(BlockState p_54531_, Level p_54532_, BlockPos p_54533_, BlockState p_54534_, boolean p_54535_)
```

**Parameters:**

- `p_54531_` (`BlockState`)
- `p_54532_` (`Level`)
- `p_54533_` (`BlockPos`)
- `p_54534_` (`BlockState`)
- `p_54535_` (`boolean`)

### popBook

```java
private void popBook(BlockState p_54588_, Level p_54589_, BlockPos p_54590_)
```

**Parameters:**

- `p_54588_` (`BlockState`)
- `p_54589_` (`Level`)
- `p_54590_` (`BlockPos`)

**Returns:** `private void`

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_54575_)
```

**Parameters:**

- `p_54575_` (`BlockState`)

**Returns:** `boolean`

### getSignal

```java
protected int getSignal(BlockState p_54515_, BlockGetter p_54516_, BlockPos p_54517_, Direction p_54518_)
```

**Parameters:**

- `p_54515_` (`BlockState`)
- `p_54516_` (`BlockGetter`)
- `p_54517_` (`BlockPos`)
- `p_54518_` (`Direction`)

**Returns:** `int`

### getDirectSignal

```java
protected int getDirectSignal(BlockState p_54566_, BlockGetter p_54567_, BlockPos p_54568_, Direction p_54569_)
```

**Parameters:**

- `p_54566_` (`BlockState`)
- `p_54567_` (`BlockGetter`)
- `p_54568_` (`BlockPos`)
- `p_54569_` (`Direction`)

**Returns:** `int`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_54503_)
```

**Parameters:**

- `p_54503_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_54520_, Level p_54521_, BlockPos p_54522_)
```

**Parameters:**

- `p_54520_` (`BlockState`)
- `p_54521_` (`Level`)
- `p_54522_` (`BlockPos`)

**Returns:** `int`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316392_, BlockState p_316600_, Level p_316640_, BlockPos p_316673_, Player p_316670_, InteractionHand p_316384_, BlockHitResult p_316419_)
```

**Parameters:**

- `p_316392_` (`ItemStack`)
- `p_316600_` (`BlockState`)
- `p_316640_` (`Level`)
- `p_316673_` (`BlockPos`)
- `p_316670_` (`Player`)
- `p_316384_` (`InteractionHand`)
- `p_316419_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_316164_, Level p_316515_, BlockPos p_316598_, Player p_316584_, BlockHitResult p_316197_)
```

**Parameters:**

- `p_316164_` (`BlockState`)
- `p_316515_` (`Level`)
- `p_316598_` (`BlockPos`)
- `p_316584_` (`Player`)
- `p_316197_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getMenuProvider

```java
protected MenuProvider getMenuProvider(BlockState p_54571_, Level p_54572_, BlockPos p_54573_)
```

**Parameters:**

- `p_54571_` (`BlockState`)
- `p_54572_` (`Level`)
- `p_54573_` (`BlockPos`)

**Returns:** `MenuProvider`

### openScreen

```java
private void openScreen(Level p_54485_, BlockPos p_54486_, Player p_54487_)
```

**Parameters:**

- `p_54485_` (`Level`)
- `p_54486_` (`BlockPos`)
- `p_54487_` (`Player`)

**Returns:** `private void`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_54510_, PathComputationType p_54513_)
```

**Parameters:**

- `p_54510_` (`BlockState`)
- `p_54513_` (`PathComputationType`)

**Returns:** `boolean`
