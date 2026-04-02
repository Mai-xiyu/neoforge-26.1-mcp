# AreaEffectCloud

**Package:** `net.minecraft.world.entity`
**Type:** class
**Extends:** `Entity`
**Implements:** `TraceableEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_WIDTH` | `float` |  |
| `HEIGHT` | `float` |  |

## Methods

### AreaEffectCloud

```java
public AreaEffectCloud(EntityType<? extends AreaEffectCloud> p_19704_, Level p_19705_)
```

**Parameters:**

- `p_19704_` (`EntityType<? extends AreaEffectCloud>`)
- `p_19705_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### AreaEffectCloud

```java
public AreaEffectCloud(Level p_19707_, double p_19708_, double p_19709_, double p_19710_)
```

**Parameters:**

- `p_19707_` (`Level`)
- `p_19708_` (`double`)
- `p_19709_` (`double`)
- `p_19710_` (`double`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326332_)
```

**Parameters:**

- `p_326332_` (`SynchedEntityData.Builder`)

### setRadius

```java
public void setRadius(float p_19713_)
```

**Parameters:**

- `p_19713_` (`float`)

**Returns:** `public void`

### refreshDimensions

```java
public void refreshDimensions()
```

### getRadius

```java
public float getRadius()
```

**Returns:** `public float`

### setPotionContents

```java
public void setPotionContents(PotionContents p_330869_)
```

**Parameters:**

- `p_330869_` (`PotionContents`)

**Returns:** `public void`

### updateColor

```java
private void updateColor()
```

**Returns:** `private void`

### addEffect

```java
public void addEffect(MobEffectInstance p_19717_)
```

**Parameters:**

- `p_19717_` (`MobEffectInstance`)

**Returns:** `public void`

### getParticle

```java
public ParticleOptions getParticle()
```

**Returns:** `public ParticleOptions`

### setParticle

```java
public void setParticle(ParticleOptions p_19725_)
```

**Parameters:**

- `p_19725_` (`ParticleOptions`)

**Returns:** `public void`

### setWaiting

```java
protected void setWaiting(boolean p_19731_)
```

**Parameters:**

- `p_19731_` (`boolean`)

**Returns:** `protected void`

### isWaiting

```java
public boolean isWaiting()
```

**Returns:** `public boolean`

### getDuration

```java
public int getDuration()
```

**Returns:** `public int`

### setDuration

```java
public void setDuration(int p_19735_)
```

**Parameters:**

- `p_19735_` (`int`)

**Returns:** `public void`

### tick

```java
public void tick()
```

### getRadiusOnUse

```java
public float getRadiusOnUse()
```

**Returns:** `public float`

### setRadiusOnUse

```java
public void setRadiusOnUse(float p_19733_)
```

**Parameters:**

- `p_19733_` (`float`)

**Returns:** `public void`

### getRadiusPerTick

```java
public float getRadiusPerTick()
```

**Returns:** `public float`

### setRadiusPerTick

```java
public void setRadiusPerTick(float p_19739_)
```

**Parameters:**

- `p_19739_` (`float`)

**Returns:** `public void`

### getDurationOnUse

```java
public int getDurationOnUse()
```

**Returns:** `public int`

### setDurationOnUse

```java
public void setDurationOnUse(int p_146786_)
```

**Parameters:**

- `p_146786_` (`int`)

**Returns:** `public void`

### getWaitTime

```java
public int getWaitTime()
```

**Returns:** `public int`

### setWaitTime

```java
public void setWaitTime(int p_19741_)
```

**Parameters:**

- `p_19741_` (`int`)

**Returns:** `public void`

### setOwner

```java
public void setOwner(LivingEntity p_19719_)
```

**Parameters:**

- `p_19719_` (`LivingEntity`)

**Returns:** `public void`

### getOwner

```java
public LivingEntity getOwner()
```

**Returns:** `LivingEntity`

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_19727_)
```

**Parameters:**

- `p_19727_` (`CompoundTag`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_19737_)
```

**Parameters:**

- `p_19737_` (`CompoundTag`)

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_19729_)
```

**Parameters:**

- `p_19729_` (`EntityDataAccessor<?>`)

### getPistonPushReaction

```java
public PushReaction getPistonPushReaction()
```

**Returns:** `PushReaction`

### getDimensions

```java
public EntityDimensions getDimensions(Pose p_19721_)
```

**Parameters:**

- `p_19721_` (`Pose`)

**Returns:** `EntityDimensions`
