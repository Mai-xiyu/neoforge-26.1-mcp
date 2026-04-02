# LevelStorageSource

**Package:** `net.minecraft.world.level.storage`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ALLOWED_SYMLINKS_CONFIG_NAME` | `String` |  |

## Methods

### LevelStorageSource

```java
public LevelStorageSource(Path p_289985_, Path p_289978_, DirectoryValidator p_289922_, DataFixer p_289940_)
```

**Parameters:**

- `p_289985_` (`Path`)
- `p_289978_` (`Path`)
- `p_289922_` (`DirectoryValidator`)
- `p_289940_` (`DataFixer`)

**Returns:** `public`

### UncheckedIOException

```java
throw new UncheckedIOException()
```

**Returns:** `throw new`

### parseValidator

```java
public static DirectoryValidator parseValidator(Path p_289968_)
```

**Parameters:**

- `p_289968_` (`Path`)

**Returns:** `public static DirectoryValidator`

### DirectoryValidator

```java
return new DirectoryValidator()
```

**Returns:** `return new`

### createDefault

```java
public static LevelStorageSource createDefault(Path p_78243_)
```

**Parameters:**

- `p_78243_` (`Path`)

**Returns:** `public static LevelStorageSource`

### readDataConfig

```java
public static WorldDataConfiguration readDataConfig(Dynamic<?> p_250884_)
```

**Parameters:**

- `p_250884_` (`Dynamic<?>`)

**Returns:** `public static WorldDataConfiguration`

### getPackConfig

```java
public static WorldLoader.PackConfig getPackConfig(Dynamic<?> p_307282_, PackRepository p_307421_, boolean p_307393_)
```

**Parameters:**

- `p_307282_` (`Dynamic<?>`)
- `p_307421_` (`PackRepository`)
- `p_307393_` (`boolean`)

**Returns:** `public static WorldLoader.PackConfig`

### getLevelDataAndDimensions

```java
public static LevelDataAndDimensions getLevelDataAndDimensions(Dynamic<?> p_307313_, WorldDataConfiguration p_307486_, Registry<LevelStem> p_307597_, RegistryAccess.Frozen p_307648_)
```

**Parameters:**

- `p_307313_` (`Dynamic<?>`)
- `p_307486_` (`WorldDataConfiguration`)
- `p_307597_` (`Registry<LevelStem>`)
- `p_307648_` (`RegistryAccess.Frozen`)

**Returns:** `public static LevelDataAndDimensions`

### LevelDataAndDimensions

```java
return new LevelDataAndDimensions()
```

**Returns:** `return new`

### getName

```java
public String getName()
```

**Returns:** `public String`

### findLevelCandidates

```java
public LevelStorageSource.LevelCandidates findLevelCandidates()
```

**Returns:** `public LevelStorageSource.LevelCandidates`

### loadLevelSummaries

```java
public CompletableFuture<List<LevelSummary>> loadLevelSummaries(LevelStorageSource.LevelCandidates p_230814_)
```

**Parameters:**

- `p_230814_` (`LevelStorageSource.LevelCandidates`)

**Returns:** `public CompletableFuture<List<LevelSummary>>`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### getStorageVersion

```java
private int getStorageVersion()
```

**Returns:** `private int`

### readLevelDataTagRaw

```java
static CompoundTag readLevelDataTagRaw(Path p_307408_)
```

**Parameters:**

- `p_307408_` (`Path`)

**Returns:** `static CompoundTag`

### readLevelDataTagFixed

```java
static Dynamic<?> readLevelDataTagFixed(Path p_307371_, DataFixer p_307468_)
```

**Parameters:**

- `p_307371_` (`Path`)
- `p_307468_` (`DataFixer`)

**Returns:** `static Dynamic<?>`

### readLevelSummary

```java
private LevelSummary readLevelSummary(LevelStorageSource.LevelDirectory p_307237_, boolean p_307368_)
```

**Parameters:**

- `p_307237_` (`LevelStorageSource.LevelDirectory`)
- `p_307368_` (`boolean`)

**Returns:** `private LevelSummary`

### getFileModificationTime

```java
private static long getFileModificationTime(LevelStorageSource.LevelDirectory p_307642_)
```

**Parameters:**

- `p_307642_` (`LevelStorageSource.LevelDirectory`)

**Returns:** `private static long`

### getFileModificationTime

```java
static Instant getFileModificationTime(Path p_307529_)
```

**Parameters:**

- `p_307529_` (`Path`)

**Returns:** `Instant`

### makeLevelSummary

```java
LevelSummary makeLevelSummary(Dynamic<?> p_307300_, LevelStorageSource.LevelDirectory p_307426_, boolean p_307364_)
```

**Parameters:**

- `p_307300_` (`Dynamic<?>`)
- `p_307426_` (`LevelStorageSource.LevelDirectory`)
- `p_307364_` (`boolean`)

**Returns:** `LevelSummary`

### parseFeatureFlagsFromSummary

```java
private static FeatureFlagSet parseFeatureFlagsFromSummary(Dynamic<?> p_249466_)
```

**Parameters:**

- `p_249466_` (`Dynamic<?>`)

**Returns:** `private static FeatureFlagSet`

### isNewLevelIdAcceptable

```java
public boolean isNewLevelIdAcceptable(String p_78241_)
```

**Parameters:**

- `p_78241_` (`String`)

**Returns:** `public boolean`

### levelExists

```java
public boolean levelExists(String p_78256_)
```

**Parameters:**

- `p_78256_` (`String`)

**Returns:** `public boolean`

### getLevelPath

```java
public Path getLevelPath(String p_289974_)
```

**Parameters:**

- `p_289974_` (`String`)

**Returns:** `public Path`

### getBaseDir

```java
public Path getBaseDir()
```

**Returns:** `public Path`

### getBackupPath

```java
public Path getBackupPath()
```

**Returns:** `public Path`

### validateAndCreateAccess

```java
public LevelStorageSource.LevelStorageAccess validateAndCreateAccess(String p_289980_)
```

**Parameters:**

- `p_289980_` (`String`)

**Returns:** `public LevelStorageSource.LevelStorageAccess`

### ContentValidationException

```java
throw new ContentValidationException()
```

**Returns:** `throw new`

### createAccess

```java
public LevelStorageSource.LevelStorageAccess createAccess(String p_78261_)
```

**Parameters:**

- `p_78261_` (`String`)

**Returns:** `public LevelStorageSource.LevelStorageAccess`

### getWorldDirValidator

```java
public DirectoryValidator getWorldDirValidator()
```

**Returns:** `public DirectoryValidator`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### iterator

```java
public Iterator<LevelStorageSource.LevelDirectory> iterator()
```

**Returns:** `Iterator<LevelStorageSource.LevelDirectory>`

### LevelDirectory

```java
public static record LevelDirectory(Path path)
```

**Parameters:**

- `path` (`Path`)

**Returns:** `public static record`

### directoryName

```java
public String directoryName()
```

**Returns:** `public String`

### dataFile

```java
public Path dataFile()
```

**Returns:** `public Path`

### oldDataFile

```java
public Path oldDataFile()
```

**Returns:** `public Path`

### corruptedDataFile

```java
public Path corruptedDataFile(LocalDateTime p_230857_)
```

**Parameters:**

- `p_230857_` (`LocalDateTime`)

**Returns:** `public Path`

### rawDataFile

```java
public Path rawDataFile(LocalDateTime p_307373_)
```

**Parameters:**

- `p_307373_` (`LocalDateTime`)

**Returns:** `public Path`

### iconFile

```java
public Path iconFile()
```

**Returns:** `public Path`

### lockFile

```java
public Path lockFile()
```

**Returns:** `public Path`

### resourcePath

```java
public Path resourcePath(LevelResource p_230855_)
```

**Parameters:**

- `p_230855_` (`LevelResource`)

**Returns:** `public Path`

### LevelStorageAccess

```java
 LevelStorageAccess(String p_289967_, Path p_289988_)
