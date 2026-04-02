# MerchantOffer

**Package:** `net.minecraft.world.item.trading`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<MerchantOffer>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, MerchantOffer>` |  |

## Methods

### MerchantOffer

```java
private MerchantOffer(ItemCost p_330734_, Optional<ItemCost> p_331500_, ItemStack p_45327_, int p_45330_, int p_45331_, boolean p_330754_, int p_332006_, int p_330432_, float p_45332_, int p_330282_)
```

**Parameters:**

- `p_330734_` (`ItemCost`)
- `p_331500_` (`Optional<ItemCost>`)
- `p_45327_` (`ItemStack`)
- `p_45330_` (`int`)
- `p_45331_` (`int`)
- `p_330754_` (`boolean`)
- `p_332006_` (`int`)
- `p_330432_` (`int`)
- `p_45332_` (`float`)
- `p_330282_` (`int`)

**Returns:** `private`

### MerchantOffer

```java
public MerchantOffer(ItemCost p_332077_, ItemStack p_320418_, int p_320071_, int p_320069_, float p_320947_)
```

**Parameters:**

- `p_332077_` (`ItemCost`)
- `p_320418_` (`ItemStack`)
- `p_320071_` (`int`)
- `p_320069_` (`int`)
- `p_320947_` (`float`)

**Returns:** `public`

### MerchantOffer

```java
public MerchantOffer(ItemCost p_331596_, Optional<ItemCost> p_330410_, ItemStack p_45334_, int p_45337_, int p_45338_, float p_45340_)
```

**Parameters:**

- `p_331596_` (`ItemCost`)
- `p_330410_` (`Optional<ItemCost>`)
- `p_45334_` (`ItemStack`)
- `p_45337_` (`int`)
- `p_45338_` (`int`)
- `p_45340_` (`float`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MerchantOffer

```java
public MerchantOffer(ItemCost p_331409_, Optional<ItemCost> p_331614_, ItemStack p_45321_, int p_45323_, int p_45324_, int p_330951_, float p_45325_)
```

**Parameters:**

- `p_331409_` (`ItemCost`)
- `p_331614_` (`Optional<ItemCost>`)
- `p_45321_` (`ItemStack`)
- `p_45323_` (`int`)
- `p_45324_` (`int`)
- `p_330951_` (`int`)
- `p_45325_` (`float`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MerchantOffer

```java
public MerchantOffer(ItemCost p_331744_, Optional<ItemCost> p_330460_, ItemStack p_324239_, int p_324562_, int p_324493_, int p_323558_, float p_323528_, int p_324484_)
```

**Parameters:**

- `p_331744_` (`ItemCost`)
- `p_330460_` (`Optional<ItemCost>`)
- `p_324239_` (`ItemStack`)
- `p_324562_` (`int`)
- `p_324493_` (`int`)
- `p_323558_` (`int`)
- `p_323528_` (`float`)
- `p_324484_` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MerchantOffer

```java
private MerchantOffer(MerchantOffer p_302340_)
```

**Parameters:**

- `p_302340_` (`MerchantOffer`)

**Returns:** `private`

### getBaseCostA

```java
public ItemStack getBaseCostA()
```

**Returns:** `public ItemStack`

### getCostA

```java
public ItemStack getCostA()
```

**Returns:** `public ItemStack`

### getModifiedCostCount

```java
private int getModifiedCostCount(ItemCost p_330556_)
```

**Parameters:**

- `p_330556_` (`ItemCost`)

**Returns:** `private int`

### getCostB

```java
public ItemStack getCostB()
```

**Returns:** `public ItemStack`

### getItemCostA

```java
public ItemCost getItemCostA()
```

**Returns:** `public ItemCost`

### getItemCostB

```java
public Optional<ItemCost> getItemCostB()
```

**Returns:** `public Optional<ItemCost>`

### getResult

```java
public ItemStack getResult()
```

**Returns:** `public ItemStack`

### updateDemand

```java
public void updateDemand()
```

**Returns:** `public void`

### assemble

```java
public ItemStack assemble()
```

**Returns:** `public ItemStack`

### getUses

```java
public int getUses()
```

**Returns:** `public int`

### resetUses

```java
public void resetUses()
```

**Returns:** `public void`

### getMaxUses

```java
public int getMaxUses()
```

**Returns:** `public int`

### increaseUses

```java
public void increaseUses()
```

**Returns:** `public void`

### getDemand

```java
public int getDemand()
```

**Returns:** `public int`

### addToSpecialPriceDiff

```java
public void addToSpecialPriceDiff(int p_45354_)
```

**Parameters:**

- `p_45354_` (`int`)

**Returns:** `public void`

### resetSpecialPriceDiff

```java
public void resetSpecialPriceDiff()
```

**Returns:** `public void`

### getSpecialPriceDiff

```java
public int getSpecialPriceDiff()
```

**Returns:** `public int`

### setSpecialPriceDiff

```java
public void setSpecialPriceDiff(int p_45360_)
```

**Parameters:**

- `p_45360_` (`int`)

**Returns:** `public void`

### getPriceMultiplier

```java
public float getPriceMultiplier()
```

**Returns:** `public float`

### getXp

```java
public int getXp()
```

**Returns:** `public int`

### isOutOfStock

```java
public boolean isOutOfStock()
```

**Returns:** `public boolean`

### setToOutOfStock

```java
public void setToOutOfStock()
```

**Returns:** `public void`

### needsRestock

```java
public boolean needsRestock()
```

**Returns:** `public boolean`

### shouldRewardExp

```java
public boolean shouldRewardExp()
```

**Returns:** `public boolean`

### satisfiedBy

```java
public boolean satisfiedBy(ItemStack p_45356_, ItemStack p_45357_)
```

**Parameters:**

- `p_45356_` (`ItemStack`)
- `p_45357_` (`ItemStack`)

**Returns:** `public boolean`

### take

```java
public boolean take(ItemStack p_45362_, ItemStack p_45363_)
```

**Parameters:**

- `p_45362_` (`ItemStack`)
- `p_45363_` (`ItemStack`)

**Returns:** `public boolean`

### copy

```java
public MerchantOffer copy()
```

**Returns:** `public MerchantOffer`

### MerchantOffer

```java
return new MerchantOffer()
```

**Returns:** `return new`

### writeToStream

```java
private static void writeToStream(RegistryFriendlyByteBuf p_320530_, MerchantOffer p_320384_)
```

**Parameters:**

- `p_320530_` (`RegistryFriendlyByteBuf`)
- `p_320384_` (`MerchantOffer`)

**Returns:** `private static void`

### createFromStream

```java
public static MerchantOffer createFromStream(RegistryFriendlyByteBuf p_320207_)
```

**Parameters:**

- `p_320207_` (`RegistryFriendlyByteBuf`)

**Returns:** `public static MerchantOffer`
