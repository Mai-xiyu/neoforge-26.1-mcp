# DataComponentHolderResource

**Package:** `net.neoforged.neoforge.transfer.resource`
**Type:** interface<T>
**Extends:** `RegisteredResource<T>, DataComponentHolder`

## Description

Helper interface for resources backed by a registry entry and which also hold data component values.


Note that `#isEmpty() empty resources` never have any data components,
and methods that modify data components will simply return the empty resource instance again.
@param <T> The type of the backing registry entry.

## Methods

### isComponentsPatchEmpty

```java
boolean isComponentsPatchEmpty()
```

**Returns:** `boolean`

### withMergedPatch

```java
DataComponentHolderResource<T> withMergedPatch(DataComponentPatch patch)
```

**Parameters:**

- `patch` (`DataComponentPatch`)

**Returns:** `DataComponentHolderResource<T>`

### with

```java
<D> DataComponentHolderResource<T> with(DataComponentType<D> type, D data)
```

**Parameters:**

- `type` (`DataComponentType<D>`)
- `data` (`D`)

**Returns:** `DataComponentHolderResource<T>`

### without

```java
DataComponentHolderResource<T> without(DataComponentType<?> type)
```

**Parameters:**

- `type` (`DataComponentType<?>`)

**Returns:** `DataComponentHolderResource<T>`

### getComponentsPatch

```java
DataComponentPatch getComponentsPatch()
```

**Returns:** `DataComponentPatch`

### with

```java
default <D> DataComponentHolderResource<T> with(Supplier<? extends DataComponentType<D>> type, D data)
```

**Parameters:**

- `type` (`Supplier<? extends DataComponentType<D>>`)
- `data` (`D`)

**Returns:** `DataComponentHolderResource<T>`

### without

```java
default DataComponentHolderResource<T> without(Supplier<? extends DataComponentType<?>> type)
```

**Parameters:**

- `type` (`Supplier<? extends DataComponentType<?>>`)

**Returns:** `DataComponentHolderResource<T>`
