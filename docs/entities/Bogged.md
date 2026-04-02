# Bogged

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `AbstractSkeleton`
**Implements:** `Shearable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SHEARED_TAG_NAME` | `String` |  |

## Methods

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### Bogged

```java
public Bogged(EntityType<? extends Bogged> p_326920_, Level p_326946_)
```

**Parameters:**

- `p_326920_` (`EntityType<? extends Bogged>`)
- `p_326946_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_331269_)
```

**Parameters:**

- `p_331269_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_331631_)
```

**Parameters:**

- `p_331631_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_331225_)
```

**Parameters:**

- `p_331225_` (`CompoundTag`)

### isSheared

```java
public boolean isSheared()
```

**Returns:** `public boolean`

### setSheared

```java
public void setSheared(boolean p_330515_)
```

**Parameters:**

- `p_330515_` (`boolean`)

**Returns:** `public void`

### mobInteract

```java
protected InteractionResult mobInteract(Player p_330736_, InteractionHand p_331786_)
```

**Parameters:**

- `p_330736_` (`Player`)
- `p_331786_` (`InteractionHand`)

**Returns:** `InteractionResult`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_326909_)
```

**Parameters:**

- `p_326909_` (`DamageSource`)

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

### getArrow

```java
protected AbstractArrow getArrow(ItemStack p_326801_, float p_326846_, ItemStack p_344869_)
```

**Parameters:**

- `p_326801_` (`ItemStack`)
- `p_326846_` (`float`)
- `p_344869_` (`ItemStack`)

**Returns:** `AbstractArrow`

### getHardAttackInterval

```java
protected int getHardAttackInterval()
```

**Returns:** `int`

### getAttackInterval

```java
protected int getAttackInterval()
```

**Returns:** `int`

### shear

```java
public void shear(SoundSource p_331493_)
```

**Parameters:**

- `p_331493_` (`SoundSource`)

### spawnShearedMushrooms

```java
private void spawnShearedMushrooms()
```

**Returns:** `private void`

### readyForShearing

```java
public boolean readyForShearing()
```

**Returns:** `boolean`
