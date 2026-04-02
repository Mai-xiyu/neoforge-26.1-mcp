# VegetationPatchConfiguration

**Package:** `net.minecraft.world.level.levelgen.feature.configurations`
**Type:** class
**Implements:** `FeatureConfiguration`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<VegetationPatchConfiguration>` |  |
| `replaceable` | `TagKey<Block>` |  |
| `groundState` | `BlockStateProvider` |  |
| `vegetationFeature` | `Holder<PlacedFeature>` |  |
| `surface` | `CaveSurface` |  |
| `depth` | `IntProvider` |  |
| `extraBottomBlockChance` | `float` |  |
| `verticalRange` | `int` |  |
| `vegetationChance` | `float` |  |
| `xzRadius` | `IntProvider` |  |
| `extraEdgeColumnChance` | `float` |  |

## Methods

### VegetationPatchConfiguration

```java
public VegetationPatchConfiguration(TagKey<Block> p_204856_, BlockStateProvider p_204857_, Holder<PlacedFeature> p_204858_, CaveSurface p_204859_, IntProvider p_204860_, float p_204861_, int p_204862_, float p_204863_, IntProvider p_204864_, float p_204865_)
```

**Parameters:**

- `p_204856_` (`TagKey<Block>`)
- `p_204857_` (`BlockStateProvider`)
- `p_204858_` (`Holder<PlacedFeature>`)
- `p_204859_` (`CaveSurface`)
- `p_204860_` (`IntProvider`)
- `p_204861_` (`float`)
- `p_204862_` (`int`)
- `p_204863_` (`float`)
- `p_204864_` (`IntProvider`)
- `p_204865_` (`float`)

**Returns:** `public`
