# ServerLevel

**Package:** `net.minecraft.server.level`
**Type:** class
**Extends:** `Level`
**Implements:** `WorldGenLevel`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `END_SPAWN_POINT` | `BlockPos` |  |
| `RAIN_DELAY` | `IntProvider` |  |
| `RAIN_DURATION` | `IntProvider` |  |
| `THUNDER_DURATION` | `IntProvider` |  |
| `noSave` | `boolean` |  |
| `raids` | `Raids` |  |

## Methods

### ServerLevel

```java
public ServerLevel(MinecraftServer p_214999_, Executor p_215000_, LevelStorageSource.LevelStorageAccess p_215001_, ServerLevelData p_215002_, ResourceKey<Level> p_215003_, LevelStem p_215004_, ChunkProgressListener p_215005_, boolean p_215006_, long p_215007_, List<CustomSpawner> p_215008_, boolean p_215009_, RandomSequences p_288977_)
```

**Parameters:**

- `p_214999_` (`MinecraftServer`)
- `p_215000_` (`Executor`)
- `p_215001_` (`LevelStorageSource.LevelStorageAccess`)
- `p_215002_` (`ServerLevelData`)
- `p_215003_` (`ResourceKey<Level>`)
- `p_215004_` (`LevelStem`)
- `p_215005_` (`ChunkProgressListener`)
- `p_215006_` (`boolean`)
- `p_215007_` (`long`)
- `p_215008_` (`List<CustomSpawner>`)
- `p_215009_` (`boolean`)
- `p_288977_` (`RandomSequences`)

**Returns:** `public`

### setDragonFight

```java
public void setDragonFight(EndDragonFight p_287779_)
```

**Parameters:**

- `p_287779_` (`EndDragonFight`)

### setWeatherParameters

```java
public void setWeatherParameters(int p_8607_, int p_8608_, boolean p_8609_, boolean p_8610_)
```

**Parameters:**

- `p_8607_` (`int`)
- `p_8608_` (`int`)
- `p_8609_` (`boolean`)
- `p_8610_` (`boolean`)

**Returns:** `public void`

### getUncachedNoiseBiome

```java
public Holder<Biome> getUncachedNoiseBiome(int p_203775_, int p_203776_, int p_203777_)
```

**Parameters:**

- `p_203775_` (`int`)
- `p_203776_` (`int`)
- `p_203777_` (`int`)

**Returns:** `Holder<Biome>`

### structureManager

```java
public StructureManager structureManager()
```

**Returns:** `public StructureManager`

### tick

```java
public void tick(BooleanSupplier p_8794_)
```

**Parameters:**

- `p_8794_` (`BooleanSupplier`)

**Returns:** `public void`

### shouldTickBlocksAt

```java
public boolean shouldTickBlocksAt(long p_184059_)
```

**Parameters:**

- `p_184059_` (`long`)

**Returns:** `boolean`

### tickTime

```java
protected void tickTime()
```

**Returns:** `protected void`

### setDayTime

```java
public void setDayTime(long p_8616_)
```

**Parameters:**

- `p_8616_` (`long`)

**Returns:** `public void`

### tickCustomSpawners

```java
public void tickCustomSpawners(boolean p_8800_, boolean p_8801_)
```

**Parameters:**

- `p_8800_` (`boolean`)
- `p_8801_` (`boolean`)

**Returns:** `public void`

### shouldDiscardEntity

```java
private boolean shouldDiscardEntity(Entity p_143343_)
```

**Parameters:**

- `p_143343_` (`Entity`)

**Returns:** `private boolean`

### wakeUpAllPlayers

```java
private void wakeUpAllPlayers()
```

**Returns:** `private void`

### tickChunk

```java
public void tickChunk(LevelChunk p_8715_, int p_8716_)
```

**Parameters:**

- `p_8715_` (`LevelChunk`)
- `p_8716_` (`int`)

**Returns:** `public void`

### tickPrecipitation

```java
public void tickPrecipitation(BlockPos p_295060_)
```

**Parameters:**

- `p_295060_` (`BlockPos`)

### findLightningRod

```java
private Optional<BlockPos> findLightningRod(BlockPos p_143249_)
```

