# Tadpole

**Package:** `net.minecraft.world.entity.animal.frog`
**Type:** class
**Extends:** `AbstractFish`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `HITBOX_WIDTH` | `float` |  |
| `HITBOX_HEIGHT` | `float` |  |
| `SENSOR_TYPES` | `ImmutableList<SensorType<? extends Sensor<? super Tadpole>>>` |  |
| `MEMORY_TYPES` | `ImmutableList<MemoryModuleType<?>>` |  |

## Methods

### Tadpole

```java
public Tadpole(EntityType<? extends AbstractFish> p_218686_, Level p_218687_)
```

**Parameters:**

- `p_218686_` (`EntityType<? extends AbstractFish>`)
- `p_218687_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createNavigation

```java
protected PathNavigation createNavigation(Level p_218694_)
```

**Parameters:**

- `p_218694_` (`Level`)

**Returns:** `PathNavigation`

### WaterBoundPathNavigation

```java
return new WaterBoundPathNavigation()
```

**Returns:** `return new`

### brainProvider

```java
protected Brain.Provider<Tadpole> brainProvider()
```

**Returns:** `Brain.Provider<Tadpole>`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_218696_)
```

**Parameters:**

- `p_218696_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### getBrain

```java
public Brain<Tadpole> getBrain()
```

**Returns:** `Brain<Tadpole>`

### getFlopSound

```java
protected SoundEvent getFlopSound()
```

**Returns:** `SoundEvent`

### customServerAiStep

```java
protected void customServerAiStep()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### aiStep

```java
public void aiStep()
```

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_218709_)
```

**Parameters:**

- `p_218709_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_218698_)
```

**Parameters:**

- `p_218698_` (`CompoundTag`)

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_218713_)
```

**Parameters:**

- `p_218713_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### mobInteract

```java
public InteractionResult mobInteract(Player p_218703_, InteractionHand p_218704_)
```

**Parameters:**

- `p_218703_` (`Player`)
- `p_218704_` (`InteractionHand`)

**Returns:** `InteractionResult`

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### fromBucket

```java
public boolean fromBucket()
```

**Returns:** `boolean`

### setFromBucket

```java
public void setFromBucket(boolean p_218732_)
```

**Parameters:**

- `p_218732_` (`boolean`)

### saveToBucketTag

```java
public void saveToBucketTag(ItemStack p_218725_)
```

**Parameters:**

- `p_218725_` (`ItemStack`)

### loadFromBucketTag

```java
public void loadFromBucketTag(CompoundTag p_218715_)
```

**Parameters:**

- `p_218715_` (`CompoundTag`)

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

### getPickupSound

```java
public SoundEvent getPickupSound()
```

**Returns:** `SoundEvent`

### isFood

```java
private boolean isFood(ItemStack p_218727_)
```

**Parameters:**

- `p_218727_` (`ItemStack`)

**Returns:** `private boolean`

### feed

```java
private void feed(Player p_218691_, ItemStack p_218692_)
```

**Parameters:**

- `p_218691_` (`Player`)
- `p_218692_` (`ItemStack`)

**Returns:** `private void`

### usePlayerItem

```java
private void usePlayerItem(Player p_218706_, ItemStack p_218707_)
```

**Parameters:**

- `p_218706_` (`Player`)
- `p_218707_` (`ItemStack`)

**Returns:** `private void`

### getAge

```java
private int getAge()
```

**Returns:** `private int`

### ageUp

```java
private void ageUp(int p_218701_)
```

**Parameters:**

- `p_218701_` (`int`)

**Returns:** `private void`

### setAge

```java
private void setAge(int p_218711_)
```

**Parameters:**

- `p_218711_` (`int`)

**Returns:** `private void`

### ageUp

```java
private void ageUp()
```

**Returns:** `private void`

### getTicksLeftUntilAdult

```java
private int getTicksLeftUntilAdult()
```

**Returns:** `private int`

### shouldDropExperience

```java
public boolean shouldDropExperience()
```

**Returns:** `boolean`
