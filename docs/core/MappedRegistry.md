# MappedRegistry

**Package:** `net.minecraft.core`
**Type:** class<T> extends net.neoforged.neoforge.registries.BaseMappedRegistry<T> implements WritableRegistry<T>

## Methods

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
public Optional<Holder.Reference<T>> get(ResourceKey<T> p_255624_)
```

**Parameters:**

- `p_255624_` (`ResourceKey<T>`)

**Returns:** `Optional<Holder.Reference<T>>`

### listElements

```java
public Stream<Holder.Reference<T>> listElements()
```

**Returns:** `Stream<Holder.Reference<T>>`

### get

```java
public Optional<HolderSet.Named<T>> get(TagKey<T> p_256277_)
```

**Parameters:**

- `p_256277_` (`TagKey<T>`)

**Returns:** `Optional<HolderSet.Named<T>>`

### listTags

```java
public Stream<HolderSet.Named<T>> listTags()
```

**Returns:** `Stream<HolderSet.Named<T>>`

### getData

```java
<A> .jetbrains.annotations.Nullable
        public <A> A getData(net.neoforged.neoforge.registries.datamaps.DataMapType<T, A> type, ResourceKey<T> key)
```

**Parameters:**

- `type` (`net.neoforged.neoforge.registries.datamaps.DataMapType<T, A>`)
- `key` (`ResourceKey<T>`)

**Returns:** `.jetbrains.annotations.Nullable
        public <A> A`

### MappedRegistry

```java
public MappedRegistry(ResourceKey<? extends Registry<T>> p_249899_, Lifecycle p_252249_)
```

**Parameters:**

- `p_249899_` (`ResourceKey<? extends Registry<T>>`)
- `p_252249_` (`Lifecycle`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MappedRegistry

```java
public MappedRegistry(ResourceKey<? extends Registry<T>> p_252132_, Lifecycle p_249215_, boolean p_251014_)
```

**Parameters:**

- `p_252132_` (`ResourceKey<? extends Registry<T>>`)
- `p_249215_` (`Lifecycle`)
- `p_251014_` (`boolean`)

**Returns:** `public`

### key

```java
public ResourceKey<? extends Registry<T>> key()
```

**Returns:** `ResourceKey<? extends Registry<T>>`

### toString

```java
public String toString()
```

**Returns:** `String`

### validateWrite

```java
private void validateWrite()
```

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("Registry is already frozen")
```

**Parameters:**

- `frozen"` (`"Registry is already`)

**Returns:** `throw new`

### validateWrite

```java
private void validateWrite(ResourceKey<T> p_205922_)
```

**Parameters:**

- `p_205922_` (`ResourceKey<T>`)

**Returns:** `private void`

### register

```java
public Holder.Reference<T> register(ResourceKey<T> p_256252_, T p_256591_, RegistrationInfo p_326235_)
```

**Parameters:**

- `p_256252_` (`ResourceKey<T>`)
- `p_256591_` (`T`)
- `p_326235_` (`RegistrationInfo`)

**Returns:** `Holder.Reference<T>`

### register

```java
public Holder.Reference<T> register(int id, ResourceKey<T> p_256252_, T p_256591_, RegistrationInfo p_326235_)
```

**Parameters:**

- `id` (`int`)
- `p_256252_` (`ResourceKey<T>`)
- `p_256591_` (`T`)
- `p_326235_` (`RegistrationInfo`)

**Returns:** `public Holder.Reference<T>`

### AssertionError

```java
throw new AssertionError("Missing intrusive holder for " + p_256252_ + ":" + p_256591_)
```

**Parameters:**

- `p_256591_` (`"Missing intrusive holder for " + p_256252_ + ":" +`)

**Returns:** `throw new`

### getKey

```java
public ResourceLocation getKey(T p_122746_)
```

**Parameters:**

- `p_122746_` (`T`)

**Returns:** `ResourceLocation`

### getResourceKey

```java
public Optional<ResourceKey<T>> getResourceKey(T p_122755_)
```

**Parameters:**

- `p_122755_` (`T`)

**Returns:** `Optional<ResourceKey<T>>`

### getId

```java
public int getId(T p_122706_)
```

