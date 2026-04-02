# Skeleton

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `AbstractSkeleton`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CONVERSION_TAG` | `String` |  |

## Methods

### Skeleton

```java
public Skeleton(EntityType<? extends Skeleton> p_33570_, Level p_33571_)
```

**Parameters:**

- `p_33570_` (`EntityType<? extends Skeleton>`)
- `p_33571_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326378_)
```

**Parameters:**

- `p_326378_` (`SynchedEntityData.Builder`)

### isFreezeConverting

```java
public boolean isFreezeConverting()
```

**Returns:** `public boolean`

### setFreezeConverting

```java
public void setFreezeConverting(boolean p_149843_)
```

**Parameters:**

- `p_149843_` (`boolean`)

**Returns:** `public void`

### isShaking

```java
public boolean isShaking()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_149836_)
```

**Parameters:**

- `p_149836_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_149833_)
```

**Parameters:**

- `p_149833_` (`CompoundTag`)

### startFreezeConversion

```java
private void startFreezeConversion(int p_149831_)
```

**Parameters:**

- `p_149831_` (`int`)

**Returns:** `private void`

### doFreezeConversion

```java
protected void doFreezeConversion()
```

**Returns:** `protected void`

### canFreeze

```java
public boolean canFreeze()
```

**Returns:** `boolean`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_33579_)
```

**Parameters:**

- `p_33579_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getStepSound

```java
protected SoundEvent getStepSound()
```

**Returns:** `SoundEvent`

### dropCustomDeathLoot

```java
protected void dropCustomDeathLoot(ServerLevel p_348477_, DamageSource p_33574_, boolean p_33576_)
```

**Parameters:**

- `p_348477_` (`ServerLevel`)
- `p_33574_` (`DamageSource`)
- `p_33576_` (`boolean`)
