# NoiseChunk

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class
**Implements:** `DensityFunction.ContextProvider`, `DensityFunction.FunctionContext`

## Methods

### forIndex

```java
public DensityFunction.FunctionContext forIndex(int p_209253_)
```

**Parameters:**

- `p_209253_` (`int`)

**Returns:** `DensityFunction.FunctionContext`

### fillAllDirectly

```java
public void fillAllDirectly(double[] p_209255_, DensityFunction p_209256_)
```

**Parameters:**

- `p_209255_` (`double[]`)
- `p_209256_` (`DensityFunction`)

### forChunk

```java
public static NoiseChunk forChunk(ChunkAccess p_224353_, RandomState p_224354_, DensityFunctions.BeardifierOrMarker p_224355_, NoiseGeneratorSettings p_224356_, Aquifer.FluidPicker p_224357_, Blender p_224358_)
```

**Parameters:**

- `p_224353_` (`ChunkAccess`)
- `p_224354_` (`RandomState`)
- `p_224355_` (`DensityFunctions.BeardifierOrMarker`)
- `p_224356_` (`NoiseGeneratorSettings`)
- `p_224357_` (`Aquifer.FluidPicker`)
- `p_224358_` (`Blender`)

**Returns:** `public static NoiseChunk`

### NoiseChunk

```java
public NoiseChunk(int p_224343_, RandomState p_224344_, int p_224345_, int p_224346_, NoiseSettings p_224347_, DensityFunctions.BeardifierOrMarker p_224348_, NoiseGeneratorSettings p_224349_, Aquifer.FluidPicker p_224350_, Blender p_224351_)
```

**Parameters:**

- `p_224343_` (`int`)
- `p_224344_` (`RandomState`)
- `p_224345_` (`int`)
- `p_224346_` (`int`)
- `p_224347_` (`NoiseSettings`)
- `p_224348_` (`DensityFunctions.BeardifierOrMarker`)
- `p_224349_` (`NoiseGeneratorSettings`)
- `p_224350_` (`Aquifer.FluidPicker`)
- `p_224351_` (`Blender`)

**Returns:** `public`

### cachedClimateSampler

```java
protected Climate.Sampler cachedClimateSampler(NoiseRouter p_224360_, List<Climate.ParameterPoint> p_224361_)
```

**Parameters:**

- `p_224360_` (`NoiseRouter`)
- `p_224361_` (`List<Climate.ParameterPoint>`)

**Returns:** `protected Climate.Sampler`

### getInterpolatedState

```java
protected BlockState getInterpolatedState()
```

**Returns:** `BlockState`

### blockX

```java
public int blockX()
```

**Returns:** `int`

### blockY

```java
public int blockY()
```

**Returns:** `int`

### blockZ

```java
public int blockZ()
```

**Returns:** `int`

### preliminarySurfaceLevel

```java
public int preliminarySurfaceLevel(int p_198257_, int p_198258_)
```

**Parameters:**

- `p_198257_` (`int`)
- `p_198258_` (`int`)

**Returns:** `public int`

### computePreliminarySurfaceLevel

```java
private int computePreliminarySurfaceLevel(long p_198250_)
```

**Parameters:**

- `p_198250_` (`long`)

**Returns:** `private int`

### getBlender

```java
public Blender getBlender()
```

**Returns:** `Blender`

### fillSlice

```java
private void fillSlice(boolean p_209221_, int p_209222_)
```

**Parameters:**

- `p_209221_` (`boolean`)
- `p_209222_` (`int`)

**Returns:** `private void`

### initializeForFirstCellX

```java
public void initializeForFirstCellX()
```

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Staring interpolation twice")
```

**Parameters:**

- `twice"` (`"Staring interpolation`)

**Returns:** `throw new`

### advanceCellX

```java
public void advanceCellX(int p_188750_)
```

**Parameters:**

- `p_188750_` (`int`)

**Returns:** `public void`

### forIndex

```java
public NoiseChunk forIndex(int p_209240_)
```

**Parameters:**

- `p_209240_` (`int`)

**Returns:** `public NoiseChunk`

### fillAllDirectly

```java
public void fillAllDirectly(double[] p_209224_, DensityFunction p_209225_)
```

**Parameters:**

- `p_209224_` (`double[]`)
- `p_209225_` (`DensityFunction`)

### selectCellYZ

```java
public void selectCellYZ(int p_188811_, int p_188812_)
```

**Parameters:**

- `p_188811_` (`int`)
- `p_188812_` (`int`)

**Returns:** `public void`

### updateForY

```java
public void updateForY(int p_209192_, double p_209193_)
```

**Parameters:**

- `p_209192_` (`int`)
- `p_209193_` (`double`)

**Returns:** `public void`

### updateForX

```java
public void updateForX(int p_209231_, double p_209232_)
```

**Parameters:**

- `p_209231_` (`int`)
- `p_209232_` (`double`)

**Returns:** `public void`

### updateForZ

```java
public void updateForZ(int p_209242_, double p_209243_)
```

**Parameters:**

- `p_209242_` (`int`)
- `p_209243_` (`double`)

**Returns:** `public void`

### stopInterpolation

```java
public void stopInterpolation()
```

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Staring interpolation twice")
```

