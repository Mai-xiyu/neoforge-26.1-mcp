# EnderMan

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Monster`
**Implements:** `NeutralMob`

## Methods

### EnderMan

```java
public EnderMan(EntityType<? extends EnderMan> p_32485_, Level p_32486_)
```

**Parameters:**

- `p_32485_` (`EntityType<? extends EnderMan>`)
- `p_32486_` (`Level`)

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

### setTarget

```java
public void setTarget(LivingEntity p_32537_)
```

**Parameters:**

- `p_32537_` (`LivingEntity`)

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326272_)
```

**Parameters:**

- `p_326272_` (`SynchedEntityData.Builder`)

### startPersistentAngerTimer

```java
public void startPersistentAngerTimer()
```

### setRemainingPersistentAngerTime

```java
public void setRemainingPersistentAngerTime(int p_32515_)
```

**Parameters:**

- `p_32515_` (`int`)

### getRemainingPersistentAngerTime

```java
public int getRemainingPersistentAngerTime()
```

**Returns:** `int`

### setPersistentAngerTarget

```java
public void setPersistentAngerTarget(UUID p_32509_)
```

**Parameters:**

- `p_32509_` (`UUID`)

### getPersistentAngerTarget

```java
public UUID getPersistentAngerTarget()
```

**Returns:** `UUID`

### playStareSound

```java
public void playStareSound()
```

**Returns:** `public void`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_32513_)
```

**Parameters:**

- `p_32513_` (`EntityDataAccessor<?>`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_32520_)
```

**Parameters:**

- `p_32520_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_32511_)
```

**Parameters:**

- `p_32511_` (`CompoundTag`)

### isLookingAtMe

```java
boolean isLookingAtMe(Player p_32535_)
```

**Parameters:**

- `p_32535_` (`Player`)

**Returns:** `boolean`

### aiStep

```java
public void aiStep()
```

### isSensitiveToWater

```java
public boolean isSensitiveToWater()
```

**Returns:** `boolean`

### customServerAiStep

```java
protected void customServerAiStep()
```

### teleport

```java
protected boolean teleport()
```

**Returns:** `protected boolean`

### teleportTowards

```java
boolean teleportTowards(Entity p_32501_)
```

**Parameters:**

- `p_32501_` (`Entity`)

**Returns:** `boolean`

### teleport

```java
private boolean teleport(double p_32544_, double p_32545_, double p_32546_)
```

**Parameters:**

- `p_32544_` (`double`)
- `p_32545_` (`double`)
- `p_32546_` (`double`)

**Returns:** `private boolean`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_32527_)
```

**Parameters:**

- `p_32527_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### dropCustomDeathLoot

```java
protected void dropCustomDeathLoot(ServerLevel p_348556_, DamageSource p_32497_, boolean p_32499_)
```

**Parameters:**

- `p_348556_` (`ServerLevel`)
- `p_32497_` (`DamageSource`)
- `p_32499_` (`boolean`)

### setCarriedBlock

```java
public void setCarriedBlock(BlockState p_32522_)
```

**Parameters:**

- `p_32522_` (`BlockState`)

**Returns:** `public void`

### getCarriedBlock

```java
public BlockState getCarriedBlock()
```

**Returns:** `BlockState`

### hurt

```java
public boolean hurt(DamageSource p_32494_, float p_32495_)
```

**Parameters:**

- `p_32494_` (`DamageSource`)
- `p_32495_` (`float`)

**Returns:** `boolean`

### hurtWithCleanWater

```java
private boolean hurtWithCleanWater(DamageSource p_186273_, ThrownPotion p_186274_, float p_186275_)
```

**Parameters:**

- `p_186273_` (`DamageSource`)
- `p_186274_` (`ThrownPotion`)
- `p_186275_` (`float`)

**Returns:** `private boolean`

### isCreepy

```java
public boolean isCreepy()
```

**Returns:** `public boolean`

### hasBeenStaredAt

```java
public boolean hasBeenStaredAt()
```

**Returns:** `public boolean`

### setBeingStaredAt

```java
public void setBeingStaredAt()
```

**Returns:** `public void`

### requiresCustomPersistence

```java
public boolean requiresCustomPersistence()
```

**Returns:** `boolean`

### EndermanFreezeWhenLookedAt

```java
public EndermanFreezeWhenLookedAt(EnderMan p_32550_)
```

**Parameters:**

- `p_32550_` (`EnderMan`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### tick

```java
public void tick()
```

### EndermanLeaveBlockGoal

```java
public EndermanLeaveBlockGoal(EnderMan p_32556_)
```

**Parameters:**

- `p_32556_` (`EnderMan`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### canPlaceBlock

```java
private boolean canPlaceBlock(Level p_32559_, BlockPos p_32560_, BlockState p_32561_, BlockState p_32562_, BlockState p_32563_, BlockPos p_32564_)
```

**Parameters:**

- `p_32559_` (`Level`)
- `p_32560_` (`BlockPos`)
- `p_32561_` (`BlockState`)
- `p_32562_` (`BlockState`)
- `p_32563_` (`BlockState`)
- `p_32564_` (`BlockPos`)

**Returns:** `private boolean`

### EndermanLookForPlayerGoal

```java
public EndermanLookForPlayerGoal(EnderMan p_32573_, Predicate<LivingEntity> p_32574_)
```

**Parameters:**

- `p_32573_` (`EnderMan`)
- `p_32574_` (`Predicate<LivingEntity>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### EndermanTakeBlockGoal

```java
public EndermanTakeBlockGoal(EnderMan p_32585_)
```

**Parameters:**

- `p_32585_` (`EnderMan`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```
