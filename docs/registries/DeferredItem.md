# DeferredItem

**Package:** `net.neoforged.neoforge.registries`
**Type:** class<T extends Item> extends DeferredHolder<Item, T>
**Implements:** `ItemLike`

## Description

Special `DeferredHolder` for `Item Items` that implements `ItemLike`.
@param <T> The specific `Item` type.

## Methods

### toStack

```java
public ItemStack toStack()
```

**Returns:** `ItemStack`

### toStack

```java
return toStack()
```

**Returns:** `return`

### toStack

```java
public ItemStack toStack(int count)
```

**Parameters:**

- `count` (`int`)

**Returns:** `ItemStack`

### createItem

```java
public static <T extends Item> DeferredItem<T> createItem(ResourceLocation key)
```

**Parameters:**

- `key` (`ResourceLocation`)

**Returns:** `DeferredItem<T>`

### createItem

```java
public static <T extends Item> DeferredItem<T> createItem(ResourceKey<Item> key)
```

**Parameters:**

- `key` (`ResourceKey<Item>`)

**Returns:** `DeferredItem<T>`

### DeferredItem

```java
protected DeferredItem(ResourceKey<Item> key)
```

**Parameters:**

- `key` (`ResourceKey<Item>`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### asItem

```java
public Item asItem()
```

**Returns:** `Item`

### get

```java
return get()
```

**Returns:** `return`
