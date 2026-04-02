# MerchantScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `AbstractContainerScreen<MerchantMenu>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### MerchantScreen

```java
public MerchantScreen(MerchantMenu p_99123_, Inventory p_99124_, Component p_99125_)
```

**Parameters:**

- `p_99123_` (`MerchantMenu`)
- `p_99124_` (`Inventory`)
- `p_99125_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### postButtonClick

```java
private void postButtonClick()
```

**Returns:** `private void`

### init

```java
protected void init()
```

### renderLabels

```java
protected void renderLabels(GuiGraphics p_283337_, int p_282009_, int p_283691_)
```

**Parameters:**

- `p_283337_` (`GuiGraphics`)
- `p_282009_` (`int`)
- `p_283691_` (`int`)

### renderBg

```java
protected void renderBg(GuiGraphics p_283072_, float p_281275_, int p_282312_, int p_282984_)
```

**Parameters:**

- `p_283072_` (`GuiGraphics`)
- `p_281275_` (`float`)
- `p_282312_` (`int`)
- `p_282984_` (`int`)

### renderProgressBar

```java
private void renderProgressBar(GuiGraphics p_281426_, int p_283008_, int p_283085_, MerchantOffer p_282094_)
```

**Parameters:**

- `p_281426_` (`GuiGraphics`)
- `p_283008_` (`int`)
- `p_283085_` (`int`)
- `p_282094_` (`MerchantOffer`)

**Returns:** `private void`

### renderScroller

```java
private void renderScroller(GuiGraphics p_283030_, int p_283154_, int p_281664_, MerchantOffers p_282877_)
```

**Parameters:**

- `p_283030_` (`GuiGraphics`)
- `p_283154_` (`int`)
- `p_281664_` (`int`)
- `p_282877_` (`MerchantOffers`)

**Returns:** `private void`

### render

```java
public void render(GuiGraphics p_283487_, int p_281994_, int p_282099_, float p_281815_)
```

**Parameters:**

- `p_283487_` (`GuiGraphics`)
- `p_281994_` (`int`)
- `p_282099_` (`int`)
- `p_281815_` (`float`)

### renderButtonArrows

```java
private void renderButtonArrows(GuiGraphics p_283020_, MerchantOffer p_281926_, int p_282752_, int p_282179_)
```

**Parameters:**

- `p_283020_` (`GuiGraphics`)
- `p_281926_` (`MerchantOffer`)
- `p_282752_` (`int`)
- `p_282179_` (`int`)

**Returns:** `private void`

### renderAndDecorateCostA

```java
private void renderAndDecorateCostA(GuiGraphics p_281357_, ItemStack p_283466_, ItemStack p_282046_, int p_282403_, int p_283601_)
```

**Parameters:**

- `p_281357_` (`GuiGraphics`)
- `p_283466_` (`ItemStack`)
- `p_282046_` (`ItemStack`)
- `p_282403_` (`int`)
- `p_283601_` (`int`)

**Returns:** `private void`

### canScroll

```java
private boolean canScroll(int p_99141_)
```

**Parameters:**

- `p_99141_` (`int`)

**Returns:** `private boolean`

### mouseScrolled

```java
public boolean mouseScrolled(double p_99127_, double p_99128_, double p_99129_, double p_295610_)
```

**Parameters:**

- `p_99127_` (`double`)
- `p_99128_` (`double`)
- `p_99129_` (`double`)
- `p_295610_` (`double`)

**Returns:** `boolean`

### mouseDragged

```java
public boolean mouseDragged(double p_99135_, double p_99136_, int p_99137_, double p_99138_, double p_99139_)
```

**Parameters:**

- `p_99135_` (`double`)
- `p_99136_` (`double`)
- `p_99137_` (`int`)
- `p_99138_` (`double`)
- `p_99139_` (`double`)

**Returns:** `boolean`

### mouseClicked

```java
public boolean mouseClicked(double p_99131_, double p_99132_, int p_99133_)
```

**Parameters:**

- `p_99131_` (`double`)
- `p_99132_` (`double`)
- `p_99133_` (`int`)

**Returns:** `boolean`

### TradeOfferButton

```java
public TradeOfferButton(int p_99205_, int p_99206_, int p_99207_, Button.OnPress p_99208_)
```

**Parameters:**

- `p_99205_` (`int`)
- `p_99206_` (`int`)
- `p_99207_` (`int`)
- `p_99208_` (`Button.OnPress`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getIndex

```java
public int getIndex()
```

**Returns:** `public int`

### renderToolTip

```java
public void renderToolTip(GuiGraphics p_281313_, int p_283342_, int p_283060_)
```

**Parameters:**

- `p_281313_` (`GuiGraphics`)
- `p_283342_` (`int`)
- `p_283060_` (`int`)

**Returns:** `public void`
