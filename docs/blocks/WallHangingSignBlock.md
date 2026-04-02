# WallHangingSignBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `SignBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WallHangingSignBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `PLANK_NORTHSOUTH` | `VoxelShape` |  |
| `PLANK_EASTWEST` | `VoxelShape` |  |
| `SHAPE_NORTHSOUTH` | `VoxelShape` |  |
| `SHAPE_EASTWEST` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<WallHangingSignBlock> codec()
```

**Returns:** `MapCodec<WallHangingSignBlock>`

### WallHangingSignBlock

```java
public WallHangingSignBlock(WoodType p_252140_, BlockBehaviour.Properties p_251606_)
```

**Parameters:**

- `p_252140_` (`WoodType`)
- `p_251606_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316420_, BlockState p_316885_, Level p_316114_, BlockPos p_316297_, Player p_316609_, InteractionHand p_316187_, BlockHitResult p_316223_)
```

**Parameters:**

- `p_316420_` (`ItemStack`)
- `p_316885_` (`BlockState`)
- `p_316114_` (`Level`)
- `p_316297_` (`BlockPos`)
- `p_316609_` (`Player`)
- `p_316187_` (`InteractionHand`)
- `p_316223_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### shouldTryToChainAnotherHangingSign

```java
private boolean shouldTryToChainAnotherHangingSign(BlockState p_278346_, Player p_278263_, BlockHitResult p_278269_, SignBlockEntity p_278290_, ItemStack p_278238_)
```

**Parameters:**

- `p_278346_` (`BlockState`)
- `p_278263_` (`Player`)
- `p_278269_` (`BlockHitResult`)
- `p_278290_` (`SignBlockEntity`)
- `p_278238_` (`ItemStack`)

**Returns:** `private boolean`

### isHittingEditableSide

```java
private boolean isHittingEditableSide(BlockHitResult p_278339_, BlockState p_278302_)
```

**Parameters:**

- `p_278339_` (`BlockHitResult`)
- `p_278302_` (`BlockState`)

**Returns:** `private boolean`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `String`

### getShape

```java
protected VoxelShape getShape(BlockState p_250980_, BlockGetter p_251012_, BlockPos p_251391_, CollisionContext p_251875_)
```

**Parameters:**

- `p_250980_` (`BlockState`)
- `p_251012_` (`BlockGetter`)
- `p_251391_` (`BlockPos`)
- `p_251875_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getBlockSupportShape

```java
protected VoxelShape getBlockSupportShape(BlockState p_253927_, BlockGetter p_254149_, BlockPos p_253805_)
```

**Parameters:**

- `p_253927_` (`BlockState`)
- `p_254149_` (`BlockGetter`)
- `p_253805_` (`BlockPos`)

**Returns:** `VoxelShape`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_249963_, BlockGetter p_248542_, BlockPos p_252224_, CollisionContext p_251891_)
```

**Parameters:**

- `p_249963_` (`BlockState`)
- `p_248542_` (`BlockGetter`)
- `p_252224_` (`BlockPos`)
- `p_251891_` (`CollisionContext`)

**Returns:** `VoxelShape`

### canPlace

```java
public boolean canPlace(BlockState p_249472_, LevelReader p_249453_, BlockPos p_251235_)
```

**Parameters:**

- `p_249472_` (`BlockState`)
- `p_249453_` (`LevelReader`)
- `p_251235_` (`BlockPos`)

**Returns:** `public boolean`

### canAttachTo

```java
public boolean canAttachTo(LevelReader p_249746_, BlockState p_251128_, BlockPos p_250583_, Direction p_250567_)
```

**Parameters:**

- `p_249746_` (`LevelReader`)
- `p_251128_` (`BlockState`)
- `p_250583_` (`BlockPos`)
- `p_250567_` (`Direction`)

**Returns:** `public boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_251399_)
```

**Parameters:**

- `p_251399_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_249879_, Direction p_249939_, BlockState p_250767_, LevelAccessor p_252228_, BlockPos p_252327_, BlockPos p_251853_)
```

**Parameters:**

- `p_249879_` (`BlockState`)
- `p_249939_` (`Direction`)
- `p_250767_` (`BlockState`)
- `p_252228_` (`LevelAccessor`)
- `p_252327_` (`BlockPos`)
- `p_251853_` (`BlockPos`)

**Returns:** `BlockState`

### getYRotationDegrees

```java
public float getYRotationDegrees(BlockState p_278073_)
```

**Parameters:**

- `p_278073_` (`BlockState`)

**Returns:** `float`

### rotate

```java
protected BlockState rotate(BlockState p_249292_, Rotation p_249867_)
```

**Parameters:**

- `p_249292_` (`BlockState`)
- `p_249867_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_250446_, Mirror p_249494_)
```

**Parameters:**

- `p_250446_` (`BlockState`)
- `p_249494_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_251029_)
```

**Parameters:**

- `p_251029_` (`StateDefinition.Builder<Block, BlockState>`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_250745_, BlockState p_250905_)
```

**Parameters:**

- `p_250745_` (`BlockPos`)
- `p_250905_` (`BlockState`)

**Returns:** `BlockEntity`

### HangingSignBlockEntity

```java
return new HangingSignBlockEntity()
```

**Returns:** `return new`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_253755_, PathComputationType p_253687_)
```

**Parameters:**

- `p_253755_` (`BlockState`)
- `p_253687_` (`PathComputationType`)

**Returns:** `boolean`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_279316_, BlockState p_279345_, BlockEntityType<T> p_279384_)
```

**Parameters:**

- `p_279316_` (`Level`)
- `p_279345_` (`BlockState`)
- `p_279384_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createTickerHelper

```java
return createTickerHelper()
```

**Returns:** `return`
