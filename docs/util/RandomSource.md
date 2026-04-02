# RandomSource

**Package:** `net.minecraft.util`
**Type:** interface

## Methods

### create

```java
static RandomSource create()
```

**Returns:** `static RandomSource`

### createThreadSafe

```java
static RandomSource createThreadSafe()
```

**Returns:** `RandomSource`

### create

```java
static RandomSource create(long p_216336_)
```

**Parameters:**

- `p_216336_` (`long`)

**Returns:** `static RandomSource`

### LegacyRandomSource

```java
return new LegacyRandomSource()
```

**Returns:** `return new`

### createNewThreadLocalInstance

```java
static RandomSource createNewThreadLocalInstance()
```

**Returns:** `static RandomSource`

### fork

```java
RandomSource fork()
```

**Returns:** `RandomSource`

### forkPositional

```java
PositionalRandomFactory forkPositional()
```

**Returns:** `PositionalRandomFactory`

### setSeed

```java
void setSeed(long p_216342_)
```

**Parameters:**

- `p_216342_` (`long`)

### nextInt

```java
int nextInt()
```

**Returns:** `int`

### nextInt

```java
int nextInt(int p_216331_)
```

**Parameters:**

- `p_216331_` (`int`)

**Returns:** `int`

### nextIntBetweenInclusive

```java
default int nextIntBetweenInclusive(int p_216333_, int p_216334_)
```

**Parameters:**

- `p_216333_` (`int`)
- `p_216334_` (`int`)

**Returns:** `default int`

### nextLong

```java
long nextLong()
```

**Returns:** `long`

### nextBoolean

```java
boolean nextBoolean()
```

**Returns:** `boolean`

### nextFloat

```java
float nextFloat()
```

**Returns:** `float`

### nextDouble

```java
double nextDouble()
```

**Returns:** `double`

### nextGaussian

```java
double nextGaussian()
```

**Returns:** `double`

### triangle

```java
default double triangle(double p_216329_, double p_216330_)
```

**Parameters:**

- `p_216329_` (`double`)
- `p_216330_` (`double`)

**Returns:** `default double`

### consumeCount

```java
default void consumeCount(int p_216338_)
```

**Parameters:**

- `p_216338_` (`int`)

**Returns:** `default void`

### nextInt

```java
default int nextInt(int p_216340_, int p_216341_)
```

**Parameters:**

- `p_216340_` (`int`)
- `p_216341_` (`int`)

**Returns:** `default int`

### IllegalArgumentException

```java
throw new IllegalArgumentException("bound - origin is non positive")
```

**Parameters:**

- `positive"` (`"bound - origin is non`)

**Returns:** `throw new`
