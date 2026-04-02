# FlatLevelSource

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class
**Extends:** `ChunkGenerator`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FlatLevelSource>` |  |

## Methods

### FlatLevelSource

```java
public FlatLevelSource(FlatLevelGeneratorSettings p_256337_)
```

**Parameters:**

- `p_256337_` (`FlatLevelGeneratorSettings`)

**Returns:** `public`

### createState

```java
public ChunkGeneratorStructureState createState(HolderLookup<StructureSet> p_256602_, RandomState p_255830_, long p_256355_)
```

**Parameters:**

- `p_256602_` (`HolderLookup<StructureSet>`)
- `p_255830_` (`RandomState`)
- `p_256355_` (`long`)

**Returns:** `ChunkGeneratorStructureState`

### codec

```java
protected MapCodec<? extends ChunkGenerator> codec()
```

**Returns:** `MapCodec<? extends ChunkGenerator>`

### settings

```java
public FlatLevelGeneratorSettings settings()
```

**Returns:** `public FlatLevelGeneratorSettings`

### buildSurface

```java
public void buildSurface(WorldGenRegion p_224174_, StructureManager p_224175_, RandomState p_224176_, ChunkAccess p_224177_)
```

**Parameters:**

- `p_224174_` (`WorldGenRegion`)
- `p_224175_` (`StructureManager`)
- `p_224176_` (`RandomState`)
- `p_224177_` (`ChunkAccess`)

### getSpawnHeight

```java
public int getSpawnHeight(LevelHeightAccessor p_158279_)
```

**Parameters:**

- `p_158279_` (`LevelHeightAccessor`)

**Returns:** `int`

### fillFromNoise

```java
public CompletableFuture<ChunkAccess> fillFromNoise(Blender p_224184_, RandomState p_224185_, StructureManager p_224186_, ChunkAccess p_224187_)
```

**Parameters:**

- `p_224184_` (`Blender`)
- `p_224185_` (`RandomState`)
- `p_224186_` (`StructureManager`)
- `p_224187_` (`ChunkAccess`)

**Returns:** `CompletableFuture<ChunkAccess>`

### getBaseHeight

```java
public int getBaseHeight(int p_224160_, int p_224161_, Heightmap.Types p_224162_, LevelHeightAccessor p_224163_, RandomState p_224164_)
```

**Parameters:**

- `p_224160_` (`int`)
- `p_224161_` (`int`)
- `p_224162_` (`Heightmap.Types`)
- `p_224163_` (`LevelHeightAccessor`)
- `p_224164_` (`RandomState`)

**Returns:** `int`

### getBaseColumn

```java
public NoiseColumn getBaseColumn(int p_224155_, int p_224156_, LevelHeightAccessor p_224157_, RandomState p_224158_)
```

**Parameters:**

- `p_224155_` (`int`)
- `p_224156_` (`int`)
- `p_224157_` (`LevelHeightAccessor`)
- `p_224158_` (`RandomState`)

**Returns:** `NoiseColumn`

### addDebugScreenInfo

```java
public void addDebugScreenInfo(List<String> p_224179_, RandomState p_224180_, BlockPos p_224181_)
```

**Parameters:**

- `p_224179_` (`List<String>`)
- `p_224180_` (`RandomState`)
- `p_224181_` (`BlockPos`)

### applyCarvers

```java
public void applyCarvers(WorldGenRegion p_224166_, long p_224167_, RandomState p_224168_, BiomeManager p_224169_, StructureManager p_224170_, ChunkAccess p_224171_, GenerationStep.Carving p_224172_)
```

**Parameters:**

- `p_224166_` (`WorldGenRegion`)
- `p_224167_` (`long`)
- `p_224168_` (`RandomState`)
- `p_224169_` (`BiomeManager`)
- `p_224170_` (`StructureManager`)
- `p_224171_` (`ChunkAccess`)
- `p_224172_` (`GenerationStep.Carving`)

### spawnOriginalMobs

```java
public void spawnOriginalMobs(WorldGenRegion p_188545_)
```

**Parameters:**

- `p_188545_` (`WorldGenRegion`)

### getMinY

```java
public int getMinY()
```

**Returns:** `int`

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
