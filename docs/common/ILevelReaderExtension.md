# ILevelReaderExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private LevelReader self()
```

**Returns:** `private LevelReader`

### isAreaLoaded

```java
default boolean isAreaLoaded(BlockPos center, int range)
```

**Parameters:**

- `center` (`BlockPos`)
- `range` (`int`)

**Returns:** `default boolean`

### holderOrThrow

```java
default <T> Holder<T> holderOrThrow(ResourceKey<T> key)
```

**Parameters:**

- `key` (`ResourceKey<T>`)

**Returns:** `Holder<T>`

### holder

```java
default <T> Optional<Holder.Reference<T>> holder(ResourceKey<T> key)
```

**Parameters:**

- `key` (`ResourceKey<T>`)

**Returns:** `Optional<Holder.Reference<T>>`
