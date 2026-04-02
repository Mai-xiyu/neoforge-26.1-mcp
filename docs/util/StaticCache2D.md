# StaticCache2D

**Package:** `net.minecraft.util`
**Type:** class<T>

## Methods

### create

```java
<T> public static <T> StaticCache2D<T> create(int p_347579_, int p_347687_, int p_347693_, StaticCache2D.Initializer<T> p_347478_)
```

**Parameters:**

- `p_347579_` (`int`)
- `p_347687_` (`int`)
- `p_347693_` (`int`)
- `p_347478_` (`StaticCache2D.Initializer<T>`)

**Returns:** `public static <T> StaticCache2D<T>`

### StaticCache2D

```java
private StaticCache2D(int p_347480_, int p_347568_, int p_347475_, int p_347530_, StaticCache2D.Initializer<T> p_347453_)
```

**Parameters:**

- `p_347480_` (`int`)
- `p_347568_` (`int`)
- `p_347475_` (`int`)
- `p_347530_` (`int`)
- `p_347453_` (`StaticCache2D.Initializer<T>`)

**Returns:** `private`

### forEach

```java
public void forEach(Consumer<T> p_347572_)
```

**Parameters:**

- `p_347572_` (`Consumer<T>`)

**Returns:** `public void`

### get

```java
public T get(int p_347699_, int p_347563_)
```

**Parameters:**

- `p_347699_` (`int`)
- `p_347563_` (`int`)

**Returns:** `public T`

### contains

```java
public boolean contains(int p_347591_, int p_347645_)
```

**Parameters:**

- `p_347591_` (`int`)
- `p_347645_` (`int`)

**Returns:** `public boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### getIndex

```java
private int getIndex(int p_347703_, int p_347664_)
```

**Parameters:**

- `p_347703_` (`int`)
- `p_347664_` (`int`)

**Returns:** `private int`

### get

```java
T get(int p_347711_, int p_347489_)
```

**Parameters:**

- `p_347711_` (`int`)
- `p_347489_` (`int`)

**Returns:** `T`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Initializer` | interface |  |
