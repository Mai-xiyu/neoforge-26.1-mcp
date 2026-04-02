# DecoratedPotBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DecoratedPotBlock>` |  |
| `SHERDS_DYNAMIC_DROP_ID` | `ResourceLocation` |  |
| `CRACKED` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<DecoratedPotBlock> codec()
```

**Returns:** `MapCodec<DecoratedPotBlock>`

### DecoratedPotBlock

```java
public DecoratedPotBlock(BlockBehaviour.Properties p_273064_)
```

**Parameters:**

- `p_273064_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### updateShape

```java
protected BlockState updateShape(BlockState p_276307_, Direction p_276322_, BlockState p_276280_, LevelAccessor p_276320_, BlockPos p_276270_, BlockPos p_276312_)
```

**Parameters:**

- `p_276307_` (`BlockState`)
- `p_276322_` (`Direction`)
- `p_276280_` (`BlockState`)
- `p_276320_` (`LevelAccessor`)
- `p_276270_` (`BlockPos`)
- `p_276312_` (`BlockPos`)

**Returns:** `BlockState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_272711_)
```

**Parameters:**

- `p_272711_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316569_, BlockState p_316562_, Level p_316177_, BlockPos p_316898_, Player p_316632_, InteractionHand p_316424_, BlockHitResult p_316345_)
```

**Parameters:**

- `p_316569_` (`ItemStack`)
- `p_316562_` (`BlockState`)
- `p_316177_` (`Level`)
- `p_316898_` (`BlockPos`)
- `p_316632_` (`Player`)
- `p_316424_` (`InteractionHand`)
- `p_316345_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_316866_, Level p_316544_, BlockPos p_316541_, Player p_316732_, BlockHitResult p_316860_)
```

**Parameters:**

- `p_316866_` (`BlockState`)
- `p_316544_` (`Level`)
- `p_316541_` (`BlockPos`)
- `p_316732_` (`Player`)
- `p_316860_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_276295_, PathComputationType p_276303_)
```

**Parameters:**

- `p_276295_` (`BlockState`)
- `p_276303_` (`PathComputationType`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_273112_, BlockGetter p_273055_, BlockPos p_273137_, CollisionContext p_273151_)
```

**Parameters:**

- `p_273112_` (`BlockState`)
- `p_273055_` (`BlockGetter`)
- `p_273137_` (`BlockPos`)
- `p_273151_` (`CollisionContext`)

**Returns:** `VoxelShape`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_273169_)
```

**Parameters:**

- `p_273169_` (`StateDefinition.Builder<Block, BlockState>`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_273396_, BlockState p_272674_)
```

**Parameters:**

- `p_273396_` (`BlockPos`)
- `p_272674_` (`BlockState`)

**Returns:** `BlockEntity`

### DecoratedPotBlockEntity

```java
return new DecoratedPotBlockEntity()
```

**Returns:** `return new`

### onRemove

```java
protected void onRemove(BlockState p_305821_, Level p_306245_, BlockPos p_305894_, BlockState p_306294_, boolean p_306159_)
```

**Parameters:**

- `p_305821_` (`BlockState`)
- `p_306245_` (`Level`)
- `p_305894_` (`BlockPos`)
- `p_306294_` (`BlockState`)
- `p_306159_` (`boolean`)

### getDrops

```java
protected List<ItemStack> getDrops(BlockState p_287683_, LootParams.Builder p_287582_)
```

**Parameters:**

- `p_287683_` (`BlockState`)
- `p_287582_` (`LootParams.Builder`)

**Returns:** `List<ItemStack>`

### playerWillDestroy

```java
public BlockState playerWillDestroy(Level p_273590_, BlockPos p_273343_, BlockState p_272869_, Player p_273002_)
```

**Parameters:**

- `p_273590_` (`Level`)
- `p_273343_` (`BlockPos`)
- `p_272869_` (`BlockState`)
- `p_273002_` (`Player`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_272593_)
```

**Parameters:**

- `p_272593_` (`BlockState`)

**Returns:** `FluidState`

### getSoundType

```java
protected SoundType getSoundType(BlockState p_277561_)
```

**Parameters:**

- `p_277561_` (`BlockState`)

**Returns:** `SoundType`

### appendHoverText

```java
public void appendHoverText(ItemStack p_285238_, Item.TooltipContext p_339662_, List<Component> p_285448_, TooltipFlag p_284997_)
```

**Parameters:**

- `p_285238_` (`ItemStack`)
- `p_339662_` (`Item.TooltipContext`)
- `p_285448_` (`List<Component>`)
- `p_284997_` (`TooltipFlag`)

### onProjectileHit

```java
protected void onProjectileHit(Level p_306322_, BlockState p_306005_, BlockHitResult p_306105_, Projectile p_305851_)
```

**Parameters:**

- `p_306322_` (`Level`)
- `p_306005_` (`BlockState`)
- `p_306105_` (`BlockHitResult`)
- `p_305851_` (`Projectile`)

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304622_, BlockPos p_294412_, BlockState p_294723_)
```

**Parameters:**

- `p_304622_` (`LevelReader`)
- `p_294412_` (`BlockPos`)
- `p_294723_` (`BlockState`)

**Returns:** `ItemStack`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_305995_)
```

**Parameters:**

- `p_305995_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_306206_, Level p_306113_, BlockPos p_306305_)
```

**Parameters:**

- `p_306206_` (`BlockState`)
- `p_306113_` (`Level`)
- `p_306305_` (`BlockPos`)

**Returns:** `int`

### rotate

```java
protected BlockState rotate(BlockState p_333895_, Rotation p_333806_)
```

**Parameters:**

- `p_333895_` (`BlockState`)
- `p_333806_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_334078_, Mirror p_333905_)
```

**Parameters:**

- `p_334078_` (`BlockState`)
- `p_333905_` (`Mirror`)

**Returns:** `BlockState`
