# Panda

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Animal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TOTAL_ROLL_STEPS` | `int` |  |
| `rollCounter` | `int` |  |

## Methods

### Panda

```java
public Panda(EntityType<? extends Panda> p_29086_, Level p_29087_)
```

**Parameters:**

- `p_29086_` (`EntityType<? extends Panda>`)
- `p_29087_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canTakeItem

```java
public boolean canTakeItem(ItemStack p_29146_)
```

**Parameters:**

- `p_29146_` (`ItemStack`)

**Returns:** `boolean`

### getUnhappyCounter

```java
public int getUnhappyCounter()
```

**Returns:** `public int`

### setUnhappyCounter

```java
public void setUnhappyCounter(int p_29207_)
```

**Parameters:**

- `p_29207_` (`int`)

**Returns:** `public void`

### isSneezing

```java
public boolean isSneezing()
```

**Returns:** `public boolean`

### isSitting

```java
public boolean isSitting()
```

**Returns:** `public boolean`

### sit

```java
public void sit(boolean p_29209_)
```

**Parameters:**

- `p_29209_` (`boolean`)

**Returns:** `public void`

### isOnBack

```java
public boolean isOnBack()
```

**Returns:** `public boolean`

### setOnBack

```java
public void setOnBack(boolean p_29213_)
```

**Parameters:**

- `p_29213_` (`boolean`)

**Returns:** `public void`

### isEating

```java
public boolean isEating()
```

**Returns:** `public boolean`

### eat

```java
public void eat(boolean p_29217_)
```

**Parameters:**

- `p_29217_` (`boolean`)

**Returns:** `public void`

### getEatCounter

```java
private int getEatCounter()
```

**Returns:** `private int`

### setEatCounter

```java
private void setEatCounter(int p_29215_)
```

**Parameters:**

- `p_29215_` (`int`)

**Returns:** `private void`

### sneeze

```java
public void sneeze(boolean p_29221_)
```

**Parameters:**

- `p_29221_` (`boolean`)

**Returns:** `public void`

### getSneezeCounter

```java
public int getSneezeCounter()
```

**Returns:** `public int`

### setSneezeCounter

```java
public void setSneezeCounter(int p_29211_)
```

**Parameters:**

- `p_29211_` (`int`)

**Returns:** `public void`

### getMainGene

```java
public Panda.Gene getMainGene()
```

**Returns:** `public Panda.Gene`

### setMainGene

```java
public void setMainGene(Panda.Gene p_29100_)
```

**Parameters:**

- `p_29100_` (`Panda.Gene`)

**Returns:** `public void`

### getHiddenGene

```java
public Panda.Gene getHiddenGene()
```

**Returns:** `public Panda.Gene`

### setHiddenGene

```java
public void setHiddenGene(Panda.Gene p_29117_)
```

**Parameters:**

- `p_29117_` (`Panda.Gene`)

**Returns:** `public void`

### isRolling

```java
public boolean isRolling()
```

**Returns:** `public boolean`

### roll

```java
public void roll(boolean p_29223_)
```

**Parameters:**

- `p_29223_` (`boolean`)

**Returns:** `public void`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326185_)
```

**Parameters:**

- `p_326185_` (`SynchedEntityData.Builder`)

### getFlag

```java
private boolean getFlag(int p_29219_)
```

**Parameters:**

- `p_29219_` (`int`)

**Returns:** `private boolean`

### setFlag

```java
private void setFlag(int p_29135_, boolean p_29136_)
```

**Parameters:**

- `p_29135_` (`int`)
- `p_29136_` (`boolean`)

**Returns:** `private void`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_29129_)
```

**Parameters:**

- `p_29129_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_29115_)
```

**Parameters:**

- `p_29115_` (`CompoundTag`)

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_148967_, AgeableMob p_148968_)
```

**Parameters:**

- `p_148967_` (`ServerLevel`)
- `p_148968_` (`AgeableMob`)

**Returns:** `AgeableMob`

### registerGoals

```java
protected void registerGoals()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### getVariant

```java
public Panda.Gene getVariant()
```

**Returns:** `public Panda.Gene`

### isLazy

```java
public boolean isLazy()
```

**Returns:** `public boolean`

### isWorried

```java
public boolean isWorried()
```

**Returns:** `public boolean`

### isPlayful

```java
public boolean isPlayful()
```

**Returns:** `public boolean`

### isBrown

```java
public boolean isBrown()
```

