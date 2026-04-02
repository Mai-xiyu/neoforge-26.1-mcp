# RuleProcessor

**Package:** `net.minecraft.world.level.levelgen.structure.templatesystem`
**Type:** class
**Extends:** `StructureProcessor`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RuleProcessor>` |  |

## Methods

### RuleProcessor

```java
public RuleProcessor(List<? extends ProcessorRule> p_74296_)
```

**Parameters:**

- `p_74296_` (`List<? extends ProcessorRule>`)

**Returns:** `public`

### processBlock

```java
public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74299_, BlockPos p_74300_, BlockPos p_74301_, StructureTemplate.StructureBlockInfo p_74302_, StructureTemplate.StructureBlockInfo p_74303_, StructurePlaceSettings p_74304_)
```

**Parameters:**

- `p_74299_` (`LevelReader`)
- `p_74300_` (`BlockPos`)
- `p_74301_` (`BlockPos`)
- `p_74302_` (`StructureTemplate.StructureBlockInfo`)
- `p_74303_` (`StructureTemplate.StructureBlockInfo`)
- `p_74304_` (`StructurePlaceSettings`)

**Returns:** `StructureTemplate.StructureBlockInfo`

### getType

```java
protected StructureProcessorType<?> getType()
```

**Returns:** `StructureProcessorType<?>`
