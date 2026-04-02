# IglooPieces

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `GENERATION_HEIGHT` | `int` |  |

## Methods

### addPieces

```java
public static void addPieces(StructureTemplateManager p_227549_, BlockPos p_227550_, Rotation p_227551_, StructurePieceAccessor p_227552_, RandomSource p_227553_)
```

**Parameters:**

- `p_227549_` (`StructureTemplateManager`)
- `p_227550_` (`BlockPos`)
- `p_227551_` (`Rotation`)
- `p_227552_` (`StructurePieceAccessor`)
- `p_227553_` (`RandomSource`)

**Returns:** `public static void`

### IglooPiece

```java
public IglooPiece(StructureTemplateManager p_227555_, ResourceLocation p_227556_, BlockPos p_227557_, Rotation p_227558_, int p_227559_)
```

**Parameters:**

- `p_227555_` (`StructureTemplateManager`)
- `p_227556_` (`ResourceLocation`)
- `p_227557_` (`BlockPos`)
- `p_227558_` (`Rotation`)
- `p_227559_` (`int`)

**Returns:** `public`

### IglooPiece

```java
public IglooPiece(StructureTemplateManager p_227561_, CompoundTag p_227562_)
```

**Parameters:**

- `p_227561_` (`StructureTemplateManager`)
- `p_227562_` (`CompoundTag`)

**Returns:** `public`

### makeSettings

```java
private static StructurePlaceSettings makeSettings(Rotation p_227576_, ResourceLocation p_227577_)
```

**Parameters:**

- `p_227576_` (`Rotation`)
- `p_227577_` (`ResourceLocation`)

**Returns:** `private static StructurePlaceSettings`

### makePosition

```java
private static BlockPos makePosition(ResourceLocation p_227564_, BlockPos p_227565_, int p_227566_)
```

**Parameters:**

- `p_227564_` (`ResourceLocation`)
- `p_227565_` (`BlockPos`)
- `p_227566_` (`int`)

**Returns:** `private static BlockPos`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_227579_, CompoundTag p_227580_)
```

**Parameters:**

- `p_227579_` (`StructurePieceSerializationContext`)
- `p_227580_` (`CompoundTag`)

### handleDataMarker

```java
protected void handleDataMarker(String p_227582_, BlockPos p_227583_, ServerLevelAccessor p_227584_, RandomSource p_227585_, BoundingBox p_227586_)
```

**Parameters:**

- `p_227582_` (`String`)
- `p_227583_` (`BlockPos`)
- `p_227584_` (`ServerLevelAccessor`)
- `p_227585_` (`RandomSource`)
- `p_227586_` (`BoundingBox`)

### postProcess

```java
public void postProcess(WorldGenLevel p_227568_, StructureManager p_227569_, ChunkGenerator p_227570_, RandomSource p_227571_, BoundingBox p_227572_, ChunkPos p_227573_, BlockPos p_227574_)
```

**Parameters:**

- `p_227568_` (`WorldGenLevel`)
- `p_227569_` (`StructureManager`)
- `p_227570_` (`ChunkGenerator`)
- `p_227571_` (`RandomSource`)
- `p_227572_` (`BoundingBox`)
- `p_227573_` (`ChunkPos`)
- `p_227574_` (`BlockPos`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `IglooPiece` | class |  |