**Parameters:**

- `p_143249_` (`BlockPos`)

**Returns:** `private Optional<BlockPos>`

### findLightningTargetAround

```java
protected BlockPos findLightningTargetAround(BlockPos p_143289_)
```

**Parameters:**

- `p_143289_` (`BlockPos`)

**Returns:** `protected BlockPos`

### isHandlingTick

```java
public boolean isHandlingTick()
```

**Returns:** `public boolean`

### canSleepThroughNights

```java
public boolean canSleepThroughNights()
```

**Returns:** `public boolean`

### announceSleepStatus

```java
private void announceSleepStatus()
```

**Returns:** `private void`

### updateSleepingPlayerList

```java
public void updateSleepingPlayerList()
```

**Returns:** `public void`

### getScoreboard

```java
public ServerScoreboard getScoreboard()
```

**Returns:** `public ServerScoreboard`

### advanceWeatherCycle

```java
private void advanceWeatherCycle()
```

**Returns:** `private void`

### resetWeatherCycle

```java
public void resetWeatherCycle()
```

### resetEmptyTime

```java
public void resetEmptyTime()
```

**Returns:** `public void`

### tickFluid

```java
private void tickFluid(BlockPos p_184077_, Fluid p_184078_)
```

**Parameters:**

- `p_184077_` (`BlockPos`)
- `p_184078_` (`Fluid`)

**Returns:** `private void`

### tickBlock

```java
private void tickBlock(BlockPos p_184113_, Block p_184114_)
```

**Parameters:**

- `p_184113_` (`BlockPos`)
- `p_184114_` (`Block`)

**Returns:** `private void`

### tickNonPassenger

```java
public void tickNonPassenger(Entity p_8648_)
```

**Parameters:**

- `p_8648_` (`Entity`)

**Returns:** `public void`

### tickPassenger

```java
private void tickPassenger(Entity p_8663_, Entity p_8664_)
```

**Parameters:**

- `p_8663_` (`Entity`)
- `p_8664_` (`Entity`)

**Returns:** `private void`

### mayInteract

```java
public boolean mayInteract(Player p_8696_, BlockPos p_8697_)
```

**Parameters:**

- `p_8696_` (`Player`)
- `p_8697_` (`BlockPos`)

**Returns:** `boolean`

### save

```java
public void save(ProgressListener p_8644_, boolean p_8645_, boolean p_8646_)
```

**Parameters:**

- `p_8644_` (`ProgressListener`)
- `p_8645_` (`boolean`)
- `p_8646_` (`boolean`)

**Returns:** `public void`

### saveLevelData

```java
private void saveLevelData()
```

**Returns:** `private void`

### getEntities

```java
<T extends Entity> public <T extends Entity> List<? extends T> getEntities(EntityTypeTest<Entity, T> p_143281_, Predicate<? super T> p_143282_)
```

**Parameters:**

- `p_143281_` (`EntityTypeTest<Entity, T>`)
- `p_143282_` (`Predicate<? super T>`)

**Returns:** `public <T extends Entity> List<? extends T>`

### getEntities

```java
<T extends Entity> public <T extends Entity> void getEntities(EntityTypeTest<Entity, T> p_262152_, Predicate<? super T> p_261808_, List<? super T> p_261583_)
```

**Parameters:**

- `p_262152_` (`EntityTypeTest<Entity, T>`)
- `p_261808_` (`Predicate<? super T>`)
- `p_261583_` (`List<? super T>`)

**Returns:** `public <T extends Entity> void`

### getEntities

```java
<T extends Entity> public <T extends Entity> void getEntities(EntityTypeTest<Entity, T> p_261842_, Predicate<? super T> p_262091_, List<? super T> p_261703_, int p_261907_)
```

**Parameters:**

- `p_261842_` (`EntityTypeTest<Entity, T>`)
- `p_262091_` (`Predicate<? super T>`)
- `p_261703_` (`List<? super T>`)
- `p_261907_` (`int`)

**Returns:** `public <T extends Entity> void`

### getDragons

```java
public List<? extends EnderDragon> getDragons()
```

**Returns:** `public List<? extends EnderDragon>`

### getPlayers

