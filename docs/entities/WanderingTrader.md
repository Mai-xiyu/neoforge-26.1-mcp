# WanderingTrader

**Package:** `net.minecraft.world.entity.npc`
**Type:** class
**Extends:** `AbstractVillager`

## Methods

### WanderingTrader

```java
public WanderingTrader(EntityType<? extends WanderingTrader> p_35843_, Level p_35844_)
```

**Parameters:**

- `p_35843_` (`EntityType<? extends WanderingTrader>`)
- `p_35844_` (`Level`)

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

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_150046_, AgeableMob p_150047_)
```

**Parameters:**

- `p_150046_` (`ServerLevel`)
- `p_150047_` (`AgeableMob`)

**Returns:** `AgeableMob`

### showProgressBar

```java
public boolean showProgressBar()
```

**Returns:** `boolean`

### mobInteract

```java
public InteractionResult mobInteract(Player p_35856_, InteractionHand p_35857_)
```

**Parameters:**

- `p_35856_` (`Player`)
- `p_35857_` (`InteractionHand`)

**Returns:** `InteractionResult`

### updateTrades

```java
protected void updateTrades()
```

### experimentalUpdateTrades

```java
private void experimentalUpdateTrades()
```

**Returns:** `private void`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_35861_)
```

**Parameters:**

- `p_35861_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_35852_)
```

**Parameters:**

- `p_35852_` (`CompoundTag`)

### removeWhenFarAway

```java
public boolean removeWhenFarAway(double p_35886_)
```

**Parameters:**

- `p_35886_` (`double`)

**Returns:** `boolean`

### rewardTradeXp

```java
protected void rewardTradeXp(MerchantOffer p_35859_)
```

**Parameters:**

- `p_35859_` (`MerchantOffer`)

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_35870_)
```

**Parameters:**

- `p_35870_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getDrinkingSound

```java
protected SoundEvent getDrinkingSound(ItemStack p_35865_)
```

**Parameters:**

- `p_35865_` (`ItemStack`)

**Returns:** `SoundEvent`

### getTradeUpdatedSound

```java
protected SoundEvent getTradeUpdatedSound(boolean p_35890_)
```

**Parameters:**

- `p_35890_` (`boolean`)

**Returns:** `SoundEvent`

### getNotifyTradeSound

```java
public SoundEvent getNotifyTradeSound()
```

**Returns:** `SoundEvent`

### setDespawnDelay

```java
public void setDespawnDelay(int p_35892_)
```

**Parameters:**

- `p_35892_` (`int`)

**Returns:** `public void`

### getDespawnDelay

```java
public int getDespawnDelay()
```

**Returns:** `public int`

### aiStep

```java
public void aiStep()
```

### maybeDespawn

```java
private void maybeDespawn()
```

**Returns:** `private void`

### setWanderTarget

```java
public void setWanderTarget(BlockPos p_35884_)
```

**Parameters:**

- `p_35884_` (`BlockPos`)

**Returns:** `public void`

### getWanderTarget

```java
BlockPos getWanderTarget()
```

**Returns:** `BlockPos`

### WanderToPositionGoal

```java
 WanderToPositionGoal(WanderingTrader p_35899_, double p_35900_, double p_35901_)
```

**Parameters:**

- `p_35899_` (`WanderingTrader`)
- `p_35900_` (`double`)
- `p_35901_` (`double`)

**Returns:** ``

### stop

```java
public void stop()
```

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### tick

```java
public void tick()
```

### isTooFarAway

```java
private boolean isTooFarAway(BlockPos p_35904_, double p_35905_)
```

**Parameters:**

- `p_35904_` (`BlockPos`)
- `p_35905_` (`double`)

**Returns:** `private boolean`
