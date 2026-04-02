# LevelReader

**Package:** `net.minecraft.world.level`
**Type:** interface
**Extends:** `BlockAndTintGetter, CollisionGetter, SignalGetter, BiomeManager.NoiseBiomeSource, net.neoforged.neoforge.common.extensions.ILevelReaderExtension`

## Methods

### getChunk

```java
ChunkAccess getChunk(int p_46823_, int p_46824_, ChunkStatus p_330944_, boolean p_46826_)
```

**Parameters:**

- `p_46823_` (`int`)
- `p_46824_` (`int`)
- `p_330944_` (`ChunkStatus`)
- `p_46826_` (`boolean`)

**Returns:** `ChunkAccess`

### hasChunk

```java
boolean hasChunk(int p_46838_, int p_46839_)
```

**Parameters:**

- `p_46838_` (`int`)
- `p_46839_` (`int`)

**Returns:** `boolean`

### getHeight

```java
int getHeight(Heightmap.Types p_46827_, int p_46828_, int p_46829_)
```

**Parameters:**

- `p_46827_` (`Heightmap.Types`)
- `p_46828_` (`int`)
- `p_46829_` (`int`)

**Returns:** `int`

### getSkyDarken

```java
int getSkyDarken()
```

**Returns:** `int`

### getBiomeManager

```java
BiomeManager getBiomeManager()
```

**Returns:** `BiomeManager`

### getBiome

```java
default Holder<Biome> getBiome(BlockPos p_204167_)
```

**Parameters:**

- `p_204167_` (`BlockPos`)

**Returns:** `default Holder<Biome>`

### getBlockStatesIfLoaded

```java
default Stream<BlockState> getBlockStatesIfLoaded(AABB p_46848_)
```

**Parameters:**

- `p_46848_` (`AABB`)

**Returns:** `default Stream<BlockState>`

### getBlockTint

```java
default int getBlockTint(BlockPos p_46836_, ColorResolver p_46837_)
```

**Parameters:**

- `p_46836_` (`BlockPos`)
- `p_46837_` (`ColorResolver`)

**Returns:** `int`

### getNoiseBiome

```java
default Holder<Biome> getNoiseBiome(int p_204163_, int p_204164_, int p_204165_)
```

**Parameters:**

- `p_204163_` (`int`)
- `p_204164_` (`int`)
- `p_204165_` (`int`)

**Returns:** `Holder<Biome>`

### getUncachedNoiseBiome

```java
Holder<Biome> getUncachedNoiseBiome(int p_204159_, int p_204160_, int p_204161_)
```

**Parameters:**

- `p_204159_` (`int`)
- `p_204160_` (`int`)
- `p_204161_` (`int`)

**Returns:** `Holder<Biome>`

### isClientSide

```java
boolean isClientSide()
```

**Returns:** `boolean`

### getSeaLevel

```java
int getSeaLevel()
```

**Returns:** `int`

### dimensionType

```java
DimensionType dimensionType()
```

**Returns:** `DimensionType`

### getMinBuildHeight

```java
default int getMinBuildHeight()
```

**Returns:** `int`

### getHeight

```java
default int getHeight()
```

**Returns:** `int`

### getHeightmapPos

```java
default BlockPos getHeightmapPos(Heightmap.Types p_46830_, BlockPos p_46831_)
```

**Parameters:**

- `p_46830_` (`Heightmap.Types`)
- `p_46831_` (`BlockPos`)

**Returns:** `default BlockPos`

### isEmptyBlock

```java
default boolean isEmptyBlock(BlockPos p_46860_)
```

**Parameters:**

- `p_46860_` (`BlockPos`)

**Returns:** `default boolean`

### canSeeSkyFromBelowWater

```java
default boolean canSeeSkyFromBelowWater(BlockPos p_46862_)
```

**Parameters:**

- `p_46862_` (`BlockPos`)

**Returns:** `default boolean`

### getPathfindingCostFromLightLevels

```java
default float getPathfindingCostFromLightLevels(BlockPos p_220420_)
```

**Parameters:**

- `p_220420_` (`BlockPos`)

**Returns:** `default float`

### getLightLevelDependentMagicValue