**Parameters:**

- `twice"` (`"Staring interpolation`)

**Returns:** `throw new`

### swapSlices

```java
public void swapSlices()
```

**Returns:** `public void`

### aquifer

```java
public Aquifer aquifer()
```

**Returns:** `public Aquifer`

### cellWidth

```java
protected int cellWidth()
```

**Returns:** `protected int`

### cellHeight

```java
protected int cellHeight()
```

**Returns:** `protected int`

### getOrComputeBlendingOutput

```java
Blender.BlendingOutput getOrComputeBlendingOutput(int p_209245_, int p_209246_)
```

**Parameters:**

- `p_209245_` (`int`)
- `p_209246_` (`int`)

**Returns:** `Blender.BlendingOutput`

### wrap

```java
protected DensityFunction wrap(DensityFunction p_209214_)
```

**Parameters:**

- `p_209214_` (`DensityFunction`)

**Returns:** `protected DensityFunction`

### wrapNew

```java
private DensityFunction wrapNew(DensityFunction p_209234_)
```

**Parameters:**

- `p_209234_` (`DensityFunction`)

**Returns:** `private DensityFunction`

### wrapped

```java
public DensityFunction wrapped()
```

**Returns:** `DensityFunction`

### mapAll

```java
public DensityFunction mapAll(DensityFunction.Visitor p_224365_)
```

**Parameters:**

- `p_224365_` (`DensityFunction.Visitor`)

**Returns:** `DensityFunction`

### compute

```java
public double compute(DensityFunction.FunctionContext p_209264_)
```

**Parameters:**

- `p_209264_` (`DensityFunction.FunctionContext`)

**Returns:** `double`

### fillArray

```java
public void fillArray(double[] p_209266_, DensityFunction.ContextProvider p_209267_)
```

**Parameters:**

- `p_209266_` (`double[]`)
- `p_209267_` (`DensityFunction.ContextProvider`)

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

### codec

```java
public KeyDispatchDataCodec<? extends DensityFunction> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends DensityFunction>`

### wrapped

```java
public DensityFunction wrapped()
```

**Returns:** `DensityFunction`

### mapAll

```java
public DensityFunction mapAll(DensityFunction.Visitor p_224368_)
```

**Parameters:**

- `p_224368_` (`DensityFunction.Visitor`)

**Returns:** `DensityFunction`

### compute

```java
public double compute(DensityFunction.FunctionContext p_209276_)
```

**Parameters:**

- `p_209276_` (`DensityFunction.FunctionContext`)

**Returns:** `double`

### fillArray

```java
public void fillArray(double[] p_209278_, DensityFunction.ContextProvider p_209279_)
```

**Parameters:**

- `p_209278_` (`double[]`)
- `p_209279_` (`DensityFunction.ContextProvider`)

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

### codec

```java
public KeyDispatchDataCodec<? extends DensityFunction> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends DensityFunction>`

### calculate

```java
BlockState calculate(DensityFunction.FunctionContext p_209283_)
```

**Parameters:**

- `p_209283_` (`DensityFunction.FunctionContext`)

**Returns:** `BlockState`

### Cache2D

```java
 Cache2D(DensityFunction p_209288_)
```

**Parameters:**

- `p_209288_` (`DensityFunction`)

**Returns:** ``

### compute

```java
public double compute(DensityFunction.FunctionContext p_209290_)
```

**Parameters:**

- `p_209290_` (`DensityFunction.FunctionContext`)

**Returns:** `double`

### fillArray

```java
public void fillArray(double[] p_209292_, DensityFunction.ContextProvider p_209293_)
```

**Parameters:**

- `p_209292_` (`double[]`)
- `p_209293_` (`DensityFunction.ContextProvider`)

### wrapped

```java
public DensityFunction wrapped()
```

**Returns:** `DensityFunction`

### type

```java
public DensityFunctions.Marker.Type type()
```

**Returns:** `DensityFunctions.Marker.Type`

### CacheAllInCell

```java
 CacheAllInCell(DensityFunction p_209301_)
```

**Parameters:**

- `p_209301_` (`DensityFunction`)

**Returns:** ``

### compute

```java
public double compute(DensityFunction.FunctionContext p_209303_)
```

**Parameters:**

- `p_209303_` (`DensityFunction.FunctionContext`)

