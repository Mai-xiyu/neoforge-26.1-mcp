# RandomSpreadStructurePlacement

**Package:** `net.minecraft.world.level.levelgen.structure.placement`
**Type:** class
**Extends:** `StructurePlacement`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RandomSpreadStructurePlacement>` |  |

## Methods

### validate

```java
private static DataResult<RandomSpreadStructurePlacement> validate(RandomSpreadStructurePlacement p_286361_)
```

**Parameters:**

- `p_286361_` (`RandomSpreadStructurePlacement`)

**Returns:** `private static DataResult<RandomSpreadStructurePlacement>`

### RandomSpreadStructurePlacement

```java
public RandomSpreadStructurePlacement(Vec3i p_227000_, StructurePlacement.FrequencyReductionMethod p_227001_, float p_227002_, int p_227003_, Optional<StructurePlacement.ExclusionZone> p_227004_, int p_227005_, int p_227006_, RandomSpreadType p_227007_)
```

**Parameters:**

- `p_227000_` (`Vec3i`)
- `p_227001_` (`StructurePlacement.FrequencyReductionMethod`)
- `p_227002_` (`float`)
- `p_227003_` (`int`)
- `p_227004_` (`Optional<StructurePlacement.ExclusionZone>`)
- `p_227005_` (`int`)
- `p_227006_` (`int`)
- `p_227007_` (`RandomSpreadType`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### RandomSpreadStructurePlacement

```java
public RandomSpreadStructurePlacement(int p_204980_, int p_204981_, RandomSpreadType p_204982_, int p_204983_)
```

**Parameters:**

- `p_204980_` (`int`)
- `p_204981_` (`int`)
- `p_204982_` (`RandomSpreadType`)
- `p_204983_` (`int`)

**Returns:** `public`

### spacing

```java
public int spacing()
```

**Returns:** `public int`

### separation

```java
public int separation()
```

**Returns:** `public int`

### spreadType

```java
public RandomSpreadType spreadType()
```

**Returns:** `public RandomSpreadType`

### getPotentialStructureChunk

```java
public ChunkPos getPotentialStructureChunk(long p_227009_, int p_227010_, int p_227011_)
```

**Parameters:**

- `p_227009_` (`long`)
- `p_227010_` (`int`)
- `p_227011_` (`int`)

**Returns:** `public ChunkPos`

### ChunkPos

```java
return new ChunkPos(i * this.spacing + l, j * this.spacing + i1)
```

**Parameters:**

- `l` (`i * this.spacing +`)
- `i1` (`j * this.spacing +`)

**Returns:** `return new`

### isPlacementChunk

```java
protected boolean isPlacementChunk(ChunkGeneratorStructureState p_256267_, int p_256050_, int p_255975_)
```

**Parameters:**

- `p_256267_` (`ChunkGeneratorStructureState`)
- `p_256050_` (`int`)
- `p_255975_` (`int`)

**Returns:** `boolean`

### type

```java
public StructurePlacementType<?> type()
```

**Returns:** `StructurePlacementType<?>`
