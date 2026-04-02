# StructureManager

**Package:** `net.minecraft.world.level`
**Type:** class

## Methods

### StructureManager

```java
public StructureManager(LevelAccessor p_249675_, WorldOptions p_248820_, StructureCheck p_249103_)
```

**Parameters:**

- `p_249675_` (`LevelAccessor`)
- `p_248820_` (`WorldOptions`)
- `p_249103_` (`StructureCheck`)

**Returns:** `public`

### forWorldGenRegion

```java
public StructureManager forWorldGenRegion(WorldGenRegion p_220469_)
```

**Parameters:**

- `p_220469_` (`WorldGenRegion`)

**Returns:** `public StructureManager`

### StructureManager

```java
return new StructureManager()
```

**Returns:** `return new`

### startsForStructure

```java
public List<StructureStart> startsForStructure(ChunkPos p_220478_, Predicate<Structure> p_220479_)
```

**Parameters:**

- `p_220478_` (`ChunkPos`)
- `p_220479_` (`Predicate<Structure>`)

**Returns:** `public List<StructureStart>`

### startsForStructure

```java
public List<StructureStart> startsForStructure(SectionPos p_220505_, Structure p_220506_)
```

**Parameters:**

- `p_220505_` (`SectionPos`)
- `p_220506_` (`Structure`)

**Returns:** `public List<StructureStart>`

### fillStartsForStructure

```java
public void fillStartsForStructure(Structure p_220481_, LongSet p_220482_, Consumer<StructureStart> p_220483_)
```

**Parameters:**

- `p_220481_` (`Structure`)
- `p_220482_` (`LongSet`)
- `p_220483_` (`Consumer<StructureStart>`)

**Returns:** `public void`

### getStartForStructure

```java
public StructureStart getStartForStructure(SectionPos p_220513_, Structure p_220514_, StructureAccess p_220515_)
```

**Parameters:**

- `p_220513_` (`SectionPos`)
- `p_220514_` (`Structure`)
- `p_220515_` (`StructureAccess`)

**Returns:** `StructureStart`

### setStartForStructure

```java
public void setStartForStructure(SectionPos p_220517_, Structure p_220518_, StructureStart p_220519_, StructureAccess p_220520_)
```

**Parameters:**

- `p_220517_` (`SectionPos`)
- `p_220518_` (`Structure`)
- `p_220519_` (`StructureStart`)
- `p_220520_` (`StructureAccess`)

**Returns:** `public void`

### addReferenceForStructure

```java
public void addReferenceForStructure(SectionPos p_220508_, Structure p_220509_, long p_220510_, StructureAccess p_220511_)
```

**Parameters:**

- `p_220508_` (`SectionPos`)
- `p_220509_` (`Structure`)
- `p_220510_` (`long`)
- `p_220511_` (`StructureAccess`)

**Returns:** `public void`

### shouldGenerateStructures

```java
public boolean shouldGenerateStructures()
```

**Returns:** `public boolean`

### getStructureAt

```java
public StructureStart getStructureAt(BlockPos p_220495_, Structure p_220496_)
```

**Parameters:**

- `p_220495_` (`BlockPos`)
- `p_220496_` (`Structure`)

**Returns:** `public StructureStart`

### getStructureWithPieceAt

```java
public StructureStart getStructureWithPieceAt(BlockPos p_220492_, TagKey<Structure> p_220493_)
```

**Parameters:**

- `p_220492_` (`BlockPos`)
- `p_220493_` (`TagKey<Structure>`)

**Returns:** `public StructureStart`

### getStructureWithPieceAt

```java
public StructureStart getStructureWithPieceAt(BlockPos p_331369_, HolderSet<Structure> p_330290_)
```

**Parameters:**

- `p_331369_` (`BlockPos`)
- `p_330290_` (`HolderSet<Structure>`)

**Returns:** `public StructureStart`

### getStructureWithPieceAt

```java
public StructureStart getStructureWithPieceAt(BlockPos p_220489_, Predicate<Holder<Structure>> p_332144_)
```

**Parameters:**

- `p_220489_` (`BlockPos`)
- `p_332144_` (`Predicate<Holder<Structure>>`)

**Returns:** `public StructureStart`

### getStructureWithPieceAt

```java
public StructureStart getStructureWithPieceAt(BlockPos p_220525_, Structure p_220526_)
```

**Parameters:**

- `p_220525_` (`BlockPos`)
- `p_220526_` (`Structure`)

**Returns:** `public StructureStart`

### structureHasPieceAt

```java
public boolean structureHasPieceAt(BlockPos p_220498_, StructureStart p_220499_)
```

**Parameters:**

- `p_220498_` (`BlockPos`)
- `p_220499_` (`StructureStart`)

**Returns:** `public boolean`

### hasAnyStructureAt

```java
public boolean hasAnyStructureAt(BlockPos p_220487_)
```

**Parameters:**

- `p_220487_` (`BlockPos`)

**Returns:** `public boolean`

### getAllStructuresAt

```java
public Map<Structure, LongSet> getAllStructuresAt(BlockPos p_220523_)
```

**Parameters:**

- `p_220523_` (`BlockPos`)

**Returns:** `public Map<Structure, LongSet>`

### checkStructurePresence

```java
public StructureCheckResult checkStructurePresence(ChunkPos p_220474_, Structure p_220475_, StructurePlacement p_321768_, boolean p_220476_)
```

**Parameters:**

- `p_220474_` (`ChunkPos`)
- `p_220475_` (`Structure`)
- `p_321768_` (`StructurePlacement`)
- `p_220476_` (`boolean`)

**Returns:** `public StructureCheckResult`

### addReference

```java
public void addReference(StructureStart p_220485_)
```

**Parameters:**

- `p_220485_` (`StructureStart`)

**Returns:** `public void`

### registryAccess

```java
public RegistryAccess registryAccess()
```

**Returns:** `public RegistryAccess`
