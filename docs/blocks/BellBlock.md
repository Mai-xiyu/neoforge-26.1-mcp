# BellBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BellBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `ATTACHMENT` | `EnumProperty<BellAttachType>` |  |
| `POWERED` | `BooleanProperty` |  |
| `EVENT_BELL_RING` | `int` |  |

## Methods

### codec

```java
public MapCodec<BellBlock> codec()
```

**Returns:** `MapCodec<BellBlock>`

### BellBlock

```java
public BellBlock(BlockBehaviour.Properties p_49696_)
```

**Parameters:**

- `p_49696_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### neighborChanged

```java
protected void neighborChanged(BlockState p_49729_, Level p_49730_, BlockPos p_49731_, Block p_49732_, BlockPos p_49733_, boolean p_49734_)
```

**Parameters:**

- `p_49729_` (`BlockState`)
- `p_49730_` (`Level`)
- `p_49731_` (`BlockPos`)
- `p_49732_` (`Block`)
- `p_49733_` (`BlockPos`)
- `p_49734_` (`boolean`)

### onProjectileHit

```java
protected void onProjectileHit(Level p_49708_, BlockState p_49709_, BlockHitResult p_49710_, Projectile p_49711_)
```

**Parameters:**

- `p_49708_` (`Level`)
- `p_49709_` (`BlockState`)
- `p_49710_` (`BlockHitResult`)
- `p_49711_` (`Projectile`)

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_49722_, Level p_49723_, BlockPos p_49724_, Player p_49725_, BlockHitResult p_49727_)
```

**Parameters:**

- `p_49722_` (`BlockState`)
- `p_49723_` (`Level`)
- `p_49724_` (`BlockPos`)
- `p_49725_` (`Player`)
- `p_49727_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### onHit

```java
public boolean onHit(Level p_49702_, BlockState p_49703_, BlockHitResult p_49704_, Player p_49705_, boolean p_49706_)
```

**Parameters:**

- `p_49702_` (`Level`)
- `p_49703_` (`BlockState`)
- `p_49704_` (`BlockHitResult`)
- `p_49705_` (`Player`)
- `p_49706_` (`boolean`)

**Returns:** `public boolean`

### isProperHit

```java
private boolean isProperHit(BlockState p_49740_, Direction p_49741_, double p_49742_)
```

**Parameters:**

- `p_49740_` (`BlockState`)
- `p_49741_` (`Direction`)
- `p_49742_` (`double`)

**Returns:** `private boolean`

### attemptToRing

```java
public boolean attemptToRing(Level p_49713_, BlockPos p_49714_, Direction p_49715_)
```

**Parameters:**

- `p_49713_` (`Level`)
- `p_49714_` (`BlockPos`)
- `p_49715_` (`Direction`)

**Returns:** `public boolean`

### attemptToRing

```java
public boolean attemptToRing(Entity p_152189_, Level p_152190_, BlockPos p_152191_, Direction p_152192_)
```

**Parameters:**

- `p_152189_` (`Entity`)
- `p_152190_` (`Level`)
- `p_152191_` (`BlockPos`)
- `p_152192_` (`Direction`)

**Returns:** `public boolean`

### getVoxelShape

```java
private VoxelShape getVoxelShape(BlockState p_49767_)
```

**Parameters:**

- `p_49767_` (`BlockState`)

**Returns:** `private VoxelShape`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_49760_, BlockGetter p_49761_, BlockPos p_49762_, CollisionContext p_49763_)
```

**Parameters:**

- `p_49760_` (`BlockState`)
- `p_49761_` (`BlockGetter`)
- `p_49762_` (`BlockPos`)
- `p_49763_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getShape

```java
protected VoxelShape getShape(BlockState p_49755_, BlockGetter p_49756_, BlockPos p_49757_, CollisionContext p_49758_)
```

**Parameters:**

- `p_49755_` (`BlockState`)
- `p_49756_` (`BlockGetter`)
- `p_49757_` (`BlockPos`)
- `p_49758_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_49753_)
```

**Parameters:**

- `p_49753_` (`BlockState`)

**Returns:** `RenderShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_49698_)
```

**Parameters:**

- `p_49698_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### onExplosionHit

```java
protected void onExplosionHit(BlockState p_311884_, Level p_311798_, BlockPos p_312717_, Explosion p_312800_, BiConsumer<ItemStack, BlockPos> p_312339_)
```

**Parameters:**

- `p_311884_` (`BlockState`)
- `p_311798_` (`Level`)
- `p_312717_` (`BlockPos`)
- `p_312800_` (`Explosion`)
- `p_312339_` (`BiConsumer<ItemStack, BlockPos>`)

### updateShape

```java
protected BlockState updateShape(BlockState p_49744_, Direction p_49745_, BlockState p_49746_, LevelAccessor p_49747_, BlockPos p_49748_, BlockPos p_49749_)
```

**Parameters:**

- `p_49744_` (`BlockState`)
- `p_49745_` (`Direction`)
- `p_49746_` (`BlockState`)
- `p_49747_` (`LevelAccessor`)
- `p_49748_` (`BlockPos`)
- `p_49749_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_49736_, LevelReader p_49737_, BlockPos p_49738_)
```

**Parameters:**

- `p_49736_` (`BlockState`)
- `p_49737_` (`LevelReader`)
- `p_49738_` (`BlockPos`)

**Returns:** `boolean`

### getConnectedDirection

```java
private static Direction getConnectedDirection(BlockState p_49769_)
```

**Parameters:**

- `p_49769_` (`BlockState`)

**Returns:** `private static Direction`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_49751_)
```

**Parameters:**

- `p_49751_` (`StateDefinition.Builder<Block, BlockState>`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_152198_, BlockState p_152199_)
```

**Parameters:**

- `p_152198_` (`BlockPos`)
- `p_152199_` (`BlockState`)

**Returns:** `BlockEntity`

### BellBlockEntity

```java
return new BellBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_152194_, BlockState p_152195_, BlockEntityType<T> p_152196_)
```

**Parameters:**

- `p_152194_` (`Level`)
- `p_152195_` (`BlockState`)
- `p_152196_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createTickerHelper

```java
return createTickerHelper(p_152194_.isClientSide ? BellBlockEntity::clientTick : BellBlockEntity::serverTick)
```

**Parameters:**

- `BellBlockEntity::serverTick` (`p_152194_.isClientSide ? BellBlockEntity::clientTick :`)

**Returns:** `return`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_49717_, PathComputationType p_49720_)
```

**Parameters:**

- `p_49717_` (`BlockState`)
- `p_49720_` (`PathComputationType`)

**Returns:** `boolean`

### rotate

```java
public BlockState rotate(BlockState p_304966_, Rotation p_304463_)
```

**Parameters:**

- `p_304966_` (`BlockState`)
- `p_304463_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
public BlockState mirror(BlockState p_304560_, Mirror p_304709_)
```

**Parameters:**

- `p_304560_` (`BlockState`)
- `p_304709_` (`Mirror`)

**Returns:** `BlockState`
