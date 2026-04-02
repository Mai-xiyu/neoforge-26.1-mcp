# Pufferfish

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `AbstractFish`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STATE_SMALL` | `int` |  |
| `STATE_MID` | `int` |  |
| `STATE_FULL` | `int` |  |

## Methods

### Pufferfish

```java
public Pufferfish(EntityType<? extends Pufferfish> p_29602_, Level p_29603_)
```

**Parameters:**

- `p_29602_` (`EntityType<? extends Pufferfish>`)
- `p_29603_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326242_)
```

**Parameters:**

- `p_326242_` (`SynchedEntityData.Builder`)

### getPuffState

```java
public int getPuffState()
```

**Returns:** `public int`

### setPuffState

```java
public void setPuffState(int p_29619_)
```

**Parameters:**

- `p_29619_` (`int`)

**Returns:** `public void`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_29615_)
```

**Parameters:**

- `p_29615_` (`EntityDataAccessor<?>`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_29624_)
```

**Parameters:**

- `p_29624_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_29613_)
```

**Parameters:**

- `p_29613_` (`CompoundTag`)

### getBucketItemStack

```java
public ItemStack getBucketItemStack()
```

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### registerGoals

```java
protected void registerGoals()
```

### tick

```java
public void tick()
```

### aiStep

```java
public void aiStep()
```

### touch

```java
private void touch(Mob p_29606_)
```

**Parameters:**

- `p_29606_` (`Mob`)

**Returns:** `private void`

### playerTouch

```java
public void playerTouch(Player p_29617_)
```

**Parameters:**

- `p_29617_` (`Player`)

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
protected SoundEvent getHurtSound(DamageSource p_29628_)
```

**Parameters:**

- `p_29628_` (`DamageSource`)

**Returns:** `SoundEvent`

### getFlopSound

```java
protected SoundEvent getFlopSound()
```

**Returns:** `SoundEvent`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316231_)
```

**Parameters:**

- `p_316231_` (`Pose`)

**Returns:** `EntityDimensions`

### getScale

```java
private static float getScale(int p_29639_)
```

**Parameters:**

- `p_29639_` (`int`)

**Returns:** `private static float`

### PufferfishPuffGoal

```java
public PufferfishPuffGoal(Pufferfish p_29642_)
```

**Parameters:**

- `p_29642_` (`Pufferfish`)

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

### stop

```java
public void stop()
```
