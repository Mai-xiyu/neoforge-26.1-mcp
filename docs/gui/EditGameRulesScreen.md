# EditGameRulesScreen

**Package:** `net.minecraft.client.gui.screens.worldselection`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### EditGameRulesScreen

```java
public EditGameRulesScreen(GameRules p_101051_, Consumer<Optional<GameRules>> p_101052_)
```

**Parameters:**

- `p_101051_` (`GameRules`)
- `p_101052_` (`Consumer<Optional<GameRules>>`)

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

### updateDoneButton

```java
private void updateDoneButton()
```

**Returns:** `private void`

### markInvalid

```java
void markInvalid(EditGameRulesScreen.RuleEntry p_101061_)
```

**Parameters:**

- `p_101061_` (`EditGameRulesScreen.RuleEntry`)

### clearInvalid

```java
void clearInvalid(EditGameRulesScreen.RuleEntry p_101075_)
```

**Parameters:**

- `p_101075_` (`EditGameRulesScreen.RuleEntry`)

### BooleanRuleEntry

```java
public BooleanRuleEntry(Component p_101101_, List<FormattedCharSequence> p_101102_, String p_101103_, GameRules.BooleanValue p_101104_)
```

**Parameters:**

- `p_101101_` (`Component`)
- `p_101102_` (`List<FormattedCharSequence>`)
- `p_101103_` (`String`)
- `p_101104_` (`GameRules.BooleanValue`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(GuiGraphics p_281587_, int p_281471_, int p_281257_, int p_282541_, int p_282993_, int p_283543_, int p_281322_, int p_282930_, boolean p_283227_, float p_283364_)
```

**Parameters:**

- `p_281587_` (`GuiGraphics`)
- `p_281471_` (`int`)
- `p_281257_` (`int`)
- `p_282541_` (`int`)
- `p_282993_` (`int`)
- `p_283543_` (`int`)
- `p_281322_` (`int`)
- `p_282930_` (`int`)
- `p_283227_` (`boolean`)
- `p_283364_` (`float`)

### CategoryRuleEntry

```java
public CategoryRuleEntry(Component p_101141_)
```

**Parameters:**

- `p_101141_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(GuiGraphics p_283335_, int p_283214_, int p_283476_, int p_281365_, int p_281817_, int p_283006_, int p_282893_, int p_282500_, boolean p_283421_, float p_282445_)
```

**Parameters:**

- `p_283335_` (`GuiGraphics`)
- `p_283214_` (`int`)
- `p_283476_` (`int`)
- `p_281365_` (`int`)
- `p_281817_` (`int`)
- `p_283006_` (`int`)
- `p_282893_` (`int`)
- `p_282500_` (`int`)
- `p_283421_` (`boolean`)
- `p_282445_` (`float`)

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
public void updateNarration(NarrationElementOutput p_170225_)
```

**Parameters:**

- `p_170225_` (`NarrationElementOutput`)

### create

```java
EditGameRulesScreen.RuleEntry create(Component p_101155_, List<FormattedCharSequence> p_101156_, String p_101157_, T p_101158_)
```

**Parameters:**

- `p_101155_` (`Component`)
- `p_101156_` (`List<FormattedCharSequence>`)
- `p_101157_` (`String`)
- `p_101158_` (`T`)

**Returns:** `EditGameRulesScreen.RuleEntry`

### GameRuleEntry

```java
public GameRuleEntry(List<FormattedCharSequence> p_101164_, Component p_101165_)
```

**Parameters:**

- `p_101164_` (`List<FormattedCharSequence>`)
- `p_101165_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

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

### renderLabel

```java
protected void renderLabel(GuiGraphics p_282711_, int p_281539_, int p_281414_)
```

**Parameters:**

- `p_282711_` (`GuiGraphics`)
- `p_281539_` (`int`)
- `p_281414_` (`int`)

**Returns:** `protected void`

### IntegerRuleEntry

```java
public IntegerRuleEntry(Component p_101175_, List<FormattedCharSequence> p_101176_, String p_101177_, GameRules.IntegerValue p_101178_)
```

**Parameters:**

- `p_101175_` (`Component`)
- `p_101176_` (`List<FormattedCharSequence>`)
- `p_101177_` (`String`)
- `p_101178_` (`GameRules.IntegerValue`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(GuiGraphics p_281756_, int p_281882_, int p_281876_, int p_283136_, int p_283044_, int p_282526_, int p_282433_, int p_281816_, boolean p_282227_, float p_281751_)
```

**Parameters:**

- `p_281756_` (`GuiGraphics`)
- `p_281882_` (`int`)
- `p_281876_` (`int`)
- `p_283136_` (`int`)
- `p_283044_` (`int`)
- `p_282526_` (`int`)
- `p_282433_` (`int`)
- `p_281816_` (`int`)
- `p_282227_` (`boolean`)
- `p_281751_` (`float`)

### RuleEntry

```java
public RuleEntry(List<FormattedCharSequence> p_194062_)
```

**Parameters:**

- `p_194062_` (`List<FormattedCharSequence>`)

**Returns:** `public`

### RuleList

```java
public RuleList(GameRules p_101203_)
```

**Parameters:**

- `p_101203_` (`GameRules`)

**Returns:** `public`

### visitBoolean

```java
public void visitBoolean(GameRules.Key<GameRules.BooleanValue> p_101238_, GameRules.Type<GameRules.BooleanValue> p_101239_)
```

**Parameters:**

- `p_101238_` (`GameRules.Key<GameRules.BooleanValue>`)
- `p_101239_` (`GameRules.Type<GameRules.BooleanValue>`)

### visitInteger

```java
public void visitInteger(GameRules.Key<GameRules.IntegerValue> p_101241_, GameRules.Type<GameRules.IntegerValue> p_101242_)
```

**Parameters:**

- `p_101241_` (`GameRules.Key<GameRules.IntegerValue>`)
- `p_101242_` (`GameRules.Type<GameRules.IntegerValue>`)

### addEntry

```java
private <T extends GameRules.Value<T>> void addEntry(GameRules.Key<T> p_101225_, EditGameRulesScreen.EntryFactory<T> p_101226_)
```

**Parameters:**

- `p_101225_` (`GameRules.Key<T>`)
- `p_101226_` (`EditGameRulesScreen.EntryFactory<T>`)

**Returns:** `private <T extends GameRules.Value<T>> void`

### renderWidget

```java
public void renderWidget(GuiGraphics p_313903_, int p_313824_, int p_313867_, float p_313845_)
```

**Parameters:**

- `p_313903_` (`GuiGraphics`)
- `p_313824_` (`int`)
- `p_313867_` (`int`)
- `p_313845_` (`float`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BooleanRuleEntry` | class |  |
| `CategoryRuleEntry` | class |  |
| `GameRuleEntry` | class |  |
| `IntegerRuleEntry` | class |  |
| `RuleList` | class |  |
