# ContainerSingleItem

**Package:** `net.minecraft.world.ticks`
**Type:** interface
**Extends:** `Container`

## Methods

### getTheItem

```java
ItemStack getTheItem()
```

**Returns:** `ItemStack`

### splitTheItem

```java
default ItemStack splitTheItem(int p_304641_)
```

**Parameters:**

- `p_304641_` (`int`)

**Returns:** `default ItemStack`

### setTheItem

```java
void setTheItem(ItemStack p_304718_)
```

**Parameters:**

- `p_304718_` (`ItemStack`)

### removeTheItem

```java
default ItemStack removeTheItem()
```

**Returns:** `default ItemStack`

### getContainerSize

```java
default int getContainerSize()
```

**Returns:** `int`

### isEmpty

```java
default boolean isEmpty()
```

**Returns:** `boolean`

### clearContent

```java
default void clearContent()
```

### removeItemNoUpdate

```java
default ItemStack removeItemNoUpdate(int p_273409_)
```

**Parameters:**

- `p_273409_` (`int`)

**Returns:** `ItemStack`

### getItem

```java
default ItemStack getItem(int p_304882_)
```

**Parameters:**

- `p_304882_` (`int`)

**Returns:** `ItemStack`

### removeItem

```java
default ItemStack removeItem(int p_304944_, int p_304791_)
```

**Parameters:**

- `p_304944_` (`int`)
- `p_304791_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
default void setItem(int p_304434_, ItemStack p_304854_)
```

**Parameters:**

- `p_304434_` (`int`)
- `p_304854_` (`ItemStack`)

### getContainerBlockEntity

```java
BlockEntity getContainerBlockEntity()
```

**Returns:** `BlockEntity`

### stillValid

```java
default boolean stillValid(Player p_324363_)
```

**Parameters:**

- `p_324363_` (`Player`)

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BlockContainerSingleItem` | interface |  |