```java
public List<ServerPlayer> getPlayers(Predicate<? super ServerPlayer> p_8796_)
```

**Parameters:**

- `p_8796_` (`Predicate<? super ServerPlayer>`)

**Returns:** `public List<ServerPlayer>`

### getPlayers

```java
public List<ServerPlayer> getPlayers(Predicate<? super ServerPlayer> p_261698_, int p_262035_)
```

**Parameters:**

- `p_261698_` (`Predicate<? super ServerPlayer>`)
- `p_262035_` (`int`)

**Returns:** `public List<ServerPlayer>`

### getRandomPlayer

```java
public ServerPlayer getRandomPlayer()
```

**Returns:** `ServerPlayer`

### addFreshEntity

```java
public boolean addFreshEntity(Entity p_8837_)
```

**Parameters:**

- `p_8837_` (`Entity`)

**Returns:** `boolean`

### addWithUUID

```java
public boolean addWithUUID(Entity p_8848_)
```

**Parameters:**

- `p_8848_` (`Entity`)

**Returns:** `public boolean`

### addDuringTeleport

```java
public void addDuringTeleport(Entity p_143335_)
```

**Parameters:**

- `p_143335_` (`Entity`)

**Returns:** `public void`

### addNewPlayer

```java
public void addNewPlayer(ServerPlayer p_8835_)
```

**Parameters:**

- `p_8835_` (`ServerPlayer`)

**Returns:** `public void`

### addRespawnedPlayer

```java
public void addRespawnedPlayer(ServerPlayer p_8846_)
```

**Parameters:**

- `p_8846_` (`ServerPlayer`)

**Returns:** `public void`

### addPlayer

```java
private void addPlayer(ServerPlayer p_8854_)
```

**Parameters:**

- `p_8854_` (`ServerPlayer`)

**Returns:** `private void`

### addEntity

```java
private boolean addEntity(Entity p_8873_)
```

**Parameters:**

- `p_8873_` (`Entity`)

**Returns:** `private boolean`

### tryAddFreshEntityWithPassengers

```java
public boolean tryAddFreshEntityWithPassengers(Entity p_8861_)
```

**Parameters:**

- `p_8861_` (`Entity`)

**Returns:** `public boolean`

### unload

```java
public void unload(LevelChunk p_8713_)
```

**Parameters:**

- `p_8713_` (`LevelChunk`)

**Returns:** `public void`

### removePlayerImmediately

```java
public void removePlayerImmediately(ServerPlayer p_143262_, Entity.RemovalReason p_143263_)
```

**Parameters:**

- `p_143262_` (`ServerPlayer`)
- `p_143263_` (`Entity.RemovalReason`)

**Returns:** `public void`

### destroyBlockProgress

```java
public void destroyBlockProgress(int p_8612_, BlockPos p_8613_, int p_8614_)
```

**Parameters:**

- `p_8612_` (`int`)
- `p_8613_` (`BlockPos`)
- `p_8614_` (`int`)

### playSeededSound

```java
public void playSeededSound(Player p_263330_, double p_263393_, double p_263369_, double p_263354_, Holder<SoundEvent> p_263412_, SoundSource p_263338_, float p_263352_, float p_263390_, long p_263403_)
```

**Parameters:**

- `p_263330_` (`Player`)
- `p_263393_` (`double`)
- `p_263369_` (`double`)
- `p_263354_` (`double`)
- `p_263412_` (`Holder<SoundEvent>`)
- `p_263338_` (`SoundSource`)
- `p_263352_` (`float`)
- `p_263390_` (`float`)
- `p_263403_` (`long`)

### playSeededSound

```java
public void playSeededSound(Player p_263545_, Entity p_263544_, Holder<SoundEvent> p_263491_, SoundSource p_263542_, float p_263530_, float p_263520_, long p_263490_)
```

**Parameters:**

- `p_263545_` (`Player`)
- `p_263544_` (`Entity`)
- `p_263491_` (`Holder<SoundEvent>`)
- `p_263542_` (`SoundSource`)
- `p_263530_` (`float`)
- `p_263520_` (`float`)
- `p_263490_` (`long`)

### globalLevelEvent

