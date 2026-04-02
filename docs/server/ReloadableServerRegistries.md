# ReloadableServerRegistries

**Package:** `net.minecraft.server`
**Type:** class
**Side:** 🖧 Server

## Methods

### reload

```java
public static CompletableFuture<LayeredRegistryAccess<RegistryLayer>> reload(LayeredRegistryAccess<RegistryLayer> p_335950_, ResourceManager p_335786_, Executor p_335516_)
```

**Parameters:**

- `p_335950_` (`LayeredRegistryAccess<RegistryLayer>`)
- `p_335786_` (`ResourceManager`)
- `p_335516_` (`Executor`)

**Returns:** `public static CompletableFuture<LayeredRegistryAccess<RegistryLayer>>`

### scheduleElementParse

```java
<T> private static <T> CompletableFuture<WritableRegistry<?>> scheduleElementParse(LootDataType<T> p_335741_, RegistryOps<JsonElement> p_336173_, ResourceManager p_335893_, Executor p_336104_)
```

**Parameters:**

- `p_335741_` (`LootDataType<T>`)
- `p_336173_` (`RegistryOps<JsonElement>`)
- `p_335893_` (`ResourceManager`)
- `p_336104_` (`Executor`)

**Returns:** `private static <T> CompletableFuture<WritableRegistry<?>>`

### apply

```java
private static LayeredRegistryAccess<RegistryLayer> apply(LayeredRegistryAccess<RegistryLayer> p_335982_, List<WritableRegistry<?>> p_336159_)
```

**Parameters:**

- `p_335982_` (`LayeredRegistryAccess<RegistryLayer>`)
- `p_336159_` (`List<WritableRegistry<?>>`)

**Returns:** `private static LayeredRegistryAccess<RegistryLayer>`

### createUpdatedRegistries

```java
private static LayeredRegistryAccess<RegistryLayer> createUpdatedRegistries(LayeredRegistryAccess<RegistryLayer> p_335434_, List<WritableRegistry<?>> p_336097_)
```

**Parameters:**

- `p_335434_` (`LayeredRegistryAccess<RegistryLayer>`)
- `p_336097_` (`List<WritableRegistry<?>>`)

**Returns:** `private static LayeredRegistryAccess<RegistryLayer>`

### validateRegistry

```java
<T> private static <T> void validateRegistry(ValidationContext p_335565_, LootDataType<T> p_335997_, RegistryAccess p_335400_)
```

**Parameters:**

- `p_335565_` (`ValidationContext`)
- `p_335997_` (`LootDataType<T>`)
- `p_335400_` (`RegistryAccess`)

**Returns:** `private static <T> void`

### EmptyTagLookupWrapper

```java
 EmptyTagLookupWrapper(RegistryAccess p_335912_)
```

**Parameters:**

- `p_335912_` (`RegistryAccess`)

**Returns:** ``

### listRegistries

```java
public Stream<ResourceKey<? extends Registry<?>>> listRegistries()
```

**Returns:** `Stream<ResourceKey<? extends Registry<?>>>`

### lookup

```java
public <T> Optional<HolderLookup.RegistryLookup<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_335976_)
```

**Parameters:**

- `p_335976_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<HolderLookup.RegistryLookup<T>>`

### Holder

```java
public Holder(RegistryAccess.Frozen p_336133_)
```

**Parameters:**

- `p_336133_` (`RegistryAccess.Frozen`)

**Returns:** `public`

### get

```java
public RegistryAccess.Frozen get()
```

**Returns:** `public RegistryAccess.Frozen`

### lookup

```java
public HolderGetter.Provider lookup()
```

**Returns:** `public HolderGetter.Provider`

### getKeys

```java
public Collection<ResourceLocation> getKeys(ResourceKey<? extends Registry<?>> p_335695_)
```

**Parameters:**

- `p_335695_` (`ResourceKey<? extends Registry<?>>`)

**Returns:** `public Collection<ResourceLocation>`

### getLootTable

```java
public LootTable getLootTable(ResourceKey<LootTable> p_335504_)
```

**Parameters:**

- `p_335504_` (`ResourceKey<LootTable>`)

**Returns:** `public LootTable`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Holder` | class |  |
