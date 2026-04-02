# Shulker

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `AbstractGolem`
**Implements:** `VariantHolder<Optional<DyeColor>>`, `Enemy`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DATA_ATTACH_FACE_ID` | `EntityDataAccessor<Direction>` |  |
| `DATA_PEEK_ID` | `EntityDataAccessor<Byte>` |  |
| `DATA_COLOR_ID` | `EntityDataAccessor<Byte>` |  |

## Methods

### Shulker

```java
public Shulker(EntityType<? extends Shulker> p_33404_, Level p_33405_)
```

**Parameters:**

- `p_33404_` (`EntityType<? extends Shulker>`)
- `p_33405_` (`Level`)

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

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### getSoundSource

```java
public SoundSource getSoundSource()
```

**Returns:** `SoundSource`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### playAmbientSound

```java
public void playAmbientSound()
```

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_33457_)
```

**Parameters:**

- `p_33457_` (`DamageSource`)

**Returns:** `SoundEvent`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326069_)
```

**Parameters:**

- `p_326069_` (`SynchedEntityData.Builder`)

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### createBodyControl

```java
protected BodyRotationControl createBodyControl()
```

**Returns:** `BodyRotationControl`

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_33432_)
```

**Parameters:**

- `p_33432_` (`CompoundTag`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_33443_)
```

**Parameters:**

- `p_33443_` (`CompoundTag`)

### tick

```java
public void tick()
```

### findNewAttachment

```java
private void findNewAttachment()
```

**Returns:** `private void`

### makeBoundingBox

```java
protected AABB makeBoundingBox()
```

**Returns:** `AABB`

### getPhysicalPeek

```java
private static float getPhysicalPeek(float p_149769_)
```

**Parameters:**

- `p_149769_` (`float`)

**Returns:** `private static float`

### updatePeekAmount

```java
private boolean updatePeekAmount()
```

**Returns:** `private boolean`

### onPeekAmountChange

```java
private void onPeekAmountChange()
```

**Returns:** `private void`

### getProgressAabb

```java
public static AABB getProgressAabb(float p_149792_, Direction p_149791_, float p_320551_)
```

**Parameters:**

- `p_149792_` (`float`)
- `p_149791_` (`Direction`)
- `p_320551_` (`float`)

**Returns:** `public static AABB`

### getProgressDeltaAabb

```java
return getProgressDeltaAabb()
```

**Returns:** `return`

### getProgressDeltaAabb

```java
public static AABB getProgressDeltaAabb(float p_149795_, Direction p_149794_, float p_149796_, float p_320876_)
```

**Parameters:**

- `p_149795_` (`float`)
- `p_149794_` (`Direction`)
- `p_149796_` (`float`)
- `p_320876_` (`float`)

**Returns:** `public static AABB`

### startRiding

```java
public boolean startRiding(Entity p_149773_, boolean p_149774_)
```

**Parameters:**

- `p_149773_` (`Entity`)
- `p_149774_` (`boolean`)

**Returns:** `boolean`

### stopRiding

```java
public void stopRiding()
```

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_149780_, DifficultyInstance p_149781_, MobSpawnType p_149782_, SpawnGroupData p_149783_)
```

**Parameters:**

- `p_149780_` (`ServerLevelAccessor`)
- `p_149781_` (`DifficultyInstance`)
- `p_149782_` (`MobSpawnType`)
- `p_149783_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### move

```java
public void move(MoverType p_33424_, Vec3 p_33425_)
```

**Parameters:**

- `p_33424_` (`MoverType`)
- `p_33425_` (`Vec3`)

### getDeltaMovement

```java
public Vec3 getDeltaMovement()
```

**Returns:** `Vec3`

### setDeltaMovement

```java
public void setDeltaMovement(Vec3 p_149804_)
```

**Parameters:**

- `p_149804_` (`Vec3`)

### setPos

```java
public void setPos(double p_33449_, double p_33450_, double p_33451_)
```

**Parameters:**

- `p_33449_` (`double`)
- `p_33450_` (`double`)
- `p_33451_` (`double`)

### findAttachableSurface

```java
protected Direction findAttachableSurface(BlockPos p_149811_)
```

**Parameters:**

- `p_149811_` (`BlockPos`)

**Returns:** `Direction`

### canStayAt

```java
boolean canStayAt(BlockPos p_149786_, Direction p_149787_)
```

**Parameters:**

- `p_149786_` (`BlockPos`)
- `p_149787_` (`Direction`)

**Returns:** `boolean`

### isPositionBlocked

```java
private boolean isPositionBlocked(BlockPos p_149813_)
```

**Parameters:**

- `p_149813_` (`BlockPos`)

**Returns:** `private boolean`

### teleportSomewhere

```java
protected boolean teleportSomewhere()
```

**Returns:** `protected boolean`

### lerpTo

```java
public void lerpTo(double p_33411_, double p_33412_, double p_33413_, float p_33414_, float p_33415_, int p_33416_)
```

**Parameters:**

- `p_33411_` (`double`)
- `p_33412_` (`double`)
- `p_33413_` (`double`)
- `p_33414_` (`float`)
- `p_33415_` (`float`)
- `p_33416_` (`int`)

### hurt

```java
public boolean hurt(DamageSource p_33421_, float p_33422_)
```

**Parameters:**

- `p_33421_` (`DamageSource`)
- `p_33422_` (`float`)

**Returns:** `boolean`

### isClosed

```java
private boolean isClosed()
```

**Returns:** `private boolean`

### hitByShulkerBullet

```java
private void hitByShulkerBullet()
```

**Returns:** `private void`

### canBeCollidedWith

```java
public boolean canBeCollidedWith()
```

**Returns:** `boolean`

### getAttachFace

```java
public Direction getAttachFace()
```

**Returns:** `public Direction`

### setAttachFace

```java
private void setAttachFace(Direction p_149789_)
```

**Parameters:**

- `p_149789_` (`Direction`)

**Returns:** `private void`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_33434_)
```

