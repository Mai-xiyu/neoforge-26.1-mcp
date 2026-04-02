# FossilFeatureConfiguration

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Implements:** `FeatureConfiguration`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<FossilFeatureConfiguration>` |  |
| `fossilStructures` | `List<ResourceLocation>` |  |
| `overlayStructures` | `List<ResourceLocation>` |  |
| `fossilProcessors` | `Holder<StructureProcessorList>` |  |
| `overlayProcessors` | `Holder<StructureProcessorList>` |  |
| `maxEmptyCornersAllowed` | `int` |  |

## Methods

### FossilFeatureConfiguration

```java
public FossilFeatureConfiguration(List<ResourceLocation> p_204751_, List<ResourceLocation> p_204752_, Holder<StructureProcessorList> p_204753_, Holder<StructureProcessorList> p_204754_, int p_204755_)
```

**Parameters:**

- `p_204751_` (`List<ResourceLocation>`)
- `p_204752_` (`List<ResourceLocation>`)
- `p_204753_` (`Holder<StructureProcessorList>`)
- `p_204754_` (`Holder<StructureProcessorList>`)
- `p_204755_` (`int`)

**Returns:** `public`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Fossil structure lists need at least one entry")
```

**Parameters:**

- `entry"` (`"Fossil structure lists need at least one`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Fossil structure lists must be equal lengths")
```

**Parameters:**

- `lengths"` (`"Fossil structure lists must be equal`)

**Returns:** `throw new`
