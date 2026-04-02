# Spider

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Monster`

## Methods

### Spider

```java
public Spider(EntityType<? extends Spider> p_33786_, Level p_33787_)
```

**Parameters:**

- `p_33786_` (`EntityType<? extends Spider>`)
- `p_33787_` (`Level`)

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

### createNavigation

```java
protected PathNavigation createNavigation(Level p_33802_)
```

**Parameters:**

- `p_33802_` (`Level`)

**Returns:** `PathNavigation`

### WallClimberNavigation

```java
return new WallClimberNavigation()
```

**Returns:** `return new`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326135_)
```

**Parameters:**

- `p_326135_` (`SynchedEntityData.Builder`)

### tick

```java
public void tick()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_33814_)
```

**Parameters:**

- `p_33814_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_33804_, BlockState p_33805_)
```

**Parameters:**

- `p_33804_` (`BlockPos`)
- `p_33805_` (`BlockState`)

### onClimbable

```java
public boolean onClimbable()
```

**Returns:** `boolean`

### makeStuckInBlock

```java
public void makeStuckInBlock(BlockState p_33796_, Vec3 p_33797_)
```

**Parameters:**

- `p_33796_` (`BlockState`)
- `p_33797_` (`Vec3`)

### canBeAffected

```java
public boolean canBeAffected(MobEffectInstance p_33809_)
```

**Parameters:**

- `p_33809_` (`MobEffectInstance`)

**Returns:** `boolean`

### isClimbing

```java
public boolean isClimbing()
```

**Returns:** `public boolean`

### setClimbing

```java
public void setClimbing(boolean p_33820_)
```

**Parameters:**

- `p_33820_` (`boolean`)

**Returns:** `public void`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_33790_, DifficultyInstance p_33791_, MobSpawnType p_33792_, SpawnGroupData p_33793_)
```

**Parameters:**

- `p_33790_` (`ServerLevelAccessor`)
- `p_33791_` (`DifficultyInstance`)
- `p_33792_` (`MobSpawnType`)
- `p_33793_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### getVehicleAttachmentPoint

```java
public Vec3 getVehicleAttachmentPoint(Entity p_316696_)
```

**Parameters:**

- `p_316696_` (`Entity`)

**Returns:** `Vec3`

### SpiderAttackGoal

```java
public SpiderAttackGoal(Spider p_33822_)
```

**Parameters:**

- `p_33822_` (`Spider`)

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

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### setRandomEffect

```java
public void setRandomEffect(RandomSource p_219119_)
```

**Parameters:**

- `p_219119_` (`RandomSource`)

**Returns:** `public void`

### SpiderTargetGoal

```java
public SpiderTargetGoal(Spider p_33832_, Class<T> p_33833_)
```

**Parameters:**

- `p_33832_` (`Spider`)
- `p_33833_` (`Class<T>`)

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

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SpiderEffectsGroupData` | class |  |
