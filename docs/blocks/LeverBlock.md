# LeverBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `FaceAttachedHorizontalDirectionalBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LeverBlock>` |  |
| `POWERED` | `BooleanProperty` |  |
| `DEPTH` | `int` |  |
| `WIDTH` | `int` |  |
| `HEIGHT` | `int` |  |
| `NORTH_AABB` | `VoxelShape` |  |
| `SOUTH_AABB` | `VoxelShape` |  |
| `WEST_AABB` | `VoxelShape` |  |
| `EAST_AABB` | `VoxelShape` |  |
| `UP_AABB_Z` | `VoxelShape` |  |
| `UP_AABB_X` | `VoxelShape` |  |
| `DOWN_AABB_Z` | `VoxelShape` |  |
| `DOWN_AABB_X` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<LeverBlock> codec()
```

**Returns:** `MapCodec<LeverBlock>`

### LeverBlock

```java
public LeverBlock(BlockBehaviour.Properties p_54633_)
```

**Parameters:**

- `p_54633_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_54665_, BlockGetter p_54666_, BlockPos p_54667_, CollisionContext p_54668_)
```

**Parameters:**

- `p_54665_` (`BlockState`)
- `p_54666_` (`BlockGetter`)
- `p_54667_` (`BlockPos`)
- `p_54668_` (`CollisionContext`)

**Returns:** `VoxelShape`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_54640_, Level p_54641_, BlockPos p_54642_, Player p_54643_, BlockHitResult p_54645_)
```

**Parameters:**

- `p_54640_` (`BlockState`)
- `p_54641_` (`Level`)
- `p_54642_` (`BlockPos`)
- `p_54643_` (`Player`)
- `p_54645_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### makeParticle

```java
 makeParticle()
```

**Returns:** ``

### onExplosionHit

```java
protected void onExplosionHit(BlockState p_312405_, Level p_312603_, BlockPos p_311795_, Explosion p_312090_, BiConsumer<ItemStack, BlockPos> p_312313_)
```

**Parameters:**

- `p_312405_` (`BlockState`)
- `p_312603_` (`Level`)
- `p_311795_` (`BlockPos`)
- `p_312090_` (`Explosion`)
- `p_312313_` (`BiConsumer<ItemStack, BlockPos>`)

### pull

```java
public void pull(BlockState p_54677_, Level p_54678_, BlockPos p_54679_, Player p_344918_)
```

**Parameters:**

- `p_54677_` (`BlockState`)
- `p_54678_` (`Level`)
- `p_54679_` (`BlockPos`)
- `p_344918_` (`Player`)

**Returns:** `public void`

### playSound

```java
 playSound()
```

**Returns:** ``

### playSound

```java
protected static void playSound(Player p_346119_, LevelAccessor p_346020_, BlockPos p_345585_, BlockState p_346002_)
```

**Parameters:**

- `p_346119_` (`Player`)
- `p_346020_` (`LevelAccessor`)
- `p_345585_` (`BlockPos`)
- `p_346002_` (`BlockState`)

**Returns:** `protected static void`

### makeParticle

```java
private static void makeParticle(BlockState p_54658_, LevelAccessor p_54659_, BlockPos p_54660_, float p_54661_)
```

**Parameters:**

- `p_54658_` (`BlockState`)
- `p_54659_` (`LevelAccessor`)
- `p_54660_` (`BlockPos`)
- `p_54661_` (`float`)

**Returns:** `private static void`

### animateTick

```java
public void animateTick(BlockState p_221395_, Level p_221396_, BlockPos p_221397_, RandomSource p_221398_)
```

**Parameters:**

- `p_221395_` (`BlockState`)
- `p_221396_` (`Level`)
- `p_221397_` (`BlockPos`)
- `p_221398_` (`RandomSource`)

### makeParticle

```java
 makeParticle()
```

**Returns:** ``

### onRemove

```java
protected void onRemove(BlockState p_54647_, Level p_54648_, BlockPos p_54649_, BlockState p_54650_, boolean p_54651_)
```

**Parameters:**

- `p_54647_` (`BlockState`)
- `p_54648_` (`Level`)
- `p_54649_` (`BlockPos`)
- `p_54650_` (`BlockState`)
- `p_54651_` (`boolean`)

### getSignal

```java
protected int getSignal(BlockState p_54635_, BlockGetter p_54636_, BlockPos p_54637_, Direction p_54638_)
```

**Parameters:**

- `p_54635_` (`BlockState`)
- `p_54636_` (`BlockGetter`)
- `p_54637_` (`BlockPos`)
- `p_54638_` (`Direction`)

**Returns:** `int`

### getDirectSignal

```java
protected int getDirectSignal(BlockState p_54670_, BlockGetter p_54671_, BlockPos p_54672_, Direction p_54673_)
```

**Parameters:**

- `p_54670_` (`BlockState`)
- `p_54671_` (`BlockGetter`)
- `p_54672_` (`BlockPos`)
- `p_54673_` (`Direction`)

**Returns:** `int`

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_54675_)
```

**Parameters:**

- `p_54675_` (`BlockState`)

**Returns:** `boolean`

### updateNeighbours

```java
private void updateNeighbours(BlockState p_54681_, Level p_54682_, BlockPos p_54683_)
```

**Parameters:**

- `p_54681_` (`BlockState`)
- `p_54682_` (`Level`)
- `p_54683_` (`BlockPos`)

**Returns:** `private void`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54663_)
```

**Parameters:**

- `p_54663_` (`StateDefinition.Builder<Block, BlockState>`)
