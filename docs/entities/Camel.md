# Camel

**Package:** `net.minecraft.world.entity.animal.camel`
**Type:** class
**Extends:** `AbstractHorse`
**Implements:** `PlayerRideableJumping`, `Saddleable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BABY_SCALE` | `float` |  |
| `DASH_COOLDOWN_TICKS` | `int` |  |
| `MAX_HEAD_Y_ROT` | `int` |  |
| `DASH` | `EntityDataAccessor<Boolean>` |  |
| `LAST_POSE_CHANGE_TICK` | `EntityDataAccessor<Long>` |  |
| `sitAnimationState` | `AnimationState` |  |
| `sitPoseAnimationState` | `AnimationState` |  |
| `sitUpAnimationState` | `AnimationState` |  |
| `idleAnimationState` | `AnimationState` |  |
| `dashAnimationState` | `AnimationState` |  |

## Methods

### Camel

```java
public Camel(EntityType<? extends Camel> p_248516_, Level p_249295_)
```

**Parameters:**

- `p_248516_` (`EntityType<? extends Camel>`)
- `p_249295_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_250330_)
```

**Parameters:**

- `p_250330_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_250781_)
```

**Parameters:**

- `p_250781_` (`CompoundTag`)

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326213_)
```

**Parameters:**

- `p_326213_` (`SynchedEntityData.Builder`)

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_249190_, DifficultyInstance p_251264_, MobSpawnType p_250254_, SpawnGroupData p_249259_)
```

**Parameters:**

- `p_249190_` (`ServerLevelAccessor`)
- `p_251264_` (`DifficultyInstance`)
- `p_250254_` (`MobSpawnType`)
- `p_249259_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### brainProvider

```java
protected Brain.Provider<Camel> brainProvider()
```

**Returns:** `Brain.Provider<Camel>`

### registerGoals

```java
protected void registerGoals()
```

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_251586_)
```

**Parameters:**

- `p_251586_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316664_)
```

**Parameters:**

- `p_316664_` (`Pose`)

**Returns:** `EntityDimensions`

### customServerAiStep

```java
protected void customServerAiStep()
```

### tick

```java
public void tick()
```

### setupAnimationStates

```java
private void setupAnimationStates()
```

**Returns:** `private void`

### updateWalkAnimation

```java
protected void updateWalkAnimation(float p_268362_)
```

**Parameters:**

- `p_268362_` (`float`)

### travel

```java
public void travel(Vec3 p_250068_)
```

**Parameters:**

- `p_250068_` (`Vec3`)

### tickRidden

```java
protected void tickRidden(Player p_278319_, Vec3 p_278301_)
```

**Parameters:**

- `p_278319_` (`Player`)
- `p_278301_` (`Vec3`)

### refuseToMove

```java
public boolean refuseToMove()
```

**Returns:** `public boolean`

### getRiddenSpeed

```java
protected float getRiddenSpeed(Player p_278241_)
```

**Parameters:**

- `p_278241_` (`Player`)

**Returns:** `float`

### getRiddenRotation

```java
protected Vec2 getRiddenRotation(LivingEntity p_275271_)
```

**Parameters:**

- `p_275271_` (`LivingEntity`)

**Returns:** `Vec2`

### getRiddenInput

```java
protected Vec3 getRiddenInput(Player p_278264_, Vec3 p_278298_)
```

**Parameters:**

- `p_278264_` (`Player`)
- `p_278298_` (`Vec3`)

**Returns:** `Vec3`

### canJump

```java
public boolean canJump()
```

**Returns:** `boolean`

### onPlayerJump

```java
public void onPlayerJump(int p_249138_)
```

**Parameters:**

- `p_249138_` (`int`)

### canSprint

```java
public boolean canSprint()
```

**Returns:** `boolean`

### executeRidersJump

```java
protected void executeRidersJump(float p_251967_, Vec3 p_275627_)
```

**Parameters:**

- `p_251967_` (`float`)
- `p_275627_` (`Vec3`)

### isDashing

```java
public boolean isDashing()
```

**Returns:** `public boolean`

### setDashing

```java
public void setDashing(boolean p_251380_)
```

**Parameters:**

- `p_251380_` (`boolean`)

**Returns:** `public void`

### handleStartJump

```java
public void handleStartJump(int p_249968_)
```

**Parameters:**

- `p_249968_` (`int`)

### handleStopJump

```java
public void handleStopJump()
```

### getJumpCooldown

```java
public int getJumpCooldown()
```

**Returns:** `int`

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
protected SoundEvent getHurtSound(DamageSource p_250052_)
```

**Parameters:**

- `p_250052_` (`DamageSource`)

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_252056_, BlockState p_251457_)
```

**Parameters:**

- `p_252056_` (`BlockPos`)
- `p_251457_` (`BlockState`)

### isFood

```java
public boolean isFood(ItemStack p_248671_)
```

**Parameters:**

- `p_248671_` (`ItemStack`)

**Returns:** `boolean`

### mobInteract

```java
public InteractionResult mobInteract(Player p_249032_, InteractionHand p_251004_)
```

