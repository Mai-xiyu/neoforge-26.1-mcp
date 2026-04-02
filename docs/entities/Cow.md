# Cow

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Animal`

## Methods

### Cow

```java
public Cow(EntityType<? extends Cow> p_28285_, Level p_28286_)
```

**Parameters:**

- `p_28285_` (`EntityType<? extends Cow>`)
- `p_28286_` (`Level`)

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

### isFood

```java
public boolean isFood(ItemStack p_335696_)
```

**Parameters:**

- `p_335696_` (`ItemStack`)

**Returns:** `boolean`

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
protected SoundEvent getHurtSound(DamageSource p_28306_)
```

**Parameters:**

- `p_28306_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_28301_, BlockState p_28302_)
```

**Parameters:**

- `p_28301_` (`BlockPos`)
- `p_28302_` (`BlockState`)

### getSoundVolume

```java
protected float getSoundVolume()
```

**Returns:** `float`

### mobInteract

```java
public InteractionResult mobInteract(Player p_28298_, InteractionHand p_28299_)
```

**Parameters:**

- `p_28298_` (`Player`)
- `p_28299_` (`InteractionHand`)

**Returns:** `InteractionResult`

### getBreedOffspring

```java
public Cow getBreedOffspring(ServerLevel p_148890_, AgeableMob p_148891_)
```

**Parameters:**

- `p_148890_` (`ServerLevel`)
- `p_148891_` (`AgeableMob`)

**Returns:** `Cow`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316185_)
```

**Parameters:**

- `p_316185_` (`Pose`)

**Returns:** `EntityDimensions`
