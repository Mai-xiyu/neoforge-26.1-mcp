# ToFloatFunction

**Package:** `net.minecraft.util`
**Type:** interface<C>

## Methods

### apply

```java
float apply(C p_184786_)
```

**Parameters:**

- `p_184786_` (`C`)

**Returns:** `float`

### minValue

```java
float minValue()
```

**Returns:** `float`

### maxValue

```java
float maxValue()
```

**Returns:** `float`

### createUnlimited

```java
static ToFloatFunction<Float> createUnlimited(Float2FloatFunction p_216476_)
```

**Parameters:**

- `p_216476_` (`Float2FloatFunction`)

**Returns:** `static ToFloatFunction<Float>`

### apply

```java
public float apply(Float p_216483_)
```

**Parameters:**

- `p_216483_` (`Float`)

**Returns:** `public float`

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

### comap

```java
<C2> default <C2> ToFloatFunction<C2> comap(Function<C2, C> p_216478_)
```

**Parameters:**

- `p_216478_` (`Function<C2, C>`)

**Returns:** `default <C2> ToFloatFunction<C2>`

### apply

```java
public float apply(C2 p_216496_)
```

**Parameters:**

- `p_216496_` (`C2`)

**Returns:** `float`

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
