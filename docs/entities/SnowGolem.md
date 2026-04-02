# SnowGolem

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `AbstractGolem`
**Implements:** `Shearable`, `RangedAttackMob`

## Methods

### SnowGolem

```java
public SnowGolem(EntityType<? extends SnowGolem> p_29902_, Level p_29903_)
```

**Parameters:**

- `p_29902_` (`EntityType<? extends SnowGolem>`)
- `p_29903_` (`Level`)

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
protected void defineSynchedData(SynchedEntityData.Builder p_325977_)
```

**Parameters:**

- `p_325977_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_29923_)
```

**Parameters:**

- `p_29923_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_29915_)
```

**Parameters:**

- `p_29915_` (`CompoundTag`)

### isSensitiveToWater

```java
public boolean isSensitiveToWater()
```

**Returns:** `boolean`

### aiStep

```java
public void aiStep()
```

### performRangedAttack

```java
public void performRangedAttack(LivingEntity p_29912_, float p_29913_)
```

**Parameters:**

- `p_29912_` (`LivingEntity`)
- `p_29913_` (`float`)

### mobInteract

```java
protected InteractionResult mobInteract(Player p_29920_, InteractionHand p_29921_)
```

**Parameters:**

- `p_29920_` (`Player`)
- `p_29921_` (`InteractionHand`)

**Returns:** `InteractionResult`

### shear

```java
public void shear(SoundSource p_29907_)
```

**Parameters:**

- `p_29907_` (`SoundSource`)

### readyForShearing

```java
public boolean readyForShearing()
```

**Returns:** `boolean`

### hasPumpkin

```java
public boolean hasPumpkin()
```

**Returns:** `public boolean`

### setPumpkin

```java
public void setPumpkin(boolean p_29937_)
```

**Parameters:**

- `p_29937_` (`boolean`)

**Returns:** `public void`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_29929_)
```

**Parameters:**

- `p_29929_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`
