# LinearLayout

**Package:** `net.minecraft.client.gui.layouts`
**Type:** class
**Implements:** `Layout`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### LinearLayout

```java
private LinearLayout(LinearLayout.Orientation p_265341_)
```

**Parameters:**

- `p_265341_` (`LinearLayout.Orientation`)

**Returns:** `private`

### this

```java
 this()
```

**Returns:** ``

### LinearLayout

```java
public LinearLayout(int p_265093_, int p_265502_, LinearLayout.Orientation p_265112_)
```

**Parameters:**

- `p_265093_` (`int`)
- `p_265502_` (`int`)
- `p_265112_` (`LinearLayout.Orientation`)

**Returns:** `public`

### spacing

```java
public LinearLayout spacing(int p_294650_)
```

**Parameters:**

- `p_294650_` (`int`)

**Returns:** `public LinearLayout`

### newCellSettings

```java
public LayoutSettings newCellSettings()
```

**Returns:** `public LayoutSettings`

### defaultCellSetting

```java
public LayoutSettings defaultCellSetting()
```

**Returns:** `public LayoutSettings`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_265475_, LayoutSettings p_265684_)
```

**Parameters:**

- `p_265475_` (`T`)
- `p_265684_` (`LayoutSettings`)

**Returns:** `public <T extends LayoutElement> T`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_265140_)
```

**Parameters:**

- `p_265140_` (`T`)

**Returns:** `public <T extends LayoutElement> T`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_294205_, Consumer<LayoutSettings> p_295486_)
```

**Parameters:**

- `p_294205_` (`T`)
- `p_295486_` (`Consumer<LayoutSettings>`)

**Returns:** `public <T extends LayoutElement> T`

### visitChildren

```java
public void visitChildren(Consumer<LayoutElement> p_265508_)
```

**Parameters:**

- `p_265508_` (`Consumer<LayoutElement>`)

### arrangeElements

```java
public void arrangeElements()
```

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

### setX

```java
public void setX(int p_295684_)
```

**Parameters:**

- `p_295684_` (`int`)

### setY

```java
public void setY(int p_295771_)
```

**Parameters:**

- `p_295771_` (`int`)

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

### vertical

```java
public static LinearLayout vertical()
```

**Returns:** `public static LinearLayout`

### LinearLayout

```java
return new LinearLayout()
```

**Returns:** `return new`

### horizontal

```java
public static LinearLayout horizontal()
```

**Returns:** `public static LinearLayout`

### LinearLayout

```java
return new LinearLayout()
```

**Returns:** `return new`

### setSpacing

```java
void setSpacing(GridLayout p_295925_, int p_295045_)
```

**Parameters:**

- `p_295925_` (`GridLayout`)
- `p_295045_` (`int`)

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(GridLayout p_296325_, T p_294747_, int p_296492_, LayoutSettings p_295163_)
```

**Parameters:**

- `p_296325_` (`GridLayout`)
- `p_294747_` (`T`)
- `p_296492_` (`int`)
- `p_295163_` (`LayoutSettings`)

**Returns:** `public <T extends LayoutElement> T`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Orientation` | enum |  |
