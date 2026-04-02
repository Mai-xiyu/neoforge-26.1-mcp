# ClientLevel

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Extends:** `Level`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### handleBlockChangedAck

```java
public void handleBlockChangedAck(int p_233652_)
```

**Parameters:**

- `p_233652_` (`int`)

**Returns:** `public void`

### setServerVerifiedBlockState

```java
public void setServerVerifiedBlockState(BlockPos p_233654_, BlockState p_233655_, int p_233656_)
```

**Parameters:**

- `p_233654_` (`BlockPos`)
- `p_233655_` (`BlockState`)
- `p_233656_` (`int`)

**Returns:** `public void`

### syncBlockState

```java
public void syncBlockState(BlockPos p_233648_, BlockState p_233649_, Vec3 p_233650_)
```

**Parameters:**

- `p_233648_` (`BlockPos`)
- `p_233649_` (`BlockState`)
- `p_233650_` (`Vec3`)

**Returns:** `public void`

### getBlockStatePredictionHandler

```java
BlockStatePredictionHandler getBlockStatePredictionHandler()
```

**Returns:** `BlockStatePredictionHandler`

### setBlock

```java
public boolean setBlock(BlockPos p_233643_, BlockState p_233644_, int p_233645_, int p_233646_)
```

**Parameters:**

- `p_233643_` (`BlockPos`)
- `p_233644_` (`BlockState`)
- `p_233645_` (`int`)
- `p_233646_` (`int`)

**Returns:** `boolean`

### ClientLevel

```java
public ClientLevel(ClientPacketListener p_205505_, ClientLevel.ClientLevelData p_205506_, ResourceKey<Level> p_205507_, Holder<DimensionType> p_205508_, int p_205509_, int p_205510_, Supplier<ProfilerFiller> p_205511_, LevelRenderer p_205512_, boolean p_205513_, long p_205514_)
```

**Parameters:**

- `p_205505_` (`ClientPacketListener`)
- `p_205506_` (`ClientLevel.ClientLevelData`)
- `p_205507_` (`ResourceKey<Level>`)
- `p_205508_` (`Holder<DimensionType>`)
- `p_205509_` (`int`)
- `p_205510_` (`int`)
- `p_205511_` (`Supplier<ProfilerFiller>`)
- `p_205512_` (`LevelRenderer`)
- `p_205513_` (`boolean`)
- `p_205514_` (`long`)

**Returns:** `public`

### queueLightUpdate

```java
public void queueLightUpdate(Runnable p_194172_)
```

**Parameters:**

- `p_194172_` (`Runnable`)

**Returns:** `public void`

### pollLightUpdates

```java
public void pollLightUpdates()
```

**Returns:** `public void`

### isLightUpdateQueueEmpty

```java
public boolean isLightUpdateQueueEmpty()
```

**Returns:** `public boolean`

### effects

```java
public DimensionSpecialEffects effects()
```

**Returns:** `public DimensionSpecialEffects`

### tick

```java
public void tick(BooleanSupplier p_104727_)
```

**Parameters:**

- `p_104727_` (`BooleanSupplier`)

**Returns:** `public void`

### tickTime

```java
private void tickTime()
```

**Returns:** `private void`

### setGameTime

```java
public void setGameTime(long p_104638_)
```

**Parameters:**

- `p_104638_` (`long`)

**Returns:** `public void`

### setDayTime

```java
public void setDayTime(long p_104747_)
```

**Parameters:**

- `p_104747_` (`long`)

**Returns:** `public void`

### entitiesForRendering

```java
public Iterable<Entity> entitiesForRendering()
```

**Returns:** `public Iterable<Entity>`

### tickEntities

```java
public void tickEntities()
```

**Returns:** `public void`

### shouldTickDeath

```java
public boolean shouldTickDeath(Entity p_194185_)
```

**Parameters:**

- `p_194185_` (`Entity`)

**Returns:** `boolean`

### tickNonPassenger

```java
public void tickNonPassenger(Entity p_104640_)
```

**Parameters:**

- `p_104640_` (`Entity`)

**Returns:** `public void`

### tickPassenger

```java
private void tickPassenger(Entity p_104642_, Entity p_104643_)
```

**Parameters:**

- `p_104642_` (`Entity`)
- `p_104643_` (`Entity`)

**Returns:** `private void`

### unload

```java
public void unload(LevelChunk p_104666_)
```

