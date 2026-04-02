# DataComponentHolder

**Package:** `net.minecraft.core.component`
**Type:** interface
**Extends:** `net.neoforged.neoforge.common.extensions.IDataComponentHolderExtension`

## Methods

### getComponents

```java
DataComponentMap getComponents()
```

**Returns:** `DataComponentMap`

### get

```java
default <T> T get(DataComponentType<? extends T> p_331625_)
```

**Parameters:**

- `p_331625_` (`DataComponentType<? extends T>`)

**Returns:** `T`

### getOrDefault

```java
<T> default <T> T getOrDefault(DataComponentType<? extends T> p_331643_, T p_330718_)
```

**Parameters:**

- `p_331643_` (`DataComponentType<? extends T>`)
- `p_330718_` (`T`)

**Returns:** `default <T> T`

### has

```java
default boolean has(DataComponentType<?> p_330779_)
```

**Parameters:**

- `p_330779_` (`DataComponentType<?>`)

**Returns:** `default boolean`