**Parameters:**

- `p_122706_` (`T`)

**Returns:** `int`

### get

```java
public T get(ResourceKey<T> p_122714_)
```

**Parameters:**

- `p_122714_` (`ResourceKey<T>`)

**Returns:** `T`

### byId

```java
public T byId(int p_122684_)
```

**Parameters:**

- `p_122684_` (`int`)

**Returns:** `T`

### getHolder

```java
public Optional<Holder.Reference<T>> getHolder(int p_205907_)
```

**Parameters:**

- `p_205907_` (`int`)

**Returns:** `Optional<Holder.Reference<T>>`

### getHolder

```java
public Optional<Holder.Reference<T>> getHolder(ResourceLocation p_316743_)
```

**Parameters:**

- `p_316743_` (`ResourceLocation`)

**Returns:** `Optional<Holder.Reference<T>>`

### getHolder

```java
public Optional<Holder.Reference<T>> getHolder(ResourceKey<T> p_205905_)
```

**Parameters:**

- `p_205905_` (`ResourceKey<T>`)

**Returns:** `Optional<Holder.Reference<T>>`

### getAny

```java
public Optional<Holder.Reference<T>> getAny()
```

**Returns:** `Optional<Holder.Reference<T>>`

### wrapAsHolder

```java
public Holder<T> wrapAsHolder(T p_263356_)
```

**Parameters:**

- `p_263356_` (`T`)

**Returns:** `Holder<T>`

### getOrCreateHolderOrThrow

```java
Holder.Reference<T> getOrCreateHolderOrThrow(ResourceKey<T> p_248831_)
```

**Parameters:**

- `p_248831_` (`ResourceKey<T>`)

**Returns:** `Holder.Reference<T>`

### IllegalStateException

```java
throw new IllegalStateException("This registry can't create new holders without value")
```

**Parameters:**

- `value"` (`"This registry can't create new holders without`)

**Returns:** `throw new`

### size

```java
public int size()
```

**Returns:** `int`

### registrationInfo

```java
public Optional<RegistrationInfo> registrationInfo(ResourceKey<T> p_326067_)
```

**Parameters:**

- `p_326067_` (`ResourceKey<T>`)

**Returns:** `Optional<RegistrationInfo>`

### registryLifecycle

```java
public Lifecycle registryLifecycle()
```

**Returns:** `Lifecycle`

### iterator

```java
public Iterator<T> iterator()
```

**Returns:** `Iterator<T>`

### get

```java
public T get(ResourceLocation p_122739_)
```

**Parameters:**

- `p_122739_` (`ResourceLocation`)

**Returns:** `T`

### getValueFromNullable

```java
return getValueFromNullable()
```

**Returns:** `return`

### keySet

```java
public Set<ResourceLocation> keySet()
```

**Returns:** `Set<ResourceLocation>`

### registryKeySet

```java
public Set<ResourceKey<T>> registryKeySet()
```

**Returns:** `Set<ResourceKey<T>>`

### entrySet

```java
public Set<Entry<ResourceKey<T>, T>> entrySet()
```

**Returns:** `Set<Entry<ResourceKey<T>, T>>`

### holders

```java
public Stream<Holder.Reference<T>> holders()
```

**Returns:** `Stream<Holder.Reference<T>>`

### getTags

```java
public Stream<Pair<TagKey<T>, HolderSet.Named<T>>> getTags()
```

**Returns:** `Stream<Pair<TagKey<T>, HolderSet.Named<T>>>`

### getOrCreateTag

```java
public HolderSet.Named<T> getOrCreateTag(TagKey<T> p_205895_)
```

**Parameters:**

- `p_205895_` (`TagKey<T>`)

**Returns:** `HolderSet.Named<T>`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### createTag

```java
private HolderSet.Named<T> createTag(TagKey<T> p_211068_)
```

**Parameters:**

- `p_211068_` (`TagKey<T>`)

**Returns:** `private HolderSet.Named<T>`

### getTagNames

```java
public Stream<TagKey<T>> getTagNames()
```

**Returns:** `Stream<TagKey<T>>`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### getRandom

```java
public Optional<Holder.Reference<T>> getRandom(RandomSource p_235716_)
```

