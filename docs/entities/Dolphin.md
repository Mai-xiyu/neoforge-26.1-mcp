# Dolphin

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `WaterAnimal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TOTAL_AIR_SUPPLY` | `int` |  |
| `ALLOWED_ITEMS` | `Predicate<ItemEntity>` |  |

## Methods

### Dolphin

```java
public Dolphin(EntityType<? extends Dolphin> p_28316_, Level p_28317_)
```

**Parameters:**

- `p_28316_` (`EntityType<? extends Dolphin>`)
- `p_28317_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_28332_, DifficultyInstance p_28333_, MobSpawnType p_28334_, SpawnGroupData p_28335_)
```

**Parameters:**

- `p_28332_` (`ServerLevelAccessor`)
- `p_28333_` (`DifficultyInstance`)
- `p_28334_` (`MobSpawnType`)
- `p_28335_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### handleAirSupply

```java
protected void handleAirSupply(int p_28326_)
```

**Parameters:**

- `p_28326_` (`int`)

### setTreasurePos

```java
public void setTreasurePos(BlockPos p_28385_)
```

**Parameters:**

- `p_28385_` (`BlockPos`)

**Returns:** `public void`

### getTreasurePos

```java
public BlockPos getTreasurePos()
```

**Returns:** `public BlockPos`

### gotFish

```java
public boolean gotFish()
```

**Returns:** `public boolean`

### setGotFish

```java
public void setGotFish(boolean p_28394_)
```

**Parameters:**

- `p_28394_` (`boolean`)

**Returns:** `public void`

### getMoistnessLevel

```java
public int getMoistnessLevel()
```

**Returns:** `public int`

### setMoisntessLevel

```java
public void setMoisntessLevel(int p_28344_)
```

**Parameters:**

- `p_28344_` (`int`)

**Returns:** `public void`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326152_)
```

**Parameters:**

- `p_326152_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_28364_)
```

**Parameters:**

- `p_28364_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_28340_)
```

**Parameters:**

- `p_28340_` (`CompoundTag`)

### registerGoals

```java
protected void registerGoals()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### createNavigation

```java
protected PathNavigation createNavigation(Level p_28362_)
```

**Parameters:**

- `p_28362_` (`Level`)

**Returns:** `PathNavigation`

### WaterBoundPathNavigation

```java
return new WaterBoundPathNavigation()
```

**Returns:** `return new`

### playAttackSound

```java
public void playAttackSound()
```

### getMaxAirSupply

```java
public int getMaxAirSupply()
```

**Returns:** `int`

### increaseAirSupply

```java
protected int increaseAirSupply(int p_28389_)
```

**Parameters:**

- `p_28389_` (`int`)

**Returns:** `int`

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

### canRide

```java
protected boolean canRide(Entity p_28391_)
```

**Parameters:**

- `p_28391_` (`Entity`)

**Returns:** `boolean`

### canTakeItem

```java
public boolean canTakeItem(ItemStack p_28376_)
```

**Parameters:**

- `p_28376_` (`ItemStack`)

**Returns:** `boolean`

### pickUpItem

```java
protected void pickUpItem(ItemEntity p_28357_)
```

**Parameters:**

- `p_28357_` (`ItemEntity`)

### tick

```java
public void tick()
```

### handleEntityEvent

```java
public void handleEntityEvent(byte p_28324_)
```

**Parameters:**

- `p_28324_` (`byte`)

### addParticlesAroundSelf

```java
private void addParticlesAroundSelf(ParticleOptions p_28338_)
```

**Parameters:**

- `p_28338_` (`ParticleOptions`)

**Returns:** `private void`

### mobInteract

```java
protected InteractionResult mobInteract(Player p_28359_, InteractionHand p_28360_)
```

**Parameters:**

- `p_28359_` (`Player`)
- `p_28360_` (`InteractionHand`)

**Returns:** `InteractionResult`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_28374_)
```

**Parameters:**

- `p_28374_` (`DamageSource`)

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

### closeToNextPos

```java
protected boolean closeToNextPos()
```

**Returns:** `protected boolean`

### travel

```java
public void travel(Vec3 p_28383_)
```

**Parameters:**

- `p_28383_` (`Vec3`)

### canBeLeashed

```java
public boolean canBeLeashed()
```

**Returns:** `boolean`

### DolphinSwimToTreasureGoal

```java
 DolphinSwimToTreasureGoal(Dolphin p_28402_)
```

**Parameters:**

- `p_28402_` (`Dolphin`)

**Returns:** ``

### isInterruptable

```java
public boolean isInterruptable()
```

**Returns:** `boolean`

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

### DolphinSwimWithPlayerGoal

```java
 DolphinSwimWithPlayerGoal(Dolphin p_28413_, double p_28414_)
```

**Parameters:**

- `p_28413_` (`Dolphin`)
- `p_28414_` (`double`)

**Returns:** ``

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

### tick

```java
public void tick()
```

### drop

```java
private void drop(ItemStack p_28429_)
```

**Parameters:**

- `p_28429_` (`ItemStack`)

**Returns:** `private void`
