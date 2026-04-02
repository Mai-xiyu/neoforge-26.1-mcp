# DataProvider

**Package:** `net.minecraft.data`
**Type:** interface

## Methods

### run

```java
CompletableFuture<?> run(CachedOutput p_236071_)
```

**Parameters:**

- `p_236071_` (`CachedOutput`)

**Returns:** `CompletableFuture<?>`

### getName

```java
String getName()
```

**Returns:** `String`

### saveStable

```java
<T> static <T> CompletableFuture<?> saveStable(CachedOutput p_298323_, HolderLookup.Provider p_323556_, Codec<T> p_299231_, T p_298793_, Path p_298236_)
```

**Parameters:**

- `p_298323_` (`CachedOutput`)
- `p_323556_` (`HolderLookup.Provider`)
- `p_299231_` (`Codec<T>`)
- `p_298793_` (`T`)
- `p_298236_` (`Path`)

**Returns:** `static <T> CompletableFuture<?>`

### saveStable

```java
return saveStable()
```

**Returns:** `return`

### saveStable

```java
static CompletableFuture<?> saveStable(CachedOutput p_253653_, JsonElement p_254542_, Path p_254467_)
```

**Parameters:**

- `p_253653_` (`CachedOutput`)
- `p_254542_` (`JsonElement`)
- `p_254467_` (`Path`)

**Returns:** `static CompletableFuture<?>`

### create

```java
T create(PackOutput p_253851_)
```

**Parameters:**

- `p_253851_` (`PackOutput`)

**Returns:** `T`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Factory` | interface |  |
