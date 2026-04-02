# Villager

**Package:** `net.minecraft.world.entity.npc`
**Type:** class
**Extends:** `AbstractVillager`
**Implements:** `ReputationEventHandler`, `VillagerDataHolder`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BREEDING_FOOD_THRESHOLD` | `int` |  |
| `FOOD_POINTS` | `Map<Item, Integer>` |  |
| `POI_MEMORIES` | `Map<MemoryModuleType<GlobalPos>, BiPredicate<Villager, Holder<PoiType>>>` |  |

## Methods

### Villager

```java
public Villager(EntityType<? extends Villager> p_35381_, Level p_35382_)
```

**Parameters:**

- `p_35381_` (`EntityType<? extends Villager>`)
- `p_35382_` (`Level`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### Villager

```java
public Villager(EntityType<? extends Villager> p_35384_, Level p_35385_, VillagerType p_35386_)
```

**Parameters:**

- `p_35384_` (`EntityType<? extends Villager>`)
- `p_35385_` (`Level`)
- `p_35386_` (`VillagerType`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getBrain

```java
public Brain<Villager> getBrain()
```

**Returns:** `Brain<Villager>`

### brainProvider

```java
protected Brain.Provider<Villager> brainProvider()
```

**Returns:** `Brain.Provider<Villager>`

### makeBrain

```java
protected Brain<?> makeBrain(Dynamic<?> p_35445_)
```

**Parameters:**

- `p_35445_` (`Dynamic<?>`)

**Returns:** `Brain<?>`

### refreshBrain

```java
public void refreshBrain(ServerLevel p_35484_)
```

**Parameters:**

- `p_35484_` (`ServerLevel`)

**Returns:** `public void`

### registerBrainGoals

```java
private void registerBrainGoals(Brain<Villager> p_35425_)
```

**Parameters:**

- `p_35425_` (`Brain<Villager>`)

**Returns:** `private void`

### ageBoundaryReached

```java
protected void ageBoundaryReached()
```

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### assignProfessionWhenSpawned

```java
public boolean assignProfessionWhenSpawned()
```

**Returns:** `public boolean`

### customServerAiStep

```java
protected void customServerAiStep()
```

### tick

```java
public void tick()
```

### mobInteract

```java
public InteractionResult mobInteract(Player p_35472_, InteractionHand p_35473_)
```

**Parameters:**

- `p_35472_` (`Player`)
- `p_35473_` (`InteractionHand`)

**Returns:** `InteractionResult`

### setUnhappy

```java
private void setUnhappy()
```

**Returns:** `private void`

### startTrading

```java
private void startTrading(Player p_35537_)
```

**Parameters:**

- `p_35537_` (`Player`)

**Returns:** `private void`

### setTradingPlayer

```java
public void setTradingPlayer(Player p_35508_)
```

**Parameters:**

- `p_35508_` (`Player`)

### stopTrading

```java
protected void stopTrading()
```

### resetSpecialPrices

```java
private void resetSpecialPrices()
```

**Returns:** `private void`

### canRestock

```java
public boolean canRestock()
```

**Returns:** `boolean`

### isClientSide

```java
public boolean isClientSide()
```

**Returns:** `boolean`

### restock

```java
public void restock()
```

**Returns:** `public void`

### resendOffersToTradingPlayer

```java
private void resendOffersToTradingPlayer()
```

**Returns:** `private void`

### needsToRestock

```java
private boolean needsToRestock()
```

**Returns:** `private boolean`

### allowedToRestock

```java
private boolean allowedToRestock()
```

**Returns:** `private boolean`

### shouldRestock

```java
public boolean shouldRestock()
```

**Returns:** `public boolean`

### catchUpDemand

```java
private void catchUpDemand()
```

**Returns:** `private void`

### updateDemand

```java
private void updateDemand()
```

**Returns:** `private void`

### updateSpecialPrices

```java
private void updateSpecialPrices(Player p_35541_)
```

**Parameters:**

- `p_35541_` (`Player`)

**Returns:** `private void`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326013_)
```

**Parameters:**

- `p_326013_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_35481_)
```

**Parameters:**

- `p_35481_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_35451_)
```

**Parameters:**

- `p_35451_` (`CompoundTag`)

### removeWhenFarAway

```java
public boolean removeWhenFarAway(double p_35535_)
```

**Parameters:**

- `p_35535_` (`double`)

**Returns:** `boolean`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_35498_)
```

**Parameters:**

- `p_35498_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### playWorkSound

```java
public void playWorkSound()
```

**Returns:** `public void`

### setVillagerData

```java
public void setVillagerData(VillagerData p_35437_)
```

**Parameters:**

- `p_35437_` (`VillagerData`)

### getVillagerData

```java
public VillagerData getVillagerData()
```

**Returns:** `VillagerData`

### rewardTradeXp

```java
protected void rewardTradeXp(MerchantOffer p_35475_)
```

**Parameters:**

- `p_35475_` (`MerchantOffer`)

### setChasing

```java
public void setChasing(boolean p_150016_)
```

**Parameters:**

- `p_150016_` (`boolean`)

**Returns:** `public void`

### isChasing

```java
public boolean isChasing()
```

**Returns:** `public boolean`

### setLastHurtByMob

```java
public void setLastHurtByMob(LivingEntity p_35423_)
```

**Parameters:**

- `p_35423_` (`LivingEntity`)

### die

```java
public void die(DamageSource p_35419_)
```

**Parameters:**

- `p_35419_` (`DamageSource`)

### releaseAllPois

```java
private void releaseAllPois()
```

**Returns:** `private void`

