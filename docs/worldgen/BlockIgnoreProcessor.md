# BlockIgnoreProcessor

**Package:** `net.minecraft.world.level.levelgen.structure.templatesystem`
**Type:** class
**Extends:** `StructureProcessor`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BlockIgnoreProcessor>` |  |
| `STRUCTURE_BLOCK` | `BlockIgnoreProcessor` |  |
| `AIR` | `BlockIgnoreProcessor` |  |
| `STRUCTURE_AND_AIR` | `BlockIgnoreProcessor` |  |

## Methods

### BlockIgnoreProcessor

```java
public BlockIgnoreProcessor(List<Block> p_74052_)
```

**Parameters:**

- `p_74052_` (`List<Block>`)

**Returns:** `public`

### processBlock

```java
public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74055_, BlockPos p_74056_, BlockPos p_74057_, StructureTemplate.StructureBlockInfo p_74058_, StructureTemplate.StructureBlockInfo p_74059_, StructurePlaceSettings p_74060_)
```

**Parameters:**

- `p_74055_` (`LevelReader`)
- `p_74056_` (`BlockPos`)
- `p_74057_` (`BlockPos`)
- `p_74058_` (`StructureTemplate.StructureBlockInfo`)
- `p_74059_` (`StructureTemplate.StructureBlockInfo`)
- `p_74060_` (`StructurePlaceSettings`)

**Returns:** `StructureTemplate.StructureBlockInfo`

### getType

```java
protected StructureProcessorType<?> getType()
```

**Returns:** `StructureProcessorType<?>`
