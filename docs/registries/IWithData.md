# IWithData

**Package:** `net.neoforged.neoforge.registries.datamaps`
**Type:** interface<R>

## Description

Represents a registry object (usually a `net.minecraft.core.Holder`) that has data maps.
@param <R> the type of the object

## Methods

### getData

```java
default <T> T getData(DataMapType<R, T> type)
```

**Parameters:**

- `type` (`DataMapType<R, T>`)

**Returns:** `T`
