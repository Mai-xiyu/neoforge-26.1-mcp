# ContainerComponentManipulator

**Package:** `net.minecraft.world.level.storage.loot`
**Type:** interface<T>

## Methods

### type

```java
DataComponentType<T> type()
```

**Returns:** `DataComponentType<T>`

### empty

```java
T empty()
```

**Returns:** `T`

### setContents

```java
T setContents(T p_341056_, Stream<ItemStack> p_341252_)
```

**Parameters:**

- `p_341056_` (`T`)
- `p_341252_` (`Stream<ItemStack>`)

**Returns:** `T`

### getContents

```java
Stream<ItemStack> getContents(T p_341229_)
```

**Parameters:**

- `p_341229_` (`T`)

**Returns:** `Stream<ItemStack>`

### setContents

```java
default void setContents(ItemStack p_340824_, T p_341046_, Stream<ItemStack> p_341372_)
```

**Parameters:**

- `p_340824_` (`ItemStack`)
- `p_341046_` (`T`)
- `p_341372_` (`Stream<ItemStack>`)

**Returns:** `default void`

### setContents

```java
default void setContents(ItemStack p_340943_, Stream<ItemStack> p_340843_)
```

**Parameters:**

- `p_340943_` (`ItemStack`)
- `p_340843_` (`Stream<ItemStack>`)

**Returns:** `default void`

### modifyItems

```java
default void modifyItems(ItemStack p_340919_, UnaryOperator<ItemStack> p_341245_)
```

**Parameters:**

- `p_340919_` (`ItemStack`)
- `p_341245_` (`UnaryOperator<ItemStack>`)

**Returns:** `default void`
