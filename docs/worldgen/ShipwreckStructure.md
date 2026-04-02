# ShipwreckStructure

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class
**Extends:** `Structure`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ShipwreckStructure>` |  |
| `isBeached` | `boolean` |  |

## Methods

### ShipwreckStructure

```java
public ShipwreckStructure(Structure.StructureSettings p_229388_, boolean p_229389_)
```

**Parameters:**

- `p_229388_` (`Structure.StructureSettings`)
- `p_229389_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### findGenerationPoint

```java
public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_229391_)
```

**Parameters:**

- `p_229391_` (`Structure.GenerationContext`)

**Returns:** `Optional<Structure.GenerationStub>`

### generatePieces

```java
private void generatePieces(StructurePiecesBuilder p_229396_, Structure.GenerationContext p_229397_)
```

**Parameters:**

- `p_229396_` (`StructurePiecesBuilder`)
- `p_229397_` (`Structure.GenerationContext`)

**Returns:** `private void`

### type

```java
public StructureType<?> type()
```

**Returns:** `StructureType<?>`
