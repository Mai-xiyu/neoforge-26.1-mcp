# Llama

**Package:** `net.minecraft.world.entity.animal.horse`
**Type:** class
**Extends:** `AbstractChestedHorse`
**Implements:** `VariantHolder<Llama.Variant>`, `RangedAttackMob`

## Methods

### Llama

```java
public Llama(EntityType<? extends Llama> p_30750_, Level p_30751_)
```

**Parameters:**

- `p_30750_` (`EntityType<? extends Llama>`)
- `p_30751_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isTraderLlama

```java
public boolean isTraderLlama()
```

**Returns:** `public boolean`

### setStrength

```java
private void setStrength(int p_30841_)
```

**Parameters:**

- `p_30841_` (`int`)

**Returns:** `private void`

### setRandomStrength

```java
private void setRandomStrength(RandomSource p_218818_)
```

**Parameters:**

- `p_218818_` (`RandomSource`)

**Returns:** `private void`

### getStrength

```java
public int getStrength()
```

**Returns:** `public int`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_30793_)
```

**Parameters:**

- `p_30793_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_30780_)
```

**Parameters:**

- `p_30780_` (`CompoundTag`)

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
protected void defineSynchedData(SynchedEntityData.Builder p_326474_)
```

**Parameters:**

- `p_326474_` (`SynchedEntityData.Builder`)

### getVariant

```java
public Llama.Variant getVariant()
```

**Returns:** `public Llama.Variant`

### setVariant

```java
public void setVariant(Llama.Variant p_262628_)
```

**Parameters:**

- `p_262628_` (`Llama.Variant`)

**Returns:** `public void`

### isFood

```java
public boolean isFood(ItemStack p_30832_)
```

**Parameters:**

- `p_30832_` (`ItemStack`)

**Returns:** `boolean`

### handleEating

```java
protected boolean handleEating(Player p_30796_, ItemStack p_30797_)
```

**Parameters:**

- `p_30796_` (`Player`)
- `p_30797_` (`ItemStack`)

**Returns:** `boolean`

### isImmobile

```java
public boolean isImmobile()
```

**Returns:** `boolean`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_30774_, DifficultyInstance p_30775_, MobSpawnType p_30776_, SpawnGroupData p_30777_)
```

**Parameters:**

- `p_30774_` (`ServerLevelAccessor`)
- `p_30775_` (`DifficultyInstance`)
- `p_30776_` (`MobSpawnType`)
- `p_30777_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### canPerformRearing

```java
protected boolean canPerformRearing()
```

**Returns:** `boolean`

### getAngrySound

```java
protected SoundEvent getAngrySound()
```

**Returns:** `SoundEvent`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_30803_)
```

**Parameters:**

- `p_30803_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getEatingSound

```java
protected SoundEvent getEatingSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_30790_, BlockState p_30791_)
```

**Parameters:**

- `p_30790_` (`BlockPos`)
- `p_30791_` (`BlockState`)

### playChestEquipsSound

```java
protected void playChestEquipsSound()
```

### getInventoryColumns

```java
public int getInventoryColumns()
```

**Returns:** `int`

### canUseSlot

```java
public boolean canUseSlot(EquipmentSlot p_348498_)
```

**Parameters:**

- `p_348498_` (`EquipmentSlot`)

**Returns:** `boolean`

### isBodyArmorItem

```java
public boolean isBodyArmorItem(ItemStack p_30834_)
```

**Parameters:**

- `p_30834_` (`ItemStack`)

**Returns:** `boolean`

### isSaddleable

```java
public boolean isSaddleable()
```

**Returns:** `boolean`

### getSwag

```java
public DyeColor getSwag()
```

**Returns:** `DyeColor`

### getMaxTemper

```java
public int getMaxTemper()
```

**Returns:** `int`

### canMate

```java
public boolean canMate(Animal p_30765_)
```

**Parameters:**

- `p_30765_` (`Animal`)

**Returns:** `boolean`

### getBreedOffspring

```java
public Llama getBreedOffspring(ServerLevel p_149545_, AgeableMob p_149546_)
```

**Parameters:**

- `p_149545_` (`ServerLevel`)
- `p_149546_` (`AgeableMob`)

**Returns:** `Llama`

### makeNewLlama

```java
protected Llama makeNewLlama()
```

**Returns:** `Llama`

### spit

```java
private void spit(LivingEntity p_30828_)
```

**Parameters:**

- `p_30828_` (`LivingEntity`)

**Returns:** `private void`

### setDidSpit

```java
void setDidSpit(boolean p_30753_)
```

**Parameters:**

- `p_30753_` (`boolean`)

### causeFallDamage

```java
public boolean causeFallDamage(float p_149538_, float p_149539_, DamageSource p_149540_)
```

**Parameters:**

- `p_149538_` (`float`)
- `p_149539_` (`float`)
- `p_149540_` (`DamageSource`)

**Returns:** `boolean`

### leaveCaravan

```java
public void leaveCaravan()
```

**Returns:** `public void`

### joinCaravan

```java
public void joinCaravan(Llama p_30767_)
```

**Parameters:**

- `p_30767_` (`Llama`)

**Returns:** `public void`

### hasCaravanTail

```java
public boolean hasCaravanTail()
```

**Returns:** `public boolean`

### inCaravan

```java
public boolean inCaravan()
```

**Returns:** `public boolean`

### getCaravanHead

```java
public Llama getCaravanHead()
```

**Returns:** `Llama`

### followLeashSpeed

```java
protected double followLeashSpeed()
```

**Returns:** `double`

### followMommy

```java
protected void followMommy()
```

### canEatGrass

```java
public boolean canEatGrass()
```

**Returns:** `boolean`

### performRangedAttack

```java
public void performRangedAttack(LivingEntity p_30762_, float p_30763_)
```

**Parameters:**

- `p_30762_` (`LivingEntity`)
- `p_30763_` (`float`)

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316494_)
```

**Parameters:**

- `p_316494_` (`Pose`)

**Returns:** `EntityDimensions`

### getPassengerAttachmentPoint

```java
protected Vec3 getPassengerAttachmentPoint(Entity p_294968_, EntityDimensions p_296042_, float p_295134_)
```

**Parameters:**

- `p_294968_` (`Entity`)
- `p_296042_` (`EntityDimensions`)
- `p_295134_` (`float`)

**Returns:** `Vec3`

### LlamaAttackWolfGoal

```java
public LlamaAttackWolfGoal(Llama p_30843_)
```

**Parameters:**

- `p_30843_` (`Llama`)

**Returns:** `public`

### getFollowDistance

```java
protected double getFollowDistance()
```

**Returns:** `double`

### LlamaGroupData

```java
 LlamaGroupData(Llama.Variant p_262658_)
```

**Parameters:**

- `p_262658_` (`Llama.Variant`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### LlamaHurtByTargetGoal

```java
public LlamaHurtByTargetGoal(Llama p_30854_)
```

**Parameters:**

- `p_30854_` (`Llama`)

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

### GRAY

```java
, GRAY()
```

**Returns:** `,`

### Variant

```java
private Variant(int p_262677_, String p_262641_)
```

**Parameters:**

- `p_262677_` (`int`)
- `p_262641_` (`String`)

**Returns:** `private`

### getId

```java
public int getId()
```

**Returns:** `public int`

### byId

```java
public static Llama.Variant byId(int p_262608_)
```

**Parameters:**

- `p_262608_` (`int`)

**Returns:** `public static Llama.Variant`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Variant` | enum |  |
