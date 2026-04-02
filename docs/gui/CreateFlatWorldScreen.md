# CreateFlatWorldScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `parent` | `CreateWorldScreen` |  |

## Methods

### CreateFlatWorldScreen

```java
public CreateFlatWorldScreen(CreateWorldScreen p_95822_, Consumer<FlatLevelGeneratorSettings> p_95823_, FlatLevelGeneratorSettings p_95824_)
```

**Parameters:**

- `p_95822_` (`CreateWorldScreen`)
- `p_95823_` (`Consumer<FlatLevelGeneratorSettings>`)
- `p_95824_` (`FlatLevelGeneratorSettings`)

**Returns:** `public`

### settings

```java
public FlatLevelGeneratorSettings settings()
```

**Returns:** `public FlatLevelGeneratorSettings`

### setConfig

```java
public void setConfig(FlatLevelGeneratorSettings p_95826_)
```

**Parameters:**

- `p_95826_` (`FlatLevelGeneratorSettings`)

**Returns:** `public void`

### init

```java
protected void init()
```

### updateButtonValidity

```java
void updateButtonValidity()
```

### hasValidSelection

```java
private boolean hasValidSelection()
```

**Returns:** `private boolean`

### onClose

```java
public void onClose()
```

### render

```java
public void render(GuiGraphics p_282393_, int p_95829_, int p_95830_, float p_95831_)
```

**Parameters:**

- `p_282393_` (`GuiGraphics`)
- `p_95829_` (`int`)
- `p_95830_` (`int`)
- `p_95831_` (`float`)

### DetailsList

```java
public DetailsList()
```

**Returns:** `public`

### super

```java
 super(CreateFlatWorldScreen.this.height - 103)
```

**Parameters:**

- `103` (`CreateFlatWorldScreen.this.height -`)

**Returns:** ``

### setSelected

```java
public void setSelected(CreateFlatWorldScreen.DetailsList.Entry p_95855_)
```

**Parameters:**

- `p_95855_` (`CreateFlatWorldScreen.DetailsList.Entry`)

**Returns:** `public void`

### resetRows

```java
public void resetRows()
```

**Returns:** `public void`

### render

```java
public void render(GuiGraphics p_281319_, int p_281943_, int p_283629_, int p_283315_, int p_282974_, int p_281870_, int p_283341_, int p_281639_, boolean p_282715_, float p_281937_)
```

**Parameters:**

- `p_281319_` (`GuiGraphics`)
- `p_281943_` (`int`)
- `p_283629_` (`int`)
- `p_283315_` (`int`)
- `p_282974_` (`int`)
- `p_281870_` (`int`)
- `p_283341_` (`int`)
- `p_281639_` (`int`)
- `p_282715_` (`boolean`)
- `p_281937_` (`float`)

### getDisplayItem

```java
private ItemStack getDisplayItem(BlockState p_169294_)
```

**Parameters:**

- `p_169294_` (`BlockState`)

**Returns:** `private ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### mouseClicked

```java
public boolean mouseClicked(double p_95868_, double p_95869_, int p_95870_)
```

**Parameters:**

- `p_95868_` (`double`)
- `p_95869_` (`double`)
- `p_95870_` (`int`)

**Returns:** `boolean`

### blitSlot

```java
private void blitSlot(GuiGraphics p_281733_, int p_282373_, int p_282844_, ItemStack p_281263_)
```

**Parameters:**

- `p_281733_` (`GuiGraphics`)
- `p_282373_` (`int`)
- `p_282844_` (`int`)
- `p_281263_` (`ItemStack`)

**Returns:** `private void`

### blitSlotBg

```java
private void blitSlotBg(GuiGraphics p_282271_, int p_281324_, int p_283171_)
```

**Parameters:**

- `p_282271_` (`GuiGraphics`)
- `p_281324_` (`int`)
- `p_283171_` (`int`)

**Returns:** `private void`
