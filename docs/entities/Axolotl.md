# Axolotl

**Package:** `net.minecraft.world.entity.animal.axolotl`
**Type:** class
**Extends:** `Animal`
**Implements:** `LerpingModel`, `VariantHolder<Axolotl.Variant>`, `Bucketable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TOTAL_PLAYDEAD_TIME` | `int` |  |
| `SENSOR_TYPES` | `ImmutableList<? extends SensorType<? extends Sensor<? super Axolotl>>>` |  |
| `MEMORY_TYPES` | `ImmutableList<? extends MemoryModuleType<?>>` |  |
| `PLAYER_REGEN_DETECTION_RANGE` | `double` |  |
| `RARE_VARIANT_CHANCE` | `int` |  |
| `VARIANT_TAG` | `String` |  |

## Methods

### Axolotl

```java
public Axolotl(EntityType<? extends Axolotl> p_149105_, Level p_149106_)
```

**Parameters:**

- `p_149105_` (`EntityType<? extends Axolotl>`)
- `p_149106_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getModelRotationValues

```java
public Map<String, Vector3f> getModelRotationValues()
```

**Returns:** `Map<String, Vector3f>`

### getWalkTargetValue

```java
public float getWalkTargetValue(BlockPos p_149140_, LevelReader p_149141_)
```

**Parameters:**

- `p_149140_` (`BlockPos`)
- `p_149141_` (`LevelReader`)

**Returns:** `float`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_325922_)
```

**Parameters:**

- `p_325922_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_149158_)
```

**Parameters:**

- `p_149158_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_149145_)
```

**Parameters:**

- `p_149145_` (`CompoundTag`)

### playAmbientSound

```java
public void playAmbientSound()
```

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_149132_, DifficultyInstance p_149133_, MobSpawnType p_149134_, SpawnGroupData p_149135_)
```

**Parameters:**

- `p_149132_` (`ServerLevelAccessor`)
- `p_149133_` (`DifficultyInstance`)
- `p_149134_` (`MobSpawnType`)
- `p_149135_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### baseTick

```java
public void baseTick()
```

### handleAirSupply

```java
protected void handleAirSupply(int p_149194_)
```

**Parameters:**

- `p_149194_` (`int`)

**Returns:** `protected void`

### rehydrate

```java
public void rehydrate()
```

**Returns:** `public void`

### getMaxAirSupply

```java
public int getMaxAirSupply()
```

**Returns:** `int`

### getVariant

```java
public Axolotl.Variant getVariant()
```

**Returns:** `public Axolotl.Variant`

### setVariant

```java
public void setVariant(Axolotl.Variant p_149118_)
```

**Parameters:**

- `p_149118_` (`Axolotl.Variant`)

**Returns:** `public void`

### useRareVariant

```java
private static boolean useRareVariant(RandomSource p_218436_)
```

**Parameters:**

- `p_218436_` (`RandomSource`)

**Returns:** `private static boolean`

### checkSpawnObstruction

```java
public boolean checkSpawnObstruction(LevelReader p_149130_)
```

**Parameters:**

- `p_149130_` (`LevelReader`)

**Returns:** `boolean`

### isPushedByFluid

```java
public boolean isPushedByFluid()
```

**Returns:** `boolean`

### setPlayingDead

```java
public void setPlayingDead(boolean p_149199_)
```

**Parameters:**

- `p_149199_` (`boolean`)

**Returns:** `public void`

### isPlayingDead

```java
public boolean isPlayingDead()
```

**Returns:** `public boolean`

### fromBucket

```java
public boolean fromBucket()
```

**Returns:** `boolean`

### setFromBucket

```java
public void setFromBucket(boolean p_149196_)
```

**Parameters:**

- `p_149196_` (`boolean`)

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_149112_, AgeableMob p_149113_)
```

**Parameters:**

- `p_149112_` (`ServerLevel`)
- `p_149113_` (`AgeableMob`)

**Returns:** `AgeableMob`

### isFood

```java
public boolean isFood(ItemStack p_149189_)
```

**Parameters:**

- `p_149189_` (`ItemStack`)

**Returns:** `boolean`

### canBeLeashed

```java
public boolean canBeLeashed()
```

**Returns:** `boolean`

### customServerAiStep

```java
protected void customServerAiStep()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### createNavigation

```java
protected PathNavigation createNavigation(Level p_149128_)
```

**Parameters:**

- `p_149128_` (`Level`)

**Returns:** `PathNavigation`

### AmphibiousPathNavigation

```java
return new AmphibiousPathNavigation()
```

**Returns:** `return new`

### playAttackSound

```java
public void playAttackSound()
```

### hurt

```java
public boolean hurt(DamageSource p_149115_, float p_149116_)
```

**Parameters:**

- `p_149115_` (`DamageSource`)
- `p_149116_` (`float`)

**Returns:** `boolean`

### getMaxHeadXRot

```java
public int getMaxHeadXRot()
```

**Returns:** `int`

### getMaxHeadYRot

```java
public int getMaxHeadYRot()
```

**Returns:** `int`

### mobInteract

```java
public InteractionResult mobInteract(Player p_149155_, InteractionHand p_149156_)
```

**Parameters:**

- `p_149155_` (`Player`)
- `p_149156_` (`InteractionHand`)

**Returns:** `InteractionResult`

