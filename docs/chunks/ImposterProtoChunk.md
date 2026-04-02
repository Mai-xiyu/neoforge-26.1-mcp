# ImposterProtoChunk

**Package:** `net.minecraft.world.level.chunk`
**Type:** class
**Extends:** `ProtoChunk`

## Methods

### ImposterProtoChunk

```java
public ImposterProtoChunk(LevelChunk p_187920_, boolean p_187921_)
```

**Parameters:**

- `p_187920_` (`LevelChunk`)
- `p_187921_` (`boolean`)

**Returns:** `public`

### getBlockEntity

```java
public BlockEntity getBlockEntity(BlockPos p_62744_)
```

**Parameters:**

- `p_62744_` (`BlockPos`)

**Returns:** `BlockEntity`

### getBlockState

```java
public BlockState getBlockState(BlockPos p_62749_)
```

**Parameters:**

- `p_62749_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
public FluidState getFluidState(BlockPos p_62736_)
```

**Parameters:**

- `p_62736_` (`BlockPos`)

**Returns:** `FluidState`

### getMaxLightLevel

```java
public int getMaxLightLevel()
```

**Returns:** `int`

### getSection

```java
public LevelChunkSection getSection(int p_187932_)
```

**Parameters:**

- `p_187932_` (`int`)

**Returns:** `LevelChunkSection`

### setBlockState

```java
public BlockState setBlockState(BlockPos p_62722_, BlockState p_62723_, boolean p_62724_)
```

**Parameters:**

- `p_62722_` (`BlockPos`)
- `p_62723_` (`BlockState`)
- `p_62724_` (`boolean`)

**Returns:** `BlockState`

### setBlockEntity

```java
public void setBlockEntity(BlockEntity p_156358_)
```

**Parameters:**

- `p_156358_` (`BlockEntity`)

### addEntity

```java
public void addEntity(Entity p_62692_)
```

**Parameters:**

- `p_62692_` (`Entity`)

### setPersistedStatus

```java
public void setPersistedStatus(ChunkStatus p_347629_)
```

**Parameters:**

- `p_347629_` (`ChunkStatus`)

### getSections

```java
public LevelChunkSection[] getSections()
```

**Returns:** `LevelChunkSection[]`

### setHeightmap

```java
public void setHeightmap(Heightmap.Types p_62706_, long[] p_62707_)
```

**Parameters:**

- `p_62706_` (`Heightmap.Types`)
- `p_62707_` (`long[]`)

### fixType

```java
private Heightmap.Types fixType(Heightmap.Types p_62742_)
```

**Parameters:**

- `p_62742_` (`Heightmap.Types`)

**Returns:** `private Heightmap.Types`

### getOrCreateHeightmapUnprimed

```java
public Heightmap getOrCreateHeightmapUnprimed(Heightmap.Types p_187928_)
```

**Parameters:**

- `p_187928_` (`Heightmap.Types`)

**Returns:** `Heightmap`

### getHeight

```java
public int getHeight(Heightmap.Types p_62702_, int p_62703_, int p_62704_)
```

**Parameters:**

- `p_62702_` (`Heightmap.Types`)
- `p_62703_` (`int`)
- `p_62704_` (`int`)

**Returns:** `int`

### getNoiseBiome

```java
public Holder<Biome> getNoiseBiome(int p_204430_, int p_204431_, int p_204432_)
```

**Parameters:**

- `p_204430_` (`int`)
- `p_204431_` (`int`)
- `p_204432_` (`int`)

**Returns:** `Holder<Biome>`

### getPos

```java
public ChunkPos getPos()
```

**Returns:** `ChunkPos`

### getStartForStructure

```java
public StructureStart getStartForStructure(Structure p_223400_)
```

**Parameters:**

- `p_223400_` (`Structure`)

**Returns:** `StructureStart`

### setStartForStructure

```java
public void setStartForStructure(Structure p_223405_, StructureStart p_223406_)
```

**Parameters:**

- `p_223405_` (`Structure`)
- `p_223406_` (`StructureStart`)

### getAllStarts

```java
public Map<Structure, StructureStart> getAllStarts()
```

**Returns:** `Map<Structure, StructureStart>`

### setAllStarts

```java
public void setAllStarts(Map<Structure, StructureStart> p_62726_)
```

**Parameters:**

- `p_62726_` (`Map<Structure, StructureStart>`)

### getReferencesForStructure

```java
public LongSet getReferencesForStructure(Structure p_223408_)
```

**Parameters:**

- `p_223408_` (`Structure`)

**Returns:** `LongSet`

### addReferenceForStructure

```java
public void addReferenceForStructure(Structure p_223402_, long p_223403_)
```

**Parameters:**

- `p_223402_` (`Structure`)
- `p_223403_` (`long`)

### getAllReferences

```java
public Map<Structure, LongSet> getAllReferences()
```

**Returns:** `Map<Structure, LongSet>`

### setAllReferences

