# DataMapValueRemover

**Package:** `net.neoforged.neoforge.registries.datamaps`
**Type:** interface<R, T>
**Annotations:** `@FunctionalInterface`

## Description

An interface used to remove values from registry data maps. This allows "decomposing" the data
and removing only a specific part of it (like a specific key in the case of java.util.Map map-based data).
@param <T> the data type
@param <R> the type of the registry this remover is for
@apiNote This is only useful for `AdvancedDataMapType`.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `Default<?, ?>` |  |

## Methods

### remove

```java
Optional<T> remove(T value, Registry<R> registry, Either<TagKey<R>, ResourceKey<R>> source, R object)
```

**Parameters:**

- `value` (`T`)
- `registry` (`Registry<R>`)
- `source` (`Either<TagKey<R>, ResourceKey<R>>`)
- `object` (`R`)

**Returns:** `Optional<T>`

### defaultRemover

```java
<T, R> public static <T, R> Default<T, R> defaultRemover()
```

**Returns:** `public static <T, R> Default<T, R>`

### codec

```java
<T, R> public static <T, R> Codec<Default<T, R>> codec()
```

**Returns:** `public static <T, R> Codec<Default<T, R>>`

### Default

```java
private Default()
```

**Returns:** `private`

### remove

```java
public Optional<T> remove(T value, Registry<R> registry, Either<TagKey<R>, ResourceKey<R>> source, R object)
```

**Parameters:**

- `value` (`T`)
- `registry` (`Registry<R>`)
- `source` (`Either<TagKey<R>, ResourceKey<R>>`)
- `object` (`R`)

**Returns:** `Optional<T>`
