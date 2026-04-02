# DeferredHolder

**Package:** `net.neoforged.neoforge.registries`
**Type:** class<R, T extends R> implements Holder<R>, Supplier<T>

## Description

A Deferred Holder is a `Holder` that is constructed with only a ResourceKey.


It will be populated with the underlying Holder from the registry when available.
@param <T> The type of object being held by this DeferredHolder.

## Methods

### create

```java
public static <R, T extends R> DeferredHolder<R, T> create(ResourceKey<? extends Registry<R>> registryKey, ResourceLocation valueName)
```

**Parameters:**

- `registryKey` (`ResourceKey<? extends Registry<R>>`)
- `valueName` (`ResourceLocation`)

**Returns:** `DeferredHolder<R, T>`

### create

```java
public static <R, T extends R> DeferredHolder<R, T> create(ResourceLocation registryName, ResourceLocation valueName)
```

**Parameters:**

- `registryName` (`ResourceLocation`)
- `valueName` (`ResourceLocation`)

**Returns:** `DeferredHolder<R, T>`

### create

```java
public static <R, T extends R> DeferredHolder<R, T> create(ResourceKey<R> key)
```

**Parameters:**

- `key` (`ResourceKey<R>`)

**Returns:** `DeferredHolder<R, T>`

### DeferredHolder

```java
protected final protected DeferredHolder(ResourceKey<R> key)
```

**Parameters:**

- `key` (`ResourceKey<R>`)

**Returns:** `protected`

### value

```java
public T value()
```

**Returns:** `T`

### bind

```java
 bind()
```

**Returns:** ``

### NullPointerException

```java
throw new NullPointerException("Trying to access unbound value: " + this.key)
```

**Parameters:**

- `this.key` (`"Trying to access unbound value: " +`)

**Returns:** `throw new`

### get

```java
public T get()
```

**Returns:** `T`

### asOptional

```java
public Optional<T> asOptional()
```

**Returns:** `Optional<T>`

### getRegistry

```java
protected Registry<R> getRegistry()
```

**Returns:** `Registry<R>`

### bind

```java
protected final void bind(boolean throwOnMissingRegistry)
```

**Parameters:**

- `throwOnMissingRegistry` (`boolean`)

### getId

```java
public ResourceLocation getId()
```

**Returns:** `ResourceLocation`

### getKey

```java
public ResourceKey<R> getKey()
```

**Returns:** `ResourceKey<R>`

### equals

```java
public boolean equals(Object obj)
```

**Parameters:**

- `obj` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

### isBound

```java
public boolean isBound()
```

**Returns:** `boolean`

### bind

```java
 bind()
```

**Returns:** ``

### is

```java
public boolean is(ResourceLocation id)
```

**Parameters:**

- `id` (`ResourceLocation`)

**Returns:** `boolean`

### is

```java
public boolean is(ResourceKey<R> key)
```

**Parameters:**

- `key` (`ResourceKey<R>`)

**Returns:** `boolean`

### is

```java
public boolean is(Predicate<ResourceKey<R>> filter)
```

**Parameters:**

- `filter` (`Predicate<ResourceKey<R>>`)

**Returns:** `boolean`

### is

```java
public boolean is(TagKey<R> tag)
```

**Parameters:**

- `tag` (`TagKey<R>`)

**Returns:** `boolean`

### bind

```java
 bind()
```

**Returns:** ``

### is

```java
public boolean is(Holder<R> holder)
```

**Parameters:**

- `holder` (`Holder<R>`)

**Returns:** `boolean`

### bind

```java
 bind()
```

**Returns:** ``

### tags

```java
public Stream<TagKey<R>> tags()
```

**Returns:** `Stream<TagKey<R>>`

### bind

```java
 bind()
```

**Returns:** ``

### unwrap

```java
public Either<ResourceKey<R>, R> unwrap()
```

**Returns:** `Either<ResourceKey<R>, R>`

### unwrapKey

```java
public Optional<ResourceKey<R>> unwrapKey()
```

**Returns:** `Optional<ResourceKey<R>>`

### kind

```java
public Kind kind()
```

**Returns:** `Kind`

### canSerializeIn

```java
public boolean canSerializeIn(HolderOwner<R> owner)
```

**Parameters:**

- `owner` (`HolderOwner<R>`)

**Returns:** `boolean`

### bind

```java
 bind()
```

**Returns:** ``

### getDelegate

```java
public Holder<R> getDelegate()
```

**Returns:** `Holder<R>`

### bind

```java
 bind()
```

**Returns:** ``
