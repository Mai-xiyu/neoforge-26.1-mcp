# NoiseRouterData

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `GLOBAL_OFFSET` | `float` |  |
| `ISLAND_CHUNK_DISTANCE` | `int` |  |
| `ISLAND_CHUNK_DISTANCE_SQR` | `long` |  |
| `CONTINENTS` | `ResourceKey<DensityFunction>` |  |
| `EROSION` | `ResourceKey<DensityFunction>` |  |
| `RIDGES` | `ResourceKey<DensityFunction>` |  |
| `RIDGES_FOLDED` | `ResourceKey<DensityFunction>` |  |
| `OFFSET` | `ResourceKey<DensityFunction>` |  |
| `FACTOR` | `ResourceKey<DensityFunction>` |  |
| `JAGGEDNESS` | `ResourceKey<DensityFunction>` |  |
| `DEPTH` | `ResourceKey<DensityFunction>` |  |
| `CONTINENTS_LARGE` | `ResourceKey<DensityFunction>` |  |
| `EROSION_LARGE` | `ResourceKey<DensityFunction>` |  |

## Methods

### createKey

```java
private static ResourceKey<DensityFunction> createKey(String p_209537_)
```

**Parameters:**

- `p_209537_` (`String`)

**Returns:** `private static ResourceKey<DensityFunction>`

### bootstrap

```java
public static Holder<? extends DensityFunction> bootstrap(BootstrapContext<DensityFunction> p_321740_)
```

**Parameters:**

- `p_321740_` (`BootstrapContext<DensityFunction>`)

**Returns:** `public static Holder<? extends DensityFunction>`

### registerTerrainNoises

```java
 registerTerrainNoises()
```

**Returns:** ``

### registerTerrainNoises

```java
 registerTerrainNoises()
```

**Returns:** ``

### registerTerrainNoises

```java
 registerTerrainNoises()
```

**Returns:** ``

### registerTerrainNoises

```java
private static void registerTerrainNoises(BootstrapContext<DensityFunction> p_321572_, HolderGetter<DensityFunction> p_256393_, DensityFunction p_224476_, Holder<DensityFunction> p_224477_, Holder<DensityFunction> p_224478_, ResourceKey<DensityFunction> p_224479_, ResourceKey<DensityFunction> p_224480_, ResourceKey<DensityFunction> p_224481_, ResourceKey<DensityFunction> p_224482_, ResourceKey<DensityFunction> p_224483_, boolean p_224484_)
```

**Parameters:**

- `p_321572_` (`BootstrapContext<DensityFunction>`)
- `p_256393_` (`HolderGetter<DensityFunction>`)
- `p_224476_` (`DensityFunction`)
- `p_224477_` (`Holder<DensityFunction>`)
- `p_224478_` (`Holder<DensityFunction>`)
- `p_224479_` (`ResourceKey<DensityFunction>`)
- `p_224480_` (`ResourceKey<DensityFunction>`)
- `p_224481_` (`ResourceKey<DensityFunction>`)
- `p_224482_` (`ResourceKey<DensityFunction>`)
- `p_224483_` (`ResourceKey<DensityFunction>`)
- `p_224484_` (`boolean`)

**Returns:** `private static void`

### registerAndWrap

```java
private static DensityFunction registerAndWrap(BootstrapContext<DensityFunction> p_321585_, ResourceKey<DensityFunction> p_255905_, DensityFunction p_255856_)
```

**Parameters:**

- `p_321585_` (`BootstrapContext<DensityFunction>`)
- `p_255905_` (`ResourceKey<DensityFunction>`)
- `p_255856_` (`DensityFunction`)

**Returns:** `private static DensityFunction`

### getFunction

```java
private static DensityFunction getFunction(HolderGetter<DensityFunction> p_256312_, ResourceKey<DensityFunction> p_256077_)
```

**Parameters:**

- `p_256312_` (`HolderGetter<DensityFunction>`)
- `p_256077_` (`ResourceKey<DensityFunction>`)

**Returns:** `private static DensityFunction`

### peaksAndValleys

```java
private static DensityFunction peaksAndValleys(DensityFunction p_224438_)
```

**Parameters:**

- `p_224438_` (`DensityFunction`)

**Returns:** `private static DensityFunction`

### peaksAndValleys

```java
public static float peaksAndValleys(float p_224436_)
```

**Parameters:**

- `p_224436_` (`float`)

**Returns:** `public static float`

### spaghettiRoughnessFunction

