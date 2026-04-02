# SinglePoolElement

**Package:** `net.minecraft.world.level.levelgen.structure.pools`
**Type:** class
**Extends:** `StructurePoolElement`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SinglePoolElement>` |  |
| `template` | `Either<ResourceLocation, StructureTemplate>` |  |
| `processors` | `Holder<StructureProcessorList>` |  |
| `overrideLiquidSettings` | `Optional<LiquidSettings>` |  |

## Methods

### encodeTemplate

```java
<T> private static <T> DataResult<T> encodeTemplate(Either<ResourceLocation, StructureTemplate> p_210425_, DynamicOps<T> p_210426_, T p_210427_)
```

**Parameters:**

- `p_210425_` (`Either<ResourceLocation, StructureTemplate>`)
- `p_210426_` (`DynamicOps<T>`)
- `p_210427_` (`T`)

**Returns:** `private static <T> DataResult<T>`

### processorsCodec

```java
<E extends SinglePoolElement> protected static <E extends SinglePoolElement> RecordCodecBuilder<E, Holder<StructureProcessorList>> processorsCodec()
```

**Returns:** `protected static <E extends SinglePoolElement> RecordCodecBuilder<E, Holder<StructureProcessorList>>`

### overrideLiquidSettingsCodec

```java
<E extends SinglePoolElement> protected static <E extends SinglePoolElement> RecordCodecBuilder<E, Optional<LiquidSettings>> overrideLiquidSettingsCodec()
```

**Returns:** `protected static <E extends SinglePoolElement> RecordCodecBuilder<E, Optional<LiquidSettings>>`

### templateCodec

```java
<E extends SinglePoolElement> protected static <E extends SinglePoolElement> RecordCodecBuilder<E, Either<ResourceLocation, StructureTemplate>> templateCodec()
```

**Returns:** `protected static <E extends SinglePoolElement> RecordCodecBuilder<E, Either<ResourceLocation, StructureTemplate>>`

### SinglePoolElement

```java
protected SinglePoolElement(Either<ResourceLocation, StructureTemplate> p_210415_, Holder<StructureProcessorList> p_210416_, StructureTemplatePool.Projection p_210417_, Optional<LiquidSettings> p_352236_)
```

**Parameters:**

- `p_210415_` (`Either<ResourceLocation, StructureTemplate>`)
- `p_210416_` (`Holder<StructureProcessorList>`)
- `p_210417_` (`StructureTemplatePool.Projection`)
- `p_352236_` (`Optional<LiquidSettings>`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getSize

```java
public Vec3i getSize(StructureTemplateManager p_227313_, Rotation p_227314_)
```

**Parameters:**

- `p_227313_` (`StructureTemplateManager`)
- `p_227314_` (`Rotation`)

**Returns:** `Vec3i`

### getTemplate

```java
private StructureTemplate getTemplate(StructureTemplateManager p_227300_)
```

**Parameters:**

- `p_227300_` (`StructureTemplateManager`)

**Returns:** `private StructureTemplate`

### getDataMarkers

```java
public List<StructureTemplate.StructureBlockInfo> getDataMarkers(StructureTemplateManager p_227325_, BlockPos p_227326_, Rotation p_227327_, boolean p_227328_)
```

**Parameters:**

- `p_227325_` (`StructureTemplateManager`)
- `p_227326_` (`BlockPos`)
- `p_227327_` (`Rotation`)
- `p_227328_` (`boolean`)

**Returns:** `public List<StructureTemplate.StructureBlockInfo>`

### getShuffledJigsawBlocks

```java
public List<StructureTemplate.StructureBlockInfo> getShuffledJigsawBlocks(StructureTemplateManager p_227320_, BlockPos p_227321_, Rotation p_227322_, RandomSource p_227323_)
```

**Parameters:**

- `p_227320_` (`StructureTemplateManager`)
- `p_227321_` (`BlockPos`)
- `p_227322_` (`Rotation`)
- `p_227323_` (`RandomSource`)

**Returns:** `List<StructureTemplate.StructureBlockInfo>`

### sortBySelectionPriority

```java
 sortBySelectionPriority()
```

**Returns:** ``

### sortBySelectionPriority

```java
static void sortBySelectionPriority(List<StructureTemplate.StructureBlockInfo> p_308881_)
```

**Parameters:**

- `p_308881_` (`List<StructureTemplate.StructureBlockInfo>`)

### getBoundingBox

```java
public BoundingBox getBoundingBox(StructureTemplateManager p_227316_, BlockPos p_227317_, Rotation p_227318_)
```

**Parameters:**

- `p_227316_` (`StructureTemplateManager`)
- `p_227317_` (`BlockPos`)
- `p_227318_` (`Rotation`)

**Returns:** `BoundingBox`

### place

```java
public boolean place(StructureTemplateManager p_227302_, WorldGenLevel p_227303_, StructureManager p_227304_, ChunkGenerator p_227305_, BlockPos p_227306_, BlockPos p_227307_, Rotation p_227308_, BoundingBox p_227309_, RandomSource p_227310_, LiquidSettings p_352088_, boolean p_227311_)
```

**Parameters:**

- `p_227302_` (`StructureTemplateManager`)
- `p_227303_` (`WorldGenLevel`)
- `p_227304_` (`StructureManager`)
- `p_227305_` (`ChunkGenerator`)
- `p_227306_` (`BlockPos`)
- `p_227307_` (`BlockPos`)
- `p_227308_` (`Rotation`)
- `p_227309_` (`BoundingBox`)
- `p_227310_` (`RandomSource`)
- `p_352088_` (`LiquidSettings`)
- `p_227311_` (`boolean`)

**Returns:** `boolean`

### getSettings

```java
protected StructurePlaceSettings getSettings(Rotation p_210421_, BoundingBox p_210422_, LiquidSettings p_352322_, boolean p_210423_)
```

**Parameters:**

- `p_210421_` (`Rotation`)
- `p_210422_` (`BoundingBox`)
- `p_352322_` (`LiquidSettings`)
- `p_210423_` (`boolean`)

**Returns:** `protected StructurePlaceSettings`

### getType

```java
public StructurePoolElementType<?> getType()
```

**Returns:** `StructurePoolElementType<?>`

### toString

```java
public String toString()
```

**Returns:** `String`
