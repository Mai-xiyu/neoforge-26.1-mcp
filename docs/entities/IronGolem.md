# IronGolem

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `AbstractGolem`
**Implements:** `NeutralMob`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DATA_FLAGS_ID` | `EntityDataAccessor<Byte>` |  |

## Methods

### IronGolem

```java
public IronGolem(EntityType<? extends IronGolem> p_28834_, Level p_28835_)
```

**Parameters:**

- `p_28834_` (`EntityType<? extends IronGolem>`)
- `p_28835_` (`Level`)

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

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326192_)
```

**Parameters:**

- `p_326192_` (`SynchedEntityData.Builder`)

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### decreaseAirSupply

```java
protected int decreaseAirSupply(int p_28882_)
```

**Parameters:**

- `p_28882_` (`int`)

**Returns:** `int`

### doPush

```java
protected void doPush(Entity p_28839_)
```

**Parameters:**

- `p_28839_` (`Entity`)

### aiStep

```java
public void aiStep()
```

### canSpawnSprintParticle

```java
public boolean canSpawnSprintParticle()
```

**Returns:** `boolean`

### canAttackType

```java
public boolean canAttackType(EntityType<?> p_28851_)
```

**Parameters:**

- `p_28851_` (`EntityType<?>`)

**Returns:** `boolean`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_28867_)
```

**Parameters:**

- `p_28867_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_28857_)
```

**Parameters:**

- `p_28857_` (`CompoundTag`)

### startPersistentAngerTimer

```java
public void startPersistentAngerTimer()
```

### setRemainingPersistentAngerTime

```java
public void setRemainingPersistentAngerTime(int p_28859_)
```

**Parameters:**

- `p_28859_` (`int`)

### getRemainingPersistentAngerTime

```java
public int getRemainingPersistentAngerTime()
```

**Returns:** `int`

### setPersistentAngerTarget

```java
public void setPersistentAngerTarget(UUID p_28855_)
```

**Parameters:**

- `p_28855_` (`UUID`)

### getPersistentAngerTarget

```java
public UUID getPersistentAngerTarget()
```

**Returns:** `UUID`

### getAttackDamage

```java
private float getAttackDamage()
```

**Returns:** `private float`

### doHurtTarget

```java
public boolean doHurtTarget(Entity p_28837_)
```

**Parameters:**

- `p_28837_` (`Entity`)

**Returns:** `boolean`

### hurt

```java
public boolean hurt(DamageSource p_28848_, float p_28849_)
```

**Parameters:**

- `p_28848_` (`DamageSource`)
- `p_28849_` (`float`)

**Returns:** `boolean`

### getCrackiness

```java
public Crackiness.Level getCrackiness()
```

**Returns:** `public Crackiness.Level`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_28844_)
```

**Parameters:**

- `p_28844_` (`byte`)

### getAttackAnimationTick

```java
public int getAttackAnimationTick()
```

**Returns:** `public int`

### offerFlower

```java
public void offerFlower(boolean p_28886_)
```

**Parameters:**

- `p_28886_` (`boolean`)

**Returns:** `public void`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_28872_)
```

**Parameters:**

- `p_28872_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### mobInteract

```java
protected InteractionResult mobInteract(Player p_28861_, InteractionHand p_28862_)
```

**Parameters:**

- `p_28861_` (`Player`)
- `p_28862_` (`InteractionHand`)

**Returns:** `InteractionResult`

### playStepSound

```java
protected void playStepSound(BlockPos p_28864_, BlockState p_28865_)
```

**Parameters:**

- `p_28864_` (`BlockPos`)
- `p_28865_` (`BlockState`)

### getOfferFlowerTick

```java
public int getOfferFlowerTick()
```

**Returns:** `public int`

### isPlayerCreated

```java
public boolean isPlayerCreated()
```

**Returns:** `public boolean`

### setPlayerCreated

```java
public void setPlayerCreated(boolean p_28888_)
```

**Parameters:**

- `p_28888_` (`boolean`)

**Returns:** `public void`

### die

```java
public void die(DamageSource p_28846_)
```

**Parameters:**

- `p_28846_` (`DamageSource`)

### checkSpawnObstruction

```java
public boolean checkSpawnObstruction(LevelReader p_28853_)
```

**Parameters:**

- `p_28853_` (`LevelReader`)

**Returns:** `boolean`

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`
