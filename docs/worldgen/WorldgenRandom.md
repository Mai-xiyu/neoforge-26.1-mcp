# WorldgenRandom

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class
**Extends:** `LegacyRandomSource`

## Methods

### WorldgenRandom

```java
public WorldgenRandom(RandomSource p_224680_)
```

**Parameters:**

- `p_224680_` (`RandomSource`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getCount

```java
public int getCount()
```

**Returns:** `public int`

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

### next

```java
public int next(int p_64708_)
```

**Parameters:**

- `p_64708_` (`int`)

**Returns:** `int`

### setSeed

```java
public synchronized void setSeed(long p_190073_)
```

**Parameters:**

- `p_190073_` (`long`)

### setDecorationSeed

```java
public long setDecorationSeed(long p_64691_, int p_64692_, int p_64693_)
```

**Parameters:**

- `p_64691_` (`long`)
- `p_64692_` (`int`)
- `p_64693_` (`int`)

**Returns:** `public long`

### setFeatureSeed

```java
public void setFeatureSeed(long p_190065_, int p_190066_, int p_190067_)
```

**Parameters:**

- `p_190065_` (`long`)
- `p_190066_` (`int`)
- `p_190067_` (`int`)

**Returns:** `public void`

### setLargeFeatureSeed

```java
public void setLargeFeatureSeed(long p_190069_, int p_190070_, int p_190071_)
```

**Parameters:**

- `p_190069_` (`long`)
- `p_190070_` (`int`)
- `p_190071_` (`int`)

**Returns:** `public void`

### setLargeFeatureWithSalt

```java
public void setLargeFeatureWithSalt(long p_190059_, int p_190060_, int p_190061_, int p_190062_)
```

**Parameters:**

- `p_190059_` (`long`)
- `p_190060_` (`int`)
- `p_190061_` (`int`)
- `p_190062_` (`int`)

**Returns:** `public void`

### seedSlimeChunk

```java
public static RandomSource seedSlimeChunk(int p_224682_, int p_224683_, long p_224684_, long p_224685_)
```

**Parameters:**

- `p_224682_` (`int`)
- `p_224683_` (`int`)
- `p_224684_` (`long`)
- `p_224685_` (`long`)

**Returns:** `public static RandomSource`

### XOROSHIRO

```java
, XOROSHIRO()
```

**Returns:** `,`

### Algorithm

```java
private Algorithm(LongFunction<RandomSource> p_190082_)
```

**Parameters:**

- `p_190082_` (`LongFunction<RandomSource>`)

**Returns:** `private`

### newInstance

```java
public RandomSource newInstance(long p_224688_)
```

**Parameters:**

- `p_224688_` (`long`)

**Returns:** `public RandomSource`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Algorithm` | enum |  |
