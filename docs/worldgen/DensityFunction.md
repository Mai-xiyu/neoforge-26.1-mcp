# DensityFunction

**Package:** `net.minecraft.world.level.levelgen`
**Type:** interface

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<DensityFunction.NoiseHolder>` |  |

## Methods

### compute

```java
double compute(DensityFunction.FunctionContext p_208223_)
```

**Parameters:**

- `p_208223_` (`DensityFunction.FunctionContext`)

**Returns:** `double`

### fillArray

```java
void fillArray(double[] p_208227_, DensityFunction.ContextProvider p_208228_)
```

**Parameters:**

- `p_208227_` (`double[]`)
- `p_208228_` (`DensityFunction.ContextProvider`)

### mapAll

```java
DensityFunction mapAll(DensityFunction.Visitor p_208224_)
```

**Parameters:**

- `p_208224_` (`DensityFunction.Visitor`)

**Returns:** `DensityFunction`

### minValue

```java
double minValue()
```

**Returns:** `double`

### maxValue

```java
double maxValue()
```

**Returns:** `double`

### codec

```java
KeyDispatchDataCodec<? extends DensityFunction> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends DensityFunction>`

### clamp

```java
default DensityFunction clamp(double p_208221_, double p_208222_)
```

**Parameters:**

- `p_208221_` (`double`)
- `p_208222_` (`double`)

**Returns:** `default DensityFunction`

### abs

```java
default DensityFunction abs()
```

**Returns:** `default DensityFunction`

### square

```java
default DensityFunction square()
```

**Returns:** `default DensityFunction`

### cube

```java
default DensityFunction cube()
```

**Returns:** `default DensityFunction`

### halfNegative

```java
default DensityFunction halfNegative()
```

**Returns:** `default DensityFunction`

### quarterNegative

```java
default DensityFunction quarterNegative()
```

**Returns:** `default DensityFunction`

### squeeze

```java
default DensityFunction squeeze()
```

**Returns:** `default DensityFunction`

### forIndex

```java
DensityFunction.FunctionContext forIndex(int p_208235_)
```

**Parameters:**

- `p_208235_` (`int`)

**Returns:** `DensityFunction.FunctionContext`

### fillAllDirectly

```java
void fillAllDirectly(double[] p_208236_, DensityFunction p_208237_)
```

**Parameters:**

- `p_208236_` (`double[]`)
- `p_208237_` (`DensityFunction`)

### blockX

```java
int blockX()
```

**Returns:** `int`

### blockY

```java
int blockY()
```

**Returns:** `int`

### blockZ

```java
int blockZ()
```

**Returns:** `int`

### getBlender

```java
default Blender getBlender()
```

**Returns:** `default Blender`

### NoiseHolder

```java
public static record NoiseHolder(Holder<NormalNoise.NoiseParameters> noiseData, NormalNoise noise)
```

**Parameters:**

- `noiseData` (`Holder<NormalNoise.NoiseParameters>`)
- `noise` (`NormalNoise`)

**Returns:** `public static record`

### NoiseHolder

```java
public NoiseHolder(Holder<NormalNoise.NoiseParameters> p_224001_)
```

**Parameters:**

- `p_224001_` (`Holder<NormalNoise.NoiseParameters>`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getValue

```java
public double getValue(double p_224007_, double p_224008_, double p_224009_)
```

**Parameters:**

- `p_224007_` (`double`)
- `p_224008_` (`double`)
- `p_224009_` (`double`)

**Returns:** `public double`

### maxValue

```java
public double maxValue()
```

**Returns:** `public double`

### fillArray

```java
default void fillArray(double[] p_208241_, DensityFunction.ContextProvider p_208242_)
```

**Parameters:**

- `p_208241_` (`double[]`)
- `p_208242_` (`DensityFunction.ContextProvider`)

### mapAll

```java
default DensityFunction mapAll(DensityFunction.Visitor p_208239_)
```

**Parameters:**

- `p_208239_` (`DensityFunction.Visitor`)

**Returns:** `DensityFunction`

### apply

```java
DensityFunction apply(DensityFunction p_224019_)
```

**Parameters:**

- `p_224019_` (`DensityFunction`)

**Returns:** `DensityFunction`

### visitNoise

```java
default DensityFunction.NoiseHolder visitNoise(DensityFunction.NoiseHolder p_224018_)
```

**Parameters:**

- `p_224018_` (`DensityFunction.NoiseHolder`)

**Returns:** `default DensityFunction.NoiseHolder`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ContextProvider` | interface |  |
| `FunctionContext` | interface |  |
| `NoiseHolder` | record |  |
| `SimpleFunction` | interface |  |
| `SinglePointContext` | record |  |
| `Visitor` | interface |  |
