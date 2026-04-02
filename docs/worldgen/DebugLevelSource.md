# DebugLevelSource

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class
**Extends:** `ChunkGenerator`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DebugLevelSource>` |  |
| `AIR` | `BlockState` |  |
| `BARRIER` | `BlockState` |  |
| `HEIGHT` | `int` |  |
| `BARRIER_HEIGHT` | `int` |  |

## Methods

### DebugLevelSource

```java
public DebugLevelSource(Holder.Reference<Biome> p_255723_)
```

**Parameters:**

- `p_255723_` (`Holder.Reference<Biome>`)

**Returns:** `public`

### codec

```java
protected MapCodec<? extends ChunkGenerator> codec()
```

**Returns:** `MapCodec<? extends ChunkGenerator>`

### buildSurface

```java
public void buildSurface(WorldGenRegion p_223978_, StructureManager p_223979_, RandomState p_223980_, ChunkAccess p_223981_)
```

**Parameters:**

- `p_223978_` (`WorldGenRegion`)
- `p_223979_` (`StructureManager`)
- `p_223980_` (`RandomState`)
- `p_223981_` (`ChunkAccess`)

### applyBiomeDecoration

```java
public void applyBiomeDecoration(WorldGenLevel p_223983_, ChunkAccess p_223984_, StructureManager p_223985_)
```

**Parameters:**

- `p_223983_` (`WorldGenLevel`)
- `p_223984_` (`ChunkAccess`)
- `p_223985_` (`StructureManager`)

### fillFromNoise

```java
public CompletableFuture<ChunkAccess> fillFromNoise(Blender p_223992_, RandomState p_223993_, StructureManager p_223994_, ChunkAccess p_223995_)
```

**Parameters:**

- `p_223992_` (`Blender`)
- `p_223993_` (`RandomState`)
- `p_223994_` (`StructureManager`)
- `p_223995_` (`ChunkAccess`)

**Returns:** `CompletableFuture<ChunkAccess>`

### getBaseHeight

```java
public int getBaseHeight(int p_223964_, int p_223965_, Heightmap.Types p_223966_, LevelHeightAccessor p_223967_, RandomState p_223968_)
```

**Parameters:**

- `p_223964_` (`int`)
- `p_223965_` (`int`)
- `p_223966_` (`Heightmap.Types`)
- `p_223967_` (`LevelHeightAccessor`)
- `p_223968_` (`RandomState`)

**Returns:** `int`

### initValidStates

```java
public static void initValidStates()
```

**Returns:** `public static void`

### getBaseColumn

```java
public NoiseColumn getBaseColumn(int p_223959_, int p_223960_, LevelHeightAccessor p_223961_, RandomState p_223962_)
```

**Parameters:**

- `p_223959_` (`int`)
- `p_223960_` (`int`)
- `p_223961_` (`LevelHeightAccessor`)
- `p_223962_` (`RandomState`)

**Returns:** `NoiseColumn`

### NoiseColumn

```java
return new NoiseColumn(new BlockState[0])
```

**Parameters:**

- `BlockState[0]` (`new`)

**Returns:** `return new`

### addDebugScreenInfo

```java
public void addDebugScreenInfo(List<String> p_223987_, RandomState p_223988_, BlockPos p_223989_)
```

**Parameters:**

- `p_223987_` (`List<String>`)
- `p_223988_` (`RandomState`)
- `p_223989_` (`BlockPos`)

### getBlockStateFor

```java
public static BlockState getBlockStateFor(int p_64149_, int p_64150_)
```

**Parameters:**

- `p_64149_` (`int`)
- `p_64150_` (`int`)

**Returns:** `public static BlockState`

### applyCarvers

```java
public void applyCarvers(WorldGenRegion p_223970_, long p_223971_, RandomState p_223972_, BiomeManager p_223973_, StructureManager p_223974_, ChunkAccess p_223975_, GenerationStep.Carving p_223976_)
```

**Parameters:**

- `p_223970_` (`WorldGenRegion`)
- `p_223971_` (`long`)
- `p_223972_` (`RandomState`)
- `p_223973_` (`BiomeManager`)
- `p_223974_` (`StructureManager`)
- `p_223975_` (`ChunkAccess`)
- `p_223976_` (`GenerationStep.Carving`)

### spawnOriginalMobs

```java
public void spawnOriginalMobs(WorldGenRegion p_188511_)
```

**Parameters:**

- `p_188511_` (`WorldGenRegion`)

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
