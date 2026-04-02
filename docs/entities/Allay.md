# Allay

**Package:** `net.minecraft.world.entity.animal.allay`
**Type:** class
**Extends:** `PathfinderMob`
**Implements:** `InventoryCarrier`, `VibrationSystem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SENSOR_TYPES` | `ImmutableList<SensorType<? extends Sensor<? super Allay>>>` |  |
| `MEMORY_TYPES` | `ImmutableList<MemoryModuleType<?>>` |  |
| `THROW_SOUND_PITCHES` | `ImmutableList<Float>` |  |

## Methods

### Allay

```java
public Allay(EntityType<? extends Allay> p_218310_, Level p_218311_)
```

**Parameters:**

- `p_218310_` (`EntityType<? extends Allay>`)
- `p_218311_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### brainProvider

```java
protected Brain.Provider<Allay> brainProvider()
```

**Returns:** `Brain.Provider<Allay>`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_218344_)
```

**Parameters:**

- `p_218344_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### getBrain

```java
public Brain<Allay> getBrain()
```

**Returns:** `Brain<Allay>`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### createNavigation

```java
protected PathNavigation createNavigation(Level p_218342_)
```

**Parameters:**

- `p_218342_` (`Level`)

**Returns:** `PathNavigation`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326380_)
```

**Parameters:**

- `p_326380_` (`SynchedEntityData.Builder`)

### travel

```java
public void travel(Vec3 p_218382_)
```

**Parameters:**

- `p_218382_` (`Vec3`)

### hurt

```java
public boolean hurt(DamageSource p_218339_, float p_218340_)
```

**Parameters:**

- `p_218339_` (`DamageSource`)
- `p_218340_` (`float`)

**Returns:** `boolean`

### playStepSound

```java
protected void playStepSound(BlockPos p_218364_, BlockState p_218365_)
```

**Parameters:**

- `p_218364_` (`BlockPos`)
- `p_218365_` (`BlockState`)

### checkFallDamage

```java
protected void checkFallDamage(double p_218316_, boolean p_218317_, BlockState p_218318_, BlockPos p_218319_)
```

**Parameters:**

- `p_218316_` (`double`)
- `p_218317_` (`boolean`)
- `p_218318_` (`BlockState`)
- `p_218319_` (`BlockPos`)

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_218369_)
```

**Parameters:**

- `p_218369_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getSoundVolume

```java
protected float getSoundVolume()
```

**Returns:** `float`

### customServerAiStep

```java
protected void customServerAiStep()
```

### aiStep

```java
public void aiStep()
```

### tick

```java
public void tick()
```

### canPickUpLoot

```java
public boolean canPickUpLoot()
```

**Returns:** `boolean`

### hasItemInHand

```java
public boolean hasItemInHand()
```

**Returns:** `public boolean`

### canTakeItem

```java
public boolean canTakeItem(ItemStack p_218380_)
```

**Parameters:**

- `p_218380_` (`ItemStack`)

**Returns:** `boolean`

### isOnPickupCooldown

```java
private boolean isOnPickupCooldown()
```

**Returns:** `private boolean`

### mobInteract

```java
protected InteractionResult mobInteract(Player p_218361_, InteractionHand p_218362_)
```

**Parameters:**

- `p_218361_` (`Player`)
- `p_218362_` (`InteractionHand`)

**Returns:** `InteractionResult`

### setJukeboxPlaying

```java
public void setJukeboxPlaying(BlockPos p_240102_, boolean p_240103_)
```

**Parameters:**

- `p_240102_` (`BlockPos`)
- `p_240103_` (`boolean`)

**Returns:** `public void`

### getInventory

```java
public SimpleContainer getInventory()
```

**Returns:** `SimpleContainer`

### getPickupReach

```java
protected Vec3i getPickupReach()
```

**Returns:** `Vec3i`

### wantsToPickUp

```java
public boolean wantsToPickUp(ItemStack p_218387_)
```

**Parameters:**

- `p_218387_` (`ItemStack`)

**Returns:** `boolean`

### allayConsidersItemEqual

```java
private boolean allayConsidersItemEqual(ItemStack p_252278_, ItemStack p_250405_)
```

**Parameters:**

- `p_252278_` (`ItemStack`)
- `p_250405_` (`ItemStack`)

**Returns:** `private boolean`

### hasNonMatchingPotion

```java
private boolean hasNonMatchingPotion(ItemStack p_248762_, ItemStack p_250839_)
```

**Parameters:**

- `p_248762_` (`ItemStack`)
- `p_250839_` (`ItemStack`)

**Returns:** `private boolean`

### pickUpItem

```java
protected void pickUpItem(ItemEntity p_218359_)
```

**Parameters:**

- `p_218359_` (`ItemEntity`)

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### isFlapping

```java
public boolean isFlapping()
```

**Returns:** `boolean`

### updateDynamicGameEventListener

