# WitherSkeleton

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `AbstractSkeleton`

## Methods

### WitherSkeleton

```java
public WitherSkeleton(EntityType<? extends WitherSkeleton> p_34166_, Level p_34167_)
```

**Parameters:**

- `p_34166_` (`EntityType<? extends WitherSkeleton>`)
- `p_34167_` (`Level`)

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

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_34195_)
```

**Parameters:**

- `p_34195_` (`DamageSource`)

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
protected void dropCustomDeathLoot(ServerLevel p_348522_, DamageSource p_34174_, boolean p_34176_)
```

**Parameters:**

- `p_348522_` (`ServerLevel`)
- `p_34174_` (`DamageSource`)
- `p_34176_` (`boolean`)

### populateDefaultEquipmentSlots

```java
protected void populateDefaultEquipmentSlots(RandomSource p_219154_, DifficultyInstance p_219155_)
```

**Parameters:**

- `p_219154_` (`RandomSource`)
- `p_219155_` (`DifficultyInstance`)

### populateDefaultEquipmentEnchantments

```java
protected void populateDefaultEquipmentEnchantments(ServerLevelAccessor p_348580_, RandomSource p_219157_, DifficultyInstance p_219158_)
```

**Parameters:**

- `p_348580_` (`ServerLevelAccessor`)
- `p_219157_` (`RandomSource`)
- `p_219158_` (`DifficultyInstance`)

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_34178_, DifficultyInstance p_34179_, MobSpawnType p_34180_, SpawnGroupData p_34181_)
```

**Parameters:**

- `p_34178_` (`ServerLevelAccessor`)
- `p_34179_` (`DifficultyInstance`)
- `p_34180_` (`MobSpawnType`)
- `p_34181_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### doHurtTarget

```java
public boolean doHurtTarget(Entity p_34169_)
```

**Parameters:**

- `p_34169_` (`Entity`)

**Returns:** `boolean`

### getArrow

```java
protected AbstractArrow getArrow(ItemStack p_34189_, float p_34190_, ItemStack p_344843_)
```

**Parameters:**

- `p_34189_` (`ItemStack`)
- `p_34190_` (`float`)
- `p_344843_` (`ItemStack`)

**Returns:** `AbstractArrow`

### canBeAffected

```java
public boolean canBeAffected(MobEffectInstance p_34192_)
```

**Parameters:**

- `p_34192_` (`MobEffectInstance`)

**Returns:** `boolean`
