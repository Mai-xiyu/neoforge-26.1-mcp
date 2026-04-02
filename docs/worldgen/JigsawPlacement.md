# JigsawPlacement

**Package:** `net.minecraft.world.level.levelgen.structure.pools`
**Type:** class

## Methods

### addPieces

```java
public static Optional<Structure.GenerationStub> addPieces(Structure.GenerationContext p_227239_, Holder<StructureTemplatePool> p_227240_, Optional<ResourceLocation> p_227241_, int p_227242_, BlockPos p_227243_, boolean p_227244_, Optional<Heightmap.Types> p_227245_, int p_227246_, PoolAliasLookup p_307522_, DimensionPadding p_348489_, LiquidSettings p_352161_)
```

**Parameters:**

- `p_227239_` (`Structure.GenerationContext`)
- `p_227240_` (`Holder<StructureTemplatePool>`)
- `p_227241_` (`Optional<ResourceLocation>`)
- `p_227242_` (`int`)
- `p_227243_` (`BlockPos`)
- `p_227244_` (`boolean`)
- `p_227245_` (`Optional<Heightmap.Types>`)
- `p_227246_` (`int`)
- `p_307522_` (`PoolAliasLookup`)
- `p_348489_` (`DimensionPadding`)
- `p_352161_` (`LiquidSettings`)

**Returns:** `public static Optional<Structure.GenerationStub>`

### getRandomNamedJigsaw

```java
private static Optional<BlockPos> getRandomNamedJigsaw(StructurePoolElement p_227248_, ResourceLocation p_227249_, BlockPos p_227250_, Rotation p_227251_, StructureTemplateManager p_227252_, WorldgenRandom p_227253_)
```

**Parameters:**

- `p_227248_` (`StructurePoolElement`)
- `p_227249_` (`ResourceLocation`)
- `p_227250_` (`BlockPos`)
- `p_227251_` (`Rotation`)
- `p_227252_` (`StructureTemplateManager`)
- `p_227253_` (`WorldgenRandom`)

**Returns:** `private static Optional<BlockPos>`

### addPieces

```java
private static void addPieces(RandomState p_227211_, int p_227212_, boolean p_227213_, ChunkGenerator p_227214_, StructureTemplateManager p_227215_, LevelHeightAccessor p_227216_, RandomSource p_227217_, Registry<StructureTemplatePool> p_227218_, PoolElementStructurePiece p_227219_, List<PoolElementStructurePiece> p_227220_, VoxelShape p_227221_, PoolAliasLookup p_307210_, LiquidSettings p_352331_)
```

**Parameters:**

- `p_227211_` (`RandomState`)
- `p_227212_` (`int`)
- `p_227213_` (`boolean`)
- `p_227214_` (`ChunkGenerator`)
- `p_227215_` (`StructureTemplateManager`)
- `p_227216_` (`LevelHeightAccessor`)
- `p_227217_` (`RandomSource`)
- `p_227218_` (`Registry<StructureTemplatePool>`)
- `p_227219_` (`PoolElementStructurePiece`)
- `p_227220_` (`List<PoolElementStructurePiece>`)
- `p_227221_` (`VoxelShape`)
- `p_307210_` (`PoolAliasLookup`)
- `p_352331_` (`LiquidSettings`)

**Returns:** `private static void`

### generateJigsaw

```java
public static boolean generateJigsaw(ServerLevel p_227204_, Holder<StructureTemplatePool> p_227205_, ResourceLocation p_227206_, int p_227207_, BlockPos p_227208_, boolean p_227209_)
```

**Parameters:**

- `p_227204_` (`ServerLevel`)
- `p_227205_` (`Holder<StructureTemplatePool>`)
- `p_227206_` (`ResourceLocation`)
- `p_227207_` (`int`)
- `p_227208_` (`BlockPos`)
- `p_227209_` (`boolean`)

**Returns:** `public static boolean`

### PieceState

```java
static record PieceState(PoolElementStructurePiece piece, MutableObject<VoxelShape> free, int depth)
```

**Parameters:**

- `piece` (`PoolElementStructurePiece`)
- `free` (`MutableObject<VoxelShape>`)
- `depth` (`int`)

**Returns:** `static record`

### Placer

```java
 Placer(Registry<StructureTemplatePool> p_227258_, int p_227259_, ChunkGenerator p_227260_, StructureTemplateManager p_227261_, List<? super PoolElementStructurePiece> p_227262_, RandomSource p_227263_)
```

**Parameters:**

- `p_227258_` (`Registry<StructureTemplatePool>`)
- `p_227259_` (`int`)
- `p_227260_` (`ChunkGenerator`)
- `p_227261_` (`StructureTemplateManager`)
- `p_227262_` (`List<? super PoolElementStructurePiece>`)
- `p_227263_` (`RandomSource`)

**Returns:** ``

### tryPlacingChildren

```java
void tryPlacingChildren(PoolElementStructurePiece p_227265_, MutableObject<VoxelShape> p_227266_, int p_227267_, boolean p_227268_, LevelHeightAccessor p_227269_, RandomState p_227270_, PoolAliasLookup p_307643_, LiquidSettings p_352442_)
```

**Parameters:**

- `p_227265_` (`PoolElementStructurePiece`)
- `p_227266_` (`MutableObject<VoxelShape>`)
- `p_227267_` (`int`)
- `p_227268_` (`boolean`)
- `p_227269_` (`LevelHeightAccessor`)
- `p_227270_` (`RandomState`)
- `p_307643_` (`PoolAliasLookup`)
- `p_352442_` (`LiquidSettings`)

### readPoolKey

```java
private static ResourceKey<StructureTemplatePool> readPoolKey(StructureTemplate.StructureBlockInfo p_307327_, PoolAliasLookup p_307490_)
```

**Parameters:**

- `p_307327_` (`StructureTemplate.StructureBlockInfo`)
- `p_307490_` (`PoolAliasLookup`)

**Returns:** `private static ResourceKey<StructureTemplatePool>`
