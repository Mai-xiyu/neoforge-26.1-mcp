# BlockWrapper

**Package:** `net.neoforged.neoforge.fluids.capability.wrappers`
**Type:** class
**Extends:** `VoidFluidHandler`

## Description

Wrapper around any block, only accounts for fluid placement, otherwise the block acts a void.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `state` | `BlockState` |  |
| `world` | `Level` |  |
| `blockPos` | `BlockPos` |  |
| `liquidContainer` | `LiquidBlockContainer` |  |
| `world` | `Level` |  |
| `blockPos` | `BlockPos` |  |

## Methods

### BlockWrapper

```java
public BlockWrapper(BlockState state, Level world, BlockPos blockPos)
```

**Parameters:**

- `state` (`BlockState`)
- `world` (`Level`)
- `blockPos` (`BlockPos`)

**Returns:** `public`

### fill

```java
public int fill(FluidStack resource, FluidAction action)
```

**Parameters:**

- `resource` (`FluidStack`)
- `action` (`FluidAction`)

**Returns:** `int`

### LiquidContainerBlockWrapper

```java
public LiquidContainerBlockWrapper(LiquidBlockContainer liquidContainer, Level world, BlockPos blockPos)
```

**Parameters:**

- `liquidContainer` (`LiquidBlockContainer`)
- `world` (`Level`)
- `blockPos` (`BlockPos`)

**Returns:** `public`

### fill

```java
public int fill(FluidStack resource, FluidAction action)
```

**Parameters:**

- `resource` (`FluidStack`)
- `action` (`FluidAction`)

**Returns:** `int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LiquidContainerBlockWrapper` | class |  |