**Parameters:**

- `p_104666_` (`LevelChunk`)

**Returns:** `public void`

### onChunkLoaded

```java
public void onChunkLoaded(ChunkPos p_171650_)
```

**Parameters:**

- `p_171650_` (`ChunkPos`)

**Returns:** `public void`

### clearTintCaches

```java
public void clearTintCaches()
```

**Returns:** `public void`

### hasChunk

```java
public boolean hasChunk(int p_104737_, int p_104738_)
```

**Parameters:**

- `p_104737_` (`int`)
- `p_104738_` (`int`)

**Returns:** `boolean`

### getEntityCount

```java
public int getEntityCount()
```

**Returns:** `public int`

### addEntity

```java
public void addEntity(Entity p_104741_)
```

**Parameters:**

- `p_104741_` (`Entity`)

**Returns:** `public void`

### removeEntity

```java
public void removeEntity(int p_171643_, Entity.RemovalReason p_171644_)
```

**Parameters:**

- `p_171643_` (`int`)
- `p_171644_` (`Entity.RemovalReason`)

**Returns:** `public void`

### getEntity

```java
public Entity getEntity(int p_104609_)
```

**Parameters:**

- `p_104609_` (`int`)

**Returns:** `Entity`

### disconnect

```java
public void disconnect()
```

### animateTick

```java
public void animateTick(int p_104785_, int p_104786_, int p_104787_)
```

**Parameters:**

- `p_104785_` (`int`)
- `p_104786_` (`int`)
- `p_104787_` (`int`)

**Returns:** `public void`

### doAnimateTick

```java
public void doAnimateTick(int p_233613_, int p_233614_, int p_233615_, int p_233616_, RandomSource p_233617_, Block p_233618_, BlockPos.MutableBlockPos p_233619_)
```

**Parameters:**

- `p_233613_` (`int`)
- `p_233614_` (`int`)
- `p_233615_` (`int`)
- `p_233616_` (`int`)
- `p_233617_` (`RandomSource`)
- `p_233618_` (`Block`)
- `p_233619_` (`BlockPos.MutableBlockPos`)

**Returns:** `public void`

### trySpawnDripParticles

```java
private void trySpawnDripParticles(BlockPos p_104690_, BlockState p_104691_, ParticleOptions p_104692_, boolean p_104693_)
```

**Parameters:**

- `p_104690_` (`BlockPos`)
- `p_104691_` (`BlockState`)
- `p_104692_` (`ParticleOptions`)
- `p_104693_` (`boolean`)

**Returns:** `private void`

### spawnParticle

```java
private void spawnParticle(BlockPos p_104695_, ParticleOptions p_104696_, VoxelShape p_104697_, double p_104698_)
```

**Parameters:**

- `p_104695_` (`BlockPos`)
- `p_104696_` (`ParticleOptions`)
- `p_104697_` (`VoxelShape`)
- `p_104698_` (`double`)

**Returns:** `private void`

### spawnFluidParticle

```java
private void spawnFluidParticle(double p_104593_, double p_104594_, double p_104595_, double p_104596_, double p_104597_, ParticleOptions p_104598_)
```

**Parameters:**

- `p_104593_` (`double`)
- `p_104594_` (`double`)
- `p_104595_` (`double`)
- `p_104596_` (`double`)
- `p_104597_` (`double`)
- `p_104598_` (`ParticleOptions`)

**Returns:** `private void`

### fillReportDetails

```java
public CrashReportCategory fillReportDetails(CrashReport p_104729_)
```

**Parameters:**

- `p_104729_` (`CrashReport`)

**Returns:** `CrashReportCategory`

### playSeededSound

```java
public void playSeededSound(Player p_263381_, double p_263372_, double p_263404_, double p_263365_, Holder<SoundEvent> p_263335_, SoundSource p_263417_, float p_263416_, float p_263349_, long p_263408_)
```

**Parameters:**

- `p_263381_` (`Player`)
- `p_263372_` (`double`)
- `p_263404_` (`double`)
- `p_263365_` (`double`)
- `p_263335_` (`Holder<SoundEvent>`)
- `p_263417_` (`SoundSource`)
- `p_263416_` (`float`)
- `p_263349_` (`float`)
- `p_263408_` (`long`)

### playSeededSound

