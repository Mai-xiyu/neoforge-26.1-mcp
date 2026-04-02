# ThreadSafeLegacyRandomSource

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class
**Implements:** `BitRandomSource`
**Annotations:** `@Deprecated`

## Methods

### ThreadSafeLegacyRandomSource

```java
public ThreadSafeLegacyRandomSource(long p_224664_)
```

**Parameters:**

- `p_224664_` (`long`)

**Returns:** `public`

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
public void setSeed(long p_224666_)
```

**Parameters:**

- `p_224666_` (`long`)

### next

```java
public int next(int p_224668_)
```

**Parameters:**

- `p_224668_` (`int`)

**Returns:** `int`

### nextGaussian

```java
public double nextGaussian()
```

**Returns:** `double`
