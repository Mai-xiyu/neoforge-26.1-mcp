# WorldGenLevel

**Package:** `net.minecraft.world.level`
**Type:** interface
**Extends:** `ServerLevelAccessor`

## Methods

### getSeed

```java
long getSeed()
```

**Returns:** `long`

### ensureCanWrite

```java
default boolean ensureCanWrite(BlockPos p_181157_)
```

**Parameters:**

- `p_181157_` (`BlockPos`)

**Returns:** `default boolean`

### setCurrentlyGenerating

```java
default void setCurrentlyGenerating(Supplier<String> p_186618_)
```

**Parameters:**

- `p_186618_` (`Supplier<String>`)

**Returns:** `default void`
