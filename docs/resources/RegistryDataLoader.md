# RegistryDataLoader

**Package:** `net.minecraft.resources`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `WORLDGEN_REGISTRIES` | `List<RegistryDataLoader.RegistryData<?>>` |  |
| `DIMENSION_REGISTRIES` | `List<RegistryDataLoader.RegistryData<?>>` |  |
| `SYNCHRONIZED_REGISTRIES` | `List<RegistryDataLoader.RegistryData<?>>` |  |

## Methods

### RegistrationInfo

```java
return new RegistrationInfo()
```

**Returns:** `return new`

### load

```java
Keep the list so custom registries can be added later

    public static RegistryAccess.Frozen load(ResourceManager p_252046_, RegistryAccess p_249916_, List<RegistryDataLoader.RegistryData<?>> p_250344_)
```

**Parameters:**

- `p_252046_` (`ResourceManager`)
- `p_249916_` (`RegistryAccess`)
- `p_250344_` (`List<RegistryDataLoader.RegistryData<?>>`)

**Returns:** `Keep the list so custom registries can be added later

    public static RegistryAccess.Frozen`

### load

```java
public static RegistryAccess.Frozen load(Map<ResourceKey<? extends Registry<?>>, List<RegistrySynchronization.PackedRegistryEntry>> p_321642_, ResourceProvider p_326068_, RegistryAccess p_321850_, List<RegistryDataLoader.RegistryData<?>> p_321716_)
```

**Parameters:**

- `p_321642_` (`Map<ResourceKey<? extends Registry<?>>, List<RegistrySynchronization.PackedRegistryEntry>>`)
- `p_326068_` (`ResourceProvider`)
- `p_321850_` (`RegistryAccess`)
- `p_321716_` (`List<RegistryDataLoader.RegistryData<?>>`)

**Returns:** `public static RegistryAccess.Frozen`

### load

```java
private static RegistryAccess.Frozen load(RegistryDataLoader.LoadingFunction p_321713_, RegistryAccess p_321583_, List<RegistryDataLoader.RegistryData<?>> p_321856_)
```

**Parameters:**

- `p_321713_` (`RegistryDataLoader.LoadingFunction`)
- `p_321583_` (`RegistryAccess`)
- `p_321856_` (`List<RegistryDataLoader.RegistryData<?>>`)

**Returns:** `private static RegistryAccess.Frozen`

### logErrors

```java
 logErrors()
```

**Returns:** ``

### IllegalStateException

```java
throw new IllegalStateException("Failed to load registries due to above errors")
```

**Parameters:**

- `errors"` (`"Failed to load registries due to above`)

**Returns:** `throw new`

### createContext

```java
private static RegistryOps.RegistryInfoLookup createContext(RegistryAccess p_256568_, List<RegistryDataLoader.Loader<?>> p_255821_)
```

**Parameters:**

- `p_256568_` (`RegistryAccess`)
- `p_255821_` (`List<RegistryDataLoader.Loader<?>>`)

**Returns:** `private static RegistryOps.RegistryInfoLookup`

### lookup

```java
public <T> Optional<RegistryOps.RegistryInfo<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_256014_)
```

**Parameters:**

- `p_256014_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<RegistryOps.RegistryInfo<T>>`

### createInfoForNewRegistry

```java
<T> private static <T> RegistryOps.RegistryInfo<T> createInfoForNewRegistry(WritableRegistry<T> p_256020_)
```

**Parameters:**

- `p_256020_` (`WritableRegistry<T>`)

**Returns:** `private static <T> RegistryOps.RegistryInfo<T>`

### createInfoForContextRegistry

```java
<T> private static <T> RegistryOps.RegistryInfo<T> createInfoForContextRegistry(Registry<T> p_256230_)
```

**Parameters:**

- `p_256230_` (`Registry<T>`)

**Returns:** `private static <T> RegistryOps.RegistryInfo<T>`

### logErrors

```java
private static void logErrors(Map<ResourceKey<?>, Exception> p_252325_)
```

**Parameters:**

- `p_252325_` (`Map<ResourceKey<?>, Exception>`)

**Returns:** `private static void`

### loadElementFromResource

```java
<E> private static <E> void loadElementFromResource(WritableRegistry<E> p_326195_, Decoder<E> p_326476_, RegistryOps<JsonElement> p_325932_, ResourceKey<E> p_326054_, Resource p_326141_, RegistrationInfo p_326033_)
```

**Parameters:**

- `p_326195_` (`WritableRegistry<E>`)
- `p_326476_` (`Decoder<E>`)
- `p_325932_` (`RegistryOps<JsonElement>`)
- `p_326054_` (`ResourceKey<E>`)
- `p_326141_` (`Resource`)
- `p_326033_` (`RegistrationInfo`)