```

**Parameters:**

- `p_289967_` (`String`)
- `p_289988_` (`Path`)

**Returns:** ``

### estimateDiskSpace

```java
public long estimateDiskSpace()
```

**Returns:** `public long`

### checkForLowDiskSpace

```java
public boolean checkForLowDiskSpace()
```

**Returns:** `public boolean`

### safeClose

```java
public void safeClose()
```

**Returns:** `public void`

### parent

```java
public LevelStorageSource parent()
```

**Returns:** `public LevelStorageSource`

### getLevelDirectory

```java
public LevelStorageSource.LevelDirectory getLevelDirectory()
```

**Returns:** `public LevelStorageSource.LevelDirectory`

### getLevelId

```java
public String getLevelId()
```

**Returns:** `public String`

### getLevelPath

```java
public Path getLevelPath(LevelResource p_78284_)
```

**Parameters:**

- `p_78284_` (`LevelResource`)

**Returns:** `public Path`

### getDimensionPath

```java
public Path getDimensionPath(ResourceKey<Level> p_197395_)
```

**Parameters:**

- `p_197395_` (`ResourceKey<Level>`)

**Returns:** `public Path`

### checkLock

```java
private void checkLock()
```

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("Lock is no longer valid")
```

**Parameters:**

- `valid"` (`"Lock is no longer`)

