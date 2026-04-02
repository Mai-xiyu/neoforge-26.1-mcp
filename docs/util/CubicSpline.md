# CubicSpline

**Package:** `net.minecraft.util`
**Type:** interface<C, I extends ToFloatFunction<C>> extends ToFloatFunction<C>

## Methods

### parityString

```java
String parityString()
```

**Returns:** `String`

### mapAll

```java
CubicSpline<C, I> mapAll(CubicSpline.CoordinateVisitor<I> p_211579_)
```

**Parameters:**

- `p_211579_` (`CubicSpline.CoordinateVisitor<I>`)

**Returns:** `CubicSpline<C, I>`

### codec

```java
static <C, I extends ToFloatFunction<C>> Codec<CubicSpline<C, I>> codec(Codec<I> p_184263_)
```

**Parameters:**

- `p_184263_` (`Codec<I>`)

**Returns:** `static <C, I extends ToFloatFunction<C>> Codec<CubicSpline<C, I>>`

### constant

```java
static <C, I extends ToFloatFunction<C>> CubicSpline<C, I> constant(float p_184240_)
```

**Parameters:**

- `p_184240_` (`float`)

**Returns:** `static <C, I extends ToFloatFunction<C>> CubicSpline<C, I>`

### builder

```java
static <C, I extends ToFloatFunction<C>> CubicSpline.Builder<C, I> builder(I p_184253_)
```

**Parameters:**

- `p_184253_` (`I`)

**Returns:** `static <C, I extends ToFloatFunction<C>> CubicSpline.Builder<C, I>`

### builder

```java
static <C, I extends ToFloatFunction<C>> CubicSpline.Builder<C, I> builder(I p_184255_, ToFloatFunction<Float> p_184256_)
```

**Parameters:**

- `p_184255_` (`I`)
- `p_184256_` (`ToFloatFunction<Float>`)

**Returns:** `static <C, I extends ToFloatFunction<C>> CubicSpline.Builder<C, I>`

### Builder

```java
protected Builder(I p_184293_)
```

**Parameters:**

- `p_184293_` (`I`)

**Returns:** `protected`

### this

```java
 this()
```

**Returns:** ``

### Builder

```java
protected Builder(I p_184295_, ToFloatFunction<Float> p_184296_)
```

**Parameters:**

- `p_184295_` (`I`)
- `p_184296_` (`ToFloatFunction<Float>`)

**Returns:** `protected`

### addPoint

```java
public CubicSpline.Builder<C, I> addPoint(float p_216115_, float p_216116_)
```

**Parameters:**

- `p_216115_` (`float`)
- `p_216116_` (`float`)

**Returns:** `public CubicSpline.Builder<C, I>`

### addPoint

```java
public CubicSpline.Builder<C, I> addPoint(float p_184299_, float p_184300_, float p_184301_)
```

**Parameters:**

- `p_184299_` (`float`)
- `p_184300_` (`float`)
- `p_184301_` (`float`)

**Returns:** `public CubicSpline.Builder<C, I>`

### addPoint

```java
public CubicSpline.Builder<C, I> addPoint(float p_216118_, CubicSpline<C, I> p_216119_)
```

**Parameters:**

- `p_216118_` (`float`)
- `p_216119_` (`CubicSpline<C, I>`)

**Returns:** `public CubicSpline.Builder<C, I>`

### addPoint

```java
private CubicSpline.Builder<C, I> addPoint(float p_184303_, CubicSpline<C, I> p_184304_, float p_184305_)
```

**Parameters:**

- `p_184303_` (`float`)
- `p_184304_` (`CubicSpline<C, I>`)
- `p_184305_` (`float`)

**Returns:** `private CubicSpline.Builder<C, I>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Please register points in ascending order")
```

**Parameters:**

- `order"` (`"Please register points in ascending`)

**Returns:** `throw new`

### build

```java
public CubicSpline<C, I> build()
```

**Returns:** `public CubicSpline<C, I>`

### IllegalStateException

