# HeaderAndFooterLayout

**Package:** `net.minecraft.client.gui.layouts`
**Type:** class
**Implements:** `Layout`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_HEADER_AND_FOOTER_HEIGHT` | `int` |  |

## Methods

### HeaderAndFooterLayout

```java
public HeaderAndFooterLayout(Screen p_270234_)
```

**Parameters:**

- `p_270234_` (`Screen`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### HeaderAndFooterLayout

```java
public HeaderAndFooterLayout(Screen p_270404_, int p_270984_)
```

**Parameters:**

- `p_270404_` (`Screen`)
- `p_270984_` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### HeaderAndFooterLayout

```java
public HeaderAndFooterLayout(Screen p_270083_, int p_270134_, int p_270996_)
```

**Parameters:**

- `p_270083_` (`Screen`)
- `p_270134_` (`int`)
- `p_270996_` (`int`)

**Returns:** `public`

### setX

```java
public void setX(int p_270309_)
```

**Parameters:**

- `p_270309_` (`int`)

### setY

```java
public void setY(int p_270318_)
```

**Parameters:**

- `p_270318_` (`int`)

### getX

```java
public int getX()
```

**Returns:** `int`

### getY

```java
public int getY()
```

**Returns:** `int`

### getWidth

```java
public int getWidth()
```

**Returns:** `int`

### getHeight

```java
public int getHeight()
```

**Returns:** `int`

### getFooterHeight

```java
public int getFooterHeight()
```

**Returns:** `public int`

### setFooterHeight

```java
public void setFooterHeight(int p_270260_)
```

**Parameters:**

- `p_270260_` (`int`)

**Returns:** `public void`

### setHeaderHeight

```java
public void setHeaderHeight(int p_270135_)
```

**Parameters:**

- `p_270135_` (`int`)

**Returns:** `public void`

### getHeaderHeight

```java
public int getHeaderHeight()
```

**Returns:** `public int`

### getContentHeight

```java
public int getContentHeight()
```

**Returns:** `public int`

### visitChildren

```java
public void visitChildren(Consumer<LayoutElement> p_270213_)
```

**Parameters:**

- `p_270213_` (`Consumer<LayoutElement>`)

### arrangeElements

```java
public void arrangeElements()
```

### addToHeader

```java
<T extends LayoutElement> public <T extends LayoutElement> T addToHeader(T p_270636_)
```

**Parameters:**

- `p_270636_` (`T`)

**Returns:** `public <T extends LayoutElement> T`

### addToHeader

```java
<T extends LayoutElement> public <T extends LayoutElement> T addToHeader(T p_270870_, Consumer<LayoutSettings> p_294312_)
```

**Parameters:**

- `p_270870_` (`T`)
- `p_294312_` (`Consumer<LayoutSettings>`)

**Returns:** `public <T extends LayoutElement> T`

### addTitleHeader

```java
public void addTitleHeader(Component p_330525_, Font p_330590_)
```

**Parameters:**

- `p_330525_` (`Component`)
- `p_330590_` (`Font`)

**Returns:** `public void`

### addToFooter

```java
<T extends LayoutElement> public <T extends LayoutElement> T addToFooter(T p_270951_)
```

**Parameters:**

- `p_270951_` (`T`)

**Returns:** `public <T extends LayoutElement> T`

### addToFooter

```java
<T extends LayoutElement> public <T extends LayoutElement> T addToFooter(T p_270362_, Consumer<LayoutSettings> p_295132_)
```

**Parameters:**

- `p_270362_` (`T`)
- `p_295132_` (`Consumer<LayoutSettings>`)

**Returns:** `public <T extends LayoutElement> T`

### addToContents

```java
<T extends LayoutElement> public <T extends LayoutElement> T addToContents(T p_270895_)
```

**Parameters:**

- `p_270895_` (`T`)

**Returns:** `public <T extends LayoutElement> T`

### addToContents

```java
<T extends LayoutElement> public <T extends LayoutElement> T addToContents(T p_270611_, Consumer<LayoutSettings> p_294257_)
```

**Parameters:**

- `p_270611_` (`T`)
- `p_294257_` (`Consumer<LayoutSettings>`)

**Returns:** `public <T extends LayoutElement> T`
