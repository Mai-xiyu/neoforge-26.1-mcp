# Stitcher

**Package:** `net.minecraft.client.renderer.texture`
**Type:** class<T extends Stitcher.Entry>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### Stitcher

```java
public Stitcher(int p_118171_, int p_118172_, int p_118173_)
```

**Parameters:**

- `p_118171_` (`int`)
- `p_118172_` (`int`)
- `p_118173_` (`int`)

**Returns:** `public`

### getWidth

```java
public int getWidth()
```

**Returns:** `public int`

### getHeight

```java
public int getHeight()
```

**Returns:** `public int`

### registerSprite

```java
public void registerSprite(T p_249253_)
```

**Parameters:**

- `p_249253_` (`T`)

**Returns:** `public void`

### stitch

```java
public void stitch()
```

**Returns:** `public void`

### gatherSprites

```java
public void gatherSprites(Stitcher.SpriteLoader<T> p_118181_)
```

**Parameters:**

- `p_118181_` (`Stitcher.SpriteLoader<T>`)

**Returns:** `public void`

### smallestFittingMinTexel

```java
static int smallestFittingMinTexel(int p_118189_, int p_118190_)
```

**Parameters:**

- `p_118189_` (`int`)
- `p_118190_` (`int`)

**Returns:** `static int`

### addToStorage

```java
private boolean addToStorage(Stitcher.Holder<T> p_118179_)
```

**Parameters:**

- `p_118179_` (`Stitcher.Holder<T>`)

**Returns:** `private boolean`

### expand

```java
private boolean expand(Stitcher.Holder<T> p_118192_)
```

**Parameters:**

- `p_118192_` (`Stitcher.Holder<T>`)

**Returns:** `private boolean`

### width

```java
int width()
```

**Returns:** `int`

### height

```java
int height()
```

**Returns:** `int`

### name

```java
ResourceLocation name()
```

**Returns:** `ResourceLocation`

### Holder

```java
public Holder(T p_250261_, int p_250127_)
```

**Parameters:**

- `p_250261_` (`T`)
- `p_250127_` (`int`)

**Returns:** `public`

### Region

```java
public Region(int p_118216_, int p_118217_, int p_118218_, int p_118219_)
```

**Parameters:**

- `p_118216_` (`int`)
- `p_118217_` (`int`)
- `p_118218_` (`int`)
- `p_118219_` (`int`)

**Returns:** `public`

### getX

```java
public int getX()
```

**Returns:** `public int`

### getY

```java
public int getY()
```

**Returns:** `public int`

### add

```java
public boolean add(Stitcher.Holder<T> p_118222_)
```

**Parameters:**

- `p_118222_` (`Stitcher.Holder<T>`)

**Returns:** `public boolean`

### walk

```java
public void walk(Stitcher.SpriteLoader<T> p_250195_)
```

**Parameters:**

- `p_250195_` (`Stitcher.SpriteLoader<T>`)

**Returns:** `public void`

### toString

```java
public String toString()
```

**Returns:** `String`

### load

```java
void load(T p_249434_, int p_118230_, int p_118231_)
```

**Parameters:**

- `p_249434_` (`T`)
- `p_118230_` (`int`)
- `p_118231_` (`int`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Entry` | interface |  |
| `Region` | class |  |
| `SpriteLoader` | interface |  |
