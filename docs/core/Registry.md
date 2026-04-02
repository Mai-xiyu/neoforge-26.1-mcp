# Registry

**Package:** `net.minecraft.core`
**Type:** interface<T> extends Keyable, IdMap<T>, net.neoforged.neoforge.registries.IRegistryExtension<T>

## Methods

### key

```java
ResourceKey<? extends Registry<T>> key()
```

**Returns:** `ResourceKey<? extends Registry<T>>`

### byNameCodec

```java
default Codec<T> byNameCodec()
```

**Returns:** `default Codec<T>`

### holderByNameCodec

```java
default Codec<Holder<T>> holderByNameCodec()
```

**Returns:** `default Codec<Holder<T>>`

### referenceHolderWithLifecycle

```java
private Codec<Holder.Reference<T>> referenceHolderWithLifecycle()
```

**Returns:** `private Codec<Holder.Reference<T>>`

### safeCastToReference

```java
private DataResult<Holder.Reference<T>> safeCastToReference(Holder<T> p_326365_)
```

**Parameters:**

- `p_326365_` (`Holder<T>`)

**Returns:** `private DataResult<Holder.Reference<T>>`

### keys

```java
default <U> Stream<U> keys(DynamicOps<U> p_123030_)
```

**Parameters:**

- `p_123030_` (`DynamicOps<U>`)

**Returns:** `Stream<U>`

### getKey

```java
ResourceLocation getKey(T p_123006_)
```

**Parameters:**

- `p_123006_` (`T`)

**Returns:** `ResourceLocation`

### getResourceKey

```java
Optional<ResourceKey<T>> getResourceKey(T p_123008_)
```

**Parameters:**

- `p_123008_` (`T`)

**Returns:** `Optional<ResourceKey<T>>`

### getId

```java
int getId(T p_122977_)
```

**Parameters:**

- `p_122977_` (`T`)

**Returns:** `int`

### get

```java
T get(ResourceKey<T> p_122980_)
```

**Parameters:**

- `p_122980_` (`ResourceKey<T>`)

**Returns:** `T`

### get

```java
T get(ResourceLocation p_123002_)
```

**Parameters:**

- `p_123002_` (`ResourceLocation`)

**Returns:** `T`

### registrationInfo

```java
Optional<RegistrationInfo> registrationInfo(ResourceKey<T> p_326162_)
```

**Parameters:**

- `p_326162_` (`ResourceKey<T>`)

**Returns:** `Optional<RegistrationInfo>`

### registryLifecycle

```java
Lifecycle registryLifecycle()
```

**Returns:** `Lifecycle`

### getOptional

```java
default Optional<T> getOptional(ResourceLocation p_123007_)
```

**Parameters:**

- `p_123007_` (`ResourceLocation`)

**Returns:** `default Optional<T>`

### getOptional

```java
default Optional<T> getOptional(ResourceKey<T> p_123010_)
```

**Parameters:**

- `p_123010_` (`ResourceKey<T>`)

**Returns:** `default Optional<T>`

### getAny

```java
Optional<Holder.Reference<T>> getAny()
```

**Returns:** `Optional<Holder.Reference<T>>`

### getOrThrow

```java
default T getOrThrow(ResourceKey<T> p_123014_)
```

**Parameters:**

- `p_123014_` (`ResourceKey<T>`)

**Returns:** `default T`

### keySet

```java
Set<ResourceLocation> keySet()
```

**Returns:** `Set<ResourceLocation>`

### entrySet

```java
Set<Entry<ResourceKey<T>, T>> entrySet()
```

**Returns:** `Set<Entry<ResourceKey<T>, T>>`

### registryKeySet

```java
Set<ResourceKey<T>> registryKeySet()
```

**Returns:** `Set<ResourceKey<T>>`

### getRandom

```java
Optional<Holder.Reference<T>> getRandom(RandomSource p_235781_)
```

**Parameters:**

- `p_235781_` (`RandomSource`)

**Returns:** `Optional<Holder.Reference<T>>`

### stream

```java
default Stream<T> stream()
```

**Returns:** `default Stream<T>`

### containsKey

```java
boolean containsKey(ResourceLocation p_123011_)
```

**Parameters:**

- `p_123011_` (`ResourceLocation`)

**Returns:** `boolean`

### containsKey

```java
boolean containsKey(ResourceKey<T> p_175475_)
```

**Parameters:**

- `p_175475_` (`ResourceKey<T>`)

**Returns:** `boolean`

### register

```java
<T> static <T> T register(Registry<? super T> p_122962_, String p_122963_, T p_122964_)
```

**Parameters:**

- `p_122962_` (`Registry<? super T>`)
- `p_122963_` (`String`)
- `p_122964_` (`T`)

**Returns:** `static <T> T`

### register

```java
<V, T extends V> static <V, T extends V> T register(Registry<V> p_122966_, ResourceLocation p_122967_, T p_122968_)
```

**Parameters:**

- `p_122966_` (`Registry<V>`)
- `p_122967_` (`ResourceLocation`)
- `p_122968_` (`T`)

**Returns:** `static <V, T extends V> T`

### register

```java
<V, T extends V> static <V, T extends V> T register(Registry<V> p_194580_, ResourceKey<V> p_194581_, T p_194582_)
```

**Parameters:**

- `p_194580_` (`Registry<V>`)
- `p_194581_` (`ResourceKey<V>`)
- `p_194582_` (`T`)

**Returns:** `static <V, T extends V> T`

### registerForHolder

```java
<T> static <T> Holder.Reference<T> registerForHolder(Registry<T> p_263347_, ResourceKey<T> p_263355_, T p_263428_)
```

