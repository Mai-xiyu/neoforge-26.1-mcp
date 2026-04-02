# PoiManager

**Package:** `net.minecraft.world.entity.ai.village.poi`
**Type:** class
**Extends:** `SectionStorage<PoiSection>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_VILLAGE_DISTANCE` | `int` |  |
| `VILLAGE_SECTION_SIZE` | `int` |  |

## Methods

### PoiManager

```java
public PoiManager(RegionStorageInfo p_325948_, Path p_217869_, DataFixer p_217870_, boolean p_217871_, RegistryAccess p_217872_, ChunkIOErrorReporter p_352327_, LevelHeightAccessor p_217873_)
```

**Parameters:**

- `p_325948_` (`RegionStorageInfo`)
- `p_217869_` (`Path`)
- `p_217870_` (`DataFixer`)
- `p_217871_` (`boolean`)
- `p_217872_` (`RegistryAccess`)
- `p_352327_` (`ChunkIOErrorReporter`)
- `p_217873_` (`LevelHeightAccessor`)

**Returns:** `public`

### add

```java
public void add(BlockPos p_217920_, Holder<PoiType> p_217921_)
```

**Parameters:**

- `p_217920_` (`BlockPos`)
- `p_217921_` (`Holder<PoiType>`)

**Returns:** `public void`

### remove

```java
public void remove(BlockPos p_27080_)
```

**Parameters:**

- `p_27080_` (`BlockPos`)

**Returns:** `public void`

### getCountInRange

```java
public long getCountInRange(Predicate<Holder<PoiType>> p_27122_, BlockPos p_27123_, int p_27124_, PoiManager.Occupancy p_27125_)
```

**Parameters:**

- `p_27122_` (`Predicate<Holder<PoiType>>`)
- `p_27123_` (`BlockPos`)
- `p_27124_` (`int`)
- `p_27125_` (`PoiManager.Occupancy`)

**Returns:** `public long`

### existsAtPosition

```java
public boolean existsAtPosition(ResourceKey<PoiType> p_217875_, BlockPos p_217876_)
```

**Parameters:**

- `p_217875_` (`ResourceKey<PoiType>`)
- `p_217876_` (`BlockPos`)

**Returns:** `public boolean`

### getInSquare

```java
public Stream<PoiRecord> getInSquare(Predicate<Holder<PoiType>> p_27167_, BlockPos p_27168_, int p_27169_, PoiManager.Occupancy p_27170_)
```

**Parameters:**

- `p_27167_` (`Predicate<Holder<PoiType>>`)
- `p_27168_` (`BlockPos`)
- `p_27169_` (`int`)
- `p_27170_` (`PoiManager.Occupancy`)

**Returns:** `public Stream<PoiRecord>`

### getInRange

```java
public Stream<PoiRecord> getInRange(Predicate<Holder<PoiType>> p_27182_, BlockPos p_27183_, int p_27184_, PoiManager.Occupancy p_27185_)
```

**Parameters:**

- `p_27182_` (`Predicate<Holder<PoiType>>`)
- `p_27183_` (`BlockPos`)
- `p_27184_` (`int`)
- `p_27185_` (`PoiManager.Occupancy`)

**Returns:** `public Stream<PoiRecord>`

### getInChunk

```java
public Stream<PoiRecord> getInChunk(Predicate<Holder<PoiType>> p_27118_, ChunkPos p_27119_, PoiManager.Occupancy p_27120_)
```

**Parameters:**

- `p_27118_` (`Predicate<Holder<PoiType>>`)
- `p_27119_` (`ChunkPos`)
- `p_27120_` (`PoiManager.Occupancy`)

**Returns:** `Stream<PoiRecord>`

### findAll

```java
public Stream<BlockPos> findAll(Predicate<Holder<PoiType>> p_27139_, Predicate<BlockPos> p_27140_, BlockPos p_27141_, int p_27142_, PoiManager.Occupancy p_27143_)
```

**Parameters:**

- `p_27139_` (`Predicate<Holder<PoiType>>`)
- `p_27140_` (`Predicate<BlockPos>`)
- `p_27141_` (`BlockPos`)
- `p_27142_` (`int`)
- `p_27143_` (`PoiManager.Occupancy`)

**Returns:** `public Stream<BlockPos>`

### findAllWithType

