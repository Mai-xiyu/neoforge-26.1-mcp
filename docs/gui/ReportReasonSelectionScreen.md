# ReportReasonSelectionScreen

**Package:** `net.minecraft.client.gui.screens.reporting`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ReportReasonSelectionScreen

```java
public ReportReasonSelectionScreen(Screen p_239438_, ReportReason p_239439_, Consumer<ReportReason> p_239440_)
```

**Parameters:**

- `p_239438_` (`Screen`)
- `p_239439_` (`ReportReason`)
- `p_239440_` (`Consumer<ReportReason>`)

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

### render

```java
public void render(GuiGraphics p_282815_, int p_283039_, int p_283620_, float p_281336_)
```

**Parameters:**

- `p_282815_` (`GuiGraphics`)
- `p_283039_` (`int`)
- `p_283620_` (`int`)
- `p_281336_` (`float`)

### descriptionLeft

```java
private int descriptionLeft()
```

**Returns:** `private int`

### descriptionRight

```java
private int descriptionRight()
```

**Returns:** `private int`

### descriptionTop

```java
private int descriptionTop()
```

**Returns:** `private int`

### descriptionBottom

```java
private int descriptionBottom()
```

**Returns:** `private int`

### descriptionWidth

```java
private int descriptionWidth()
```

**Returns:** `private int`

### descriptionHeight

```java
private int descriptionHeight()
```

**Returns:** `private int`

### listHeight

```java
int listHeight()
```

**Returns:** `int`

### onClose

```java
public void onClose()
```

### ReasonSelectionList

```java
public ReasonSelectionList(Minecraft p_239715_)
```

**Parameters:**

- `p_239715_` (`Minecraft`)

**Returns:** `public`

### findEntry

```java
public ReportReasonSelectionScreen.ReasonSelectionList.Entry findEntry(ReportReason p_239168_)
```

**Parameters:**

- `p_239168_` (`ReportReason`)

**Returns:** `ReportReasonSelectionScreen.ReasonSelectionList.Entry`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### setSelected

```java
public void setSelected(ReportReasonSelectionScreen.ReasonSelectionList.Entry p_240601_)
```

**Parameters:**

- `p_240601_` (`ReportReasonSelectionScreen.ReasonSelectionList.Entry`)

**Returns:** `public void`

### Entry

```java
public Entry(ReportReason p_239267_)
```

**Parameters:**

- `p_239267_` (`ReportReason`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_281941_, int p_281450_, int p_281781_, int p_283334_, int p_283073_, int p_282523_, int p_282667_, int p_281567_, boolean p_282095_, float p_283305_)
```

**Parameters:**

- `p_281941_` (`GuiGraphics`)
- `p_281450_` (`int`)
- `p_281781_` (`int`)
- `p_283334_` (`int`)
- `p_283073_` (`int`)
- `p_282523_` (`int`)
- `p_282667_` (`int`)
- `p_281567_` (`int`)
- `p_282095_` (`boolean`)
- `p_283305_` (`float`)

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### mouseClicked

```java
public boolean mouseClicked(double p_240021_, double p_240022_, int p_240023_)
```

**Parameters:**

- `p_240021_` (`double`)
- `p_240022_` (`double`)
- `p_240023_` (`int`)

**Returns:** `boolean`

### getReason

```java
public ReportReason getReason()
```

**Returns:** `public ReportReason`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ReasonSelectionList` | class |  |
| `Entry` | class |  |