```java
public void globalLevelEvent(int p_8811_, BlockPos p_8812_, int p_8813_)
```

**Parameters:**

- `p_8811_` (`int`)
- `p_8812_` (`BlockPos`)
- `p_8813_` (`int`)

### levelEvent

```java
public void levelEvent(Player p_8684_, int p_8685_, BlockPos p_8686_, int p_8687_)
```

**Parameters:**

- `p_8684_` (`Player`)
- `p_8685_` (`int`)
- `p_8686_` (`BlockPos`)
- `p_8687_` (`int`)

### getLogicalHeight

```java
public int getLogicalHeight()
```

**Returns:** `public int`

### gameEvent

```java
public void gameEvent(Holder<GameEvent> p_316597_, Vec3 p_215042_, GameEvent.Context p_215043_)
```

**Parameters:**

- `p_316597_` (`Holder<GameEvent>`)
- `p_215042_` (`Vec3`)
- `p_215043_` (`GameEvent.Context`)

### sendBlockUpdated

```java
public void sendBlockUpdated(BlockPos p_8755_, BlockState p_8756_, BlockState p_8757_, int p_8758_)
```

**Parameters:**

- `p_8755_` (`BlockPos`)
- `p_8756_` (`BlockState`)
- `p_8757_` (`BlockState`)
- `p_8758_` (`int`)

### updateNeighborsAt

```java
public void updateNeighborsAt(BlockPos p_215045_, Block p_215046_)
```

**Parameters:**

- `p_215045_` (`BlockPos`)
- `p_215046_` (`Block`)

### updateNeighborsAtExceptFromFacing

```java
public void updateNeighborsAtExceptFromFacing(BlockPos p_215052_, Block p_215053_, Direction p_215054_)
```

**Parameters:**

- `p_215052_` (`BlockPos`)
- `p_215053_` (`Block`)
- `p_215054_` (`Direction`)

### neighborChanged

```java
public void neighborChanged(BlockPos p_215048_, Block p_215049_, BlockPos p_215050_)
```

**Parameters:**

- `p_215048_` (`BlockPos`)
- `p_215049_` (`Block`)
- `p_215050_` (`BlockPos`)

### neighborChanged

```java
public void neighborChanged(BlockState p_215035_, BlockPos p_215036_, Block p_215037_, BlockPos p_215038_, boolean p_215039_)
```

**Parameters:**

- `p_215035_` (`BlockState`)
- `p_215036_` (`BlockPos`)
- `p_215037_` (`Block`)
- `p_215038_` (`BlockPos`)
- `p_215039_` (`boolean`)

### broadcastEntityEvent

```java
public void broadcastEntityEvent(Entity p_8650_, byte p_8651_)
```

**Parameters:**

- `p_8650_` (`Entity`)
- `p_8651_` (`byte`)

### broadcastDamageEvent

```java
public void broadcastDamageEvent(Entity p_270420_, DamageSource p_270311_)
```

**Parameters:**

- `p_270420_` (`Entity`)
- `p_270311_` (`DamageSource`)

### getChunkSource

```java
public ServerChunkCache getChunkSource()
```

**Returns:** `public ServerChunkCache`

### explode

```java
public Explosion explode(Entity p_256039_, DamageSource p_255778_, ExplosionDamageCalculator p_256002_, double p_256067_, double p_256370_, double p_256153_, float p_256045_, boolean p_255686_, Level.ExplosionInteraction p_255827_, ParticleOptions p_312436_, ParticleOptions p_312391_, Holder<SoundEvent> p_320497_)
```

**Parameters:**

- `p_256039_` (`Entity`)
- `p_255778_` (`DamageSource`)
- `p_256002_` (`ExplosionDamageCalculator`)
- `p_256067_` (`double`)
- `p_256370_` (`double`)
- `p_256153_` (`double`)
- `p_256045_` (`float`)
- `p_255686_` (`boolean`)
- `p_255827_` (`Level.ExplosionInteraction`)
- `p_312436_` (`ParticleOptions`)
- `p_312391_` (`ParticleOptions`)
- `p_320497_` (`Holder<SoundEvent>`)

**Returns:** `Explosion`

### blockEvent

