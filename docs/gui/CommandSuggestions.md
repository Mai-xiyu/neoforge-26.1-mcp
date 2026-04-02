# CommandSuggestions

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### CommandSuggestions

```java
public CommandSuggestions(Minecraft p_93871_, Screen p_93872_, EditBox p_93873_, Font p_93874_, boolean p_93875_, boolean p_93876_, int p_93877_, int p_93878_, boolean p_93879_, int p_93880_)
```

**Parameters:**

- `p_93871_` (`Minecraft`)
- `p_93872_` (`Screen`)
- `p_93873_` (`EditBox`)
- `p_93874_` (`Font`)
- `p_93875_` (`boolean`)
- `p_93876_` (`boolean`)
- `p_93877_` (`int`)
- `p_93878_` (`int`)
- `p_93879_` (`boolean`)
- `p_93880_` (`int`)

**Returns:** `public`

### setAllowSuggestions

```java
public void setAllowSuggestions(boolean p_93923_)
```

**Parameters:**

- `p_93923_` (`boolean`)

**Returns:** `public void`

### setAllowHiding

```java
public void setAllowHiding(boolean p_302228_)
```

**Parameters:**

- `p_302228_` (`boolean`)

**Returns:** `public void`

### keyPressed

```java
public boolean keyPressed(int p_93889_, int p_93890_, int p_93891_)
```

**Parameters:**

- `p_93889_` (`int`)
- `p_93890_` (`int`)
- `p_93891_` (`int`)

**Returns:** `public boolean`

### mouseScrolled

```java
public boolean mouseScrolled(double p_93883_)
```

**Parameters:**

- `p_93883_` (`double`)

**Returns:** `public boolean`

### mouseClicked

```java
public boolean mouseClicked(double p_93885_, double p_93886_, int p_93887_)
```

**Parameters:**

- `p_93885_` (`double`)
- `p_93886_` (`double`)
- `p_93887_` (`int`)

**Returns:** `public boolean`

### showSuggestions

```java
public void showSuggestions(boolean p_93931_)
```

**Parameters:**

- `p_93931_` (`boolean`)

**Returns:** `public void`

### isVisible

```java
public boolean isVisible()
```

**Returns:** `public boolean`

### getUsageNarration

```java
public Component getUsageNarration()
```

**Returns:** `public Component`

### hide

```java
public void hide()
```

**Returns:** `public void`

### sortSuggestions

```java
private List<Suggestion> sortSuggestions(Suggestions p_93899_)
```

**Parameters:**

- `p_93899_` (`Suggestions`)

**Returns:** `private List<Suggestion>`

### updateCommandInfo

```java
public void updateCommandInfo()
```

**Returns:** `public void`

### getLastWordIndex

```java
private static int getLastWordIndex(String p_93913_)
```

**Parameters:**

- `p_93913_` (`String`)

**Returns:** `private static int`

### getExceptionMessage

```java
private static FormattedCharSequence getExceptionMessage(CommandSyntaxException p_93897_)
```

**Parameters:**

- `p_93897_` (`CommandSyntaxException`)

**Returns:** `private static FormattedCharSequence`

### updateUsageInfo

```java
private void updateUsageInfo()
```

**Returns:** `private void`

### fillNodeUsage

```java
private boolean fillNodeUsage(ChatFormatting p_289002_)
```

**Parameters:**

- `p_289002_` (`ChatFormatting`)

**Returns:** `private boolean`

### formatChat

```java
private FormattedCharSequence formatChat(String p_93915_, int p_93916_)
```

**Parameters:**

- `p_93915_` (`String`)
- `p_93916_` (`int`)

**Returns:** `private FormattedCharSequence`

### calculateSuggestionSuffix

```java
static String calculateSuggestionSuffix(String p_93928_, String p_93929_)
```

**Parameters:**

- `p_93928_` (`String`)
- `p_93929_` (`String`)

**Returns:** `String`

### formatText

```java
private static FormattedCharSequence formatText(ParseResults<SharedSuggestionProvider> p_93893_, String p_93894_, int p_93895_)
```

**Parameters:**

- `p_93893_` (`ParseResults<SharedSuggestionProvider>`)
- `p_93894_` (`String`)
- `p_93895_` (`int`)

**Returns:** `private static FormattedCharSequence`

### render

```java
public void render(GuiGraphics p_282650_, int p_282266_, int p_281963_)
```

**Parameters:**

- `p_282650_` (`GuiGraphics`)
- `p_282266_` (`int`)
- `p_281963_` (`int`)

**Returns:** `public void`

### renderSuggestions

```java
public boolean renderSuggestions(GuiGraphics p_283503_, int p_281628_, int p_282260_)
```

**Parameters:**

- `p_283503_` (`GuiGraphics`)
- `p_281628_` (`int`)
- `p_282260_` (`int`)

**Returns:** `public boolean`

### renderUsage

```java
public void renderUsage(GuiGraphics p_282763_)
```

**Parameters:**

- `p_282763_` (`GuiGraphics`)

**Returns:** `public void`

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `public Component`

### SuggestionsList

```java
 SuggestionsList(int p_93957_, int p_93958_, int p_93959_, List<Suggestion> p_93960_, boolean p_93961_)
```

**Parameters:**

- `p_93957_` (`int`)
- `p_93958_` (`int`)
- `p_93959_` (`int`)
- `p_93960_` (`List<Suggestion>`)
- `p_93961_` (`boolean`)

**Returns:** ``

### render

```java
public void render(GuiGraphics p_282264_, int p_283591_, int p_283236_)
```

**Parameters:**

- `p_282264_` (`GuiGraphics`)
- `p_283591_` (`int`)
- `p_283236_` (`int`)

**Returns:** `public void`

### mouseClicked

```java
public boolean mouseClicked(int p_93976_, int p_93977_, int p_93978_)
```

**Parameters:**

- `p_93976_` (`int`)
- `p_93977_` (`int`)
- `p_93978_` (`int`)

**Returns:** `public boolean`

### mouseScrolled

```java
public boolean mouseScrolled(double p_93972_)
```

**Parameters:**

- `p_93972_` (`double`)

**Returns:** `public boolean`

### keyPressed

```java
public boolean keyPressed(int p_93989_, int p_93990_, int p_93991_)
```

**Parameters:**

- `p_93989_` (`int`)
- `p_93990_` (`int`)
- `p_93991_` (`int`)

**Returns:** `public boolean`

### cycle

```java
public void cycle(int p_93974_)
```

**Parameters:**

- `p_93974_` (`int`)

**Returns:** `public void`

### select

```java
public void select(int p_93987_)
```

**Parameters:**

- `p_93987_` (`int`)

**Returns:** `public void`

### useSuggestion

```java
public void useSuggestion()
```

**Returns:** `public void`

### getNarrationMessage

```java
Component getNarrationMessage()
```

**Returns:** `Component`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SuggestionsList` | class |  |
