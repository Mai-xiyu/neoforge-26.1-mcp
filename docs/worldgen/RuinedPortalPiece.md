# RuinedPortalPiece

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class
**Extends:** `TemplateStructurePiece`

## Methods

### RuinedPortalPiece

```java
public RuinedPortalPiece(StructureTemplateManager p_229105_, BlockPos p_229106_, RuinedPortalPiece.VerticalPlacement p_229107_, RuinedPortalPiece.Properties p_229108_, ResourceLocation p_229109_, StructureTemplate p_229110_, Rotation p_229111_, Mirror p_229112_, BlockPos p_229113_)
```

**Parameters:**

- `p_229105_` (`StructureTemplateManager`)
- `p_229106_` (`BlockPos`)
- `p_229107_` (`RuinedPortalPiece.VerticalPlacement`)
- `p_229108_` (`RuinedPortalPiece.Properties`)
- `p_229109_` (`ResourceLocation`)
- `p_229110_` (`StructureTemplate`)
- `p_229111_` (`Rotation`)
- `p_229112_` (`Mirror`)
- `p_229113_` (`BlockPos`)

**Returns:** `public`

### RuinedPortalPiece

```java
public RuinedPortalPiece(StructureTemplateManager p_229115_, CompoundTag p_229116_)
```

**Parameters:**

- `p_229115_` (`StructureTemplateManager`)
- `p_229116_` (`CompoundTag`)

