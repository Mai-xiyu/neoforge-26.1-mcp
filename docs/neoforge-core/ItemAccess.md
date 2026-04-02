# ItemAccess

**Package:** `net.neoforged.neoforge.transfer.access`
**Type:** interface

## Description

Provides access to an item storage location, like a slot in an inventory or a player's hand,
such that the current item resource and amount can be read,
and the stored item can be changed.


This interface is primarily used as the context type `C` for ItemCapability item capabilities.
This allows the returned capability instance to modify the current item or even swap out the item entirely,
for example to replace an empty bucket by a filled bucket.
Use the `#getCapability(ItemCapability)` method to query a capability for the item referenced by an item access.

## Methods

### forPlayerInteraction

```java
static ItemAccess forPlayerInteraction(Player player, InteractionHand hand)
```

**Parameters:**

- `player` (`Player`)
- `hand` (`InteractionHand`)

**Returns:** `ItemAccess`

### forPlayerSlot

```java
return forPlayerSlot(switch (hand)
```

**Parameters:**

- `(hand` (`switch`)

**Returns:** `return`

### forInfiniteMaterials

```java
static ItemAccess forInfiniteMaterials(Player player, ItemStack contents)
```

**Parameters:**

- `player` (`Player`)
- `contents` (`ItemStack`)

**Returns:** `ItemAccess`

### IllegalArgumentException

```java
Can be removed in the future if a use case comes up.
            throw new IllegalArgumentException("Player " + player + " does not have infinite materials")
```

**Parameters:**

- `materials"` (`"Player " + player + " does not have infinite`)

**Returns:** `Can be removed in the future if a use case comes up.
            throw new`

### forPlayerCursor

```java
static ItemAccess forPlayerCursor(Player player, AbstractContainerMenu menu)
```

**Parameters:**

- `player` (`Player`)
- `menu` (`AbstractContainerMenu`)

**Returns:** `ItemAccess`

### forPlayerSlot

```java
static ItemAccess forPlayerSlot(Player player, int slot)
```

**Parameters:**

- `player` (`Player`)
- `slot` (`int`)

**Returns:** `ItemAccess`

### forHandlerIndex

```java
static ItemAccess forHandlerIndex(ResourceHandler<ItemResource> handler, int index)
```

**Parameters:**

- `handler` (`ResourceHandler<ItemResource>`)
- `index` (`int`)

**Returns:** `ItemAccess`

### HandlerItemAccess

```java
return new HandlerItemAccess()
```

**Returns:** `return new`

### forHandlerIndexStrict

```java
static ItemAccess forHandlerIndexStrict(ResourceHandler<ItemResource> handler, int index)
```

**Parameters:**

- `handler` (`ResourceHandler<ItemResource>`)
- `index` (`int`)

**Returns:** `ItemAccess`

### forStack

```java
static ItemAccess forStack(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `ItemAccess`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Expected stack to be non-empty.")
```

**Parameters:**

- `non-empty."` (`"Expected stack to be`)

**Returns:** `throw new`

### StackItemAccess

```java
return new StackItemAccess()
```

**Returns:** `return new`

### oneByOne

```java
.NonExtendable
    default ItemAccess oneByOne()
```

**Returns:** `.NonExtendable
    default ItemAccess`

### OneByOneItemAccess

```java
return new OneByOneItemAccess()
```

**Returns:** `return new`

### getCapability

```java
<T> .NonExtendable
    default <T> T getCapability(ItemCapability<T, ItemAccess> capability)
```

**Parameters:**

- `capability` (`ItemCapability<T, ItemAccess>`)

**Returns:** `.NonExtendable
    default <T> T`

### getResource

```java
ItemResource getResource()
```

**Returns:** `ItemResource`

### getAmount

```java
int getAmount()
```

**Returns:** `int`

### insert

```java
int insert(ItemResource resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `resource` (`ItemResource`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### extract

```java
int extract(ItemResource resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `resource` (`ItemResource`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### exchange

```java
.NonExtendable
    default int exchange(ItemResource newResource, int amount, TransactionContext transaction)
```

**Parameters:**

- `newResource` (`ItemResource`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `.NonExtendable
    default int`
