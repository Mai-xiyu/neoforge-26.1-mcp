# DeferredBlock

**Package:** `net.neoforged.neoforge.registries`
**Type:** class<T extends Block> extends DeferredHolder<Block, T>
**Implements:** `ItemLike`

## Description

Special `DeferredHolder` for `Block Blocks` that implements `ItemLike`.
@param <T> The specific `Block` type.

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

### IllegalStateException

```java
throw new IllegalStateException("Block does not have a corresponding item: " + this.key)
```

**Parameters:**

- `this.key` (`"Block does not have a corresponding item: " +`)

**Returns:** `throw new`

### createBlock

```java
public static <T extends Block> DeferredBlock<T> createBlock(ResourceLocation key)
```

**Parameters:**

- `key` (`ResourceLocation`)

**Returns:** `DeferredBlock<T>`

### createBlock

```java
public static <T extends Block> DeferredBlock<T> createBlock(ResourceKey<Block> key)
```

**Parameters:**

- `key` (`ResourceKey<Block>`)

**Returns:** `DeferredBlock<T>`

### DeferredBlock

```java
protected DeferredBlock(ResourceKey<Block> key)
```

**Parameters:**

- `key` (`ResourceKey<Block>`)

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