**Parameters:**

- `p_249032_` (`Player`)
- `p_251004_` (`InteractionHand`)

**Returns:** `InteractionResult`

### handleLeashAtDistance

```java
public boolean handleLeashAtDistance(Entity p_352419_, float p_352358_)
```

**Parameters:**

- `p_352419_` (`Entity`)
- `p_352358_` (`float`)

**Returns:** `boolean`

### canCamelChangePose

```java
public boolean canCamelChangePose()
```

**Returns:** `public boolean`

### handleEating

```java
protected boolean handleEating(Player p_249923_, ItemStack p_248995_)
```

**Parameters:**

- `p_249923_` (`Player`)
- `p_248995_` (`ItemStack`)

**Returns:** `boolean`

### canPerformRearing

```java
protected boolean canPerformRearing()
```

**Returns:** `boolean`

### canMate

```java
public boolean canMate(Animal p_251650_)
```

**Parameters:**

- `p_251650_` (`Animal`)

**Returns:** `boolean`

### getBreedOffspring

```java
public Camel getBreedOffspring(ServerLevel p_251227_, AgeableMob p_251047_)
```

**Parameters:**

- `p_251227_` (`ServerLevel`)
- `p_251047_` (`AgeableMob`)

**Returns:** `Camel`

### getEatingSound

```java
protected SoundEvent getEatingSound()
```

**Returns:** `SoundEvent`

### actuallyHurt

```java
protected void actuallyHurt(DamageSource p_250410_, float p_251451_)
```

**Parameters:**

- `p_250410_` (`DamageSource`)
- `p_251451_` (`float`)

### getPassengerAttachmentPoint

```java
protected Vec3 getPassengerAttachmentPoint(Entity p_295101_, EntityDimensions p_294765_, float p_294716_)
```

**Parameters:**

- `p_295101_` (`Entity`)
- `p_294765_` (`EntityDimensions`)
- `p_294716_` (`float`)

**Returns:** `Vec3`

### getAgeScale

```java
public float getAgeScale()
```

**Returns:** `float`

### getBodyAnchorAnimationYOffset

```java
private double getBodyAnchorAnimationYOffset(boolean p_249228_, float p_251763_, EntityDimensions p_296157_, float p_296299_)
```

**Parameters:**

- `p_249228_` (`boolean`)
- `p_251763_` (`float`)
- `p_296157_` (`EntityDimensions`)
- `p_296299_` (`float`)

**Returns:** `private double`

### getLeashOffset

```java
public Vec3 getLeashOffset(float p_251477_)
```

**Parameters:**

- `p_251477_` (`float`)

**Returns:** `Vec3`

### getMaxHeadYRot

```java
public int getMaxHeadYRot()
```

**Returns:** `int`

### canAddPassenger

```java
protected boolean canAddPassenger(Entity p_248594_)
```

**Parameters:**

- `p_248594_` (`Entity`)

**Returns:** `boolean`

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### isCamelSitting

```java
public boolean isCamelSitting()
```

**Returns:** `public boolean`

### isCamelVisuallySitting

```java
public boolean isCamelVisuallySitting()
```

**Returns:** `public boolean`

### isInPoseTransition

```java
public boolean isInPoseTransition()
```

**Returns:** `public boolean`

### isVisuallySittingDown

```java
private boolean isVisuallySittingDown()
```

**Returns:** `private boolean`

### sitDown

```java
public void sitDown()
```

**Returns:** `public void`

### standUp

```java
public void standUp()
```

**Returns:** `public void`

### standUpInstantly

```java
public void standUpInstantly()
```

**Returns:** `public void`

### resetLastPoseChangeTick

```java
public void resetLastPoseChangeTick(long p_248642_)
```

**Parameters:**

- `p_248642_` (`long`)

### resetLastPoseChangeTickToFullStand

```java
private void resetLastPoseChangeTickToFullStand(long p_265447_)
```

**Parameters:**

- `p_265447_` (`long`)

**Returns:** `private void`

### getPoseTime

```java
public long getPoseTime()
```

**Returns:** `public long`

### getSaddleSoundEvent

```java
public SoundEvent getSaddleSoundEvent()
```

**Returns:** `SoundEvent`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_252215_)
```

**Parameters:**

- `p_252215_` (`EntityDataAccessor<?>`)

### isTamed

```java
public boolean isTamed()
```

**Returns:** `boolean`

### openCustomInventoryScreen

```java
public void openCustomInventoryScreen(Player p_248613_)
```

**Parameters:**

- `p_248613_` (`Player`)

### createBodyControl

```java
protected BodyRotationControl createBodyControl()
```

**Returns:** `BodyRotationControl`

### CamelBodyRotationControl

```java
public CamelBodyRotationControl(Camel p_248635_)
```

**Parameters:**

- `p_248635_` (`Camel`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### clientTick

```java
public void clientTick()
```

### CamelLookControl

```java
 CamelLookControl()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### tick

```java
public void tick()
```

### CamelMoveControl

```java
public CamelMoveControl()
```

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