```java
public Stream<Pair<Holder<PoiType>, BlockPos>> findAllWithType(Predicate<Holder<PoiType>> p_217984_, Predicate<BlockPos> p_217985_, BlockPos p_217986_, int p_217987_, PoiManager.Occupancy p_217988_)
```

**Parameters:**

- `p_217984_` (`Predicate<Holder<PoiType>>`)
- `p_217985_` (`Predicate<BlockPos>`)
- `p_217986_` (`BlockPos`)
- `p_217987_` (`int`)
- `p_217988_` (`PoiManager.Occupancy`)

**Returns:** `public Stream<Pair<Holder<PoiType>, BlockPos>>`

### findAllClosestFirstWithType

```java
public Stream<Pair<Holder<PoiType>, BlockPos>> findAllClosestFirstWithType(Predicate<Holder<PoiType>> p_217995_, Predicate<BlockPos> p_217996_, BlockPos p_217997_, int p_217998_, PoiManager.Occupancy p_217999_)
```

**Parameters:**

- `p_217995_` (`Predicate<Holder<PoiType>>`)
- `p_217996_` (`Predicate<BlockPos>`)
- `p_217997_` (`BlockPos`)
- `p_217998_` (`int`)
- `p_217999_` (`PoiManager.Occupancy`)

**Returns:** `public Stream<Pair<Holder<PoiType>, BlockPos>>`

### find

```java
public Optional<BlockPos> find(Predicate<Holder<PoiType>> p_27187_, Predicate<BlockPos> p_27188_, BlockPos p_27189_, int p_27190_, PoiManager.Occupancy p_27191_)
```

**Parameters:**

- `p_27187_` (`Predicate<Holder<PoiType>>`)
- `p_27188_` (`Predicate<BlockPos>`)
- `p_27189_` (`BlockPos`)
- `p_27190_` (`int`)
- `p_27191_` (`PoiManager.Occupancy`)

**Returns:** `public Optional<BlockPos>`

### findClosest

```java
public Optional<BlockPos> findClosest(Predicate<Holder<PoiType>> p_27193_, BlockPos p_27194_, int p_27195_, PoiManager.Occupancy p_27196_)
```

**Parameters:**

- `p_27193_` (`Predicate<Holder<PoiType>>`)
- `p_27194_` (`BlockPos`)
- `p_27195_` (`int`)
- `p_27196_` (`PoiManager.Occupancy`)

**Returns:** `public Optional<BlockPos>`

### findClosestWithType

```java
public Optional<Pair<Holder<PoiType>, BlockPos>> findClosestWithType(Predicate<Holder<PoiType>> p_218003_, BlockPos p_218004_, int p_218005_, PoiManager.Occupancy p_218006_)
```

**Parameters:**

- `p_218003_` (`Predicate<Holder<PoiType>>`)
- `p_218004_` (`BlockPos`)
- `p_218005_` (`int`)
- `p_218006_` (`PoiManager.Occupancy`)

**Returns:** `public Optional<Pair<Holder<PoiType>, BlockPos>>`

### findClosest

```java
public Optional<BlockPos> findClosest(Predicate<Holder<PoiType>> p_148659_, Predicate<BlockPos> p_148660_, BlockPos p_148661_, int p_148662_, PoiManager.Occupancy p_148663_)
```

**Parameters:**

- `p_148659_` (`Predicate<Holder<PoiType>>`)
- `p_148660_` (`Predicate<BlockPos>`)
- `p_148661_` (`BlockPos`)
- `p_148662_` (`int`)
- `p_148663_` (`PoiManager.Occupancy`)

**Returns:** `public Optional<BlockPos>`

### take

```java
public Optional<BlockPos> take(Predicate<Holder<PoiType>> p_217947_, BiPredicate<Holder<PoiType>, BlockPos> p_217948_, BlockPos p_217949_, int p_217950_)
```

**Parameters:**

- `p_217947_` (`Predicate<Holder<PoiType>>`)
- `p_217948_` (`BiPredicate<Holder<PoiType>, BlockPos>`)
- `p_217949_` (`BlockPos`)
- `p_217950_` (`int`)

**Returns:** `public Optional<BlockPos>`

### getRandom

```java
public Optional<BlockPos> getRandom(Predicate<Holder<PoiType>> p_217952_, Predicate<BlockPos> p_217953_, PoiManager.Occupancy p_217954_, BlockPos p_217955_, int p_217956_, RandomSource p_217957_)
```

**Parameters:**

