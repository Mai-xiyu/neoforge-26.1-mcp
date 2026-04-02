# DataMapValueMerger

**Package:** `net.neoforged.neoforge.registries.datamaps`
**Type:** interface<R, T>
**Annotations:** `@FunctionalInterface`

## Description

An interface used to merge two conflicting registry data map values attached to the same object. 
Using a merger you can, for example, merge list data maps that come from different sources, when
otherwise the newest entry would win and override the older one.
@param <T> the data type
@param <R> the type of the registry this merger is for
@apiNote This is only useful for `AdvancedDataMapType`.

## Methods

### merge

```java
T merge(Registry<R> registry, Either<TagKey<R>, ResourceKey<R>> first, T firstValue, Either<TagKey<R>, ResourceKey<R>> second, T secondValue)
```

**Parameters:**

- `registry` (`Registry<R>`)
- `first` (`Either<TagKey<R>, ResourceKey<R>>`)
- `firstValue` (`T`)
- `second` (`Either<TagKey<R>, ResourceKey<R>>`)
- `secondValue` (`T`)

**Returns:** `T`

### defaultMerger

```java
static <T, R> DataMapValueMerger<R, T> defaultMerger()
```

**Returns:** `DataMapValueMerger<R, T>`

### listMerger

```java
static <T, R> DataMapValueMerger<R, List<T>> listMerger()
```

**Returns:** `DataMapValueMerger<R, List<T>>`

### setMerger

```java
static <T, R> DataMapValueMerger<R, Set<T>> setMerger()
```

**Returns:** `DataMapValueMerger<R, Set<T>>`

### mapMerger

```java
static <K, V, R> DataMapValueMerger<R, Map<K, V>> mapMerger()
```

**Returns:** `DataMapValueMerger<R, Map<K, V>>`
