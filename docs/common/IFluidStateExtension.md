# IFluidStateExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private FluidState self()
```

**Returns:** `private FluidState`

### getExplosionResistance

```java
default float getExplosionResistance(BlockGetter level, BlockPos pos, Explosion explosion)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `explosion` (`Explosion`)

**Returns:** `float`

### getFluidType

```java
default FluidType getFluidType()
```

**Returns:** `FluidType`

### move

```java
default boolean move(LivingEntity entity, Vec3 movementVector, double gravity)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `movementVector` (`Vec3`)
- `gravity` (`double`)

**Returns:** `boolean`

### canConvertToSource

```java
default boolean canConvertToSource(Level level, BlockPos pos)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### supportsBoating

```java
default boolean supportsBoating(Boat boat)
```

**Parameters:**

- `boat` (`Boat`)

**Returns:** `boolean`

### getBlockPathType

```java
default PathType getBlockPathType(BlockGetter level, BlockPos pos, .jetbrains.annotations.Nullable Mob mob, boolean canFluidLog)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `mob` (`.jetbrains.annotations.Nullable Mob`)
- `canFluidLog` (`boolean`)

**Returns:** `PathType`

### getAdjacentBlockPathType

```java
default PathType getAdjacentBlockPathType(BlockGetter level, BlockPos pos, .jetbrains.annotations.Nullable Mob mob, PathType originalType)
```

**Parameters:**

- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `mob` (`.jetbrains.annotations.Nullable Mob`)
- `originalType` (`PathType`)

**Returns:** `PathType`

### canHydrate

```java
default boolean canHydrate(BlockGetter getter, BlockPos pos, BlockState source, BlockPos sourcePos)
```

**Parameters:**

- `getter` (`BlockGetter`)
- `pos` (`BlockPos`)
- `source` (`BlockState`)
- `sourcePos` (`BlockPos`)

**Returns:** `boolean`

### canExtinguish

```java
default boolean canExtinguish(BlockGetter getter, BlockPos pos)
```

**Parameters:**

- `getter` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `boolean`
