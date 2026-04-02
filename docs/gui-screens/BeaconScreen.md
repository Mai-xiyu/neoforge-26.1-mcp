# BeaconScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `AbstractContainerScreen<BeaconMenu>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BeaconScreen

```java
public BeaconScreen(BeaconMenu p_97912_, Inventory p_97913_, Component p_97914_)
```

**Parameters:**

- `p_97912_` (`BeaconMenu`)
- `p_97913_` (`Inventory`)
- `p_97914_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### slotChanged

```java
public void slotChanged(AbstractContainerMenu p_97973_, int p_97974_, ItemStack p_97975_)
```

**Parameters:**

- `p_97973_` (`AbstractContainerMenu`)
- `p_97974_` (`int`)
- `p_97975_` (`ItemStack`)

### dataChanged

```java
public void dataChanged(AbstractContainerMenu p_169628_, int p_169629_, int p_169630_)
```

**Parameters:**

- `p_169628_` (`AbstractContainerMenu`)
- `p_169629_` (`int`)
- `p_169630_` (`int`)

### addBeaconButton

```java
<T extends AbstractWidget & BeaconScreen.BeaconButton> void addBeaconButton(T p_169617_)
```

**Parameters:**

- `p_169617_` (`T`)

### init

```java
protected void init()
```

### containerTick

```java
public void containerTick()
```

### updateButtons

```java
void updateButtons()
```

### renderLabels

```java
protected void renderLabels(GuiGraphics p_283369_, int p_282699_, int p_281296_)
```

**Parameters:**

- `p_283369_` (`GuiGraphics`)
- `p_282699_` (`int`)
- `p_281296_` (`int`)

### renderBg

```java
protected void renderBg(GuiGraphics p_282454_, float p_282185_, int p_282362_, int p_282987_)
```

**Parameters:**

- `p_282454_` (`GuiGraphics`)
- `p_282185_` (`float`)
- `p_282362_` (`int`)
- `p_282987_` (`int`)

### render

```java
public void render(GuiGraphics p_283062_, int p_282876_, int p_282015_, float p_281395_)
```

**Parameters:**

- `p_283062_` (`GuiGraphics`)
- `p_282876_` (`int`)
- `p_282015_` (`int`)
- `p_281395_` (`float`)

### updateStatus

```java
void updateStatus(int p_169631_)
```

**Parameters:**

- `p_169631_` (`int`)

### BeaconCancelButton

```java
public BeaconCancelButton(int p_97982_, int p_97983_)
```

**Parameters:**

- `p_97982_` (`int`)
- `p_97983_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onPress

```java
public void onPress()
```

### updateStatus

```java
public void updateStatus(int p_169636_)
```

**Parameters:**

- `p_169636_` (`int`)

### BeaconConfirmButton

```java
public BeaconConfirmButton(int p_97992_, int p_97993_)
```

**Parameters:**

- `p_97992_` (`int`)
- `p_97993_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onPress

```java
public void onPress()
```

### updateStatus

```java
public void updateStatus(int p_169638_)
```

**Parameters:**

- `p_169638_` (`int`)

### BeaconPowerButton

```java
public BeaconPowerButton(int p_169642_, int p_169643_, Holder<MobEffect> p_316476_, boolean p_169645_, int p_169646_)
```

**Parameters:**

- `p_169642_` (`int`)
- `p_169643_` (`int`)
- `p_316476_` (`Holder<MobEffect>`)
- `p_169645_` (`boolean`)
- `p_169646_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setEffect

```java
protected void setEffect(Holder<MobEffect> p_316331_)
```

**Parameters:**

- `p_316331_` (`Holder<MobEffect>`)

**Returns:** `protected void`

### createEffectDescription

```java
protected MutableComponent createEffectDescription(Holder<MobEffect> p_316880_)
```

**Parameters:**

- `p_316880_` (`Holder<MobEffect>`)

**Returns:** `protected MutableComponent`

### onPress

```java
public void onPress()
```

### renderIcon

```java
protected void renderIcon(GuiGraphics p_282265_)
```

**Parameters:**

- `p_282265_` (`GuiGraphics`)

### updateStatus

```java
public void updateStatus(int p_169648_)
```

**Parameters:**

- `p_169648_` (`int`)

### createNarrationMessage

```java
protected MutableComponent createNarrationMessage()
```

**Returns:** `MutableComponent`

### BeaconScreenButton

```java
protected BeaconScreenButton(int p_98022_, int p_98023_)
```

**Parameters:**

- `p_98022_` (`int`)
- `p_98023_` (`int`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### BeaconScreenButton

```java
protected BeaconScreenButton(int p_169654_, int p_169655_, Component p_169656_)
```

**Parameters:**

- `p_169654_` (`int`)
- `p_169655_` (`int`)
- `p_169656_` (`Component`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### renderWidget

```java
public void renderWidget(GuiGraphics p_281837_, int p_281780_, int p_283603_, float p_283562_)
```

**Parameters:**

- `p_281837_` (`GuiGraphics`)
- `p_281780_` (`int`)
- `p_283603_` (`int`)
- `p_283562_` (`float`)

### renderIcon

```java
protected abstract void renderIcon(GuiGraphics p_283292_)
```

**Parameters:**

- `p_283292_` (`GuiGraphics`)

**Returns:** `protected abstract void`

### isSelected

```java
public boolean isSelected()
```

**Returns:** `public boolean`

### setSelected

```java
public void setSelected(boolean p_98032_)
```

**Parameters:**

- `p_98032_` (`boolean`)

**Returns:** `public void`

### updateWidgetNarration

```java
public void updateWidgetNarration(NarrationElementOutput p_259705_)
```

**Parameters:**

- `p_259705_` (`NarrationElementOutput`)

### BeaconSpriteScreenButton

```java
protected BeaconSpriteScreenButton(int p_169663_, int p_169664_, ResourceLocation p_294501_, Component p_169667_)
```

**Parameters:**

- `p_169663_` (`int`)
- `p_169664_` (`int`)
- `p_294501_` (`ResourceLocation`)
- `p_169667_` (`Component`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### renderIcon

```java
protected void renderIcon(GuiGraphics p_283624_)
```

**Parameters:**

- `p_283624_` (`GuiGraphics`)

### BeaconUpgradePowerButton

```java
public BeaconUpgradePowerButton(int p_169675_, int p_169676_, Holder<MobEffect> p_316593_)
```

**Parameters:**

- `p_169675_` (`int`)
- `p_169676_` (`int`)
- `p_316593_` (`Holder<MobEffect>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createEffectDescription

```java
protected MutableComponent createEffectDescription(Holder<MobEffect> p_316391_)
```

**Parameters:**

- `p_316391_` (`Holder<MobEffect>`)

**Returns:** `MutableComponent`

### updateStatus

```java
public void updateStatus(int p_169679_)
```

**Parameters:**

- `p_169679_` (`int`)