```java
public void playSeededSound(Player p_263514_, Entity p_263536_, Holder<SoundEvent> p_263518_, SoundSource p_263487_, float p_263538_, float p_263524_, long p_263509_)
```

**Parameters:**

- `p_263514_` (`Player`)
- `p_263536_` (`Entity`)
- `p_263518_` (`Holder<SoundEvent>`)
- `p_263487_` (`SoundSource`)
- `p_263538_` (`float`)
- `p_263524_` (`float`)
- `p_263509_` (`long`)

### playLocalSound

```java
public void playLocalSound(Entity p_312749_, SoundEvent p_312635_, SoundSource p_312007_, float p_312298_, float p_312772_)
```

**Parameters:**

- `p_312749_` (`Entity`)
- `p_312635_` (`SoundEvent`)
- `p_312007_` (`SoundSource`)
- `p_312298_` (`float`)
- `p_312772_` (`float`)

### playLocalSound

```java
public void playLocalSound(double p_104600_, double p_104601_, double p_104602_, SoundEvent p_104603_, SoundSource p_104604_, float p_104605_, float p_104606_, boolean p_104607_)
```

**Parameters:**

- `p_104600_` (`double`)
- `p_104601_` (`double`)
- `p_104602_` (`double`)
- `p_104603_` (`SoundEvent`)
- `p_104604_` (`SoundSource`)
- `p_104605_` (`float`)
- `p_104606_` (`float`)
- `p_104607_` (`boolean`)

### playSound

```java
private void playSound(double p_233603_, double p_233604_, double p_233605_, SoundEvent p_233606_, SoundSource p_233607_, float p_233608_, float p_233609_, boolean p_233610_, long p_233611_)
```

**Parameters:**

- `p_233603_` (`double`)
- `p_233604_` (`double`)
- `p_233605_` (`double`)
- `p_233606_` (`SoundEvent`)
- `p_233607_` (`SoundSource`)
- `p_233608_` (`float`)
- `p_233609_` (`float`)
- `p_233610_` (`boolean`)
- `p_233611_` (`long`)

**Returns:** `private void`

### createFireworks

```java
public void createFireworks(double p_104585_, double p_104586_, double p_104587_, double p_104588_, double p_104589_, double p_104590_, List<FireworkExplosion> p_330281_)
```

**Parameters:**

- `p_104585_` (`double`)
- `p_104586_` (`double`)
- `p_104587_` (`double`)
- `p_104588_` (`double`)
- `p_104589_` (`double`)
- `p_104590_` (`double`)
- `p_330281_` (`List<FireworkExplosion>`)

### sendPacketToServer

```java
public void sendPacketToServer(Packet<?> p_104734_)
```

**Parameters:**

- `p_104734_` (`Packet<?>`)

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

### getBlockTicks

```java
public LevelTickAccess<Block> getBlockTicks()
```

**Returns:** `LevelTickAccess<Block>`

### getFluidTicks

```java
public LevelTickAccess<Fluid> getFluidTicks()
```

**Returns:** `LevelTickAccess<Fluid>`

### getChunkSource

```java
public ClientChunkCache getChunkSource()
```

**Returns:** `public ClientChunkCache`

### getMapData

```java
public MapItemSavedData getMapData(MapId p_323873_)
```

**Parameters:**

- `p_323873_` (`MapId`)

**Returns:** `MapItemSavedData`

### overrideMapData

```java
public void overrideMapData(MapId p_323577_, MapItemSavedData p_259308_)
```

**Parameters:**

- `p_323577_` (`MapId`)
- `p_259308_` (`MapItemSavedData`)

**Returns:** `public void`

### setMapData

```java
public void setMapData(MapId p_324501_, MapItemSavedData p_171671_)
```

**Parameters:**

- `p_324501_` (`MapId`)
- `p_171671_` (`MapItemSavedData`)

### getFreeMapId

```java
public MapId getFreeMapId()
```

**Returns:** `MapId`

### MapId

```java
return new MapId()
```

**Returns:** `return new`

### getScoreboard

```java
public Scoreboard getScoreboard()
```

**Returns:** `Scoreboard`

### sendBlockUpdated

```java
public void sendBlockUpdated(BlockPos p_104685_, BlockState p_104686_, BlockState p_104687_, int p_104688_)
```

**Parameters:**

- `p_104685_` (`BlockPos`)
- `p_104686_` (`BlockState`)
- `p_104687_` (`BlockState`)
- `p_104688_` (`int`)

