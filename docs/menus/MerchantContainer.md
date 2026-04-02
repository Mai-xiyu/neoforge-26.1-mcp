# MerchantContainer

**Package:** `net.minecraft.world.inventory`
**Type:** class
**Implements:** `Container`

## Methods

### MerchantContainer

```java
public MerchantContainer(Merchant p_40003_)
```

**Parameters:**

- `p_40003_` (`Merchant`)

**Returns:** `public`

### getContainerSize

```java
public int getContainerSize()
```

**Returns:** `int`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### getItem

```java
public ItemStack getItem(int p_40008_)
```

**Parameters:**

- `p_40008_` (`int`)

**Returns:** `ItemStack`

### removeItem

```java
public ItemStack removeItem(int p_40010_, int p_40011_)
```

**Parameters:**

- `p_40010_` (`int`)
- `p_40011_` (`int`)

**Returns:** `ItemStack`

### isPaymentSlot

```java
private boolean isPaymentSlot(int p_40023_)
```

**Parameters:**

- `p_40023_` (`int`)

**Returns:** `private boolean`

### removeItemNoUpdate

```java
public ItemStack removeItemNoUpdate(int p_40018_)
```

**Parameters:**

- `p_40018_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
public void setItem(int p_40013_, ItemStack p_40014_)
```

**Parameters:**

- `p_40013_` (`int`)
- `p_40014_` (`ItemStack`)

### stillValid

```java
public boolean stillValid(Player p_40016_)
```

**Parameters:**

- `p_40016_` (`Player`)

**Returns:** `boolean`

### setChanged

```java
public void setChanged()
```

### updateSellItem

```java
public void updateSellItem()
```

**Returns:** `public void`

### getActiveOffer

```java
public MerchantOffer getActiveOffer()
```

**Returns:** `MerchantOffer`

### setSelectionHint

```java
public void setSelectionHint(int p_40021_)
```

**Parameters:**

- `p_40021_` (`int`)

**Returns:** `public void`

### clearContent

```java
public void clearContent()
```

### getFutureXp

```java
public int getFutureXp()
```

**Returns:** `public int`
