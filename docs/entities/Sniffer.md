# Sniffer

**Package:** `net.minecraft.world.entity.animal.sniffer`
**Type:** class
**Extends:** `Animal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `feelingHappyAnimationState` | `AnimationState` |  |
| `scentingAnimationState` | `AnimationState` |  |
| `sniffingAnimationState` | `AnimationState` |  |
| `diggingAnimationState` | `AnimationState` |  |
| `risingAnimationState` | `AnimationState` |  |

## Methods

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### Sniffer

```java
public Sniffer(EntityType<? extends Animal> p_273717_, Level p_273562_)
```

**Parameters:**

- `p_273717_` (`EntityType<? extends Animal>`)
- `p_273562_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326082_)
```

**Parameters:**

- `p_326082_` (`SynchedEntityData.Builder`)

### onPathfindingStart

```java
public void onPathfindingStart()
```

### onPathfindingDone

```java
public void onPathfindingDone()
```

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316489_)
```

**Parameters:**

- `p_316489_` (`Pose`)

**Returns:** `EntityDimensions`

### isSearching

```java
public boolean isSearching()
```

**Returns:** `public boolean`

### isTempted

```java
public boolean isTempted()
```

**Returns:** `public boolean`

### canSniff

```java
public boolean canSniff()
```

**Returns:** `public boolean`

### canPlayDiggingSound

```java
public boolean canPlayDiggingSound()
```

**Returns:** `public boolean`

### getHeadBlock

```java
private BlockPos getHeadBlock()
```

**Returns:** `private BlockPos`

### getHeadPosition

```java
private Vec3 getHeadPosition()
```

**Returns:** `private Vec3`

### getState

```java
private Sniffer.State getState()
```

**Returns:** `private Sniffer.State`

### setState

```java
private Sniffer setState(Sniffer.State p_273359_)
```

**Parameters:**

- `p_273359_` (`Sniffer.State`)

**Returns:** `private Sniffer`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_272936_)
```

**Parameters:**

- `p_272936_` (`EntityDataAccessor<?>`)

### resetAnimations

```java
private void resetAnimations()
```

**Returns:** `private void`

### transitionTo

```java
public Sniffer transitionTo(Sniffer.State p_273096_)
```

**Parameters:**

- `p_273096_` (`Sniffer.State`)

**Returns:** `public Sniffer`

### onScentingStart

```java
private Sniffer onScentingStart()
```

**Returns:** `private Sniffer`

### onDiggingStart

```java
private Sniffer onDiggingStart()
```

**Returns:** `private Sniffer`

### onDiggingComplete

```java
public Sniffer onDiggingComplete(boolean p_272677_)
```

**Parameters:**

- `p_272677_` (`boolean`)

**Returns:** `public Sniffer`

### calculateDigPosition

```java
Optional<BlockPos> calculateDigPosition()
```

**Returns:** `Optional<BlockPos>`

### canDig

```java
boolean canDig()
```

**Returns:** `boolean`

### canDig

```java
private boolean canDig(BlockPos p_272757_)
```

**Parameters:**

- `p_272757_` (`BlockPos`)

**Returns:** `private boolean`

### dropSeed

```java
private void dropSeed()
```

**Returns:** `private void`

### emitDiggingParticles

```java
private Sniffer emitDiggingParticles(AnimationState p_273528_)
```

**Parameters:**

- `p_273528_` (`AnimationState`)

**Returns:** `private Sniffer`

### storeExploredPosition

```java
private Sniffer storeExploredPosition(BlockPos p_273015_)
```

**Parameters:**

- `p_273015_` (`BlockPos`)

**Returns:** `private Sniffer`

### getExploredPositions

```java
private Stream<GlobalPos> getExploredPositions()
```

**Returns:** `private Stream<GlobalPos>`

### jumpFromGround

```java
public void jumpFromGround()
```

### spawnChildFromBreeding

```java
public void spawnChildFromBreeding(ServerLevel p_277923_, Animal p_277857_)
```

**Parameters:**

- `p_277923_` (`ServerLevel`)
- `p_277857_` (`Animal`)

### die

```java
public void die(DamageSource p_277689_)
```

**Parameters:**

- `p_277689_` (`DamageSource`)

### tick

```java
public void tick()
```

### mobInteract

```java
public InteractionResult mobInteract(Player p_273046_, InteractionHand p_272687_)
```

**Parameters:**

- `p_273046_` (`Player`)
- `p_272687_` (`InteractionHand`)

**Returns:** `InteractionResult`

### playSearchingSound

```java
private void playSearchingSound()
```

**Returns:** `private void`

### playStepSound

```java
protected void playStepSound(BlockPos p_272953_, BlockState p_273729_)
```

**Parameters:**

- `p_272953_` (`BlockPos`)
- `p_273729_` (`BlockState`)

### getEatingSound

```java
public SoundEvent getEatingSound(ItemStack p_272747_)
```

**Parameters:**

- `p_272747_` (`ItemStack`)

**Returns:** `SoundEvent`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_273718_)
```

**Parameters:**

- `p_273718_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getMaxHeadYRot

```java
public int getMaxHeadYRot()
```

**Returns:** `int`

### setBaby

```java
public void setBaby(boolean p_272995_)
```

**Parameters:**

- `p_272995_` (`boolean`)

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_273401_, AgeableMob p_273310_)
```

**Parameters:**

- `p_273401_` (`ServerLevel`)
- `p_273310_` (`AgeableMob`)

**Returns:** `AgeableMob`

### canMate

```java
public boolean canMate(Animal p_272966_)
```

**Parameters:**

- `p_272966_` (`Animal`)

**Returns:** `boolean`

### getBoundingBoxForCulling

```java
public AABB getBoundingBoxForCulling()
```

**Returns:** `AABB`

### isFood

```java
public boolean isFood(ItemStack p_273659_)
```

**Parameters:**

- `p_273659_` (`ItemStack`)

**Returns:** `boolean`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_273174_)
```

**Parameters:**

- `p_273174_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### getBrain

```java
public Brain<Sniffer> getBrain()
```

**Returns:** `Brain<Sniffer>`

### brainProvider

```java
protected Brain.Provider<Sniffer> brainProvider()
```

**Returns:** `Brain.Provider<Sniffer>`

### customServerAiStep

```java
protected void customServerAiStep()
```

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### RISING

```java
, RISING()
```

**Returns:** `,`

### State

```java
private State(int p_319911_)
```

**Parameters:**

- `p_319911_` (`int`)

**Returns:** `private`

### id

```java
public int id()
```

**Returns:** `public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `State` | enum |  |
