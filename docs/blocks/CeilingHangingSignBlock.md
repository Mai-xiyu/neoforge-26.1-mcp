# CeilingHangingSignBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `SignBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CeilingHangingSignBlock>` |  |
| `ROTATION` | `IntegerProperty` |  |
| `ATTACHED` | `BooleanProperty` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<CeilingHangingSignBlock> codec()
```

**Returns:** `MapCodec<CeilingHangingSignBlock>`

### CeilingHangingSignBlock

```java
public CeilingHangingSignBlock(WoodType p_248716_, BlockBehaviour.Properties p_250481_)
```

**Parameters:**

- `p_248716_` (`WoodType`)
- `p_250481_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316602_, BlockState p_316839_, Level p_316805_, BlockPos p_316894_, Player p_316202_, InteractionHand p_316538_, BlockHitResult p_316895_)
```

**Parameters:**

- `p_316602_` (`ItemStack`)
- `p_316839_` (`BlockState`)
- `p_316805_` (`Level`)
- `p_316894_` (`BlockPos`)
- `p_316202_` (`Player`)
- `p_316538_` (`InteractionHand`)
- `p_316895_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### shouldTryToChainAnotherHangingSign

```java
private boolean shouldTryToChainAnotherHangingSign(Player p_278279_, BlockHitResult p_278273_, SignBlockEntity p_278236_, ItemStack p_278343_)
```

**Parameters:**

- `p_278279_` (`Player`)
- `p_278273_` (`BlockHitResult`)
- `p_278236_` (`SignBlockEntity`)
- `p_278343_` (`ItemStack`)

**Returns:** `private boolean`

### canSurvive

```java
protected boolean canSurvive(BlockState p_248994_, LevelReader p_249061_, BlockPos p_249490_)
```

**Parameters:**

- `p_248994_` (`BlockState`)
- `p_249061_` (`LevelReader`)
- `p_249490_` (`BlockPos`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_252121_)
```

**Parameters:**

- `p_252121_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getShape

```java
protected VoxelShape getShape(BlockState p_250564_, BlockGetter p_248998_, BlockPos p_249501_, CollisionContext p_248978_)
```

**Parameters:**

- `p_250564_` (`BlockState`)
- `p_248998_` (`BlockGetter`)
- `p_249501_` (`BlockPos`)
- `p_248978_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getBlockSupportShape

```java
protected VoxelShape getBlockSupportShape(BlockState p_254482_, BlockGetter p_253669_, BlockPos p_253916_)
```

**Parameters:**

- `p_254482_` (`BlockState`)
- `p_253669_` (`BlockGetter`)
- `p_253916_` (`BlockPos`)

**Returns:** `VoxelShape`

### updateShape

```java
protected BlockState updateShape(BlockState p_251270_, Direction p_250331_, BlockState p_249591_, LevelAccessor p_251903_, BlockPos p_249685_, BlockPos p_251506_)
```

**Parameters:**

- `p_251270_` (`BlockState`)
- `p_250331_` (`Direction`)
- `p_249591_` (`BlockState`)
- `p_251903_` (`LevelAccessor`)
- `p_249685_` (`BlockPos`)
- `p_251506_` (`BlockPos`)

**Returns:** `BlockState`

### getYRotationDegrees

```java
public float getYRotationDegrees(BlockState p_277758_)
```

**Parameters:**

- `p_277758_` (`BlockState`)

**Returns:** `float`

### rotate

```java
protected BlockState rotate(BlockState p_251162_, Rotation p_250515_)
```

**Parameters:**

- `p_251162_` (`BlockState`)
- `p_250515_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_249682_, Mirror p_250199_)
```

**Parameters:**

- `p_249682_` (`BlockState`)
- `p_250199_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_251174_)
```

**Parameters:**

- `p_251174_` (`StateDefinition.Builder<Block, BlockState>`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_249338_, BlockState p_250706_)
```

**Parameters:**

- `p_249338_` (`BlockPos`)
- `p_250706_` (`BlockState`)

**Returns:** `BlockEntity`

### HangingSignBlockEntity

```java
return new HangingSignBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_279379_, BlockState p_279390_, BlockEntityType<T> p_279231_)
```

**Parameters:**

- `p_279379_` (`Level`)
- `p_279390_` (`BlockState`)
- `p_279231_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createTickerHelper

```java
return createTickerHelper()
```

**Returns:** `return`
