# ProtectedBlockProcessor

**Package:** `net.minecraft.world.level.levelgen.structure.templatesystem`
**Type:** class
**Extends:** `StructureProcessor`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `cannotReplace` | `TagKey<Block>` |  |
| `CODEC` | `MapCodec<ProtectedBlockProcessor>` |  |

## Methods

### ProtectedBlockProcessor

```java
public ProtectedBlockProcessor(TagKey<Block> p_205051_)
```

**Parameters:**

- `p_205051_` (`TagKey<Block>`)

**Returns:** `public`

### processBlock

```java
public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_163755_, BlockPos p_163756_, BlockPos p_163757_, StructureTemplate.StructureBlockInfo p_163758_, StructureTemplate.StructureBlockInfo p_163759_, StructurePlaceSettings p_163760_)
```

**Parameters:**

- `p_163755_` (`LevelReader`)
- `p_163756_` (`BlockPos`)
- `p_163757_` (`BlockPos`)
- `p_163758_` (`StructureTemplate.StructureBlockInfo`)
- `p_163759_` (`StructureTemplate.StructureBlockInfo`)
- `p_163760_` (`StructurePlaceSettings`)

**Returns:** `StructureTemplate.StructureBlockInfo`

### getType

```java
protected StructureProcessorType<?> getType()
```

**Returns:** `StructureProcessorType<?>`