```java
public void updateDynamicGameEventListener(BiConsumer<DynamicGameEventListener<?>, ServerLevel> p_218348_)
```

**Parameters:**

- `p_218348_` (`BiConsumer<DynamicGameEventListener<?>, ServerLevel>`)

### isDancing

```java
public boolean isDancing()
```

**Returns:** `public boolean`

### setDancing

```java
public void setDancing(boolean p_240178_)
```

**Parameters:**

- `p_240178_` (`boolean`)

**Returns:** `public void`

### shouldStopDancing

```java
private boolean shouldStopDancing()
```

**Returns:** `private boolean`

### getHoldingItemAnimationProgress

```java
public float getHoldingItemAnimationProgress(float p_218395_)
```

**Parameters:**

- `p_218395_` (`float`)

**Returns:** `public float`

### isSpinning

```java
public boolean isSpinning()
```

**Returns:** `public boolean`

### getSpinningProgress

```java
public float getSpinningProgress(float p_240057_)
```

**Parameters:**

- `p_240057_` (`float`)

**Returns:** `public float`

### equipmentHasChanged

```java
public boolean equipmentHasChanged(ItemStack p_249825_, ItemStack p_251595_)
```

**Parameters:**

- `p_249825_` (`ItemStack`)
- `p_251595_` (`ItemStack`)

**Returns:** `boolean`

### dropEquipment

```java
protected void dropEquipment()
```

### removeWhenFarAway

```java
public boolean removeWhenFarAway(double p_218384_)
```

**Parameters:**

- `p_218384_` (`double`)

**Returns:** `boolean`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_218367_)
```

**Parameters:**

- `p_218367_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_218350_)
```

**Parameters:**

- `p_218350_` (`CompoundTag`)

### shouldStayCloseToLeashHolder

```java
protected boolean shouldStayCloseToLeashHolder()
```

**Returns:** `boolean`

### updateDuplicationCooldown

```java
private void updateDuplicationCooldown()
```

**Returns:** `private void`

### isDuplicationItem

```java
private boolean isDuplicationItem(ItemStack p_239736_)
```

**Parameters:**

- `p_239736_` (`ItemStack`)

**Returns:** `private boolean`

### duplicateAllay

```java
private void duplicateAllay()
```

**Returns:** `private void`

### resetDuplicationCooldown

```java
private void resetDuplicationCooldown()
```

**Returns:** `private void`

### canDuplicate

```java
private boolean canDuplicate()
```

**Returns:** `private boolean`

### removeInteractionItem

```java
private void removeInteractionItem(Player p_239359_, ItemStack p_239360_)
```

**Parameters:**

- `p_239359_` (`Player`)
- `p_239360_` (`ItemStack`)

**Returns:** `private void`

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_239347_)
```

**Parameters:**

- `p_239347_` (`byte`)

### spawnHeartParticle

```java
private void spawnHeartParticle()
```

**Returns:** `private void`

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

### JukeboxListener

```java
public JukeboxListener(PositionSource p_239448_, int p_239449_)
```

**Parameters:**

- `p_239448_` (`PositionSource`)
- `p_239449_` (`int`)

**Returns:** `public`

### getListenerSource

```java
public PositionSource getListenerSource()
```

**Returns:** `PositionSource`

### getListenerRadius

```java
public int getListenerRadius()
```

**Returns:** `int`

### handleGameEvent

```java
public boolean handleGameEvent(ServerLevel p_250009_, Holder<GameEvent> p_316687_, GameEvent.Context p_249478_, Vec3 p_250852_)
```

**Parameters:**

- `p_250009_` (`ServerLevel`)
- `p_316687_` (`Holder<GameEvent>`)
- `p_249478_` (`GameEvent.Context`)
- `p_250852_` (`Vec3`)

**Returns:** `boolean`

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

### canReceiveVibration

```java
public boolean canReceiveVibration(ServerLevel p_282038_, BlockPos p_283385_, Holder<GameEvent> p_316820_, GameEvent.Context p_282208_)
```

**Parameters:**

- `p_282038_` (`ServerLevel`)
- `p_283385_` (`BlockPos`)
- `p_316820_` (`Holder<GameEvent>`)
- `p_282208_` (`GameEvent.Context`)

**Returns:** `boolean`

### onReceiveVibration

```java
public void onReceiveVibration(ServerLevel p_281422_, BlockPos p_281449_, Holder<GameEvent> p_316630_, Entity p_281794_, Entity p_281864_, float p_281642_)
```

**Parameters:**

- `p_281422_` (`ServerLevel`)
- `p_281449_` (`BlockPos`)
- `p_316630_` (`Holder<GameEvent>`)
- `p_281794_` (`Entity`)
- `p_281864_` (`Entity`)
- `p_281642_` (`float`)

### getListenableEvents

```java
public TagKey<GameEvent> getListenableEvents()
```

**Returns:** `TagKey<GameEvent>`
