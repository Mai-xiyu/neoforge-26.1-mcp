# PerlinNoise

**Package:** `net.minecraft.world.level.levelgen.synth`
**Type:** class

## Methods

### createLegacyForBlendedNoise

```java
public static PerlinNoise createLegacyForBlendedNoise(RandomSource p_230533_, IntStream p_230534_)
```

**Parameters:**

- `p_230533_` (`RandomSource`)
- `p_230534_` (`IntStream`)

**Returns:** `PerlinNoise`

### createLegacyForLegacyNetherBiome

```java
public static PerlinNoise createLegacyForLegacyNetherBiome(RandomSource p_230526_, int p_230527_, DoubleList p_230528_)
```

**Parameters:**

- `p_230526_` (`RandomSource`)
- `p_230527_` (`int`)
- `p_230528_` (`DoubleList`)

**Returns:** `PerlinNoise`

### create

```java
public static PerlinNoise create(RandomSource p_230540_, IntStream p_230541_)
```

**Parameters:**

- `p_230540_` (`RandomSource`)
- `p_230541_` (`IntStream`)

**Returns:** `public static PerlinNoise`

### create

```java
public static PerlinNoise create(RandomSource p_230530_, List<Integer> p_230531_)
```

**Parameters:**

- `p_230530_` (`RandomSource`)
- `p_230531_` (`List<Integer>`)

**Returns:** `public static PerlinNoise`

### create

```java
public static PerlinNoise create(RandomSource p_230521_, int p_230522_, double p_230523_, double[]... p_230524_)
```

**Parameters:**

- `p_230521_` (`RandomSource`)
- `p_230522_` (`int`)
- `p_230523_` (`double`)
- `p_230524_` (`double[]...`)

**Returns:** `public static PerlinNoise`

### create

```java
public static PerlinNoise create(RandomSource p_230536_, int p_230537_, DoubleList p_230538_)
```

**Parameters:**

- `p_230536_` (`RandomSource`)
- `p_230537_` (`int`)
- `p_230538_` (`DoubleList`)

**Returns:** `public static PerlinNoise`

### makeAmplitudes

```java
private static Pair<Integer, DoubleList> makeAmplitudes(IntSortedSet p_75431_)
```

**Parameters:**

- `p_75431_` (`IntSortedSet`)

**Returns:** `private static Pair<Integer, DoubleList>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Need some octaves!")
```

**Parameters:**

- `octaves!"` (`"Need some`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Total number of octaves needs to be >= 1")
```

**Parameters:**

- `1"` (`"Total number of octaves needs to be >=`)

**Returns:** `throw new`

### PerlinNoise

```java
protected PerlinNoise(RandomSource p_230515_, Pair<Integer, DoubleList> p_230516_, boolean p_230517_)
```

**Parameters:**

- `p_230515_` (`RandomSource`)
- `p_230516_` (`Pair<Integer, DoubleList>`)
- `p_230517_` (`boolean`)

**Returns:** `protected`

### skipOctave

```java
 skipOctave()
```

**Returns:** ``

### skipOctave

```java
 skipOctave()
```

**Returns:** ``

### IllegalStateException

```java
throw new IllegalStateException("Failed to create correct number of noise levels for given non-zero amplitudes")
```

**Parameters:**

- `amplitudes"` (`"Failed to create correct number of noise levels for given non-zero`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Positive octaves are temporarily disabled")
```

**Parameters:**

- `disabled"` (`"Positive octaves are temporarily`)

**Returns:** `throw new`

### maxValue

```java
protected double maxValue()
```

**Returns:** `protected double`

### skipOctave

```java
private static void skipOctave(RandomSource p_230519_)
```

**Parameters:**

- `p_230519_` (`RandomSource`)

**Returns:** `private static void`

### getValue

```java
public double getValue(double p_75409_, double p_75410_, double p_75411_)
```

**Parameters:**

- `p_75409_` (`double`)
- `p_75410_` (`double`)
- `p_75411_` (`double`)

**Returns:** `public double`

### getValue

```java
public double getValue(double p_75418_, double p_75419_, double p_75420_, double p_75421_, double p_75422_, boolean p_75423_)
```

**Parameters:**

- `p_75418_` (`double`)
- `p_75419_` (`double`)
- `p_75420_` (`double`)
- `p_75421_` (`double`)
- `p_75422_` (`double`)
- `p_75423_` (`boolean`)

**Returns:** `double`

### maxBrokenValue

```java
public double maxBrokenValue(double p_210644_)
```

**Parameters:**

- `p_210644_` (`double`)

**Returns:** `public double`

### edgeValue

```java
private double edgeValue(double p_210650_)
```

**Parameters:**

- `p_210650_` (`double`)

**Returns:** `private double`

### getOctaveNoise

```java
public ImprovedNoise getOctaveNoise(int p_75425_)
```

**Parameters:**

- `p_75425_` (`int`)

**Returns:** `ImprovedNoise`

### wrap

```java
public static double wrap(double p_75407_)
```

**Parameters:**

- `p_75407_` (`double`)

**Returns:** `public static double`

### firstOctave

```java
protected int firstOctave()
```

**Returns:** `protected int`

### amplitudes

```java
protected DoubleList amplitudes()
```

**Returns:** `protected DoubleList`

### parityConfigString

```java
public void parityConfigString(StringBuilder p_192891_)
```

**Parameters:**

- `p_192891_` (`StringBuilder`)
