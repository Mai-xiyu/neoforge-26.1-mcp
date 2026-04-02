# ResourcePackLoader

**Package:** `net.neoforged.neoforge.resource`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MOD_DATA_ID` | `String` |  |
| `MOD_RESOURCES_ID` | `String` |  |

## Methods

### getPackFor

```java
public static Optional<Pack.ResourcesSupplier> getPackFor(String modId)
```

**Parameters:**

- `modId` (`String`)

**Returns:** `public static Optional<Pack.ResourcesSupplier>`

### populatePackRepository

```java
public static void populatePackRepository(PackRepository resourcePacks, PackType packType, boolean trusted)
```

**Parameters:**

- `resourcePacks` (`PackRepository`)
- `packType` (`PackType`)
- `trusted` (`boolean`)

**Returns:** `public static void`

### findResourcePacks

```java
 findResourcePacks()
```

**Returns:** ``

### findResourcePacks

```java
private synchronized static void findResourcePacks()
```

**Returns:** `private synchronized static void`

### buildPackFinder

```java
public static RepositorySource buildPackFinder(Map<IModFile, Pack.ResourcesSupplier> modResourcePacks, PackType packType)
```

**Parameters:**

- `modResourcePacks` (`Map<IModFile, Pack.ResourcesSupplier>`)
- `packType` (`PackType`)

**Returns:** `public static RepositorySource`

### packFinder

```java
> packFinder()
```

**Returns:** `>`

### packFinder

```java
private static void packFinder(Map<IModFile, Pack.ResourcesSupplier> modResourcePacks, Consumer<Pack> packAcceptor, PackType packType)
```

**Parameters:**

- `modResourcePacks` (`Map<IModFile, Pack.ResourcesSupplier>`)
- `packAcceptor` (`Consumer<Pack>`)
- `packType` (`PackType`)

**Returns:** `private static void`

### readWithOptionalMeta

```java
public static Pack readWithOptionalMeta(PackLocationInfo location, Pack.ResourcesSupplier resources, PackType type, PackSelectionConfig selectionConfig)
```

**Parameters:**

- `location` (`PackLocationInfo`)
- `resources` (`Pack.ResourcesSupplier`)
- `type` (`PackType`)
- `selectionConfig` (`PackSelectionConfig`)

**Returns:** `public static Pack`

### Pack

```java
return new Pack()
```

**Returns:** `return new`

### readMeta

```java
private static Pack.Metadata readMeta(PackType type, PackLocationInfo location, Pack.ResourcesSupplier resources)
```

**Parameters:**

- `type` (`PackType`)
- `location` (`PackLocationInfo`)
- `resources` (`Pack.ResourcesSupplier`)

**Returns:** `private static Pack.Metadata`

### makePack

```java
private static Pack makePack(PackType packType, ArrayList<Pack> hiddenPacks)
```

**Parameters:**

- `packType` (`PackType`)
- `hiddenPacks` (`ArrayList<Pack>`)

**Returns:** `private static Pack`

### createPackForMod

```java
public static Pack.ResourcesSupplier createPackForMod(IModFileInfo mf)
```

**Parameters:**

- `mf` (`IModFileInfo`)

**Returns:** `public static Pack.ResourcesSupplier`

### getPackNames

```java
public static List<String> getPackNames(PackType packType)
```

**Parameters:**

- `packType` (`PackType`)

**Returns:** `public static List<String>`

### expandAndRemoveRootChildren

```java
.Internal
    public static List<Pack> expandAndRemoveRootChildren(Stream<Pack> packs, Collection<Pack> availablePacks)
```

**Parameters:**

- `packs` (`Stream<Pack>`)
- `availablePacks` (`Collection<Pack>`)

**Returns:** `.Internal
    public static List<Pack>`

### reorderNewlyDiscoveredPacks

```java
.Internal
    public static void reorderNewlyDiscoveredPacks(Collection<String> set, Collection<String> old, PackRepository packRepository)
```

**Parameters:**

- `set` (`Collection<String>`)
- `old` (`Collection<String>`)
- `packRepository` (`PackRepository`)

**Returns:** `.Internal
    public static void`
