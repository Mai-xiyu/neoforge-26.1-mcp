# NormalNoise

**Package:** `net.minecraft.world.level.levelgen.synth`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DIRECT_CODEC` | `Codec<NormalNoise.NoiseParameters>` |  |
| `CODEC` | `Codec<Holder<NormalNoise.NoiseParameters>>` |  |

## Methods

### createLegacyNetherBiome

```java
public static NormalNoise createLegacyNetherBiome(RandomSource p_230509_, NormalNoise.NoiseParameters p_230510_)
```

**Parameters:**

- `p_230509_` (`RandomSource`)
- `p_230510_` (`NormalNoise.NoiseParameters`)

**Returns:** `NormalNoise`

### NormalNoise

```java
return new NormalNoise()
```

**Returns:** `return new`

### create

```java
public static NormalNoise create(RandomSource p_230505_, int p_230506_, double[]... p_230507_)
```

**Parameters:**

- `p_230505_` (`RandomSource`)
- `p_230506_` (`int`)
- `p_230507_` (`double[]...`)

**Returns:** `public static NormalNoise`

### create

```java
public static NormalNoise create(RandomSource p_230512_, NormalNoise.NoiseParameters p_230513_)
```

**Parameters:**

- `p_230512_` (`RandomSource`)
- `p_230513_` (`NormalNoise.NoiseParameters`)

**Returns:** `public static NormalNoise`

### NormalNoise

```java
return new NormalNoise()
```

**Returns:** `return new`

### NormalNoise

```java
private NormalNoise(RandomSource p_230501_, NormalNoise.NoiseParameters p_230502_, boolean p_230503_)
```

**Parameters:**

- `p_230501_` (`RandomSource`)
- `p_230502_` (`NormalNoise.NoiseParameters`)
- `p_230503_` (`boolean`)

**Returns:** `private`

### maxValue

```java
public double maxValue()
```

**Returns:** `public double`

### expectedDeviation

```java
private static double expectedDeviation(int p_75385_)
```

**Parameters:**

- `p_75385_` (`int`)

**Returns:** `private static double`

### getValue

```java
public double getValue(double p_75381_, double p_75382_, double p_75383_)
```

**Parameters:**

- `p_75381_` (`double`)
- `p_75382_` (`double`)
- `p_75383_` (`double`)

**Returns:** `public double`

### parameters

```java
public NormalNoise.NoiseParameters parameters()
```

**Returns:** `public NormalNoise.NoiseParameters`

### parityConfigString

```java
public void parityConfigString(StringBuilder p_192847_)
```

**Parameters:**

- `p_192847_` (`StringBuilder`)

### NoiseParameters

```java
public static record NoiseParameters(int firstOctave, DoubleList amplitudes)
```

**Parameters:**

- `firstOctave` (`int`)
- `amplitudes` (`DoubleList`)

**Returns:** `public static record`

### NoiseParameters

```java
public NoiseParameters(int p_192861_, List<Double> p_192862_)
```

**Parameters:**

- `p_192861_` (`int`)
- `p_192862_` (`List<Double>`)

**Returns:** `public`

### NoiseParameters

```java
public NoiseParameters(int p_192857_, double p_192858_, double[]... p_192859_)
```

**Parameters:**

- `p_192857_` (`int`)
- `p_192858_` (`double`)
- `p_192859_` (`double[]...`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `NoiseParameters` | record |  |
