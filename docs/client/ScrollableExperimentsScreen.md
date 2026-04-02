# ScrollableExperimentsScreen

**Package:** `net.neoforged.neoforge.client.gui`
**Type:** class
**Extends:** `ExperimentsScreen`
**Side:** 🖥️ Client
**Annotations:** `@ApiStatus`

## Methods

### ScrollableExperimentsScreen

```java
public ScrollableExperimentsScreen(Screen parent, PackRepository packRepository, Consumer<PackRepository> output)
```

**Parameters:**

- `parent` (`Screen`)
- `packRepository` (`PackRepository`)
- `output` (`Consumer<PackRepository>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
protected void init()
```

### repositionElements

```java
protected void repositionElements()
```

### ExperimentSelectionList

```java
public ExperimentSelectionList(Minecraft mc)
```

**Parameters:**

- `mc` (`Minecraft`)

**Returns:** `public`

### super

```java
 super(ExperimentsScreen.MAIN_CONTENT_WIDTH + LIST_PADDING)
```

**Parameters:**

- `LIST_PADDING` (`ExperimentsScreen.MAIN_CONTENT_WIDTH +`)

**Returns:** ``

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### addEntry

```java
protected int addEntry(ExperimentEntry entry)
```

**Parameters:**

- `entry` (`ExperimentEntry`)

**Returns:** `int`

### ExperimentEntry

```java
public ExperimentEntry(Component title, BooleanSupplier selectedSupplier, Consumer<Boolean> selectedSetter, Component description)
```

**Parameters:**

- `title` (`Component`)
- `selectedSupplier` (`BooleanSupplier`)
- `selectedSetter` (`Consumer<Boolean>`)
- `description` (`Component`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics graphics, int entryIdx, int top, int left, int entryWidth, int entryHeight, int mouseX, int mouseY, boolean hovered, float partialTick)
```

**Parameters:**

- `graphics` (`GuiGraphics`)
- `entryIdx` (`int`)
- `top` (`int`)
- `left` (`int`)
- `entryWidth` (`int`)
- `entryHeight` (`int`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `hovered` (`boolean`)
- `partialTick` (`float`)

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
