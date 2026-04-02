# DependencySorter

**Package:** `net.minecraft.util`
**Type:** class<K, V extends DependencySorter.Entry<K>>

## Methods

### addEntry

```java
public DependencySorter<K, V> addEntry(K p_285256_, V p_285334_)
```

**Parameters:**

- `p_285256_` (`K`)
- `p_285334_` (`V`)

**Returns:** `public DependencySorter<K, V>`

### visitDependenciesAndElement

```java
private void visitDependenciesAndElement(Multimap<K, K> p_285183_, Set<K> p_285506_, K p_285108_, BiConsumer<K, V> p_285007_)
```

**Parameters:**

- `p_285183_` (`Multimap<K, K>`)
- `p_285506_` (`Set<K>`)
- `p_285108_` (`K`)
- `p_285007_` (`BiConsumer<K, V>`)

**Returns:** `private void`

### isCyclic

```java
<K> private static <K> boolean isCyclic(Multimap<K, K> p_285132_, K p_285324_, K p_285326_)
```

**Parameters:**

- `p_285132_` (`Multimap<K, K>`)
- `p_285324_` (`K`)
- `p_285326_` (`K`)

**Returns:** `private static <K> boolean`

### addDependencyIfNotCyclic

```java
<K> private static <K> void addDependencyIfNotCyclic(Multimap<K, K> p_285047_, K p_285148_, K p_285193_)
```

**Parameters:**

- `p_285047_` (`Multimap<K, K>`)
- `p_285148_` (`K`)
- `p_285193_` (`K`)

**Returns:** `private static <K> void`

### orderByDependencies

```java
public void orderByDependencies(BiConsumer<K, V> p_285438_)
```

**Parameters:**

- `p_285438_` (`BiConsumer<K, V>`)

**Returns:** `public void`

### visitRequiredDependencies

```java
void visitRequiredDependencies(Consumer<K> p_285054_)
```

**Parameters:**

- `p_285054_` (`Consumer<K>`)

### visitOptionalDependencies

```java
void visitOptionalDependencies(Consumer<K> p_285150_)
```

**Parameters:**

- `p_285150_` (`Consumer<K>`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Entry` | interface |  |
