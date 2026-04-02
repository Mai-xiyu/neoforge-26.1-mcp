# WorldGenRegion

**Package:** `net.minecraft.server.level`
**Type:** class
**Implements:** `WorldGenLevel`

## Methods

### WorldGenRegion

```java
public WorldGenRegion(ServerLevel p_143484_, StaticCache2D<GenerationChunkHolder> p_347548_, ChunkStep p_347626_, ChunkAccess p_347663_)
```

**Parameters:**

- `p_143484_` (`ServerLevel`)
- `p_347548_` (`StaticCache2D<GenerationChunkHolder>`)
- `p_347626_` (`ChunkStep`)
- `p_347663_` (`ChunkAccess`)

**Returns:** `public`

### isOldChunkAround

```java
public boolean isOldChunkAround(ChunkPos p_215160_, int p_215161_)
```

**Parameters:**

- `p_215160_` (`ChunkPos`)
- `p_215161_` (`int`)

**Returns:** `public boolean`

### getCenter

```java
public ChunkPos getCenter()
```

**Returns:** `public ChunkPos`

### setCurrentlyGenerating

```java
public void setCurrentlyGenerating(Supplier<String> p_143498_)
```

**Parameters:**

- `p_143498_` (`Supplier<String>`)

### getChunk

```java
public ChunkAccess getChunk(int p_9507_, int p_9508_)
```

**Parameters:**

- `p_9507_` (`int`)
- `p_9508_` (`int`)

**Returns:** `ChunkAccess`

### getChunk

```java
public ChunkAccess getChunk(int p_9514_, int p_9515_, ChunkStatus p_331853_, boolean p_9517_)
```

**Parameters:**

- `p_9514_` (`int`)
- `p_9515_` (`int`)
- `p_331853_` (`ChunkStatus`)
- `p_9517_` (`boolean`)

**Returns:** `ChunkAccess`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### hasChunk

```java
public boolean hasChunk(int p_9574_, int p_9575_)
```

**Parameters:**

- `p_9574_` (`int`)
- `p_9575_` (`int`)

**Returns:** `boolean`

### getBlockState

```java
public BlockState getBlockState(BlockPos p_9587_)
```

**Parameters:**

- `p_9587_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
public FluidState getFluidState(BlockPos p_9577_)
```

**Parameters:**

- `p_9577_` (`BlockPos`)

**Returns:** `FluidState`

### getNearestPlayer

```java
public Player getNearestPlayer(double p_9501_, double p_9502_, double p_9503_, double p_9504_, Predicate<Entity> p_9505_)
```

**Parameters:**

- `p_9501_` (`double`)
- `p_9502_` (`double`)
- `p_9503_` (`double`)
- `p_9504_` (`double`)
- `p_9505_` (`Predicate<Entity>`)

**Returns:** `Player`

### getSkyDarken

```java
public int getSkyDarken()
```

**Returns:** `int`

### getBiomeManager

```java
public BiomeManager getBiomeManager()
```

**Returns:** `BiomeManager`

### getUncachedNoiseBiome

```java
public Holder<Biome> getUncachedNoiseBiome(int p_203787_, int p_203788_, int p_203789_)
```

**Parameters:**

- `p_203787_` (`int`)
- `p_203788_` (`int`)
- `p_203789_` (`int`)

**Returns:** `Holder<Biome>`

### getShade

```java
public float getShade(Direction p_9555_, boolean p_9556_)
```

**Parameters:**

- `p_9555_` (`Direction`)
- `p_9556_` (`boolean`)

**Returns:** `float`

### getLightEngine

```java
public LevelLightEngine getLightEngine()
```

**Returns:** `LevelLightEngine`

### destroyBlock

```java
public boolean destroyBlock(BlockPos p_9550_, boolean p_9551_, Entity p_9552_, int p_9553_)
```

**Parameters:**

- `p_9550_` (`BlockPos`)
- `p_9551_` (`boolean`)
- `p_9552_` (`Entity`)
- `p_9553_` (`int`)

**Returns:** `boolean`

### getBlockEntity

```java
public BlockEntity getBlockEntity(BlockPos p_9582_)
```

**Parameters:**

- `p_9582_` (`BlockPos`)

**Returns:** `BlockEntity`

### ensureCanWrite

```java
public boolean ensureCanWrite(BlockPos p_181031_)
```

**Parameters:**

- `p_181031_` (`BlockPos`)

**Returns:** `boolean`

### setBlock

```java
public boolean setBlock(BlockPos p_9539_, BlockState p_9540_, int p_9541_, int p_9542_)
```

**Parameters:**

- `p_9539_` (`BlockPos`)
- `p_9540_` (`BlockState`)
- `p_9541_` (`int`)
- `p_9542_` (`int`)

**Returns:** `boolean`

### markPosForPostprocessing

```java
private void markPosForPostprocessing(BlockPos p_9592_)
```

**Parameters:**

- `p_9592_` (`BlockPos`)

**Returns:** `private void`

### addFreshEntity

```java
public boolean addFreshEntity(Entity p_9580_)
```

**Parameters:**

- `p_9580_` (`Entity`)

**Returns:** `boolean`

### removeBlock

```java
public boolean removeBlock(BlockPos p_9547_, boolean p_9548_)
```

**Parameters:**

