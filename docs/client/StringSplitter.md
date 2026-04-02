# StringSplitter

**Package:** `net.minecraft.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### StringSplitter

```java
public StringSplitter(StringSplitter.WidthProvider p_92335_)
```

**Parameters:**

- `p_92335_` (`StringSplitter.WidthProvider`)

**Returns:** `public`

### stringWidth

```java
public float stringWidth(String p_92354_)
```

**Parameters:**

- `p_92354_` (`String`)

**Returns:** `public float`

### stringWidth

```java
public float stringWidth(FormattedText p_92385_)
```

**Parameters:**

- `p_92385_` (`FormattedText`)

**Returns:** `public float`

### stringWidth

```java
public float stringWidth(FormattedCharSequence p_92337_)
```

**Parameters:**

- `p_92337_` (`FormattedCharSequence`)

**Returns:** `public float`

### plainIndexAtWidth

```java
public int plainIndexAtWidth(String p_92361_, int p_92362_, Style p_92363_)
```

**Parameters:**

- `p_92361_` (`String`)
- `p_92362_` (`int`)
- `p_92363_` (`Style`)

**Returns:** `public int`

### plainHeadByWidth

```java
public String plainHeadByWidth(String p_92411_, int p_92412_, Style p_92413_)
```

**Parameters:**

- `p_92411_` (`String`)
- `p_92412_` (`int`)
- `p_92413_` (`Style`)

**Returns:** `public String`

### plainTailByWidth

```java
public String plainTailByWidth(String p_92424_, int p_92425_, Style p_92426_)
```

**Parameters:**

- `p_92424_` (`String`)
- `p_92425_` (`int`)
- `p_92426_` (`Style`)

**Returns:** `public String`

### formattedIndexByWidth

```java
public int formattedIndexByWidth(String p_168627_, int p_168628_, Style p_168629_)
```

**Parameters:**

- `p_168627_` (`String`)
- `p_168628_` (`int`)
- `p_168629_` (`Style`)

**Returns:** `public int`

### componentStyleAtWidth

```java
public Style componentStyleAtWidth(FormattedText p_92387_, int p_92388_)
```

**Parameters:**

- `p_92387_` (`FormattedText`)
- `p_92388_` (`int`)

**Returns:** `Style`

### componentStyleAtWidth

```java
public Style componentStyleAtWidth(FormattedCharSequence p_92339_, int p_92340_)
```

**Parameters:**

- `p_92339_` (`FormattedCharSequence`)
- `p_92340_` (`int`)

**Returns:** `Style`

### formattedHeadByWidth

```java
public String formattedHeadByWidth(String p_168631_, int p_168632_, Style p_168633_)
```

**Parameters:**

- `p_168631_` (`String`)
- `p_168632_` (`int`)
- `p_168633_` (`Style`)

**Returns:** `public String`

### headByWidth

```java
public FormattedText headByWidth(FormattedText p_92390_, int p_92391_, Style p_92392_)
```

**Parameters:**

- `p_92390_` (`FormattedText`)
- `p_92391_` (`int`)
- `p_92392_` (`Style`)

**Returns:** `public FormattedText`

### accept

```java
public Optional<FormattedText> accept(Style p_92443_, String p_92444_)
```

**Parameters:**

- `p_92443_` (`Style`)
- `p_92444_` (`String`)

**Returns:** `Optional<FormattedText>`

### findLineBreak

```java
public int findLineBreak(String p_168635_, int p_168636_, Style p_168637_)
```

**Parameters:**

- `p_168635_` (`String`)
- `p_168636_` (`int`)
- `p_168637_` (`Style`)

**Returns:** `public int`

### getWordPosition

```java
public static int getWordPosition(String p_92356_, int p_92357_, int p_92358_, boolean p_92359_)
```

**Parameters:**

- `p_92356_` (`String`)
- `p_92357_` (`int`)
- `p_92358_` (`int`)
- `p_92359_` (`boolean`)

**Returns:** `public static int`

### splitLines

```java
public void splitLines(String p_92365_, int p_92366_, Style p_92367_, boolean p_92368_, StringSplitter.LinePosConsumer p_92369_)
```

**Parameters:**

- `p_92365_` (`String`)
- `p_92366_` (`int`)
- `p_92367_` (`Style`)
- `p_92368_` (`boolean`)
- `p_92369_` (`StringSplitter.LinePosConsumer`)

**Returns:** `public void`

### splitLines

```java
public List<FormattedText> splitLines(String p_92433_, int p_92434_, Style p_92435_)
```

**Parameters:**

- `p_92433_` (`String`)
- `p_92434_` (`int`)
- `p_92435_` (`Style`)

**Returns:** `public List<FormattedText>`

### splitLines

```java
public List<FormattedText> splitLines(FormattedText p_92415_, int p_92416_, Style p_92417_)
```

**Parameters:**

- `p_92415_` (`FormattedText`)
- `p_92416_` (`int`)
- `p_92417_` (`Style`)

**Returns:** `public List<FormattedText>`

### splitLines

```java
public List<FormattedText> splitLines(FormattedText p_168622_, int p_168623_, Style p_168624_, FormattedText p_168625_)
```

**Parameters:**

- `p_168622_` (`FormattedText`)
- `p_168623_` (`int`)
- `p_168624_` (`Style`)
- `p_168625_` (`FormattedText`)

**Returns:** `public List<FormattedText>`

### splitLines

```java
public void splitLines(FormattedText p_92394_, int p_92395_, Style p_92396_, BiConsumer<FormattedText, Boolean> p_92397_)
```

**Parameters:**

- `p_92394_` (`FormattedText`)
- `p_92395_` (`int`)
- `p_92396_` (`Style`)
- `p_92397_` (`BiConsumer<FormattedText, Boolean>`)

**Returns:** `public void`

### FlatComponents

```java
public FlatComponents(List<StringSplitter.LineComponent> p_92448_)
```

**Parameters:**

- `p_92448_` (`List<StringSplitter.LineComponent>`)

**Returns:** `public`

### charAt

```java
public char charAt(int p_92451_)
```

**Parameters:**

- `p_92451_` (`int`)

**Returns:** `public char`

### splitAt

```java
public FormattedText splitAt(int p_92453_, int p_92454_, Style p_92455_)
```

**Parameters:**

- `p_92453_` (`int`)
- `p_92454_` (`int`)
- `p_92455_` (`Style`)

**Returns:** `public FormattedText`

### getRemainder

```java
public FormattedText getRemainder()
```

**Returns:** `FormattedText`

### LineBreakFinder

```java
public LineBreakFinder(float p_92472_)
```

**Parameters:**

- `p_92472_` (`float`)

**Returns:** `public`

### accept

```java
public boolean accept(int p_92480_, Style p_92481_, int p_92482_)
```

**Parameters:**

- `p_92480_` (`int`)
- `p_92481_` (`Style`)
- `p_92482_` (`int`)

**Returns:** `boolean`

### finishIteration

```java
private boolean finishIteration(int p_92477_, Style p_92478_)
```

**Parameters:**

- `p_92477_` (`int`)
- `p_92478_` (`Style`)

**Returns:** `private boolean`

### lineBreakFound

```java
private boolean lineBreakFound()
```

**Returns:** `private boolean`

### getSplitPosition

```java
public int getSplitPosition()
```

**Returns:** `public int`

### getSplitStyle

```java
public Style getSplitStyle()
```

**Returns:** `public Style`

### addToOffset

```java
public void addToOffset(int p_92475_)
```

**Parameters:**

- `p_92475_` (`int`)

**Returns:** `public void`

### LineComponent

```java
public LineComponent(String p_92488_, Style p_92489_)
```

**Parameters:**

- `p_92488_` (`String`)
- `p_92489_` (`Style`)

**Returns:** `public`

### visit

```java
public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_92493_)
```

**Parameters:**

- `p_92493_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `Optional<T>`

