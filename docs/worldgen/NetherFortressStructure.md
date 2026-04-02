# NetherFortressStructure

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class
**Extends:** `Structure`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FORTRESS_ENEMIES` | `WeightedRandomList<MobSpawnSettings.SpawnerData>` |  |
| `CODEC` | `MapCodec<NetherFortressStructure>` |  |

## Methods

### NetherFortressStructure

```java
public NetherFortressStructure(Structure.StructureSettings p_228521_)
```

**Parameters:**

- `p_228521_` (`Structure.StructureSettings`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### findGenerationPoint

```java
public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_228523_)
```

**Parameters:**

- `p_228523_` (`Structure.GenerationContext`)

**Returns:** `Optional<Structure.GenerationStub>`

### generatePieces

```java
private static void generatePieces(StructurePiecesBuilder p_228528_, Structure.GenerationContext p_228529_)
```

**Parameters:**

- `p_228528_` (`StructurePiecesBuilder`)
- `p_228529_` (`Structure.GenerationContext`)

**Returns:** `private static void`

### type

```java
public StructureType<?> type()
```

**Returns:** `StructureType<?>`