**Returns:** `throw new`

### readAdditionalLevelSaveData

```java
public void readAdditionalLevelSaveData(boolean fallback)
```

**Parameters:**

- `fallback` (`boolean`)

**Returns:** `public void`

### checkLock

```java
 checkLock()
```

**Returns:** ``

### createPlayerStorage

```java
public PlayerDataStorage createPlayerStorage()
```

**Returns:** `public PlayerDataStorage`

### PlayerDataStorage

```java
return new PlayerDataStorage()
```

**Returns:** `return new`

### getSummary

```java
public LevelSummary getSummary(Dynamic<?> p_307314_)
```

**Parameters:**

- `p_307314_` (`Dynamic<?>`)

**Returns:** `public LevelSummary`

### getDataTag

```java
public Dynamic<?> getDataTag()
```

**Returns:** `public Dynamic<?>`

### getDataTagFallback

```java
public Dynamic<?> getDataTagFallback()
```

**Returns:** `public Dynamic<?>`

### getDataTag

```java
private Dynamic<?> getDataTag(boolean p_307503_)
```

**Parameters:**

- `p_307503_` (`boolean`)

**Returns:** `private Dynamic<?>`

### saveDataTag

```java
public void saveDataTag(RegistryAccess p_78288_, WorldData p_78289_)
```

**Parameters:**

- `p_78288_` (`RegistryAccess`)
- `p_78289_` (`WorldData`)

**Returns:** `public void`

### saveDataTag

```java
public void saveDataTag(RegistryAccess p_78291_, WorldData p_78292_, CompoundTag p_78293_)
```

**Parameters:**

- `p_78291_` (`RegistryAccess`)
- `p_78292_` (`WorldData`)
- `p_78293_` (`CompoundTag`)

**Returns:** `public void`

### saveLevelData

```java
private void saveLevelData(CompoundTag p_307262_)
```

**Parameters:**

- `p_307262_` (`CompoundTag`)

**Returns:** `private void`

### getIconFile

```java
public Optional<Path> getIconFile()
```

**Returns:** `public Optional<Path>`

### getWorldDir

```java
public Path getWorldDir()
```

**Returns:** `public Path`

### deleteLevel

```java
public void deleteLevel()
```

**Returns:** `public void`

### visitFile

```java
public FileVisitResult visitFile(Path p_78323_, BasicFileAttributes p_78324_)
```

**Parameters:**

- `p_78323_` (`Path`)
- `p_78324_` (`BasicFileAttributes`)

**Returns:** `public FileVisitResult`

### postVisitDirectory

```java
public FileVisitResult postVisitDirectory(Path p_78320_, IOException p_78321_)
```

**Parameters:**

- `p_78320_` (`Path`)
- `p_78321_` (`IOException`)

**Returns:** `public FileVisitResult`

### renameLevel

```java
public void renameLevel(String p_78298_)
```

**Parameters:**

- `p_78298_` (`String`)

**Returns:** `public void`

### renameAndDropPlayer

```java
public void renameAndDropPlayer(String p_307319_)
```

**Parameters:**

- `p_307319_` (`String`)

**Returns:** `public void`

### modifyLevelDataWithoutDatafix

```java
private void modifyLevelDataWithoutDatafix(Consumer<CompoundTag> p_307346_)
```

**Parameters:**

- `p_307346_` (`Consumer<CompoundTag>`)

**Returns:** `private void`

### makeWorldBackup

```java
public long makeWorldBackup()
```

**Returns:** `public long`

### RuntimeException

```java
throw new RuntimeException()
```

**Returns:** `throw new`

### visitFile

```java
public FileVisitResult visitFile(Path p_78339_, BasicFileAttributes p_78340_)
```

**Parameters:**

- `p_78339_` (`Path`)
- `p_78340_` (`BasicFileAttributes`)

**Returns:** `public FileVisitResult`

### hasWorldData

```java
public boolean hasWorldData()
```

**Returns:** `public boolean`

### close

```java
public void close()
```

### restoreLevelDataFromOld

```java
public boolean restoreLevelDataFromOld()
```

**Returns:** `public boolean`

### getFileModificationTime

```java
public Instant getFileModificationTime(boolean p_307470_)
```

**Parameters:**

- `p_307470_` (`boolean`)

**Returns:** `Instant`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LevelCandidates` | record |  |
| `LevelDirectory` | record |  |
| `LevelStorageAccess` | class |  |
