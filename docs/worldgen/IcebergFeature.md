# IcebergFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `Feature<BlockStateConfiguration>`

## Methods

### IcebergFeature

```java
public IcebergFeature(Codec<BlockStateConfiguration> p_66017_)
```

**Parameters:**

- `p_66017_` (`Codec<BlockStateConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### place

```java
public boolean place(FeaturePlaceContext<BlockStateConfiguration> p_159884_)
```

**Parameters:**

- `p_159884_` (`FeaturePlaceContext<BlockStateConfiguration>`)

**Returns:** `boolean`

### generateCutOut

```java
private void generateCutOut(RandomSource p_225100_, LevelAccessor p_225101_, int p_225102_, int p_225103_, BlockPos p_225104_, boolean p_225105_, int p_225106_, double p_225107_, int p_225108_)
```

**Parameters:**

- `p_225100_` (`RandomSource`)
- `p_225101_` (`LevelAccessor`)
- `p_225102_` (`int`)
- `p_225103_` (`int`)
- `p_225104_` (`BlockPos`)
- `p_225105_` (`boolean`)
- `p_225106_` (`int`)
- `p_225107_` (`double`)
- `p_225108_` (`int`)

**Returns:** `private void`

### carve

```java
private void carve(int p_66036_, int p_66037_, BlockPos p_66038_, LevelAccessor p_66039_, boolean p_66040_, double p_66041_, BlockPos p_66042_, int p_66043_, int p_66044_)
```

**Parameters:**

- `p_66036_` (`int`)
- `p_66037_` (`int`)
- `p_66038_` (`BlockPos`)
- `p_66039_` (`LevelAccessor`)
- `p_66040_` (`boolean`)
- `p_66041_` (`double`)
- `p_66042_` (`BlockPos`)
- `p_66043_` (`int`)
- `p_66044_` (`int`)

**Returns:** `private void`

### removeFloatingSnowLayer

```java
private void removeFloatingSnowLayer(LevelAccessor p_66049_, BlockPos p_66050_)
```

**Parameters:**

- `p_66049_` (`LevelAccessor`)
- `p_66050_` (`BlockPos`)

**Returns:** `private void`

### generateIcebergBlock

```java
private void generateIcebergBlock(LevelAccessor p_225110_, RandomSource p_225111_, BlockPos p_225112_, int p_225113_, int p_225114_, int p_225115_, int p_225116_, int p_225117_, int p_225118_, boolean p_225119_, int p_225120_, double p_225121_, boolean p_225122_, BlockState p_225123_)
```

**Parameters:**

- `p_225110_` (`LevelAccessor`)
- `p_225111_` (`RandomSource`)
- `p_225112_` (`BlockPos`)
- `p_225113_` (`int`)
- `p_225114_` (`int`)
- `p_225115_` (`int`)
- `p_225116_` (`int`)
- `p_225117_` (`int`)
- `p_225118_` (`int`)
- `p_225119_` (`boolean`)
- `p_225120_` (`int`)
- `p_225121_` (`double`)
- `p_225122_` (`boolean`)
- `p_225123_` (`BlockState`)

**Returns:** `private void`

### setIcebergBlock

```java
private void setIcebergBlock(BlockPos p_225125_, LevelAccessor p_225126_, RandomSource p_225127_, int p_225128_, int p_225129_, boolean p_225130_, boolean p_225131_, BlockState p_225132_)
```

**Parameters:**

- `p_225125_` (`BlockPos`)
- `p_225126_` (`LevelAccessor`)
- `p_225127_` (`RandomSource`)
- `p_225128_` (`int`)
- `p_225129_` (`int`)
- `p_225130_` (`boolean`)
- `p_225131_` (`boolean`)
- `p_225132_` (`BlockState`)

**Returns:** `private void`

### getEllipseC

```java
private int getEllipseC(int p_66019_, int p_66020_, int p_66021_)
```

**Parameters:**

- `p_66019_` (`int`)
- `p_66020_` (`int`)
- `p_66021_` (`int`)

**Returns:** `private int`

### signedDistanceCircle

```java
private double signedDistanceCircle(int p_225089_, int p_225090_, BlockPos p_225091_, int p_225092_, RandomSource p_225093_)
```

**Parameters:**

- `p_225089_` (`int`)
- `p_225090_` (`int`)
- `p_225091_` (`BlockPos`)
- `p_225092_` (`int`)
- `p_225093_` (`RandomSource`)

**Returns:** `private double`

### signedDistanceEllipse

```java
private double signedDistanceEllipse(int p_66023_, int p_66024_, BlockPos p_66025_, int p_66026_, int p_66027_, double p_66028_)
```

**Parameters:**

- `p_66023_` (`int`)
- `p_66024_` (`int`)
- `p_66025_` (`BlockPos`)
- `p_66026_` (`int`)
- `p_66027_` (`int`)
- `p_66028_` (`double`)

**Returns:** `private double`

### heightDependentRadiusRound

```java
private int heightDependentRadiusRound(RandomSource p_225095_, int p_225096_, int p_225097_, int p_225098_)
```

**Parameters:**

- `p_225095_` (`RandomSource`)
- `p_225096_` (`int`)
- `p_225097_` (`int`)
- `p_225098_` (`int`)

**Returns:** `private int`

### heightDependentRadiusEllipse

```java
private int heightDependentRadiusEllipse(int p_66110_, int p_66111_, int p_66112_)
```

**Parameters:**

- `p_66110_` (`int`)
- `p_66111_` (`int`)
- `p_66112_` (`int`)

**Returns:** `private int`

### heightDependentRadiusSteep

```java
private int heightDependentRadiusSteep(RandomSource p_225134_, int p_225135_, int p_225136_, int p_225137_)
```

**Parameters:**

- `p_225134_` (`RandomSource`)
- `p_225135_` (`int`)
- `p_225136_` (`int`)
- `p_225137_` (`int`)

**Returns:** `private int`

### isIcebergState

```java
private static boolean isIcebergState(BlockState p_159886_)
```

**Parameters:**

- `p_159886_` (`BlockState`)

**Returns:** `private static boolean`

### belowIsAir

```java
private boolean belowIsAir(BlockGetter p_66046_, BlockPos p_66047_)
```

**Parameters:**

- `p_66046_` (`BlockGetter`)
- `p_66047_` (`BlockPos`)

**Returns:** `private boolean`

### smooth

```java
private void smooth(LevelAccessor p_66052_, BlockPos p_66053_, int p_66054_, int p_66055_, boolean p_66056_, int p_66057_)
```

**Parameters:**

- `p_66052_` (`LevelAccessor`)
- `p_66053_` (`BlockPos`)
- `p_66054_` (`int`)
- `p_66055_` (`int`)
- `p_66056_` (`boolean`)
- `p_66057_` (`int`)

**Returns:** `private void`