### setBlocksDirty

```java
public void setBlocksDirty(BlockPos p_104759_, BlockState p_104760_, BlockState p_104761_)
```

**Parameters:**

- `p_104759_` (`BlockPos`)
- `p_104760_` (`BlockState`)
- `p_104761_` (`BlockState`)

### setSectionDirtyWithNeighbors

```java
public void setSectionDirtyWithNeighbors(int p_104794_, int p_104795_, int p_104796_)
```

**Parameters:**

- `p_104794_` (`int`)
- `p_104795_` (`int`)
- `p_104796_` (`int`)

**Returns:** `public void`

### destroyBlockProgress

```java
public void destroyBlockProgress(int p_104634_, BlockPos p_104635_, int p_104636_)
```

**Parameters:**

- `p_104634_` (`int`)
- `p_104635_` (`BlockPos`)
- `p_104636_` (`int`)

### globalLevelEvent

```java
public void globalLevelEvent(int p_104743_, BlockPos p_104744_, int p_104745_)
```

**Parameters:**

- `p_104743_` (`int`)
- `p_104744_` (`BlockPos`)
- `p_104745_` (`int`)

### levelEvent

```java
public void levelEvent(Player p_104654_, int p_104655_, BlockPos p_104656_, int p_104657_)
```

**Parameters:**

- `p_104654_` (`Player`)
- `p_104655_` (`int`)
- `p_104656_` (`BlockPos`)
- `p_104657_` (`int`)

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### addParticle

```java
public void addParticle(ParticleOptions p_104706_, double p_104707_, double p_104708_, double p_104709_, double p_104710_, double p_104711_, double p_104712_)
```

**Parameters:**

- `p_104706_` (`ParticleOptions`)
- `p_104707_` (`double`)
- `p_104708_` (`double`)
- `p_104709_` (`double`)
- `p_104710_` (`double`)
- `p_104711_` (`double`)
- `p_104712_` (`double`)

### addParticle

```java
public void addParticle(ParticleOptions p_104714_, boolean p_104715_, double p_104716_, double p_104717_, double p_104718_, double p_104719_, double p_104720_, double p_104721_)
```

**Parameters:**

- `p_104714_` (`ParticleOptions`)
- `p_104715_` (`boolean`)
- `p_104716_` (`double`)
- `p_104717_` (`double`)
- `p_104718_` (`double`)
- `p_104719_` (`double`)
- `p_104720_` (`double`)
- `p_104721_` (`double`)

### addAlwaysVisibleParticle

```java
public void addAlwaysVisibleParticle(ParticleOptions p_104766_, double p_104767_, double p_104768_, double p_104769_, double p_104770_, double p_104771_, double p_104772_)
```

**Parameters:**

- `p_104766_` (`ParticleOptions`)
- `p_104767_` (`double`)
- `p_104768_` (`double`)
- `p_104769_` (`double`)
- `p_104770_` (`double`)
- `p_104771_` (`double`)
- `p_104772_` (`double`)

### addAlwaysVisibleParticle

```java
public void addAlwaysVisibleParticle(ParticleOptions p_104774_, boolean p_104775_, double p_104776_, double p_104777_, double p_104778_, double p_104779_, double p_104780_, double p_104781_)
```

**Parameters:**

- `p_104774_` (`ParticleOptions`)
- `p_104775_` (`boolean`)
- `p_104776_` (`double`)
- `p_104777_` (`double`)
- `p_104778_` (`double`)
- `p_104779_` (`double`)
- `p_104780_` (`double`)
- `p_104781_` (`double`)

### players

```java
public List<AbstractClientPlayer> players()
```

**Returns:** `List<AbstractClientPlayer>`

### getUncachedNoiseBiome

```java
public Holder<Biome> getUncachedNoiseBiome(int p_205516_, int p_205517_, int p_205518_)
```

**Parameters:**

- `p_205516_` (`int`)
- `p_205517_` (`int`)
- `p_205518_` (`int`)

**Returns:** `Holder<Biome>`

### getSkyDarken

```java
public float getSkyDarken(float p_104806_)
```

**Parameters:**

- `p_104806_` (`float`)

**Returns:** `public float`

### getSkyColor

```java
public Vec3 getSkyColor(Vec3 p_171661_, float p_171662_)
```

**Parameters:**

