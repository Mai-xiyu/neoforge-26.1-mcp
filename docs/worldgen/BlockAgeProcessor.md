# BlockAgeProcessor

**Package:** `net.minecraft.world.level.levelgen.structure.templatesystem`
**Type:** class
**Extends:** `StructureProcessor`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BlockAgeProcessor>` |  |

## Methods

### BlockAgeProcessor

```java
public BlockAgeProcessor(float p_74013_)
```

**Parameters:**

- `p_74013_` (`float`)

**Returns:** `public`

### processBlock

```java
public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74016_, BlockPos p_74017_, BlockPos p_74018_, StructureTemplate.StructureBlockInfo p_74019_, StructureTemplate.StructureBlockInfo p_74020_, StructurePlaceSettings p_74021_)
```

**Parameters:**

- `p_74016_` (`LevelReader`)
- `p_74017_` (`BlockPos`)
- `p_74018_` (`BlockPos`)
- `p_74019_` (`StructureTemplate.StructureBlockInfo`)
- `p_74020_` (`StructureTemplate.StructureBlockInfo`)
- `p_74021_` (`StructurePlaceSettings`)

**Returns:** `StructureTemplate.StructureBlockInfo`

### getRandomFacingStairs

```java
private static BlockState getRandomFacingStairs(RandomSource p_230258_, Block p_230259_)
```

**Parameters:**

- `p_230258_` (`RandomSource`)
- `p_230259_` (`Block`)

**Returns:** `private static BlockState`

### getRandomBlock

```java
private BlockState getRandomBlock(RandomSource p_230267_, BlockState[] p_230268_, BlockState[] p_230269_)
```

**Parameters:**

- `p_230267_` (`RandomSource`)
- `p_230268_` (`BlockState[]`)
- `p_230269_` (`BlockState[]`)

**Returns:** `private BlockState`

### getRandomBlock

```java
private static BlockState getRandomBlock(RandomSource p_230264_, BlockState[] p_230265_)
```

**Parameters:**

- `p_230264_` (`RandomSource`)
- `p_230265_` (`BlockState[]`)

**Returns:** `private static BlockState`

### getType

```java
protected StructureProcessorType<?> getType()
```

**Returns:** `StructureProcessorType<?>`
