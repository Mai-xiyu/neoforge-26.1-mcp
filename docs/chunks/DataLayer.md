# DataLayer

**Package:** `net.minecraft.world.level.chunk`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LAYER_COUNT` | `int` |  |
| `LAYER_SIZE` | `int` |  |
| `SIZE` | `int` |  |

## Methods

### DataLayer

```java
public DataLayer()
```

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### DataLayer

```java
public DataLayer(int p_62554_)
```

**Parameters:**

- `p_62554_` (`int`)

**Returns:** `public`

### DataLayer

```java
public DataLayer(byte[] p_62556_)
```

**Parameters:**

- `p_62556_` (`byte[]`)

**Returns:** `public`

### get

```java
public int get(int p_62561_, int p_62562_, int p_62563_)
```

**Parameters:**

- `p_62561_` (`int`)
- `p_62562_` (`int`)
- `p_62563_` (`int`)

**Returns:** `public int`

### set

```java
public void set(int p_62565_, int p_62566_, int p_62567_, int p_62568_)
```

**Parameters:**

- `p_62565_` (`int`)
- `p_62566_` (`int`)
- `p_62567_` (`int`)
- `p_62568_` (`int`)

**Returns:** `public void`

### getIndex

```java
private static int getIndex(int p_62572_, int p_62573_, int p_62574_)
```

**Parameters:**

- `p_62572_` (`int`)
- `p_62573_` (`int`)
- `p_62574_` (`int`)

**Returns:** `private static int`

### get

```java
private int get(int p_62571_)
```

**Parameters:**

- `p_62571_` (`int`)

**Returns:** `private int`

### set

```java
private void set(int p_62558_, int p_62559_)
```

**Parameters:**

- `p_62558_` (`int`)
- `p_62559_` (`int`)

**Returns:** `private void`

### getNibbleIndex

```java
private static int getNibbleIndex(int p_182482_)
```

**Parameters:**

- `p_182482_` (`int`)

**Returns:** `private static int`

### getByteIndex

```java
private static int getByteIndex(int p_62579_)
```

**Parameters:**

- `p_62579_` (`int`)

**Returns:** `private static int`

### fill

```java
public void fill(int p_285142_)
```

**Parameters:**

- `p_285142_` (`int`)

**Returns:** `public void`

### packFilled

```java
private static byte packFilled(int p_282176_)
```

**Parameters:**

- `p_282176_` (`int`)

**Returns:** `private static byte`

### getData

```java
public byte[] getData()
```

**Returns:** `public byte[]`

### copy

```java
public DataLayer copy()
```

**Returns:** `public DataLayer`

### toString

```java
public String toString()
```

**Returns:** `String`

### layerToString

```java
public String layerToString(int p_156342_)
```

**Parameters:**

- `p_156342_` (`int`)

**Returns:** `String`

### isDefinitelyHomogenous

```java
public boolean isDefinitelyHomogenous()
```

**Returns:** `public boolean`

### isDefinitelyFilledWith

```java
public boolean isDefinitelyFilledWith(int p_281763_)
```

**Parameters:**

- `p_281763_` (`int`)

**Returns:** `public boolean`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`
