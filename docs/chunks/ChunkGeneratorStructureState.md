# ChunkGeneratorStructureState

**Package:** `net.minecraft.world.level.chunk`
**Type:** class

## Methods

### createForFlat

```java
public static ChunkGeneratorStructureState createForFlat(RandomState p_256240_, long p_256404_, BiomeSource p_256274_, Stream<Holder<StructureSet>> p_256348_)
```

**Parameters:**

- `p_256240_` (`RandomState`)
- `p_256404_` (`long`)
- `p_256274_` (`BiomeSource`)
- `p_256348_` (`Stream<Holder<StructureSet>>`)

**Returns:** `public static ChunkGeneratorStructureState`

### ChunkGeneratorStructureState

```java
return new ChunkGeneratorStructureState()
```

**Returns:** `return new`

### createForNormal

```java
public static ChunkGeneratorStructureState createForNormal(RandomState p_256197_, long p_255806_, BiomeSource p_256653_, HolderLookup<StructureSet> p_256659_)
```

**Parameters:**

- `p_256197_` (`RandomState`)
- `p_255806_` (`long`)
- `p_256653_` (`BiomeSource`)
- `p_256659_` (`HolderLookup<StructureSet>`)

**Returns:** `public static ChunkGeneratorStructureState`

### ChunkGeneratorStructureState

```java
return new ChunkGeneratorStructureState()
```

**Returns:** `return new`

### hasBiomesForStructureSet

```java
private static boolean hasBiomesForStructureSet(StructureSet p_255766_, BiomeSource p_256424_)
```

**Parameters:**

- `p_255766_` (`StructureSet`)
- `p_256424_` (`BiomeSource`)

**Returns:** `private static boolean`

### ChunkGeneratorStructureState

```java
private ChunkGeneratorStructureState(RandomState p_256401_, BiomeSource p_255742_, long p_256615_, long p_255979_, List<Holder<StructureSet>> p_256237_)
```

**Parameters:**

- `p_256401_` (`RandomState`)
- `p_255742_` (`BiomeSource`)
- `p_256615_` (`long`)
- `p_255979_` (`long`)
- `p_256237_` (`List<Holder<StructureSet>>`)

**Returns:** `private`

### possibleStructureSets

```java
public List<Holder<StructureSet>> possibleStructureSets()
```

**Returns:** `public List<Holder<StructureSet>>`

### generatePositions

```java
private void generatePositions()
```

**Returns:** `private void`

### generateRingPositions

```java
private CompletableFuture<List<ChunkPos>> generateRingPositions(Holder<StructureSet> p_255966_, ConcentricRingsStructurePlacement p_255744_)
```

**Parameters:**

- `p_255966_` (`Holder<StructureSet>`)
- `p_255744_` (`ConcentricRingsStructurePlacement`)

**Returns:** `private CompletableFuture<List<ChunkPos>>`

### ChunkPos

```java
return new ChunkPos()
```

**Returns:** `return new`

### ensureStructuresGenerated

```java
public void ensureStructuresGenerated()
```

**Returns:** `public void`

### getRingPositionsFor

```java
public List<ChunkPos> getRingPositionsFor(ConcentricRingsStructurePlacement p_256667_)
```

**Parameters:**

- `p_256667_` (`ConcentricRingsStructurePlacement`)

**Returns:** `List<ChunkPos>`

### getPlacementsForStructure

```java
public List<StructurePlacement> getPlacementsForStructure(Holder<Structure> p_256494_)
```

**Parameters:**

- `p_256494_` (`Holder<Structure>`)

**Returns:** `public List<StructurePlacement>`

### randomState

```java
public RandomState randomState()
```

**Returns:** `public RandomState`

### hasStructureChunkInRange

```java
public boolean hasStructureChunkInRange(Holder<StructureSet> p_256489_, int p_256593_, int p_256115_, int p_256619_)
```

**Parameters:**

- `p_256489_` (`Holder<StructureSet>`)
- `p_256593_` (`int`)
- `p_256115_` (`int`)
- `p_256619_` (`int`)

**Returns:** `public boolean`

### getLevelSeed

```java
public long getLevelSeed()
```

**Returns:** `public long`
