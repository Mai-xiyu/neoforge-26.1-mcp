# Holder

**Package:** `net.minecraft.core`
**Type:** interface<T> extends net.neoforged.neoforge.common.extensions.IHolderExtension<T>

## Methods

### value

```java
T value()
```

**Returns:** `T`

### isBound

```java
boolean isBound()
```

**Returns:** `boolean`

### is

```java
boolean is(ResourceLocation p_205713_)
```

**Parameters:**

- `p_205713_` (`ResourceLocation`)

**Returns:** `boolean`

### is

```java
boolean is(ResourceKey<T> p_205712_)
```

**Parameters:**

- `p_205712_` (`ResourceKey<T>`)

**Returns:** `boolean`

### is

```java
boolean is(Predicate<ResourceKey<T>> p_205711_)
```

**Parameters:**

- `p_205711_` (`Predicate<ResourceKey<T>>`)

**Returns:** `boolean`

### is

```java
boolean is(TagKey<T> p_205705_)
```

**Parameters:**

- `p_205705_` (`TagKey<T>`)

**Returns:** `boolean`

### is

```java
boolean is(Holder<T> p_316447_)
```

**Parameters:**

- `p_316447_` (`Holder<T>`)

**Returns:** `boolean`

### tags

```java
Stream<TagKey<T>> tags()
```

**Returns:** `Stream<TagKey<T>>`

### unwrap

```java
Either<ResourceKey<T>, T> unwrap()
```

**Returns:** `Either<ResourceKey<T>, T>`

### unwrapKey

```java
Optional<ResourceKey<T>> unwrapKey()
```

**Returns:** `Optional<ResourceKey<T>>`

### kind

```java
Holder.Kind kind()
```

**Returns:** `Holder.Kind`

### canSerializeIn

```java
boolean canSerializeIn(HolderOwner<T> p_255833_)
```

**Parameters:**

- `p_255833_` (`HolderOwner<T>`)

**Returns:** `boolean`

### getRegisteredName

```java
default String getRegisteredName()
```

**Returns:** `default String`

### direct

```java
<T> static <T> Holder<T> direct(T p_205710_)
```

**Parameters:**

- `p_205710_` (`T`)

**Returns:** `static <T> Holder<T>`

### isBound

```java
public boolean isBound()
```

**Returns:** `boolean`

### is

```java
public boolean is(ResourceLocation p_205727_)
```

**Parameters:**

- `p_205727_` (`ResourceLocation`)

**Returns:** `boolean`

### is

```java
public boolean is(ResourceKey<T> p_205725_)
```

**Parameters:**

- `p_205725_` (`ResourceKey<T>`)

**Returns:** `boolean`

### is

```java
public boolean is(TagKey<T> p_205719_)
```

**Parameters:**

- `p_205719_` (`TagKey<T>`)

**Returns:** `boolean`

### is

```java
public boolean is(Holder<T> p_316277_)
```

**Parameters:**

- `p_316277_` (`Holder<T>`)

**Returns:** `boolean`

### is

```java
public boolean is(Predicate<ResourceKey<T>> p_205723_)
```

**Parameters:**

- `p_205723_` (`Predicate<ResourceKey<T>>`)

**Returns:** `boolean`

### unwrap

```java
public Either<ResourceKey<T>, T> unwrap()
```

**Returns:** `Either<ResourceKey<T>, T>`

### unwrapKey

```java
public Optional<ResourceKey<T>> unwrapKey()
```

**Returns:** `Optional<ResourceKey<T>>`

### kind

```java
public Holder.Kind kind()
```

**Returns:** `Holder.Kind`

### toString

```java
public String toString()
```

**Returns:** `String`

### canSerializeIn

```java
public boolean canSerializeIn(HolderOwner<T> p_256328_)
```

**Parameters:**

- `p_256328_` (`HolderOwner<T>`)

**Returns:** `boolean`

### tags

```java
public Stream<TagKey<T>> tags()
```

**Returns:** `Stream<TagKey<T>>`

### Reference

```java
protected Reference(Holder.Reference.Type p_256425_, HolderOwner<T> p_256562_, ResourceKey<T> p_256636_, T p_255889_)
```

**Parameters:**

- `p_256425_` (`Holder.Reference.Type`)
- `p_256562_` (`HolderOwner<T>`)
- `p_256636_` (`ResourceKey<T>`)
- `p_255889_` (`T`)

**Returns:** `protected`

### createStandAlone

```java
<T> public static <T> Holder.Reference<T> createStandAlone(HolderOwner<T> p_255955_, ResourceKey<T> p_255958_)
```

**Parameters:**

- `p_255955_` (`HolderOwner<T>`)
- `p_255958_` (`ResourceKey<T>`)

**Returns:** `public static <T> Holder.Reference<T>`

### createIntrusive

```java
public static <T> Holder.Reference<T> createIntrusive(HolderOwner<T> p_256106_, T p_255948_)
```

