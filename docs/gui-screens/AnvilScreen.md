# AnvilScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `ItemCombinerScreen<AnvilMenu>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### AnvilScreen

```java
public AnvilScreen(AnvilMenu p_97874_, Inventory p_97875_, Component p_97876_)
```

**Parameters:**

- `p_97874_` (`AnvilMenu`)
- `p_97875_` (`Inventory`)
- `p_97876_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### subInit

```java
protected void subInit()
```

### setInitialFocus

```java
protected void setInitialFocus()
```

### resize

```java
public void resize(Minecraft p_97886_, int p_97887_, int p_97888_)
```

**Parameters:**

- `p_97886_` (`Minecraft`)
- `p_97887_` (`int`)
- `p_97888_` (`int`)

### keyPressed

```java
public boolean keyPressed(int p_97878_, int p_97879_, int p_97880_)
```

**Parameters:**

- `p_97878_` (`int`)
- `p_97879_` (`int`)
- `p_97880_` (`int`)

**Returns:** `boolean`

### onNameChanged

```java
private void onNameChanged(String p_97899_)
```

**Parameters:**

- `p_97899_` (`String`)

**Returns:** `private void`

### renderLabels

```java
protected void renderLabels(GuiGraphics p_281442_, int p_282417_, int p_283022_)
```

**Parameters:**

- `p_281442_` (`GuiGraphics`)
- `p_282417_` (`int`)
- `p_283022_` (`int`)

### renderBg

```java
protected void renderBg(GuiGraphics p_283345_, float p_283412_, int p_282871_, int p_281306_)
```

**Parameters:**

- `p_283345_` (`GuiGraphics`)
- `p_283412_` (`float`)
- `p_282871_` (`int`)
- `p_281306_` (`int`)

### renderFg

```java
public void renderFg(GuiGraphics p_283449_, int p_283263_, int p_281526_, float p_282957_)
```

**Parameters:**

- `p_283449_` (`GuiGraphics`)
- `p_283263_` (`int`)
- `p_281526_` (`int`)
- `p_282957_` (`float`)

### renderErrorIcon

```java
protected void renderErrorIcon(GuiGraphics p_282905_, int p_283237_, int p_282237_)
```

**Parameters:**

- `p_282905_` (`GuiGraphics`)
- `p_283237_` (`int`)
- `p_282237_` (`int`)

### slotChanged

```java
public void slotChanged(AbstractContainerMenu p_97882_, int p_97883_, ItemStack p_97884_)
```

**Parameters:**

- `p_97882_` (`AbstractContainerMenu`)
- `p_97883_` (`int`)
- `p_97884_` (`ItemStack`)
