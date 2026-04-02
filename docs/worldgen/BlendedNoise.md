# BlendedNoise

**Package:** `net.minecraft.world.level.levelgen.synth`
**Type:** class
**Implements:** `DensityFunction.SimpleFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `KeyDispatchDataCodec<BlendedNoise>` |  |

## Methods

### createUnseeded

```java
public static BlendedNoise createUnseeded(double p_230478_, double p_230479_, double p_230480_, double p_230481_, double p_230482_)
```

**Parameters:**

- `p_230478_` (`double`)
- `p_230479_` (`double`)
- `p_230480_` (`double`)
- `p_230481_` (`double`)
- `p_230482_` (`double`)

**Returns:** `public static BlendedNoise`

### BlendedNoise

```java
private BlendedNoise(PerlinNoise p_230469_, PerlinNoise p_230470_, PerlinNoise p_230471_, double p_230472_, double p_230473_, double p_230474_, double p_230475_, double p_230476_)
```

**Parameters:**

- `p_230469_` (`PerlinNoise`)
- `p_230470_` (`PerlinNoise`)
- `p_230471_` (`PerlinNoise`)
- `p_230472_` (`double`)
- `p_230473_` (`double`)
- `p_230474_` (`double`)
- `p_230475_` (`double`)
- `p_230476_` (`double`)

**Returns:** `private`

### BlendedNoise

```java
public public BlendedNoise(RandomSource p_230462_, double p_230463_, double p_230464_, double p_230465_, double p_230466_, double p_230467_)
```

**Parameters:**

- `p_230462_` (`RandomSource`)
- `p_230463_` (`double`)
- `p_230464_` (`double`)
- `p_230465_` (`double`)
- `p_230466_` (`double`)
- `p_230467_` (`double`)

**Returns:** `public`

### withNewRandom

```java
public BlendedNoise withNewRandom(RandomSource p_230484_)
```

**Parameters:**

- `p_230484_` (`RandomSource`)

**Returns:** `public BlendedNoise`

### BlendedNoise

```java
return new BlendedNoise()
```

**Returns:** `return new`

### compute

```java
public double compute(DensityFunction.FunctionContext p_210621_)
```

**Parameters:**

- `p_210621_` (`DensityFunction.FunctionContext`)

**Returns:** `double`

### minValue

```java
public double minValue()
```

**Returns:** `double`

### maxValue

```java
public double maxValue()
```

**Returns:** `double`

### parityConfigString

```java
public void parityConfigString(StringBuilder p_192818_)
```

**Parameters:**

- `p_192818_` (`StringBuilder`)

### codec

```java
public KeyDispatchDataCodec<? extends DensityFunction> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends DensityFunction>`
