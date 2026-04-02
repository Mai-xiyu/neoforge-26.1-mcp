# LegacyRandomSource

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class
**Implements:** `BitRandomSource`

## Methods

### LegacyRandomSource

```java
public LegacyRandomSource(long p_188578_)
```

**Parameters:**

- `p_188578_` (`long`)

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
public void setSeed(long p_188585_)
```

**Parameters:**

- `p_188585_` (`long`)

### next

```java
public int next(int p_188581_)
```

**Parameters:**

- `p_188581_` (`int`)

**Returns:** `int`

### nextGaussian

```java
public double nextGaussian()
```

**Returns:** `double`

### LegacyPositionalRandomFactory

```java
public LegacyPositionalRandomFactory(long p_188588_)
```

**Parameters:**

- `p_188588_` (`long`)

**Returns:** `public`

### at

```java
public RandomSource at(int p_224198_, int p_224199_, int p_224200_)
```

**Parameters:**

- `p_224198_` (`int`)
- `p_224199_` (`int`)
- `p_224200_` (`int`)

**Returns:** `RandomSource`

### LegacyRandomSource

```java
return new LegacyRandomSource()
```

**Returns:** `return new`

### fromHashOf

```java
public RandomSource fromHashOf(String p_224202_)
```

**Parameters:**

- `p_224202_` (`String`)

**Returns:** `RandomSource`

### fromSeed

```java
public RandomSource fromSeed(long p_348617_)
```

**Parameters:**

- `p_348617_` (`long`)

**Returns:** `RandomSource`

### LegacyRandomSource

```java
return new LegacyRandomSource()
```

**Returns:** `return new`

### parityConfigString

```java
public void parityConfigString(StringBuilder p_188596_)
```

**Parameters:**

- `p_188596_` (`StringBuilder`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LegacyPositionalRandomFactory` | class |  |