- `p_171661_` (`Vec3`)
- `p_171662_` (`float`)

**Returns:** `public Vec3`

### getCloudColor

```java
public Vec3 getCloudColor(float p_104809_)
```

**Parameters:**

- `p_104809_` (`float`)

**Returns:** `public Vec3`

### getStarBrightness

```java
public float getStarBrightness(float p_104812_)
```

**Parameters:**

- `p_104812_` (`float`)

**Returns:** `public float`

### getSkyFlashTime

```java
public int getSkyFlashTime()
```

**Returns:** `public int`

### setSkyFlashTime

```java
public void setSkyFlashTime(int p_104783_)
```

**Parameters:**

- `p_104783_` (`int`)

### getShade

```java
public float getShade(Direction p_104703_, boolean p_104704_)
```

**Parameters:**

- `p_104703_` (`Direction`)
- `p_104704_` (`boolean`)

**Returns:** `float`

### getBlockTint

```java
public int getBlockTint(BlockPos p_104700_, ColorResolver p_104701_)
```

**Parameters:**

- `p_104700_` (`BlockPos`)
- `p_104701_` (`ColorResolver`)

**Returns:** `int`

### calculateBlockTint

```java
public int calculateBlockTint(BlockPos p_104763_, ColorResolver p_104764_)
```

**Parameters:**

- `p_104763_` (`BlockPos`)
- `p_104764_` (`ColorResolver`)

**Returns:** `public int`

### setDefaultSpawnPos

```java
public void setDefaultSpawnPos(BlockPos p_104753_, float p_104754_)
```

**Parameters:**

- `p_104753_` (`BlockPos`)
- `p_104754_` (`float`)

**Returns:** `public void`

### toString

```java
public String toString()
```

**Returns:** `String`

### getLevelData

```java
public ClientLevel.ClientLevelData getLevelData()
```

**Returns:** `public ClientLevel.ClientLevelData`

### gameEvent

```java
public void gameEvent(Holder<GameEvent> p_316478_, Vec3 p_233640_, GameEvent.Context p_233641_)
```

**Parameters:**

- `p_316478_` (`Holder<GameEvent>`)
- `p_233640_` (`Vec3`)
- `p_233641_` (`GameEvent.Context`)

### getAllMapData

```java
protected Map<MapId, MapItemSavedData> getAllMapData()
```

**Returns:** `protected Map<MapId, MapItemSavedData>`

### addMapData

```java
protected void addMapData(Map<MapId, MapItemSavedData> p_171673_)
```

**Parameters:**

- `p_171673_` (`Map<MapId, MapItemSavedData>`)

**Returns:** `protected void`

### getEntities

```java
protected LevelEntityGetter<Entity> getEntities()
```

**Returns:** `LevelEntityGetter<Entity>`

### gatherChunkSourceStats

```java
public String gatherChunkSourceStats()
```

**Returns:** `String`

### addDestroyBlockEffect

```java
public void addDestroyBlockEffect(BlockPos p_171667_, BlockState p_171668_)
```

**Parameters:**

- `p_171667_` (`BlockPos`)
- `p_171668_` (`BlockState`)

### setServerSimulationDistance

```java
public void setServerSimulationDistance(int p_194175_)
```

**Parameters:**

- `p_194175_` (`int`)

**Returns:** `public void`

### getServerSimulationDistance

```java
public int getServerSimulationDistance()
```

**Returns:** `public int`

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

### ClientLevelData

```java
public ClientLevelData(Difficulty p_104843_, boolean p_104844_, boolean p_104845_)
```

**Parameters:**

- `p_104843_` (`Difficulty`)
- `p_104844_` (`boolean`)
- `p_104845_` (`boolean`)

**Returns:** `public`

### getSpawnPos

```java
public BlockPos getSpawnPos()
```

**Returns:** `BlockPos`

### getSpawnAngle

```java
public float getSpawnAngle()
```

**Returns:** `float`

### getGameTime

```java
public long getGameTime()
```

**Returns:** `long`

### getDayTime

```java
public long getDayTime()
```

**Returns:** `long`

### setGameTime

```java
public void setGameTime(long p_104850_)
```

**Parameters:**

- `p_104850_` (`long`)

**Returns:** `public void`

### setDayTime

```java
public void setDayTime(long p_104864_)
```

**Parameters:**

- `p_104864_` (`long`)

**Returns:** `public void`

### setSpawn

