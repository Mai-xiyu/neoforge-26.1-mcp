# IItemPropertiesExtensions

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private Item.Properties self()
```

**Returns:** `private Item.Properties`

### component

```java
<T> default <T> Item.Properties component(Supplier<? extends DataComponentType<T>> componentType, T value)
```

**Parameters:**

- `componentType` (`Supplier<? extends DataComponentType<T>>`)
- `value` (`T`)

**Returns:** `default <T> Item.Properties`
