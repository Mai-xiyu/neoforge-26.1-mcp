# GridLayout

**Package:** `net.minecraft.client.gui.layouts`
**Type:** class
**Extends:** `AbstractLayout`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### GridLayout

```java
public GridLayout()
```

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### GridLayout

```java
public GridLayout(int p_265045_, int p_265035_)
```

**Parameters:**

- `p_265045_` (`int`)
- `p_265035_` (`int`)

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

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_265485_, int p_265720_, int p_265679_)
```

**Parameters:**

- `p_265485_` (`T`)
- `p_265720_` (`int`)
- `p_265679_` (`int`)

**Returns:** `public <T extends LayoutElement> T`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_265061_, int p_265080_, int p_265105_, LayoutSettings p_265057_)
```

**Parameters:**

- `p_265061_` (`T`)
- `p_265080_` (`int`)
- `p_265105_` (`int`)
- `p_265057_` (`LayoutSettings`)

**Returns:** `public <T extends LayoutElement> T`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_294625_, int p_294408_, int p_294646_, Consumer<LayoutSettings> p_295693_)
```

**Parameters:**

- `p_294625_` (`T`)
- `p_294408_` (`int`)
- `p_294646_` (`int`)
- `p_295693_` (`Consumer<LayoutSettings>`)

**Returns:** `public <T extends LayoutElement> T`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_265590_, int p_265556_, int p_265323_, int p_265531_, int p_265352_)
```

**Parameters:**

- `p_265590_` (`T`)
- `p_265556_` (`int`)
- `p_265323_` (`int`)
- `p_265531_` (`int`)
- `p_265352_` (`int`)

**Returns:** `public <T extends LayoutElement> T`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_265031_, int p_265582_, int p_265782_, int p_265612_, int p_265448_, LayoutSettings p_265579_)
```

**Parameters:**

- `p_265031_` (`T`)
- `p_265582_` (`int`)
- `p_265782_` (`int`)
- `p_265612_` (`int`)
- `p_265448_` (`int`)
- `p_265579_` (`LayoutSettings`)

**Returns:** `public <T extends LayoutElement> T`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Occupied rows must be at least 1")
```

**Parameters:**

- `1"` (`"Occupied rows must be at least`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Occupied columns must be at least 1")
```

**Parameters:**

- `1"` (`"Occupied columns must be at least`)

**Returns:** `throw new`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_295505_, int p_295555_, int p_295800_, int p_295919_, int p_295523_, Consumer<LayoutSettings> p_296424_)
```

**Parameters:**

- `p_295505_` (`T`)
- `p_295555_` (`int`)
- `p_295800_` (`int`)
- `p_295919_` (`int`)
- `p_295523_` (`int`)
- `p_296424_` (`Consumer<LayoutSettings>`)

**Returns:** `public <T extends LayoutElement> T`

### columnSpacing

```java
public GridLayout columnSpacing(int p_268135_)
```

**Parameters:**

- `p_268135_` (`int`)

**Returns:** `public GridLayout`

### rowSpacing

```java
public GridLayout rowSpacing(int p_268237_)
```

**Parameters:**

- `p_268237_` (`int`)

**Returns:** `public GridLayout`

### spacing

```java
public GridLayout spacing(int p_268351_)
```

**Parameters:**

- `p_268351_` (`int`)

**Returns:** `public GridLayout`

### visitChildren

```java
public void visitChildren(Consumer<LayoutElement> p_265389_)
```

**Parameters:**

- `p_265389_` (`Consumer<LayoutElement>`)

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

### createRowHelper

```java
public GridLayout.RowHelper createRowHelper(int p_265327_)
```

**Parameters:**

- `p_265327_` (`int`)

**Returns:** `public GridLayout.RowHelper`

### CellInhabitant

```java
 CellInhabitant(LayoutElement p_265063_, int p_265675_, int p_265198_, int p_265625_, int p_265517_, LayoutSettings p_265036_)
```

**Parameters:**

- `p_265063_` (`LayoutElement`)
- `p_265675_` (`int`)
- `p_265198_` (`int`)
- `p_265625_` (`int`)
- `p_265517_` (`int`)
- `p_265036_` (`LayoutSettings`)

**Returns:** ``

### getLastOccupiedRow

```java
public int getLastOccupiedRow()
```

**Returns:** `public int`

### getLastOccupiedColumn

```java
public int getLastOccupiedColumn()
```

**Returns:** `public int`

### RowHelper

```java
 RowHelper(int p_265633_)
```

**Parameters:**

- `p_265633_` (`int`)

**Returns:** ``

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_265455_)
```

**Parameters:**

- `p_265455_` (`T`)

**Returns:** `public <T extends LayoutElement> T`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_265413_, int p_265491_)
```

**Parameters:**

- `p_265413_` (`T`)
- `p_265491_` (`int`)

**Returns:** `public <T extends LayoutElement> T`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_265411_, LayoutSettings p_265755_)
```

**Parameters:**

- `p_265411_` (`T`)
- `p_265755_` (`LayoutSettings`)

**Returns:** `public <T extends LayoutElement> T`

### addChild

```java
<T extends LayoutElement> public <T extends LayoutElement> T addChild(T p_265200_, int p_265044_, LayoutSettings p_265797_)
```

**Parameters:**

- `p_265200_` (`T`)
- `p_265044_` (`int`)
- `p_265797_` (`LayoutSettings`)

**Returns:** `public <T extends LayoutElement> T`

### getGrid

```java
public GridLayout getGrid()
```

**Returns:** `public GridLayout`

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

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `RowHelper` | class |  |
