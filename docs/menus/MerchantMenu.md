# MerchantMenu

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Extends:** `AbstractContainerMenu`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PAYMENT1_SLOT` | `int` |  |
| `PAYMENT2_SLOT` | `int` |  |
| `RESULT_SLOT` | `int` |  |

## Methods

### MerchantMenu

```java
public MerchantMenu(int p_40033_, Inventory p_40034_)
```

**Parameters:**

- `p_40033_` (`int`)
- `p_40034_` (`Inventory`)

**Returns:** `public`

### MerchantMenu

```java
public MerchantMenu(int p_40036_, Inventory p_40037_, Merchant p_40038_)
```

**Parameters:**

- `p_40036_` (`int`)
- `p_40037_` (`Inventory`)
- `p_40038_` (`Merchant`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setShowProgressBar

```java
public void setShowProgressBar(boolean p_40049_)
```

**Parameters:**

- `p_40049_` (`boolean`)

**Returns:** `public void`

### slotsChanged

```java
public void slotsChanged(Container p_40040_)
```

**Parameters:**

- `p_40040_` (`Container`)

### setSelectionHint

```java
public void setSelectionHint(int p_40064_)
```

**Parameters:**

- `p_40064_` (`int`)

**Returns:** `public void`

### stillValid

```java
public boolean stillValid(Player p_40042_)
```

**Parameters:**

- `p_40042_` (`Player`)

**Returns:** `boolean`

### getTraderXp

```java
public int getTraderXp()
```

**Returns:** `public int`

### getFutureTraderXp

```java
public int getFutureTraderXp()
```

**Returns:** `public int`

### setXp

```java
public void setXp(int p_40067_)
```

**Parameters:**

- `p_40067_` (`int`)

**Returns:** `public void`

### getTraderLevel

```java
public int getTraderLevel()
```

**Returns:** `public int`

### setMerchantLevel

```java
public void setMerchantLevel(int p_40070_)
```

**Parameters:**

- `p_40070_` (`int`)

**Returns:** `public void`

### setCanRestock

```java
public void setCanRestock(boolean p_40059_)
```

**Parameters:**

- `p_40059_` (`boolean`)

**Returns:** `public void`

### canRestock

```java
public boolean canRestock()
```

**Returns:** `public boolean`

### canTakeItemForPickAll

```java
public boolean canTakeItemForPickAll(ItemStack p_40044_, Slot p_40045_)
```

**Parameters:**

- `p_40044_` (`ItemStack`)
- `p_40045_` (`Slot`)

**Returns:** `boolean`

### quickMoveStack

```java
public ItemStack quickMoveStack(Player p_40053_, int p_40054_)
```

**Parameters:**

- `p_40053_` (`Player`)
- `p_40054_` (`int`)

**Returns:** `ItemStack`

### playTradeSound

```java
private void playTradeSound()
```

**Returns:** `private void`

### removed

```java
public void removed(Player p_40051_)
```

**Parameters:**

- `p_40051_` (`Player`)

### tryMoveItems

```java
public void tryMoveItems(int p_40073_)
```

**Parameters:**

- `p_40073_` (`int`)

**Returns:** `public void`

### moveFromInventoryToPaymentSlot

```java
private void moveFromInventoryToPaymentSlot(int p_40061_, ItemCost p_331779_)
```

**Parameters:**

- `p_40061_` (`int`)
- `p_331779_` (`ItemCost`)

**Returns:** `private void`

### setOffers

```java
public void setOffers(MerchantOffers p_40047_)
```

**Parameters:**

- `p_40047_` (`MerchantOffers`)

**Returns:** `public void`

### getOffers

```java
public MerchantOffers getOffers()
```

**Returns:** `public MerchantOffers`

### showProgressBar

```java
public boolean showProgressBar()
```

**Returns:** `public boolean`
