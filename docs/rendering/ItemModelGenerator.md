# ItemModelGenerator

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LAYERS` | `List<String>` |  |

## Methods

### generateBlockModel

```java
public BlockModel generateBlockModel(Function<Material, TextureAtlasSprite> p_111671_, BlockModel p_111672_)
```

**Parameters:**

- `p_111671_` (`Function<Material, TextureAtlasSprite>`)
- `p_111672_` (`BlockModel`)

**Returns:** `public BlockModel`

### processFrames

```java
public List<BlockElement> processFrames(int p_111639_, String p_111640_, SpriteContents p_251768_)
```

**Parameters:**

- `p_111639_` (`int`)
- `p_111640_` (`String`)
- `p_251768_` (`SpriteContents`)

**Returns:** `public List<BlockElement>`

### createSideElements

```java
private List<BlockElement> createSideElements(SpriteContents p_248810_, String p_111663_, int p_111664_)
```

**Parameters:**

- `p_248810_` (`SpriteContents`)
- `p_111663_` (`String`)
- `p_111664_` (`int`)

**Returns:** `private List<BlockElement>`

### getSpans

```java
private List<ItemModelGenerator.Span> getSpans(SpriteContents p_250338_)
```

**Parameters:**

- `p_250338_` (`SpriteContents`)

**Returns:** `private List<ItemModelGenerator.Span>`

### checkTransition

```java
private void checkTransition(ItemModelGenerator.SpanFacing p_251572_, List<ItemModelGenerator.Span> p_248882_, SpriteContents p_249847_, int p_250616_, int p_251416_, int p_249664_, int p_250174_, int p_250897_, boolean p_248773_)
```

**Parameters:**

- `p_251572_` (`ItemModelGenerator.SpanFacing`)
- `p_248882_` (`List<ItemModelGenerator.Span>`)
- `p_249847_` (`SpriteContents`)
- `p_250616_` (`int`)
- `p_251416_` (`int`)
- `p_249664_` (`int`)
- `p_250174_` (`int`)
- `p_250897_` (`int`)
- `p_248773_` (`boolean`)

**Returns:** `private void`

### createOrExpandSpan

```java
private void createOrExpandSpan(List<ItemModelGenerator.Span> p_111666_, ItemModelGenerator.SpanFacing p_111667_, int p_111668_, int p_111669_)
```

**Parameters:**

- `p_111666_` (`List<ItemModelGenerator.Span>`)
- `p_111667_` (`ItemModelGenerator.SpanFacing`)
- `p_111668_` (`int`)
- `p_111669_` (`int`)

**Returns:** `private void`

### isTransparent

```java
private boolean isTransparent(SpriteContents p_249650_, int p_250692_, int p_251914_, int p_252343_, int p_250258_, int p_248997_)
```

**Parameters:**

- `p_249650_` (`SpriteContents`)
- `p_250692_` (`int`)
- `p_251914_` (`int`)
- `p_252343_` (`int`)
- `p_250258_` (`int`)
- `p_248997_` (`int`)

**Returns:** `private boolean`

### Span

```java
public Span(ItemModelGenerator.SpanFacing p_111680_, int p_111681_, int p_111682_)
```

**Parameters:**

- `p_111680_` (`ItemModelGenerator.SpanFacing`)
- `p_111681_` (`int`)
- `p_111682_` (`int`)

**Returns:** `public`

### expand

```java
public void expand(int p_111685_)
```

**Parameters:**

- `p_111685_` (`int`)

**Returns:** `public void`

### getFacing

```java
public ItemModelGenerator.SpanFacing getFacing()
```

**Returns:** `public ItemModelGenerator.SpanFacing`

### getMin

```java
public int getMin()
```

**Returns:** `public int`

### getMax

```java
public int getMax()
```

**Returns:** `public int`

### getAnchor

```java
public int getAnchor()
```

**Returns:** `public int`

### RIGHT

```java
, RIGHT()
```

**Returns:** `,`

### SpanFacing

```java
private SpanFacing(Direction p_111701_, int p_111702_, int p_111703_)
```

**Parameters:**

- `p_111701_` (`Direction`)
- `p_111702_` (`int`)
- `p_111703_` (`int`)

**Returns:** `private`

### getDirection

```java
public Direction getDirection()
```

**Returns:** `public Direction`

### getXOffset

```java
public int getXOffset()
```

**Returns:** `public int`

### getYOffset

```java
public int getYOffset()
```

**Returns:** `public int`

### isHorizontal

```java
boolean isHorizontal()
```

**Returns:** `boolean`
