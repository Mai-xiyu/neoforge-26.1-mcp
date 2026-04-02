# PlayerMainInvWrapper

**Package:** `net.neoforged.neoforge.items.wrapper`
**Type:** class
**Extends:** `RangedWrapper`

## Description

Exposes the player inventory WITHOUT the armor inventory as IItemHandler.
Also takes core of inserting/extracting having the same logic as picking up items.

## Methods

### PlayerMainInvWrapper

```java
public PlayerMainInvWrapper(Inventory inv)
```

**Parameters:**

- `inv` (`Inventory`)

**Returns:** `public`

### insertItem

```java
public ItemStack insertItem(int slot, ItemStack stack, boolean simulate)
```

**Parameters:**

- `slot` (`int`)
- `stack` (`ItemStack`)
- `simulate` (`boolean`)

**Returns:** `ItemStack`

### getInventoryPlayer

```java
public Inventory getInventoryPlayer()
```

**Returns:** `public Inventory`