```java
default float getLightLevelDependentMagicValue(BlockPos p_220418_)
```

**Parameters:**

- `p_220418_` (`BlockPos`)

**Returns:** `float`

### getChunk

```java
default ChunkAccess getChunk(BlockPos p_46866_)
```

**Parameters:**

- `p_46866_` (`BlockPos`)

**Returns:** `default ChunkAccess`

### getChunk

```java
default ChunkAccess getChunk(int p_46807_, int p_46808_)
```

**Parameters:**

- `p_46807_` (`int`)
- `p_46808_` (`int`)

**Returns:** `default ChunkAccess`

### getChunk

```java
default ChunkAccess getChunk(int p_46820_, int p_46821_, ChunkStatus p_332007_)
```

**Parameters:**

- `p_46820_` (`int`)
- `p_46821_` (`int`)
- `p_332007_` (`ChunkStatus`)

**Returns:** `default ChunkAccess`

### getChunkForCollisions

```java
default BlockGetter getChunkForCollisions(int p_46845_, int p_46846_)
```

**Parameters:**

- `p_46845_` (`int`)
- `p_46846_` (`int`)

**Returns:** `BlockGetter`

### isWaterAt

```java
default boolean isWaterAt(BlockPos p_46802_)
```

**Parameters:**

- `p_46802_` (`BlockPos`)

**Returns:** `default boolean`

### containsAnyLiquid

```java
default boolean containsAnyLiquid(AABB p_46856_)
```

**Parameters:**

- `p_46856_` (`AABB`)

**Returns:** `default boolean`

### getMaxLocalRawBrightness

```java
default int getMaxLocalRawBrightness(BlockPos p_46804_)
```

**Parameters:**

- `p_46804_` (`BlockPos`)

**Returns:** `default int`

### getMaxLocalRawBrightness

```java
default int getMaxLocalRawBrightness(BlockPos p_46850_, int p_46851_)
```

**Parameters:**

- `p_46850_` (`BlockPos`)
- `p_46851_` (`int`)

**Returns:** `default int`

### hasChunkAt

```java
default boolean hasChunkAt(int p_151578_, int p_151579_)
```

**Parameters:**

- `p_151578_` (`int`)
- `p_151579_` (`int`)

**Returns:** `boolean`

### hasChunkAt

```java
default boolean hasChunkAt(BlockPos p_46806_)
```

**Parameters:**

- `p_46806_` (`BlockPos`)

**Returns:** `boolean`

### hasChunksAt

```java
default boolean hasChunksAt(BlockPos p_46833_, BlockPos p_46834_)
```

**Parameters:**

- `p_46833_` (`BlockPos`)
- `p_46834_` (`BlockPos`)

**Returns:** `boolean`

### hasChunksAt

```java
default boolean hasChunksAt(int p_46813_, int p_46814_, int p_46815_, int p_46816_, int p_46817_, int p_46818_)
```

**Parameters:**

- `p_46813_` (`int`)
- `p_46814_` (`int`)
- `p_46815_` (`int`)
- `p_46816_` (`int`)
- `p_46817_` (`int`)
- `p_46818_` (`int`)

**Returns:** `boolean`

### holderLookup

```java
< this.getMaxBuildHeight() ? this.hasChunksAt(p_46813_, p_46815_, p_46816_, p_46818_) : false;
    }

    @Deprecated
    default boolean hasChunksAt(int p_151573_, int p_151574_, int p_151575_, int p_151576_) {
        int i = SectionPos.blockToSectionCoord(p_151573_);
        int j = SectionPos.blockToSectionCoord(p_151575_);
        int k = SectionPos.blockToSectionCoord(p_151574_);
        int l = SectionPos.blockToSectionCoord(p_151576_);

        for (int i1 = i; i1 <= j; i1++) {
            for (int j1 = k; j1 <= l; j1++) {
                if (!this.hasChunk(i1, j1)) {
                    return false;
                }
            }
        }

        return true;
    }

    RegistryAccess registryAccess();

    FeatureFlagSet enabledFeatures();

    default <T> HolderLookup<T> holderLookup(ResourceKey<? extends Registry<? extends T>> p_249578_)
```

**Parameters:**

- `p_249578_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `HolderLookup<T>`
