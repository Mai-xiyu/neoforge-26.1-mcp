# MushroomCow

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Cow`
**Implements:** `Shearable`, `VariantHolder<MushroomCow.MushroomType>`

## Methods

### MushroomCow

```java
public MushroomCow(EntityType<? extends MushroomCow> p_28914_, Level p_28915_)
```

**Parameters:**

- `p_28914_` (`EntityType<? extends MushroomCow>`)
- `p_28915_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getWalkTargetValue

```java
public float getWalkTargetValue(BlockPos p_28933_, LevelReader p_28934_)
```

**Parameters:**

- `p_28933_` (`BlockPos`)
- `p_28934_` (`LevelReader`)

**Returns:** `float`

### checkMushroomSpawnRules

```java
public static boolean checkMushroomSpawnRules(EntityType<MushroomCow> p_218201_, LevelAccessor p_218202_, MobSpawnType p_218203_, BlockPos p_218204_, RandomSource p_218205_)
```

**Parameters:**

- `p_218201_` (`EntityType<MushroomCow>`)
- `p_218202_` (`LevelAccessor`)
- `p_218203_` (`MobSpawnType`)
- `p_218204_` (`BlockPos`)
- `p_218205_` (`RandomSource`)

**Returns:** `public static boolean`

### thunderHit

```java
public void thunderHit(ServerLevel p_28921_, LightningBolt p_28922_)
```

**Parameters:**

- `p_28921_` (`ServerLevel`)
- `p_28922_` (`LightningBolt`)

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326279_)
```

**Parameters:**

- `p_326279_` (`SynchedEntityData.Builder`)

### mobInteract

```java
public InteractionResult mobInteract(Player p_28941_, InteractionHand p_28942_)
```

**Parameters:**

- `p_28941_` (`Player`)
- `p_28942_` (`InteractionHand`)

**Returns:** `InteractionResult`

### shear

```java
public void shear(SoundSource p_28924_)
```

**Parameters:**

- `p_28924_` (`SoundSource`)

### readyForShearing

```java
public boolean readyForShearing()
```

**Returns:** `boolean`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_28944_)
```

**Parameters:**

- `p_28944_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_28936_)
```

**Parameters:**

- `p_28936_` (`CompoundTag`)

### getEffectsFromItemStack

```java
private Optional<SuspiciousStewEffects> getEffectsFromItemStack(ItemStack p_298333_)
```

**Parameters:**

- `p_298333_` (`ItemStack`)

**Returns:** `private Optional<SuspiciousStewEffects>`

### setVariant

```java
public void setVariant(MushroomCow.MushroomType p_28929_)
```

**Parameters:**

- `p_28929_` (`MushroomCow.MushroomType`)

**Returns:** `public void`

### getVariant

```java
public MushroomCow.MushroomType getVariant()
```

**Returns:** `public MushroomCow.MushroomType`

### getBreedOffspring

```java
public MushroomCow getBreedOffspring(ServerLevel p_148942_, AgeableMob p_148943_)
```

**Parameters:**

- `p_148942_` (`ServerLevel`)
- `p_148943_` (`AgeableMob`)

**Returns:** `MushroomCow`

### getOffspringType

```java
private MushroomCow.MushroomType getOffspringType(MushroomCow p_28931_)
```

**Parameters:**

- `p_28931_` (`MushroomCow`)

**Returns:** `private MushroomCow.MushroomType`

### MushroomType

```java
private MushroomType(String p_28967_, BlockState p_28968_)
```

**Parameters:**

- `p_28967_` (`String`)
- `p_28968_` (`BlockState`)

**Returns:** `private`

### getBlockState

```java
public BlockState getBlockState()
```

**Returns:** `public BlockState`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### byType

```java
static MushroomCow.MushroomType byType(String p_28977_)
```

**Parameters:**

- `p_28977_` (`String`)

**Returns:** `static MushroomCow.MushroomType`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `MushroomType` | enum |  |