```java
private static DensityFunction spaghettiRoughnessFunction(HolderGetter<NormalNoise.NoiseParameters> p_255763_)
```

**Parameters:**

- `p_255763_` (`HolderGetter<NormalNoise.NoiseParameters>`)

**Returns:** `private static DensityFunction`

### entrances

```java
private static DensityFunction entrances(HolderGetter<DensityFunction> p_256511_, HolderGetter<NormalNoise.NoiseParameters> p_255899_)
```

**Parameters:**

- `p_256511_` (`HolderGetter<DensityFunction>`)
- `p_255899_` (`HolderGetter<NormalNoise.NoiseParameters>`)

**Returns:** `private static DensityFunction`

### noodle

```java
private static DensityFunction noodle(HolderGetter<DensityFunction> p_256402_, HolderGetter<NormalNoise.NoiseParameters> p_255632_)
```

**Parameters:**

- `p_256402_` (`HolderGetter<DensityFunction>`)
- `p_255632_` (`HolderGetter<NormalNoise.NoiseParameters>`)

**Returns:** `private static DensityFunction`

### pillars

```java
private static DensityFunction pillars(HolderGetter<NormalNoise.NoiseParameters> p_255985_)
```

**Parameters:**

- `p_255985_` (`HolderGetter<NormalNoise.NoiseParameters>`)

**Returns:** `private static DensityFunction`

### spaghetti2D

```java
private static DensityFunction spaghetti2D(HolderGetter<DensityFunction> p_256535_, HolderGetter<NormalNoise.NoiseParameters> p_255650_)
```

**Parameters:**

- `p_256535_` (`HolderGetter<DensityFunction>`)
- `p_255650_` (`HolderGetter<NormalNoise.NoiseParameters>`)

**Returns:** `private static DensityFunction`

### underground

```java
private static DensityFunction underground(HolderGetter<DensityFunction> p_256548_, HolderGetter<NormalNoise.NoiseParameters> p_256236_, DensityFunction p_256658_)
```

**Parameters:**

- `p_256548_` (`HolderGetter<DensityFunction>`)
- `p_256236_` (`HolderGetter<NormalNoise.NoiseParameters>`)
- `p_256658_` (`DensityFunction`)

**Returns:** `private static DensityFunction`

### postProcess

```java
private static DensityFunction postProcess(DensityFunction p_224493_)
```

**Parameters:**

- `p_224493_` (`DensityFunction`)

**Returns:** `private static DensityFunction`

### overworld

```java
protected static NoiseRouter overworld(HolderGetter<DensityFunction> p_255681_, HolderGetter<NormalNoise.NoiseParameters> p_256005_, boolean p_255649_, boolean p_255617_)
```

**Parameters:**

- `p_255681_` (`HolderGetter<DensityFunction>`)
- `p_256005_` (`HolderGetter<NormalNoise.NoiseParameters>`)
- `p_255649_` (`boolean`)
- `p_255617_` (`boolean`)

**Returns:** `protected static NoiseRouter`

### noNewCaves

```java
private static NoiseRouter noNewCaves(HolderGetter<DensityFunction> p_255724_, HolderGetter<NormalNoise.NoiseParameters> p_255986_, DensityFunction p_256378_)
```

**Parameters:**

- `p_255724_` (`HolderGetter<DensityFunction>`)
- `p_255986_` (`HolderGetter<NormalNoise.NoiseParameters>`)
- `p_256378_` (`DensityFunction`)

**Returns:** `private static NoiseRouter`

### slideOverworld

```java
private static DensityFunction slideOverworld(boolean p_224490_, DensityFunction p_224491_)
```

**Parameters:**

- `p_224490_` (`boolean`)
- `p_224491_` (`DensityFunction`)

**Returns:** `private static DensityFunction`

### slide

```java
return slide(p_224490_ ? 16 : 80, p_224490_ ? 0 : 64, p_224490_ ? 0.4 : 0.1171875)
```

**Parameters:**

- `80` (`p_224490_ ? 16 :`)
- `64` (`p_224490_ ? 0 :`)
- `0.1171875` (`p_224490_ ? 0.4 :`)

**Returns:** `return`

### slideNetherLike

```java
private static DensityFunction slideNetherLike(HolderGetter<DensityFunction> p_256084_, int p_255802_, int p_255834_)
```

**Parameters:**

- `p_256084_` (`HolderGetter<DensityFunction>`)
- `p_255802_` (`int`)
- `p_255834_` (`int`)

