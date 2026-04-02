# StructureTemplateManager

**Package:** `net.minecraft.world.level.levelgen.structure.templatesystem`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STRUCTURE_RESOURCE_DIRECTORY_NAME` | `String` |  |

## Methods

### StructureTemplateManager

```java
public StructureTemplateManager(ResourceManager p_249872_, LevelStorageSource.LevelStorageAccess p_249864_, DataFixer p_249868_, HolderGetter<Block> p_256126_)
```

**Parameters:**

- `p_249872_` (`ResourceManager`)
- `p_249864_` (`LevelStorageSource.LevelStorageAccess`)
- `p_249868_` (`DataFixer`)
- `p_256126_` (`HolderGetter<Block>`)

**Returns:** `public`

### getOrCreate

```java
public StructureTemplate getOrCreate(ResourceLocation p_230360_)
```

**Parameters:**

- `p_230360_` (`ResourceLocation`)

**Returns:** `public StructureTemplate`

### get

```java
public Optional<StructureTemplate> get(ResourceLocation p_230408_)
```

**Parameters:**

- `p_230408_` (`ResourceLocation`)

**Returns:** `public Optional<StructureTemplate>`

### listTemplates

```java
public Stream<ResourceLocation> listTemplates()
```

**Returns:** `public Stream<ResourceLocation>`

### tryLoad

```java
private Optional<StructureTemplate> tryLoad(ResourceLocation p_230426_)
```

**Parameters:**

- `p_230426_` (`ResourceLocation`)

**Returns:** `private Optional<StructureTemplate>`

### onResourceManagerReload

```java
public void onResourceManagerReload(ResourceManager p_230371_)
```

**Parameters:**

- `p_230371_` (`ResourceManager`)

**Returns:** `public void`

### loadFromResource

```java
private Optional<StructureTemplate> loadFromResource(ResourceLocation p_230428_)
```

**Parameters:**

- `p_230428_` (`ResourceLocation`)

**Returns:** `private Optional<StructureTemplate>`

### listResources

```java
private Stream<ResourceLocation> listResources()
```

**Returns:** `private Stream<ResourceLocation>`

### loadFromTestStructures

```java
private Optional<StructureTemplate> loadFromTestStructures(ResourceLocation p_230430_)
```

**Parameters:**

- `p_230430_` (`ResourceLocation`)

**Returns:** `private Optional<StructureTemplate>`

### listTestStructures

```java
private Stream<ResourceLocation> listTestStructures()
```

**Returns:** `private Stream<ResourceLocation>`

### loadFromGenerated

```java
private Optional<StructureTemplate> loadFromGenerated(ResourceLocation p_230432_)
```

**Parameters:**

- `p_230432_` (`ResourceLocation`)

**Returns:** `private Optional<StructureTemplate>`

### listGenerated

```java
private Stream<ResourceLocation> listGenerated()
```

**Returns:** `private Stream<ResourceLocation>`

### listFolderContents

```java
private void listFolderContents(Path p_230395_, String p_230396_, String p_230397_, Consumer<ResourceLocation> p_352133_)
```

**Parameters:**

- `p_230395_` (`Path`)
- `p_230396_` (`String`)
- `p_230397_` (`String`)
- `p_352133_` (`Consumer<ResourceLocation>`)

**Returns:** `private void`

### relativize

```java
private String relativize(Path p_230402_, Path p_230403_)
```

**Parameters:**

- `p_230402_` (`Path`)
- `p_230403_` (`Path`)

**Returns:** `private String`

### loadFromSnbt

```java
private Optional<StructureTemplate> loadFromSnbt(ResourceLocation p_230368_, Path p_230369_)
```

**Parameters:**

- `p_230368_` (`ResourceLocation`)
- `p_230369_` (`Path`)

**Returns:** `private Optional<StructureTemplate>`

### load

```java
private Optional<StructureTemplate> load(StructureTemplateManager.InputStreamOpener p_230373_, Consumer<Throwable> p_230374_)
```

**Parameters:**

- `p_230373_` (`StructureTemplateManager.InputStreamOpener`)
- `p_230374_` (`Consumer<Throwable>`)

**Returns:** `private Optional<StructureTemplate>`

### try

```java
 try(InputStream inputstream = p_230373_.open()
```

**Parameters:**

- `p_230373_.open(` (`InputStream inputstream =`)

**Returns:** ``

### readStructure

```java
private StructureTemplate readStructure(InputStream p_230378_)
```

**Parameters:**

- `p_230378_` (`InputStream`)

**Returns:** `private StructureTemplate`

### readStructure

```java
public StructureTemplate readStructure(CompoundTag p_230405_)
```

**Parameters:**

- `p_230405_` (`CompoundTag`)

**Returns:** `public StructureTemplate`

### save

```java
public boolean save(ResourceLocation p_230417_)
```

**Parameters:**

- `p_230417_` (`ResourceLocation`)

**Returns:** `public boolean`

### createAndValidatePathToGeneratedStructure

```java
public Path createAndValidatePathToGeneratedStructure(ResourceLocation p_352127_, String p_352399_)
```

**Parameters:**

- `p_352127_` (`ResourceLocation`)
- `p_352399_` (`String`)

**Returns:** `public Path`

### ResourceLocationException

```java
throw new ResourceLocationException("Invalid resource path: " + p_352127_)
```

**Parameters:**

- `p_352127_` (`"Invalid resource path: " +`)

**Returns:** `throw new`

### ResourceLocationException

```java
throw new ResourceLocationException("Invalid resource path: " + path2)
```

**Parameters:**

- `path2` (`"Invalid resource path: " +`)

**Returns:** `throw new`

### ResourceLocationException

```java
throw new ResourceLocationException("Invalid resource path: " + p_352127_)
```

**Parameters:**

- `p_352127_` (`"Invalid resource path: " +`)

**Returns:** `throw new`

### remove

```java
public void remove(ResourceLocation p_230422_)
```

**Parameters:**

- `p_230422_` (`ResourceLocation`)

**Returns:** `public void`

### open

```java
InputStream open()
```

**Returns:** `InputStream`

### Source

```java
static record Source(Function<ResourceLocation, Optional<StructureTemplate>> loader, Supplier<Stream<ResourceLocation>> lister)
```

**Parameters:**

- `loader` (`Function<ResourceLocation, Optional<StructureTemplate>>`)
- `lister` (`Supplier<Stream<ResourceLocation>>`)

**Returns:** `static record`
