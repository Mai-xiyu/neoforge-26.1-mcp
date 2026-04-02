# Pig

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Animal`
**Implements:** `ItemSteerable`, `Saddleable`

## Methods

### Pig

```java
public Pig(EntityType<? extends Pig> p_29462_, Level p_29463_)
```

**Parameters:**

- `p_29462_` (`EntityType<? extends Pig>`)
- `p_29463_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### registerGoals

```java
protected void registerGoals()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### getControllingPassenger

```java
public LivingEntity getControllingPassenger()
```

**Returns:** `LivingEntity`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_29480_)
```

**Parameters:**

- `p_29480_` (`EntityDataAccessor<?>`)

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326097_)
```

**Parameters:**

- `p_326097_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_29495_)
```

**Parameters:**

- `p_29495_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_29478_)
```

**Parameters:**

- `p_29478_` (`CompoundTag`)

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_29502_)
```

**Parameters:**

- `p_29502_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_29492_, BlockState p_29493_)
```

**Parameters:**

- `p_29492_` (`BlockPos`)
- `p_29493_` (`BlockState`)

### mobInteract

```java
public InteractionResult mobInteract(Player p_29489_, InteractionHand p_29490_)
```

**Parameters:**

- `p_29489_` (`Player`)
- `p_29490_` (`InteractionHand`)

**Returns:** `InteractionResult`

### isSaddleable

```java
public boolean isSaddleable()
```

**Returns:** `boolean`

### dropEquipment

```java
protected void dropEquipment()
```

### isSaddled

```java
public boolean isSaddled()
```

**Returns:** `boolean`

### equipSaddle

```java
public void equipSaddle(ItemStack p_352196_, SoundSource p_29476_)
```

**Parameters:**

- `p_352196_` (`ItemStack`)
- `p_29476_` (`SoundSource`)

### getDismountLocationForPassenger

```java
public Vec3 getDismountLocationForPassenger(LivingEntity p_29487_)
```

**Parameters:**

- `p_29487_` (`LivingEntity`)

**Returns:** `Vec3`

### thunderHit

```java
public void thunderHit(ServerLevel p_29473_, LightningBolt p_29474_)
```

**Parameters:**

- `p_29473_` (`ServerLevel`)
- `p_29474_` (`LightningBolt`)

### tickRidden

```java
protected void tickRidden(Player p_278330_, Vec3 p_278267_)
```

**Parameters:**

- `p_278330_` (`Player`)
- `p_278267_` (`Vec3`)

### getRiddenInput

```java
protected Vec3 getRiddenInput(Player p_278309_, Vec3 p_275479_)
```

**Parameters:**

- `p_278309_` (`Player`)
- `p_275479_` (`Vec3`)

**Returns:** `Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### getRiddenSpeed

```java
protected float getRiddenSpeed(Player p_278258_)
```

**Parameters:**

- `p_278258_` (`Player`)

**Returns:** `float`

### boost

```java
public boolean boost()
```

**Returns:** `boolean`

### getBreedOffspring

```java
public Pig getBreedOffspring(ServerLevel p_149001_, AgeableMob p_149002_)
```

**Parameters:**

- `p_149001_` (`ServerLevel`)
- `p_149002_` (`AgeableMob`)

**Returns:** `Pig`

### isFood

```java
public boolean isFood(ItemStack p_29508_)
```

**Parameters:**

- `p_29508_` (`ItemStack`)

**Returns:** `boolean`

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`