**Returns:** `public boolean`

### isWeak

```java
public boolean isWeak()
```

**Returns:** `public boolean`

### isAggressive

```java
public boolean isAggressive()
```

**Returns:** `boolean`

### canBeLeashed

```java
public boolean canBeLeashed()
```

**Returns:** `boolean`

### doHurtTarget

```java
public boolean doHurtTarget(Entity p_29091_)
```

**Parameters:**

- `p_29091_` (`Entity`)

**Returns:** `boolean`

### playAttackSound

```java
public void playAttackSound()
```

### tick

```java
public void tick()
```

### isScared

```java
public boolean isScared()
```

**Returns:** `public boolean`

### handleEating

```java
private void handleEating()
```

**Returns:** `private void`

### addEatingParticles

```java
private void addEatingParticles()
```

**Returns:** `private void`

### updateSitAmount

```java
private void updateSitAmount()
```

**Returns:** `private void`

### updateOnBackAnimation

```java
private void updateOnBackAnimation()
```

**Returns:** `private void`

### updateRollAmount

```java
private void updateRollAmount()
```

**Returns:** `private void`

### getSitAmount

```java
public float getSitAmount(float p_29225_)
```

**Parameters:**

- `p_29225_` (`float`)

**Returns:** `public float`

### getLieOnBackAmount

```java
public float getLieOnBackAmount(float p_29227_)
```

**Parameters:**

- `p_29227_` (`float`)

**Returns:** `public float`

### getRollAmount

```java
public float getRollAmount(float p_29089_)
```

**Parameters:**

- `p_29089_` (`float`)

**Returns:** `public float`

### handleRoll

```java
private void handleRoll()
```

**Returns:** `private void`

### afterSneeze

```java
private void afterSneeze()
```

**Returns:** `private void`

### pickUpItem

```java
protected void pickUpItem(ItemEntity p_29121_)
```

**Parameters:**

- `p_29121_` (`ItemEntity`)

### hurt

```java
public boolean hurt(DamageSource p_29097_, float p_29098_)
```

**Parameters:**

- `p_29097_` (`DamageSource`)
- `p_29098_` (`float`)

**Returns:** `boolean`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_29109_, DifficultyInstance p_29110_, MobSpawnType p_29111_, SpawnGroupData p_29112_)
```

**Parameters:**

- `p_29109_` (`ServerLevelAccessor`)
- `p_29110_` (`DifficultyInstance`)
- `p_29111_` (`MobSpawnType`)
- `p_29112_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### setGeneFromParents

```java
public void setGeneFromParents(Panda p_29104_, Panda p_29105_)
```

**Parameters:**

- `p_29104_` (`Panda`)
- `p_29105_` (`Panda`)

**Returns:** `public void`

### getOneOfGenesRandomly

```java
private Panda.Gene getOneOfGenesRandomly()
```

**Returns:** `private Panda.Gene`

### setAttributes

```java
public void setAttributes()
```

**Returns:** `public void`

### tryToSit

```java
void tryToSit()
```

### mobInteract

```java
public InteractionResult mobInteract(Player p_29123_, InteractionHand p_29124_)
```

**Parameters:**

- `p_29123_` (`Player`)
- `p_29124_` (`InteractionHand`)

**Returns:** `InteractionResult`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_29126_, BlockState p_29127_)
```

**Parameters:**

- `p_29126_` (`BlockPos`)
- `p_29127_` (`BlockState`)

### isFood

```java
public boolean isFood(ItemStack p_29192_)
```

**Parameters:**

- `p_29192_` (`ItemStack`)

**Returns:** `boolean`

### isFoodOrCake

```java
private boolean isFoodOrCake(ItemStack p_29196_)
```

**Parameters:**

- `p_29196_` (`ItemStack`)

**Returns:** `private boolean`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_29142_)
```

**Parameters:**

- `p_29142_` (`DamageSource`)

**Returns:** `SoundEvent`

### canPerformAction

```java
public boolean canPerformAction()
```