```java
public void blockEvent(BlockPos p_8746_, Block p_8747_, int p_8748_, int p_8749_)
```

**Parameters:**

- `p_8746_` (`BlockPos`)
- `p_8747_` (`Block`)
- `p_8748_` (`int`)
- `p_8749_` (`int`)

### runBlockEvents

```java
private void runBlockEvents()
```

**Returns:** `private void`

### doBlockEvent

```java
private boolean doBlockEvent(BlockEventData p_8699_)
```

**Parameters:**

- `p_8699_` (`BlockEventData`)

**Returns:** `private boolean`

### getBlockTicks

```java
public LevelTicks<Block> getBlockTicks()
```

**Returns:** `public LevelTicks<Block>`

### getFluidTicks

```java
public LevelTicks<Fluid> getFluidTicks()
```

**Returns:** `public LevelTicks<Fluid>`

### getServer

```java
public MinecraftServer getServer()
```

**Returns:** `MinecraftServer`

### getPortalForcer

```java
public PortalForcer getPortalForcer()
```

**Returns:** `public PortalForcer`

### getStructureManager

```java
public StructureTemplateManager getStructureManager()
```

**Returns:** `public StructureTemplateManager`

### sendParticles

```java
<T extends ParticleOptions> public <T extends ParticleOptions> int sendParticles(T p_8768_, double p_8769_, double p_8770_, double p_8771_, int p_8772_, double p_8773_, double p_8774_, double p_8775_, double p_8776_)
```

**Parameters:**

- `p_8768_` (`T`)
- `p_8769_` (`double`)
- `p_8770_` (`double`)
- `p_8771_` (`double`)
- `p_8772_` (`int`)
- `p_8773_` (`double`)
- `p_8774_` (`double`)
- `p_8775_` (`double`)
- `p_8776_` (`double`)

**Returns:** `public <T extends ParticleOptions> int`

### sendParticles

```java
<T extends ParticleOptions> public <T extends ParticleOptions> boolean sendParticles(ServerPlayer p_8625_, T p_8626_, boolean p_8627_, double p_8628_, double p_8629_, double p_8630_, int p_8631_, double p_8632_, double p_8633_, double p_8634_, double p_8635_)
```

**Parameters:**

- `p_8625_` (`ServerPlayer`)
- `p_8626_` (`T`)
- `p_8627_` (`boolean`)
- `p_8628_` (`double`)
- `p_8629_` (`double`)
- `p_8630_` (`double`)
- `p_8631_` (`int`)
- `p_8632_` (`double`)
- `p_8633_` (`double`)
- `p_8634_` (`double`)
- `p_8635_` (`double`)

**Returns:** `public <T extends ParticleOptions> boolean`

### sendParticles

```java
private boolean sendParticles(ServerPlayer p_8637_, boolean p_8638_, double p_8639_, double p_8640_, double p_8641_, Packet<?> p_8642_)
```

**Parameters:**

- `p_8637_` (`ServerPlayer`)
- `p_8638_` (`boolean`)
- `p_8639_` (`double`)
- `p_8640_` (`double`)
- `p_8641_` (`double`)
- `p_8642_` (`Packet<?>`)

**Returns:** `private boolean`

### getEntity

```java
public Entity getEntity(int p_8597_)
```

**Parameters:**

- `p_8597_` (`int`)

**Returns:** `Entity`

### getEntityOrPart

```java
public Entity getEntityOrPart(int p_143318_)
```

**Parameters:**

- `p_143318_` (`int`)

**Returns:** `Entity`

### getEntity

```java
public Entity getEntity(UUID p_8792_)
```

**Parameters:**

- `p_8792_` (`UUID`)

**Returns:** `Entity`

### findNearestMapStructure

```java
public BlockPos findNearestMapStructure(TagKey<Structure> p_215012_, BlockPos p_215013_, int p_215014_, boolean p_215015_)
```

**Parameters:**

- `p_215012_` (`TagKey<Structure>`)
- `p_215013_` (`BlockPos`)
- `p_215014_` (`int`)
- `p_215015_` (`boolean`)

**Returns:** `BlockPos`

### findClosestBiome3d

