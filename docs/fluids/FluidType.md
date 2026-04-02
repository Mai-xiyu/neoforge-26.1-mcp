# FluidType

**Package:** `net.neoforged.neoforge.fluids`
**Type:** class

## Description

A definition of common attributes, properties, and methods that is applied
to a `Fluid`. This is used to link a flowing and source fluid together
without relying on tags. Most accessors do not correlate to in-game features;
they are provided for mods to take advantage of.


Accessors are typically implemented in a method call chain. As such, it
can provide a general implementation while more specific implementations
can be implemented by overriding methods further in the call chain (on fluids,
entities, etc.).

## Methods

### FluidType

```java
public static final public FluidType(Properties properties)
```

**Parameters:**

- `properties` (`Properties`)

**Returns:** `public`

### getDescription

```java
public Component getDescription()
```

**Returns:** `Component`

A definition of common attributes, properties, and methods that is applied
to a `Fluid`. This is used to link a flowing and source fluid together
without relying on tags. Most accessors do not correlate to in-game features;
they are provided for mods to take advantage of.


Accessors are typically implemented in a method call chain. As such, it
can provide a general implementation while more specific implementations
can be implemented by overriding methods further in the call chain (on fluids,
entities, etc.).
/
public class FluidType {
/**
The number of fluid units that a bucket represents.
/
public static final int BUCKET_VOLUME = 1000;
/**
A lazy value which computes the number of fluid types within the
registry.
/
public static final Lazy<Integer> SIZE = Lazy.of(() -> NeoForgeRegistries.FLUID_TYPES.keySet().size());
private String descriptionId;
private final double motionScale;
private final boolean canPushEntity;
private final boolean canSwim;
private final boolean canDrown;
private final float fallDistanceModifier;
private final boolean canExtinguish;
private final boolean canConvertToSource;
private final boolean supportsBoating;
@Nullable
private final PathType pathType, adjacentPathType;
private final boolean canHydrate;
private final int lightLevel;
private final int density;
private final int temperature;
private final int viscosity;
private final Rarity rarity;
@Nullable
private final DripstoneDripInfo dripInfo;
/**
A map of actions performed to sound that should be played.
/
protected final Map<SoundAction, SoundEvent> sounds;
/**
Default constructor.
**properties**: the general properties of the fluid type
/
public FluidType(final Properties properties) {
this.descriptionId = properties.descriptionId;
this.motionScale = properties.motionScale;
this.canPushEntity = properties.canPushEntity;
this.canSwim = properties.canSwim;
this.canDrown = properties.canDrown;
this.fallDistanceModifier = properties.fallDistanceModifier;
this.canExtinguish = properties.canExtinguish;
this.canConvertToSource = properties.canConvertToSource;
this.supportsBoating = properties.supportsBoating;
this.pathType = properties.pathType;
this.adjacentPathType = properties.adjacentPathType;
this.sounds = ImmutableMap.copyOf(properties.sounds);
this.canHydrate = properties.canHydrate;
this.lightLevel = properties.lightLevel;
this.density = properties.density;
this.temperature = properties.temperature;
this.viscosity = properties.viscosity;
this.rarity = properties.rarity;
this.dripInfo = properties.dripInfo;
}
/* Default Accessors

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `String`

### getLightLevel

```java
public int getLightLevel()
```

**Returns:** `int`

### getDensity

```java
public int getDensity()
```

**Returns:** `int`

### getTemperature

```java
public int getTemperature()
```

**Returns:** `int`

### getViscosity

```java
public int getViscosity()
```

**Returns:** `int`

### getRarity

```java
public Rarity getRarity()
```

**Returns:** `Rarity`

### getDripInfo

```java
public DripstoneDripInfo getDripInfo()
```

**Returns:** `DripstoneDripInfo`

### getSound

```java
public SoundEvent getSound(SoundAction action)
```

**Parameters:**

- `action` (`SoundAction`)

**Returns:** `SoundEvent`

### motionScale

```java
public double motionScale(Entity entity)
```

**Parameters:**

- `entity` (`Entity`)

**Returns:** `double`

A definition of common attributes, properties, and methods that is applied
to a `Fluid`. This is used to link a flowing and source fluid together
without relying on tags. Most accessors do not correlate to in-game features;
they are provided for mods to take advantage of.


Accessors are typically implemented in a method call chain. As such, it
can provide a general implementation while more specific implementations
can be implemented by overriding methods further in the call chain (on fluids,
entities, etc.).
/
public class FluidType {
/**
The number of fluid units that a bucket represents.
/
public static final int BUCKET_VOLUME = 1000;
/**
A lazy value which computes the number of fluid types within the
registry.
/
public static final Lazy<Integer> SIZE = Lazy.of(() -> NeoForgeRegistries.FLUID_TYPES.keySet().size());
private String descriptionId;
private final double motionScale;
private final boolean canPushEntity;
private final boolean canSwim;
private final boolean canDrown;
private final float fallDistanceModifier;
private final boolean canExtinguish;
private final boolean canConvertToSource;
private final boolean supportsBoating;
@Nullable
private final PathType pathType, adjacentPathType;
private final boolean canHydrate;
private final int lightLevel;
private final int density;
private final int temperature;
private final int viscosity;
private final Rarity rarity;
@Nullable
private final DripstoneDripInfo dripInfo;
/**
A map of actions performed to sound that should be played.
/
protected final Map<SoundAction, SoundEvent> sounds;
/**
Default constructor.
**properties**: the general properties of the fluid type
/
public FluidType(final Properties properties) {
this.descriptionId = properties.descriptionId;
this.motionScale = properties.motionScale;
this.canPushEntity = properties.canPushEntity;
this.canSwim = properties.canSwim;
this.canDrown = properties.canDrown;
this.fallDistanceModifier = properties.fallDistanceModifier;
this.canExtinguish = properties.canExtinguish;
this.canConvertToSource = properties.canConvertToSource;
this.supportsBoating = properties.supportsBoating;
this.pathType = properties.pathType;
this.adjacentPathType = properties.adjacentPathType;
this.sounds = ImmutableMap.copyOf(properties.sounds);
this.canHydrate = properties.canHydrate;
this.lightLevel = properties.lightLevel;
this.density = properties.density;
this.temperature = properties.temperature;
this.viscosity = properties.viscosity;
this.rarity = properties.rarity;
this.dripInfo = properties.dripInfo;
}
/* Default Accessors */
/**
Returns the component representing the name of the fluid type.
**Returns:** the component representing the name of the fluid type
/
public Component getDescription() {
return Component.translatable(this.getDescriptionId());
}
/**
Returns the identifier representing the name of the fluid type.
If no identifier was specified, then the identifier will be defaulted
to `fluid_type..`.
**Returns:** the identifier representing the name of the fluid type
/
public String getDescriptionId() {
if (this.descriptionId == null)
this.descriptionId = Util.makeDescriptionId("fluid_type", NeoForgeRegistries.FLUID_TYPES.getKey(this));
return this.descriptionId;
}
/**
Returns the light level emitted by the fluid.


Note: This should be a value between `[0,15]`. If not specified, the
light level is `0` as most fluids do not emit light.


Implementation: This is used by the bucket model to determine whether the fluid
should render full-bright when `applyFluidLuminosity` is `true`.
**Returns:** the light level emitted by the fluid
/
public int getLightLevel() {
return this.lightLevel;
}
/**
Returns the density of the fluid.


Note: This is an arbitrary number. Negative or zero values indicate
that the fluid is lighter than air. If not specified, the density is
approximately equivalent to the real-life density of water in `kg/m^3`.
**Returns:** the density of the fluid
/
public int getDensity() {
return this.density;
}
/**
Returns the temperature of the fluid.


Note: This is an arbitrary number. Higher temperature values indicate
that the fluid is hotter. If not specified, the temperature is approximately
equivalent to the real-life room temperature of water in `Kelvin`.
**Returns:** the temperature of the fluid
/
public int getTemperature() {
return this.temperature;
}
/**
Returns the viscosity, or thickness, of the fluid.


Note: This is an arbitrary number. The value should never be negative.
Higher viscosity values indicate that the fluid flows more slowly. If not
specified, the viscosity is approximately equivalent to the real-life
viscosity of water in `m/s^2`.
**Returns:** the viscosity of the fluid
/
public int getViscosity() {
return this.viscosity;
}
/**
Returns the rarity of the fluid.


Note: If not specified, the rarity of the fluid is `Rarity#COMMON`.
**Returns:** the rarity of the fluid
/
public Rarity getRarity() {
return this.rarity;
}
/**
{**Returns:** the pointed dripstone drip information of the fluid}
/
@Nullable
public DripstoneDripInfo getDripInfo() {
return this.dripInfo;
}
/**
Returns a sound to play when a certain action is performed. If no
sound is present, then the sound will be `null`.
**action**: the action being performed
**Returns:** the sound to play when performing the action
/
@Nullable
public SoundEvent getSound(SoundAction action) {
return this.sounds.get(action);
}
/* Entity-Based Accessors

### canPushEntity

```java
public boolean canPushEntity(Entity entity)
```

**Parameters:**

- `entity` (`Entity`)

**Returns:** `boolean`

### canSwim

```java
public boolean canSwim(Entity entity)
```

**Parameters:**

- `entity` (`Entity`)

**Returns:** `boolean`

### getFallDistanceModifier

```java
public float getFallDistanceModifier(Entity entity)
```

**Parameters:**

- `entity` (`Entity`)

**Returns:** `float`

### canExtinguish

```java
public boolean canExtinguish(Entity entity)
```

**Parameters:**

- `entity` (`Entity`)

**Returns:** `boolean`

### move

```java
public boolean move(FluidState state, LivingEntity entity, Vec3 movementVector, double gravity)
```

**Parameters:**

- `state` (`FluidState`)
- `entity` (`LivingEntity`)
- `movementVector` (`Vec3`)
- `gravity` (`double`)

**Returns:** `boolean`

### canDrownIn

```java
public boolean canDrownIn(LivingEntity entity)
```

**Parameters:**

- `entity` (`LivingEntity`)

**Returns:** `boolean`

### setItemMovement

```java
public void setItemMovement(ItemEntity entity)
```

**Parameters:**

- `entity` (`ItemEntity`)

### supportsBoating

```java
public boolean supportsBoating(Boat boat)
```

**Parameters:**

- `boat` (`Boat`)

**Returns:** `boolean`

### supportsBoating

```java
public boolean supportsBoating(FluidState state, Boat boat)
```

**Parameters:**

- `state` (`FluidState`)
- `boat` (`Boat`)

**Returns:** `boolean`

### canRideVehicleUnder

```java
public boolean canRideVehicleUnder(Entity vehicle, Entity rider)
```

**Parameters:**

- `vehicle` (`Entity`)
- `rider` (`Entity`)

**Returns:** `boolean`

### canHydrate

```java
public boolean canHydrate(Entity entity)
```

**Parameters:**

- `entity` (`Entity`)

**Returns:** `boolean`

### getSound

```java
public SoundEvent getSound(Entity entity, SoundAction action)
```

**Parameters:**

- `entity` (`Entity`)
- `action` (`SoundAction`)

**Returns:** `SoundEvent`

### canExtinguish

```java
public boolean canExtinguish(FluidState state, BlockGetter getter, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

A definition of common attributes, properties, and methods that is applied
to a `Fluid`. This is used to link a flowing and source fluid together
without relying on tags. Most accessors do not correlate to in-game features;
they are provided for mods to take advantage of.


Accessors are typically implemented in a method call chain. As such, it
can provide a general implementation while more specific implementations
can be implemented by overriding methods further in the call chain (on fluids,
entities, etc.).
/
public class FluidType {
/**
The number of fluid units that a bucket represents.
/
public static final int BUCKET_VOLUME = 1000;
/**
A lazy value which computes the number of fluid types within the
registry.
/
public static final Lazy<Integer> SIZE = Lazy.of(() -> NeoForgeRegistries.FLUID_TYPES.keySet().size());
private String descriptionId;
private final double motionScale;
private final boolean canPushEntity;
private final boolean canSwim;
private final boolean canDrown;
private final float fallDistanceModifier;
private final boolean canExtinguish;
private final boolean canConvertToSource;
private final boolean supportsBoating;
@Nullable
private final PathType pathType, adjacentPathType;
private final boolean canHydrate;
private final int lightLevel;
private final int density;
private final int temperature;
private final int viscosity;
private final Rarity rarity;
@Nullable
private final DripstoneDripInfo dripInfo;
/**
A map of actions performed to sound that should be played.
/
protected final Map<SoundAction, SoundEvent> sounds;
/**
Default constructor.
**properties**: the general properties of the fluid type
/
public FluidType(final Properties properties) {
this.descriptionId = properties.descriptionId;
this.motionScale = properties.motionScale;
this.canPushEntity = properties.canPushEntity;
this.canSwim = properties.canSwim;
this.canDrown = properties.canDrown;
this.fallDistanceModifier = properties.fallDistanceModifier;
this.canExtinguish = properties.canExtinguish;
this.canConvertToSource = properties.canConvertToSource;
this.supportsBoating = properties.supportsBoating;
this.pathType = properties.pathType;
this.adjacentPathType = properties.adjacentPathType;
this.sounds = ImmutableMap.copyOf(properties.sounds);
this.canHydrate = properties.canHydrate;
this.lightLevel = properties.lightLevel;
this.density = properties.density;
this.temperature = properties.temperature;
this.viscosity = properties.viscosity;
this.rarity = properties.rarity;
this.dripInfo = properties.dripInfo;
}
/* Default Accessors */
/**
Returns the component representing the name of the fluid type.
**Returns:** the component representing the name of the fluid type
/
public Component getDescription() {
return Component.translatable(this.getDescriptionId());
}
/**
Returns the identifier representing the name of the fluid type.
If no identifier was specified, then the identifier will be defaulted
to `fluid_type..`.
**Returns:** the identifier representing the name of the fluid type
/
public String getDescriptionId() {
if (this.descriptionId == null)
this.descriptionId = Util.makeDescriptionId("fluid_type", NeoForgeRegistries.FLUID_TYPES.getKey(this));
return this.descriptionId;
}
/**
Returns the light level emitted by the fluid.


Note: This should be a value between `[0,15]`. If not specified, the
light level is `0` as most fluids do not emit light.


Implementation: This is used by the bucket model to determine whether the fluid
should render full-bright when `applyFluidLuminosity` is `true`.
**Returns:** the light level emitted by the fluid
/
public int getLightLevel() {
return this.lightLevel;
}
/**
Returns the density of the fluid.


Note: This is an arbitrary number. Negative or zero values indicate
that the fluid is lighter than air. If not specified, the density is
approximately equivalent to the real-life density of water in `kg/m^3`.
**Returns:** the density of the fluid
/
public int getDensity() {
return this.density;
}
/**
Returns the temperature of the fluid.


Note: This is an arbitrary number. Higher temperature values indicate
that the fluid is hotter. If not specified, the temperature is approximately
equivalent to the real-life room temperature of water in `Kelvin`.
**Returns:** the temperature of the fluid
/
public int getTemperature() {
return this.temperature;
}
/**
Returns the viscosity, or thickness, of the fluid.


Note: This is an arbitrary number. The value should never be negative.
Higher viscosity values indicate that the fluid flows more slowly. If not
specified, the viscosity is approximately equivalent to the real-life
viscosity of water in `m/s^2`.
**Returns:** the viscosity of the fluid
/
public int getViscosity() {
return this.viscosity;
}
/**
Returns the rarity of the fluid.


Note: If not specified, the rarity of the fluid is `Rarity#COMMON`.
**Returns:** the rarity of the fluid
/
public Rarity getRarity() {
return this.rarity;
}
/**
{**Returns:** the pointed dripstone drip information of the fluid}
/
@Nullable
public DripstoneDripInfo getDripInfo() {
return this.dripInfo;
}
/**
Returns a sound to play when a certain action is performed. If no
sound is present, then the sound will be `null`.
**action**: the action being performed
**Returns:** the sound to play when performing the action
/
@Nullable
public SoundEvent getSound(SoundAction action) {
return this.sounds.get(action);
}
/* Entity-Based Accessors */
/**
Returns how much the velocity of the fluid should be scaled by
when applied to an entity.
**entity**: the entity in the fluid
**Returns:** a scalar to multiply to the fluid velocity
/
public double motionScale(Entity entity) {
return this.motionScale;
}
/**
Returns whether the fluid can push an entity.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can be pushed by the fluid, `false` otherwise
/
public boolean canPushEntity(Entity entity) {
return this.canPushEntity;
}
/**
Returns whether the entity can swim in the fluid.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can swim in the fluid, `false` otherwise
/
public boolean canSwim(Entity entity) {
return this.canSwim;
}
/**
Returns how much the fluid should scale the damage done to a falling
entity when hitting the ground per tick.


Implementation: If the entity is in many fluids, the smallest modifier
is applied.
**entity**: the entity in the fluid
**Returns:** a scalar to multiply to the fall damage
/
public float getFallDistanceModifier(Entity entity) {
return this.fallDistanceModifier;
}
/**
Returns whether the entity can be extinguished by this fluid.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can be extinguished, `false` otherwise
/
public boolean canExtinguish(Entity entity) {
return this.canExtinguish;
}
/**
Performs how an entity moves when within the fluid. If using custom
movement logic, the method should return `true`. Otherwise, the
movement logic will default to water.
**state**: the state of the fluid
**entity**: the entity moving within the fluid
**movementVector**: the velocity of how the entity wants to move
**gravity**: the gravity to apply to the entity
**Returns:** `true` if custom movement logic is performed, `false` otherwise
/
public boolean move(FluidState state, LivingEntity entity, Vec3 movementVector, double gravity) {
return false;
}
/**
Returns whether the entity can drown in the fluid.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can drown in the fluid, `false` otherwise
/
public boolean canDrownIn(LivingEntity entity) {
return this.canDrown;
}
/**
Performs what to do when an item is in a fluid.
**entity**: the item in the fluid
/
public void setItemMovement(ItemEntity entity) {
Vec3 vec3 = entity.getDeltaMovement();
entity.setDeltaMovement(vec3.x * (double) 0.99F, vec3.y + (double) (vec3.y < (double) 0.06F ? 5.0E-4F : 0.0F), vec3.z * (double) 0.99F);
}
/**
Returns whether the boat can be used on the fluid.
**boat**: the boat trying to be used on the fluid
**Returns:** `true` if the boat can be used, `false` otherwise
/
public boolean supportsBoating(Boat boat) {
return this.supportsBoating;
}
/**
Returns whether the boat can be used on the fluid.
**state**: the state of the fluid
**boat**: the boat trying to be used on the fluid
**Returns:** `true` if the boat can be used, `false` otherwise
/
public boolean supportsBoating(FluidState state, Boat boat) {
return this.supportsBoating(boat);
}
/**
Returns whether the entity can ride in this vehicle under the fluid.
**vehicle**: the vehicle being ridden in
**rider**: the entity riding the vehicle
**Returns:** `true` if the vehicle can be ridden in under this fluid,
`false` otherwise
/
public boolean canRideVehicleUnder(Entity vehicle, Entity rider) {
if (this == NeoForgeMod.WATER_TYPE.value()) return !vehicle.dismountsUnderwater();
return true;
}
/**
Returns whether the entity can be hydrated by this fluid.


Hydration is an arbitrary word which depends on the entity.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can be hydrated, `false`
otherwise
/
public boolean canHydrate(Entity entity) {
return this.canHydrate;
}
/**
Returns a sound to play when a certain action is performed by the
entity in the fluid. If no sound is present, then the sound will be
`null`.
**entity**: the entity in the fluid
**action**: the action being performed
**Returns:** the sound to play when performing the action
/
@Nullable
public SoundEvent getSound(Entity entity, SoundAction action) {
return this.getSound(action);
}
/* Level-Based Accessors

### canConvertToSource

```java
public boolean canConvertToSource(FluidState state, LevelReader reader, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `reader` (`LevelReader`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### getBlockPathType

```java
public PathType getBlockPathType(FluidState state, BlockGetter level, BlockPos pos, Mob mob, boolean canFluidLog)
```

**Parameters:**

- `state` (`FluidState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `mob` (`Mob`)
- `canFluidLog` (`boolean`)

**Returns:** `PathType`

### getAdjacentBlockPathType

```java
public PathType getAdjacentBlockPathType(FluidState state, BlockGetter level, BlockPos pos, Mob mob, PathType originalType)
```

**Parameters:**

- `state` (`FluidState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `mob` (`Mob`)
- `originalType` (`PathType`)

**Returns:** `PathType`

### getSound

```java
public SoundEvent getSound(Player player, BlockGetter getter, BlockPos pos, SoundAction action)
```

**Parameters:**

- `player` (`Player`)
- `getter` (`BlockGetter`)
- `pos` (`BlockPos`)
- `action` (`SoundAction`)

**Returns:** `SoundEvent`

### canHydrate

```java
public boolean canHydrate(FluidState state, BlockGetter getter, BlockPos pos, BlockState source, BlockPos sourcePos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockGetter`)
- `pos` (`BlockPos`)
- `source` (`BlockState`)
- `sourcePos` (`BlockPos`)

**Returns:** `boolean`

### getLightLevel

```java
public int getLightLevel(FluidState state, BlockAndTintGetter getter, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)

**Returns:** `int`

### getDensity

```java
public int getDensity(FluidState state, BlockAndTintGetter getter, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)

**Returns:** `int`

### getTemperature

```java
public int getTemperature(FluidState state, BlockAndTintGetter getter, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)

**Returns:** `int`

### getViscosity

```java
public int getViscosity(FluidState state, BlockAndTintGetter getter, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)

**Returns:** `int`

### handleCauldronDrip

```java
public boolean handleCauldronDrip(Fluid fluid, Level level, BlockPos cauldronPos)
```

**Parameters:**

- `fluid` (`Fluid`)
- `level` (`Level`)
- `cauldronPos` (`BlockPos`)

**Returns:** `boolean`

### canConvertToSource

```java
public boolean canConvertToSource(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `boolean`

A definition of common attributes, properties, and methods that is applied
to a `Fluid`. This is used to link a flowing and source fluid together
without relying on tags. Most accessors do not correlate to in-game features;
they are provided for mods to take advantage of.


Accessors are typically implemented in a method call chain. As such, it
can provide a general implementation while more specific implementations
can be implemented by overriding methods further in the call chain (on fluids,
entities, etc.).
/
public class FluidType {
/**
The number of fluid units that a bucket represents.
/
public static final int BUCKET_VOLUME = 1000;
/**
A lazy value which computes the number of fluid types within the
registry.
/
public static final Lazy<Integer> SIZE = Lazy.of(() -> NeoForgeRegistries.FLUID_TYPES.keySet().size());
private String descriptionId;
private final double motionScale;
private final boolean canPushEntity;
private final boolean canSwim;
private final boolean canDrown;
private final float fallDistanceModifier;
private final boolean canExtinguish;
private final boolean canConvertToSource;
private final boolean supportsBoating;
@Nullable
private final PathType pathType, adjacentPathType;
private final boolean canHydrate;
private final int lightLevel;
private final int density;
private final int temperature;
private final int viscosity;
private final Rarity rarity;
@Nullable
private final DripstoneDripInfo dripInfo;
/**
A map of actions performed to sound that should be played.
/
protected final Map<SoundAction, SoundEvent> sounds;
/**
Default constructor.
**properties**: the general properties of the fluid type
/
public FluidType(final Properties properties) {
this.descriptionId = properties.descriptionId;
this.motionScale = properties.motionScale;
this.canPushEntity = properties.canPushEntity;
this.canSwim = properties.canSwim;
this.canDrown = properties.canDrown;
this.fallDistanceModifier = properties.fallDistanceModifier;
this.canExtinguish = properties.canExtinguish;
this.canConvertToSource = properties.canConvertToSource;
this.supportsBoating = properties.supportsBoating;
this.pathType = properties.pathType;
this.adjacentPathType = properties.adjacentPathType;
this.sounds = ImmutableMap.copyOf(properties.sounds);
this.canHydrate = properties.canHydrate;
this.lightLevel = properties.lightLevel;
this.density = properties.density;
this.temperature = properties.temperature;
this.viscosity = properties.viscosity;
this.rarity = properties.rarity;
this.dripInfo = properties.dripInfo;
}
/* Default Accessors */
/**
Returns the component representing the name of the fluid type.
**Returns:** the component representing the name of the fluid type
/
public Component getDescription() {
return Component.translatable(this.getDescriptionId());
}
/**
Returns the identifier representing the name of the fluid type.
If no identifier was specified, then the identifier will be defaulted
to `fluid_type..`.
**Returns:** the identifier representing the name of the fluid type
/
public String getDescriptionId() {
if (this.descriptionId == null)
this.descriptionId = Util.makeDescriptionId("fluid_type", NeoForgeRegistries.FLUID_TYPES.getKey(this));
return this.descriptionId;
}
/**
Returns the light level emitted by the fluid.


Note: This should be a value between `[0,15]`. If not specified, the
light level is `0` as most fluids do not emit light.


Implementation: This is used by the bucket model to determine whether the fluid
should render full-bright when `applyFluidLuminosity` is `true`.
**Returns:** the light level emitted by the fluid
/
public int getLightLevel() {
return this.lightLevel;
}
/**
Returns the density of the fluid.


Note: This is an arbitrary number. Negative or zero values indicate
that the fluid is lighter than air. If not specified, the density is
approximately equivalent to the real-life density of water in `kg/m^3`.
**Returns:** the density of the fluid
/
public int getDensity() {
return this.density;
}
/**
Returns the temperature of the fluid.


Note: This is an arbitrary number. Higher temperature values indicate
that the fluid is hotter. If not specified, the temperature is approximately
equivalent to the real-life room temperature of water in `Kelvin`.
**Returns:** the temperature of the fluid
/
public int getTemperature() {
return this.temperature;
}
/**
Returns the viscosity, or thickness, of the fluid.


Note: This is an arbitrary number. The value should never be negative.
Higher viscosity values indicate that the fluid flows more slowly. If not
specified, the viscosity is approximately equivalent to the real-life
viscosity of water in `m/s^2`.
**Returns:** the viscosity of the fluid
/
public int getViscosity() {
return this.viscosity;
}
/**
Returns the rarity of the fluid.


Note: If not specified, the rarity of the fluid is `Rarity#COMMON`.
**Returns:** the rarity of the fluid
/
public Rarity getRarity() {
return this.rarity;
}
/**
{**Returns:** the pointed dripstone drip information of the fluid}
/
@Nullable
public DripstoneDripInfo getDripInfo() {
return this.dripInfo;
}
/**
Returns a sound to play when a certain action is performed. If no
sound is present, then the sound will be `null`.
**action**: the action being performed
**Returns:** the sound to play when performing the action
/
@Nullable
public SoundEvent getSound(SoundAction action) {
return this.sounds.get(action);
}
/* Entity-Based Accessors */
/**
Returns how much the velocity of the fluid should be scaled by
when applied to an entity.
**entity**: the entity in the fluid
**Returns:** a scalar to multiply to the fluid velocity
/
public double motionScale(Entity entity) {
return this.motionScale;
}
/**
Returns whether the fluid can push an entity.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can be pushed by the fluid, `false` otherwise
/
public boolean canPushEntity(Entity entity) {
return this.canPushEntity;
}
/**
Returns whether the entity can swim in the fluid.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can swim in the fluid, `false` otherwise
/
public boolean canSwim(Entity entity) {
return this.canSwim;
}
/**
Returns how much the fluid should scale the damage done to a falling
entity when hitting the ground per tick.


Implementation: If the entity is in many fluids, the smallest modifier
is applied.
**entity**: the entity in the fluid
**Returns:** a scalar to multiply to the fall damage
/
public float getFallDistanceModifier(Entity entity) {
return this.fallDistanceModifier;
}
/**
Returns whether the entity can be extinguished by this fluid.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can be extinguished, `false` otherwise
/
public boolean canExtinguish(Entity entity) {
return this.canExtinguish;
}
/**
Performs how an entity moves when within the fluid. If using custom
movement logic, the method should return `true`. Otherwise, the
movement logic will default to water.
**state**: the state of the fluid
**entity**: the entity moving within the fluid
**movementVector**: the velocity of how the entity wants to move
**gravity**: the gravity to apply to the entity
**Returns:** `true` if custom movement logic is performed, `false` otherwise
/
public boolean move(FluidState state, LivingEntity entity, Vec3 movementVector, double gravity) {
return false;
}
/**
Returns whether the entity can drown in the fluid.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can drown in the fluid, `false` otherwise
/
public boolean canDrownIn(LivingEntity entity) {
return this.canDrown;
}
/**
Performs what to do when an item is in a fluid.
**entity**: the item in the fluid
/
public void setItemMovement(ItemEntity entity) {
Vec3 vec3 = entity.getDeltaMovement();
entity.setDeltaMovement(vec3.x * (double) 0.99F, vec3.y + (double) (vec3.y < (double) 0.06F ? 5.0E-4F : 0.0F), vec3.z * (double) 0.99F);
}
/**
Returns whether the boat can be used on the fluid.
**boat**: the boat trying to be used on the fluid
**Returns:** `true` if the boat can be used, `false` otherwise
/
public boolean supportsBoating(Boat boat) {
return this.supportsBoating;
}
/**
Returns whether the boat can be used on the fluid.
**state**: the state of the fluid
**boat**: the boat trying to be used on the fluid
**Returns:** `true` if the boat can be used, `false` otherwise
/
public boolean supportsBoating(FluidState state, Boat boat) {
return this.supportsBoating(boat);
}
/**
Returns whether the entity can ride in this vehicle under the fluid.
**vehicle**: the vehicle being ridden in
**rider**: the entity riding the vehicle
**Returns:** `true` if the vehicle can be ridden in under this fluid,
`false` otherwise
/
public boolean canRideVehicleUnder(Entity vehicle, Entity rider) {
if (this == NeoForgeMod.WATER_TYPE.value()) return !vehicle.dismountsUnderwater();
return true;
}
/**
Returns whether the entity can be hydrated by this fluid.


Hydration is an arbitrary word which depends on the entity.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can be hydrated, `false`
otherwise
/
public boolean canHydrate(Entity entity) {
return this.canHydrate;
}
/**
Returns a sound to play when a certain action is performed by the
entity in the fluid. If no sound is present, then the sound will be
`null`.
**entity**: the entity in the fluid
**action**: the action being performed
**Returns:** the sound to play when performing the action
/
@Nullable
public SoundEvent getSound(Entity entity, SoundAction action) {
return this.getSound(action);
}
/* Level-Based Accessors */
/**
Returns whether the block can be extinguished by this fluid.
**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**Returns:** `true` if the block can be extinguished, `false` otherwise
/
public boolean canExtinguish(FluidState state, BlockGetter getter, BlockPos pos) {
return this.canExtinguish;
}
/**
Returns whether the fluid can create a source.
**state**: the state of the fluid
**reader**: the reader that can get the fluid
**pos**: the location of the fluid
**Returns:** `true` if the fluid can create a source, `false` otherwise
/
public boolean canConvertToSource(FluidState state, LevelReader reader, BlockPos pos) {
return this.canConvertToSource;
}
/**
Gets the path type of this fluid when an entity is pathfinding. When
`null`, uses vanilla behavior.
**state**: the state of the fluid
**level**: the level which contains this fluid
**pos**: the position of the fluid
**mob**: the mob currently pathfinding, may be `null`
**canFluidLog**: `true` if the path is being applied for fluids that can log blocks,
should be checked against if the fluid can log a block
**Returns:** the path type of this fluid
/
@Nullable
public PathType getBlockPathType(FluidState state, BlockGetter level, BlockPos pos, @Nullable Mob mob, boolean canFluidLog) {
return this.pathType;
}
/**
Gets the path type of the adjacent fluid to a pathfinding entity.
Path types with a negative malus are not traversable for the entity.
Pathfinding entities will favor paths consisting of a lower malus.
When `null`, uses vanilla behavior.
**state**: the state of the fluid
**level**: the level which contains this fluid
**pos**: the position of the fluid
**mob**: the mob currently pathfinding, may be `null`
**originalType**: the path type of the source the entity is on
**Returns:** the path type of this fluid
/
@Nullable
public PathType getAdjacentBlockPathType(FluidState state, BlockGetter level, BlockPos pos, @Nullable Mob mob, PathType originalType) {
return this.adjacentPathType;
}
/**
Returns a sound to play when a certain action is performed at a
position. If no sound is present, then the sound will be `null`.
**player**: the player listening to the sound
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**action**: the action being performed
**Returns:** the sound to play when performing the action
/
@Nullable
public SoundEvent getSound(@Nullable Player player, BlockGetter getter, BlockPos pos, SoundAction action) {
return this.getSound(action);
}
/**
Returns whether the block can be hydrated by a fluid.


Hydration is an arbitrary word which depends on the block.

A farmland has moisture
A sponge can soak up the liquid
A coral can live

**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**source**: the state of the block being hydrated
**sourcePos**: the position of the block being hydrated
**Returns:** `true` if the block can be hydrated, `false` otherwise
/
public boolean canHydrate(FluidState state, BlockGetter getter, BlockPos pos, BlockState source, BlockPos sourcePos) {
return this.canHydrate;
}
/**
Returns the light level emitted by the fluid.


Note: This should be a value between `[0,15]`. If not specified, the
light level is `0` as most fluids do not emit light.
**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**Returns:** the light level emitted by the fluid
/
public int getLightLevel(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getLightLevel();
}
/**
Returns the density of the fluid.


Note: This is an arbitrary number. Negative or zero values indicate
that the fluid is lighter than air. If not specified, the density is
approximately equivalent to the real-life density of water in `kg/m^3`.
**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**Returns:** the density of the fluid
/
public int getDensity(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getDensity();
}
/**
Returns the temperature of the fluid.


Note: This is an arbitrary number. Higher temperature values indicate
that the fluid is hotter. If not specified, the temperature is approximately
equivalent to the real-life room temperature of water in `Kelvin`.
**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**Returns:** the temperature of the fluid
/
public int getTemperature(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getTemperature();
}
/**
Returns the viscosity, or thickness, of the fluid.


Note: This is an arbitrary number. The value should never be negative.
Higher viscosity values indicate that the fluid flows more slowly. If not
specified, the viscosity is approximately equivalent to the real-life
viscosity of water in `m/s^2`.
**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**Returns:** the viscosity of the fluid
/
public int getViscosity(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getViscosity();
}
/**
Returns whether a fluid above a pointed dripstone block can successfully fill a cauldron below.


If this will return `true`, this method will also do 3 things:

Set the cauldron below to the proper filled state as defined by the FluidType's `DripstoneDripInfo`
Send the BLOCK_CHANGE `GameEvent`
Play a sound as defined by the FluidType's `DripstoneDripInfo`

**fluid**: the fluid that is dripping from a stalactite
**level**: the level the fluid is being placed in
**cauldronPos**: the position of the cauldron this fluid is dripping into
**Returns:** `true` if a cauldron is successfully filled, `false` otherwise
/
public boolean handleCauldronDrip(Fluid fluid, Level level, BlockPos cauldronPos) {
if (fluid instanceof FlowingFluid flowing && fluid.isSource(flowing.getSource(false)) && this.getDripInfo() != null) {
BlockState cauldronBlock = this.getDripInfo().filledCauldron().defaultBlockState();
level.setBlockAndUpdate(cauldronPos, cauldronBlock);
level.gameEvent(GameEvent.BLOCK_CHANGE, cauldronPos, GameEvent.Context.of(cauldronBlock));
SoundEvent dripSound = this.getSound(null, level, cauldronPos, SoundActions.CAULDRON_DRIP);
if (dripSound != null) {
level.playSound(null, cauldronPos, dripSound, SoundSource.BLOCKS, 2.0F, level.getRandom().nextFloat() * 0.1F + 0.9F);
}
return true;
}
return false;
}
/* Stack-Based Accessors

### getSound

```java
public SoundEvent getSound(FluidStack stack, SoundAction action)
```

**Parameters:**

- `stack` (`FluidStack`)
- `action` (`SoundAction`)

**Returns:** `SoundEvent`

### getDescription

```java
public Component getDescription(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `Component`

### getDescriptionId

```java
public String getDescriptionId(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `String`

### canHydrate

```java
public boolean canHydrate(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `boolean`

### getLightLevel

```java
public int getLightLevel(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `int`

### getDensity

```java
public int getDensity(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `int`

### getTemperature

```java
public int getTemperature(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `int`

### getViscosity

```java
public int getViscosity(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `int`

### getRarity

```java
public Rarity getRarity(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `Rarity`

### isAir

```java
public final boolean isAir()
```

**Returns:** `boolean`

A definition of common attributes, properties, and methods that is applied
to a `Fluid`. This is used to link a flowing and source fluid together
without relying on tags. Most accessors do not correlate to in-game features;
they are provided for mods to take advantage of.


Accessors are typically implemented in a method call chain. As such, it
can provide a general implementation while more specific implementations
can be implemented by overriding methods further in the call chain (on fluids,
entities, etc.).
/
public class FluidType {
/**
The number of fluid units that a bucket represents.
/
public static final int BUCKET_VOLUME = 1000;
/**
A lazy value which computes the number of fluid types within the
registry.
/
public static final Lazy<Integer> SIZE = Lazy.of(() -> NeoForgeRegistries.FLUID_TYPES.keySet().size());
private String descriptionId;
private final double motionScale;
private final boolean canPushEntity;
private final boolean canSwim;
private final boolean canDrown;
private final float fallDistanceModifier;
private final boolean canExtinguish;
private final boolean canConvertToSource;
private final boolean supportsBoating;
@Nullable
private final PathType pathType, adjacentPathType;
private final boolean canHydrate;
private final int lightLevel;
private final int density;
private final int temperature;
private final int viscosity;
private final Rarity rarity;
@Nullable
private final DripstoneDripInfo dripInfo;
/**
A map of actions performed to sound that should be played.
/
protected final Map<SoundAction, SoundEvent> sounds;
/**
Default constructor.
**properties**: the general properties of the fluid type
/
public FluidType(final Properties properties) {
this.descriptionId = properties.descriptionId;
this.motionScale = properties.motionScale;
this.canPushEntity = properties.canPushEntity;
this.canSwim = properties.canSwim;
this.canDrown = properties.canDrown;
this.fallDistanceModifier = properties.fallDistanceModifier;
this.canExtinguish = properties.canExtinguish;
this.canConvertToSource = properties.canConvertToSource;
this.supportsBoating = properties.supportsBoating;
this.pathType = properties.pathType;
this.adjacentPathType = properties.adjacentPathType;
this.sounds = ImmutableMap.copyOf(properties.sounds);
this.canHydrate = properties.canHydrate;
this.lightLevel = properties.lightLevel;
this.density = properties.density;
this.temperature = properties.temperature;
this.viscosity = properties.viscosity;
this.rarity = properties.rarity;
this.dripInfo = properties.dripInfo;
}
/* Default Accessors */
/**
Returns the component representing the name of the fluid type.
**Returns:** the component representing the name of the fluid type
/
public Component getDescription() {
return Component.translatable(this.getDescriptionId());
}
/**
Returns the identifier representing the name of the fluid type.
If no identifier was specified, then the identifier will be defaulted
to `fluid_type..`.
**Returns:** the identifier representing the name of the fluid type
/
public String getDescriptionId() {
if (this.descriptionId == null)
this.descriptionId = Util.makeDescriptionId("fluid_type", NeoForgeRegistries.FLUID_TYPES.getKey(this));
return this.descriptionId;
}
/**
Returns the light level emitted by the fluid.


Note: This should be a value between `[0,15]`. If not specified, the
light level is `0` as most fluids do not emit light.


Implementation: This is used by the bucket model to determine whether the fluid
should render full-bright when `applyFluidLuminosity` is `true`.
**Returns:** the light level emitted by the fluid
/
public int getLightLevel() {
return this.lightLevel;
}
/**
Returns the density of the fluid.


Note: This is an arbitrary number. Negative or zero values indicate
that the fluid is lighter than air. If not specified, the density is
approximately equivalent to the real-life density of water in `kg/m^3`.
**Returns:** the density of the fluid
/
public int getDensity() {
return this.density;
}
/**
Returns the temperature of the fluid.


Note: This is an arbitrary number. Higher temperature values indicate
that the fluid is hotter. If not specified, the temperature is approximately
equivalent to the real-life room temperature of water in `Kelvin`.
**Returns:** the temperature of the fluid
/
public int getTemperature() {
return this.temperature;
}
/**
Returns the viscosity, or thickness, of the fluid.


Note: This is an arbitrary number. The value should never be negative.
Higher viscosity values indicate that the fluid flows more slowly. If not
specified, the viscosity is approximately equivalent to the real-life
viscosity of water in `m/s^2`.
**Returns:** the viscosity of the fluid
/
public int getViscosity() {
return this.viscosity;
}
/**
Returns the rarity of the fluid.


Note: If not specified, the rarity of the fluid is `Rarity#COMMON`.
**Returns:** the rarity of the fluid
/
public Rarity getRarity() {
return this.rarity;
}
/**
{**Returns:** the pointed dripstone drip information of the fluid}
/
@Nullable
public DripstoneDripInfo getDripInfo() {
return this.dripInfo;
}
/**
Returns a sound to play when a certain action is performed. If no
sound is present, then the sound will be `null`.
**action**: the action being performed
**Returns:** the sound to play when performing the action
/
@Nullable
public SoundEvent getSound(SoundAction action) {
return this.sounds.get(action);
}
/* Entity-Based Accessors */
/**
Returns how much the velocity of the fluid should be scaled by
when applied to an entity.
**entity**: the entity in the fluid
**Returns:** a scalar to multiply to the fluid velocity
/
public double motionScale(Entity entity) {
return this.motionScale;
}
/**
Returns whether the fluid can push an entity.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can be pushed by the fluid, `false` otherwise
/
public boolean canPushEntity(Entity entity) {
return this.canPushEntity;
}
/**
Returns whether the entity can swim in the fluid.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can swim in the fluid, `false` otherwise
/
public boolean canSwim(Entity entity) {
return this.canSwim;
}
/**
Returns how much the fluid should scale the damage done to a falling
entity when hitting the ground per tick.


Implementation: If the entity is in many fluids, the smallest modifier
is applied.
**entity**: the entity in the fluid
**Returns:** a scalar to multiply to the fall damage
/
public float getFallDistanceModifier(Entity entity) {
return this.fallDistanceModifier;
}
/**
Returns whether the entity can be extinguished by this fluid.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can be extinguished, `false` otherwise
/
public boolean canExtinguish(Entity entity) {
return this.canExtinguish;
}
/**
Performs how an entity moves when within the fluid. If using custom
movement logic, the method should return `true`. Otherwise, the
movement logic will default to water.
**state**: the state of the fluid
**entity**: the entity moving within the fluid
**movementVector**: the velocity of how the entity wants to move
**gravity**: the gravity to apply to the entity
**Returns:** `true` if custom movement logic is performed, `false` otherwise
/
public boolean move(FluidState state, LivingEntity entity, Vec3 movementVector, double gravity) {
return false;
}
/**
Returns whether the entity can drown in the fluid.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can drown in the fluid, `false` otherwise
/
public boolean canDrownIn(LivingEntity entity) {
return this.canDrown;
}
/**
Performs what to do when an item is in a fluid.
**entity**: the item in the fluid
/
public void setItemMovement(ItemEntity entity) {
Vec3 vec3 = entity.getDeltaMovement();
entity.setDeltaMovement(vec3.x * (double) 0.99F, vec3.y + (double) (vec3.y < (double) 0.06F ? 5.0E-4F : 0.0F), vec3.z * (double) 0.99F);
}
/**
Returns whether the boat can be used on the fluid.
**boat**: the boat trying to be used on the fluid
**Returns:** `true` if the boat can be used, `false` otherwise
/
public boolean supportsBoating(Boat boat) {
return this.supportsBoating;
}
/**
Returns whether the boat can be used on the fluid.
**state**: the state of the fluid
**boat**: the boat trying to be used on the fluid
**Returns:** `true` if the boat can be used, `false` otherwise
/
public boolean supportsBoating(FluidState state, Boat boat) {
return this.supportsBoating(boat);
}
/**
Returns whether the entity can ride in this vehicle under the fluid.
**vehicle**: the vehicle being ridden in
**rider**: the entity riding the vehicle
**Returns:** `true` if the vehicle can be ridden in under this fluid,
`false` otherwise
/
public boolean canRideVehicleUnder(Entity vehicle, Entity rider) {
if (this == NeoForgeMod.WATER_TYPE.value()) return !vehicle.dismountsUnderwater();
return true;
}
/**
Returns whether the entity can be hydrated by this fluid.


Hydration is an arbitrary word which depends on the entity.
**entity**: the entity in the fluid
**Returns:** `true` if the entity can be hydrated, `false`
otherwise
/
public boolean canHydrate(Entity entity) {
return this.canHydrate;
}
/**
Returns a sound to play when a certain action is performed by the
entity in the fluid. If no sound is present, then the sound will be
`null`.
**entity**: the entity in the fluid
**action**: the action being performed
**Returns:** the sound to play when performing the action
/
@Nullable
public SoundEvent getSound(Entity entity, SoundAction action) {
return this.getSound(action);
}
/* Level-Based Accessors */
/**
Returns whether the block can be extinguished by this fluid.
**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**Returns:** `true` if the block can be extinguished, `false` otherwise
/
public boolean canExtinguish(FluidState state, BlockGetter getter, BlockPos pos) {
return this.canExtinguish;
}
/**
Returns whether the fluid can create a source.
**state**: the state of the fluid
**reader**: the reader that can get the fluid
**pos**: the location of the fluid
**Returns:** `true` if the fluid can create a source, `false` otherwise
/
public boolean canConvertToSource(FluidState state, LevelReader reader, BlockPos pos) {
return this.canConvertToSource;
}
/**
Gets the path type of this fluid when an entity is pathfinding. When
`null`, uses vanilla behavior.
**state**: the state of the fluid
**level**: the level which contains this fluid
**pos**: the position of the fluid
**mob**: the mob currently pathfinding, may be `null`
**canFluidLog**: `true` if the path is being applied for fluids that can log blocks,
should be checked against if the fluid can log a block
**Returns:** the path type of this fluid
/
@Nullable
public PathType getBlockPathType(FluidState state, BlockGetter level, BlockPos pos, @Nullable Mob mob, boolean canFluidLog) {
return this.pathType;
}
/**
Gets the path type of the adjacent fluid to a pathfinding entity.
Path types with a negative malus are not traversable for the entity.
Pathfinding entities will favor paths consisting of a lower malus.
When `null`, uses vanilla behavior.
**state**: the state of the fluid
**level**: the level which contains this fluid
**pos**: the position of the fluid
**mob**: the mob currently pathfinding, may be `null`
**originalType**: the path type of the source the entity is on
**Returns:** the path type of this fluid
/
@Nullable
public PathType getAdjacentBlockPathType(FluidState state, BlockGetter level, BlockPos pos, @Nullable Mob mob, PathType originalType) {
return this.adjacentPathType;
}
/**
Returns a sound to play when a certain action is performed at a
position. If no sound is present, then the sound will be `null`.
**player**: the player listening to the sound
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**action**: the action being performed
**Returns:** the sound to play when performing the action
/
@Nullable
public SoundEvent getSound(@Nullable Player player, BlockGetter getter, BlockPos pos, SoundAction action) {
return this.getSound(action);
}
/**
Returns whether the block can be hydrated by a fluid.


Hydration is an arbitrary word which depends on the block.

A farmland has moisture
A sponge can soak up the liquid
A coral can live

**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**source**: the state of the block being hydrated
**sourcePos**: the position of the block being hydrated
**Returns:** `true` if the block can be hydrated, `false` otherwise
/
public boolean canHydrate(FluidState state, BlockGetter getter, BlockPos pos, BlockState source, BlockPos sourcePos) {
return this.canHydrate;
}
/**
Returns the light level emitted by the fluid.


Note: This should be a value between `[0,15]`. If not specified, the
light level is `0` as most fluids do not emit light.
**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**Returns:** the light level emitted by the fluid
/
public int getLightLevel(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getLightLevel();
}
/**
Returns the density of the fluid.


Note: This is an arbitrary number. Negative or zero values indicate
that the fluid is lighter than air. If not specified, the density is
approximately equivalent to the real-life density of water in `kg/m^3`.
**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**Returns:** the density of the fluid
/
public int getDensity(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getDensity();
}
/**
Returns the temperature of the fluid.


Note: This is an arbitrary number. Higher temperature values indicate
that the fluid is hotter. If not specified, the temperature is approximately
equivalent to the real-life room temperature of water in `Kelvin`.
**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**Returns:** the temperature of the fluid
/
public int getTemperature(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getTemperature();
}
/**
Returns the viscosity, or thickness, of the fluid.


Note: This is an arbitrary number. The value should never be negative.
Higher viscosity values indicate that the fluid flows more slowly. If not
specified, the viscosity is approximately equivalent to the real-life
viscosity of water in `m/s^2`.
**state**: the state of the fluid
**getter**: the getter which can get the fluid
**pos**: the position of the fluid
**Returns:** the viscosity of the fluid
/
public int getViscosity(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getViscosity();
}
/**
Returns whether a fluid above a pointed dripstone block can successfully fill a cauldron below.


If this will return `true`, this method will also do 3 things:

Set the cauldron below to the proper filled state as defined by the FluidType's `DripstoneDripInfo`
Send the BLOCK_CHANGE `GameEvent`
Play a sound as defined by the FluidType's `DripstoneDripInfo`

**fluid**: the fluid that is dripping from a stalactite
**level**: the level the fluid is being placed in
**cauldronPos**: the position of the cauldron this fluid is dripping into
**Returns:** `true` if a cauldron is successfully filled, `false` otherwise
/
public boolean handleCauldronDrip(Fluid fluid, Level level, BlockPos cauldronPos) {
if (fluid instanceof FlowingFluid flowing && fluid.isSource(flowing.getSource(false)) && this.getDripInfo() != null) {
BlockState cauldronBlock = this.getDripInfo().filledCauldron().defaultBlockState();
level.setBlockAndUpdate(cauldronPos, cauldronBlock);
level.gameEvent(GameEvent.BLOCK_CHANGE, cauldronPos, GameEvent.Context.of(cauldronBlock));
SoundEvent dripSound = this.getSound(null, level, cauldronPos, SoundActions.CAULDRON_DRIP);
if (dripSound != null) {
level.playSound(null, cauldronPos, dripSound, SoundSource.BLOCKS, 2.0F, level.getRandom().nextFloat() * 0.1F + 0.9F);
}
return true;
}
return false;
}
/* Stack-Based Accessors */
/**
Returns whether the fluid can create a source.
**stack**: the stack holding the fluid
**Returns:** `true` if the fluid can create a source, `false` otherwise
/
public boolean canConvertToSource(FluidStack stack) {
return this.canConvertToSource;
}
/**
Returns a sound to play when a certain action is performed. If no
sound is present, then the sound will be `null`.
**stack**: the stack holding the fluid
**action**: the action being performed
**Returns:** the sound to play when performing the action
/
@Nullable
public SoundEvent getSound(FluidStack stack, SoundAction action) {
return this.getSound(action);
}
/**
Returns the component representing the name of the fluid type.
**stack**: the stack holding the fluid
**Returns:** the component representing the name of the fluid type
/
public Component getDescription(FluidStack stack) {
return Component.translatable(this.getDescriptionId(stack));
}
/**
Returns the identifier representing the name of the fluid.
If no identifier was specified, then the identifier will be defaulted
to `fluid_type..`.
**stack**: the stack holding the fluid
**Returns:** the identifier representing the name of the fluid
/
public String getDescriptionId(FluidStack stack) {
return this.getDescriptionId();
}
/**
Returns whether the fluid can hydrate.


Hydration is an arbitrary word which depends on the implementation.
**stack**: the stack holding the fluid
**Returns:** `true` if the fluid can hydrate, `false` otherwise
/
public boolean canHydrate(FluidStack stack) {
return this.canHydrate;
}
/**
Returns the light level emitted by the fluid.


Note: This should be a value between `[0,15]`. If not specified, the
light level is `0` as most fluids do not emit light.
**stack**: the stack holding the fluid
**Returns:** the light level emitted by the fluid
/
public int getLightLevel(FluidStack stack) {
return this.getLightLevel();
}
/**
Returns the density of the fluid.


Note: This is an arbitrary number. Negative or zero values indicate
that the fluid is lighter than air. If not specified, the density is
approximately equivalent to the real-life density of water in `kg/m^3`.
**stack**: the stack holding the fluid
**Returns:** the density of the fluid
/
public int getDensity(FluidStack stack) {
return this.getDensity();
}
/**
Returns the temperature of the fluid.


Note: This is an arbitrary number. Higher temperature values indicate
that the fluid is hotter. If not specified, the temperature is approximately
equivalent to the real-life room temperature of water in `Kelvin`.
**stack**: the stack holding the fluid
**Returns:** the temperature of the fluid
/
public int getTemperature(FluidStack stack) {
return this.getTemperature();
}
/**
Returns the viscosity, or thickness, of the fluid.


Note: This is an arbitrary number. The value should never be negative.
Higher viscosity values indicate that the fluid flows more slowly. If not
specified, the viscosity is approximately equivalent to the real-life
viscosity of water in `m/s^2`.
**stack**: the stack holding the fluid
**Returns:** the viscosity of the fluid
/
public int getViscosity(FluidStack stack) {
return this.getViscosity();
}
/**
Returns the rarity of the fluid.


Note: If not specified, the rarity of the fluid is `Rarity#COMMON`.
**stack**: the stack holding the fluid
**Returns:** the rarity of the fluid
/
public Rarity getRarity(FluidStack stack) {
return this.getRarity();
}
/* Helper Methods

### isVanilla

```java
public final boolean isVanilla()
```

**Returns:** `boolean`

### getBucket

```java
public ItemStack getBucket(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `ItemStack`

### getBlockForFluidState

```java
public BlockState getBlockForFluidState(BlockAndTintGetter getter, BlockPos pos, FluidState state)
```

**Parameters:**

- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`FluidState`)

**Returns:** `BlockState`

### getStateForPlacement

```java
public FluidState getStateForPlacement(BlockAndTintGetter getter, BlockPos pos, FluidStack stack)
```

**Parameters:**

- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `stack` (`FluidStack`)

**Returns:** `FluidState`

### canBePlacedInLevel

```java
public final boolean canBePlacedInLevel(BlockAndTintGetter getter, BlockPos pos, FluidState state)
```

**Parameters:**

- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`FluidState`)

**Returns:** `boolean`

### canBePlacedInLevel

```java
public final boolean canBePlacedInLevel(BlockAndTintGetter getter, BlockPos pos, FluidStack stack)
```

**Parameters:**

- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `stack` (`FluidStack`)

**Returns:** `boolean`

### isLighterThanAir

```java
public final boolean isLighterThanAir()
```

**Returns:** `boolean`

### isVaporizedOnPlacement

```java
public boolean isVaporizedOnPlacement(Level level, BlockPos pos, FluidStack stack)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `stack` (`FluidStack`)

**Returns:** `boolean`

### onVaporize

```java
public void onVaporize(Player player, Level level, BlockPos pos, FluidStack stack)
```

**Parameters:**

- `player` (`Player`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `stack` (`FluidStack`)

### toString

```java
public String toString()
```

**Returns:** `String`

### initializeClient

```java
public void initializeClient(Consumer<IClientFluidTypeExtensions> consumer)
```

**Parameters:**

- `consumer` (`Consumer<IClientFluidTypeExtensions>`)

### create

```java
public static final Properties create()
```

**Returns:** `Properties`

### Properties

```java
return new Properties()
```

**Returns:** `return new`

### descriptionId

```java
public Properties descriptionId(String descriptionId)
```

**Parameters:**

- `descriptionId` (`String`)

**Returns:** `Properties`

### motionScale

```java
public Properties motionScale(double motionScale)
```

**Parameters:**

- `motionScale` (`double`)

**Returns:** `Properties`

### canPushEntity

```java
public Properties canPushEntity(boolean canPushEntity)
```

**Parameters:**

- `canPushEntity` (`boolean`)

**Returns:** `Properties`

### canSwim

```java
public Properties canSwim(boolean canSwim)
```

**Parameters:**

- `canSwim` (`boolean`)

**Returns:** `Properties`

### canDrown

```java
public Properties canDrown(boolean canDrown)
```

**Parameters:**

- `canDrown` (`boolean`)

**Returns:** `Properties`

### fallDistanceModifier

```java
public Properties fallDistanceModifier(float fallDistanceModifier)
```

**Parameters:**

- `fallDistanceModifier` (`float`)

**Returns:** `Properties`

### canExtinguish

```java
public Properties canExtinguish(boolean canExtinguish)
```

**Parameters:**

- `canExtinguish` (`boolean`)

**Returns:** `Properties`

### canConvertToSource

```java
public Properties canConvertToSource(boolean canConvertToSource)
```

**Parameters:**

- `canConvertToSource` (`boolean`)

**Returns:** `Properties`

### supportsBoating

```java
public Properties supportsBoating(boolean supportsBoating)
```

**Parameters:**

- `supportsBoating` (`boolean`)

**Returns:** `Properties`

### pathType

```java
public Properties pathType(PathType pathType)
```

**Parameters:**

- `pathType` (`PathType`)

**Returns:** `Properties`

### adjacentPathType

```java
public Properties adjacentPathType(PathType adjacentPathType)
```

**Parameters:**

- `adjacentPathType` (`PathType`)

**Returns:** `Properties`

### sound

```java
public Properties sound(SoundAction action, SoundEvent sound)
```

**Parameters:**

- `action` (`SoundAction`)
- `sound` (`SoundEvent`)

**Returns:** `Properties`

### canHydrate

```java
public Properties canHydrate(boolean canHydrate)
```

**Parameters:**

- `canHydrate` (`boolean`)

**Returns:** `Properties`

### lightLevel

```java
public Properties lightLevel(int lightLevel)
```

**Parameters:**

- `lightLevel` (`int`)

**Returns:** `Properties`

### IllegalArgumentException

```java
throw new IllegalArgumentException("The light level should be between [0)
```

**Parameters:**

- `[0` (`"The light level should be between`)

**Returns:** `throw new`

### density

```java
public Properties density(int density)
```

**Parameters:**

- `density` (`int`)

**Returns:** `Properties`

### temperature

```java
public Properties temperature(int temperature)
```

**Parameters:**

- `temperature` (`int`)

**Returns:** `Properties`

### viscosity

```java
public Properties viscosity(int viscosity)
```

**Parameters:**

- `viscosity` (`int`)

**Returns:** `Properties`

### IllegalArgumentException

```java
throw new IllegalArgumentException("The viscosity should never be negative.")
```

**Parameters:**

- `negative."` (`"The viscosity should never be`)

**Returns:** `throw new`

### rarity

```java
public Properties rarity(Rarity rarity)
```

**Parameters:**

- `rarity` (`Rarity`)

**Returns:** `Properties`

### addDripstoneDripping

```java
public Properties addDripstoneDripping(float chance, ParticleOptions dripParticle, Block cauldron, SoundEvent fillSound)
```

**Parameters:**

- `chance` (`float`)
- `dripParticle` (`ParticleOptions`)
- `cauldron` (`Block`)
- `fillSound` (`SoundEvent`)

**Returns:** `Properties`

### DripstoneDripInfo

```java
public record DripstoneDripInfo(float chance, ParticleOptions dripParticle, Block filledCauldron)
```

**Parameters:**

- `chance` (`float`)
- `dripParticle` (`ParticleOptions`)
- `filledCauldron` (`Block`)

**Returns:** `record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Properties` | class |  |
| `DripstoneDripInfo` | record |  |