**Parameters:**

- `p_263347_` (`Registry<T>`)
- `p_263355_` (`ResourceKey<T>`)
- `p_263428_` (`T`)

**Returns:** `static <T> Holder.Reference<T>`

### registerForHolder

```java
<T> static <T> Holder.Reference<T> registerForHolder(Registry<T> p_263351_, ResourceLocation p_263363_, T p_263423_)
```

**Parameters:**

- `p_263351_` (`Registry<T>`)
- `p_263363_` (`ResourceLocation`)
- `p_263423_` (`T`)

**Returns:** `static <T> Holder.Reference<T>`

### freeze

```java
Registry<T> freeze()
```

**Returns:** `Registry<T>`

### createIntrusiveHolder

```java
Holder.Reference<T> createIntrusiveHolder(T p_206068_)
```

**Parameters:**

- `p_206068_` (`T`)

**Returns:** `Holder.Reference<T>`

### getHolder

```java
Optional<Holder.Reference<T>> getHolder(int p_206051_)
```

**Parameters:**

- `p_206051_` (`int`)

**Returns:** `Optional<Holder.Reference<T>>`

### getHolder

```java
Optional<Holder.Reference<T>> getHolder(ResourceLocation p_316492_)
```

**Parameters:**

- `p_316492_` (`ResourceLocation`)

**Returns:** `Optional<Holder.Reference<T>>`

### getHolder

```java
Optional<Holder.Reference<T>> getHolder(ResourceKey<T> p_206050_)
```

**Parameters:**

- `p_206050_` (`ResourceKey<T>`)

**Returns:** `Optional<Holder.Reference<T>>`

### wrapAsHolder

```java
Holder<T> wrapAsHolder(T p_263382_)
```

**Parameters:**

- `p_263382_` (`T`)

**Returns:** `Holder<T>`

### getHolderOrThrow

```java
default Holder.Reference<T> getHolderOrThrow(ResourceKey<T> p_249087_)
```

**Parameters:**

- `p_249087_` (`ResourceKey<T>`)

**Returns:** `default Holder.Reference<T>`

### holders

```java
Stream<Holder.Reference<T>> holders()
```

**Returns:** `Stream<Holder.Reference<T>>`

### getTag

```java
Optional<HolderSet.Named<T>> getTag(TagKey<T> p_206052_)
```

**Parameters:**

- `p_206052_` (`TagKey<T>`)

**Returns:** `Optional<HolderSet.Named<T>>`

### getTagOrEmpty

```java
default Iterable<Holder<T>> getTagOrEmpty(TagKey<T> p_206059_)
```

**Parameters:**

- `p_206059_` (`TagKey<T>`)

**Returns:** `default Iterable<Holder<T>>`

### getRandomElementOf

```java
default Optional<Holder<T>> getRandomElementOf(TagKey<T> p_320357_, RandomSource p_320935_)
```

**Parameters:**

- `p_320357_` (`TagKey<T>`)
- `p_320935_` (`RandomSource`)

**Returns:** `default Optional<Holder<T>>`

### getOrCreateTag

```java
HolderSet.Named<T> getOrCreateTag(TagKey<T> p_206045_)
```

**Parameters:**

- `p_206045_` (`TagKey<T>`)

**Returns:** `HolderSet.Named<T>`

### getTags

```java
Stream<Pair<TagKey<T>, HolderSet.Named<T>>> getTags()
```

**Returns:** `Stream<Pair<TagKey<T>, HolderSet.Named<T>>>`

### getTagNames

```java
Stream<TagKey<T>> getTagNames()
```

**Returns:** `Stream<TagKey<T>>`

### resetTags

```java
void resetTags()
```

### bindTags

```java
void bindTags(Map<TagKey<T>, List<Holder<T>>> p_205997_)
```

**Parameters:**

- `p_205997_` (`Map<TagKey<T>, List<Holder<T>>>`)

### asHolderIdMap

```java
default IdMap<Holder<T>> asHolderIdMap()
```

**Returns:** `default IdMap<Holder<T>>`

### getId

```java
public int getId(Holder<T> p_259992_)
```

**Parameters:**

- `p_259992_` (`Holder<T>`)

**Returns:** `public int`

### byId

```java
public Holder<T> byId(int p_259972_)
```

**Parameters:**

- `p_259972_` (`int`)

**Returns:** `Holder<T>`

### size

```java
public int size()
```

**Returns:** `int`

### iterator

```java
public Iterator<Holder<T>> iterator()
```

**Returns:** `Iterator<Holder<T>>`

### holderOwner

```java
HolderOwner<T> holderOwner()
```

**Returns:** `HolderOwner<T>`

### asLookup

```java
HolderLookup.RegistryLookup<T> asLookup()
```

**Returns:** `HolderLookup.RegistryLookup<T>`

### asTagAddingLookup

```java
default HolderLookup.RegistryLookup<T> asTagAddingLookup()
```

**Returns:** `default HolderLookup.RegistryLookup<T>`

### parent

```java
public HolderLookup.RegistryLookup<T> parent()
```

**Returns:** `HolderLookup.RegistryLookup<T>`

### get

```java
public Optional<HolderSet.Named<T>> get(TagKey<T> p_259111_)
```

**Parameters:**

- `p_259111_` (`TagKey<T>`)

**Returns:** `Optional<HolderSet.Named<T>>`

### getOrThrow

```java
public HolderSet.Named<T> getOrThrow(TagKey<T> p_259653_)
```

**Parameters:**

- `p_259653_` (`TagKey<T>`)

**Returns:** `HolderSet.Named<T>`