**Returns:** `private static DensityFunction`

### slideEndLike

```java
private static DensityFunction slideEndLike(DensityFunction p_224440_, int p_224441_, int p_224442_)
```

**Parameters:**

- `p_224440_` (`DensityFunction`)
- `p_224441_` (`int`)
- `p_224442_` (`int`)

**Returns:** `private static DensityFunction`

### slide

```java
return slide()
```

**Returns:** `return`

### nether

```java
protected static NoiseRouter nether(HolderGetter<DensityFunction> p_256256_, HolderGetter<NormalNoise.NoiseParameters> p_256169_)
```

**Parameters:**

- `p_256256_` (`HolderGetter<DensityFunction>`)
- `p_256169_` (`HolderGetter<NormalNoise.NoiseParameters>`)

**Returns:** `protected static NoiseRouter`

### caves

```java
protected static NoiseRouter caves(HolderGetter<DensityFunction> p_256088_, HolderGetter<NormalNoise.NoiseParameters> p_255675_)
```

**Parameters:**

- `p_256088_` (`HolderGetter<DensityFunction>`)
- `p_255675_` (`HolderGetter<NormalNoise.NoiseParameters>`)

**Returns:** `protected static NoiseRouter`

### floatingIslands

```java
protected static NoiseRouter floatingIslands(HolderGetter<DensityFunction> p_256633_, HolderGetter<NormalNoise.NoiseParameters> p_255902_)
```

**Parameters:**

- `p_256633_` (`HolderGetter<DensityFunction>`)
- `p_255902_` (`HolderGetter<NormalNoise.NoiseParameters>`)

**Returns:** `protected static NoiseRouter`

### slideEnd

```java
private static DensityFunction slideEnd(DensityFunction p_224506_)
```

**Parameters:**

- `p_224506_` (`DensityFunction`)

**Returns:** `private static DensityFunction`

### slideEndLike

```java
return slideEndLike()
```

**Returns:** `return`

### end

```java
protected static NoiseRouter end(HolderGetter<DensityFunction> p_256079_)
```

**Parameters:**

- `p_256079_` (`HolderGetter<DensityFunction>`)

**Returns:** `protected static NoiseRouter`

### none

```java
protected static NoiseRouter none()
```

**Returns:** `protected static NoiseRouter`

### splineWithBlending

```java
private static DensityFunction splineWithBlending(DensityFunction p_224454_, DensityFunction p_224455_)
```

**Parameters:**

- `p_224454_` (`DensityFunction`)
- `p_224455_` (`DensityFunction`)

**Returns:** `private static DensityFunction`

### noiseGradientDensity

```java
private static DensityFunction noiseGradientDensity(DensityFunction p_212272_, DensityFunction p_212273_)
```

**Parameters:**

- `p_212272_` (`DensityFunction`)
- `p_212273_` (`DensityFunction`)

**Returns:** `private static DensityFunction`

### yLimitedInterpolatable

```java
private static DensityFunction yLimitedInterpolatable(DensityFunction p_209472_, DensityFunction p_209473_, int p_209474_, int p_209475_, int p_209476_)
```

**Parameters:**

- `p_209472_` (`DensityFunction`)
- `p_209473_` (`DensityFunction`)
- `p_209474_` (`int`)
- `p_209475_` (`int`)
- `p_209476_` (`int`)

**Returns:** `private static DensityFunction`

### slide

```java
private static DensityFunction slide(DensityFunction p_224444_, int p_224445_, int p_224446_, int p_224447_, int p_224448_, double p_224449_, int p_224450_, int p_224451_, double p_224452_)
```

**Parameters:**

- `p_224444_` (`DensityFunction`)
- `p_224445_` (`int`)
- `p_224446_` (`int`)
- `p_224447_` (`int`)
- `p_224448_` (`int`)
- `p_224449_` (`double`)
- `p_224450_` (`int`)
- `p_224451_` (`int`)
- `p_224452_` (`double`)

**Returns:** `private static DensityFunction`

### getSphaghettiRarity2D

```java
protected static double getSphaghettiRarity2D(double p_209564_)
```

**Parameters:**

- `p_209564_` (`double`)

**Returns:** `protected static double`

### getSpaghettiRarity3D

```java
protected static double getSpaghettiRarity3D(double p_209566_)
```

**Parameters:**

- `p_209566_` (`double`)

**Returns:** `protected static double`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `QuantizedSpaghettiRarity` | class |  |
