# TrapDoorBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HorizontalDirectionalBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TrapDoorBlock>` |  |
| `OPEN` | `BooleanProperty` |  |
| `HALF` | `EnumProperty<Half>` |  |
| `POWERED` | `BooleanProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `AABB_THICKNESS` | `int` |  |
| `EAST_OPEN_AABB` | `VoxelShape` |  |
| `WEST_OPEN_AABB` | `VoxelShape` |  |
| `SOUTH_OPEN_AABB` | `VoxelShape` |  |
| `NORTH_OPEN_AABB` | `VoxelShape` |  |
| `BOTTOM_AABB` | `VoxelShape` |  |
| `TOP_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<? extends TrapDoorBlock> codec()
```

**Returns:** `MapCodec<? extends TrapDoorBlock>`

### TrapDoorBlock

```java
public TrapDoorBlock(BlockSetType p_272964_, BlockBehaviour.Properties p_273079_)
```

**Parameters:**

- `p_272964_` (`BlockSetType`)
- `p_273079_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### getShape

```java
protected VoxelShape getShape(BlockState p_57563_, BlockGetter p_57564_, BlockPos p_57565_, CollisionContext p_57566_)
```

**Parameters:**

- `p_57563_` (`BlockState`)
- `p_57564_` (`BlockGetter`)
- `p_57565_` (`BlockPos`)
- `p_57566_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_57535_, PathComputationType p_57538_)
```

**Parameters:**

- `p_57535_` (`BlockState`)
- `p_57538_` (`PathComputationType`)

**Returns:** `boolean`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_57540_, Level p_57541_, BlockPos p_57542_, Player p_57543_, BlockHitResult p_57545_)
```

**Parameters:**

- `p_57540_` (`BlockState`)
- `p_57541_` (`Level`)
- `p_57542_` (`BlockPos`)
- `p_57543_` (`Player`)
- `p_57545_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### onExplosionHit

```java
protected void onExplosionHit(BlockState p_312371_, Level p_312286_, BlockPos p_312879_, Explosion p_312330_, BiConsumer<ItemStack, BlockPos> p_312161_)
```

**Parameters:**

- `p_312371_` (`BlockState`)
- `p_312286_` (`Level`)
- `p_312879_` (`BlockPos`)
- `p_312330_` (`Explosion`)
- `p_312161_` (`BiConsumer<ItemStack, BlockPos>`)

### toggle

```java
private void toggle(BlockState p_312094_, Level p_312235_, BlockPos p_312619_, Player p_312853_)
```

**Parameters:**

- `p_312094_` (`BlockState`)
- `p_312235_` (`Level`)
- `p_312619_` (`BlockPos`)
- `p_312853_` (`Player`)

**Returns:** `private void`

### playSound

```java
protected void playSound(Player p_57528_, Level p_57529_, BlockPos p_57530_, boolean p_57531_)
```

**Parameters:**

- `p_57528_` (`Player`)
- `p_57529_` (`Level`)
- `p_57530_` (`BlockPos`)
- `p_57531_` (`boolean`)

**Returns:** `protected void`

### neighborChanged

```java
protected void neighborChanged(BlockState p_57547_, Level p_57548_, BlockPos p_57549_, Block p_57550_, BlockPos p_57551_, boolean p_57552_)
```

**Parameters:**

- `p_57547_` (`BlockState`)
- `p_57548_` (`Level`)
- `p_57549_` (`BlockPos`)
- `p_57550_` (`Block`)
- `p_57551_` (`BlockPos`)
- `p_57552_` (`boolean`)

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_57533_)
```

**Parameters:**

- `p_57533_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57561_)
```

**Parameters:**

- `p_57561_` (`StateDefinition.Builder<Block, BlockState>`)

### getFluidState

```java
protected FluidState getFluidState(BlockState p_57568_)
```

**Parameters:**

- `p_57568_` (`BlockState`)

**Returns:** `FluidState`

### updateShape

```java
protected BlockState updateShape(BlockState p_57554_, Direction p_57555_, BlockState p_57556_, LevelAccessor p_57557_, BlockPos p_57558_, BlockPos p_57559_)
```

**Parameters:**

- `p_57554_` (`BlockState`)
- `p_57555_` (`Direction`)
- `p_57556_` (`BlockState`)
- `p_57557_` (`LevelAccessor`)
- `p_57558_` (`BlockPos`)
- `p_57559_` (`BlockPos`)

**Returns:** `BlockState`

### isLadder

```java
public boolean isLadder(BlockState state, net.minecraft.world.level.LevelReader world, BlockPos pos, net.minecraft.world.entity.LivingEntity entity)
```

**Parameters:**

- `state` (`BlockState`)
- `world` (`net.minecraft.world.level.LevelReader`)
- `pos` (`BlockPos`)
- `entity` (`net.minecraft.world.entity.LivingEntity`)

**Returns:** `boolean`

### getType

```java
protected BlockSetType getType()
```

**Returns:** `protected BlockSetType`
