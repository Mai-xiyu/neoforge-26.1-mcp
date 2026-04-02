# ZombieHorse

**Package:** `net.minecraft.world.entity.animal.horse`
**Type:** class
**Extends:** `AbstractHorse`

## Methods

### ZombieHorse

```java
public ZombieHorse(EntityType<? extends ZombieHorse> p_30994_, Level p_30995_)
```

**Parameters:**

- `p_30994_` (`EntityType<? extends ZombieHorse>`)
- `p_30995_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### checkZombieHorseSpawnRules

```java
public static boolean checkZombieHorseSpawnRules(EntityType<? extends Animal> p_312450_, LevelAccessor p_312340_, MobSpawnType p_312031_, BlockPos p_311838_, RandomSource p_312514_)
```

**Parameters:**

- `p_312450_` (`EntityType<? extends Animal>`)
- `p_312340_` (`LevelAccessor`)
- `p_312031_` (`MobSpawnType`)
- `p_311838_` (`BlockPos`)
- `p_312514_` (`RandomSource`)

**Returns:** `public static boolean`

### randomizeAttributes

```java
protected void randomizeAttributes(RandomSource p_218823_)
```

**Parameters:**

- `p_218823_` (`RandomSource`)

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
protected SoundEvent getHurtSound(DamageSource p_31006_)
```

**Parameters:**

- `p_31006_` (`DamageSource`)

**Returns:** `SoundEvent`

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_149561_, AgeableMob p_149562_)
```

**Parameters:**

- `p_149561_` (`ServerLevel`)
- `p_149562_` (`AgeableMob`)

**Returns:** `AgeableMob`

### mobInteract

```java
public InteractionResult mobInteract(Player p_31001_, InteractionHand p_31002_)
```

**Parameters:**

- `p_31001_` (`Player`)
- `p_31002_` (`InteractionHand`)

**Returns:** `InteractionResult`

### addBehaviourGoals

```java
protected void addBehaviourGoals()
```

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316239_)
```

**Parameters:**

- `p_316239_` (`Pose`)

**Returns:** `EntityDimensions`