- `p_9547_` (`BlockPos`)
- `p_9548_` (`boolean`)

**Returns:** `boolean`

### getWorldBorder

```java
public WorldBorder getWorldBorder()
```

**Returns:** `WorldBorder`

### isClientSide

```java
public boolean isClientSide()
```

**Returns:** `boolean`

### getLevel

```java
public ServerLevel getLevel()
```

**Returns:** `ServerLevel`

### registryAccess

```java
public RegistryAccess registryAccess()
```

**Returns:** `RegistryAccess`

### enabledFeatures

```java
public FeatureFlagSet enabledFeatures()
```

**Returns:** `FeatureFlagSet`

### getLevelData

```java
public LevelData getLevelData()
```

**Returns:** `LevelData`

### getCurrentDifficultyAt

```java
public DifficultyInstance getCurrentDifficultyAt(BlockPos p_9585_)
```

**Parameters:**

- `p_9585_` (`BlockPos`)

**Returns:** `DifficultyInstance`

### RuntimeException

```java
throw new RuntimeException("We are asking a region for a chunk out of bound")
```

**Parameters:**

- `bound"` (`"We are asking a region for a chunk out of`)

**Returns:** `throw new`

### getServer

```java
public MinecraftServer getServer()
```

**Returns:** `MinecraftServer`

### getChunkSource

```java
public ChunkSource getChunkSource()
```

**Returns:** `ChunkSource`

### getSeed

```java
public long getSeed()
```

**Returns:** `long`

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

### getSeaLevel

```java
public int getSeaLevel()
```

**Returns:** `int`

### getRandom

```java
public RandomSource getRandom()
```

**Returns:** `RandomSource`

### getHeight

```java
public int getHeight(Heightmap.Types p_9535_, int p_9536_, int p_9537_)
```

**Parameters:**

- `p_9535_` (`Heightmap.Types`)
- `p_9536_` (`int`)
- `p_9537_` (`int`)

**Returns:** `int`

### playSound

```java
public void playSound(Player p_9528_, BlockPos p_9529_, SoundEvent p_9530_, SoundSource p_9531_, float p_9532_, float p_9533_)
```

**Parameters:**

- `p_9528_` (`Player`)
- `p_9529_` (`BlockPos`)
- `p_9530_` (`SoundEvent`)
- `p_9531_` (`SoundSource`)
- `p_9532_` (`float`)
- `p_9533_` (`float`)

### addParticle

```java
public void addParticle(ParticleOptions p_9561_, double p_9562_, double p_9563_, double p_9564_, double p_9565_, double p_9566_, double p_9567_)
```

**Parameters:**

- `p_9561_` (`ParticleOptions`)
- `p_9562_` (`double`)
- `p_9563_` (`double`)
- `p_9564_` (`double`)
- `p_9565_` (`double`)
- `p_9566_` (`double`)
- `p_9567_` (`double`)

### levelEvent

```java
public void levelEvent(Player p_9523_, int p_9524_, BlockPos p_9525_, int p_9526_)
```

**Parameters:**

- `p_9523_` (`Player`)
- `p_9524_` (`int`)
- `p_9525_` (`BlockPos`)
- `p_9526_` (`int`)

### gameEvent

```java
public void gameEvent(Holder<GameEvent> p_316792_, Vec3 p_215164_, GameEvent.Context p_215165_)
```

**Parameters:**

- `p_316792_` (`Holder<GameEvent>`)
- `p_215164_` (`Vec3`)
- `p_215165_` (`GameEvent.Context`)

### dimensionType

```java
public DimensionType dimensionType()
```

**Returns:** `DimensionType`

### isStateAtPosition

```java
public boolean isStateAtPosition(BlockPos p_9544_, Predicate<BlockState> p_9545_)
```

**Parameters:**

- `p_9544_` (`BlockPos`)
- `p_9545_` (`Predicate<BlockState>`)

**Returns:** `boolean`

### isFluidAtPosition

```java
public boolean isFluidAtPosition(BlockPos p_143500_, Predicate<FluidState> p_143501_)
```

**Parameters:**

- `p_143500_` (`BlockPos`)
- `p_143501_` (`Predicate<FluidState>`)

**Returns:** `boolean`

### getEntities

```java
public <T extends Entity> List<T> getEntities(EntityTypeTest<Entity, T> p_143494_, AABB p_143495_, Predicate<? super T> p_143496_)
```

**Parameters:**

- `p_143494_` (`EntityTypeTest<Entity, T>`)
- `p_143495_` (`AABB`)
- `p_143496_` (`Predicate<? super T>`)

**Returns:** `List<T>`

### getEntities

```java
public List<Entity> getEntities(Entity p_9519_, AABB p_9520_, Predicate<? super Entity> p_9521_)
```

**Parameters:**

- `p_9519_` (`Entity`)
- `p_9520_` (`AABB`)
- `p_9521_` (`Predicate<? super Entity>`)

**Returns:** `List<Entity>`

### players

```java
public List<Player> players()
```

**Returns:** `List<Player>`

### getMinBuildHeight

```java
public int getMinBuildHeight()
```

**Returns:** `int`

### getHeight

```java
public int getHeight()
```

**Returns:** `int`

### nextSubTickCount

```java
public long nextSubTickCount()
```

**Returns:** `long`
