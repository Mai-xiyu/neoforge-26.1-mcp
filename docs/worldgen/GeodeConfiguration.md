# GeodeConfiguration

**Package:** `net.minecraft.world.level.levelgen.feature.configurations`
**Type:** class
**Implements:** `FeatureConfiguration`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CHANCE_RANGE` | `Codec<Double>` |  |
| `CODEC` | `Codec<GeodeConfiguration>` |  |
| `geodeBlockSettings` | `GeodeBlockSettings` |  |
| `geodeLayerSettings` | `GeodeLayerSettings` |  |
| `geodeCrackSettings` | `GeodeCrackSettings` |  |
| `usePotentialPlacementsChance` | `double` |  |
| `useAlternateLayer0Chance` | `double` |  |
| `placementsRequireLayer0Alternate` | `boolean` |  |
| `outerWallDistance` | `IntProvider` |  |
| `distributionPoints` | `IntProvider` |  |
| `pointOffset` | `IntProvider` |  |
| `minGenOffset` | `int` |  |
| `maxGenOffset` | `int` |  |
| `noiseMultiplier` | `double` |  |
| `invalidBlocksThreshold` | `int` |  |

## Methods

### GeodeConfiguration

```java
public GeodeConfiguration(GeodeBlockSettings p_160828_, GeodeLayerSettings p_160829_, GeodeCrackSettings p_160830_, double p_160831_, double p_160832_, boolean p_160833_, IntProvider p_160834_, IntProvider p_160835_, IntProvider p_160836_, int p_160837_, int p_160838_, double p_160839_, int p_160840_)
```

**Parameters:**

- `p_160828_` (`GeodeBlockSettings`)
- `p_160829_` (`GeodeLayerSettings`)
- `p_160830_` (`GeodeCrackSettings`)
- `p_160831_` (`double`)
- `p_160832_` (`double`)
- `p_160833_` (`boolean`)
- `p_160834_` (`IntProvider`)
- `p_160835_` (`IntProvider`)
- `p_160836_` (`IntProvider`)
- `p_160837_` (`int`)
- `p_160838_` (`int`)
- `p_160839_` (`double`)
- `p_160840_` (`int`)

**Returns:** `public`