**Returns:** `double`

### IllegalStateException

```java
throw new IllegalStateException("Trying to sample interpolator outside the interpolation loop")
```

**Parameters:**

- `loop"` (`"Trying to sample interpolator outside the interpolation`)

**Returns:** `throw new`

### fillArray

```java
public void fillArray(double[] p_209305_, DensityFunction.ContextProvider p_209306_)
```

**Parameters:**

- `p_209305_` (`double[]`)
- `p_209306_` (`DensityFunction.ContextProvider`)

### wrapped

```java
public DensityFunction wrapped()
```

**Returns:** `DensityFunction`

### type

```java
public DensityFunctions.Marker.Type type()
```

**Returns:** `DensityFunctions.Marker.Type`

### CacheOnce

```java
 CacheOnce(DensityFunction p_209317_)
```

**Parameters:**

- `p_209317_` (`DensityFunction`)

**Returns:** ``

### compute

```java
public double compute(DensityFunction.FunctionContext p_209319_)
```

**Parameters:**

- `p_209319_` (`DensityFunction.FunctionContext`)

**Returns:** `double`

### fillArray

```java
public void fillArray(double[] p_209321_, DensityFunction.ContextProvider p_209322_)
```

**Parameters:**

- `p_209321_` (`double[]`)
- `p_209322_` (`DensityFunction.ContextProvider`)

### wrapped

```java
public DensityFunction wrapped()
```

**Returns:** `DensityFunction`

### type

```java
public DensityFunctions.Marker.Type type()
```

**Returns:** `DensityFunctions.Marker.Type`

### FlatCache

```java
 FlatCache(DensityFunction p_209330_, boolean p_209331_)
```

**Parameters:**

- `p_209330_` (`DensityFunction`)
- `p_209331_` (`boolean`)

**Returns:** ``

### compute

```java
public double compute(DensityFunction.FunctionContext p_209333_)
```

**Parameters:**

- `p_209333_` (`DensityFunction.FunctionContext`)

**Returns:** `double`

### fillArray

```java
public void fillArray(double[] p_209335_, DensityFunction.ContextProvider p_209336_)
```

**Parameters:**

- `p_209335_` (`double[]`)
- `p_209336_` (`DensityFunction.ContextProvider`)

### wrapped

```java
public DensityFunction wrapped()
```

**Returns:** `DensityFunction`

### type

```java
public DensityFunctions.Marker.Type type()
```

**Returns:** `DensityFunctions.Marker.Type`

### wrapped

```java
DensityFunction wrapped()
```

**Returns:** `DensityFunction`

### minValue

```java
default double minValue()
```

**Returns:** `double`

### maxValue

```java
default double maxValue()
```

**Returns:** `double`

### NoiseInterpolator

```java
 NoiseInterpolator(DensityFunction p_209345_)
```

**Parameters:**

- `p_209345_` (`DensityFunction`)

**Returns:** ``

### allocateSlice

```java
private double[][] allocateSlice(int p_188855_, int p_188856_)
```

**Parameters:**

- `p_188855_` (`int`)
- `p_188856_` (`int`)

**Returns:** `private double[][]`

### selectCellYZ

```java
void selectCellYZ(int p_188864_, int p_188865_)
```

**Parameters:**

- `p_188864_` (`int`)
- `p_188865_` (`int`)

### updateForY

```java
void updateForY(double p_188851_)
```

**Parameters:**

- `p_188851_` (`double`)

### updateForX

```java
void updateForX(double p_188862_)
```

**Parameters:**

- `p_188862_` (`double`)

### updateForZ

```java
void updateForZ(double p_188867_)
```

**Parameters:**

- `p_188867_` (`double`)

### compute

```java
public double compute(DensityFunction.FunctionContext p_209347_)
```

**Parameters:**

- `p_209347_` (`DensityFunction.FunctionContext`)

**Returns:** `double`

### IllegalStateException

```java
throw new IllegalStateException("Trying to sample interpolator outside the interpolation loop")
```

**Parameters:**

- `loop"` (`"Trying to sample interpolator outside the interpolation`)

**Returns:** `throw new`

### fillArray

```java
public void fillArray(double[] p_209349_, DensityFunction.ContextProvider p_209350_)
```

**Parameters:**

- `p_209349_` (`double[]`)
- `p_209350_` (`DensityFunction.ContextProvider`)

### wrapped

```java
public DensityFunction wrapped()
```

**Returns:** `DensityFunction`

### swapSlices

```java
private void swapSlices()
```

**Returns:** `private void`

### type

```java
public DensityFunctions.Marker.Type type()
```

**Returns:** `DensityFunctions.Marker.Type`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BlockStateFiller` | interface |  |
| `NoiseInterpolator` | class |  |
