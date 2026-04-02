# SingleThreadedRandomSource

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class
**Implements:** `BitRandomSource`

## Methods

### SingleThreadedRandomSource

```java
public SingleThreadedRandomSource(long p_189353_)
```

**Parameters:**

- `p_189353_` (`long`)

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
public void setSeed(long p_189360_)
```

**Parameters:**

- `p_189360_` (`long`)

### next

```java
public int next(int p_189356_)
```

**Parameters:**

- `p_189356_` (`int`)

**Returns:** `int`

### nextGaussian

```java
public double nextGaussian()
```

**Returns:** `double`
