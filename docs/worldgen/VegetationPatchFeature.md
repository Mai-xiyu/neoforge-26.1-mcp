# VegetationPatchFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `Feature<VegetationPatchConfiguration>`

## Methods

### VegetationPatchFeature

```java
public VegetationPatchFeature(Codec<VegetationPatchConfiguration> p_160588_)
```

**Parameters:**

- `p_160588_` (`Codec<VegetationPatchConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### place

```java
public boolean place(FeaturePlaceContext<VegetationPatchConfiguration> p_160612_)
```

**Parameters:**

- `p_160612_` (`FeaturePlaceContext<VegetationPatchConfiguration>`)

**Returns:** `boolean`

### placeGroundPatch

```java
protected Set<BlockPos> placeGroundPatch(WorldGenLevel p_225311_, VegetationPatchConfiguration p_225312_, RandomSource p_225313_, BlockPos p_225314_, Predicate<BlockState> p_225315_, int p_225316_, int p_225317_)
```

**Parameters:**

- `p_225311_` (`WorldGenLevel`)
- `p_225312_` (`VegetationPatchConfiguration`)
- `p_225313_` (`RandomSource`)
- `p_225314_` (`BlockPos`)
- `p_225315_` (`Predicate<BlockState>`)
- `p_225316_` (`int`)
- `p_225317_` (`int`)

**Returns:** `protected Set<BlockPos>`

### distributeVegetation

```java
protected void distributeVegetation(FeaturePlaceContext<VegetationPatchConfiguration> p_225331_, WorldGenLevel p_225332_, VegetationPatchConfiguration p_225333_, RandomSource p_225334_, Set<BlockPos> p_225335_, int p_225336_, int p_225337_)
```

**Parameters:**

- `p_225331_` (`FeaturePlaceContext<VegetationPatchConfiguration>`)
- `p_225332_` (`WorldGenLevel`)
- `p_225333_` (`VegetationPatchConfiguration`)
- `p_225334_` (`RandomSource`)
- `p_225335_` (`Set<BlockPos>`)
- `p_225336_` (`int`)
- `p_225337_` (`int`)

**Returns:** `protected void`

### placeVegetation

```java
protected boolean placeVegetation(WorldGenLevel p_225318_, VegetationPatchConfiguration p_225319_, ChunkGenerator p_225320_, RandomSource p_225321_, BlockPos p_225322_)
```

**Parameters:**

- `p_225318_` (`WorldGenLevel`)
- `p_225319_` (`VegetationPatchConfiguration`)
- `p_225320_` (`ChunkGenerator`)
- `p_225321_` (`RandomSource`)
- `p_225322_` (`BlockPos`)

**Returns:** `protected boolean`

### placeGround

```java
protected boolean placeGround(WorldGenLevel p_225324_, VegetationPatchConfiguration p_225325_, Predicate<BlockState> p_225326_, RandomSource p_225327_, BlockPos.MutableBlockPos p_225328_, int p_225329_)
```

**Parameters:**

- `p_225324_` (`WorldGenLevel`)
- `p_225325_` (`VegetationPatchConfiguration`)
- `p_225326_` (`Predicate<BlockState>`)
- `p_225327_` (`RandomSource`)
- `p_225328_` (`BlockPos.MutableBlockPos`)
- `p_225329_` (`int`)

**Returns:** `protected boolean`
