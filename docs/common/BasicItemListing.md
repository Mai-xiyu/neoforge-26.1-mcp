# BasicItemListing

**Package:** `net.neoforged.neoforge.common`
**Type:** class
**Implements:** `ItemListing`

## Description

A default, exposed implementation of ITrade. All of the other implementations of ITrade (in VillagerTrades) are not public.
This class contains everything needed to make a MerchantOffer, the actual "trade" object shown in trading guis.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `price` | `ItemStack` |  |
| `price2` | `ItemStack` |  |
| `forSale` | `ItemStack` |  |
| `maxTrades` | `int` |  |
| `xp` | `int` |  |
| `priceMult` | `float` |  |

## Methods

### BasicItemListing

```java
public BasicItemListing(ItemStack price, ItemStack price2, ItemStack forSale, int maxTrades, int xp, float priceMult)
```

**Parameters:**

- `price` (`ItemStack`)
- `price2` (`ItemStack`)
- `forSale` (`ItemStack`)
- `maxTrades` (`int`)
- `xp` (`int`)
- `priceMult` (`float`)

**Returns:** `public`

### BasicItemListing

```java
public BasicItemListing(ItemStack price, ItemStack forSale, int maxTrades, int xp, float priceMult)
```

**Parameters:**

- `price` (`ItemStack`)
- `forSale` (`ItemStack`)
- `maxTrades` (`int`)
- `xp` (`int`)
- `priceMult` (`float`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### BasicItemListing

```java
public BasicItemListing(int emeralds, ItemStack forSale, int maxTrades, int xp, float mult)
```

**Parameters:**

- `emeralds` (`int`)
- `forSale` (`ItemStack`)
- `maxTrades` (`int`)
- `xp` (`int`)
- `mult` (`float`)

**Returns:** `public`

### BasicItemListing

```java
public BasicItemListing(int emeralds, ItemStack forSale, int maxTrades, int xp)
```

**Parameters:**

- `emeralds` (`int`)
- `forSale` (`ItemStack`)
- `maxTrades` (`int`)
- `xp` (`int`)

**Returns:** `public`

### getOffer

```java
public MerchantOffer getOffer(Entity p_219693_, RandomSource p_219694_)
```

**Parameters:**

- `p_219693_` (`Entity`)
- `p_219694_` (`RandomSource`)

**Returns:** `MerchantOffer`

### MerchantOffer

```java
return new MerchantOffer()
```

**Returns:** `return new`
