# AdvancementWidget

**Package:** `net.minecraft.client.gui.screens.advancements`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### AdvancementWidget

```java
public AdvancementWidget(AdvancementTab p_97255_, Minecraft p_97256_, AdvancementNode p_300868_, DisplayInfo p_97258_)
```

**Parameters:**

- `p_97255_` (`AdvancementTab`)
- `p_97256_` (`Minecraft`)
- `p_300868_` (`AdvancementNode`)
- `p_97258_` (`DisplayInfo`)

**Returns:** `public`

### getMaxProgressWidth

```java
private int getMaxProgressWidth()
```

**Returns:** `private int`

### getMaxWidth

```java
private static float getMaxWidth(StringSplitter p_97304_, List<FormattedText> p_97305_)
```

**Parameters:**

- `p_97304_` (`StringSplitter`)
- `p_97305_` (`List<FormattedText>`)

**Returns:** `private static float`

### findOptimalLines

```java
private List<FormattedText> findOptimalLines(Component p_97309_, int p_97310_)
```

**Parameters:**

- `p_97309_` (`Component`)
- `p_97310_` (`int`)

**Returns:** `private List<FormattedText>`

### drawConnectivity

```java
public void drawConnectivity(GuiGraphics p_281947_, int p_97300_, int p_97301_, boolean p_97302_)
```

**Parameters:**

- `p_281947_` (`GuiGraphics`)
- `p_97300_` (`int`)
- `p_97301_` (`int`)
- `p_97302_` (`boolean`)

**Returns:** `public void`

### draw

```java
public void draw(GuiGraphics p_281958_, int p_281323_, int p_283679_)
```

**Parameters:**

- `p_281958_` (`GuiGraphics`)
- `p_281323_` (`int`)
- `p_283679_` (`int`)

**Returns:** `public void`

### getWidth

```java
public int getWidth()
```

**Returns:** `public int`

### setProgress

```java
public void setProgress(AdvancementProgress p_97265_)
```

**Parameters:**

- `p_97265_` (`AdvancementProgress`)

**Returns:** `public void`

### addChild

```java
public void addChild(AdvancementWidget p_97307_)
```

**Parameters:**

- `p_97307_` (`AdvancementWidget`)

**Returns:** `public void`

### drawHover

```java
public void drawHover(GuiGraphics p_283068_, int p_281304_, int p_281253_, float p_281848_, int p_282097_, int p_281537_)
```

**Parameters:**

- `p_283068_` (`GuiGraphics`)
- `p_281304_` (`int`)
- `p_281253_` (`int`)
- `p_281848_` (`float`)
- `p_282097_` (`int`)
- `p_281537_` (`int`)

**Returns:** `public void`

### isMouseOver

```java
public boolean isMouseOver(int p_97260_, int p_97261_, int p_97262_, int p_97263_)
```

**Parameters:**

- `p_97260_` (`int`)
- `p_97261_` (`int`)
- `p_97262_` (`int`)
- `p_97263_` (`int`)

**Returns:** `public boolean`

### attachToParent

```java
public void attachToParent()
```

**Returns:** `public void`

### getY

```java
public int getY()
```

**Returns:** `public int`

### getX

```java
public int getX()
```

**Returns:** `public int`
