# LanguageSelectScreen

**Package:** `net.minecraft.client.gui.screens.options`
**Type:** class
**Extends:** `OptionsSubScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### LanguageSelectScreen

```java
public LanguageSelectScreen(Screen p_345780_, Options p_344823_, LanguageManager p_344876_)
```

**Parameters:**

- `p_345780_` (`Screen`)
- `p_344823_` (`Options`)
- `p_344876_` (`LanguageManager`)

**Returns:** `public`

### addContents

```java
protected void addContents()
```

### addOptions

```java
protected void addOptions()
```

### addFooter

```java
protected void addFooter()
```

### repositionElements

```java
protected void repositionElements()
```

### onDone

```java
void onDone()
```

### LanguageSelectionList

```java
public LanguageSelectionList(Minecraft p_345567_)
```

**Parameters:**

- `p_345567_` (`Minecraft`)

**Returns:** `public`

### super

```java
 super(LanguageSelectScreen.this.height - 33 - 53)
```

**Parameters:**

- `53` (`LanguageSelectScreen.this.height - 33 -`)

**Returns:** ``

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### Entry

```java
public Entry(String p_346435_, LanguageInfo p_345619_)
```

**Parameters:**

- `p_346435_` (`String`)
- `p_345619_` (`LanguageInfo`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_345300_, int p_345469_, int p_345328_, int p_345700_, int p_345311_, int p_345185_, int p_344805_, int p_345963_, boolean p_345912_, float p_346091_)
```

**Parameters:**

- `p_345300_` (`GuiGraphics`)
- `p_345469_` (`int`)
- `p_345328_` (`int`)
- `p_345700_` (`int`)
- `p_345311_` (`int`)
- `p_345185_` (`int`)
- `p_344805_` (`int`)
- `p_345963_` (`int`)
- `p_345912_` (`boolean`)
- `p_346091_` (`float`)

### keyPressed

```java
public boolean keyPressed(int p_346403_, int p_345881_, int p_345858_)
```

**Parameters:**

- `p_346403_` (`int`)
- `p_345881_` (`int`)
- `p_345858_` (`int`)

**Returns:** `boolean`

### mouseClicked

```java
public boolean mouseClicked(double p_344965_, double p_345385_, int p_345080_)
```

**Parameters:**

- `p_344965_` (`double`)
- `p_345385_` (`double`)
- `p_345080_` (`int`)

**Returns:** `boolean`

### select

```java
private void select()
```

**Returns:** `private void`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Entry` | class |  |
