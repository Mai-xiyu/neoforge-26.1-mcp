# KeyBindsList

**Package:** `net.minecraft.client.gui.screens.options.controls`
**Type:** class
**Extends:** `ContainerObjectSelectionList<KeyBindsList.Entry>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### KeyBindsList

```java
public KeyBindsList(KeyBindsScreen p_345102_, Minecraft p_346132_)
```

**Parameters:**

- `p_345102_` (`KeyBindsScreen`)
- `p_346132_` (`Minecraft`)

**Returns:** `public`

### resetMappingAndUpdateButtons

```java
public void resetMappingAndUpdateButtons()
```

**Returns:** `public void`

### refreshEntries

```java
public void refreshEntries()
```

**Returns:** `public void`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### CategoryEntry

```java
public CategoryEntry(Component p_345224_)
```

**Parameters:**

- `p_345224_` (`Component`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_345402_, int p_345541_, int p_345306_, int p_346166_, int p_346154_, int p_345075_, int p_346184_, int p_346385_, boolean p_346139_, float p_345189_)
```

**Parameters:**

- `p_345402_` (`GuiGraphics`)
- `p_345541_` (`int`)
- `p_345306_` (`int`)
- `p_346166_` (`int`)
- `p_346154_` (`int`)
- `p_345075_` (`int`)
- `p_346184_` (`int`)
- `p_346385_` (`int`)
- `p_346139_` (`boolean`)
- `p_345189_` (`float`)

### nextFocusPath

```java
public ComponentPath nextFocusPath(FocusNavigationEvent p_344970_)
```

**Parameters:**

- `p_344970_` (`FocusNavigationEvent`)

**Returns:** `ComponentPath`

### children

```java
public List<? extends GuiEventListener> children()
```

**Returns:** `List<? extends GuiEventListener>`

### narratables

```java
public List<? extends NarratableEntry> narratables()
```

**Returns:** `List<? extends NarratableEntry>`

### narrationPriority

```java
public NarratableEntry.NarrationPriority narrationPriority()
```

**Returns:** `NarratableEntry.NarrationPriority`

### updateNarration

```java
public void updateNarration(NarrationElementOutput p_344973_)
```

**Parameters:**

- `p_344973_` (`NarrationElementOutput`)

### refreshEntry

```java
protected void refreshEntry()
```

### refreshEntry

```java
abstract void refreshEntry()
```

**Returns:** `abstract void`

### KeyEntry

```java
 KeyEntry(KeyMapping p_345998_, Component p_345196_)
```

**Parameters:**

- `p_345998_` (`KeyMapping`)
- `p_345196_` (`Component`)

**Returns:** ``

### render

```java
public void render(GuiGraphics p_345065_, int p_345504_, int p_345678_, int p_344740_, int p_345885_, int p_344888_, int p_345213_, int p_344829_, boolean p_346415_, float p_345934_)
```

**Parameters:**

- `p_345065_` (`GuiGraphics`)
- `p_345504_` (`int`)
- `p_345678_` (`int`)
- `p_344740_` (`int`)
- `p_345885_` (`int`)
- `p_344888_` (`int`)
- `p_345213_` (`int`)
- `p_344829_` (`int`)
- `p_346415_` (`boolean`)
- `p_345934_` (`float`)

### children

```java
public List<? extends GuiEventListener> children()
```

**Returns:** `List<? extends GuiEventListener>`

### narratables

```java
public List<? extends NarratableEntry> narratables()
```

**Returns:** `List<? extends NarratableEntry>`

### refreshEntry

```java
protected void refreshEntry()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CategoryEntry` | class |  |
| `KeyEntry` | class |  |