**Parameters:**

- `p_256106_` (`HolderOwner<T>`)
- `p_255948_` (`T`)

**Returns:** `Holder.Reference<T>`

### key

```java
public ResourceKey<T> key()
```

**Returns:** `public ResourceKey<T>`

### IllegalStateException

```java
throw new IllegalStateException("Trying to access unbound value '" + this.value + "' from registry " + this.owner)
```

**Parameters:**

- `this.owner` (`"Trying to access unbound value '" + this.value + "' from registry " +`)

**Returns:** `throw new`

### value

```java
public T value()
```

**Returns:** `T`

### IllegalStateException

```java
throw new IllegalStateException("Trying to access unbound value '" + this.key + "' from registry " + this.owner)
```

**Parameters:**

- `this.owner` (`"Trying to access unbound value '" + this.key + "' from registry " +`)

**Returns:** `throw new`

### is

```java
public boolean is(ResourceLocation p_205779_)
```

**Parameters:**

- `p_205779_` (`ResourceLocation`)

**Returns:** `boolean`

### is

```java
public boolean is(ResourceKey<T> p_205774_)
```

**Parameters:**

- `p_205774_` (`ResourceKey<T>`)

**Returns:** `boolean`

### is

```java
public boolean is(TagKey<T> p_205760_)
```

**Parameters:**

- `p_205760_` (`TagKey<T>`)

**Returns:** `boolean`

### is

```java
public boolean is(Holder<T> p_316168_)
```

**Parameters:**

- `p_316168_` (`Holder<T>`)

**Returns:** `boolean`

### is

```java
public boolean is(Predicate<ResourceKey<T>> p_205772_)
```

**Parameters:**

- `p_205772_` (`Predicate<ResourceKey<T>>`)

**Returns:** `boolean`

### canSerializeIn

```java
public boolean canSerializeIn(HolderOwner<T> p_256521_)
```

**Parameters:**

- `p_256521_` (`HolderOwner<T>`)

**Returns:** `boolean`

### unwrap

```java
public Either<ResourceKey<T>, T> unwrap()
```

**Returns:** `Either<ResourceKey<T>, T>`

### unwrapKey

```java
public Optional<ResourceKey<T>> unwrapKey()
```

**Returns:** `Optional<ResourceKey<T>>`

### kind

```java
public Holder.Kind kind()
```

**Returns:** `Holder.Kind`

### isBound

```java
public boolean isBound()
```

**Returns:** `boolean`

### bindKey

```java
void bindKey(ResourceKey<T> p_251943_)
```

**Parameters:**

- `p_251943_` (`ResourceKey<T>`)

### IllegalStateException

```java
throw new IllegalStateException("Can't change holder key: existing=" + this.key + ", new=" + p_251943_)
```

**Parameters:**

- `"` (`"Can't change holder key: existing=" + this.key +`)
- `p_251943_` (`new=" +`)

**Returns:** `throw new`

### bindValue

```java
protected void bindValue(T p_249418_)
```

**Parameters:**

- `p_249418_` (`T`)

**Returns:** `protected void`

### IllegalStateException

```java
throw new IllegalStateException("Can't change holder " + this.key + " value: existing=" + this.value + ", new=" + p_249418_)
```

**Parameters:**

- `"` (`"Can't change holder " + this.key + " value: existing=" + this.value +`)
- `p_249418_` (`new=" +`)

**Returns:** `throw new`

### getData

```java
<A> .jetbrains.annotations.Nullable
        public <A> A getData(net.neoforged.neoforge.registries.datamaps.DataMapType<T, A> type)
```

**Parameters:**

- `type` (`net.neoforged.neoforge.registries.datamaps.DataMapType<T, A>`)

**Returns:** `.jetbrains.annotations.Nullable
        public <A> A`

### bindTags

```java
void bindTags(Collection<TagKey<T>> p_205770_)
```

**Parameters:**

- `p_205770_` (`Collection<TagKey<T>>`)

### tags

```java
public Stream<TagKey<T>> tags()
```

**Returns:** `Stream<TagKey<T>>`

### toString

```java
public String toString()
```

**Returns:** `String`

### getKey

```java
.jetbrains.annotations.Nullable
        public ResourceKey<T> getKey()
```

**Returns:** `.jetbrains.annotations.Nullable
        public ResourceKey<T>`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### equals

```java
public boolean equals(Object obj)
```

**Parameters:**

- `obj` (`Object`)

**Returns:** `boolean`

### unwrapLookup

```java
.jetbrains.annotations.Nullable
        public HolderLookup.RegistryLookup<T> unwrapLookup()
```

**Returns:** `.jetbrains.annotations.Nullable
        public HolderLookup.RegistryLookup<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Direct` | record |  |
| `Kind` | enum |  |
| `Reference` | class |  |
| `Type` | enum |  |
