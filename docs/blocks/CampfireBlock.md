# CampfireBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CampfireBlock>` |  |
| `SHAPE` | `VoxelShape` |  |
| `LIT` | `BooleanProperty` |  |
| `SIGNAL_FIRE` | `BooleanProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `FACING` | `DirectionProperty` |  |

## Methods

### codec

```java
public MapCodec<CampfireBlock> codec()
```

**Returns:** `MapCodec<CampfireBlock>`

### CampfireBlock

```java
public CampfireBlock(boolean p_51236_, int p_51237_, BlockBehaviour.Properties p_51238_)
```

**Parameters:**

- `p_51236_` (`boolean`)
- `p_51237_` (`int`)
- `p_51238_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316347_, BlockState p_51274_, Level p_51275_, BlockPos p_51276_, Player p_51277_, InteractionHand p_51278_, BlockHitResult p_51279_)
```

**Parameters:**

- `p_316347_` (`ItemStack`)
- `p_51274_` (`BlockState`)
- `p_51275_` (`Level`)
- `p_51276_` (`BlockPos`)
- `p_51277_` (`Player`)
- `p_51278_` (`InteractionHand`)
- `p_51279_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### entityInside

```java
protected void entityInside(BlockState p_51269_, Level p_51270_, BlockPos p_51271_, Entity p_51272_)
```

**Parameters:**

- `p_51269_` (`BlockState`)
- `p_51270_` (`Level`)
- `p_51271_` (`BlockPos`)
- `p_51272_` (`Entity`)

### onRemove

```java
protected void onRemove(BlockState p_51281_, Level p_51282_, BlockPos p_51283_, BlockState p_51284_, boolean p_51285_)
```

**Parameters:**

- `p_51281_` (`BlockState`)
- `p_51282_` (`Level`)
- `p_51283_` (`BlockPos`)
- `p_51284_` (`BlockState`)
- `p_51285_` (`boolean`)

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_51240_)
```

**Parameters:**

- `p_51240_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_51298_, Direction p_51299_, BlockState p_51300_, LevelAccessor p_51301_, BlockPos p_51302_, BlockPos p_51303_)
```

**Parameters:**

- `p_51298_` (`BlockState`)
- `p_51299_` (`Direction`)
- `p_51300_` (`BlockState`)
- `p_51301_` (`LevelAccessor`)
- `p_51302_` (`BlockPos`)
- `p_51303_` (`BlockPos`)

**Returns:** `BlockState`

### isSmokeSource

```java
private boolean isSmokeSource(BlockState p_51324_)
```

**Parameters:**

- `p_51324_` (`BlockState`)

**Returns:** `private boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_51309_, BlockGetter p_51310_, BlockPos p_51311_, CollisionContext p_51312_)
```

**Parameters:**

- `p_51309_` (`BlockState`)
- `p_51310_` (`BlockGetter`)
- `p_51311_` (`BlockPos`)
- `p_51312_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_51307_)
```

**Parameters:**

- `p_51307_` (`BlockState`)

**Returns:** `RenderShape`

### animateTick

```java
public void animateTick(BlockState p_220918_, Level p_220919_, BlockPos p_220920_, RandomSource p_220921_)
```

**Parameters:**

- `p_220918_` (`BlockState`)
- `p_220919_` (`Level`)
- `p_220920_` (`BlockPos`)
- `p_220921_` (`RandomSource`)

### dowse

```java
public static void dowse(Entity p_152750_, LevelAccessor p_152751_, BlockPos p_152752_, BlockState p_152753_)
```

**Parameters:**

- `p_152750_` (`Entity`)
- `p_152751_` (`LevelAccessor`)
- `p_152752_` (`BlockPos`)
- `p_152753_` (`BlockState`)

**Returns:** `public static void`

### placeLiquid

```java
public boolean placeLiquid(LevelAccessor p_51257_, BlockPos p_51258_, BlockState p_51259_, FluidState p_51260_)
```

**Parameters:**

- `p_51257_` (`LevelAccessor`)
- `p_51258_` (`BlockPos`)
- `p_51259_` (`BlockState`)
- `p_51260_` (`FluidState`)

**Returns:** `boolean`

### dowse

```java
 dowse()
```

**Returns:** ``

### onProjectileHit

```java
protected void onProjectileHit(Level p_51244_, BlockState p_51245_, BlockHitResult p_51246_, Projectile p_51247_)
```

**Parameters:**

- `p_51244_` (`Level`)
- `p_51245_` (`BlockState`)
- `p_51246_` (`BlockHitResult`)
- `p_51247_` (`Projectile`)

### makeParticles

```java
public static void makeParticles(Level p_51252_, BlockPos p_51253_, boolean p_51254_, boolean p_51255_)
```

**Parameters:**

- `p_51252_` (`Level`)
- `p_51253_` (`BlockPos`)
- `p_51254_` (`boolean`)
- `p_51255_` (`boolean`)

**Returns:** `public static void`

### isSmokeyPos

```java
public static boolean isSmokeyPos(Level p_51249_, BlockPos p_51250_)
```

**Parameters:**

- `p_51249_` (`Level`)
- `p_51250_` (`BlockPos`)

**Returns:** `public static boolean`

### isLitCampfire

```java
return isLitCampfire()
```

**Returns:** `return`

### isLitCampfire

```java
public static boolean isLitCampfire(BlockState p_51320_)
```

**Parameters:**

- `p_51320_` (`BlockState`)

**Returns:** `public static boolean`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_51318_)
```

**Parameters:**

- `p_51318_` (`BlockState`)

**Returns:** `FluidState`

### rotate

```java
protected BlockState rotate(BlockState p_51295_, Rotation p_51296_)
```

**Parameters:**

- `p_51295_` (`BlockState`)
- `p_51296_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_51292_, Mirror p_51293_)
```

**Parameters:**

- `p_51292_` (`BlockState`)
- `p_51293_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51305_)
```

**Parameters:**

- `p_51305_` (`StateDefinition.Builder<Block, BlockState>`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_152759_, BlockState p_152760_)
```

**Parameters:**

- `p_152759_` (`BlockPos`)
- `p_152760_` (`BlockState`)

**Returns:** `BlockEntity`

### CampfireBlockEntity

```java
return new CampfireBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_152755_, BlockState p_152756_, BlockEntityType<T> p_152757_)
```

**Parameters:**

- `p_152755_` (`Level`)
- `p_152756_` (`BlockState`)
- `p_152757_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_51264_, PathComputationType p_51267_)
```

**Parameters:**

- `p_51264_` (`BlockState`)
- `p_51267_` (`PathComputationType`)

**Returns:** `boolean`

### canLight

```java
public static boolean canLight(BlockState p_51322_)
```

**Parameters:**

- `p_51322_` (`BlockState`)

**Returns:** `public static boolean`
