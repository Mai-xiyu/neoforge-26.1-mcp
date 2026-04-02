# BeehiveBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BeehiveBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `HONEY_LEVEL` | `IntegerProperty` |  |
| `MAX_HONEY_LEVELS` | `int` |  |

## Methods

### codec

```java
public MapCodec<BeehiveBlock> codec()
```

**Returns:** `MapCodec<BeehiveBlock>`

### BeehiveBlock

```java
public BeehiveBlock(BlockBehaviour.Properties p_49568_)
```

**Parameters:**

- `p_49568_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_49618_)
```

**Parameters:**

- `p_49618_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_49620_, Level p_49621_, BlockPos p_49622_)
```

**Parameters:**

- `p_49620_` (`BlockState`)
- `p_49621_` (`Level`)
- `p_49622_` (`BlockPos`)

**Returns:** `int`

### playerDestroy

```java
public void playerDestroy(Level p_49584_, Player p_49585_, BlockPos p_49586_, BlockState p_49587_, BlockEntity p_49588_, ItemStack p_49589_)
```

**Parameters:**

- `p_49584_` (`Level`)
- `p_49585_` (`Player`)
- `p_49586_` (`BlockPos`)
- `p_49587_` (`BlockState`)
- `p_49588_` (`BlockEntity`)
- `p_49589_` (`ItemStack`)

### angerNearbyBees

```java
private void angerNearbyBees(Level p_49650_, BlockPos p_49651_)
```

**Parameters:**

- `p_49650_` (`Level`)
- `p_49651_` (`BlockPos`)

**Returns:** `private void`

### dropHoneycomb

```java
public static void dropHoneycomb(Level p_49601_, BlockPos p_49602_)
```

**Parameters:**

- `p_49601_` (`Level`)
- `p_49602_` (`BlockPos`)

**Returns:** `public static void`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316844_, BlockState p_316365_, Level p_316306_, BlockPos p_316497_, Player p_316824_, InteractionHand p_316436_, BlockHitResult p_316125_)
```

**Parameters:**

- `p_316844_` (`ItemStack`)
- `p_316365_` (`BlockState`)
- `p_316306_` (`Level`)
- `p_316497_` (`BlockPos`)
- `p_316824_` (`Player`)
- `p_316436_` (`InteractionHand`)
- `p_316125_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### dropHoneycomb

```java
 dropHoneycomb()
```

**Returns:** ``

### hiveContainsBees

```java
private boolean hiveContainsBees(Level p_49655_, BlockPos p_49656_)
```

**Parameters:**

- `p_49655_` (`Level`)
- `p_49656_` (`BlockPos`)

**Returns:** `private boolean`

### releaseBeesAndResetHoneyLevel

```java
public void releaseBeesAndResetHoneyLevel(Level p_49595_, BlockState p_49596_, BlockPos p_49597_, Player p_49598_, BeehiveBlockEntity.BeeReleaseStatus p_49599_)
```

**Parameters:**

- `p_49595_` (`Level`)
- `p_49596_` (`BlockState`)
- `p_49597_` (`BlockPos`)
- `p_49598_` (`Player`)
- `p_49599_` (`BeehiveBlockEntity.BeeReleaseStatus`)

**Returns:** `public void`

### resetHoneyLevel

```java
public void resetHoneyLevel(Level p_49591_, BlockState p_49592_, BlockPos p_49593_)
```

**Parameters:**

- `p_49591_` (`Level`)
- `p_49592_` (`BlockState`)
- `p_49593_` (`BlockPos`)

**Returns:** `public void`

### animateTick

```java
public void animateTick(BlockState p_220773_, Level p_220774_, BlockPos p_220775_, RandomSource p_220776_)
```

**Parameters:**

- `p_220773_` (`BlockState`)
- `p_220774_` (`Level`)
- `p_220775_` (`BlockPos`)
- `p_220776_` (`RandomSource`)

### trySpawnDripParticles

```java
private void trySpawnDripParticles(Level p_49604_, BlockPos p_49605_, BlockState p_49606_)
```

**Parameters:**

- `p_49604_` (`Level`)
- `p_49605_` (`BlockPos`)
- `p_49606_` (`BlockState`)

**Returns:** `private void`

### spawnParticle

```java
private void spawnParticle(Level p_49613_, BlockPos p_49614_, VoxelShape p_49615_, double p_49616_)
```

**Parameters:**

- `p_49613_` (`Level`)
- `p_49614_` (`BlockPos`)
- `p_49615_` (`VoxelShape`)
- `p_49616_` (`double`)

**Returns:** `private void`

### spawnFluidParticle

```java
private void spawnFluidParticle(Level p_49577_, double p_49578_, double p_49579_, double p_49580_, double p_49581_, double p_49582_)
```

**Parameters:**

- `p_49577_` (`Level`)
- `p_49578_` (`double`)
- `p_49579_` (`double`)
- `p_49580_` (`double`)
- `p_49581_` (`double`)
- `p_49582_` (`double`)

**Returns:** `private void`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_49573_)
```

**Parameters:**

- `p_49573_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_49646_)
```

**Parameters:**

- `p_49646_` (`StateDefinition.Builder<Block, BlockState>`)

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_49653_)
```

**Parameters:**

- `p_49653_` (`BlockState`)

**Returns:** `RenderShape`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_152184_, BlockState p_152185_)
```

**Parameters:**

- `p_152184_` (`BlockPos`)
- `p_152185_` (`BlockState`)

**Returns:** `BlockEntity`

### BeehiveBlockEntity

```java
return new BeehiveBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_152180_, BlockState p_152181_, BlockEntityType<T> p_152182_)
```

**Parameters:**

- `p_152180_` (`Level`)
- `p_152181_` (`BlockState`)
- `p_152182_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### playerWillDestroy

```java
public BlockState playerWillDestroy(Level p_49608_, BlockPos p_49609_, BlockState p_49610_, Player p_49611_)
```

**Parameters:**

- `p_49608_` (`Level`)
- `p_49609_` (`BlockPos`)
- `p_49610_` (`BlockState`)
- `p_49611_` (`Player`)

**Returns:** `BlockState`

### getDrops

```java
protected List<ItemStack> getDrops(BlockState p_49636_, LootParams.Builder p_287581_)
```

**Parameters:**

- `p_49636_` (`BlockState`)
- `p_287581_` (`LootParams.Builder`)

**Returns:** `List<ItemStack>`

### updateShape

```java
protected BlockState updateShape(BlockState p_49639_, Direction p_49640_, BlockState p_49641_, LevelAccessor p_49642_, BlockPos p_49643_, BlockPos p_49644_)
```

**Parameters:**

- `p_49639_` (`BlockState`)
- `p_49640_` (`Direction`)
- `p_49641_` (`BlockState`)
- `p_49642_` (`LevelAccessor`)
- `p_49643_` (`BlockPos`)
- `p_49644_` (`BlockPos`)

**Returns:** `BlockState`

### rotate

```java
public BlockState rotate(BlockState p_304785_, Rotation p_304624_)
```

**Parameters:**

- `p_304785_` (`BlockState`)
- `p_304624_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
public BlockState mirror(BlockState p_304677_, Mirror p_304660_)
```

**Parameters:**

- `p_304677_` (`BlockState`)
- `p_304660_` (`Mirror`)

**Returns:** `BlockState`
