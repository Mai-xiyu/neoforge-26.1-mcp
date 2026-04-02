# Warden

**Package:** `net.minecraft.world.entity.monster.warden`
**Type:** class
**Extends:** `Monster`
**Implements:** `VibrationSystem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `roarAnimationState` | `AnimationState` |  |
| `sniffAnimationState` | `AnimationState` |  |
| `emergeAnimationState` | `AnimationState` |  |
| `diggingAnimationState` | `AnimationState` |  |
| `attackAnimationState` | `AnimationState` |  |
| `sonicBoomAnimationState` | `AnimationState` |  |

## Methods

### Warden

```java
public Warden(EntityType<? extends Monster> p_219350_, Level p_219351_)
```

**Parameters:**

- `p_219350_` (`EntityType<? extends Monster>`)
- `p_219351_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getAddEntityPacket

```java
public Packet<ClientGamePacketListener> getAddEntityPacket(ServerEntity p_352154_)
```

**Parameters:**

- `p_352154_` (`ServerEntity`)

**Returns:** `Packet<ClientGamePacketListener>`

### recreateFromPacket

```java
public void recreateFromPacket(ClientboundAddEntityPacket p_219420_)
```

**Parameters:**

- `p_219420_` (`ClientboundAddEntityPacket`)

### checkSpawnObstruction

```java
public boolean checkSpawnObstruction(LevelReader p_219398_)
```

**Parameters:**

- `p_219398_` (`LevelReader`)

**Returns:** `boolean`

### getWalkTargetValue

```java
public float getWalkTargetValue(BlockPos p_219410_, LevelReader p_219411_)
```

**Parameters:**

- `p_219410_` (`BlockPos`)
- `p_219411_` (`LevelReader`)

**Returns:** `float`

### isInvulnerableTo

```java
public boolean isInvulnerableTo(DamageSource p_219427_)
```

**Parameters:**

- `p_219427_` (`DamageSource`)

**Returns:** `boolean`

### isDiggingOrEmerging

```java
boolean isDiggingOrEmerging()
```

**Returns:** `boolean`

### canRide

```java
protected boolean canRide(Entity p_219462_)
```

**Parameters:**

- `p_219462_` (`Entity`)

**Returns:** `boolean`

### canDisableShield

```java
public boolean canDisableShield()
```

**Returns:** `boolean`

### nextStep

```java
protected float nextStep()
```

**Returns:** `float`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### dampensVibrations

```java
public boolean dampensVibrations()
```

**Returns:** `boolean`

### getSoundVolume

```java
protected float getSoundVolume()
```

**Returns:** `float`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_219440_)
```

**Parameters:**

- `p_219440_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playStepSound

```java
protected void playStepSound(BlockPos p_219431_, BlockState p_219432_)
```

**Parameters:**

- `p_219431_` (`BlockPos`)
- `p_219432_` (`BlockState`)

### doHurtTarget

```java
public boolean doHurtTarget(Entity p_219472_)
```

**Parameters:**

- `p_219472_` (`Entity`)

**Returns:** `boolean`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326277_)
```

**Parameters:**

- `p_326277_` (`SynchedEntityData.Builder`)

### getClientAngerLevel

```java
public int getClientAngerLevel()
```

**Returns:** `public int`

### syncClientAngerLevel

```java
private void syncClientAngerLevel()
```

**Returns:** `private void`

### tick

```java
public void tick()
```

### customServerAiStep

```java
protected void customServerAiStep()
```

### handleEntityEvent

```java
public void handleEntityEvent(byte p_219360_)
```

**Parameters:**

- `p_219360_` (`byte`)

### getHeartBeatDelay

```java
private int getHeartBeatDelay()
```

**Returns:** `private int`

### getTendrilAnimation

```java
public float getTendrilAnimation(float p_219468_)
```

**Parameters:**

- `p_219468_` (`float`)

**Returns:** `public float`

### getHeartAnimation

```java
public float getHeartAnimation(float p_219470_)
```

**Parameters:**

- `p_219470_` (`float`)

**Returns:** `public float`

### clientDiggingParticles

```java
private void clientDiggingParticles(AnimationState p_219384_)
```

**Parameters:**

- `p_219384_` (`AnimationState`)

**Returns:** `private void`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_219422_)
```

**Parameters:**

- `p_219422_` (`EntityDataAccessor<?>`)

### ignoreExplosion

```java
public boolean ignoreExplosion(Explosion p_312317_)
```

**Parameters:**

- `p_312317_` (`Explosion`)

**Returns:** `boolean`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_219406_)
```

**Parameters:**

- `p_219406_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### getBrain

```java
public Brain<Warden> getBrain()
```

**Returns:** `Brain<Warden>`

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### updateDynamicGameEventListener

```java
public void updateDynamicGameEventListener(BiConsumer<DynamicGameEventListener<?>, ServerLevel> p_219413_)
```

**Parameters:**

- `p_219413_` (`BiConsumer<DynamicGameEventListener<?>, ServerLevel>`)

### canTargetEntity

```java
public boolean canTargetEntity(Entity p_219386_)
```

**Parameters:**

- `p_219386_` (`Entity`)

**Returns:** `boolean`

### applyDarknessAround

```java
public static void applyDarknessAround(ServerLevel p_219376_, Vec3 p_219377_, Entity p_219378_, int p_219379_)
```

