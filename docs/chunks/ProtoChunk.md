# ProtoChunk

**Package:** `net.minecraft.world.level.chunk`
**Type:** class
**Extends:** `ChunkAccess`

## Methods

### ProtoChunk

```java
public ProtoChunk(ChunkPos p_188167_, UpgradeData p_188168_, LevelHeightAccessor p_188169_, Registry<Biome> p_188170_, BlendingData p_188171_)
```

**Parameters:**

- `p_188167_` (`ChunkPos`)
- `p_188168_` (`UpgradeData`)
- `p_188169_` (`LevelHeightAccessor`)
- `p_188170_` (`Registry<Biome>`)
- `p_188171_` (`BlendingData`)

**Returns:** `public`

### ProtoChunk

```java
public ProtoChunk(ChunkPos p_188173_, UpgradeData p_188174_, LevelChunkSection[] p_188175_, ProtoChunkTicks<Block> p_188176_, ProtoChunkTicks<Fluid> p_188177_, LevelHeightAccessor p_188178_, Registry<Biome> p_188179_, BlendingData p_188180_)
```

**Parameters:**

- `p_188173_` (`ChunkPos`)
- `p_188174_` (`UpgradeData`)
- `p_188175_` (`LevelChunkSection[]`)
- `p_188176_` (`ProtoChunkTicks<Block>`)
- `p_188177_` (`ProtoChunkTicks<Fluid>`)
- `p_188178_` (`LevelHeightAccessor`)
- `p_188179_` (`Registry<Biome>`)
- `p_188180_` (`BlendingData`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getBlockTicks

```java
public TickContainerAccess<Block> getBlockTicks()
```

**Returns:** `TickContainerAccess<Block>`

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

### getBlockState

```java
public BlockState getBlockState(BlockPos p_63264_)
```

**Parameters:**

- `p_63264_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
public FluidState getFluidState(BlockPos p_63239_)
```

**Parameters:**

- `p_63239_` (`BlockPos`)

**Returns:** `FluidState`

### setBlockState

```java
public BlockState setBlockState(BlockPos p_63217_, BlockState p_63218_, boolean p_63219_)
```

**Parameters:**

- `p_63217_` (`BlockPos`)
- `p_63218_` (`BlockState`)
- `p_63219_` (`boolean`)

**Returns:** `BlockState`

### setBlockEntity

```java
public void setBlockEntity(BlockEntity p_156488_)
```

**Parameters:**

- `p_156488_` (`BlockEntity`)

### getBlockEntity

```java
public BlockEntity getBlockEntity(BlockPos p_63257_)
```

**Parameters:**

- `p_63257_` (`BlockPos`)

**Returns:** `BlockEntity`

### getBlockEntities

```java
public Map<BlockPos, BlockEntity> getBlockEntities()
```

**Returns:** `public Map<BlockPos, BlockEntity>`

### addEntity

```java
public void addEntity(CompoundTag p_63243_)
```

**Parameters:**

- `p_63243_` (`CompoundTag`)

**Returns:** `public void`

### addEntity

```java
public void addEntity(Entity p_63183_)
```

**Parameters:**

- `p_63183_` (`Entity`)

### setStartForStructure

```java
public void setStartForStructure(Structure p_223432_, StructureStart p_223433_)
```

**Parameters:**

- `p_223432_` (`Structure`)
- `p_223433_` (`StructureStart`)

### getEntities

```java
public List<CompoundTag> getEntities()
```

**Returns:** `public List<CompoundTag>`

### getPersistedStatus

```java
public ChunkStatus getPersistedStatus()
```

**Returns:** `ChunkStatus`

### setPersistedStatus

```java
public void setPersistedStatus(ChunkStatus p_330748_)
```

**Parameters:**

- `p_330748_` (`ChunkStatus`)

**Returns:** `public void`

### getNoiseBiome

```java
public Holder<Biome> getNoiseBiome(int p_204450_, int p_204451_, int p_204452_)
```

**Parameters:**

- `p_204450_` (`int`)
- `p_204451_` (`int`)
- `p_204452_` (`int`)

**Returns:** `Holder<Biome>`

### IllegalStateException

```java
throw new IllegalStateException("Asking for biomes before we have biomes")
```

**Parameters:**

- `biomes"` (`"Asking for biomes before we have`)

**Returns:** `throw new`

### packOffsetCoordinates

```java
public static short packOffsetCoordinates(BlockPos p_63281_)
```

**Parameters:**

- `p_63281_` (`BlockPos`)

**Returns:** `public static short`

### unpackOffsetCoordinates

```java
public static BlockPos unpackOffsetCoordinates(short p_63228_, int p_63229_, ChunkPos p_63230_)
```

**Parameters:**

- `p_63228_` (`short`)
- `p_63229_` (`int`)
- `p_63230_` (`ChunkPos`)

**Returns:** `public static BlockPos`

### BlockPos

```java
return new BlockPos()
```

**Returns:** `return new`

### markPosForPostprocessing

```java
public void markPosForPostprocessing(BlockPos p_63266_)
```

**Parameters:**

- `p_63266_` (`BlockPos`)

### addPackedPostProcess

```java
public void addPackedPostProcess(short p_63225_, int p_63226_)
```

**Parameters:**

- `p_63225_` (`short`)
- `p_63226_` (`int`)

### getBlockEntityNbts

```java
public Map<BlockPos, CompoundTag> getBlockEntityNbts()
```

**Returns:** `public Map<BlockPos, CompoundTag>`

### getBlockEntityNbtForSaving

```java
public CompoundTag getBlockEntityNbtForSaving(BlockPos p_63275_, HolderLookup.Provider p_324473_)
```

**Parameters:**

- `p_63275_` (`BlockPos`)
- `p_324473_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### removeBlockEntity

```java
public void removeBlockEntity(BlockPos p_63262_)
```

**Parameters:**

- `p_63262_` (`BlockPos`)

### getCarvingMask

```java
public CarvingMask getCarvingMask(GenerationStep.Carving p_188185_)
```

**Parameters:**

- `p_188185_` (`GenerationStep.Carving`)

**Returns:** `CarvingMask`

### getOrCreateCarvingMask

```java
public CarvingMask getOrCreateCarvingMask(GenerationStep.Carving p_188191_)
```

**Parameters:**

- `p_188191_` (`GenerationStep.Carving`)

**Returns:** `public CarvingMask`

### setCarvingMask

```java
public void setCarvingMask(GenerationStep.Carving p_188187_, CarvingMask p_188188_)
```

**Parameters:**

- `p_188187_` (`GenerationStep.Carving`)
- `p_188188_` (`CarvingMask`)

**Returns:** `public void`

### setLightEngine

```java
public void setLightEngine(LevelLightEngine p_63210_)
```

**Parameters:**

- `p_63210_` (`LevelLightEngine`)

**Returns:** `public void`

### setBelowZeroRetrogen

```java
public void setBelowZeroRetrogen(BelowZeroRetrogen p_188184_)
```

**Parameters:**

- `p_188184_` (`BelowZeroRetrogen`)

**Returns:** `public void`

### getBelowZeroRetrogen

```java
public BelowZeroRetrogen getBelowZeroRetrogen()
```

**Returns:** `BelowZeroRetrogen`

### unpackTicks

```java
<T> private static <T> LevelChunkTicks<T> unpackTicks(ProtoChunkTicks<T> p_188190_)
```

**Parameters:**

- `p_188190_` (`ProtoChunkTicks<T>`)

**Returns:** `private static <T> LevelChunkTicks<T>`

### unpackBlockTicks

```java
public LevelChunkTicks<Block> unpackBlockTicks()
```

**Returns:** `public LevelChunkTicks<Block>`

### unpackTicks

```java
return unpackTicks()
```

**Returns:** `return`

### unpackFluidTicks

```java
public LevelChunkTicks<Fluid> unpackFluidTicks()
```

**Returns:** `public LevelChunkTicks<Fluid>`

### unpackTicks

```java
return unpackTicks()
```

**Returns:** `return`

### getHeightAccessorForGeneration

```java
public LevelHeightAccessor getHeightAccessorForGeneration()
```

**Returns:** `LevelHeightAccessor`
