# GlowSquid

**Package:** `net.minecraft.world.entity`
**Type:** class
**Extends:** `Squid`

## Methods

### GlowSquid

```java
public GlowSquid(EntityType<? extends GlowSquid> p_147111_, Level p_147112_)
```

**Parameters:**

- `p_147111_` (`EntityType<? extends GlowSquid>`)
- `p_147112_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getInkParticle

```java
protected ParticleOptions getInkParticle()
```

**Returns:** `ParticleOptions`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326482_)
```

**Parameters:**

- `p_326482_` (`SynchedEntityData.Builder`)

### getSquirtSound

```java
protected SoundEvent getSquirtSound()
```

**Returns:** `SoundEvent`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_147124_)
```

**Parameters:**

- `p_147124_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_147122_)
```

**Parameters:**

- `p_147122_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_147117_)
```

**Parameters:**

- `p_147117_` (`CompoundTag`)

### aiStep

```java
public void aiStep()
```

### hurt

```java
public boolean hurt(DamageSource p_147114_, float p_147115_)
```

**Parameters:**

- `p_147114_` (`DamageSource`)
- `p_147115_` (`float`)

**Returns:** `boolean`

### setDarkTicks

```java
private void setDarkTicks(int p_147120_)
```

**Parameters:**

- `p_147120_` (`int`)

**Returns:** `private void`

### getDarkTicksRemaining

```java
public int getDarkTicksRemaining()
```

**Returns:** `public int`

### checkGlowSquidSpawnRules

```java
public static boolean checkGlowSquidSpawnRules(EntityType<? extends LivingEntity> p_217018_, ServerLevelAccessor p_217019_, MobSpawnType p_217020_, BlockPos p_217021_, RandomSource p_217022_)
```

**Parameters:**

- `p_217018_` (`EntityType<? extends LivingEntity>`)
- `p_217019_` (`ServerLevelAccessor`)
- `p_217020_` (`MobSpawnType`)
- `p_217021_` (`BlockPos`)
- `p_217022_` (`RandomSource`)

**Returns:** `public static boolean`
