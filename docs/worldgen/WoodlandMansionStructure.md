# WoodlandMansionStructure

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class
**Extends:** `Structure`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WoodlandMansionStructure>` |  |

## Methods

### WoodlandMansionStructure

```java
public WoodlandMansionStructure(Structure.StructureSettings p_230225_)
```

**Parameters:**

- `p_230225_` (`Structure.StructureSettings`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### findGenerationPoint

```java
public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_230235_)
```

**Parameters:**

- `p_230235_` (`Structure.GenerationContext`)

**Returns:** `Optional<Structure.GenerationStub>`

### generatePieces

```java
private void generatePieces(StructurePiecesBuilder p_230242_, Structure.GenerationContext p_230243_, BlockPos p_230244_, Rotation p_230245_)
```

**Parameters:**

- `p_230242_` (`StructurePiecesBuilder`)
- `p_230243_` (`Structure.GenerationContext`)
- `p_230244_` (`BlockPos`)
- `p_230245_` (`Rotation`)

**Returns:** `private void`

### afterPlace

```java
public void afterPlace(WorldGenLevel p_230227_, StructureManager p_230228_, ChunkGenerator p_230229_, RandomSource p_230230_, BoundingBox p_230231_, ChunkPos p_230232_, PiecesContainer p_230233_)
```

**Parameters:**

- `p_230227_` (`WorldGenLevel`)
- `p_230228_` (`StructureManager`)
- `p_230229_` (`ChunkGenerator`)
- `p_230230_` (`RandomSource`)
- `p_230231_` (`BoundingBox`)
- `p_230232_` (`ChunkPos`)
- `p_230233_` (`PiecesContainer`)

### type

```java
public StructureType<?> type()
```

**Returns:** `StructureType<?>`