```java
public Pair<BlockPos, Holder<Biome>> findClosestBiome3d(Predicate<Holder<Biome>> p_215070_, BlockPos p_215071_, int p_215072_, int p_215073_, int p_215074_)
```

**Parameters:**

- `p_215070_` (`Predicate<Holder<Biome>>`)
- `p_215071_` (`BlockPos`)
- `p_215072_` (`int`)
- `p_215073_` (`int`)
- `p_215074_` (`int`)

**Returns:** `Pair<BlockPos, Holder<Biome>>`

### getRecipeManager

```java
public RecipeManager getRecipeManager()
```

**Returns:** `RecipeManager`

### tickRateManager

```java
public TickRateManager tickRateManager()
```

**Returns:** `TickRateManager`

### noSave

```java
public boolean noSave()
```

**Returns:** `boolean`

### getDataStorage

```java
public DimensionDataStorage getDataStorage()
```

**Returns:** `public DimensionDataStorage`

### getMapData

```java
public MapItemSavedData getMapData(MapId p_323746_)
```

**Parameters:**

- `p_323746_` (`MapId`)

**Returns:** `MapItemSavedData`

### setMapData

```java
public void setMapData(MapId p_323697_, MapItemSavedData p_143306_)
```

**Parameters:**

- `p_323697_` (`MapId`)
- `p_143306_` (`MapItemSavedData`)

### getFreeMapId

```java
public MapId getFreeMapId()
```

**Returns:** `MapId`

### setDefaultSpawnPos

```java
public void setDefaultSpawnPos(BlockPos p_8734_, float p_8735_)
```

**Parameters:**

- `p_8734_` (`BlockPos`)
- `p_8735_` (`float`)

**Returns:** `public void`

### getForcedChunks

```java
public LongSet getForcedChunks()
```

**Returns:** `public LongSet`

### setChunkForced

```java
public boolean setChunkForced(int p_8603_, int p_8604_, boolean p_8605_)
```

**Parameters:**

- `p_8603_` (`int`)
- `p_8604_` (`int`)
- `p_8605_` (`boolean`)

**Returns:** `public boolean`

### players

```java
public List<ServerPlayer> players()
```

**Returns:** `List<ServerPlayer>`

### onBlockStateChange

```java
public void onBlockStateChange(BlockPos p_8751_, BlockState p_8752_, BlockState p_8753_)
```

**Parameters:**

- `p_8751_` (`BlockPos`)
- `p_8752_` (`BlockState`)
- `p_8753_` (`BlockState`)

### getPoiManager

```java
public PoiManager getPoiManager()
```

**Returns:** `public PoiManager`

### isVillage

```java
public boolean isVillage(BlockPos p_8803_)
```

**Parameters:**

- `p_8803_` (`BlockPos`)

**Returns:** `public boolean`

### isVillage

```java
public boolean isVillage(SectionPos p_8763_)
```

**Parameters:**

- `p_8763_` (`SectionPos`)

**Returns:** `public boolean`

### isCloseToVillage

```java
public boolean isCloseToVillage(BlockPos p_8737_, int p_8738_)
```

**Parameters:**

- `p_8737_` (`BlockPos`)
- `p_8738_` (`int`)

**Returns:** `public boolean`

### sectionsToVillage

```java
public int sectionsToVillage(SectionPos p_8829_)
```

**Parameters:**

- `p_8829_` (`SectionPos`)

**Returns:** `public int`

### getRaids

```java
public Raids getRaids()
```

**Returns:** `public Raids`

### getRaidAt

```java
public Raid getRaidAt(BlockPos p_8833_)
```

**Parameters:**

- `p_8833_` (`BlockPos`)

**Returns:** `Raid`

### isRaided

```java
public boolean isRaided(BlockPos p_8844_)
```

**Parameters:**

- `p_8844_` (`BlockPos`)

**Returns:** `public boolean`

### onReputationEvent

```java
public void onReputationEvent(ReputationEventType p_8671_, Entity p_8672_, ReputationEventHandler p_8673_)
```

**Parameters:**

- `p_8671_` (`ReputationEventType`)
- `p_8672_` (`Entity`)
- `p_8673_` (`ReputationEventHandler`)

**Returns:** `public void`

### saveDebugReport