**Returns:** `private static <E> void`

### loadContentsFromManager

```java
<E> static <E> void loadContentsFromManager(ResourceManager p_321535_, RegistryOps.RegistryInfoLookup p_321612_, WritableRegistry<E> p_321557_, Decoder<E> p_321820_, Map<ResourceKey<?>, Exception> p_321649_)
```

**Parameters:**

- `p_321535_` (`ResourceManager`)
- `p_321612_` (`RegistryOps.RegistryInfoLookup`)
- `p_321557_` (`WritableRegistry<E>`)
- `p_321820_` (`Decoder<E>`)
- `p_321649_` (`Map<ResourceKey<?>, Exception>`)

**Returns:** `static <E> void`

### loadElementFromResource

```java
 loadElementFromResource()
```

**Returns:** ``

### loadContentsFromNetwork

```java
<E> static <E> void loadContentsFromNetwork(Map<ResourceKey<? extends Registry<?>>, List<RegistrySynchronization.PackedRegistryEntry>> p_321633_, ResourceProvider p_326020_, RegistryOps.RegistryInfoLookup p_321801_, WritableRegistry<E> p_321671_, Decoder<E> p_321718_, Map<ResourceKey<?>, Exception> p_321625_)
```

**Parameters:**

- `p_321633_` (`Map<ResourceKey<? extends Registry<?>>, List<RegistrySynchronization.PackedRegistryEntry>>`)
- `p_326020_` (`ResourceProvider`)
- `p_321801_` (`RegistryOps.RegistryInfoLookup`)
- `p_321671_` (`WritableRegistry<E>`)
- `p_321718_` (`Decoder<E>`)
- `p_321625_` (`Map<ResourceKey<?>, Exception>`)

**Returns:** `static <E> void`

### loadElementFromResource

```java
 loadElementFromResource()
```

**Returns:** ``

### loadFromResources

```java
public void loadFromResources(ResourceManager p_321702_, RegistryOps.RegistryInfoLookup p_321840_)
```

**Parameters:**

- `p_321702_` (`ResourceManager`)
- `p_321840_` (`RegistryOps.RegistryInfoLookup`)

**Returns:** `public void`

### loadFromNetwork

```java
public void loadFromNetwork(Map<ResourceKey<? extends Registry<?>>, List<RegistrySynchronization.PackedRegistryEntry>> p_321562_, ResourceProvider p_326419_, RegistryOps.RegistryInfoLookup p_321617_)
```

**Parameters:**

- `p_321562_` (`Map<ResourceKey<? extends Registry<?>>, List<RegistrySynchronization.PackedRegistryEntry>>`)
- `p_326419_` (`ResourceProvider`)
- `p_321617_` (`RegistryOps.RegistryInfoLookup`)

**Returns:** `public void`

### apply

```java
void apply(RegistryDataLoader.Loader<?> p_321864_, RegistryOps.RegistryInfoLookup p_321656_)
```

**Parameters:**

- `p_321864_` (`RegistryDataLoader.Loader<?>`)
- `p_321656_` (`RegistryOps.RegistryInfoLookup`)

### RegistryData

```java
public RegistryData(ResourceKey<? extends Registry<T>> key, Codec<T> elementCodec, boolean requiredNonEmpty)
```

**Parameters:**

- `key` (`ResourceKey<? extends Registry<T>>`)
- `elementCodec` (`Codec<T>`)
- `requiredNonEmpty` (`boolean`)

**Returns:** `public`

### this

```java
 this(registryBuilder -> {})
```

**Parameters:**

- `{}` (`registryBuilder ->`)

**Returns:** ``

### RegistryData

```java
 RegistryData(ResourceKey<? extends Registry<T>> p_251360_, Codec<T> p_248976_)
```

**Parameters:**

- `p_251360_` (`ResourceKey<? extends Registry<T>>`)
- `p_248976_` (`Codec<T>`)

**Returns:** ``

### this

```java
 this()
```

**Returns:** ``

### create

```java
RegistryDataLoader.Loader<T> create(Lifecycle p_251662_, Map<ResourceKey<?>, Exception> p_251565_)
```

**Parameters:**

- `p_251662_` (`Lifecycle`)
- `p_251565_` (`Map<ResourceKey<?>, Exception>`)

**Returns:** `RegistryDataLoader.Loader<T>`

### runWithArguments

```java
public void runWithArguments(BiConsumer<ResourceKey<? extends Registry<T>>, Codec<T>> p_312899_)
```

**Parameters:**

- `p_312899_` (`BiConsumer<ResourceKey<? extends Registry<T>>, Codec<T>>`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `RegistryData` | record |  |
