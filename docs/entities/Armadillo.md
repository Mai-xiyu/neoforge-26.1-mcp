# Armadillo

**Package:** `net.minecraft.world.entity.animal.armadillo`
**Type:** class
**Extends:** `Animal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BABY_SCALE` | `float` |  |
| `MAX_HEAD_ROTATION_EXTENT` | `float` |  |
| `SCARE_CHECK_INTERVAL` | `int` |  |
| `rollOutAnimationState` | `AnimationState` |  |
| `rollUpAnimationState` | `AnimationState` |  |
| `peekAnimationState` | `AnimationState` |  |

## Methods

### Armadillo

```java
public Armadillo(EntityType<? extends Animal> p_316162_, Level p_316793_)
```

**Parameters:**

- `p_316162_` (`EntityType<? extends Animal>`)
- `p_316793_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_316757_, AgeableMob p_316523_)
```

**Parameters:**

- `p_316757_` (`ServerLevel`)
- `p_316523_` (`AgeableMob`)

**Returns:** `AgeableMob`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326186_)
```

**Parameters:**

- `p_326186_` (`SynchedEntityData.Builder`)

### isScared

```java
public boolean isScared()
```

**Returns:** `public boolean`

### shouldHideInShell

```java
public boolean shouldHideInShell()
```

**Returns:** `public boolean`

### shouldSwitchToScaredState

```java
public boolean shouldSwitchToScaredState()
```

**Returns:** `public boolean`

### getState

```java
public Armadillo.ArmadilloState getState()
```

**Returns:** `public Armadillo.ArmadilloState`

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### switchToState

```java
public void switchToState(Armadillo.ArmadilloState p_316783_)
```

**Parameters:**

- `p_316783_` (`Armadillo.ArmadilloState`)

**Returns:** `public void`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_316145_)
```

**Parameters:**

- `p_316145_` (`EntityDataAccessor<?>`)

### brainProvider

```java
protected Brain.Provider<Armadillo> brainProvider()
```

**Returns:** `Brain.Provider<Armadillo>`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_316388_)
```

**Parameters:**

- `p_316388_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### customServerAiStep

```java
protected void customServerAiStep()
```

### pickNextScuteDropTime

```java
private int pickNextScuteDropTime()
```

**Returns:** `private int`

### tick

```java
public void tick()
```

### getAgeScale

```java
public float getAgeScale()
```

**Returns:** `float`

### setupAnimationStates

```java
private void setupAnimationStates()
```

**Returns:** `private void`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_326098_)
```

**Parameters:**

- `p_326098_` (`byte`)

### isFood

```java
public boolean isFood(ItemStack p_316181_)
```

**Parameters:**

- `p_316181_` (`ItemStack`)

**Returns:** `boolean`

### checkArmadilloSpawnRules

```java
public static boolean checkArmadilloSpawnRules(EntityType<Armadillo> p_320958_, LevelAccessor p_320908_, MobSpawnType p_320788_, BlockPos p_320500_, RandomSource p_319883_)
```

**Parameters:**

- `p_320958_` (`EntityType<Armadillo>`)
- `p_320908_` (`LevelAccessor`)
- `p_320788_` (`MobSpawnType`)
- `p_320500_` (`BlockPos`)
- `p_319883_` (`RandomSource`)

**Returns:** `public static boolean`

### isScaredBy

```java
public boolean isScaredBy(LivingEntity p_316281_)
```

**Parameters:**

- `p_316281_` (`LivingEntity`)

**Returns:** `public boolean`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_316752_)
```

**Parameters:**

- `p_316752_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_316298_)
```

**Parameters:**

- `p_316298_` (`CompoundTag`)

### rollUp

```java
public void rollUp()
```

**Returns:** `public void`

### rollOut

```java
public void rollOut()
```

**Returns:** `public void`

### hurt

```java
public boolean hurt(DamageSource p_321611_, float p_321629_)
```

**Parameters:**

- `p_321611_` (`DamageSource`)
- `p_321629_` (`float`)

