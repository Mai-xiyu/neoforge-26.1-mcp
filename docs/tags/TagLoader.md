# TagLoader

**Package:** `net.minecraft.tags`
**Type:** class<T>

## Methods

### TagLoader

```java
public TagLoader(Function<ResourceLocation, Optional<? extends T>> p_144493_, String p_144494_)
```

**Parameters:**

- `p_144493_` (`Function<ResourceLocation, Optional<? extends T>>`)
- `p_144494_` (`String`)

**Returns:** `public`

### load

```java
public Map<ResourceLocation, List<TagLoader.EntryWithSource>> load(ResourceManager p_144496_)
```

**Parameters:**

- `p_144496_` (`ResourceManager`)

**Returns:** `public Map<ResourceLocation, List<TagLoader.EntryWithSource>>`

### build

```java
private Either<Collection<TagLoader.EntryWithSource>, Collection<T>> build(TagEntry.Lookup<T> p_215979_, List<TagLoader.EntryWithSource> p_215980_)
```

**Parameters:**

- `p_215979_` (`TagEntry.Lookup<T>`)
- `p_215980_` (`List<TagLoader.EntryWithSource>`)

**Returns:** `private Either<Collection<TagLoader.EntryWithSource>, Collection<T>>`

### build

```java
public Map<ResourceLocation, Collection<T>> build(Map<ResourceLocation, List<TagLoader.EntryWithSource>> p_203899_)
```

**Parameters:**

- `p_203899_` (`Map<ResourceLocation, List<TagLoader.EntryWithSource>>`)

**Returns:** `public Map<ResourceLocation, Collection<T>>`

### element

```java
public T element(ResourceLocation p_216039_)
```

**Parameters:**

- `p_216039_` (`ResourceLocation`)

**Returns:** `T`

### tag

```java
public Collection<T> tag(ResourceLocation p_216041_)
```

**Parameters:**

- `p_216041_` (`ResourceLocation`)

**Returns:** `Collection<T>`

### loadAndBuild

```java
public Map<ResourceLocation, Collection<T>> loadAndBuild(ResourceManager p_203901_)
```

**Parameters:**

- `p_203901_` (`ResourceManager`)

**Returns:** `public Map<ResourceLocation, Collection<T>>`

### EntryWithSource

```java
public static record EntryWithSource(TagEntry entry, String source, boolean remove)
```

**Parameters:**

- `entry` (`TagEntry`)
- `source` (`String`)
- `remove` (`boolean`)

**Returns:** `public static record`

### EntryWithSource

```java
public EntryWithSource(TagEntry entry, String source)
```

**Parameters:**

- `entry` (`TagEntry`)
- `source` (`String`)

**Returns:** `public`

### toString

```java
public String toString()
```

**Returns:** `String`

### visitRequiredDependencies

```java
public void visitRequiredDependencies(Consumer<ResourceLocation> p_285529_)
```

**Parameters:**

- `p_285529_` (`Consumer<ResourceLocation>`)

### visitOptionalDependencies

```java
public void visitOptionalDependencies(Consumer<ResourceLocation> p_285469_)
```

**Parameters:**

- `p_285469_` (`Consumer<ResourceLocation>`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EntryWithSource` | record |  |
