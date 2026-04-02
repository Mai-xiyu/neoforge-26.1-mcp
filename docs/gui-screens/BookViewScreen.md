# BookViewScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PAGE_INDICATOR_TEXT_Y_OFFSET` | `int` |  |
| `PAGE_TEXT_X_OFFSET` | `int` |  |
| `PAGE_TEXT_Y_OFFSET` | `int` |  |
| `EMPTY_ACCESS` | `BookViewScreen.BookAccess` |  |
| `BOOK_LOCATION` | `ResourceLocation` |  |
| `TEXT_WIDTH` | `int` |  |
| `TEXT_HEIGHT` | `int` |  |
| `IMAGE_WIDTH` | `int` |  |
| `IMAGE_HEIGHT` | `int` |  |

## Methods

### BookViewScreen

```java
public BookViewScreen(BookViewScreen.BookAccess p_98264_)
```

**Parameters:**

- `p_98264_` (`BookViewScreen.BookAccess`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### BookViewScreen

```java
public BookViewScreen()
```

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### BookViewScreen

```java
private BookViewScreen(BookViewScreen.BookAccess p_98266_, boolean p_98267_)
```

**Parameters:**

- `p_98266_` (`BookViewScreen.BookAccess`)
- `p_98267_` (`boolean`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### setBookAccess

```java
public void setBookAccess(BookViewScreen.BookAccess p_98289_)
```

**Parameters:**

- `p_98289_` (`BookViewScreen.BookAccess`)

**Returns:** `public void`

### setPage

```java
public boolean setPage(int p_98276_)
```

**Parameters:**

- `p_98276_` (`int`)

**Returns:** `public boolean`

### forcePage

```java
protected boolean forcePage(int p_98295_)
```

**Parameters:**

- `p_98295_` (`int`)

**Returns:** `protected boolean`

### init

```java
protected void init()
```

### createMenuControls

```java
protected void createMenuControls()
```

**Returns:** `protected void`

### createPageControlButtons

```java
protected void createPageControlButtons()
```

**Returns:** `protected void`

### getNumPages

```java
private int getNumPages()
```

**Returns:** `private int`

### pageBack

```java
protected void pageBack()
```

**Returns:** `protected void`

### pageForward

```java
protected void pageForward()
```

**Returns:** `protected void`

### updateButtonVisibility

```java
private void updateButtonVisibility()
```

**Returns:** `private void`

### keyPressed

```java
public boolean keyPressed(int p_98278_, int p_98279_, int p_98280_)
```

**Parameters:**

- `p_98278_` (`int`)
- `p_98279_` (`int`)
- `p_98280_` (`int`)

**Returns:** `boolean`

### render

```java
public void render(GuiGraphics p_281997_, int p_281262_, int p_283321_, float p_282251_)
```

**Parameters:**

- `p_281997_` (`GuiGraphics`)
- `p_281262_` (`int`)
- `p_283321_` (`int`)
- `p_282251_` (`float`)

### renderBackground

```java
public void renderBackground(GuiGraphics p_295678_, int p_296491_, int p_294260_, float p_294869_)
```

**Parameters:**

- `p_295678_` (`GuiGraphics`)
- `p_296491_` (`int`)
- `p_294260_` (`int`)
- `p_294869_` (`float`)

### mouseClicked

```java
public boolean mouseClicked(double p_98272_, double p_98273_, int p_98274_)
```

**Parameters:**

- `p_98272_` (`double`)
- `p_98273_` (`double`)
- `p_98274_` (`int`)

**Returns:** `boolean`

### handleComponentClicked

```java
public boolean handleComponentClicked(Style p_98293_)
```

**Parameters:**

- `p_98293_` (`Style`)

**Returns:** `boolean`

### closeScreen

```java
protected void closeScreen()
```

**Returns:** `protected void`

### getClickedComponentStyleAt

```java
public Style getClickedComponentStyleAt(double p_98269_, double p_98270_)
```

**Parameters:**

- `p_98269_` (`double`)
- `p_98270_` (`double`)

**Returns:** `Style`

### BookAccess

```java
public static record BookAccess(List<Component> pages)
```

**Parameters:**

- `pages` (`List<Component>`)

**Returns:** `record`

### getPageCount

```java
public int getPageCount()
```

**Returns:** `public int`

### getPage

```java
public FormattedText getPage(int p_98311_)
```

**Parameters:**

- `p_98311_` (`int`)

**Returns:** `public FormattedText`

### fromItem

```java
public static BookViewScreen.BookAccess fromItem(ItemStack p_98309_)
```

**Parameters:**

- `p_98309_` (`ItemStack`)

**Returns:** `BookViewScreen.BookAccess`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BookAccess` | record |  |