**Returns:** `boolean`

### actuallyHurt

```java
protected void actuallyHurt(DamageSource p_316204_, float p_316801_)
```

**Parameters:**

- `p_316204_` (`DamageSource`)
- `p_316801_` (`float`)

### mobInteract

```java
public InteractionResult mobInteract(Player p_316559_, InteractionHand p_316119_)
```

**Parameters:**

- `p_316559_` (`Player`)
- `p_316119_` (`InteractionHand`)

**Returns:** `InteractionResult`

### ageUp

```java
public void ageUp(int p_326481_, boolean p_326340_)
```

**Parameters:**

- `p_326481_` (`int`)
- `p_326340_` (`boolean`)

### brushOffScute

```java
public boolean brushOffScute()
```

**Returns:** `public boolean`

### canStayRolledUp

```java
public boolean canStayRolledUp()
```

**Returns:** `public boolean`

### setInLove

```java
public void setInLove(Player p_316200_)
```

**Parameters:**

- `p_316200_` (`Player`)

### canFallInLove

```java
public boolean canFallInLove()
```

**Returns:** `boolean`

### getEatingSound

```java
public SoundEvent getEatingSound(ItemStack p_316292_)
```

**Parameters:**

- `p_316292_` (`ItemStack`)

**Returns:** `SoundEvent`

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
protected SoundEvent getHurtSound(DamageSource p_316220_)
```

**Parameters:**

- `p_316220_` (`DamageSource`)

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_316146_, BlockState p_316719_)
```

**Parameters:**

- `p_316146_` (`BlockPos`)
- `p_316719_` (`BlockState`)

### getMaxHeadYRot

```java
public int getMaxHeadYRot()
```

**Returns:** `int`

### createBodyControl

```java
protected BodyRotationControl createBodyControl()
```

**Returns:** `BodyRotationControl`

### BodyRotationControl

```java
return new BodyRotationControl()
```

**Returns:** `return new`

### clientTick

```java
public void clientTick()
```

### IDLE

```java
 IDLE()
```

**Returns:** ``

### shouldHideInShell

```java
public boolean shouldHideInShell(long p_326483_)
```

**Parameters:**

- `p_326483_` (`long`)

**Returns:** `boolean`

### ROLLING

```java
, ROLLING()
```

**Returns:** `,`

### shouldHideInShell

```java
public boolean shouldHideInShell(long p_326211_)
```

**Parameters:**

- `p_326211_` (`long`)

**Returns:** `boolean`

### SCARED

```java
, SCARED()
```

**Returns:** `,`

### shouldHideInShell

```java
public boolean shouldHideInShell(long p_326129_)
```

**Parameters:**

- `p_326129_` (`long`)

**Returns:** `boolean`

### UNROLLING

```java
, UNROLLING()
```

**Returns:** `,`

### shouldHideInShell

```java
public boolean shouldHideInShell(long p_326371_)
```

**Parameters:**

- `p_326371_` (`long`)

**Returns:** `boolean`

### ArmadilloState

```java
 ArmadilloState(String p_316309_, boolean p_326269_, int p_320184_, int p_326087_)
```

**Parameters:**

- `p_316309_` (`String`)
- `p_326269_` (`boolean`)
- `p_320184_` (`int`)
- `p_326087_` (`int`)

**Returns:** ``

### fromName

```java
public static Armadillo.ArmadilloState fromName(String p_316203_)
```

**Parameters:**

- `p_316203_` (`String`)

**Returns:** `public static Armadillo.ArmadilloState`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### id

```java
private int id()
```

**Returns:** `private int`

### shouldHideInShell

```java
public abstract boolean shouldHideInShell(long p_326488_)
```

**Parameters:**

- `p_326488_` (`long`)

**Returns:** `public abstract boolean`

### isThreatened

```java
public boolean isThreatened()
```

**Returns:** `public boolean`

### animationDuration

```java
public int animationDuration()
```

**Returns:** `public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ArmadilloState` | enum |  |
