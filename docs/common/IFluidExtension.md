# IFluidExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private Fluid self()
```

**Returns:** `private Fluid`

### getExplosionResistance

```java
default float getExplosionResistance(FluidState state, BlockGetter level, BlockPos pos, Explosion explosion)
```

**Parameters:**

- `state` (`FluidState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `explosion` (`Explosion`)

**Returns:** `float`

### getFluidType

```java
FluidType getFluidType()
```

**Returns:** `FluidType`

### move

```java
default boolean move(FluidState state, LivingEntity entity, Vec3 movementVector, double gravity)
```

**Parameters:**

- `state` (`FluidState`)
- `entity` (`LivingEntity`)
- `movementVector` (`Vec3`)
- `gravity` (`double`)

**Returns:** `boolean`

### canConvertToSource

```java
default boolean canConvertToSource(FluidState state, Level level, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `level` (`Level`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### supportsBoating

```java
default boolean supportsBoating(FluidState state, Boat boat)
```

**Parameters:**

- `state` (`FluidState`)
- `boat` (`Boat`)

**Returns:** `boolean`

### getBlockPathType

```java
default PathType getBlockPathType(FluidState state, BlockGetter level, BlockPos pos, .jetbrains.annotations.Nullable Mob mob, boolean canFluidLog)
```

**Parameters:**

- `state` (`FluidState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `mob` (`.jetbrains.annotations.Nullable Mob`)
- `canFluidLog` (`boolean`)

**Returns:** `PathType`

### getAdjacentBlockPathType

```java
default PathType getAdjacentBlockPathType(FluidState state, BlockGetter level, BlockPos pos, .jetbrains.annotations.Nullable Mob mob, PathType originalType)
```

**Parameters:**

- `state` (`FluidState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `mob` (`.jetbrains.annotations.Nullable Mob`)
- `originalType` (`PathType`)

**Returns:** `PathType`

### canHydrate

```java
default boolean canHydrate(FluidState state, BlockGetter getter, BlockPos pos, BlockState source, BlockPos sourcePos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockGetter`)
- `pos` (`BlockPos`)
- `source` (`BlockState`)
- `sourcePos` (`BlockPos`)

**Returns:** `boolean`

### canExtinguish

```java
default boolean canExtinguish(FluidState state, BlockGetter getter, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `boolean`
