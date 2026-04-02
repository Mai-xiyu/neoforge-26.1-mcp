# ICondition

**Package:** `net.neoforged.neoforge.common.conditions`
**Type:** interface

## Methods

### getConditionally

```java
<V, T> static <V, T> Optional<T> getConditionally(Codec<T> codec, DynamicOps<V> ops, V element)
```

**Parameters:**

- `codec` (`Codec<T>`)
- `ops` (`DynamicOps<V>`)
- `element` (`V`)

**Returns:** `static <V, T> Optional<T>`

### getWithConditionalCodec

```java
<V, T> static <V, T> Optional<T> getWithConditionalCodec(Codec<Optional<T>> codec, DynamicOps<V> ops, V element)
```

**Parameters:**

- `codec` (`Codec<Optional<T>>`)
- `ops` (`DynamicOps<V>`)
- `element` (`V`)

**Returns:** `static <V, T> Optional<T>`

### getWithWithConditionsCodec

```java
<V, T> static <V, T> Optional<T> getWithWithConditionsCodec(Codec<Optional<WithConditions<T>>> codec, DynamicOps<V> ops, V elements)
```

**Parameters:**

- `codec` (`Codec<Optional<WithConditions<T>>>`)
- `ops` (`DynamicOps<V>`)
- `elements` (`V`)

**Returns:** `static <V, T> Optional<T>`

### conditionsMatched

```java
<V> static <V> boolean conditionsMatched(DynamicOps<V> ops, V element)
```

**Parameters:**

- `ops` (`DynamicOps<V>`)
- `element` (`V`)

**Returns:** `static <V> boolean`

### writeConditions

```java
static void writeConditions(HolderLookup.Provider registries, JsonObject jsonObject, ICondition[]... conditions)
```

**Parameters:**

- `registries` (`HolderLookup.Provider`)
- `jsonObject` (`JsonObject`)
- `conditions` (`ICondition[]...`)

### writeConditions

```java
static void writeConditions(HolderLookup.Provider registries, JsonObject jsonObject, List<ICondition> conditions)
```

**Parameters:**

- `registries` (`HolderLookup.Provider`)
- `jsonObject` (`JsonObject`)
- `conditions` (`List<ICondition>`)

### writeConditions

```java
static void writeConditions(DynamicOps<JsonElement> jsonOps, JsonObject jsonObject, List<ICondition> conditions)
```

**Parameters:**

- `jsonOps` (`DynamicOps<JsonElement>`)
- `jsonObject` (`JsonObject`)
- `conditions` (`List<ICondition>`)

### test

```java
boolean test(IContext context)
```

**Parameters:**

- `context` (`IContext`)

**Returns:** `boolean`

### codec

```java
MapCodec<? extends ICondition> codec()
```

**Returns:** `MapCodec<? extends ICondition>`

### getAllTags

```java
public <T> Map<ResourceLocation, Collection<Holder<T>>> getAllTags(ResourceKey<? extends Registry<T>> registry)
```

**Parameters:**

- `registry` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `Map<ResourceLocation, Collection<Holder<T>>>`

### getAllTags

```java
public <T> Map<ResourceLocation, Collection<Holder<T>>> getAllTags(ResourceKey<? extends Registry<T>> registry)
```

**Parameters:**

- `registry` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `Map<ResourceLocation, Collection<Holder<T>>>`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Usage of tag-based conditions is not permitted in this context!")
```

**Parameters:**

- `context!"` (`"Usage of tag-based conditions is not permitted in this`)

**Returns:** `throw new`

### getTag

```java
default <T> Collection<Holder<T>> getTag(TagKey<T> key)
```

**Parameters:**

- `key` (`TagKey<T>`)

**Returns:** `Collection<Holder<T>>`

### getAllTags

```java
<T> Map<ResourceLocation, Collection<Holder<T>>> getAllTags(ResourceKey<? extends Registry<T>> registry)
```

**Parameters:**

- `registry` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `Map<ResourceLocation, Collection<Holder<T>>>`
