# RealmsSelectWorldTemplateScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsSelectWorldTemplateScreen

```java
public RealmsSelectWorldTemplateScreen(Component p_167481_, Consumer<WorldTemplate> p_167482_, RealmsServer.WorldType p_167483_)
```

**Parameters:**

- `p_167481_` (`Component`)
- `p_167482_` (`Consumer<WorldTemplate>`)
- `p_167483_` (`RealmsServer.WorldType`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### RealmsSelectWorldTemplateScreen

```java
public RealmsSelectWorldTemplateScreen(Component p_167485_, Consumer<WorldTemplate> p_167486_, RealmsServer.WorldType p_167487_, WorldTemplatePaginatedList p_167488_)
```

**Parameters:**

- `p_167485_` (`Component`)
- `p_167486_` (`Consumer<WorldTemplate>`)
- `p_167487_` (`RealmsServer.WorldType`)
- `p_167488_` (`WorldTemplatePaginatedList`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setWarning

```java
public void setWarning(Component[]... p_89683_)
```

**Parameters:**

- `p_89683_` (`Component[]...`)

**Returns:** `public void`

### init

```java
public void init()
```

### repositionElements

```java
protected void repositionElements()
```

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### updateButtonStates

```java
void updateButtonStates()
```

### onClose

```java
public void onClose()
```

### selectTemplate

```java
private void selectTemplate()
```

**Returns:** `private void`

### onTrailer

```java
private void onTrailer()
```

**Returns:** `private void`

### onPublish

```java
private void onPublish()
```

**Returns:** `private void`

### fetchTemplatesAsync

```java
private void fetchTemplatesAsync(WorldTemplatePaginatedList p_89654_)
```

**Parameters:**

- `p_89654_` (`WorldTemplatePaginatedList`)

**Returns:** `private void`

### run

```java
public void run()
```

### fetchTemplates

```java
Either<WorldTemplatePaginatedList, Exception> fetchTemplates(WorldTemplatePaginatedList p_89656_, RealmsClient p_89657_)
```

**Parameters:**

- `p_89656_` (`WorldTemplatePaginatedList`)
- `p_89657_` (`RealmsClient`)

**Returns:** `Either<WorldTemplatePaginatedList, Exception>`

### render

```java
public void render(GuiGraphics p_282162_, int p_89640_, int p_89641_, float p_89642_)
```

**Parameters:**

- `p_282162_` (`GuiGraphics`)
- `p_89640_` (`int`)
- `p_89641_` (`int`)
- `p_89642_` (`float`)

### renderMultilineMessage

```java
private void renderMultilineMessage(GuiGraphics p_282398_, int p_282163_, int p_282021_, List<TextRenderingUtils.Line> p_282203_)
```

**Parameters:**

- `p_282398_` (`GuiGraphics`)
- `p_282163_` (`int`)
- `p_282021_` (`int`)
- `p_282203_` (`List<TextRenderingUtils.Line>`)

**Returns:** `private void`

### getHeaderHeight

```java
int getHeaderHeight()
```

**Returns:** `int`

### Entry

```java
public Entry(WorldTemplate p_89753_)
```

**Parameters:**

- `p_89753_` (`WorldTemplate`)

**Returns:** `public`

### mouseClicked

```java
public boolean mouseClicked(double p_299887_, double p_299848_, int p_299963_)
```

**Parameters:**

- `p_299887_` (`double`)
- `p_299848_` (`double`)
- `p_299963_` (`int`)

**Returns:** `boolean`

### render

```java
public void render(GuiGraphics p_281796_, int p_282160_, int p_281759_, int p_282961_, int p_281497_, int p_282427_, int p_283550_, int p_282955_, boolean p_282866_, float p_281452_)
```

**Parameters:**

- `p_281796_` (`GuiGraphics`)
- `p_282160_` (`int`)
- `p_281759_` (`int`)
- `p_282961_` (`int`)
- `p_281497_` (`int`)
- `p_282427_` (`int`)
- `p_283550_` (`int`)
- `p_282955_` (`int`)
- `p_282866_` (`boolean`)
- `p_281452_` (`float`)

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### WorldTemplateList

```java
public WorldTemplateList()
```

**Returns:** `public`

### WorldTemplateList

```java
public WorldTemplateList(Iterable<WorldTemplate> p_313798_)
```

**Parameters:**

- `p_313798_` (`Iterable<WorldTemplate>`)

**Returns:** `public`

### addEntry

```java
public void addEntry(WorldTemplate p_313857_)
```

**Parameters:**

- `p_313857_` (`WorldTemplate`)

**Returns:** `public void`

### mouseClicked

```java
public boolean mouseClicked(double p_313816_, double p_313908_, int p_313922_)
```

**Parameters:**

- `p_313816_` (`double`)
- `p_313908_` (`double`)
- `p_313922_` (`int`)

**Returns:** `boolean`

### setSelected

```java
public void setSelected(RealmsSelectWorldTemplateScreen.Entry p_313741_)
```

**Parameters:**

- `p_313741_` (`RealmsSelectWorldTemplateScreen.Entry`)

**Returns:** `public void`

### updateButtonStates

```java
 updateButtonStates()
```

**Returns:** ``

### getMaxPosition

```java
public int getMaxPosition()
```

**Returns:** `int`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### getTemplates

```java
public List<WorldTemplate> getTemplates()
```

**Returns:** `public List<WorldTemplate>`
