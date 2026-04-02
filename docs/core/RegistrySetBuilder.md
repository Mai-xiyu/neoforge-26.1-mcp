# RegistrySetBuilder

**Package:** `net.minecraft.core`
**Type:** class

## Methods

### wrapContextLookup

```java
<T> static <T> HolderGetter<T> wrapContextLookup(HolderLookup.RegistryLookup<T> p_255625_)
```

**Parameters:**

- `p_255625_` (`HolderLookup.RegistryLookup<T>`)

**Returns:** `static <T> HolderGetter<T>`

### get

```java
public Optional<Holder.Reference<T>> get(ResourceKey<T> p_255765_)
```

**Parameters:**

- `p_255765_` (`ResourceKey<T>`)

**Returns:** `Optional<Holder.Reference<T>>`

### lookupFromMap

```java
<T> static <T> HolderLookup.RegistryLookup<T> lookupFromMap(ResourceKey<? extends Registry<? extends T>> p_312781_, Lifecycle p_312783_, HolderOwner<T> p_326787_, Map<ResourceKey<T>, Holder.Reference<T>> p_312180_)
```

**Parameters:**

- `p_312781_` (`ResourceKey<? extends Registry<? extends T>>`)
- `p_312783_` (`Lifecycle`)
- `p_326787_` (`HolderOwner<T>`)
- `p_312180_` (`Map<ResourceKey<T>, Holder.Reference<T>>`)

**Returns:** `static <T> HolderLookup.RegistryLookup<T>`

### key

```java
public ResourceKey<? extends Registry<? extends T>> key()
```

**Returns:** `ResourceKey<? extends Registry<? extends T>>`

### registryLifecycle

```java
public Lifecycle registryLifecycle()
```

**Returns:** `Lifecycle`

### get

```java
public Optional<Holder.Reference<T>> get(ResourceKey<T> p_312659_)
```

**Parameters:**

- `p_312659_` (`ResourceKey<T>`)

**Returns:** `Optional<Holder.Reference<T>>`

### listElements

```java
public Stream<Holder.Reference<T>> listElements()
```

**Returns:** `Stream<Holder.Reference<T>>`

### add

```java
<T> public <T> RegistrySetBuilder add(ResourceKey<? extends Registry<T>> p_256446_, Lifecycle p_256394_, RegistrySetBuilder.RegistryBootstrap<T> p_256638_)
```

**Parameters:**

- `p_256446_` (`ResourceKey<? extends Registry<T>>`)
- `p_256394_` (`Lifecycle`)
- `p_256638_` (`RegistrySetBuilder.RegistryBootstrap<T>`)

**Returns:** `public <T> RegistrySetBuilder`

### add

```java
<T> public <T> RegistrySetBuilder add(ResourceKey<? extends Registry<T>> p_256261_, RegistrySetBuilder.RegistryBootstrap<T> p_256010_)
```

**Parameters:**

- `p_256261_` (`ResourceKey<? extends Registry<T>>`)
- `p_256010_` (`RegistrySetBuilder.RegistryBootstrap<T>`)

**Returns:** `public <T> RegistrySetBuilder`

### getEntryKeys

```java
public List<? extends ResourceKey<? extends Registry<?>>> getEntryKeys()
```

**Returns:** `public List<? extends ResourceKey<? extends Registry<?>>>`

### createState

```java
private RegistrySetBuilder.BuildState createState(RegistryAccess p_256400_)
```

**Parameters:**

- `p_256400_` (`RegistryAccess`)

**Returns:** `private RegistrySetBuilder.BuildState`

### buildProviderWithContext

```java
private static HolderLookup.Provider buildProviderWithContext(RegistrySetBuilder.UniversalOwner p_326837_, RegistryAccess p_312694_, Stream<HolderLookup.RegistryLookup<?>> p_312024_)
```

**Parameters:**

- `p_326837_` (`RegistrySetBuilder.UniversalOwner`)
- `p_312694_` (`RegistryAccess`)
- `p_312024_` (`Stream<HolderLookup.RegistryLookup<?>>`)

**Returns:** `private static HolderLookup.Provider`

### createForContextRegistry

```java
<T> public static <T> Entry<T> createForContextRegistry(HolderLookup.RegistryLookup<T> p_326874_)
```

**Parameters:**

- `p_326874_` (`HolderLookup.RegistryLookup<T>`)

**Returns:** `public static <T> Entry<T>`

### createForNewRegistry

```java
<T> public static <T> Entry<T> createForNewRegistry(RegistrySetBuilder.UniversalOwner p_326836_, HolderLookup.RegistryLookup<T> p_326940_)
```

**Parameters:**

- `p_326836_` (`RegistrySetBuilder.UniversalOwner`)
- `p_326940_` (`HolderLookup.RegistryLookup<T>`)

**Returns:** `public static <T> Entry<T>`

### listRegistries

```java
public Stream<ResourceKey<? extends Registry<?>>> listRegistries()
```

**Returns:** `Stream<ResourceKey<? extends Registry<?>>>`

