# Evoker

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `SpellcasterIllager`

## Methods

### Evoker

```java
public Evoker(EntityType<? extends Evoker> p_32627_, Level p_32628_)
```

**Parameters:**

- `p_32627_` (`EntityType<? extends Evoker>`)
- `p_32628_` (`Level`)

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

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326426_)
```

**Parameters:**

- `p_326426_` (`SynchedEntityData.Builder`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_32642_)
```

**Parameters:**

- `p_32642_` (`CompoundTag`)

### getCelebrateSound

```java
public SoundEvent getCelebrateSound()
```

**Returns:** `SoundEvent`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_32646_)
```

**Parameters:**

- `p_32646_` (`CompoundTag`)

### customServerAiStep

```java
protected void customServerAiStep()
```

### isAlliedTo

```java
public boolean isAlliedTo(Entity p_32665_)
```

**Parameters:**

- `p_32665_` (`Entity`)

**Returns:** `boolean`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_32654_)
```

**Parameters:**

- `p_32654_` (`DamageSource`)

**Returns:** `SoundEvent`

### setWololoTarget

```java
void setWololoTarget(Sheep p_32635_)
```

**Parameters:**

- `p_32635_` (`Sheep`)

### getWololoTarget

```java
Sheep getWololoTarget()
```

**Returns:** `Sheep`

### getCastingSoundEvent

```java
protected SoundEvent getCastingSoundEvent()
```

**Returns:** `SoundEvent`

### applyRaidBuffs

```java
public void applyRaidBuffs(ServerLevel p_348515_, int p_32632_, boolean p_32633_)
```

**Parameters:**

- `p_348515_` (`ServerLevel`)
- `p_32632_` (`int`)
- `p_32633_` (`boolean`)

### getCastingTime

```java
protected int getCastingTime()
```

**Returns:** `int`

### getCastingInterval

```java
protected int getCastingInterval()
```

**Returns:** `int`

### performSpellCasting

```java
protected void performSpellCasting()
```

### createSpellEntity

```java
private void createSpellEntity(double p_32673_, double p_32674_, double p_32675_, double p_32676_, float p_32677_, int p_32678_)
```

**Parameters:**

- `p_32673_` (`double`)
- `p_32674_` (`double`)
- `p_32675_` (`double`)
- `p_32676_` (`double`)
- `p_32677_` (`float`)
- `p_32678_` (`int`)

**Returns:** `private void`

### getSpellPrepareSound

```java
protected SoundEvent getSpellPrepareSound()
```

**Returns:** `SoundEvent`

### getSpell

```java
protected SpellcasterIllager.IllagerSpell getSpell()
```

**Returns:** `SpellcasterIllager.IllagerSpell`

### tick

```java
public void tick()
```

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### getCastingTime

```java
protected int getCastingTime()
```

**Returns:** `int`

### getCastingInterval

```java
protected int getCastingInterval()
```

**Returns:** `int`

### performSpellCasting

```java
protected void performSpellCasting()
```

### getSpellPrepareSound

```java
protected SoundEvent getSpellPrepareSound()
```

**Returns:** `SoundEvent`

### getSpell

```java
protected SpellcasterIllager.IllagerSpell getSpell()
```

**Returns:** `SpellcasterIllager.IllagerSpell`

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

### stop

```java
public void stop()
```

### performSpellCasting

```java
protected void performSpellCasting()
```

### getCastWarmupTime

```java
protected int getCastWarmupTime()
```

**Returns:** `int`

### getCastingTime

```java
protected int getCastingTime()
```

**Returns:** `int`

### getCastingInterval

```java
protected int getCastingInterval()
```

**Returns:** `int`

### getSpellPrepareSound

```java
protected SoundEvent getSpellPrepareSound()
```

**Returns:** `SoundEvent`

### getSpell

```java
protected SpellcasterIllager.IllagerSpell getSpell()
```

**Returns:** `SpellcasterIllager.IllagerSpell`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EvokerWololoSpellGoal` | class |  |
