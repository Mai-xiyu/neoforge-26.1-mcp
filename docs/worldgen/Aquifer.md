# Aquifer

**Package:** `net.minecraft.world.level.levelgen`
**Type:** interface

## Fields

| Name | Type | Description |
|------|------|-------------|
| `barrierNoise` | `DensityFunction` |  |
| `lavaNoise` | `DensityFunction` |  |
| `aquiferCache` | `Aquifer.FluidStatus[]` |  |
| `aquiferLocationCache` | `long[]` |  |
| `shouldScheduleFluidUpdate` | `boolean` |  |
| `minGridX` | `int` |  |
| `minGridY` | `int` |  |
| `minGridZ` | `int` |  |
| `gridSizeX` | `int` |  |
| `gridSizeZ` | `int` |  |

## Methods

### create

```java
static Aquifer create(NoiseChunk p_223881_, ChunkPos p_223882_, NoiseRouter p_223883_, PositionalRandomFactory p_223884_, int p_223885_, int p_223886_, Aquifer.FluidPicker p_223887_)
```

**Parameters:**

- `p_223881_` (`NoiseChunk`)
- `p_223882_` (`ChunkPos`)
- `p_223883_` (`NoiseRouter`)
- `p_223884_` (`PositionalRandomFactory`)
- `p_223885_` (`int`)
- `p_223886_` (`int`)
- `p_223887_` (`Aquifer.FluidPicker`)

**Returns:** `static Aquifer`

### createDisabled

```java
static Aquifer createDisabled(Aquifer.FluidPicker p_188375_)
```

**Parameters:**

- `p_188375_` (`Aquifer.FluidPicker`)

**Returns:** `static Aquifer`

### Aquifer

```java
return new Aquifer()
```

**Returns:** `return new`

### computeSubstance

```java
public BlockState computeSubstance(DensityFunction.FunctionContext p_208172_, double p_208173_)
```

**Parameters:**

- `p_208172_` (`DensityFunction.FunctionContext`)
- `p_208173_` (`double`)

**Returns:** `BlockState`

### shouldScheduleFluidUpdate

```java
public boolean shouldScheduleFluidUpdate()
```

**Returns:** `boolean`

### computeSubstance

```java
BlockState computeSubstance(DensityFunction.FunctionContext p_208158_, double p_208159_)
```

**Parameters:**

- `p_208158_` (`DensityFunction.FunctionContext`)
- `p_208159_` (`double`)

**Returns:** `BlockState`

### shouldScheduleFluidUpdate

```java
boolean shouldScheduleFluidUpdate()
```

**Returns:** `boolean`

### computeFluid

```java
Aquifer.FluidStatus computeFluid(int p_188397_, int p_188398_, int p_188399_)
```

**Parameters:**

- `p_188397_` (`int`)
- `p_188398_` (`int`)
- `p_188399_` (`int`)

**Returns:** `Aquifer.FluidStatus`

### FluidStatus

```java
public FluidStatus(int p_188403_, BlockState p_188404_)
```

**Parameters:**

- `p_188403_` (`int`)
- `p_188404_` (`BlockState`)

**Returns:** `public`

### at

```java
public BlockState at(int p_188406_)
```

**Parameters:**

- `p_188406_` (`int`)

**Returns:** `public BlockState`

### NoiseBasedAquifer

```java
 NoiseBasedAquifer(NoiseChunk p_223891_, ChunkPos p_223892_, NoiseRouter p_223893_, PositionalRandomFactory p_223894_, int p_223895_, int p_223896_, Aquifer.FluidPicker p_223897_)
```

**Parameters:**

- `p_223891_` (`NoiseChunk`)
- `p_223892_` (`ChunkPos`)
- `p_223893_` (`NoiseRouter`)
- `p_223894_` (`PositionalRandomFactory`)
- `p_223895_` (`int`)
- `p_223896_` (`int`)
- `p_223897_` (`Aquifer.FluidPicker`)