### getEntry

```java
<T> <T> Optional<Entry<T>> getEntry(ResourceKey<? extends Registry<? extends T>> p_326910_)
```

**Parameters:**

- `p_326910_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `<T> Optional<Entry<T>>`

### lookup

```java
public <T> Optional<HolderLookup.RegistryLookup<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_326942_)
```

**Parameters:**

- `p_326942_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<HolderLookup.RegistryLookup<T>>`

### createSerializationContext

```java
public <V> RegistryOps<V> createSerializationContext(DynamicOps<V> p_326947_)
```

**Parameters:**

- `p_326947_` (`DynamicOps<V>`)

**Returns:** `RegistryOps<V>`

### lookup

```java
public <T> Optional<RegistryOps.RegistryInfo<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_326905_)
```

**Parameters:**

- `p_326905_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<RegistryOps.RegistryInfo<T>>`

### build

```java
public HolderLookup.Provider build(RegistryAccess p_256112_)
```

**Parameters:**

- `p_256112_` (`RegistryAccess`)

**Returns:** `public HolderLookup.Provider`

### createLazyFullPatchedRegistries

```java
private HolderLookup.Provider createLazyFullPatchedRegistries(RegistryAccess p_312301_, HolderLookup.Provider p_311942_, Cloner.Factory p_312464_, Map<ResourceKey<? extends Registry<?>>, RegistrySetBuilder.RegistryContents<?>> p_312890_, HolderLookup.Provider p_311825_)
```

**Parameters:**

- `p_312301_` (`RegistryAccess`)
- `p_311942_` (`HolderLookup.Provider`)
- `p_312464_` (`Cloner.Factory`)
- `p_312890_` (`Map<ResourceKey<? extends Registry<?>>, RegistrySetBuilder.RegistryContents<?>>`)
- `p_311825_` (`HolderLookup.Provider`)

**Returns:** `private HolderLookup.Provider`

### createLazyFullPatchedRegistries

```java
<T> private <T> HolderLookup.RegistryLookup<T> createLazyFullPatchedRegistries(HolderOwner<T> p_312323_, Cloner.Factory p_311780_, ResourceKey<? extends Registry<? extends T>> p_311836_, HolderLookup.Provider p_312115_, HolderLookup.Provider p_312725_, MutableObject<HolderLookup.Provider> p_311797_)
```

**Parameters:**

- `p_312323_` (`HolderOwner<T>`)
- `p_311780_` (`Cloner.Factory`)
- `p_311836_` (`ResourceKey<? extends Registry<? extends T>>`)
- `p_312115_` (`HolderLookup.Provider`)
- `p_312725_` (`HolderLookup.Provider`)
- `p_311797_` (`MutableObject<HolderLookup.Provider>`)

**Returns:** `private <T> HolderLookup.RegistryLookup<T>`

### lookupFromMap

```java
return lookupFromMap()
```

**Returns:** `return`

### buildPatch

```java
public RegistrySetBuilder.PatchedRegistries buildPatch(RegistryAccess p_255676_, HolderLookup.Provider p_255900_, Cloner.Factory p_312173_)
```

**Parameters:**

- `p_255676_` (`RegistryAccess`)
- `p_255900_` (`HolderLookup.Provider`)
- `p_312173_` (`Cloner.Factory`)

**Returns:** `public RegistrySetBuilder.PatchedRegistries`

### BuildState

```java
static record BuildState(RegistrySetBuilder.UniversalOwner owner, RegistrySetBuilder.UniversalLookup lookup, Map<ResourceLocation, HolderGetter<?>> registries, Map<ResourceKey<?>, RegistrySetBuilder.RegisteredValue<?>> registeredValues, List<RuntimeException> errors)
```

**Parameters:**

- `owner` (`RegistrySetBuilder.UniversalOwner`)
- `lookup` (`RegistrySetBuilder.UniversalLookup`)
- `registries` (`Map<ResourceLocation, HolderGetter<?>>`)
- `registeredValues` (`Map<ResourceKey<?>, RegistrySetBuilder.RegisteredValue<?>>`)
- `errors` (`List<RuntimeException>`)

**Returns:** `static record`

### create

```java
public static RegistrySetBuilder.BuildState create(RegistryAccess p_255995_, Stream<ResourceKey<? extends Registry<?>>> p_256495_)
```

**Parameters:**

- `p_255995_` (`RegistryAccess`)
- `p_256495_` (`Stream<ResourceKey<? extends Registry<?>>>`)

**Returns:** `public static RegistrySetBuilder.BuildState`

### bootstrapContext

```java
<T> public <T> BootstrapContext<T> bootstrapContext()
```

**Returns:** `public <T> BootstrapContext<T>`

### register

```java
public Holder.Reference<T> register(ResourceKey<T> p_256176_, T p_256422_, Lifecycle p_255924_)
```

**Parameters:**

- `p_256176_` (`ResourceKey<T>`)
- `p_256422_` (`T`)
- `p_255924_` (`Lifecycle`)

**Returns:** `Holder.Reference<T>`

### lookup

```java
public <S> HolderGetter<S> lookup(ResourceKey<? extends Registry<? extends S>> p_255961_)
```

**Parameters:**

- `p_255961_` (`ResourceKey<? extends Registry<? extends S>>`)

**Returns:** `HolderGetter<S>`

### registryLookup

```java
public <S> Optional<HolderLookup.RegistryLookup<S>> registryLookup(ResourceKey<? extends Registry<? extends S>> registry)
```

**Parameters:**

- `registry` (`ResourceKey<? extends Registry<? extends S>>`)

**Returns:** `Optional<HolderLookup.RegistryLookup<S>>`

### reportUnclaimedRegisteredValues

```java
public void reportUnclaimedRegisteredValues()
```

**Returns:** `public void`

### reportNotCollectedHolders

```java
public void reportNotCollectedHolders()
```

**Returns:** `public void`

### throwOnError

```java
public void throwOnError()
```

**Returns:** `public void`

### EmptyTagLookup

```java
protected EmptyTagLookup(HolderOwner<T> p_256166_)
```

**Parameters:**

- `p_256166_` (`HolderOwner<T>`)

**Returns:** `protected`

### get

```java
public Optional<HolderSet.Named<T>> get(TagKey<T> p_256664_)
```

**Parameters:**

- `p_256664_` (`TagKey<T>`)

**Returns:** `Optional<HolderSet.Named<T>>`

### EmptyTagLookupWrapper

```java
 EmptyTagLookupWrapper(HolderOwner<T> p_326948_, HolderLookup.RegistryLookup<T> p_326784_)