- `p_217952_` (`Predicate<Holder<PoiType>>`)
- `p_217953_` (`Predicate<BlockPos>`)
- `p_217954_` (`PoiManager.Occupancy`)
- `p_217955_` (`BlockPos`)
- `p_217956_` (`int`)
- `p_217957_` (`RandomSource`)

**Returns:** `public Optional<BlockPos>`

### release

```java
public boolean release(BlockPos p_27155_)
```

**Parameters:**

- `p_27155_` (`BlockPos`)

**Returns:** `public boolean`

### exists

```java
public boolean exists(BlockPos p_27092_, Predicate<Holder<PoiType>> p_27093_)
```

**Parameters:**

- `p_27092_` (`BlockPos`)
- `p_27093_` (`Predicate<Holder<PoiType>>`)

**Returns:** `public boolean`

### getType

```java
public Optional<Holder<PoiType>> getType(BlockPos p_27178_)
```

**Parameters:**

- `p_27178_` (`BlockPos`)

**Returns:** `public Optional<Holder<PoiType>>`

### getFreeTickets

```java
public int getFreeTickets(BlockPos p_148654_)
```

**Parameters:**

- `p_148654_` (`BlockPos`)

**Returns:** `int`

### sectionsToVillage

```java
public int sectionsToVillage(SectionPos p_27099_)
```

**Parameters:**

- `p_27099_` (`SectionPos`)

**Returns:** `public int`

### isVillageCenter

```java
boolean isVillageCenter(long p_27198_)
```

**Parameters:**

- `p_27198_` (`long`)

**Returns:** `boolean`

### tick

```java
public void tick(BooleanSupplier p_27105_)
```

**Parameters:**

- `p_27105_` (`BooleanSupplier`)

### setDirty

```java
protected void setDirty(long p_27036_)
```

**Parameters:**

- `p_27036_` (`long`)

### onSectionLoad

```java
protected void onSectionLoad(long p_27145_)
```

**Parameters:**

- `p_27145_` (`long`)

### checkConsistencyWithBlocks

```java
public void checkConsistencyWithBlocks(SectionPos p_281731_, LevelChunkSection p_281893_)
```

**Parameters:**

- `p_281731_` (`SectionPos`)
- `p_281893_` (`LevelChunkSection`)

**Returns:** `public void`

### mayHavePoi

```java
private static boolean mayHavePoi(LevelChunkSection p_27061_)
```

**Parameters:**

- `p_27061_` (`LevelChunkSection`)

**Returns:** `private static boolean`

### updateFromSection

```java
private void updateFromSection(LevelChunkSection p_27070_, SectionPos p_27071_, BiConsumer<BlockPos, Holder<PoiType>> p_27072_)
```

**Parameters:**

- `p_27070_` (`LevelChunkSection`)
- `p_27071_` (`SectionPos`)
- `p_27072_` (`BiConsumer<BlockPos, Holder<PoiType>>`)

**Returns:** `private void`

### ensureLoadedAndValid

```java
public void ensureLoadedAndValid(LevelReader p_27057_, BlockPos p_27058_, int p_27059_)
```

**Parameters:**

- `p_27057_` (`LevelReader`)
- `p_27058_` (`BlockPos`)
- `p_27059_` (`int`)

**Returns:** `public void`

### DistanceTracker

```java
protected DistanceTracker()
```

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getLevelFromSource

```java
protected int getLevelFromSource(long p_27208_)
```

**Parameters:**

- `p_27208_` (`long`)

**Returns:** `int`

### getLevel

```java
protected int getLevel(long p_27210_)
```

**Parameters:**

- `p_27210_` (`long`)

**Returns:** `int`

### setLevel

```java
protected void setLevel(long p_27205_, int p_27206_)
```

**Parameters:**

- `p_27205_` (`long`)
- `p_27206_` (`int`)

### runAllUpdates

```java
public void runAllUpdates()
```

**Returns:** `public void`

### ANY

```java
, ANY(p_27223_ -> true)
```

**Parameters:**

- `true` (`p_27223_ ->`)

**Returns:** `,`

### Occupancy

```java
private Occupancy(Predicate<? super PoiRecord> p_27220_)
```

**Parameters:**

- `p_27220_` (`Predicate<? super PoiRecord>`)

**Returns:** `private`

### getTest

```java
public Predicate<? super PoiRecord> getTest()
```

**Returns:** `public Predicate<? super PoiRecord>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Occupancy` | enum |  |