**Returns:** `public`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229158_, CompoundTag p_229159_)
```

**Parameters:**

- `p_229158_` (`StructurePieceSerializationContext`)
- `p_229159_` (`CompoundTag`)

### makeSettings

```java
private static StructurePlaceSettings makeSettings(StructureTemplateManager p_229166_, CompoundTag p_229167_, ResourceLocation p_229168_)
```

**Parameters:**

- `p_229166_` (`StructureTemplateManager`)
- `p_229167_` (`CompoundTag`)
- `p_229168_` (`ResourceLocation`)

**Returns:** `private static StructurePlaceSettings`

### makeSettings

```java
private static StructurePlaceSettings makeSettings(Mirror p_229152_, Rotation p_229153_, RuinedPortalPiece.VerticalPlacement p_229154_, BlockPos p_229155_, RuinedPortalPiece.Properties p_229156_)
```

**Parameters:**

- `p_229152_` (`Mirror`)
- `p_229153_` (`Rotation`)
- `p_229154_` (`RuinedPortalPiece.VerticalPlacement`)
- `p_229155_` (`BlockPos`)
- `p_229156_` (`RuinedPortalPiece.Properties`)

**Returns:** `private static StructurePlaceSettings`

### getLavaProcessorRule

```java
private static ProcessorRule getLavaProcessorRule(RuinedPortalPiece.VerticalPlacement p_229163_, RuinedPortalPiece.Properties p_229164_)
```

**Parameters:**

- `p_229163_` (`RuinedPortalPiece.VerticalPlacement`)
- `p_229164_` (`RuinedPortalPiece.Properties`)

**Returns:** `private static ProcessorRule`

### getBlockReplaceRule

```java
return getBlockReplaceRule()
```

**Returns:** `return`

### postProcess

```java
public void postProcess(WorldGenLevel p_229137_, StructureManager p_229138_, ChunkGenerator p_229139_, RandomSource p_229140_, BoundingBox p_229141_, ChunkPos p_229142_, BlockPos p_229143_)
```

**Parameters:**

- `p_229137_` (`WorldGenLevel`)
- `p_229138_` (`StructureManager`)
- `p_229139_` (`ChunkGenerator`)
- `p_229140_` (`RandomSource`)
- `p_229141_` (`BoundingBox`)
- `p_229142_` (`ChunkPos`)
- `p_229143_` (`BlockPos`)

### handleDataMarker

```java
protected void handleDataMarker(String p_229170_, BlockPos p_229171_, ServerLevelAccessor p_229172_, RandomSource p_229173_, BoundingBox p_229174_)
```

**Parameters:**

- `p_229170_` (`String`)
- `p_229171_` (`BlockPos`)
- `p_229172_` (`ServerLevelAccessor`)
- `p_229173_` (`RandomSource`)
- `p_229174_` (`BoundingBox`)

### maybeAddVines

```java
private void maybeAddVines(RandomSource p_229121_, LevelAccessor p_229122_, BlockPos p_229123_)
```

**Parameters:**

- `p_229121_` (`RandomSource`)
- `p_229122_` (`LevelAccessor`)
- `p_229123_` (`BlockPos`)

**Returns:** `private void`

### maybeAddLeavesAbove

```java
private void maybeAddLeavesAbove(RandomSource p_229182_, LevelAccessor p_229183_, BlockPos p_229184_)
```

**Parameters:**

- `p_229182_` (`RandomSource`)
- `p_229183_` (`LevelAccessor`)
- `p_229184_` (`BlockPos`)

**Returns:** `private void`

### addNetherrackDripColumnsBelowPortal

```java
private void addNetherrackDripColumnsBelowPortal(RandomSource p_229118_, LevelAccessor p_229119_)
```

**Parameters:**

- `p_229118_` (`RandomSource`)
- `p_229119_` (`LevelAccessor`)

**Returns:** `private void`

### addNetherrackDripColumn

```java
private void addNetherrackDripColumn(RandomSource p_229190_, LevelAccessor p_229191_, BlockPos p_229192_)
```

**Parameters:**

- `p_229190_` (`RandomSource`)
- `p_229191_` (`LevelAccessor`)
- `p_229192_` (`BlockPos`)

**Returns:** `private void`

### spreadNetherrack

```java
private void spreadNetherrack(RandomSource p_229179_, LevelAccessor p_229180_)
```

**Parameters:**

- `p_229179_` (`RandomSource`)
- `p_229180_` (`LevelAccessor`)

**Returns:** `private void`

### canBlockBeReplacedByNetherrackOrMagma

```java
private boolean canBlockBeReplacedByNetherrackOrMagma(LevelAccessor p_229134_, BlockPos p_229135_)
```

**Parameters:**

- `p_229134_` (`LevelAccessor`)
- `p_229135_` (`BlockPos`)

**Returns:** `private boolean`

### placeNetherrackOrMagma

```java
private void placeNetherrackOrMagma(RandomSource p_229194_, LevelAccessor p_229195_, BlockPos p_229196_)
```

**Parameters:**

- `p_229194_` (`RandomSource`)
- `p_229195_` (`LevelAccessor`)
- `p_229196_` (`BlockPos`)

**Returns:** `private void`

### getSurfaceY

```java
private static int getSurfaceY(LevelAccessor p_229129_, int p_229130_, int p_229131_, RuinedPortalPiece.VerticalPlacement p_229132_)
```

**Parameters:**

- `p_229129_` (`LevelAccessor`)
- `p_229130_` (`int`)
- `p_229131_` (`int`)
- `p_229132_` (`RuinedPortalPiece.VerticalPlacement`)

**Returns:** `private static int`

### getHeightMapType

```java
public static Heightmap.Types getHeightMapType(RuinedPortalPiece.VerticalPlacement p_229161_)
```

**Parameters:**

- `p_229161_` (`RuinedPortalPiece.VerticalPlacement`)

**Returns:** `public static Heightmap.Types`

### getBlockReplaceRule

```java
private static ProcessorRule getBlockReplaceRule(Block p_229145_, float p_229146_, Block p_229147_)
```

**Parameters:**

- `p_229145_` (`Block`)
- `p_229146_` (`float`)
- `p_229147_` (`Block`)

**Returns:** `private static ProcessorRule`

### getBlockReplaceRule

```java
private static ProcessorRule getBlockReplaceRule(Block p_229149_, Block p_229150_)
```

**Parameters:**

- `p_229149_` (`Block`)
- `p_229150_` (`Block`)

**Returns:** `private static ProcessorRule`

### Properties

```java
public Properties()
```

**Returns:** `public`

### Properties

```java
public Properties(boolean p_229207_, float p_229208_, boolean p_229209_, boolean p_229210_, boolean p_229211_, boolean p_229212_)
```

**Parameters:**

- `p_229207_` (`boolean`)
- `p_229208_` (`float`)
- `p_229209_` (`boolean`)
- `p_229210_` (`boolean`)
- `p_229211_` (`boolean`)
- `p_229212_` (`boolean`)

**Returns:** `public`

### IN_NETHER

```java
, IN_NETHER()
```

**Returns:** `,`

### VerticalPlacement

```java
private VerticalPlacement(String p_229240_)
```

**Parameters:**

- `p_229240_` (`String`)

**Returns:** `private`

### getName

```java
public String getName()
```

**Returns:** `public String`

### byName

```java
public static RuinedPortalPiece.VerticalPlacement byName(String p_229243_)
```

**Parameters:**

- `p_229243_` (`String`)

**Returns:** `public static RuinedPortalPiece.VerticalPlacement`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Properties` | class |  |
| `VerticalPlacement` | enum |  |
