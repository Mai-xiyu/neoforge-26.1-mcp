# MultiLineTextWidget

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Extends:** `AbstractStringWidget`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### MultiLineTextWidget

```java
public MultiLineTextWidget(Component p_270532_, Font p_270639_)
```

**Parameters:**

- `p_270532_` (`Component`)
- `p_270639_` (`Font`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MultiLineTextWidget

```java
public MultiLineTextWidget(int p_270325_, int p_270355_, Component p_270069_, Font p_270673_)
```

**Parameters:**

- `p_270325_` (`int`)
- `p_270355_` (`int`)
- `p_270069_` (`Component`)
- `p_270673_` (`Font`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setColor

```java
public MultiLineTextWidget setColor(int p_270378_)
```

**Parameters:**

- `p_270378_` (`int`)

**Returns:** `public MultiLineTextWidget`

### setMaxWidth

```java
public MultiLineTextWidget setMaxWidth(int p_270776_)
```

**Parameters:**

- `p_270776_` (`int`)

**Returns:** `public MultiLineTextWidget`

### setMaxRows

```java
public MultiLineTextWidget setMaxRows(int p_270085_)
```

**Parameters:**

- `p_270085_` (`int`)

**Returns:** `public MultiLineTextWidget`

### setCentered

```java
public MultiLineTextWidget setCentered(boolean p_270493_)
```

**Parameters:**

- `p_270493_` (`boolean`)

**Returns:** `public MultiLineTextWidget`

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

### renderWidget

```java
public void renderWidget(GuiGraphics p_282535_, int p_261774_, int p_261640_, float p_261514_)
```

**Parameters:**

- `p_282535_` (`GuiGraphics`)
- `p_261774_` (`int`)
- `p_261640_` (`int`)
- `p_261514_` (`float`)

### getFreshCacheKey

```java
private MultiLineTextWidget.CacheKey getFreshCacheKey()
```

**Returns:** `private MultiLineTextWidget.CacheKey`

### CacheKey

```java
static record CacheKey(Component message, int maxWidth, OptionalInt maxRows)
```

**Parameters:**

- `message` (`Component`)
- `maxWidth` (`int`)
- `maxRows` (`OptionalInt`)

**Returns:** `record`
