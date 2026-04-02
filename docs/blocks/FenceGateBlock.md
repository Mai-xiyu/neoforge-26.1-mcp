# FenceGateBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HorizontalDirectionalBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FenceGateBlock>` |  |
| `OPEN` | `BooleanProperty` |  |
| `POWERED` | `BooleanProperty` |  |
| `IN_WALL` | `BooleanProperty` |  |
| `Z_SHAPE` | `VoxelShape` |  |
| `X_SHAPE` | `VoxelShape` |  |
| `Z_SHAPE_LOW` | `VoxelShape` |  |
| `X_SHAPE_LOW` | `VoxelShape` |  |
| `Z_COLLISION_SHAPE` | `VoxelShape` |  |
| `X_COLLISION_SHAPE` | `VoxelShape` |  |
| `Z_SUPPORT_SHAPE` | `VoxelShape` |  |
| `X_SUPPORT_SHAPE` | `VoxelShape` |  |
| `Z_OCCLUSION_SHAPE` | `VoxelShape` |  |
| `X_OCCLUSION_SHAPE` | `VoxelShape` |  |
| `Z_OCCLUSION_SHAPE_LOW` | `VoxelShape` |  |
| `X_OCCLUSION_SHAPE_LOW` | `VoxelShape` |  |
| `closeSound` | `net.minecraft.sounds.SoundEvent openSound,` |  |

## Methods

### codec

```java
public MapCodec<FenceGateBlock> codec()
```

**Returns:** `MapCodec<FenceGateBlock>`

### FenceGateBlock

```java
public FenceGateBlock(WoodType p_273340_, BlockBehaviour.Properties p_273352_)
```

**Parameters:**

- `p_273340_` (`WoodType`)
- `p_273352_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### FenceGateBlock

```java
public FenceGateBlock(BlockBehaviour.Properties p_273352_, net.minecraft.sounds.SoundEvent openSound, net.minecraft.sounds.SoundEvent closeSound)
```

**Parameters:**

- `p_273352_` (`BlockBehaviour.Properties`)
- `openSound` (`net.minecraft.sounds.SoundEvent`)
- `closeSound` (`net.minecraft.sounds.SoundEvent`)

**Returns:** `public`

### FenceGateBlock

```java
public FenceGateBlock(java.util.Optional<WoodType> p_273340_, BlockBehaviour.Properties p_273352_, java.util.Optional<net.minecraft.sounds.SoundEvent> openSound, java.util.Optional<net.minecraft.sounds.SoundEvent> closeSound)
```

**Parameters:**

- `p_273340_` (`java.util.Optional<WoodType>`)
- `p_273352_` (`BlockBehaviour.Properties`)
- `openSound` (`java.util.Optional<net.minecraft.sounds.SoundEvent>`)
- `closeSound` (`java.util.Optional<net.minecraft.sounds.SoundEvent>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_53391_, BlockGetter p_53392_, BlockPos p_53393_, CollisionContext p_53394_)
```

**Parameters:**

- `p_53391_` (`BlockState`)
- `p_53392_` (`BlockGetter`)
- `p_53393_` (`BlockPos`)
- `p_53394_` (`CollisionContext`)

**Returns:** `VoxelShape`

### updateShape

```java
protected BlockState updateShape(BlockState p_53382_, Direction p_53383_, BlockState p_53384_, LevelAccessor p_53385_, BlockPos p_53386_, BlockPos p_53387_)
```

**Parameters:**

- `p_53382_` (`BlockState`)
- `p_53383_` (`Direction`)
- `p_53384_` (`BlockState`)
- `p_53385_` (`LevelAccessor`)
- `p_53386_` (`BlockPos`)
- `p_53387_` (`BlockPos`)

**Returns:** `BlockState`

### getBlockSupportShape

```java
protected VoxelShape getBlockSupportShape(BlockState p_253862_, BlockGetter p_254569_, BlockPos p_254197_)
```

**Parameters:**

- `p_253862_` (`BlockState`)
- `p_254569_` (`BlockGetter`)
- `p_254197_` (`BlockPos`)

**Returns:** `VoxelShape`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_53396_, BlockGetter p_53397_, BlockPos p_53398_, CollisionContext p_53399_)
```

**Parameters:**

- `p_53396_` (`BlockState`)
- `p_53397_` (`BlockGetter`)
- `p_53398_` (`BlockPos`)
- `p_53399_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getOcclusionShape

```java
protected VoxelShape getOcclusionShape(BlockState p_53401_, BlockGetter p_53402_, BlockPos p_53403_)
```

**Parameters:**

- `p_53401_` (`BlockState`)
- `p_53402_` (`BlockGetter`)
- `p_53403_` (`BlockPos`)

**Returns:** `VoxelShape`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_53360_, PathComputationType p_53363_)
```

**Parameters:**

- `p_53360_` (`BlockState`)
- `p_53363_` (`PathComputationType`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_53358_)
```

**Parameters:**

- `p_53358_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### isWall

```java
private boolean isWall(BlockState p_53405_)
```

**Parameters:**

- `p_53405_` (`BlockState`)

**Returns:** `private boolean`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_53365_, Level p_53366_, BlockPos p_53367_, Player p_53368_, BlockHitResult p_53370_)
```

**Parameters:**

- `p_53365_` (`BlockState`)
- `p_53366_` (`Level`)
- `p_53367_` (`BlockPos`)
- `p_53368_` (`Player`)
- `p_53370_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### onExplosionHit

```java
protected void onExplosionHit(BlockState p_312699_, Level p_311813_, BlockPos p_312680_, Explosion p_312186_, BiConsumer<ItemStack, BlockPos> p_312187_)
```

**Parameters:**

- `p_312699_` (`BlockState`)
- `p_311813_` (`Level`)
- `p_312680_` (`BlockPos`)
- `p_312186_` (`Explosion`)
- `p_312187_` (`BiConsumer<ItemStack, BlockPos>`)

### neighborChanged

```java
protected void neighborChanged(BlockState p_53372_, Level p_53373_, BlockPos p_53374_, Block p_53375_, BlockPos p_53376_, boolean p_53377_)
```

**Parameters:**

- `p_53372_` (`BlockState`)
- `p_53373_` (`Level`)
- `p_53374_` (`BlockPos`)
- `p_53375_` (`Block`)
- `p_53376_` (`BlockPos`)
- `p_53377_` (`boolean`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_53389_)
```

**Parameters:**

- `p_53389_` (`StateDefinition.Builder<Block, BlockState>`)

### connectsToDirection

```java
public static boolean connectsToDirection(BlockState p_53379_, Direction p_53380_)
```

**Parameters:**

- `p_53379_` (`BlockState`)
- `p_53380_` (`Direction`)

**Returns:** `public static boolean`