**Returns:** ``

### getIndex

```java
protected int getIndex(int p_158028_, int p_158029_, int p_158030_)
```

**Parameters:**

- `p_158028_` (`int`)
- `p_158029_` (`int`)
- `p_158030_` (`int`)

**Returns:** `protected int`

### computeSubstance

```java
public BlockState computeSubstance(DensityFunction.FunctionContext p_208186_, double p_208187_)
```

**Parameters:**

- `p_208186_` (`DensityFunction.FunctionContext`)
- `p_208187_` (`double`)

**Returns:** `BlockState`

### shouldScheduleFluidUpdate

```java
public boolean shouldScheduleFluidUpdate()
```

**Returns:** `boolean`

### similarity

```java
protected static double similarity(int p_158025_, int p_158026_)
```

**Parameters:**

- `p_158025_` (`int`)
- `p_158026_` (`int`)

**Returns:** `protected static double`

### calculatePressure

```java
private double calculatePressure(DensityFunction.FunctionContext p_208189_, MutableDouble p_208190_, Aquifer.FluidStatus p_208191_, Aquifer.FluidStatus p_208192_)
```

**Parameters:**

- `p_208189_` (`DensityFunction.FunctionContext`)
- `p_208190_` (`MutableDouble`)
- `p_208191_` (`Aquifer.FluidStatus`)
- `p_208192_` (`Aquifer.FluidStatus`)

**Returns:** `private double`

### gridX

```java
protected int gridX(int p_158040_)
```

**Parameters:**

- `p_158040_` (`int`)

**Returns:** `protected int`

### gridY

```java
protected int gridY(int p_158046_)
```

**Parameters:**

- `p_158046_` (`int`)

**Returns:** `protected int`

### gridZ

```java
protected int gridZ(int p_158048_)
```

**Parameters:**

- `p_158048_` (`int`)

**Returns:** `protected int`

### getAquiferStatus

```java
private Aquifer.FluidStatus getAquiferStatus(long p_188446_)
```

**Parameters:**

- `p_188446_` (`long`)

**Returns:** `private Aquifer.FluidStatus`

### computeFluid

```java
private Aquifer.FluidStatus computeFluid(int p_188448_, int p_188449_, int p_188450_)
```

**Parameters:**

- `p_188448_` (`int`)
- `p_188449_` (`int`)
- `p_188450_` (`int`)

**Returns:** `private Aquifer.FluidStatus`

### computeSurfaceLevel

```java
private int computeSurfaceLevel(int p_223910_, int p_223911_, int p_223912_, Aquifer.FluidStatus p_223913_, int p_223914_, boolean p_223915_)
```

**Parameters:**

- `p_223910_` (`int`)
- `p_223911_` (`int`)
- `p_223912_` (`int`)
- `p_223913_` (`Aquifer.FluidStatus`)
- `p_223914_` (`int`)
- `p_223915_` (`boolean`)

**Returns:** `private int`

### computeRandomizedFluidSurfaceLevel

```java
private int computeRandomizedFluidSurfaceLevel(int p_223899_, int p_223900_, int p_223901_, int p_223902_)
```

**Parameters:**

- `p_223899_` (`int`)
- `p_223900_` (`int`)
- `p_223901_` (`int`)
- `p_223902_` (`int`)

**Returns:** `private int`

### computeFluidType

```java
private BlockState computeFluidType(int p_223904_, int p_223905_, int p_223906_, Aquifer.FluidStatus p_223907_, int p_223908_)
```

**Parameters:**

- `p_223904_` (`int`)
- `p_223905_` (`int`)
- `p_223906_` (`int`)
- `p_223907_` (`Aquifer.FluidStatus`)
- `p_223908_` (`int`)

**Returns:** `private BlockState`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FluidPicker` | interface |  |
| `FluidStatus` | class |  |
| `NoiseBasedAquifer` | class |  |
