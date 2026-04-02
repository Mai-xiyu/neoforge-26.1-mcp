# WaterloggedVegetationPatchFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `VegetationPatchFeature`

## Methods

### WaterloggedVegetationPatchFeature

```java
public WaterloggedVegetationPatchFeature(Codec<VegetationPatchConfiguration> p_160635_)
```

**Parameters:**

- `p_160635_` (`Codec<VegetationPatchConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### placeGroundPatch

```java
protected Set<BlockPos> placeGroundPatch(WorldGenLevel p_225339_, VegetationPatchConfiguration p_225340_, RandomSource p_225341_, BlockPos p_225342_, Predicate<BlockState> p_225343_, int p_225344_, int p_225345_)
```

**Parameters:**

- `p_225339_` (`WorldGenLevel`)
- `p_225340_` (`VegetationPatchConfiguration`)
- `p_225341_` (`RandomSource`)
- `p_225342_` (`BlockPos`)
- `p_225343_` (`Predicate<BlockState>`)
- `p_225344_` (`int`)
- `p_225345_` (`int`)

**Returns:** `Set<BlockPos>`

### isExposed

```java
private static boolean isExposed(WorldGenLevel p_160656_, Set<BlockPos> p_160657_, BlockPos p_160658_, BlockPos.MutableBlockPos p_160659_)
```

**Parameters:**

- `p_160656_` (`WorldGenLevel`)
- `p_160657_` (`Set<BlockPos>`)
- `p_160658_` (`BlockPos`)
- `p_160659_` (`BlockPos.MutableBlockPos`)

**Returns:** `private static boolean`

### isExposedDirection

```java
private static boolean isExposedDirection(WorldGenLevel p_160651_, BlockPos p_160652_, BlockPos.MutableBlockPos p_160653_, Direction p_160654_)
```

**Parameters:**

- `p_160651_` (`WorldGenLevel`)
- `p_160652_` (`BlockPos`)
- `p_160653_` (`BlockPos.MutableBlockPos`)
- `p_160654_` (`Direction`)

**Returns:** `private static boolean`

### placeVegetation

```java
protected boolean placeVegetation(WorldGenLevel p_225347_, VegetationPatchConfiguration p_225348_, ChunkGenerator p_225349_, RandomSource p_225350_, BlockPos p_225351_)
```

**Parameters:**

- `p_225347_` (`WorldGenLevel`)
- `p_225348_` (`VegetationPatchConfiguration`)
- `p_225349_` (`ChunkGenerator`)
- `p_225350_` (`RandomSource`)
- `p_225351_` (`BlockPos`)

**Returns:** `boolean`
