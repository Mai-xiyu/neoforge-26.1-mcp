# ButtonBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `FaceAttachedHorizontalDirectionalBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ButtonBlock>` |  |
| `POWERED` | `BooleanProperty` |  |
| `HALF_AABB_HEIGHT` | `int` |  |
| `HALF_AABB_WIDTH` | `int` |  |
| `CEILING_AABB_X` | `VoxelShape` |  |
| `CEILING_AABB_Z` | `VoxelShape` |  |
| `FLOOR_AABB_X` | `VoxelShape` |  |
| `FLOOR_AABB_Z` | `VoxelShape` |  |
| `NORTH_AABB` | `VoxelShape` |  |
| `SOUTH_AABB` | `VoxelShape` |  |
| `WEST_AABB` | `VoxelShape` |  |
| `EAST_AABB` | `VoxelShape` |  |
| `PRESSED_CEILING_AABB_X` | `VoxelShape` |  |
| `PRESSED_CEILING_AABB_Z` | `VoxelShape` |  |
| `PRESSED_FLOOR_AABB_X` | `VoxelShape` |  |
| `PRESSED_FLOOR_AABB_Z` | `VoxelShape` |  |
| `PRESSED_NORTH_AABB` | `VoxelShape` |  |
| `PRESSED_SOUTH_AABB` | `VoxelShape` |  |
| `PRESSED_WEST_AABB` | `VoxelShape` |  |
| `PRESSED_EAST_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<ButtonBlock> codec()
```

**Returns:** `MapCodec<ButtonBlock>`

### ButtonBlock

```java
public ButtonBlock(BlockSetType p_273462_, int p_273212_, BlockBehaviour.Properties p_273290_)
```

**Parameters:**

- `p_273462_` (`BlockSetType`)
- `p_273212_` (`int`)
- `p_273290_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### getShape

```java
protected VoxelShape getShape(BlockState p_51104_, BlockGetter p_51105_, BlockPos p_51106_, CollisionContext p_51107_)
```

**Parameters:**

- `p_51104_` (`BlockState`)
- `p_51105_` (`BlockGetter`)
- `p_51106_` (`BlockPos`)
- `p_51107_` (`CollisionContext`)

**Returns:** `VoxelShape`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_316833_, Level p_316124_, BlockPos p_316184_, Player p_316845_, BlockHitResult p_316247_)
```

**Parameters:**

- `p_316833_` (`BlockState`)
- `p_316124_` (`Level`)
- `p_316184_` (`BlockPos`)
- `p_316845_` (`Player`)
- `p_316247_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### onExplosionHit

```java
protected void onExplosionHit(BlockState p_312395_, Level p_311915_, BlockPos p_311817_, Explosion p_312150_, BiConsumer<ItemStack, BlockPos> p_311898_)
```

**Parameters:**

- `p_312395_` (`BlockState`)
- `p_311915_` (`Level`)
- `p_311817_` (`BlockPos`)
- `p_312150_` (`Explosion`)
- `p_311898_` (`BiConsumer<ItemStack, BlockPos>`)

### press

```java
public void press(BlockState p_51117_, Level p_51118_, BlockPos p_51119_, Player p_345338_)
```

**Parameters:**

- `p_51117_` (`BlockState`)
- `p_51118_` (`Level`)
- `p_51119_` (`BlockPos`)
- `p_345338_` (`Player`)

**Returns:** `public void`

### playSound

```java
protected void playSound(Player p_51068_, LevelAccessor p_51069_, BlockPos p_51070_, boolean p_51071_)
```

**Parameters:**

- `p_51068_` (`Player`)
- `p_51069_` (`LevelAccessor`)
- `p_51070_` (`BlockPos`)
- `p_51071_` (`boolean`)

**Returns:** `protected void`

### getSound

```java
protected SoundEvent getSound(boolean p_51102_)
```

**Parameters:**

- `p_51102_` (`boolean`)

**Returns:** `protected SoundEvent`

### onRemove

```java
protected void onRemove(BlockState p_51095_, Level p_51096_, BlockPos p_51097_, BlockState p_51098_, boolean p_51099_)
```

**Parameters:**

- `p_51095_` (`BlockState`)
- `p_51096_` (`Level`)
- `p_51097_` (`BlockPos`)
- `p_51098_` (`BlockState`)
- `p_51099_` (`boolean`)

### getSignal

```java
protected int getSignal(BlockState p_51078_, BlockGetter p_51079_, BlockPos p_51080_, Direction p_51081_)
```

**Parameters:**

- `p_51078_` (`BlockState`)
- `p_51079_` (`BlockGetter`)
- `p_51080_` (`BlockPos`)
- `p_51081_` (`Direction`)

**Returns:** `int`

### getDirectSignal

```java
protected int getDirectSignal(BlockState p_51109_, BlockGetter p_51110_, BlockPos p_51111_, Direction p_51112_)
```

**Parameters:**

- `p_51109_` (`BlockState`)
- `p_51110_` (`BlockGetter`)
- `p_51111_` (`BlockPos`)
- `p_51112_` (`Direction`)

**Returns:** `int`

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_51114_)
```

**Parameters:**

- `p_51114_` (`BlockState`)

**Returns:** `boolean`

### tick

```java
protected void tick(BlockState p_220903_, ServerLevel p_220904_, BlockPos p_220905_, RandomSource p_220906_)
```

**Parameters:**

- `p_220903_` (`BlockState`)
- `p_220904_` (`ServerLevel`)
- `p_220905_` (`BlockPos`)
- `p_220906_` (`RandomSource`)

### entityInside

```java
protected void entityInside(BlockState p_51083_, Level p_51084_, BlockPos p_51085_, Entity p_51086_)
```

**Parameters:**

- `p_51083_` (`BlockState`)
- `p_51084_` (`Level`)
- `p_51085_` (`BlockPos`)
- `p_51086_` (`Entity`)

### checkPressed

```java
protected void checkPressed(BlockState p_51121_, Level p_51122_, BlockPos p_51123_)
```

**Parameters:**

- `p_51121_` (`BlockState`)
- `p_51122_` (`Level`)
- `p_51123_` (`BlockPos`)

**Returns:** `protected void`

### updateNeighbours

```java
private void updateNeighbours(BlockState p_51125_, Level p_51126_, BlockPos p_51127_)
```

**Parameters:**

- `p_51125_` (`BlockState`)
- `p_51126_` (`Level`)
- `p_51127_` (`BlockPos`)

**Returns:** `private void`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51101_)
```

**Parameters:**

- `p_51101_` (`StateDefinition.Builder<Block, BlockState>`)
