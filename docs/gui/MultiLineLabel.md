# MultiLineLabel

**Package:** `net.minecraft.client.gui.components`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### renderCentered

```java
public void renderCentered(GuiGraphics p_283287_, int p_94383_, int p_94384_)
```

**Parameters:**

- `p_283287_` (`GuiGraphics`)
- `p_94383_` (`int`)
- `p_94384_` (`int`)

### renderCentered

```java
public void renderCentered(GuiGraphics p_283208_, int p_210825_, int p_210826_, int p_210827_, int p_210828_)
```

**Parameters:**

- `p_283208_` (`GuiGraphics`)
- `p_210825_` (`int`)
- `p_210826_` (`int`)
- `p_210827_` (`int`)
- `p_210828_` (`int`)

### renderLeftAligned

```java
public void renderLeftAligned(GuiGraphics p_283077_, int p_94379_, int p_94380_, int p_282157_, int p_282742_)
```

**Parameters:**

- `p_283077_` (`GuiGraphics`)
- `p_94379_` (`int`)
- `p_94380_` (`int`)
- `p_282157_` (`int`)
- `p_282742_` (`int`)

### renderLeftAlignedNoShadow

```java
public int renderLeftAlignedNoShadow(GuiGraphics p_283645_, int p_94389_, int p_94390_, int p_94391_, int p_94392_)
```

**Parameters:**

- `p_283645_` (`GuiGraphics`)
- `p_94389_` (`int`)
- `p_94390_` (`int`)
- `p_94391_` (`int`)
- `p_94392_` (`int`)

**Returns:** `int`

### getLineCount

```java
public int getLineCount()
```

**Returns:** `int`

### getWidth

```java
public int getWidth()
```

**Returns:** `int`

### create

```java
static MultiLineLabel create(Font p_94351_, Component[]... p_94352_)
```

**Parameters:**

- `p_94351_` (`Font`)
- `p_94352_` (`Component[]...`)

**Returns:** `static MultiLineLabel`

### create

```java
return create()
```

**Returns:** `return`

### create

```java
static MultiLineLabel create(Font p_94346_, int p_94348_, Component[]... p_352900_)
```

**Parameters:**

- `p_94346_` (`Font`)
- `p_94348_` (`int`)
- `p_352900_` (`Component[]...`)

**Returns:** `static MultiLineLabel`

### create

```java
return create()
```

**Returns:** `return`

### create

```java
static MultiLineLabel create(Font p_169037_, Component p_352901_, int p_352917_)
```

**Parameters:**

- `p_169037_` (`Font`)
- `p_352901_` (`Component`)
- `p_352917_` (`int`)

**Returns:** `static MultiLineLabel`

### create

```java
return create()
```

**Returns:** `return`

### create

```java
static MultiLineLabel create(Font p_94342_, int p_94344_, int p_352914_, Component[]... p_352955_)
```

**Parameters:**

- `p_94342_` (`Font`)
- `p_94344_` (`int`)
- `p_352914_` (`int`)
- `p_352955_` (`Component[]...`)

**Returns:** `static MultiLineLabel`

### renderCentered

```java
public void renderCentered(GuiGraphics p_281603_, int p_281267_, int p_281819_)
```

**Parameters:**

- `p_281603_` (`GuiGraphics`)
- `p_281267_` (`int`)
- `p_281819_` (`int`)

### renderCentered

```java
public void renderCentered(GuiGraphics p_283492_, int p_283184_, int p_282078_, int p_352944_, int p_352919_)
```

**Parameters:**

- `p_283492_` (`GuiGraphics`)
- `p_283184_` (`int`)
- `p_282078_` (`int`)
- `p_352944_` (`int`)
- `p_352919_` (`int`)

### renderLeftAligned

```java
public void renderLeftAligned(GuiGraphics p_282318_, int p_283665_, int p_283416_, int p_281919_, int p_281686_)
```

**Parameters:**

- `p_282318_` (`GuiGraphics`)
- `p_283665_` (`int`)
- `p_283416_` (`int`)
- `p_281919_` (`int`)
- `p_281686_` (`int`)

### renderLeftAlignedNoShadow

```java
public int renderLeftAlignedNoShadow(GuiGraphics p_281782_, int p_282841_, int p_283554_, int p_282768_, int p_283499_)
```

**Parameters:**

- `p_281782_` (`GuiGraphics`)
- `p_282841_` (`int`)
- `p_283554_` (`int`)
- `p_282768_` (`int`)
- `p_283499_` (`int`)

**Returns:** `int`

### getSplitMessage

```java
private List<MultiLineLabel.TextAndWidth> getSplitMessage()
```

**Returns:** `private List<MultiLineLabel.TextAndWidth>`

### getLineCount

```java
public int getLineCount()
```

**Returns:** `int`

### getWidth

```java
public int getWidth()
```

**Returns:** `int`

### renderCentered

```java
void renderCentered(GuiGraphics p_281785_, int p_94337_, int p_94338_)
```

**Parameters:**

- `p_281785_` (`GuiGraphics`)
- `p_94337_` (`int`)
- `p_94338_` (`int`)

### renderCentered

```java
void renderCentered(GuiGraphics p_281749_, int p_94334_, int p_94335_, int p_352960_, int p_352902_)
```

**Parameters:**

- `p_281749_` (`GuiGraphics`)
- `p_94334_` (`int`)
- `p_94335_` (`int`)
- `p_352960_` (`int`)
- `p_352902_` (`int`)

### renderLeftAligned

```java
void renderLeftAligned(GuiGraphics p_282655_, int p_94365_, int p_94366_, int p_94367_, int p_94368_)
```

**Parameters:**

- `p_282655_` (`GuiGraphics`)
- `p_94365_` (`int`)
- `p_94366_` (`int`)
- `p_94367_` (`int`)
- `p_94368_` (`int`)

### renderLeftAlignedNoShadow

```java
int renderLeftAlignedNoShadow(GuiGraphics p_281982_, int p_94354_, int p_94355_, int p_94356_, int p_94357_)
```

**Parameters:**

- `p_281982_` (`GuiGraphics`)
- `p_94354_` (`int`)
- `p_94355_` (`int`)
- `p_94356_` (`int`)
- `p_94357_` (`int`)

**Returns:** `int`

### getLineCount

```java
int getLineCount()
```

**Returns:** `int`

### getWidth

```java
int getWidth()
```

**Returns:** `int`

### TextAndWidth

```java
public static record TextAndWidth(FormattedCharSequence text, int width)
```

**Parameters:**

- `text` (`FormattedCharSequence`)
- `width` (`int`)

**Returns:** `record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TextAndWidth` | record |  |
