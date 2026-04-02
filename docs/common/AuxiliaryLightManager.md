# AuxiliaryLightManager

**Package:** `net.neoforged.neoforge.common.world`
**Type:** interface

## Description

Manager for light values controlled by dynamic data in `BlockEntity`s.

## Methods

### setLightAt

```java
void setLightAt(BlockPos pos, int value)
```

**Parameters:**

- `pos` (`BlockPos`)
- `value` (`int`)

### removeLightAt

```java
default void removeLightAt(BlockPos pos)
```

**Parameters:**

- `pos` (`BlockPos`)

### setLightAt

```java
 setLightAt()
```

**Returns:** ``

### getLightAt

```java
int getLightAt(BlockPos pos)
```

**Parameters:**

- `pos` (`BlockPos`)

**Returns:** `int`