```

**Parameters:**

- `p_326948_` (`HolderOwner<T>`)
- `p_326784_` (`HolderLookup.RegistryLookup<T>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### parent

```java
public HolderLookup.RegistryLookup<T> parent()
```

**Returns:** `HolderLookup.RegistryLookup<T>`

### EmptyTagRegistryLookup

```java
protected EmptyTagRegistryLookup(HolderOwner<T> p_326933_)
```

**Parameters:**

- `p_326933_` (`HolderOwner<T>`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### listTags

```java
public Stream<HolderSet.Named<T>> listTags()
```

**Returns:** `Stream<HolderSet.Named<T>>`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Tags are not available in datagen")
```

**Parameters:**

- `datagen"` (`"Tags are not available in`)

**Returns:** `throw new`

### LazyHolder

```java
protected LazyHolder(HolderOwner<T> p_312861_, ResourceKey<T> p_312263_)
```

**Parameters:**

- `p_312861_` (`HolderOwner<T>`)
- `p_312263_` (`ResourceKey<T>`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### bindValue

```java
protected void bindValue(T p_312469_)
```

**Parameters:**

- `p_312469_` (`T`)

### value

```java
public T value()
```

**Returns:** `T`

### PatchedRegistries

```java
public static record PatchedRegistries(HolderLookup.Provider full, HolderLookup.Provider patches)
```

**Parameters:**

- `full` (`HolderLookup.Provider`)
- `patches` (`HolderLookup.Provider`)

**Returns:** `public static record`

### run

```java
void run(BootstrapContext<T> p_321765_)
```

**Parameters:**

- `p_321765_` (`BootstrapContext<T>`)

### buildAsLookup

```java
public HolderLookup.RegistryLookup<T> buildAsLookup(RegistrySetBuilder.UniversalOwner p_326796_)
```

**Parameters:**

- `p_326796_` (`RegistrySetBuilder.UniversalOwner`)

**Returns:** `public HolderLookup.RegistryLookup<T>`

### apply

```java
void apply(RegistrySetBuilder.BuildState p_256272_)
```

**Parameters:**

- `p_256272_` (`RegistrySetBuilder.BuildState`)

### collectRegisteredValues

```java
public RegistrySetBuilder.RegistryContents<T> collectRegisteredValues(RegistrySetBuilder.BuildState p_256416_)
```

**Parameters:**

- `p_256416_` (`RegistrySetBuilder.BuildState`)

**Returns:** `public RegistrySetBuilder.RegistryContents<T>`

### UniversalLookup

```java
public UniversalLookup(HolderOwner<Object> p_256629_)
```

**Parameters:**

- `p_256629_` (`HolderOwner<Object>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### get

```java
public Optional<Holder.Reference<Object>> get(ResourceKey<Object> p_256303_)
```

**Parameters:**

- `p_256303_` (`ResourceKey<Object>`)

**Returns:** `Optional<Holder.Reference<Object>>`

### getOrCreate

```java
<T> <T> Holder.Reference<T> getOrCreate(ResourceKey<T> p_256298_)
```

**Parameters:**

- `p_256298_` (`ResourceKey<T>`)

**Returns:** `<T> Holder.Reference<T>`

### cast

```java
<T> public <T> HolderOwner<T> cast()
```

**Returns:** `public <T> HolderOwner<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PatchedRegistries` | record |  |
| `RegistryBootstrap` | interface |  |
