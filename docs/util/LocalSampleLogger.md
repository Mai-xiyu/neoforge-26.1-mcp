# LocalSampleLogger

**Package:** `net.minecraft.util.debugchart`
**Type:** class
**Extends:** `AbstractSampleLogger`
**Implements:** `SampleStorage`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CAPACITY` | `int` |  |

## Methods

### LocalSampleLogger

```java
public LocalSampleLogger(int p_324172_)
```

**Parameters:**

- `p_324172_` (`int`)

**Returns:** `public`

### this

```java
 this(new long[p_324172_])
```

**Parameters:**

- `long[p_324172_]` (`new`)

**Returns:** ``

### LocalSampleLogger

```java
public LocalSampleLogger(int p_323703_, long[] p_324179_)
```

**Parameters:**

- `p_323703_` (`int`)
- `p_324179_` (`long[]`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useSample

```java
protected void useSample()
```

### capacity

```java
public int capacity()
```

**Returns:** `int`

### size

```java
public int size()
```

**Returns:** `int`

### get

```java
public long get(int p_324212_)
```

**Parameters:**

- `p_324212_` (`int`)

**Returns:** `long`

### get

```java
public long get(int p_323840_, int p_323620_)
```

**Parameters:**

- `p_323840_` (`int`)
- `p_323620_` (`int`)

**Returns:** `long`

### IndexOutOfBoundsException

```java
throw new IndexOutOfBoundsException(p_323620_ + " out of bounds for dimensions " + along.length)
```

**Parameters:**

- `along.length` (`p_323620_ + " out of bounds for dimensions " +`)

**Returns:** `throw new`

### IndexOutOfBoundsException

```java
throw new IndexOutOfBoundsException(p_323840_ + " out of bounds for length " + this.size)
```

**Parameters:**

- `this.size` (`p_323840_ + " out of bounds for length " +`)

**Returns:** `throw new`

### wrapIndex

```java
private int wrapIndex(int p_324200_)
```

**Parameters:**

- `p_324200_` (`int`)

**Returns:** `private int`

### reset

```java
public void reset()
```
