# Container

**Package:** `net.minecraft.world`
**Type:** interface
**Extends:** `Clearable`

## Methods

### getContainerSize

```java
int getContainerSize()
```

**Returns:** `int`

### isEmpty

```java
boolean isEmpty()
```

**Returns:** `boolean`

### getItem

```java
ItemStack getItem(int p_18941_)
```

**Parameters:**

- `p_18941_` (`int`)

**Returns:** `ItemStack`

### removeItem

```java
ItemStack removeItem(int p_18942_, int p_18943_)
```

**Parameters:**

- `p_18942_` (`int`)
- `p_18943_` (`int`)

**Returns:** `ItemStack`

### removeItemNoUpdate

```java
ItemStack removeItemNoUpdate(int p_18951_)
```

**Parameters:**

- `p_18951_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
void setItem(int p_18944_, ItemStack p_18945_)
```

**Parameters:**

- `p_18944_` (`int`)
- `p_18945_` (`ItemStack`)

### getMaxStackSize

```java
default int getMaxStackSize()
```

**Returns:** `default int`

### getMaxStackSize

```java
default int getMaxStackSize(ItemStack p_335963_)
```

**Parameters:**

- `p_335963_` (`ItemStack`)

**Returns:** `default int`

### setChanged

```java
void setChanged()
```

### stillValid

```java
boolean stillValid(Player p_18946_)
```

**Parameters:**

- `p_18946_` (`Player`)

**Returns:** `boolean`

### startOpen

```java
default void startOpen(Player p_18955_)
```

**Parameters:**

- `p_18955_` (`Player`)

**Returns:** `default void`

### stopOpen

```java
default void stopOpen(Player p_18954_)
```

**Parameters:**

- `p_18954_` (`Player`)

**Returns:** `default void`

### canPlaceItem

```java
default boolean canPlaceItem(int p_18952_, ItemStack p_18953_)
```

**Parameters:**

- `p_18952_` (`int`)
- `p_18953_` (`ItemStack`)

**Returns:** `default boolean`

### canTakeItem

```java
default boolean canTakeItem(Container p_273520_, int p_272681_, ItemStack p_273702_)
```

**Parameters:**

- `p_273520_` (`Container`)
- `p_272681_` (`int`)
- `p_273702_` (`ItemStack`)

**Returns:** `default boolean`

### countItem

```java
default int countItem(Item p_18948_)
```

**Parameters:**

- `p_18948_` (`Item`)

**Returns:** `default int`

### hasAnyOf

```java
default boolean hasAnyOf(Set<Item> p_18950_)
```

**Parameters:**

- `p_18950_` (`Set<Item>`)

**Returns:** `default boolean`

### hasAnyMatching

```java
default boolean hasAnyMatching(Predicate<ItemStack> p_216875_)
```

**Parameters:**

- `p_216875_` (`Predicate<ItemStack>`)

**Returns:** `default boolean`

### stillValidBlockEntity

```java
static boolean stillValidBlockEntity(BlockEntity p_273154_, Player p_273222_)
```

**Parameters:**

- `p_273154_` (`BlockEntity`)
- `p_273222_` (`Player`)

**Returns:** `static boolean`

### stillValidBlockEntity

```java
return stillValidBlockEntity()
```

**Returns:** `return`

### stillValidBlockEntity

```java
static boolean stillValidBlockEntity(BlockEntity p_272877_, Player p_272670_, float p_320837_)
```

**Parameters:**

- `p_272877_` (`BlockEntity`)
- `p_272670_` (`Player`)
- `p_320837_` (`float`)

**Returns:** `static boolean`
