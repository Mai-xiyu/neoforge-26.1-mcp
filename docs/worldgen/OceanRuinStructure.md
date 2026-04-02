# OceanRuinStructure

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class
**Extends:** `Structure`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<OceanRuinStructure>` |  |
| `biomeTemp` | `OceanRuinStructure.Type` |  |
| `largeProbability` | `float` |  |
| `clusterProbability` | `float` |  |
| `CODEC` | `Codec<OceanRuinStructure.Type>` |  |

## Methods

### OceanRuinStructure

```java
public OceanRuinStructure(Structure.StructureSettings p_229060_, OceanRuinStructure.Type p_229061_, float p_229062_, float p_229063_)
```

**Parameters:**

- `p_229060_` (`Structure.StructureSettings`)
- `p_229061_` (`OceanRuinStructure.Type`)
- `p_229062_` (`float`)
- `p_229063_` (`float`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### findGenerationPoint

```java
public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_229065_)
```

**Parameters:**

- `p_229065_` (`Structure.GenerationContext`)

**Returns:** `Optional<Structure.GenerationStub>`

### generatePieces

```java
private void generatePieces(StructurePiecesBuilder p_229070_, Structure.GenerationContext p_229071_)
```

**Parameters:**

- `p_229070_` (`StructurePiecesBuilder`)
- `p_229071_` (`Structure.GenerationContext`)

**Returns:** `private void`

### type

```java
public StructureType<?> type()
```

**Returns:** `StructureType<?>`

### COLD

```java
, COLD()
```

**Returns:** `,`

### Type

```java
private Type(String p_229090_)
```

**Parameters:**

- `p_229090_` (`String`)

**Returns:** `private`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | enum |  |