```java
throw new IllegalStateException("No elements added")
```

**Parameters:**

- `added"` (`"No elements`)

**Returns:** `throw new`

### apply

```java
public float apply(C p_184313_)
```

**Parameters:**

- `p_184313_` (`C`)

**Returns:** `float`

### parityString

```java
public String parityString()
```

**Returns:** `String`

### minValue

```java
public float minValue()
```

**Returns:** `float`

### maxValue

```java
public float maxValue()
```

**Returns:** `float`

### mapAll

```java
public CubicSpline<C, I> mapAll(CubicSpline.CoordinateVisitor<I> p_211581_)
```

**Parameters:**

- `p_211581_` (`CubicSpline.CoordinateVisitor<I>`)

**Returns:** `CubicSpline<C, I>`

### visit

```java
I visit(I p_216123_)
```

**Parameters:**

- `p_216123_` (`I`)

**Returns:** `I`

### Multipoint

```java
public Multipoint(I coordinate, float[] locations, List<CubicSpline<C, I>> values, float[] derivatives, float minValue, float maxValue)
```

**Parameters:**

- `coordinate` (`I`)
- `locations` (`float[]`)
- `values` (`List<CubicSpline<C, I>>`)
- `derivatives` (`float[]`)
- `minValue` (`float`)
- `maxValue` (`float`)

**Returns:** `public`

### validateSizes

```java
 validateSizes()
```

**Returns:** ``

### create

```java
static <C, I extends ToFloatFunction<C>> CubicSpline.Multipoint<C, I> create(I p_216144_, float[] p_216145_, List<CubicSpline<C, I>> p_216146_, float[] p_216147_)
```

**Parameters:**

- `p_216144_` (`I`)
- `p_216145_` (`float[]`)
- `p_216146_` (`List<CubicSpline<C, I>>`)
- `p_216147_` (`float[]`)

**Returns:** `static <C, I extends ToFloatFunction<C>> CubicSpline.Multipoint<C, I>`

### validateSizes

```java
 validateSizes()
```

**Returns:** ``

### linearExtend

```java
private static float linearExtend(float p_216134_, float[] p_216135_, float p_216136_, float[] p_216137_, int p_216138_)
```

**Parameters:**

- `p_216134_` (`float`)
- `p_216135_` (`float[]`)
- `p_216136_` (`float`)
- `p_216137_` (`float[]`)
- `p_216138_` (`int`)

**Returns:** `private static float`

### validateSizes

```java
private static <C, I extends ToFloatFunction<C>> void validateSizes(float[] p_216152_, List<CubicSpline<C, I>> p_216153_, float[] p_216154_)
```

**Parameters:**

- `p_216152_` (`float[]`)
- `p_216153_` (`List<CubicSpline<C, I>>`)
- `p_216154_` (`float[]`)

**Returns:** `private static <C, I extends ToFloatFunction<C>> void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Cannot create a multipoint spline with no points")
```

**Parameters:**

- `points"` (`"Cannot create a multipoint spline with no`)

**Returns:** `throw new`

### apply

```java
public float apply(C p_184340_)
```

**Parameters:**

- `p_184340_` (`C`)

**Returns:** `float`

### findIntervalStart

```java
private static int findIntervalStart(float[] p_216149_, float p_216150_)
```

**Parameters:**

- `p_216149_` (`float[]`)
- `p_216150_` (`float`)

**Returns:** `private static int`

### parityString

```java
public String parityString()
```

**Returns:** `String`

### toString

```java
private String toString(float[] p_184335_)
```

**Parameters:**

- `p_184335_` (`float[]`)

**Returns:** `private String`

### mapAll

```java
public CubicSpline<C, I> mapAll(CubicSpline.CoordinateVisitor<I> p_211585_)
```

**Parameters:**

- `p_211585_` (`CubicSpline.CoordinateVisitor<I>`)

**Returns:** `CubicSpline<C, I>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `Constant` | record |  |
| `CoordinateVisitor` | interface |  |
| `Multipoint` | record |  |
