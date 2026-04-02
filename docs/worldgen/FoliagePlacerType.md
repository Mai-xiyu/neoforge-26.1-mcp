# FoliagePlacerType

**Package:** `net.minecraft.world.level.levelgen.feature.foliageplacers`
**Type:** class<P extends FoliagePlacer>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BLOB_FOLIAGE_PLACER` | `FoliagePlacerType<BlobFoliagePlacer>` |  |
| `SPRUCE_FOLIAGE_PLACER` | `FoliagePlacerType<SpruceFoliagePlacer>` |  |
| `PINE_FOLIAGE_PLACER` | `FoliagePlacerType<PineFoliagePlacer>` |  |
| `ACACIA_FOLIAGE_PLACER` | `FoliagePlacerType<AcaciaFoliagePlacer>` |  |
| `BUSH_FOLIAGE_PLACER` | `FoliagePlacerType<BushFoliagePlacer>` |  |
| `FANCY_FOLIAGE_PLACER` | `FoliagePlacerType<FancyFoliagePlacer>` |  |
| `MEGA_JUNGLE_FOLIAGE_PLACER` | `FoliagePlacerType<MegaJungleFoliagePlacer>` |  |
| `MEGA_PINE_FOLIAGE_PLACER` | `FoliagePlacerType<MegaPineFoliagePlacer>` |  |
| `DARK_OAK_FOLIAGE_PLACER` | `FoliagePlacerType<DarkOakFoliagePlacer>` |  |
| `RANDOM_SPREAD_FOLIAGE_PLACER` | `FoliagePlacerType<RandomSpreadFoliagePlacer>` |  |
| `CHERRY_FOLIAGE_PLACER` | `FoliagePlacerType<CherryFoliagePlacer>` |  |

## Methods

### register

```java
<P extends FoliagePlacer> private static <P extends FoliagePlacer> FoliagePlacerType<P> register(String p_68606_, MapCodec<P> p_338511_)
```

**Parameters:**

- `p_68606_` (`String`)
- `p_338511_` (`MapCodec<P>`)

**Returns:** `private static <P extends FoliagePlacer> FoliagePlacerType<P>`

### FoliagePlacerType

```java
public FoliagePlacerType(MapCodec<P> p_338854_)
```

**Parameters:**

- `p_338854_` (`MapCodec<P>`)

**Returns:** `public`

### codec

```java
public MapCodec<P> codec()
```

**Returns:** `public MapCodec<P>`
