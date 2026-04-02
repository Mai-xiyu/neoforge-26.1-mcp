# ConcentricRingsStructurePlacement

**Package:** `net.minecraft.world.level.levelgen.structure.placement`
**Type:** class
**Extends:** `StructurePlacement`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ConcentricRingsStructurePlacement>` |  |

## Methods

### codec

```java
private static P9<Mu<ConcentricRingsStructurePlacement>, Vec3i, StructurePlacement.FrequencyReductionMethod, Float, Integer, Optional<StructurePlacement.ExclusionZone>, Integer, Integer, Integer, HolderSet<Biome>> codec(Instance<ConcentricRingsStructurePlacement> p_226997_)
```

**Parameters:**

- `p_226997_` (`Instance<ConcentricRingsStructurePlacement>`)

**Returns:** `private static P9<Mu<ConcentricRingsStructurePlacement>, Vec3i, StructurePlacement.FrequencyReductionMethod, Float, Integer, Optional<StructurePlacement.ExclusionZone>, Integer, Integer, Integer, HolderSet<Biome>>`

### ConcentricRingsStructurePlacement

```java
public ConcentricRingsStructurePlacement(Vec3i p_226981_, StructurePlacement.FrequencyReductionMethod p_226982_, float p_226983_, int p_226984_, Optional<StructurePlacement.ExclusionZone> p_226985_, int p_226986_, int p_226987_, int p_226988_, HolderSet<Biome> p_226989_)
```

**Parameters:**

- `p_226981_` (`Vec3i`)
- `p_226982_` (`StructurePlacement.FrequencyReductionMethod`)
- `p_226983_` (`float`)
- `p_226984_` (`int`)
- `p_226985_` (`Optional<StructurePlacement.ExclusionZone>`)
- `p_226986_` (`int`)
- `p_226987_` (`int`)
- `p_226988_` (`int`)
- `p_226989_` (`HolderSet<Biome>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ConcentricRingsStructurePlacement

```java
public ConcentricRingsStructurePlacement(int p_226976_, int p_226977_, int p_226978_, HolderSet<Biome> p_226979_)
```

**Parameters:**

- `p_226976_` (`int`)
- `p_226977_` (`int`)
- `p_226978_` (`int`)
- `p_226979_` (`HolderSet<Biome>`)

**Returns:** `public`

### distance

```java
public int distance()
```

**Returns:** `public int`

### spread

```java
public int spread()
```

**Returns:** `public int`

### count

```java
public int count()
```

**Returns:** `public int`

### preferredBiomes

```java
public HolderSet<Biome> preferredBiomes()
```

**Returns:** `public HolderSet<Biome>`

### isPlacementChunk

```java
protected boolean isPlacementChunk(ChunkGeneratorStructureState p_256631_, int p_256202_, int p_255915_)
```

**Parameters:**

- `p_256631_` (`ChunkGeneratorStructureState`)
- `p_256202_` (`int`)
- `p_255915_` (`int`)

**Returns:** `boolean`

### type

```java
public StructurePlacementType<?> type()
```

**Returns:** `StructurePlacementType<?>`
