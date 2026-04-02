# IDataComponentMapBuilderExtensions

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private DataComponentMap.Builder self()
```

**Returns:** `private DataComponentMap.Builder`

### set

```java
<T> default <T> DataComponentMap.Builder set(Supplier<? extends DataComponentType<T>> componentType, T value)
```

**Parameters:**

- `componentType` (`Supplier<? extends DataComponentType<T>>`)
- `value` (`T`)

**Returns:** `default <T> DataComponentMap.Builder`
