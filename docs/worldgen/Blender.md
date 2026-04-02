# Blender

**Package:** `net.minecraft.world.level.levelgen.blending`
**Type:** class

## Methods

### blendOffsetAndFactor

```java
public Blender.BlendingOutput blendOffsetAndFactor(int p_209724_, int p_209725_)
```

**Parameters:**

- `p_209724_` (`int`)
- `p_209725_` (`int`)

**Returns:** `Blender.BlendingOutput`

### blendDensity

```java
public double blendDensity(DensityFunction.FunctionContext p_209727_, double p_209728_)
```

**Parameters:**

- `p_209727_` (`DensityFunction.FunctionContext`)
- `p_209728_` (`double`)

**Returns:** `double`

### getBiomeResolver

```java
public BiomeResolver getBiomeResolver(BiomeResolver p_190232_)
```

**Parameters:**

- `p_190232_` (`BiomeResolver`)

**Returns:** `BiomeResolver`

### empty

```java
public static Blender empty()
```

**Returns:** `public static Blender`

### of

```java
public static Blender of(WorldGenRegion p_190203_)
```

**Parameters:**

- `p_190203_` (`WorldGenRegion`)

**Returns:** `public static Blender`

### Blender

```java
 Blender(Long2ObjectOpenHashMap<BlendingData> p_202197_, Long2ObjectOpenHashMap<BlendingData> p_202198_)
```

**Parameters:**

- `p_202197_` (`Long2ObjectOpenHashMap<BlendingData>`)
- `p_202198_` (`Long2ObjectOpenHashMap<BlendingData>`)

**Returns:** ``

### blendOffsetAndFactor

```java
public Blender.BlendingOutput blendOffsetAndFactor(int p_209719_, int p_209720_)
```

**Parameters:**

- `p_209719_` (`int`)
- `p_209720_` (`int`)

**Returns:** `public Blender.BlendingOutput`

### heightToOffset

```java
private static double heightToOffset(double p_190155_)
```

**Parameters:**

- `p_190155_` (`double`)

**Returns:** `private static double`

### blendDensity

```java
public double blendDensity(DensityFunction.FunctionContext p_209721_, double p_209722_)
```

**Parameters:**

- `p_209721_` (`DensityFunction.FunctionContext`)
- `p_209722_` (`double`)

**Returns:** `public double`

### getBlendingDataValue

```java
private double getBlendingDataValue(int p_190175_, int p_190176_, int p_190177_, Blender.CellValueGetter p_190178_)
```

**Parameters:**

- `p_190175_` (`int`)
- `p_190176_` (`int`)
- `p_190177_` (`int`)
- `p_190178_` (`Blender.CellValueGetter`)

**Returns:** `private double`

### getBlendingDataValue

```java
private double getBlendingDataValue(Blender.CellValueGetter p_190212_, int p_190213_, int p_190214_, int p_190215_, int p_190216_, int p_190217_)
```

**Parameters:**

- `p_190212_` (`Blender.CellValueGetter`)
- `p_190213_` (`int`)
- `p_190214_` (`int`)
- `p_190215_` (`int`)
- `p_190216_` (`int`)
- `p_190217_` (`int`)

**Returns:** `private double`

### getBiomeResolver

```java
public BiomeResolver getBiomeResolver(BiomeResolver p_190204_)
```

**Parameters:**

- `p_190204_` (`BiomeResolver`)

**Returns:** `public BiomeResolver`

### generateBorderTicks

```java
public static void generateBorderTicks(WorldGenRegion p_197032_, ChunkAccess p_197033_)
```

**Parameters:**

- `p_197032_` (`WorldGenRegion`)
- `p_197033_` (`ChunkAccess`)

**Returns:** `public static void`

### generateBorderTick

```java
private static void generateBorderTick(ChunkAccess p_197041_, BlockPos p_197042_)
```

**Parameters:**

- `p_197041_` (`ChunkAccess`)
- `p_197042_` (`BlockPos`)

**Returns:** `private static void`

### addAroundOldChunksCarvingMaskFilter

```java
public static void addAroundOldChunksCarvingMaskFilter(WorldGenLevel p_197035_, ProtoChunk p_197036_)
```

**Parameters:**

- `p_197035_` (`WorldGenLevel`)
- `p_197036_` (`ProtoChunk`)

**Returns:** `public static void`

### makeOldChunkDistanceGetter

```java
public static Blender.DistanceGetter makeOldChunkDistanceGetter(BlendingData p_224727_, Map<Direction8, BlendingData> p_224728_)
```

**Parameters:**

- `p_224727_` (`BlendingData`)
- `p_224728_` (`Map<Direction8, BlendingData>`)

**Returns:** `public static Blender.DistanceGetter`

### makeOffsetOldChunkDistanceGetter

```java
private static Blender.DistanceGetter makeOffsetOldChunkDistanceGetter(Direction8 p_224730_, BlendingData p_224731_)
```

**Parameters:**

- `p_224730_` (`Direction8`)
- `p_224731_` (`BlendingData`)

**Returns:** `private static Blender.DistanceGetter`

### distanceToCube

```java
> distanceToCube(p_224703_ - 8.0 - d5, p_224704_ - d4, p_224705_ - 8.0 - d2)
```

**Parameters:**

- `d5` (`p_224703_ - 8.0 -`)
- `d4` (`p_224704_ -`)
- `d2` (`p_224705_ - 8.0 -`)

**Returns:** `>`

### distanceToCube

```java
private static double distanceToCube(double p_197025_, double p_197026_, double p_197027_, double p_197028_, double p_197029_, double p_197030_)
```

**Parameters:**

- `p_197025_` (`double`)
- `p_197026_` (`double`)
- `p_197027_` (`double`)
- `p_197028_` (`double`)
- `p_197029_` (`double`)
- `p_197030_` (`double`)

**Returns:** `private static double`

### BlendingOutput

```java
public static record BlendingOutput(double alpha, double blendingOffset)
```

**Parameters:**

- `alpha` (`double`)
- `blendingOffset` (`double`)

**Returns:** `public static record`

### get

```java
double get(BlendingData p_190234_, int p_190235_, int p_190236_, int p_190237_)
```

**Parameters:**

- `p_190234_` (`BlendingData`)
- `p_190235_` (`int`)
- `p_190236_` (`int`)
- `p_190237_` (`int`)

**Returns:** `double`

### getDistance

```java
double getDistance(double p_197062_, double p_197063_, double p_197064_)
```

**Parameters:**

- `p_197062_` (`double`)
- `p_197063_` (`double`)
- `p_197064_` (`double`)

**Returns:** `double`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BlendingOutput` | record |  |
| `DistanceGetter` | interface |  |
