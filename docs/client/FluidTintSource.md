# FluidTintSource

**Package:** `net.neoforged.neoforge.client.fluid`
**Type:** interface
**Extends:** `BlockTintSource`
**Side:** 🖥️ Client

## Methods

### color

```java
int color(FluidState state)
```

**Parameters:**

- `state` (`FluidState`)

**Returns:** `int`

### colorInWorld

```java
default int colorInWorld(FluidState fluidState, BlockState blockState, BlockAndTintGetter level, BlockPos pos)
```

**Parameters:**

- `fluidState` (`FluidState`)
- `blockState` (`BlockState`)
- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)

**Returns:** `default int`

### colorAsStack

```java
default int colorAsStack(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `default int`

### color

```java
default int color(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `int`

### colorInWorld

```java
default int colorInWorld(BlockState state, BlockAndTintGetter level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)

**Returns:** `int`