**Returns:** `public boolean`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316677_)
```

**Parameters:**

- `p_316677_` (`Pose`)

**Returns:** `EntityDimensions`

### AGGRESSIVE

```java
, AGGRESSIVE()
```

**Returns:** `,`

### Gene

```java
private Gene(int p_29244_, String p_29245_, boolean p_29246_)
```

**Parameters:**

- `p_29244_` (`int`)
- `p_29245_` (`String`)
- `p_29246_` (`boolean`)

**Returns:** `private`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### isRecessive

```java
public boolean isRecessive()
```

**Returns:** `public boolean`

### getVariantFromGenes

```java
static Panda.Gene getVariantFromGenes(Panda.Gene p_29261_, Panda.Gene p_29262_)
```

**Parameters:**

- `p_29261_` (`Panda.Gene`)
- `p_29262_` (`Panda.Gene`)

**Returns:** `static Panda.Gene`

### byId

```java
public static Panda.Gene byId(int p_29249_)
```

**Parameters:**

- `p_29249_` (`int`)

**Returns:** `public static Panda.Gene`

### byName

```java
public static Panda.Gene byName(String p_29254_)
```

**Parameters:**

- `p_29254_` (`String`)

**Returns:** `public static Panda.Gene`

### getRandom

```java
public static Panda.Gene getRandom(RandomSource p_218235_)
```

**Parameters:**

- `p_218235_` (`RandomSource`)

**Returns:** `public static Panda.Gene`

### PandaAttackGoal

```java
public PandaAttackGoal(Panda p_29269_, double p_29270_, boolean p_29271_)
```

**Parameters:**

- `p_29269_` (`Panda`)
- `p_29270_` (`double`)
- `p_29271_` (`boolean`)

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

### PandaAvoidGoal

```java
public PandaAvoidGoal(Panda p_29275_, Class<T> p_29276_, float p_29277_, double p_29278_, double p_29279_)
```

**Parameters:**

- `p_29275_` (`Panda`)
- `p_29276_` (`Class<T>`)
- `p_29277_` (`float`)
- `p_29278_` (`double`)
- `p_29279_` (`double`)

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

### PandaBreedGoal

```java
public PandaBreedGoal(Panda p_186221_, double p_186222_)
```

**Parameters:**

- `p_186221_` (`Panda`)
- `p_186222_` (`double`)

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

### canFindBamboo

```java
private boolean canFindBamboo()
```

**Returns:** `private boolean`

### PandaHurtByTargetGoal

```java
public PandaHurtByTargetGoal(Panda p_29292_, Class<?>[]... p_29293_)
```

**Parameters:**

- `p_29292_` (`Panda`)
- `p_29293_` (`Class<?>[]...`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### alertOther

```java
protected void alertOther(Mob p_29295_, LivingEntity p_29296_)
```

**Parameters:**

- `p_29295_` (`Mob`)
- `p_29296_` (`LivingEntity`)

### PandaLieOnBackGoal

```java
public PandaLieOnBackGoal(Panda p_29301_)
```

**Parameters:**

- `p_29301_` (`Panda`)

**Returns:** `public`

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

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### PandaLookAtPlayerGoal

```java
public PandaLookAtPlayerGoal(Panda p_29308_, Class<? extends LivingEntity> p_29309_, float p_29310_)
```

**Parameters:**

- `p_29308_` (`Panda`)
- `p_29309_` (`Class<? extends LivingEntity>`)
- `p_29310_` (`float`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setTarget

```java
public void setTarget(LivingEntity p_29313_)
```

**Parameters:**

- `p_29313_` (`LivingEntity`)

**Returns:** `public void`

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### PandaMoveControl

```java
public PandaMoveControl(Panda p_29318_)
```

**Parameters:**

- `p_29318_` (`Panda`)

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

### PandaPanicGoal

```java
public PandaPanicGoal(Panda p_29322_, double p_29323_)
```

**Parameters:**

- `p_29322_` (`Panda`)
- `p_29323_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canContinueToUse

```java
public boolean canContinueToUse()
```

**Returns:** `boolean`

### PandaRollGoal

```java
public PandaRollGoal(Panda p_29328_)
```

**Parameters:**

- `p_29328_` (`Panda`)

**Returns:** `public`

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

### start

```java
public void start()
```

### isInterruptable

```java
public boolean isInterruptable()
```

**Returns:** `boolean`

### PandaSitGoal

```java
public PandaSitGoal()
```

**Returns:** `public`

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

### tick

```java
public void tick()
```

### start

```java
public void start()
```

### stop

```java
public void stop()
```

### PandaSneezeGoal

```java
public PandaSneezeGoal(Panda p_29344_)
```

**Parameters:**

- `p_29344_` (`Panda`)

**Returns:** `public`

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

### start

```java
public void start()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Gene` | enum |  |
