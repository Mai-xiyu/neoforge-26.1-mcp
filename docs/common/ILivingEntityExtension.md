# ILivingEntityExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface
**Extends:** `IEntityExtension`

## Methods

### self

```java
default LivingEntity self()
```

**Returns:** `default LivingEntity`

### canSwimInFluidType

```java
default boolean canSwimInFluidType(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `boolean`

### jumpInFluid

```java
default void jumpInFluid(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

### sinkInFluid

```java
default void sinkInFluid(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

### canDrownInFluidType

```java
default boolean canDrownInFluidType(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `boolean`

### moveInFluid

```java
default boolean moveInFluid(FluidState state, Vec3 movementVector, double gravity)
```

**Parameters:**

- `state` (`FluidState`)
- `movementVector` (`Vec3`)
- `gravity` (`double`)

**Returns:** `boolean`

### onDamageTaken

```java
default void onDamageTaken(DamageContainer damageContainer)
```

**Parameters:**

- `damageContainer` (`DamageContainer`)