**Parameters:**

- `p_235716_` (`RandomSource`)

**Returns:** `Optional<Holder.Reference<T>>`

### containsKey

```java
public boolean containsKey(ResourceLocation p_122761_)
```

**Parameters:**

- `p_122761_` (`ResourceLocation`)

**Returns:** `boolean`

### containsKey

```java
public boolean containsKey(ResourceKey<T> p_175392_)
```

**Parameters:**

- `p_175392_` (`ResourceKey<T>`)

**Returns:** `boolean`

### unfreeze

```java
public void unfreeze()
```

### freeze

```java
public Registry<T> freeze()
```

**Returns:** `Registry<T>`

### createIntrusiveHolder

```java
public Holder.Reference<T> createIntrusiveHolder(T p_205915_)
```

**Parameters:**

- `p_205915_` (`T`)

**Returns:** `Holder.Reference<T>`

### IllegalStateException

```java
throw new IllegalStateException("This registry can't create intrusive holders")
```

**Parameters:**

- `holders"` (`"This registry can't create intrusive`)

**Returns:** `throw new`

### getTag

```java
public Optional<HolderSet.Named<T>> getTag(TagKey<T> p_205909_)
```

**Parameters:**

- `p_205909_` (`TagKey<T>`)

**Returns:** `Optional<HolderSet.Named<T>>`

### bindTags

```java
public void bindTags(Map<TagKey<T>, List<Holder<T>>> p_205875_)
```

**Parameters:**

- `p_205875_` (`Map<TagKey<T>, List<Holder<T>>>`)

### IllegalStateException

```java
throw new IllegalStateException("Can't create named set " + p_339332_ + " containing value " + holder + " from outside registry " + this)
```

**Parameters:**

- `this` (`"Can't create named set " + p_339332_ + " containing value " + holder + " from outside registry " +`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Found direct holder " + holder + " value in tag " + p_339332_)
```

**Parameters:**

- `p_339332_` (`"Found direct holder " + holder + " value in tag " +`)

**Returns:** `throw new`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### resetTags

```java
public void resetTags()
```

### createRegistrationLookup

```java
public HolderGetter<T> createRegistrationLookup()
```

**Returns:** `HolderGetter<T>`

### get

```java
public Optional<Holder.Reference<T>> get(ResourceKey<T> p_259097_)
```

**Parameters:**

- `p_259097_` (`ResourceKey<T>`)

**Returns:** `Optional<Holder.Reference<T>>`

### getOrThrow

```java
public Holder.Reference<T> getOrThrow(ResourceKey<T> p_259750_)
```

**Parameters:**

- `p_259750_` (`ResourceKey<T>`)

**Returns:** `Holder.Reference<T>`

### get

```java
public Optional<HolderSet.Named<T>> get(TagKey<T> p_259486_)
```

**Parameters:**

- `p_259486_` (`TagKey<T>`)

**Returns:** `Optional<HolderSet.Named<T>>`

### getOrThrow

```java
public HolderSet.Named<T> getOrThrow(TagKey<T> p_260298_)
```

**Parameters:**

- `p_260298_` (`TagKey<T>`)

**Returns:** `HolderSet.Named<T>`

### holderOwner

```java
public HolderOwner<T> holderOwner()
```

**Returns:** `HolderOwner<T>`

### asLookup

```java
public HolderLookup.RegistryLookup<T> asLookup()
```

**Returns:** `HolderLookup.RegistryLookup<T>`

### clear

```java
protected void clear(boolean full)
```

**Parameters:**

- `full` (`boolean`)

### registerIdMapping

```java
protected void registerIdMapping(ResourceKey<T> key, int id)
```

**Parameters:**

- `key` (`ResourceKey<T>`)
- `id` (`int`)

### getId

```java
public int getId(ResourceLocation name)
```

**Parameters:**

- `name` (`ResourceLocation`)

**Returns:** `int`

### getId

```java
public int getId(ResourceKey<T> key)
```

**Parameters:**

- `key` (`ResourceKey<T>`)

**Returns:** `int`

### containsValue

```java
public boolean containsValue(T value)
```

**Parameters:**

- `value` (`T`)

**Returns:** `boolean`
