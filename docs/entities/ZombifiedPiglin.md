# ZombifiedPiglin

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Zombie`
**Implements:** `NeutralMob`

## Methods

### ZombifiedPiglin

```java
public ZombifiedPiglin(EntityType<? extends ZombifiedPiglin> p_34427_, Level p_34428_)
```

**Parameters:**

- `p_34427_` (`EntityType<? extends ZombifiedPiglin>`)
- `p_34428_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setPersistentAngerTarget

```java
public void setPersistentAngerTarget(UUID p_34444_)
```

**Parameters:**

- `p_34444_` (`UUID`)

### addBehaviourGoals

```java
protected void addBehaviourGoals()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316887_)
```

**Parameters:**

- `p_316887_` (`Pose`)

**Returns:** `EntityDimensions`

### convertsInWater

```java
protected boolean convertsInWater()
```

**Returns:** `boolean`

### customServerAiStep

```java
protected void customServerAiStep()
```

### maybePlayFirstAngerSound

```java
private void maybePlayFirstAngerSound()
```

**Returns:** `private void`

### maybeAlertOthers

```java
private void maybeAlertOthers()
```

**Returns:** `private void`

### alertOthers

```java
private void alertOthers()
```

**Returns:** `private void`

### playAngerSound

```java
private void playAngerSound()
```

**Returns:** `private void`

### setTarget

```java
public void setTarget(LivingEntity p_34478_)
```

**Parameters:**

- `p_34478_` (`LivingEntity`)

### startPersistentAngerTimer

```java
public void startPersistentAngerTimer()
```

### checkZombifiedPiglinSpawnRules

```java
public static boolean checkZombifiedPiglinSpawnRules(EntityType<ZombifiedPiglin> p_219174_, LevelAccessor p_219175_, MobSpawnType p_219176_, BlockPos p_219177_, RandomSource p_219178_)
```

**Parameters:**

- `p_219174_` (`EntityType<ZombifiedPiglin>`)
- `p_219175_` (`LevelAccessor`)
- `p_219176_` (`MobSpawnType`)
- `p_219177_` (`BlockPos`)
- `p_219178_` (`RandomSource`)

**Returns:** `public static boolean`

### checkSpawnObstruction

```java
public boolean checkSpawnObstruction(LevelReader p_34442_)
```

**Parameters:**

- `p_34442_` (`LevelReader`)

**Returns:** `boolean`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_34458_)
```

**Parameters:**

- `p_34458_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_34446_)
```

**Parameters:**

- `p_34446_` (`CompoundTag`)

### setRemainingPersistentAngerTime

```java
public void setRemainingPersistentAngerTime(int p_34448_)
```

**Parameters:**

- `p_34448_` (`int`)

### getRemainingPersistentAngerTime

```java
public int getRemainingPersistentAngerTime()
```

**Returns:** `int`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_34466_)
```

**Parameters:**

- `p_34466_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### populateDefaultEquipmentSlots

```java
protected void populateDefaultEquipmentSlots(RandomSource p_219171_, DifficultyInstance p_219172_)
```

**Parameters:**

- `p_219171_` (`RandomSource`)
- `p_219172_` (`DifficultyInstance`)

### getSkull

```java
protected ItemStack getSkull()
```

**Returns:** `ItemStack`

### randomizeReinforcementsChance

```java
protected void randomizeReinforcementsChance()
```

### getPersistentAngerTarget

```java
public UUID getPersistentAngerTarget()
```

**Returns:** `UUID`

### isPreventingPlayerRest

```java
public boolean isPreventingPlayerRest(Player p_34475_)
```

**Parameters:**

- `p_34475_` (`Player`)

**Returns:** `boolean`

### wantsToPickUp

```java
public boolean wantsToPickUp(ItemStack p_182402_)
```

**Parameters:**

- `p_182402_` (`ItemStack`)

**Returns:** `boolean`
