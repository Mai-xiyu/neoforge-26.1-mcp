# ItemStacksResourceHandler

**Package:** `net.neoforged.neoforge.transfer.item`
**Type:** class
**Extends:** `StacksResourceHandler<ItemStack, ItemResource>`

## Description

Base implementation of a `ResourceHandler<ItemResource>` backed by a list of `ItemStack`s.


The following methods will typically be overridden:

(optional) `#isValid` to limit which resources are allowed in this handler; by default any resource is allowed.
(optional) `#getCapacity` to specify the capacity of this handler; by default the maximum stack size is used.
(recommended) `#onContentsChanged` to react to changes in this handler, for example to trigger `setChanged()`.

@see StacksResourceHandler

## Methods

### ItemStacksResourceHandler

```java
public ItemStacksResourceHandler(int size)
```

**Parameters:**

- `size` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ItemStacksResourceHandler

```java
public ItemStacksResourceHandler(NonNullList<ItemStack> stacks)
```

**Parameters:**

- `stacks` (`NonNullList<ItemStack>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getResourceFrom

```java
public ItemResource getResourceFrom(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `ItemResource`

### getAmountFrom

```java
public int getAmountFrom(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `int`

### getStackFrom

```java
protected ItemStack getStackFrom(ItemResource resource, int amount)
```

**Parameters:**

- `resource` (`ItemResource`)
- `amount` (`int`)

**Returns:** `ItemStack`

### getCapacity

```java
protected int getCapacity(int index, ItemResource resource)
```

**Parameters:**

- `index` (`int`)
- `resource` (`ItemResource`)

**Returns:** `int`

### copyOf

```java
protected ItemStack copyOf(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `ItemStack`

### matches

```java
public boolean matches(ItemStack stack, ItemResource resource)
```

**Parameters:**

- `stack` (`ItemStack`)
- `resource` (`ItemResource`)

**Returns:** `boolean`