**Parameters:**

- `p_219376_` (`ServerLevel`)
- `p_219377_` (`Vec3`)
- `p_219378_` (`Entity`)
- `p_219379_` (`int`)

**Returns:** `public static void`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_219434_)
```

**Parameters:**

- `p_219434_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_219415_)
```

**Parameters:**

- `p_219415_` (`CompoundTag`)

### playListeningSound

```java
private void playListeningSound()
```

**Returns:** `private void`

### getAngerLevel

```java
public AngerLevel getAngerLevel()
```

**Returns:** `public AngerLevel`

### getActiveAnger

```java
private int getActiveAnger()
```

**Returns:** `private int`

### clearAnger

```java
public void clearAnger(Entity p_219429_)
```

**Parameters:**

- `p_219429_` (`Entity`)

**Returns:** `public void`

### increaseAngerAt

```java
public void increaseAngerAt(Entity p_219442_)
```

**Parameters:**

- `p_219442_` (`Entity`)

**Returns:** `public void`

### increaseAngerAt

```java
public void increaseAngerAt(Entity p_219388_, int p_219389_, boolean p_219390_)
```

**Parameters:**

- `p_219388_` (`Entity`)
- `p_219389_` (`int`)
- `p_219390_` (`boolean`)

### getEntityAngryAt

```java
public Optional<LivingEntity> getEntityAngryAt()
```

**Returns:** `public Optional<LivingEntity>`

### getTarget

```java
public LivingEntity getTarget()
```

**Returns:** `LivingEntity`

### removeWhenFarAway

```java
public boolean removeWhenFarAway(double p_219457_)
```

**Parameters:**

- `p_219457_` (`double`)

**Returns:** `boolean`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_219400_, DifficultyInstance p_219401_, MobSpawnType p_219402_, SpawnGroupData p_219403_)
```

**Parameters:**

- `p_219400_` (`ServerLevelAccessor`)
- `p_219401_` (`DifficultyInstance`)
- `p_219402_` (`MobSpawnType`)
- `p_219403_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### hurt

```java
public boolean hurt(DamageSource p_219381_, float p_219382_)
```

**Parameters:**

- `p_219381_` (`DamageSource`)
- `p_219382_` (`float`)

**Returns:** `boolean`

### setAttackTarget

```java
public void setAttackTarget(LivingEntity p_219460_)
```

**Parameters:**

- `p_219460_` (`LivingEntity`)

**Returns:** `public void`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316276_)
```

**Parameters:**

- `p_316276_` (`Pose`)

**Returns:** `EntityDimensions`

### isPushable

```java
public boolean isPushable()
```

**Returns:** `boolean`

### doPush

```java
protected void doPush(Entity p_219353_)
```

**Parameters:**

- `p_219353_` (`Entity`)

### getAngerManagement

```java
public AngerManagement getAngerManagement()
```

**Returns:** `AngerManagement`

### createNavigation

```java
protected PathNavigation createNavigation(Level p_219396_)
```

**Parameters:**

- `p_219396_` (`Level`)

**Returns:** `PathNavigation`

### GroundPathNavigation

```java
return new GroundPathNavigation()
```

**Returns:** `return new`

### createPathFinder

```java
protected PathFinder createPathFinder(int p_219479_)
```

**Parameters:**

- `p_219479_` (`int`)

**Returns:** `PathFinder`

### PathFinder

```java
return new PathFinder()
```

**Returns:** `return new`

### distance

```java
protected float distance(Node p_219486_, Node p_219487_)
```

**Parameters:**

- `p_219486_` (`Node`)
- `p_219487_` (`Node`)

**Returns:** `float`

### getVibrationData

```java
public VibrationSystem.Data getVibrationData()
```

**Returns:** `VibrationSystem.Data`

### getVibrationUser

```java
public VibrationSystem.User getVibrationUser()
```

**Returns:** `VibrationSystem.User`

### getListenerRadius

```java
public int getListenerRadius()
```

**Returns:** `int`

### getPositionSource

```java
public PositionSource getPositionSource()
```

**Returns:** `PositionSource`

### getListenableEvents

```java
public TagKey<GameEvent> getListenableEvents()
```

**Returns:** `TagKey<GameEvent>`

### canTriggerAvoidVibration

```java
public boolean canTriggerAvoidVibration()
```

**Returns:** `boolean`

### canReceiveVibration

```java
public boolean canReceiveVibration(ServerLevel p_282574_, BlockPos p_282323_, Holder<GameEvent> p_316784_, GameEvent.Context p_282515_)
```

**Parameters:**

- `p_282574_` (`ServerLevel`)
- `p_282323_` (`BlockPos`)
- `p_316784_` (`Holder<GameEvent>`)
- `p_282515_` (`GameEvent.Context`)

**Returns:** `boolean`

### onReceiveVibration

```java
public void onReceiveVibration(ServerLevel p_281325_, BlockPos p_282386_, Holder<GameEvent> p_316139_, Entity p_281438_, Entity p_282582_, float p_283699_)
```

**Parameters:**

- `p_281325_` (`ServerLevel`)
- `p_282386_` (`BlockPos`)
- `p_316139_` (`Holder<GameEvent>`)
- `p_281438_` (`Entity`)
- `p_282582_` (`Entity`)
- `p_283699_` (`float`)