### tellWitnessesThatIWasMurdered

```java
private void tellWitnessesThatIWasMurdered(Entity p_35421_)
```

**Parameters:**

- `p_35421_` (`Entity`)

**Returns:** `private void`

### releasePoi

```java
public void releasePoi(MemoryModuleType<GlobalPos> p_35429_)
```

**Parameters:**

- `p_35429_` (`MemoryModuleType<GlobalPos>`)

**Returns:** `public void`

### canBreed

```java
public boolean canBreed()
```

**Returns:** `boolean`

### hungry

```java
private boolean hungry()
```

**Returns:** `private boolean`

### eatUntilFull

```java
private void eatUntilFull()
```

**Returns:** `private void`

### getPlayerReputation

```java
public int getPlayerReputation(Player p_35533_)
```

**Parameters:**

- `p_35533_` (`Player`)

**Returns:** `public int`

### digestFood

```java
private void digestFood(int p_35549_)
```

**Parameters:**

- `p_35549_` (`int`)

**Returns:** `private void`

### eatAndDigestFood

```java
public void eatAndDigestFood()
```

**Returns:** `public void`

### setOffers

```java
public void setOffers(MerchantOffers p_35477_)
```

**Parameters:**

- `p_35477_` (`MerchantOffers`)

**Returns:** `public void`

### shouldIncreaseLevel

```java
private boolean shouldIncreaseLevel()
```

**Returns:** `private boolean`

### increaseMerchantCareer

```java
private void increaseMerchantCareer()
```

**Returns:** `private void`

### getTypeName

```java
protected Component getTypeName()
```

**Returns:** `Component`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_35391_)
```

**Parameters:**

- `p_35391_` (`byte`)

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_35439_, DifficultyInstance p_35440_, MobSpawnType p_35441_, SpawnGroupData p_35442_)
```

**Parameters:**

- `p_35439_` (`ServerLevelAccessor`)
- `p_35440_` (`DifficultyInstance`)
- `p_35441_` (`MobSpawnType`)
- `p_35442_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### getBreedOffspring

```java
public Villager getBreedOffspring(ServerLevel p_150012_, AgeableMob p_150013_)
```

**Parameters:**

- `p_150012_` (`ServerLevel`)
- `p_150013_` (`AgeableMob`)

**Returns:** `Villager`

### thunderHit

```java
public void thunderHit(ServerLevel p_35409_, LightningBolt p_35410_)
```

**Parameters:**

- `p_35409_` (`ServerLevel`)
- `p_35410_` (`LightningBolt`)

### pickUpItem

```java
protected void pickUpItem(ItemEntity p_35467_)
```

**Parameters:**

- `p_35467_` (`ItemEntity`)

### wantsToPickUp

```java
public boolean wantsToPickUp(ItemStack p_35543_)
```

**Parameters:**

- `p_35543_` (`ItemStack`)

**Returns:** `boolean`

### hasExcessFood

```java
public boolean hasExcessFood()
```

**Returns:** `public boolean`

### wantsMoreFood

```java
public boolean wantsMoreFood()
```

**Returns:** `public boolean`

### countFoodPointsInInventory

```java
private int countFoodPointsInInventory()
```

**Returns:** `private int`

### hasFarmSeeds

```java
public boolean hasFarmSeeds()
```

**Returns:** `public boolean`

### updateTrades

```java
protected void updateTrades()
```

### gossip

```java
public void gossip(ServerLevel p_35412_, Villager p_35413_, long p_35414_)
```

**Parameters:**

- `p_35412_` (`ServerLevel`)
- `p_35413_` (`Villager`)
- `p_35414_` (`long`)

**Returns:** `public void`

### maybeDecayGossip

```java
private void maybeDecayGossip()
```

**Returns:** `private void`

### spawnGolemIfNeeded

```java
public void spawnGolemIfNeeded(ServerLevel p_35398_, long p_35399_, int p_35400_)
```

**Parameters:**

- `p_35398_` (`ServerLevel`)
- `p_35399_` (`long`)
- `p_35400_` (`int`)

**Returns:** `public void`

### wantsToSpawnGolem

```java
public boolean wantsToSpawnGolem(long p_35393_)
```

**Parameters:**

- `p_35393_` (`long`)

**Returns:** `public boolean`

### onReputationEventFrom

```java
public void onReputationEventFrom(ReputationEventType p_35431_, Entity p_35432_)
```

**Parameters:**

- `p_35431_` (`ReputationEventType`)
- `p_35432_` (`Entity`)

### getVillagerXp

```java
public int getVillagerXp()
```

**Returns:** `int`

### setVillagerXp

```java
public void setVillagerXp(int p_35547_)
```

**Parameters:**

- `p_35547_` (`int`)

**Returns:** `public void`

### resetNumberOfRestocks

```java
private void resetNumberOfRestocks()
```

**Returns:** `private void`

### getGossips

```java
public GossipContainer getGossips()
```

**Returns:** `public GossipContainer`

### setGossips

```java
public void setGossips(Tag p_35456_)
```

**Parameters:**

- `p_35456_` (`Tag`)

**Returns:** `public void`

### sendDebugPackets

```java
protected void sendDebugPackets()
```

### startSleeping

```java
public void startSleeping(BlockPos p_35479_)
```

**Parameters:**

- `p_35479_` (`BlockPos`)

### stopSleeping

```java
public void stopSleeping()
```

### golemSpawnConditionsMet

```java
private boolean golemSpawnConditionsMet(long p_35462_)
```

**Parameters:**

- `p_35462_` (`long`)

**Returns:** `private boolean`
