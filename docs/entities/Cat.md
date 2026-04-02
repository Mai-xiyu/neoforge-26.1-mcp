# Cat

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `TamableAnimal`
**Implements:** `VariantHolder<Holder<CatVariant>>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TEMPT_SPEED_MOD` | `double` |  |
| `WALK_SPEED_MOD` | `double` |  |
| `SPRINT_SPEED_MOD` | `double` |  |

## Methods

### Cat

```java
public Cat(EntityType<? extends Cat> p_28114_, Level p_28115_)
```

**Parameters:**

- `p_28114_` (`EntityType<? extends Cat>`)
- `p_28115_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getTextureId

```java
public ResourceLocation getTextureId()
```

**Returns:** `public ResourceLocation`

### registerGoals

```java
protected void registerGoals()
```

### getVariant

```java
public Holder<CatVariant> getVariant()
```

**Returns:** `public Holder<CatVariant>`

### setVariant

```java
public void setVariant(Holder<CatVariant> p_335581_)
```

**Parameters:**

- `p_335581_` (`Holder<CatVariant>`)

**Returns:** `public void`

### setLying

```java
public void setLying(boolean p_28182_)
```

**Parameters:**

- `p_28182_` (`boolean`)

**Returns:** `public void`

### isLying

```java
public boolean isLying()
```

**Returns:** `public boolean`

### setRelaxStateOne

```java
void setRelaxStateOne(boolean p_28186_)
```

**Parameters:**

- `p_28186_` (`boolean`)

### isRelaxStateOne

```java
boolean isRelaxStateOne()
```

**Returns:** `boolean`

### getCollarColor

```java
public DyeColor getCollarColor()
```

**Returns:** `public DyeColor`

### setCollarColor

```java
private void setCollarColor(DyeColor p_28132_)
```

**Parameters:**

- `p_28132_` (`DyeColor`)

**Returns:** `private void`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_325925_)
```

**Parameters:**

- `p_325925_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_28156_)
```

**Parameters:**

- `p_28156_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_28142_)
```

**Parameters:**

- `p_28142_` (`CompoundTag`)

### customServerAiStep

```java
public void customServerAiStep()
```

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getAmbientSoundInterval

```java
public int getAmbientSoundInterval()
```

**Returns:** `int`

### hiss

```java
public void hiss()
```

**Returns:** `public void`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_28160_)
```

**Parameters:**

- `p_28160_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### usePlayerItem

```java
protected void usePlayerItem(Player p_148866_, InteractionHand p_148867_, ItemStack p_148868_)
```

**Parameters:**

- `p_148866_` (`Player`)
- `p_148867_` (`InteractionHand`)
- `p_148868_` (`ItemStack`)

### tick

```java
public void tick()
```

### handleLieDown

```java
private void handleLieDown()
```

**Returns:** `private void`

### updateLieDownAmount

```java
private void updateLieDownAmount()
```

**Returns:** `private void`

### updateRelaxStateOneAmount

```java
private void updateRelaxStateOneAmount()
```

**Returns:** `private void`

### getLieDownAmount

```java
public float getLieDownAmount(float p_28184_)
```

**Parameters:**

- `p_28184_` (`float`)

**Returns:** `public float`

### getLieDownAmountTail

```java
public float getLieDownAmountTail(float p_28188_)
```

**Parameters:**

- `p_28188_` (`float`)

**Returns:** `public float`

### getRelaxStateOneAmount

```java
public float getRelaxStateOneAmount(float p_28117_)
```

**Parameters:**

- `p_28117_` (`float`)

**Returns:** `public float`

### getBreedOffspring

```java
public Cat getBreedOffspring(ServerLevel p_148870_, AgeableMob p_148871_)
```

**Parameters:**

- `p_148870_` (`ServerLevel`)
- `p_148871_` (`AgeableMob`)

**Returns:** `Cat`

### canMate

```java
public boolean canMate(Animal p_28127_)
```

**Parameters:**

- `p_28127_` (`Animal`)

**Returns:** `boolean`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_28134_, DifficultyInstance p_28135_, MobSpawnType p_28136_, SpawnGroupData p_28137_)
```

**Parameters:**

- `p_28134_` (`ServerLevelAccessor`)
- `p_28135_` (`DifficultyInstance`)
- `p_28136_` (`MobSpawnType`)
- `p_28137_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### mobInteract

```java
public InteractionResult mobInteract(Player p_28153_, InteractionHand p_28154_)
```

**Parameters:**

- `p_28153_` (`Player`)
- `p_28154_` (`InteractionHand`)

**Returns:** `InteractionResult`

### isFood

```java
public boolean isFood(ItemStack p_28177_)
```

**Parameters:**

- `p_28177_` (`ItemStack`)

**Returns:** `boolean`

### removeWhenFarAway

```java
public boolean removeWhenFarAway(double p_28174_)
```

**Parameters:**

- `p_28174_` (`double`)

**Returns:** `boolean`

### setTame

```java
public void setTame(boolean p_325911_, boolean p_326459_)
```

**Parameters:**

- `p_325911_` (`boolean`)
- `p_326459_` (`boolean`)

### reassessTameGoals

```java
protected void reassessTameGoals()
```

**Returns:** `protected void`

### tryToTame

```java
private void tryToTame(Player p_333858_)
```

**Parameters:**

- `p_333858_` (`Player`)

**Returns:** `private void`

### isSteppingCarefully

```java
public boolean isSteppingCarefully()
```

**Returns:** `boolean`

### CatAvoidEntityGoal

```java
public CatAvoidEntityGoal(Cat p_28191_, Class<T> p_28192_, float p_28193_, double p_28194_, double p_28195_)
```

**Parameters:**

- `p_28191_` (`Cat`)
- `p_28192_` (`Class<T>`)
- `p_28193_` (`float`)
- `p_28194_` (`double`)
- `p_28195_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### CatRelaxOnOwnerGoal

```java
public CatRelaxOnOwnerGoal(Cat p_28203_)
```

**Parameters:**

- `p_28203_` (`Cat`)

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### spaceIsOccupied

```java
private boolean spaceIsOccupied()
```

**Returns:** `private boolean`

### canContinueToUse

```java
public boolean canContinueToUse()
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

### giveMorningGift

```java
private void giveMorningGift()
```

**Returns:** `private void`

### tick

```java
public void tick()
```

### CatTemptGoal

```java
public CatTemptGoal(Cat p_28219_, double p_28220_, Predicate<ItemStack> p_335450_, boolean p_28222_)
```

**Parameters:**

- `p_28219_` (`Cat`)
- `p_28220_` (`double`)
- `p_335450_` (`Predicate<ItemStack>`)
- `p_28222_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### tick

```java
public void tick()
```

### canScare

```java
protected boolean canScare()
```

**Returns:** `boolean`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`
