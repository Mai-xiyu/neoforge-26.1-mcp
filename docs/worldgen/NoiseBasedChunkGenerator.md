# NoiseBasedChunkGenerator

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class
**Extends:** `ChunkGenerator`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<NoiseBasedChunkGenerator>` |  |

## Methods

### NoiseBasedChunkGenerator

```java
public NoiseBasedChunkGenerator(BiomeSource p_256415_, Holder<NoiseGeneratorSettings> p_256182_)
```

**Parameters:**

- `p_256415_` (`BiomeSource`)
- `p_256182_` (`Holder<NoiseGeneratorSettings>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createFluidPicker

```java
private static Aquifer.FluidPicker createFluidPicker(NoiseGeneratorSettings p_249264_)
```

**Parameters:**

- `p_249264_` (`NoiseGeneratorSettings`)

**Returns:** `private static Aquifer.FluidPicker`

### createBiomes

```java
public CompletableFuture<ChunkAccess> createBiomes(RandomState p_224299_, Blender p_224300_, StructureManager p_224301_, ChunkAccess p_224302_)
```

**Parameters:**

- `p_224299_` (`RandomState`)
- `p_224300_` (`Blender`)
- `p_224301_` (`StructureManager`)
- `p_224302_` (`ChunkAccess`)

**Returns:** `CompletableFuture<ChunkAccess>`

### doCreateBiomes

```java
private void doCreateBiomes(Blender p_224292_, RandomState p_224293_, StructureManager p_224294_, ChunkAccess p_224295_)
```

**Parameters:**

- `p_224292_` (`Blender`)
- `p_224293_` (`RandomState`)
- `p_224294_` (`StructureManager`)
- `p_224295_` (`ChunkAccess`)

**Returns:** `private void`

### createNoiseChunk

```java
private NoiseChunk createNoiseChunk(ChunkAccess p_224257_, StructureManager p_224258_, Blender p_224259_, RandomState p_224260_)
```

**Parameters:**

- `p_224257_` (`ChunkAccess`)
- `p_224258_` (`StructureManager`)
- `p_224259_` (`Blender`)
- `p_224260_` (`RandomState`)

**Returns:** `private NoiseChunk`

### codec

```java
protected MapCodec<? extends ChunkGenerator> codec()
```

**Returns:** `MapCodec<? extends ChunkGenerator>`

### generatorSettings

```java
public Holder<NoiseGeneratorSettings> generatorSettings()
```

**Returns:** `public Holder<NoiseGeneratorSettings>`

### stable

```java
public boolean stable(ResourceKey<NoiseGeneratorSettings> p_224222_)
```

**Parameters:**

- `p_224222_` (`ResourceKey<NoiseGeneratorSettings>`)

**Returns:** `public boolean`

### getBaseHeight

```java
public int getBaseHeight(int p_224216_, int p_224217_, Heightmap.Types p_224218_, LevelHeightAccessor p_224219_, RandomState p_224220_)
```

**Parameters:**

- `p_224216_` (`int`)
- `p_224217_` (`int`)
- `p_224218_` (`Heightmap.Types`)
- `p_224219_` (`LevelHeightAccessor`)
- `p_224220_` (`RandomState`)

**Returns:** `int`

### getBaseColumn

```java
public NoiseColumn getBaseColumn(int p_224211_, int p_224212_, LevelHeightAccessor p_224213_, RandomState p_224214_)
```

**Parameters:**

- `p_224211_` (`int`)
- `p_224212_` (`int`)
- `p_224213_` (`LevelHeightAccessor`)
- `p_224214_` (`RandomState`)

**Returns:** `NoiseColumn`

### addDebugScreenInfo

```java
public void addDebugScreenInfo(List<String> p_224304_, RandomState p_224305_, BlockPos p_224306_)
```

**Parameters:**

- `p_224304_` (`List<String>`)
- `p_224305_` (`RandomState`)
- `p_224306_` (`BlockPos`)

### iterateNoiseColumn

