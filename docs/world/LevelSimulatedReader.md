# LevelSimulatedReader

**Package:** `net.minecraft.world.level`
**Type:** interface

## Methods

### isStateAtPosition

```java
boolean isStateAtPosition(BlockPos p_46938_, Predicate<BlockState> p_46939_)
```

**Parameters:**

- `p_46938_` (`BlockPos`)
- `p_46939_` (`Predicate<BlockState>`)

**Returns:** `boolean`

### isFluidAtPosition

```java
boolean isFluidAtPosition(BlockPos p_151584_, Predicate<FluidState> p_151585_)
```

**Parameters:**

- `p_151584_` (`BlockPos`)
- `p_151585_` (`Predicate<FluidState>`)

**Returns:** `boolean`

### getBlockEntity

```java
<T extends BlockEntity> <T extends BlockEntity> Optional<T> getBlockEntity(BlockPos p_151582_, BlockEntityType<T> p_151583_)
```

**Parameters:**

- `p_151582_` (`BlockPos`)
- `p_151583_` (`BlockEntityType<T>`)

**Returns:** `<T extends BlockEntity> Optional<T>`

### getHeightmapPos

```java
BlockPos getHeightmapPos(Heightmap.Types p_46936_, BlockPos p_46937_)
```

**Parameters:**

- `p_46936_` (`Heightmap.Types`)
- `p_46937_` (`BlockPos`)

**Returns:** `BlockPos`
