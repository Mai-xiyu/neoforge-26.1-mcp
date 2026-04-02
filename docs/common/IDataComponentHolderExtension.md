# IDataComponentHolderExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private DataComponentHolder self()
```

**Returns:** `private DataComponentHolder`

### get

```java
default <T> T get(Supplier<? extends DataComponentType<? extends T>> type)
```

**Parameters:**

- `type` (`Supplier<? extends DataComponentType<? extends T>>`)

**Returns:** `T`

### getOrDefault

```java
<T> default <T> T getOrDefault(Supplier<? extends DataComponentType<? extends T>> type, T defaultValue)
```

**Parameters:**

- `type` (`Supplier<? extends DataComponentType<? extends T>>`)
- `defaultValue` (`T`)

**Returns:** `default <T> T`

### has

```java
default boolean has(Supplier<? extends DataComponentType<?>> type)
```

**Parameters:**

- `type` (`Supplier<? extends DataComponentType<?>>`)

**Returns:** `default boolean`

### addToTooltip

```java
<T extends TooltipProvider> default <T extends TooltipProvider> void addToTooltip(DataComponentType<T> type, Item.TooltipContext context, Consumer<Component> adder, TooltipFlag flag)
```

**Parameters:**

- `type` (`DataComponentType<T>`)
- `context` (`Item.TooltipContext`)
- `adder` (`Consumer<Component>`)
- `flag` (`TooltipFlag`)

**Returns:** `default <T extends TooltipProvider> void`

### addToTooltip

```java
<T extends TooltipProvider> default <T extends TooltipProvider> void addToTooltip(Supplier<? extends DataComponentType<T>> type, Item.TooltipContext context, Consumer<Component> adder, TooltipFlag flag)
```

**Parameters:**

- `type` (`Supplier<? extends DataComponentType<T>>`)
- `context` (`Item.TooltipContext`)
- `adder` (`Consumer<Component>`)
- `flag` (`TooltipFlag`)

**Returns:** `default <T extends TooltipProvider> void`
