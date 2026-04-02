# Merchant

**Package:** `net.minecraft.world.item.trading`
**Type:** interface

## Methods

### setTradingPlayer

```java
void setTradingPlayer(Player p_45307_)
```

**Parameters:**

- `p_45307_` (`Player`)

### getTradingPlayer

```java
Player getTradingPlayer()
```

**Returns:** `Player`

### getOffers

```java
MerchantOffers getOffers()
```

**Returns:** `MerchantOffers`

### overrideOffers

```java
void overrideOffers(MerchantOffers p_45306_)
```

**Parameters:**

- `p_45306_` (`MerchantOffers`)

### notifyTrade

```java
void notifyTrade(MerchantOffer p_45305_)
```

**Parameters:**

- `p_45305_` (`MerchantOffer`)

### notifyTradeUpdated

```java
void notifyTradeUpdated(ItemStack p_45308_)
```

**Parameters:**

- `p_45308_` (`ItemStack`)

### getVillagerXp

```java
int getVillagerXp()
```

**Returns:** `int`

### overrideXp

```java
void overrideXp(int p_45309_)
```

**Parameters:**

- `p_45309_` (`int`)

### showProgressBar

```java
boolean showProgressBar()
```

**Returns:** `boolean`

### getNotifyTradeSound

```java
SoundEvent getNotifyTradeSound()
```

**Returns:** `SoundEvent`

### canRestock

```java
default boolean canRestock()
```

**Returns:** `default boolean`

### openTradingScreen

```java
default void openTradingScreen(Player p_45302_, Component p_45303_, int p_45304_)
```

**Parameters:**

- `p_45302_` (`Player`)
- `p_45303_` (`Component`)
- `p_45304_` (`int`)

**Returns:** `default void`

### isClientSide

```java
boolean isClientSide()
```

**Returns:** `boolean`