### saveToBucketTag

```java
public void saveToBucketTag(ItemStack p_149187_)
```

**Parameters:**

- `p_149187_` (`ItemStack`)

### loadFromBucketTag

```java
public void loadFromBucketTag(CompoundTag p_149163_)
```

**Parameters:**

- `p_149163_` (`CompoundTag`)

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

### canBeSeenAsEnemy

```java
public boolean canBeSeenAsEnemy()
```

**Returns:** `boolean`

### onStopAttacking

```java
public static void onStopAttacking(Axolotl p_218444_, LivingEntity p_218445_)
```

**Parameters:**

- `p_218444_` (`Axolotl`)
- `p_218445_` (`LivingEntity`)

**Returns:** `public static void`

### applySupportingEffects

```java
public void applySupportingEffects(Player p_149174_)
```

**Parameters:**

- `p_149174_` (`Player`)

**Returns:** `public void`

### requiresCustomPersistence

```java
public boolean requiresCustomPersistence()
```

**Returns:** `boolean`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_149161_)
```

**Parameters:**

- `p_149161_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getSwimSplashSound

```java
protected SoundEvent getSwimSplashSound()
```

**Returns:** `SoundEvent`

### getSwimSound

```java
protected SoundEvent getSwimSound()
```

**Returns:** `SoundEvent`

### brainProvider

```java
protected Brain.Provider<Axolotl> brainProvider()
```

**Returns:** `Brain.Provider<Axolotl>`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_149138_)
```

**Parameters:**

- `p_149138_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### getBrain

```java
public Brain<Axolotl> getBrain()
```

**Returns:** `Brain<Axolotl>`

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### travel

```java
public void travel(Vec3 p_149181_)
```

**Parameters:**

- `p_149181_` (`Vec3`)

### usePlayerItem

```java
protected void usePlayerItem(Player p_149124_, InteractionHand p_149125_, ItemStack p_149126_)
```

**Parameters:**

- `p_149124_` (`Player`)
- `p_149125_` (`InteractionHand`)
- `p_149126_` (`ItemStack`)

### removeWhenFarAway

```java
public boolean removeWhenFarAway(double p_149183_)
```

**Parameters:**

- `p_149183_` (`double`)

**Returns:** `boolean`

### getTarget

```java
public LivingEntity getTarget()
```

**Returns:** `LivingEntity`

### checkAxolotlSpawnRules

```java
public static boolean checkAxolotlSpawnRules(EntityType<? extends LivingEntity> p_218438_, ServerLevelAccessor p_218439_, MobSpawnType p_218440_, BlockPos p_218441_, RandomSource p_218442_)
```

**Parameters:**

- `p_218438_` (`EntityType<? extends LivingEntity>`)
- `p_218439_` (`ServerLevelAccessor`)
- `p_218440_` (`MobSpawnType`)
- `p_218441_` (`BlockPos`)
- `p_218442_` (`RandomSource`)

**Returns:** `public static boolean`

### AxolotlGroupData

```java
public AxolotlGroupData(Axolotl.Variant[]... p_149204_)
```

**Parameters:**

- `p_149204_` (`Axolotl.Variant[]...`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getVariant

```java
public Axolotl.Variant getVariant(RandomSource p_218447_)
```

**Parameters:**

- `p_218447_` (`RandomSource`)

**Returns:** `public Axolotl.Variant`

### AxolotlLookControl

```java
public AxolotlLookControl(Axolotl p_149210_, int p_149211_)
```

**Parameters:**

- `p_149210_` (`Axolotl`)
- `p_149211_` (`int`)

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

### AxolotlMoveControl

```java
public AxolotlMoveControl(Axolotl p_149215_)
```

**Parameters:**

- `p_149215_` (`Axolotl`)

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

### BLUE

```java
, BLUE()
```

**Returns:** `,`

### Variant

```java
private Variant(int p_149239_, String p_149240_, boolean p_149241_)
```

**Parameters:**

- `p_149239_` (`int`)
- `p_149240_` (`String`)
- `p_149241_` (`boolean`)

**Returns:** `private`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### byId

```java
public static Axolotl.Variant byId(int p_262930_)
```

**Parameters:**

- `p_262930_` (`int`)

**Returns:** `public static Axolotl.Variant`

### getCommonSpawnVariant

```java
public static Axolotl.Variant getCommonSpawnVariant(RandomSource p_218449_)
```

**Parameters:**

- `p_218449_` (`RandomSource`)

**Returns:** `public static Axolotl.Variant`

### getSpawnVariant

```java
return getSpawnVariant()
```

**Returns:** `return`

### getRareSpawnVariant

```java
public static Axolotl.Variant getRareSpawnVariant(RandomSource p_218454_)
```

**Parameters:**

- `p_218454_` (`RandomSource`)

**Returns:** `public static Axolotl.Variant`

### getSpawnVariant

```java
return getSpawnVariant()
```

**Returns:** `return`

### getSpawnVariant

```java
private static Axolotl.Variant getSpawnVariant(RandomSource p_218451_, boolean p_218452_)
```

**Parameters:**

- `p_218451_` (`RandomSource`)
- `p_218452_` (`boolean`)

**Returns:** `private static Axolotl.Variant`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `AxolotlGroupData` | class |  |
| `Variant` | enum |  |
