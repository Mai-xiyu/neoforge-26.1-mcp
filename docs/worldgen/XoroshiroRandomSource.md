# XoroshiroRandomSource

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class
**Implements:** `RandomSource`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<XoroshiroRandomSource>` |  |

## Methods

### XoroshiroRandomSource

```java
public XoroshiroRandomSource(long p_190102_)
```

**Parameters:**

- `p_190102_` (`long`)

**Returns:** `public`

### XoroshiroRandomSource

```java
public XoroshiroRandomSource(RandomSupport.Seed128bit p_289014_)
```

**Parameters:**

- `p_289014_` (`RandomSupport.Seed128bit`)

**Returns:** `public`

### XoroshiroRandomSource

```java
public XoroshiroRandomSource(long p_190104_, long p_190105_)
```

**Parameters:**

- `p_190104_` (`long`)
- `p_190105_` (`long`)

**Returns:** `public`

### XoroshiroRandomSource

```java
private XoroshiroRandomSource(Xoroshiro128PlusPlus p_287656_)
```

**Parameters:**

- `p_287656_` (`Xoroshiro128PlusPlus`)

**Returns:** `private`

### fork

```java
public RandomSource fork()
```

**Returns:** `RandomSource`

### forkPositional

```java
public PositionalRandomFactory forkPositional()
```

**Returns:** `PositionalRandomFactory`

### setSeed

```java
public void setSeed(long p_190121_)
```

**Parameters:**

- `p_190121_` (`long`)

### nextInt

```java
public int nextInt()
```

**Returns:** `int`

### nextInt

```java
public int nextInt(int p_190118_)
```

**Parameters:**

- `p_190118_` (`int`)

**Returns:** `int`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Bound must be positive")
```

**Parameters:**

- `positive"` (`"Bound must be`)

**Returns:** `throw new`

### nextLong

```java
public long nextLong()
```

**Returns:** `long`

### nextBoolean

```java
public boolean nextBoolean()
```

**Returns:** `boolean`

### nextFloat

```java
public float nextFloat()
```

**Returns:** `float`

### nextDouble

```java
public double nextDouble()
```

**Returns:** `double`

### nextGaussian

```java
public double nextGaussian()
```

**Returns:** `double`

### consumeCount

```java
public void consumeCount(int p_190111_)
```

**Parameters:**

- `p_190111_` (`int`)

### nextBits

```java
private long nextBits(int p_190108_)
```

**Parameters:**

- `p_190108_` (`int`)

**Returns:** `private long`

### XoroshiroPositionalRandomFactory

```java
public XoroshiroPositionalRandomFactory(long p_190127_, long p_190128_)
```

**Parameters:**

- `p_190127_` (`long`)
- `p_190128_` (`long`)

**Returns:** `public`

### at

```java
public RandomSource at(int p_224691_, int p_224692_, int p_224693_)
```

**Parameters:**

- `p_224691_` (`int`)
- `p_224692_` (`int`)
- `p_224693_` (`int`)

**Returns:** `RandomSource`

### XoroshiroRandomSource

```java
return new XoroshiroRandomSource()
```

**Returns:** `return new`

### fromHashOf

```java
public RandomSource fromHashOf(String p_224695_)
```

**Parameters:**

- `p_224695_` (`String`)

**Returns:** `RandomSource`

### fromSeed

```java
public RandomSource fromSeed(long p_348665_)
```

**Parameters:**

- `p_348665_` (`long`)

**Returns:** `RandomSource`

### XoroshiroRandomSource

```java
return new XoroshiroRandomSource(p_348665_ ^ this.seedLo, p_348665_ ^ this.seedHi)
```

**Parameters:**

- `this.seedLo` (`p_348665_ ^`)
- `this.seedHi` (`p_348665_ ^`)

**Returns:** `return new`

### parityConfigString

```java
public void parityConfigString(StringBuilder p_190136_)
```

**Parameters:**

- `p_190136_` (`StringBuilder`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `XoroshiroPositionalRandomFactory` | class |  |
