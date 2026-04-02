# IEntityExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface
**Extends:** `INBTSerializable<CompoundTag>`

## Methods

### self

```java
private Entity self()
```

**Returns:** `private Entity`

### deserializeNBT

```java
default void deserializeNBT(HolderLookup.Provider provider, CompoundTag nbt)
```

**Parameters:**

- `provider` (`HolderLookup.Provider`)
- `nbt` (`CompoundTag`)

### serializeNBT

```java
default CompoundTag serializeNBT(HolderLookup.Provider provider)
```

**Parameters:**

- `provider` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### captureDrops

```java
Collection<ItemEntity> captureDrops()
```

**Returns:** `Collection<ItemEntity>`

### captureDrops

```java
Collection<ItemEntity> captureDrops(Collection<ItemEntity> captureDrops)
```

**Parameters:**

- `captureDrops` (`Collection<ItemEntity>`)

**Returns:** `Collection<ItemEntity>`

### getPersistentData

```java
CompoundTag getPersistentData()
```

**Returns:** `CompoundTag`

### shouldRiderSit

```java
default boolean shouldRiderSit()
```

**Returns:** `boolean`

### getPickedResult

```java
default ItemStack getPickedResult(HitResult target)
```

**Parameters:**

- `target` (`HitResult`)

**Returns:** `ItemStack`

### canRiderInteract

```java
default boolean canRiderInteract()
```

**Returns:** `boolean`

### canBeRiddenUnderFluidType

```java
default boolean canBeRiddenUnderFluidType(FluidType type, Entity rider)
```

**Parameters:**

- `type` (`FluidType`)
- `rider` (`Entity`)

**Returns:** `boolean`

### canTrample

```java
boolean canTrample(BlockState state, BlockPos pos, float fallDistance)
```

**Parameters:**

- `state` (`BlockState`)
- `pos` (`BlockPos`)
- `fallDistance` (`float`)

**Returns:** `boolean`

### getClassification

```java
default MobCategory getClassification(boolean forSpawnCount)
```

**Parameters:**

- `forSpawnCount` (`boolean`)

**Returns:** `MobCategory`

### isAddedToLevel

```java
boolean isAddedToLevel()
```

**Returns:** `boolean`

### onAddedToLevel

```java
void onAddedToLevel()
```

### onRemovedFromLevel

```java
void onRemovedFromLevel()
```

### revive

```java
void revive()
```

### isMultipartEntity

```java
default boolean isMultipartEntity()
```

**Returns:** `boolean`

### getParts

```java
default PartEntity<?>[] getParts()
```

**Returns:** `PartEntity<?>[]`

### getFluidTypeHeight

```java
double getFluidTypeHeight(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `double`

### getMaxHeightFluidType

```java
FluidType getMaxHeightFluidType()
```

**Returns:** `FluidType`

### isInFluidType

```java
default boolean isInFluidType(FluidState state)
```

**Parameters:**

- `state` (`FluidState`)

**Returns:** `boolean`

### isInFluidType

```java
default boolean isInFluidType(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `boolean`

### isInFluidType

```java
default boolean isInFluidType(BiPredicate<FluidType, Double> predicate)
```

**Parameters:**

- `predicate` (`BiPredicate<FluidType, Double>`)

**Returns:** `boolean`

### isInFluidType

```java
return isInFluidType()
```

**Returns:** `return`

### isInFluidType

```java
boolean isInFluidType(BiPredicate<FluidType, Double> predicate, boolean forAllTypes)
```

**Parameters:**

- `predicate` (`BiPredicate<FluidType, Double>`)
- `forAllTypes` (`boolean`)

**Returns:** `boolean`

### isInFluidType

```java
boolean isInFluidType()
```

**Returns:** `boolean`

### getEyeInFluidType

```java
FluidType getEyeInFluidType()
```

**Returns:** `FluidType`

### isEyeInFluidType

```java
default boolean isEyeInFluidType(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `boolean`

### canStartSwimming

```java
default boolean canStartSwimming()
```

**Returns:** `boolean`

### getFluidMotionScale

```java
default double getFluidMotionScale(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `double`

### isPushedByFluid

```java
default boolean isPushedByFluid(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `boolean`

### canSwimInFluidType

```java
default boolean canSwimInFluidType(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `boolean`

### canFluidExtinguish

```java
default boolean canFluidExtinguish(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `boolean`

### getFluidFallDistanceModifier

```java
default float getFluidFallDistanceModifier(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `float`

### canHydrateInFluidType

```java
default boolean canHydrateInFluidType(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `boolean`

### getSoundFromFluidType

```java
default SoundEvent getSoundFromFluidType(FluidType type, SoundAction action)
```

**Parameters:**

- `type` (`FluidType`)
- `action` (`SoundAction`)

**Returns:** `SoundEvent`

### hasCustomOutlineRendering

```java
default boolean hasCustomOutlineRendering(Player player)
```

**Parameters:**

- `player` (`Player`)

**Returns:** `boolean`

### sendPairingData

```java
default void sendPairingData(ServerPlayer serverPlayer, Consumer<CustomPacketPayload> bundleBuilder)
```

**Parameters:**

- `serverPlayer` (`ServerPlayer`)
- `bundleBuilder` (`Consumer<CustomPacketPayload>`)

### copyAttachmentsFrom

```java
default void copyAttachmentsFrom(Entity other, boolean isDeath)
```

**Parameters:**

- `other` (`Entity`)
- `isDeath` (`boolean`)
