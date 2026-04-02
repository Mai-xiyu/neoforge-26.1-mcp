# OptionsList

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Extends:** `ContainerObjectSelectionList<OptionsList.Entry>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### OptionsList

```java
public OptionsList(Minecraft p_94465_, int p_94466_, OptionsSubScreen p_345374_)
```

**Parameters:**

- `p_94465_` (`Minecraft`)
- `p_94466_` (`int`)
- `p_345374_` (`OptionsSubScreen`)

**Returns:** `public`

### addBig

```java
public void addBig(OptionInstance<?> p_232529_)
```

**Parameters:**

- `p_232529_` (`OptionInstance<?>`)

**Returns:** `public void`

### addSmall

```java
public void addSmall(OptionInstance<?>[]... p_232534_)
```

**Parameters:**

- `p_232534_` (`OptionInstance<?>[]...`)

**Returns:** `public void`

### addSmall

```java
public void addSmall(List<AbstractWidget> p_333735_)
```

**Parameters:**

- `p_333735_` (`List<AbstractWidget>`)

**Returns:** `public void`

### addSmall

```java
public void addSmall(AbstractWidget p_333843_, AbstractWidget p_334089_)
```

**Parameters:**

- `p_333843_` (`AbstractWidget`)
- `p_334089_` (`AbstractWidget`)

**Returns:** `public void`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### findOption

```java
public AbstractWidget findOption(OptionInstance<?> p_232536_)
```

**Parameters:**

- `p_232536_` (`OptionInstance<?>`)

**Returns:** `AbstractWidget`

### applyUnsavedChanges

```java
public void applyUnsavedChanges()
```

**Returns:** `public void`

### getMouseOver

```java
public Optional<GuiEventListener> getMouseOver(double p_94481_, double p_94482_)
```

**Parameters:**

- `p_94481_` (`double`)
- `p_94482_` (`double`)

**Returns:** `public Optional<GuiEventListener>`

### Entry

```java
 Entry(List<AbstractWidget> p_333982_, Screen p_333707_)
```

**Parameters:**

- `p_333982_` (`List<AbstractWidget>`)
- `p_333707_` (`Screen`)

**Returns:** ``

### big

```java
public static OptionsList.Entry big(List<AbstractWidget> p_333829_, Screen p_334023_)
```

**Parameters:**

- `p_333829_` (`List<AbstractWidget>`)
- `p_334023_` (`Screen`)

**Returns:** `public static OptionsList.Entry`

### small

```java
public static OptionsList.Entry small(AbstractWidget p_333824_, AbstractWidget p_333990_, Screen p_334077_)
```

**Parameters:**

- `p_333824_` (`AbstractWidget`)
- `p_333990_` (`AbstractWidget`)
- `p_334077_` (`Screen`)

**Returns:** `public static OptionsList.Entry`

### render

```java
public void render(GuiGraphics p_281311_, int p_94497_, int p_94498_, int p_94499_, int p_94500_, int p_94501_, int p_94502_, int p_94503_, boolean p_94504_, float p_94505_)
```

**Parameters:**

- `p_281311_` (`GuiGraphics`)
- `p_94497_` (`int`)
- `p_94498_` (`int`)
- `p_94499_` (`int`)
- `p_94500_` (`int`)
- `p_94501_` (`int`)
- `p_94502_` (`int`)
- `p_94503_` (`int`)
- `p_94504_` (`boolean`)
- `p_94505_` (`float`)

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

### OptionEntry

```java
private OptionEntry(Map<OptionInstance<?>, AbstractWidget> p_333718_, OptionsSubScreen p_345547_)
```

**Parameters:**

- `p_333718_` (`Map<OptionInstance<?>, AbstractWidget>`)
- `p_345547_` (`OptionsSubScreen`)

**Returns:** `private`

### big

```java
public static OptionsList.OptionEntry big(Options p_333804_, OptionInstance<?> p_333884_, OptionsSubScreen p_346169_)
```

**Parameters:**

- `p_333804_` (`Options`)
- `p_333884_` (`OptionInstance<?>`)
- `p_346169_` (`OptionsSubScreen`)

**Returns:** `public static OptionsList.OptionEntry`

### small

```java
public static OptionsList.OptionEntry small(Options p_333928_, OptionInstance<?> p_333848_, OptionInstance<?> p_333717_, OptionsSubScreen p_344761_)
```

**Parameters:**

- `p_333928_` (`Options`)
- `p_333848_` (`OptionInstance<?>`)
- `p_333717_` (`OptionInstance<?>`)
- `p_344761_` (`OptionsSubScreen`)

**Returns:** `public static OptionsList.OptionEntry`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Entry` | class |  |
| `OptionEntry` | class |  |