```java
public void saveDebugReport(Path p_8787_)
```

**Parameters:**

- `p_8787_` (`Path`)

**Returns:** `public void`

### dumpEntities

```java
private static void dumpEntities(Writer p_8782_, Iterable<Entity> p_8783_)
```

**Parameters:**

- `p_8782_` (`Writer`)
- `p_8783_` (`Iterable<Entity>`)

**Returns:** `private static void`

### dumpBlockEntityTickers

```java
private void dumpBlockEntityTickers(Writer p_143300_)
```

**Parameters:**

- `p_143300_` (`Writer`)

**Returns:** `private void`

### clearBlockEvents

```java
public void clearBlockEvents(BoundingBox p_8723_)
```

**Parameters:**

- `p_8723_` (`BoundingBox`)

### blockUpdated

```java
public void blockUpdated(BlockPos p_8743_, Block p_8744_)
```

**Parameters:**

- `p_8743_` (`BlockPos`)
- `p_8744_` (`Block`)

### getShade

```java
public float getShade(Direction p_8760_, boolean p_8761_)
```

**Parameters:**

- `p_8760_` (`Direction`)
- `p_8761_` (`boolean`)

**Returns:** `float`

### getAllEntities

```java
public Iterable<Entity> getAllEntities()
```

**Returns:** `public Iterable<Entity>`

### toString

```java
public String toString()
```

**Returns:** `String`

### isFlat

```java
public boolean isFlat()
```

**Returns:** `public boolean`

### getSeed

```java
public long getSeed()
```

**Returns:** `long`

### getDragonFight

```java
public EndDragonFight getDragonFight()
```

**Returns:** `EndDragonFight`

### getLevel

```java
public ServerLevel getLevel()
```

**Returns:** `ServerLevel`

### getWatchdogStats

```java
public String getWatchdogStats()
```

**Returns:** `String`

### getTypeCount

```java
<T> private static <T> String getTypeCount(Iterable<T> p_143302_, Function<T, String> p_143303_)
```

**Parameters:**

- `p_143302_` (`Iterable<T>`)
- `p_143303_` (`Function<T, String>`)

**Returns:** `private static <T> String`

### getEntities

```java
public LevelEntityGetter<Entity> getEntities()
```

**Returns:** `LevelEntityGetter<Entity>`

### addLegacyChunkEntities

```java
public void addLegacyChunkEntities(Stream<Entity> p_143312_)
```

**Parameters:**

- `p_143312_` (`Stream<Entity>`)

**Returns:** `public void`

### addWorldGenChunkEntities

```java
public void addWorldGenChunkEntities(Stream<Entity> p_143328_)
```

**Parameters:**

- `p_143328_` (`Stream<Entity>`)

**Returns:** `public void`

### startTickingChunk

```java
public void startTickingChunk(LevelChunk p_184103_)
```

**Parameters:**

- `p_184103_` (`LevelChunk`)

**Returns:** `public void`

### onStructureStartsAvailable

```java
public void onStructureStartsAvailable(ChunkAccess p_196558_)
```

**Parameters:**

- `p_196558_` (`ChunkAccess`)

**Returns:** `public void`

### getPathTypeCache

```java
public PathTypeCache getPathTypeCache()
```

**Returns:** `public PathTypeCache`

### close

```java
public void close()
```

### gatherChunkSourceStats

```java
public String gatherChunkSourceStats()
```

**Returns:** `String`

### areEntitiesLoaded

```java
public boolean areEntitiesLoaded(long p_143320_)
```

**Parameters:**

- `p_143320_` (`long`)

**Returns:** `public boolean`

### isPositionTickingWithEntitiesLoaded

```java
private boolean isPositionTickingWithEntitiesLoaded(long p_184111_)
```

**Parameters:**

- `p_184111_` (`long`)

**Returns:** `private boolean`

### isPositionEntityTicking

```java
public boolean isPositionEntityTicking(BlockPos p_143341_)
```

**Parameters:**

- `p_143341_` (`BlockPos`)

**Returns:** `public boolean`

### isNaturalSpawningAllowed

```java
public boolean isNaturalSpawningAllowed(BlockPos p_201919_)
```

**Parameters:**

