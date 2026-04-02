# ModelProvider

**Package:** `net.minecraft.data.models`
**Type:** class
**Implements:** `DataProvider`

## Methods

### ModelProvider

```java
public ModelProvider(PackOutput p_252226_)
```

**Parameters:**

- `p_252226_` (`PackOutput`)

**Returns:** `public`

### run

```java
public CompletableFuture<?> run(CachedOutput p_253790_)
```

**Parameters:**

- `p_253790_` (`CachedOutput`)

**Returns:** `CompletableFuture<?>`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate blockstate definition for " + block)
```

**Parameters:**

- `block` (`"Duplicate blockstate definition for " +`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate model definition for " + p_339374_)
```

**Parameters:**

- `p_339374_` (`"Duplicate model definition for " +`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Missing blockstate definitions for: " + list)
```

**Parameters:**

- `list` (`"Missing blockstate definitions for: " +`)

**Returns:** `throw new`

### saveCollection

```java
<T> private <T> CompletableFuture<?> saveCollection(CachedOutput p_254549_, Map<T, ? extends Supplier<JsonElement>> p_253779_, Function<T, Path> p_254013_)
```

**Parameters:**

- `p_254549_` (`CachedOutput`)
- `p_253779_` (`Map<T, ? extends Supplier<JsonElement>>`)
- `p_254013_` (`Function<T, Path>`)

**Returns:** `private <T> CompletableFuture<?>`

### getName

```java
public final String getName()
```

**Returns:** `String`
