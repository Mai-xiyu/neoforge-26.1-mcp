# ContainerLevelAccess

**Package:** `net.minecraft.world.inventory`
**Type:** interface

## Methods

### evaluate

```java
public <T> Optional<T> evaluate(BiFunction<Level, BlockPos, T> p_39304_)
```

**Parameters:**

- `p_39304_` (`BiFunction<Level, BlockPos, T>`)

**Returns:** `Optional<T>`

### create

```java
static ContainerLevelAccess create(Level p_39290_, BlockPos p_39291_)
```

**Parameters:**

- `p_39290_` (`Level`)
- `p_39291_` (`BlockPos`)

**Returns:** `static ContainerLevelAccess`

### ContainerLevelAccess

```java
return new ContainerLevelAccess()
```

**Returns:** `return new`

### evaluate

```java
public <T> Optional<T> evaluate(BiFunction<Level, BlockPos, T> p_39311_)
```

**Parameters:**

- `p_39311_` (`BiFunction<Level, BlockPos, T>`)

**Returns:** `Optional<T>`

### evaluate

```java
<T> <T> Optional<T> evaluate(BiFunction<Level, BlockPos, T> p_39298_)
```

**Parameters:**

- `p_39298_` (`BiFunction<Level, BlockPos, T>`)

**Returns:** `<T> Optional<T>`

### evaluate

```java
<T> default <T> T evaluate(BiFunction<Level, BlockPos, T> p_39300_, T p_39301_)
```

**Parameters:**

- `p_39300_` (`BiFunction<Level, BlockPos, T>`)
- `p_39301_` (`T`)

**Returns:** `default <T> T`

### execute

```java
default void execute(BiConsumer<Level, BlockPos> p_39293_)
```

**Parameters:**

- `p_39293_` (`BiConsumer<Level, BlockPos>`)

**Returns:** `default void`