- `p_201919_` (`BlockPos`)

**Returns:** `public boolean`

### isNaturalSpawningAllowed

```java
public boolean isNaturalSpawningAllowed(ChunkPos p_201917_)
```

**Parameters:**

- `p_201917_` (`ChunkPos`)

**Returns:** `public boolean`

### enabledFeatures

```java
public FeatureFlagSet enabledFeatures()
```

**Returns:** `FeatureFlagSet`

### potionBrewing

```java
public PotionBrewing potionBrewing()
```

**Returns:** `PotionBrewing`

### getRandomSequence

```java
public RandomSource getRandomSequence(ResourceLocation p_287689_)
```

**Parameters:**

- `p_287689_` (`ResourceLocation`)

**Returns:** `public RandomSource`

### getRandomSequences

```java
public RandomSequences getRandomSequences()
```

**Returns:** `public RandomSequences`

### fillReportDetails

```java
public CrashReportCategory fillReportDetails(CrashReport p_307518_)
```

**Parameters:**

- `p_307518_` (`CrashReport`)

**Returns:** `CrashReportCategory`

### onCreated

```java
public void onCreated(Entity p_143355_)
```

**Parameters:**

- `p_143355_` (`Entity`)

**Returns:** `public void`

### onDestroyed

```java
public void onDestroyed(Entity p_143359_)
```

**Parameters:**

- `p_143359_` (`Entity`)

**Returns:** `public void`

### onTickingStart

```java
public void onTickingStart(Entity p_143363_)
```

**Parameters:**

- `p_143363_` (`Entity`)

**Returns:** `public void`

### onTickingEnd

```java
public void onTickingEnd(Entity p_143367_)
```

**Parameters:**

- `p_143367_` (`Entity`)

**Returns:** `public void`

### onTrackingStart

```java
public void onTrackingStart(Entity p_143371_)
```

**Parameters:**

- `p_143371_` (`Entity`)

**Returns:** `public void`

### onTrackingEnd

```java
public void onTrackingEnd(Entity p_143375_)
```

**Parameters:**

- `p_143375_` (`Entity`)

**Returns:** `public void`

### onSectionChange

```java
public void onSectionChange(Entity p_215086_)
```

**Parameters:**

- `p_215086_` (`Entity`)

**Returns:** `public void`

### getPartEntities

```java
public java.util.Collection<net.neoforged.neoforge.entity.PartEntity<?>> getPartEntities()
```

**Returns:** `java.util.Collection<net.neoforged.neoforge.entity.PartEntity<?>>`

### invalidateCapabilities

```java
public void invalidateCapabilities(BlockPos pos)
```

**Parameters:**

- `pos` (`BlockPos`)

### invalidateCapabilities

```java
public void invalidateCapabilities(ChunkPos pos)
```

**Parameters:**

- `pos` (`ChunkPos`)

### registerCapabilityListener

```java
public void registerCapabilityListener(BlockPos pos, net.neoforged.neoforge.capabilities.ICapabilityInvalidationListener listener)
```

**Parameters:**

- `pos` (`BlockPos`)
- `listener` (`net.neoforged.neoforge.capabilities.ICapabilityInvalidationListener`)

### cleanCapabilityListenerReferences

```java
.jetbrains.annotations.ApiStatus.Internal
    public void cleanCapabilityListenerReferences()
```

**Returns:** `.jetbrains.annotations.ApiStatus.Internal
    public void`

### setDayTimeFraction

```java
.jetbrains.annotations.ApiStatus.Internal
    public void setDayTimeFraction(float dayTimeFraction)
```

**Parameters:**

- `dayTimeFraction` (`float`)

**Returns:** `.jetbrains.annotations.ApiStatus.Internal
    public void`

### getDayTimeFraction

```java
.jetbrains.annotations.ApiStatus.Internal
    public float getDayTimeFraction()
```

**Returns:** `.jetbrains.annotations.ApiStatus.Internal
    public float`

### getDayTimePerTick

```java
public float getDayTimePerTick()
```

**Returns:** `float`

### setDayTimePerTick

```java
public void setDayTimePerTick(float dayTimePerTick)
```

**Parameters:**

- `dayTimePerTick` (`float`)