**Parameters:**

- `p_33434_` (`EntityDataAccessor<?>`)

### getRawPeekAmount

```java
private int getRawPeekAmount()
```

**Returns:** `private int`

### setRawPeekAmount

```java
void setRawPeekAmount(int p_33419_)
```

**Parameters:**

- `p_33419_` (`int`)

### getClientPeekAmount

```java
public float getClientPeekAmount(float p_33481_)
```

**Parameters:**

- `p_33481_` (`float`)

**Returns:** `public float`

### recreateFromPacket

```java
public void recreateFromPacket(ClientboundAddEntityPacket p_219067_)
```

**Parameters:**

- `p_219067_` (`ClientboundAddEntityPacket`)

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

### push

```java
public void push(Entity p_33474_)
```

**Parameters:**

- `p_33474_` (`Entity`)

### getRenderPosition

```java
public Optional<Vec3> getRenderPosition(float p_149767_)
```

**Parameters:**

- `p_149767_` (`float`)

**Returns:** `public Optional<Vec3>`

### sanitizeScale

```java
protected float sanitizeScale(float p_320641_)
```

**Parameters:**

- `p_320641_` (`float`)

**Returns:** `float`

### setVariant

```java
public void setVariant(Optional<DyeColor> p_262609_)
```

**Parameters:**

- `p_262609_` (`Optional<DyeColor>`)

**Returns:** `public void`

### getVariant

```java
public Optional<DyeColor> getVariant()
```

**Returns:** `public Optional<DyeColor>`

### getColor

```java
public DyeColor getColor()
```

**Returns:** `DyeColor`

### ShulkerAttackGoal

```java
public ShulkerAttackGoal()
```

**Returns:** `public`

### canUse

```java
public boolean canUse()
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

### requiresUpdateEveryTick

```java
public boolean requiresUpdateEveryTick()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### ShulkerBodyRotationControl

```java
public ShulkerBodyRotationControl(Mob p_149816_)
```

**Parameters:**

- `p_149816_` (`Mob`)

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

### ShulkerDefenseAttackGoal

```java
public ShulkerDefenseAttackGoal(Shulker p_33496_)
```

**Parameters:**

- `p_33496_` (`Shulker`)

**Returns:** `public`

### super

```java
 super(p_33501_ -> p_33501_ instanceof Enemy)
```

**Parameters:**

- `Enemy` (`p_33501_ -> p_33501_ instanceof`)

**Returns:** ``

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### getTargetSearchArea

```java
protected AABB getTargetSearchArea(double p_33499_)
```

**Parameters:**

- `p_33499_` (`double`)

**Returns:** `AABB`

### ShulkerLookControl

```java
public ShulkerLookControl(Mob p_149820_)
```

**Parameters:**

- `p_149820_` (`Mob`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### clampHeadRotationToBody

```java
protected void clampHeadRotationToBody()
```

### getYRotD

```java
protected Optional<Float> getYRotD()
```

**Returns:** `Optional<Float>`

### getXRotD

```java
protected Optional<Float> getXRotD()
```

**Returns:** `Optional<Float>`

### ShulkerNearestAttackGoal

```java
public ShulkerNearestAttackGoal(Shulker p_33505_)
```

**Parameters:**

- `p_33505_` (`Shulker`)

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

### getTargetSearchArea

```java
protected AABB getTargetSearchArea(double p_33508_)
```

**Parameters:**

- `p_33508_` (`double`)

**Returns:** `AABB`

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

### tick

```java
public void tick()
```