```java
public void setAllReferences(Map<Structure, LongSet> p_62738_)
```

**Parameters:**

- `p_62738_` (`Map<Structure, LongSet>`)

### setUnsaved

```java
public void setUnsaved(boolean p_62730_)
```

**Parameters:**

- `p_62730_` (`boolean`)

### isUnsaved

```java
public boolean isUnsaved()
```

**Returns:** `boolean`

### getPersistedStatus

```java
public ChunkStatus getPersistedStatus()
```

**Returns:** `ChunkStatus`

### removeBlockEntity

```java
public void removeBlockEntity(BlockPos p_62747_)
```

**Parameters:**

- `p_62747_` (`BlockPos`)

### markPosForPostprocessing

```java
public void markPosForPostprocessing(BlockPos p_62752_)
```

**Parameters:**

- `p_62752_` (`BlockPos`)

### setBlockEntityNbt

```java
public void setBlockEntityNbt(CompoundTag p_62728_)
```

**Parameters:**

- `p_62728_` (`CompoundTag`)

### getBlockEntityNbt

```java
public CompoundTag getBlockEntityNbt(BlockPos p_62757_)
```

**Parameters:**

- `p_62757_` (`BlockPos`)

**Returns:** `CompoundTag`

### getBlockEntityNbtForSaving

```java
public CompoundTag getBlockEntityNbtForSaving(BlockPos p_62760_, HolderLookup.Provider p_323691_)
```

**Parameters:**

- `p_62760_` (`BlockPos`)
- `p_323691_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### findBlocks

```java
public void findBlocks(Predicate<BlockState> p_285465_, BiConsumer<BlockPos, BlockState> p_285061_)
```

**Parameters:**

- `p_285465_` (`Predicate<BlockState>`)
- `p_285061_` (`BiConsumer<BlockPos, BlockState>`)

### findBlocks

```java
public void findBlocks(java.util.function.BiPredicate<BlockState, BlockPos> p_285465_, BiConsumer<BlockPos, BlockState> p_285030_)
```

**Parameters:**

- `p_285465_` (`java.util.function.BiPredicate<BlockState, BlockPos>`)
- `p_285030_` (`BiConsumer<BlockPos, BlockState>`)

### findBlocks

```java
public void findBlocks(Predicate<BlockState> p_285465_, java.util.function.BiPredicate<BlockState, BlockPos> fineFilter, BiConsumer<BlockPos, BlockState> p_285030_)
```

**Parameters:**

- `p_285465_` (`Predicate<BlockState>`)
- `fineFilter` (`java.util.function.BiPredicate<BlockState, BlockPos>`)
- `p_285030_` (`BiConsumer<BlockPos, BlockState>`)

### getBlockTicks

```java
public TickContainerAccess<Block> getBlockTicks()
```

**Returns:** `public TickContainerAccess<Block>`

### getFluidTicks

```java
public TickContainerAccess<Fluid> getFluidTicks()
```

**Returns:** `TickContainerAccess<Fluid>`

### getTicksForSerialization

```java
public ChunkAccess.TicksToSave getTicksForSerialization()
```

**Returns:** `ChunkAccess.TicksToSave`

### getBlendingData

```java
public BlendingData getBlendingData()
```

**Returns:** `BlendingData`

### setBlendingData

```java
public void setBlendingData(BlendingData p_187930_)
```

**Parameters:**

- `p_187930_` (`BlendingData`)

### getCarvingMask

```java
public CarvingMask getCarvingMask(GenerationStep.Carving p_187926_)
```

**Parameters:**

- `p_187926_` (`GenerationStep.Carving`)

**Returns:** `CarvingMask`

### getOrCreateCarvingMask

```java
public CarvingMask getOrCreateCarvingMask(GenerationStep.Carving p_187934_)
```

**Parameters:**

- `p_187934_` (`GenerationStep.Carving`)

**Returns:** `CarvingMask`

### getWrapped

```java
public LevelChunk getWrapped()
```

**Returns:** `public LevelChunk`

### isLightCorrect

```java
public boolean isLightCorrect()
```

**Returns:** `boolean`

### setLightCorrect

```java
public void setLightCorrect(boolean p_62740_)
```

**Parameters:**

- `p_62740_` (`boolean`)

### fillBiomesFromNoise

```java
public void fillBiomesFromNoise(BiomeResolver p_187923_, Climate.Sampler p_187924_)
```

**Parameters:**

- `p_187923_` (`BiomeResolver`)
- `p_187924_` (`Climate.Sampler`)

### initializeLightSources

```java
public void initializeLightSources()
```

### getSkyLightSources

```java
public ChunkSkyLightSources getSkyLightSources()
```

**Returns:** `ChunkSkyLightSources`

### getAttachmentHolder

```java
public net.neoforged.neoforge.attachment.AttachmentHolder.AsField getAttachmentHolder()
```

**Returns:** `net.neoforged.neoforge.attachment.AttachmentHolder.AsField`
