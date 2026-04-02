# ServerLinksScreen

**Package:** `net.minecraft.client.gui.screens.multiplayer`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ServerLinksScreen

```java
public ServerLinksScreen(Screen p_350433_, ServerLinks p_350491_)
```

**Parameters:**

- `p_350433_` (`Screen`)
- `p_350491_` (`ServerLinks`)

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

### onClose

```java
public void onClose()
```

### LinkList

```java
public LinkList(Minecraft p_350783_, int p_350730_, ServerLinksScreen p_350695_)
```

**Parameters:**

- `p_350783_` (`Minecraft`)
- `p_350730_` (`int`)
- `p_350695_` (`ServerLinksScreen`)

**Returns:** `public`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### updateSize

```java
public void updateSize(int p_350967_, HeaderAndFooterLayout p_350748_)
```

**Parameters:**

- `p_350967_` (`int`)
- `p_350748_` (`HeaderAndFooterLayout`)

### LinkListEntry

```java
 LinkListEntry(Screen p_350500_, ServerLinks.Entry p_350677_)
```

**Parameters:**

- `p_350500_` (`Screen`)
- `p_350677_` (`ServerLinks.Entry`)

**Returns:** ``

### render

```java
public void render(GuiGraphics p_350577_, int p_350511_, int p_350936_, int p_350596_, int p_350517_, int p_351059_, int p_350806_, int p_351038_, boolean p_350365_, float p_350788_)
```

**Parameters:**

- `p_350577_` (`GuiGraphics`)
- `p_350511_` (`int`)
- `p_350936_` (`int`)
- `p_350596_` (`int`)
- `p_350517_` (`int`)
- `p_351059_` (`int`)
- `p_350806_` (`int`)
- `p_351038_` (`int`)
- `p_350365_` (`boolean`)
- `p_350788_` (`float`)

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
