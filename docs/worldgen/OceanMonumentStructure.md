# OceanMonumentStructure

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class
**Extends:** `Structure`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<OceanMonumentStructure>` |  |

## Methods

### OceanMonumentStructure

```java
public OceanMonumentStructure(Structure.StructureSettings p_228955_)
```

**Parameters:**

- `p_228955_` (`Structure.StructureSettings`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### findGenerationPoint

```java
public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_228964_)
```

**Parameters:**

- `p_228964_` (`Structure.GenerationContext`)

**Returns:** `Optional<Structure.GenerationStub>`

### createTopPiece

```java
private static StructurePiece createTopPiece(ChunkPos p_228961_, WorldgenRandom p_228962_)
```

**Parameters:**

- `p_228961_` (`ChunkPos`)
- `p_228962_` (`WorldgenRandom`)

**Returns:** `private static StructurePiece`

### generatePieces

```java
private static void generatePieces(StructurePiecesBuilder p_228969_, Structure.GenerationContext p_228970_)
```

**Parameters:**

- `p_228969_` (`StructurePiecesBuilder`)
- `p_228970_` (`Structure.GenerationContext`)

**Returns:** `private static void`

### regeneratePiecesAfterLoad

```java
public static PiecesContainer regeneratePiecesAfterLoad(ChunkPos p_228957_, long p_228958_, PiecesContainer p_228959_)
```

**Parameters:**

- `p_228957_` (`ChunkPos`)
- `p_228958_` (`long`)
- `p_228959_` (`PiecesContainer`)

**Returns:** `public static PiecesContainer`

### type

```java
public StructureType<?> type()
```

**Returns:** `StructureType<?>`
