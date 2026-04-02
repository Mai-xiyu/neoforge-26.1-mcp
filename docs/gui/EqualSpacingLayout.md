# EqualSpacingLayout

**Package:** `net.minecraft.client.gui.layouts`
**Type:** class
**Extends:** `AbstractLayout`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### EqualSpacingLayout

```java
public EqualSpacingLayout(int p_296391_, int p_295404_, EqualSpacingLayout.Orientation p_296096_)
```

**Parameters:**

- `p_296391_` (`int`)
- `p_295404_` (`int`)
- `p_296096_` (`EqualSpacingLayout.Orientation`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### EqualSpacingLayout

```java
public EqualSpacingLayout(int p_294661_, int p_294554_, int p_295502_, int p_295293_, EqualSpacingLayout.Orientation p_294700_)
```

**Parameters:**

- `p_294661_` (`int`)
- `p_294554_` (`int`)
- `p_295502_` (`int`)
- `p_295293_` (`int`)
- `p_294700_` (`EqualSpacingLayout.Orientation`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### arrangeElements

```java
public void arrangeElements()
```

### visitChildren

```java
public void visitChildren(Consumer<LayoutElement> p_295333_)
```

**Parameters:**

- `p_295333_` (`Consumer<LayoutElement>`)

### newChildLayoutSettings

```java
public LayoutSettings newChildLayoutSettings()
```

**Returns:** `public LayoutSettings`

### defaultChildLayoutSetting

```java
public LayoutSettings defaultChildLayoutSetting()
```

**Returns:** `public LayoutSettings`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_295559_)
```

**Parameters:**

- `p_295559_` (`T`)

**Returns:** `public <T extends LayoutElement> T`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_295964_, LayoutSettings p_296374_)
```

**Parameters:**

- `p_295964_` (`T`)
- `p_296374_` (`LayoutSettings`)

**Returns:** `public <T extends LayoutElement> T`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_295467_, Consumer<LayoutSettings> p_295449_)
```

**Parameters:**

- `p_295467_` (`T`)
- `p_295449_` (`Consumer<LayoutSettings>`)

**Returns:** `public <T extends LayoutElement> T`

### ChildContainer

```java
protected ChildContainer(LayoutElement p_295358_, LayoutSettings p_295638_)
```

**Parameters:**

- `p_295358_` (`LayoutElement`)
- `p_295638_` (`LayoutSettings`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getPrimaryLength

```java
int getPrimaryLength(LayoutElement p_295781_)
```

**Parameters:**

- `p_295781_` (`LayoutElement`)

**Returns:** `int`

### getPrimaryLength

```java
int getPrimaryLength(EqualSpacingLayout.ChildContainer p_295365_)
```

**Parameters:**

- `p_295365_` (`EqualSpacingLayout.ChildContainer`)

**Returns:** `int`

### getSecondaryLength

```java
int getSecondaryLength(LayoutElement p_294949_)
```

**Parameters:**

- `p_294949_` (`LayoutElement`)

**Returns:** `int`

### getSecondaryLength

```java
int getSecondaryLength(EqualSpacingLayout.ChildContainer p_295288_)
```

**Parameters:**

- `p_295288_` (`EqualSpacingLayout.ChildContainer`)

**Returns:** `int`

### setPrimaryPosition

```java
void setPrimaryPosition(EqualSpacingLayout.ChildContainer p_295434_, int p_294763_)
```

**Parameters:**

- `p_295434_` (`EqualSpacingLayout.ChildContainer`)
- `p_294763_` (`int`)

### setSecondaryPosition

```java
void setSecondaryPosition(EqualSpacingLayout.ChildContainer p_295472_, int p_295477_, int p_296148_)
```

**Parameters:**

- `p_295472_` (`EqualSpacingLayout.ChildContainer`)
- `p_295477_` (`int`)
- `p_296148_` (`int`)

### getPrimaryPosition

```java
int getPrimaryPosition(LayoutElement p_294749_)
```

**Parameters:**

- `p_294749_` (`LayoutElement`)

**Returns:** `int`

### getSecondaryPosition

```java
int getSecondaryPosition(LayoutElement p_295927_)
```

**Parameters:**

- `p_295927_` (`LayoutElement`)

**Returns:** `int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Orientation` | enum |  |
