# ZombieVillager

**Package:** `net.minecraft.world.entity.monster`
**Type:** class
**Extends:** `Zombie`
**Implements:** `VillagerDataHolder`

## Methods

### ZombieVillager

```java
public ZombieVillager(EntityType<? extends ZombieVillager> p_34368_, Level p_34369_)
```

**Parameters:**

- `p_34368_` (`EntityType<? extends ZombieVillager>`)
- `p_34369_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326075_)
```

**Parameters:**

- `p_326075_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_34397_)
```

**Parameters:**

- `p_34397_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_34387_)
```

**Parameters:**

- `p_34387_` (`CompoundTag`)

### tick

```java
public void tick()
```

### mobInteract

```java
public InteractionResult mobInteract(Player p_34394_, InteractionHand p_34395_)
```

**Parameters:**

- `p_34394_` (`Player`)
- `p_34395_` (`InteractionHand`)

**Returns:** `InteractionResult`

### convertsInWater

```java
protected boolean convertsInWater()
```

**Returns:** `boolean`

### removeWhenFarAway

```java
public boolean removeWhenFarAway(double p_34414_)
```

**Parameters:**

- `p_34414_` (`double`)

**Returns:** `boolean`

### isConverting

```java
public boolean isConverting()
```

**Returns:** `public boolean`

### startConverting

```java
private void startConverting(UUID p_34384_, int p_34385_)
```

**Parameters:**

- `p_34384_` (`UUID`)
- `p_34385_` (`int`)

**Returns:** `private void`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_34372_)
```

**Parameters:**

- `p_34372_` (`byte`)

### finishConversion

```java
private void finishConversion(ServerLevel p_34399_)
```

**Parameters:**

- `p_34399_` (`ServerLevel`)

**Returns:** `private void`

### getConversionProgress

```java
private int getConversionProgress()
```

**Returns:** `private int`

### getVoicePitch

```java
public float getVoicePitch()
```

**Returns:** `float`

### getAmbientSound

```java
public SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
public SoundEvent getHurtSound(DamageSource p_34404_)
```

**Parameters:**

- `p_34404_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
public SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getStepSound

```java
public SoundEvent getStepSound()
```

**Returns:** `SoundEvent`

### getSkull

```java
protected ItemStack getSkull()
```

**Returns:** `ItemStack`

### setTradeOffers

```java
public void setTradeOffers(MerchantOffers p_324128_)
```

**Parameters:**

- `p_324128_` (`MerchantOffers`)

**Returns:** `public void`

### setGossips

```java
public void setGossips(Tag p_34392_)
```

**Parameters:**

- `p_34392_` (`Tag`)

**Returns:** `public void`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_34378_, DifficultyInstance p_34379_, MobSpawnType p_34380_, SpawnGroupData p_34381_)
```

**Parameters:**

- `p_34378_` (`ServerLevelAccessor`)
- `p_34379_` (`DifficultyInstance`)
- `p_34380_` (`MobSpawnType`)
- `p_34381_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### setVillagerData

```java
public void setVillagerData(VillagerData p_34376_)
```

**Parameters:**

- `p_34376_` (`VillagerData`)

### getVillagerData

```java
public VillagerData getVillagerData()
```

**Returns:** `VillagerData`

### getVillagerXp

```java
public int getVillagerXp()
```

**Returns:** `public int`

### setVillagerXp

```java
public void setVillagerXp(int p_34374_)
```

**Parameters:**

- `p_34374_` (`int`)

**Returns:** `public void`
