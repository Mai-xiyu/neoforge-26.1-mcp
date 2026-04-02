# OceanRuinPieces

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class

## Methods

### archyRuleProcessor

```java
private static StructureProcessor archyRuleProcessor(Block p_277376_, Block p_277934_, ResourceKey<LootTable> p_335398_)
```

**Parameters:**

- `p_277376_` (`Block`)
- `p_277934_` (`Block`)
- `p_335398_` (`ResourceKey<LootTable>`)

**Returns:** `private static StructureProcessor`

### getSmallWarmRuin

```java
private static ResourceLocation getSmallWarmRuin(RandomSource p_228983_)
```

**Parameters:**

- `p_228983_` (`RandomSource`)

**Returns:** `private static ResourceLocation`

### getBigWarmRuin

```java
private static ResourceLocation getBigWarmRuin(RandomSource p_229011_)
```

**Parameters:**

- `p_229011_` (`RandomSource`)

**Returns:** `private static ResourceLocation`

### addPieces

```java
public static void addPieces(StructureTemplateManager p_228995_, BlockPos p_228996_, Rotation p_228997_, StructurePieceAccessor p_228998_, RandomSource p_228999_, OceanRuinStructure p_229000_)
```

**Parameters:**

- `p_228995_` (`StructureTemplateManager`)
- `p_228996_` (`BlockPos`)
- `p_228997_` (`Rotation`)
- `p_228998_` (`StructurePieceAccessor`)
- `p_228999_` (`RandomSource`)
- `p_229000_` (`OceanRuinStructure`)

**Returns:** `public static void`

### addPiece

```java
 addPiece()
```

**Returns:** ``

### addClusterRuins

```java
 addClusterRuins()
```

**Returns:** ``

### addClusterRuins

```java
private static void addClusterRuins(StructureTemplateManager p_228988_, RandomSource p_228989_, Rotation p_228990_, BlockPos p_228991_, OceanRuinStructure p_228992_, StructurePieceAccessor p_228993_)
```

**Parameters:**

- `p_228988_` (`StructureTemplateManager`)
- `p_228989_` (`RandomSource`)
- `p_228990_` (`Rotation`)
- `p_228991_` (`BlockPos`)
- `p_228992_` (`OceanRuinStructure`)
- `p_228993_` (`StructurePieceAccessor`)

**Returns:** `private static void`

### addPiece

```java
 addPiece()
```

**Returns:** ``

### allPositions

```java
private static List<BlockPos> allPositions(RandomSource p_228985_, BlockPos p_228986_)
```

**Parameters:**

- `p_228985_` (`RandomSource`)
- `p_228986_` (`BlockPos`)

**Returns:** `private static List<BlockPos>`

### addPiece

```java
private static void addPiece(StructureTemplateManager p_229002_, BlockPos p_229003_, Rotation p_229004_, StructurePieceAccessor p_229005_, RandomSource p_229006_, OceanRuinStructure p_229007_, boolean p_229008_, float p_229009_)
```

**Parameters:**

- `p_229002_` (`StructureTemplateManager`)
- `p_229003_` (`BlockPos`)
- `p_229004_` (`Rotation`)
- `p_229005_` (`StructurePieceAccessor`)
- `p_229006_` (`RandomSource`)
- `p_229007_` (`OceanRuinStructure`)
- `p_229008_` (`boolean`)
- `p_229009_` (`float`)

**Returns:** `private static void`

### OceanRuinPiece

```java
public OceanRuinPiece(StructureTemplateManager p_229018_, ResourceLocation p_229019_, BlockPos p_229020_, Rotation p_229021_, float p_229022_, OceanRuinStructure.Type p_229023_, boolean p_229024_)
```

**Parameters:**

- `p_229018_` (`StructureTemplateManager`)
- `p_229019_` (`ResourceLocation`)
- `p_229020_` (`BlockPos`)
- `p_229021_` (`Rotation`)
- `p_229022_` (`float`)
- `p_229023_` (`OceanRuinStructure.Type`)
- `p_229024_` (`boolean`)

**Returns:** `public`

### OceanRuinPiece

```java
private OceanRuinPiece(StructureTemplateManager p_277563_, CompoundTag p_277610_, Rotation p_277637_, float p_277437_, OceanRuinStructure.Type p_277873_, boolean p_277924_)
```

**Parameters:**

- `p_277563_` (`StructureTemplateManager`)
- `p_277610_` (`CompoundTag`)
- `p_277637_` (`Rotation`)
- `p_277437_` (`float`)
- `p_277873_` (`OceanRuinStructure.Type`)
- `p_277924_` (`boolean`)

**Returns:** `private`

### makeSettings

```java
private static StructurePlaceSettings makeSettings(Rotation p_277572_, float p_277489_, OceanRuinStructure.Type p_277631_)
```

**Parameters:**

- `p_277572_` (`Rotation`)
- `p_277489_` (`float`)
- `p_277631_` (`OceanRuinStructure.Type`)

**Returns:** `private static StructurePlaceSettings`

### create

```java
public static OceanRuinPieces.OceanRuinPiece create(StructureTemplateManager p_277874_, CompoundTag p_277773_)
```

**Parameters:**

- `p_277874_` (`StructureTemplateManager`)
- `p_277773_` (`CompoundTag`)

**Returns:** `public static OceanRuinPieces.OceanRuinPiece`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229039_, CompoundTag p_229040_)
```

**Parameters:**

- `p_229039_` (`StructurePieceSerializationContext`)
- `p_229040_` (`CompoundTag`)

### handleDataMarker

```java
protected void handleDataMarker(String p_229046_, BlockPos p_229047_, ServerLevelAccessor p_229048_, RandomSource p_229049_, BoundingBox p_229050_)
```

**Parameters:**

- `p_229046_` (`String`)
- `p_229047_` (`BlockPos`)
- `p_229048_` (`ServerLevelAccessor`)
- `p_229049_` (`RandomSource`)
- `p_229050_` (`BoundingBox`)

### postProcess

```java
public void postProcess(WorldGenLevel p_229029_, StructureManager p_229030_, ChunkGenerator p_229031_, RandomSource p_229032_, BoundingBox p_229033_, ChunkPos p_229034_, BlockPos p_229035_)
```

**Parameters:**

- `p_229029_` (`WorldGenLevel`)
- `p_229030_` (`StructureManager`)
- `p_229031_` (`ChunkGenerator`)
- `p_229032_` (`RandomSource`)
- `p_229033_` (`BoundingBox`)
- `p_229034_` (`ChunkPos`)
- `p_229035_` (`BlockPos`)

### getHeight

```java
private int getHeight(BlockPos p_229042_, BlockGetter p_229043_, BlockPos p_229044_)
```

**Parameters:**

- `p_229042_` (`BlockPos`)
- `p_229043_` (`BlockGetter`)
- `p_229044_` (`BlockPos`)

**Returns:** `private int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `OceanRuinPiece` | class |  |
