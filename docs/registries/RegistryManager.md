# RegistryManager

**Package:** `net.neoforged.neoforge.registries`
**Type:** class
**Annotations:** `@ApiStatus`

## Methods

### trackModdedRegistry

```java
static synchronized void trackModdedRegistry(ResourceLocation registry)
```

**Parameters:**

- `registry` (`ResourceLocation`)

### IllegalStateException

```java
throw new IllegalStateException("Attempting to instantiate registry with name " + registry + " after NewRegistryEvent was fired!")
```

**Parameters:**

- `fired!"` (`"Attempting to instantiate registry with name " + registry + " after NewRegistryEvent was`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Registry with name " + registry + " was already instantiated once, cannot instantiate it again!")
```

**Parameters:**

- `once` (`"Registry with name " + registry + " was already instantiated`)
- `again!"` (`cannot instantiate it`)

**Returns:** `throw new`

### getDataMap

```java
public static <R> DataMapType<R, ?> getDataMap(ResourceKey<? extends Registry<R>> registry, ResourceLocation key)
```

**Parameters:**

- `registry` (`ResourceKey<? extends Registry<R>>`)
- `key` (`ResourceLocation`)

**Returns:** `DataMapType<R, ?>`

### getDataMaps

```java
public static Map<ResourceKey<Registry<?>>, Map<ResourceLocation, DataMapType<?, ?>>> getDataMaps()
```

**Returns:** `Map<ResourceKey<Registry<?>>, Map<ResourceLocation, DataMapType<?, ?>>>`

### postNewRegistryEvent

```java
public static void postNewRegistryEvent()
```

**Returns:** `public static void`

### initDataMaps

```java
public static void initDataMaps()
```

**Returns:** `public static void`

### takeVanillaSnapshot

```java
static void takeVanillaSnapshot()
```

**Returns:** `static void`

### takeFrozenSnapshot

```java
static void takeFrozenSnapshot()
```

**Returns:** `static void`

### revertToVanilla

```java
public static void revertToVanilla()
```

**Returns:** `public static void`

### applySnapshot

```java
 applySnapshot()
```

**Returns:** ``

### revertToFrozen

```java
public static void revertToFrozen()
```

**Returns:** `public static void`

### applySnapshot

```java
 applySnapshot()
```

**Returns:** ``

### applySnapshot

```java
public static Set<ResourceKey<?>> applySnapshot(Map<ResourceLocation, RegistrySnapshot> snapshots, boolean allowMissing, boolean isLocalWorld)
```

**Parameters:**

- `snapshots` (`Map<ResourceLocation, RegistrySnapshot>`)
- `allowMissing` (`boolean`)
- `isLocalWorld` (`boolean`)

**Returns:** `Set<ResourceKey<?>>`

### IllegalStateException

```java
throw new IllegalStateException("Tried to applied snapshot with registry name " + registryName + " but was not found")
```

**Parameters:**

- `found"` (`"Tried to applied snapshot with registry name " + registryName + " but was not`)

**Returns:** `throw new`

### applySnapshot

```java
 applySnapshot()
```

**Returns:** ``

### applySnapshot

```java
<T> private static <T> void applySnapshot(MappedRegistry<T> registry, RegistrySnapshot snapshot, Set<ResourceKey<?>> missing)
```

**Parameters:**

- `registry` (`MappedRegistry<T>`)
- `snapshot` (`RegistrySnapshot`)
- `missing` (`Set<ResourceKey<?>>`)

**Returns:** `private static <T> void`

### takeSnapshot

```java
public static Map<ResourceLocation, RegistrySnapshot> takeSnapshot(SnapshotType snapshotType)
```

**Parameters:**

- `snapshotType` (`SnapshotType`)

**Returns:** `Map<ResourceLocation, RegistrySnapshot>`

### generateRegistryPackets

```java
public static List<FrozenRegistryPayload> generateRegistryPackets(boolean isLocal)
```

**Parameters:**

- `isLocal` (`boolean`)

**Returns:** `public static List<FrozenRegistryPayload>`

### getRegistryNamesForSyncToClient

```java
public static List<ResourceLocation> getRegistryNamesForSyncToClient()
```

**Returns:** `public static List<ResourceLocation>`

### getVanillaRegistryKeys

```java
public static Set<ResourceLocation> getVanillaRegistryKeys()
```

**Returns:** `public static Set<ResourceLocation>`

### handleKnownDataMapsReply

```java
.Internal
    public static void handleKnownDataMapsReply(KnownRegistryDataMapsReplyPayload payload, IPayloadContext context)
```

**Parameters:**

- `payload` (`KnownRegistryDataMapsReplyPayload`)
- `context` (`IPayloadContext`)

**Returns:** `.Internal
    public static void`

### isNonSyncedBuiltInRegistry

```java
public static boolean isNonSyncedBuiltInRegistry(Registry<?> registry)
```

**Parameters:**

- `registry` (`Registry<?>`)

**Returns:** `public static boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SnapshotType` | enum |  |
