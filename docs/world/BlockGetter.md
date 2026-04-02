# BlockGetter

**Package:** `net.minecraft.world.level`
**Type:** interface
**Extends:** `LevelHeightAccessor, net.neoforged.neoforge.common.extensions.IBlockGetterExtension`

## Methods

### getBlockEntity

```java
BlockEntity getBlockEntity(BlockPos p_45570_)
```

**Parameters:**

- `p_45570_` (`BlockPos`)

**Returns:** `BlockEntity`

### getBlockEntity

```java
<T extends BlockEntity> default <T extends BlockEntity> Optional<T> getBlockEntity(BlockPos p_151367_, BlockEntityType<T> p_151368_)
```

**Parameters:**

- `p_151367_` (`BlockPos`)
- `p_151368_` (`BlockEntityType<T>`)

**Returns:** `default <T extends BlockEntity> Optional<T>`

### getBlockState

```java
BlockState getBlockState(BlockPos p_45571_)
```

**Parameters:**

- `p_45571_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
FluidState getFluidState(BlockPos p_45569_)
```

**Parameters:**

- `p_45569_` (`BlockPos`)

**Returns:** `FluidState`

### getLightEmission

```java
default int getLightEmission(BlockPos p_45572_)
```

**Parameters:**

- `p_45572_` (`BlockPos`)

**Returns:** `default int`

### getMaxLightLevel

```java
default int getMaxLightLevel()
```

**Returns:** `default int`

### getBlockStates

```java
default Stream<BlockState> getBlockStates(AABB p_45557_)
```

**Parameters:**

- `p_45557_` (`AABB`)

**Returns:** `default Stream<BlockState>`

### isBlockInLine

```java
default BlockHitResult isBlockInLine(ClipBlockStateContext p_151354_)
```

**Parameters:**

- `p_151354_` (`ClipBlockStateContext`)

**Returns:** `default BlockHitResult`

### clip

```java
default BlockHitResult clip(ClipContext p_45548_)
```

**Parameters:**

- `p_45548_` (`ClipContext`)

**Returns:** `default BlockHitResult`

### clipWithInteractionOverride

```java
default BlockHitResult clipWithInteractionOverride(Vec3 p_45559_, Vec3 p_45560_, BlockPos p_45561_, VoxelShape p_45562_, BlockState p_45563_)
```

**Parameters:**

- `p_45559_` (`Vec3`)
- `p_45560_` (`Vec3`)
- `p_45561_` (`BlockPos`)
- `p_45562_` (`VoxelShape`)
- `p_45563_` (`BlockState`)

**Returns:** `BlockHitResult`

### getBlockFloorHeight

```java
default double getBlockFloorHeight(VoxelShape p_45565_, Supplier<VoxelShape> p_45566_)
```

**Parameters:**

- `p_45565_` (`VoxelShape`)
- `p_45566_` (`Supplier<VoxelShape>`)

**Returns:** `default double`

### getBlockFloorHeight

```java
default double getBlockFloorHeight(BlockPos p_45574_)
```

**Parameters:**

- `p_45574_` (`BlockPos`)

**Returns:** `default double`

### traverseBlocks

```java
<T, C> static <T, C> T traverseBlocks(Vec3 p_151362_, Vec3 p_151363_, C p_151364_, BiFunction<C, BlockPos, T> p_151365_, Function<C, T> p_151366_)
```

**Parameters:**

- `p_151362_` (`Vec3`)
- `p_151363_` (`Vec3`)
- `p_151364_` (`C`)
- `p_151365_` (`BiFunction<C, BlockPos, T>`)
- `p_151366_` (`Function<C, T>`)

**Returns:** `static <T, C> T`