```java
protected OptionalInt iterateNoiseColumn(LevelHeightAccessor p_224240_, RandomState p_224241_, int p_224242_, int p_224243_, MutableObject<NoiseColumn> p_224244_, Predicate<BlockState> p_224245_)
```

**Parameters:**

- `p_224240_` (`LevelHeightAccessor`)
- `p_224241_` (`RandomState`)
- `p_224242_` (`int`)
- `p_224243_` (`int`)
- `p_224244_` (`MutableObject<NoiseColumn>`)
- `p_224245_` (`Predicate<BlockState>`)

**Returns:** `protected OptionalInt`

### buildSurface

```java
public void buildSurface(WorldGenRegion p_224232_, StructureManager p_224233_, RandomState p_224234_, ChunkAccess p_224235_)
```

**Parameters:**

- `p_224232_` (`WorldGenRegion`)
- `p_224233_` (`StructureManager`)
- `p_224234_` (`RandomState`)
- `p_224235_` (`ChunkAccess`)

### buildSurface

```java
public void buildSurface(ChunkAccess p_224262_, WorldGenerationContext p_224263_, RandomState p_224264_, StructureManager p_224265_, BiomeManager p_224266_, Registry<Biome> p_224267_, Blender p_224268_)
```

**Parameters:**

- `p_224262_` (`ChunkAccess`)
- `p_224263_` (`WorldGenerationContext`)
- `p_224264_` (`RandomState`)
- `p_224265_` (`StructureManager`)
- `p_224266_` (`BiomeManager`)
- `p_224267_` (`Registry<Biome>`)
- `p_224268_` (`Blender`)

### applyCarvers

```java
public void applyCarvers(WorldGenRegion p_224224_, long p_224225_, RandomState p_224226_, BiomeManager p_224227_, StructureManager p_224228_, ChunkAccess p_224229_, GenerationStep.Carving p_224230_)
```

**Parameters:**

- `p_224224_` (`WorldGenRegion`)
- `p_224225_` (`long`)
- `p_224226_` (`RandomState`)
- `p_224227_` (`BiomeManager`)
- `p_224228_` (`StructureManager`)
- `p_224229_` (`ChunkAccess`)
- `p_224230_` (`GenerationStep.Carving`)

### fillFromNoise

```java
public CompletableFuture<ChunkAccess> fillFromNoise(Blender p_224313_, RandomState p_224314_, StructureManager p_224315_, ChunkAccess p_224316_)
```

**Parameters:**

- `p_224313_` (`Blender`)
- `p_224314_` (`RandomState`)
- `p_224315_` (`StructureManager`)
- `p_224316_` (`ChunkAccess`)

**Returns:** `CompletableFuture<ChunkAccess>`

### doFill

```java
private ChunkAccess doFill(Blender p_224285_, StructureManager p_224286_, RandomState p_224287_, ChunkAccess p_224288_, int p_224289_, int p_224290_)
```

**Parameters:**

- `p_224285_` (`Blender`)
- `p_224286_` (`StructureManager`)
- `p_224287_` (`RandomState`)
- `p_224288_` (`ChunkAccess`)
- `p_224289_` (`int`)
- `p_224290_` (`int`)

**Returns:** `private ChunkAccess`

### debugPreliminarySurfaceLevel

```java
private BlockState debugPreliminarySurfaceLevel(NoiseChunk p_198232_, int p_198233_, int p_198234_, int p_198235_, BlockState p_198236_)
```

**Parameters:**

- `p_198232_` (`NoiseChunk`)
- `p_198233_` (`int`)
- `p_198234_` (`int`)
- `p_198235_` (`int`)
- `p_198236_` (`BlockState`)

**Returns:** `private BlockState`

### getGenDepth

```java
public int getGenDepth()
```

**Returns:** `int`

### getSeaLevel

```java
public int getSeaLevel()
```

**Returns:** `int`

### getMinY

```java
public int getMinY()
```

**Returns:** `int`

### spawnOriginalMobs

```java
public void spawnOriginalMobs(WorldGenRegion p_64379_)
```

**Parameters:**

- `p_64379_` (`WorldGenRegion`)
