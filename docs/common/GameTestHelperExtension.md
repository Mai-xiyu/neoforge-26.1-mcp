# GameTestHelperExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Description

Additional functionality for `net.minecraft.gametest.framework.GameTestHelper`

## Methods

### self

```java
private GameTestHelper self()
```

**Returns:** `private GameTestHelper`

### fail

```java
default void fail(String message, BlockPos pos)
```

**Parameters:**

- `message` (`String`)
- `pos` (`BlockPos`)

### fail

```java
default void fail(String message, Entity entity)
```

**Parameters:**

- `message` (`String`)
- `entity` (`Entity`)

### getCapability

```java
default <T, C extends @Nullable Object> T getCapability(BlockCapability<T, C> cap, BlockPos pos, C context)
```

**Parameters:**

- `cap` (`BlockCapability<T, C>`)
- `pos` (`BlockPos`)
- `context` (`C`)

**Returns:** `T`

### requireCapability

```java
default <T, C extends @Nullable Object> T requireCapability(BlockCapability<T, C> cap, BlockPos pos, C context)
```

**Parameters:**

- `cap` (`BlockCapability<T, C>`)
- `pos` (`BlockPos`)
- `context` (`C`)

**Returns:** `T`