### visit

```java
public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_92495_, Style p_92496_)
```

**Parameters:**

- `p_92495_` (`FormattedText.StyledContentConsumer<T>`)
- `p_92496_` (`Style`)

**Returns:** `Optional<T>`

### accept

```java
void accept(Style p_92500_, int p_92501_, int p_92502_)
```

**Parameters:**

- `p_92500_` (`Style`)
- `p_92501_` (`int`)
- `p_92502_` (`int`)

### WidthLimitedCharSink

```java
public WidthLimitedCharSink(float p_92508_)
```

**Parameters:**

- `p_92508_` (`float`)

**Returns:** `public`

### accept

```java
public boolean accept(int p_92511_, Style p_92512_, int p_92513_)
```

**Parameters:**

- `p_92511_` (`int`)
- `p_92512_` (`Style`)
- `p_92513_` (`int`)

**Returns:** `boolean`

### getPosition

```java
public int getPosition()
```

**Returns:** `public int`

### resetPosition

```java
public void resetPosition()
```

**Returns:** `public void`

### getWidth

```java
float getWidth(int p_92516_, Style p_92517_)
```

**Parameters:**

- `p_92516_` (`int`)
- `p_92517_` (`Style`)

**Returns:** `float`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LinePosConsumer` | interface |  |
| `WidthProvider` | interface |  |
