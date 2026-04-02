# Checkbox

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Extends:** `AbstractButton`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### Checkbox

```java
 Checkbox(int p_93826_, int p_93827_, int p_352958_, Component p_93830_, Font p_309061_, boolean p_93831_, Checkbox.OnValueChange p_309172_)
```

**Parameters:**

- `p_93826_` (`int`)
- `p_93827_` (`int`)
- `p_352958_` (`int`)
- `p_93830_` (`Component`)
- `p_309061_` (`Font`)
- `p_93831_` (`boolean`)
- `p_309172_` (`Checkbox.OnValueChange`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getAdjustedWidth

```java
private int getAdjustedWidth(int p_352963_, Component p_352934_, Font p_352953_)
```

**Parameters:**

- `p_352963_` (`int`)
- `p_352934_` (`Component`)
- `p_352953_` (`Font`)

**Returns:** `private int`

### getAdjustedHeight

```java
private int getAdjustedHeight(Font p_352942_)
```

**Parameters:**

- `p_352942_` (`Font`)

**Returns:** `private int`

### getDefaultWidth

```java
static int getDefaultWidth(Component p_352957_, Font p_352937_)
```

**Parameters:**

- `p_352957_` (`Component`)
- `p_352937_` (`Font`)

**Returns:** `static int`

### builder

```java
public static Checkbox.Builder builder(Component p_309029_, Font p_309027_)
```

**Parameters:**

- `p_309029_` (`Component`)
- `p_309027_` (`Font`)

**Returns:** `public static Checkbox.Builder`

### getBoxSize

```java
public static int getBoxSize(Font p_309147_)
```

**Parameters:**

- `p_309147_` (`Font`)

**Returns:** `public static int`

### onPress

```java
public void onPress()
```

### selected

```java
public boolean selected()
```

**Returns:** `public boolean`

### updateWidgetNarration

```java
public void updateWidgetNarration(NarrationElementOutput p_260253_)
```

**Parameters:**

- `p_260253_` (`NarrationElementOutput`)

### renderWidget

```java
public void renderWidget(GuiGraphics p_283124_, int p_282925_, int p_282705_, float p_282612_)
```

**Parameters:**

- `p_283124_` (`GuiGraphics`)
- `p_282925_` (`int`)
- `p_282705_` (`int`)
- `p_282612_` (`float`)

### Builder

```java
 Builder(Component p_308972_, Font p_309137_)
```

**Parameters:**

- `p_308972_` (`Component`)
- `p_309137_` (`Font`)

**Returns:** ``

### pos

```java
public Checkbox.Builder pos(int p_309178_, int p_309168_)
```

**Parameters:**

- `p_309178_` (`int`)
- `p_309168_` (`int`)

**Returns:** `public Checkbox.Builder`

### onValueChange

```java
public Checkbox.Builder onValueChange(Checkbox.OnValueChange p_308967_)
```

**Parameters:**

- `p_308967_` (`Checkbox.OnValueChange`)

**Returns:** `public Checkbox.Builder`

### selected

```java
public Checkbox.Builder selected(boolean p_308945_)
```

**Parameters:**

- `p_308945_` (`boolean`)

**Returns:** `public Checkbox.Builder`

### selected

```java
public Checkbox.Builder selected(OptionInstance<Boolean> p_309117_)
```

**Parameters:**

- `p_309117_` (`OptionInstance<Boolean>`)

**Returns:** `public Checkbox.Builder`

### tooltip

```java
public Checkbox.Builder tooltip(Tooltip p_309197_)
```

**Parameters:**

- `p_309197_` (`Tooltip`)

**Returns:** `public Checkbox.Builder`

### maxWidth

```java
public Checkbox.Builder maxWidth(int p_352949_)
```

**Parameters:**

- `p_352949_` (`int`)

**Returns:** `public Checkbox.Builder`

### build

```java
public Checkbox build()
```

**Returns:** `public Checkbox`

### onValueChange

```java
void onValueChange(Checkbox p_308872_, boolean p_309171_)
```

**Parameters:**

- `p_308872_` (`Checkbox`)
- `p_309171_` (`boolean`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `OnValueChange` | interface |  |
