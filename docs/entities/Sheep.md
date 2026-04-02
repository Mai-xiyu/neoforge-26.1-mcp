# Sheep

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `Animal`
**Implements:** `Shearable`

## Methods

### createSheepColor

```java
private static int createSheepColor(DyeColor p_29866_)
```

**Parameters:**

- `p_29866_` (`DyeColor`)

**Returns:** `private static int`

### getColor

```java
public static int getColor(DyeColor p_350926_)
```

**Parameters:**

- `p_350926_` (`DyeColor`)

**Returns:** `public static int`

### Sheep

```java
public Sheep(EntityType<? extends Sheep> p_29806_, Level p_29807_)
```

**Parameters:**

- `p_29806_` (`EntityType<? extends Sheep>`)
- `p_29807_` (`Level`)

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
public boolean isFood(ItemStack p_335372_)
```

**Parameters:**

- `p_335372_` (`ItemStack`)

**Returns:** `boolean`

### customServerAiStep

```java
protected void customServerAiStep()
```

### aiStep

```java
public void aiStep()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_325952_)
```

**Parameters:**

- `p_325952_` (`SynchedEntityData.Builder`)

### getDefaultLootTable

```java
public ResourceKey<LootTable> getDefaultLootTable()
```

**Returns:** `ResourceKey<LootTable>`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_29814_)
```

**Parameters:**

- `p_29814_` (`byte`)

### getHeadEatPositionScale

```java
public float getHeadEatPositionScale(float p_29881_)
```

**Parameters:**

- `p_29881_` (`float`)

**Returns:** `public float`

### getHeadEatAngleScale

```java
public float getHeadEatAngleScale(float p_29883_)
```

**Parameters:**

- `p_29883_` (`float`)

**Returns:** `public float`

### mobInteract

```java
public InteractionResult mobInteract(Player p_29853_, InteractionHand p_29854_)
```

**Parameters:**

- `p_29853_` (`Player`)
- `p_29854_` (`InteractionHand`)

**Returns:** `InteractionResult`

### shear

```java
public void shear(SoundSource p_29819_)
```

**Parameters:**

- `p_29819_` (`SoundSource`)

### readyForShearing

```java
public boolean readyForShearing()
```

**Returns:** `boolean`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_29864_)
```

**Parameters:**

- `p_29864_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_29845_)
```

**Parameters:**

- `p_29845_` (`CompoundTag`)

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_29872_)
```

**Parameters:**

- `p_29872_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_29861_, BlockState p_29862_)
```

**Parameters:**

- `p_29861_` (`BlockPos`)
- `p_29862_` (`BlockState`)

### getColor

```java
public DyeColor getColor()
```

**Returns:** `public DyeColor`

### setColor

```java
public void setColor(DyeColor p_29856_)
```

**Parameters:**

- `p_29856_` (`DyeColor`)

**Returns:** `public void`

### isSheared

```java
public boolean isSheared()
```

**Returns:** `public boolean`

### setSheared

```java
public void setSheared(boolean p_29879_)
```

**Parameters:**

- `p_29879_` (`boolean`)

**Returns:** `public void`

### getRandomSheepColor

```java
public static DyeColor getRandomSheepColor(RandomSource p_218262_)
```

**Parameters:**

- `p_218262_` (`RandomSource`)

**Returns:** `public static DyeColor`

### getBreedOffspring

```java
public Sheep getBreedOffspring(ServerLevel p_149044_, AgeableMob p_149045_)
```

**Parameters:**

- `p_149044_` (`ServerLevel`)
- `p_149045_` (`AgeableMob`)

**Returns:** `Sheep`

### ate

```java
public void ate()
```

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_29835_, DifficultyInstance p_29836_, MobSpawnType p_29837_, SpawnGroupData p_29838_)
```

**Parameters:**

- `p_29835_` (`ServerLevelAccessor`)
- `p_29836_` (`DifficultyInstance`)
- `p_29837_` (`MobSpawnType`)
- `p_29838_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### getOffspringColor

```java
private DyeColor getOffspringColor(Animal p_29824_, Animal p_29825_)
```

**Parameters:**

- `p_29824_` (`Animal`)
- `p_29825_` (`Animal`)

**Returns:** `private DyeColor`

### makeCraftInput

```java
private static CraftingInput makeCraftInput(DyeColor p_346067_, DyeColor p_345681_)
```

**Parameters:**

- `p_346067_` (`DyeColor`)
- `p_345681_` (`DyeColor`)

**Returns:** `private static CraftingInput`