```java
public void setSpawn(BlockPos p_104854_, float p_104855_)
```

**Parameters:**

- `p_104854_` (`BlockPos`)
- `p_104855_` (`float`)

### isThundering

```java
public boolean isThundering()
```

**Returns:** `boolean`

### isRaining

```java
public boolean isRaining()
```

**Returns:** `boolean`

### setRaining

```java
public void setRaining(boolean p_104866_)
```

**Parameters:**

- `p_104866_` (`boolean`)

### isHardcore

```java
public boolean isHardcore()
```

**Returns:** `boolean`

### getGameRules

```java
public GameRules getGameRules()
```

**Returns:** `GameRules`

### getDifficulty

```java
public Difficulty getDifficulty()
```

**Returns:** `Difficulty`

### isDifficultyLocked

```java
public boolean isDifficultyLocked()
```

**Returns:** `boolean`

### fillCrashReportCategory

```java
public void fillCrashReportCategory(CrashReportCategory p_171690_, LevelHeightAccessor p_171691_)
```

**Parameters:**

- `p_171690_` (`CrashReportCategory`)
- `p_171691_` (`LevelHeightAccessor`)

### setDifficulty

```java
public void setDifficulty(Difficulty p_104852_)
```

**Parameters:**

- `p_104852_` (`Difficulty`)

**Returns:** `public void`

### setDifficultyLocked

```java
public void setDifficultyLocked(boolean p_104859_)
```

**Parameters:**

- `p_104859_` (`boolean`)

**Returns:** `public void`

### getHorizonHeight

```java
public double getHorizonHeight(LevelHeightAccessor p_171688_)
```

**Parameters:**

- `p_171688_` (`LevelHeightAccessor`)

**Returns:** `public double`

### getClearColorScale

```java
public float getClearColorScale()
```

**Returns:** `public float`

### onCreated

```java
public void onCreated(Entity p_171696_)
```

**Parameters:**

- `p_171696_` (`Entity`)

**Returns:** `public void`

### onDestroyed

```java
public void onDestroyed(Entity p_171700_)
```

**Parameters:**

- `p_171700_` (`Entity`)

**Returns:** `public void`

### onTickingStart

```java
public void onTickingStart(Entity p_171704_)
```

**Parameters:**

- `p_171704_` (`Entity`)

**Returns:** `public void`

### onTickingEnd

```java
public void onTickingEnd(Entity p_171708_)
```

**Parameters:**

- `p_171708_` (`Entity`)

**Returns:** `public void`

### onTrackingStart

```java
public void onTrackingStart(Entity p_171712_)
```

**Parameters:**

- `p_171712_` (`Entity`)

**Returns:** `public void`

### onTrackingEnd

```java
public void onTrackingEnd(Entity p_171716_)
```

**Parameters:**

- `p_171716_` (`Entity`)

**Returns:** `public void`

### onSectionChange

```java
public void onSectionChange(Entity p_233660_)
```

**Parameters:**

- `p_233660_` (`Entity`)

**Returns:** `public void`

### getPartEntities

```java
public java.util.Collection<net.neoforged.neoforge.entity.PartEntity<?>> getPartEntities()
```

**Returns:** `java.util.Collection<net.neoforged.neoforge.entity.PartEntity<?>>`

### getModelDataManager

```java
public net.neoforged.neoforge.client.model.data.ModelDataManager getModelDataManager()
```

**Returns:** `net.neoforged.neoforge.client.model.data.ModelDataManager`

### getModelData

```java
public net.neoforged.neoforge.client.model.data.ModelData getModelData(BlockPos pos)
```

**Parameters:**

- `pos` (`BlockPos`)

**Returns:** `net.neoforged.neoforge.client.model.data.ModelData`

### getShade

```java
public float getShade(float normalX, float normalY, float normalZ, boolean shade)
```

**Parameters:**

- `normalX` (`float`)
- `normalY` (`float`)
- `normalZ` (`float`)
- `shade` (`boolean`)

**Returns:** `float`

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

**Returns:** `public float`

### setDayTimePerTick

```java
.jetbrains.annotations.ApiStatus.Internal
    public void setDayTimePerTick(float dayTimePerTick)
```

**Parameters:**

- `dayTimePerTick` (`float`)

**Returns:** `.jetbrains.annotations.ApiStatus.Internal
    public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ClientLevelData` | class |  |
