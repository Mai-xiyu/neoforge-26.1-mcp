# IContainerFactory

**Package:** `net.neoforged.neoforge.network`
**Type:** interface<T extends AbstractContainerMenu> extends MenuType.MenuSupplier<T>

## Description

This extension of `MenuType.MenuSupplier` allows a mod to handle the extra data it sent to the client
when creating the client-side copy of a menu.

## Methods

### create

```java
T create(int windowId, Inventory inv, RegistryFriendlyByteBuf data)
```

**Parameters:**

- `windowId` (`int`)
- `inv` (`Inventory`)
- `data` (`RegistryFriendlyByteBuf`)

**Returns:** `T`

### create

```java
default T create(int p_create_1_, Inventory p_create_2_)
```

**Parameters:**

- `p_create_1_` (`int`)
- `p_create_2_` (`Inventory`)

**Returns:** `T`

### create

```java
return create()
```

**Returns:** `return`
