# TrunkPlacerType

**Package:** `net.minecraft.world.level.levelgen.feature.trunkplacers`
**Type:** class<P extends TrunkPlacer>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STRAIGHT_TRUNK_PLACER` | `TrunkPlacerType<StraightTrunkPlacer>` |  |
| `FORKING_TRUNK_PLACER` | `TrunkPlacerType<ForkingTrunkPlacer>` |  |
| `GIANT_TRUNK_PLACER` | `TrunkPlacerType<GiantTrunkPlacer>` |  |
| `MEGA_JUNGLE_TRUNK_PLACER` | `TrunkPlacerType<MegaJungleTrunkPlacer>` |  |
| `DARK_OAK_TRUNK_PLACER` | `TrunkPlacerType<DarkOakTrunkPlacer>` |  |
| `FANCY_TRUNK_PLACER` | `TrunkPlacerType<FancyTrunkPlacer>` |  |
| `BENDING_TRUNK_PLACER` | `TrunkPlacerType<BendingTrunkPlacer>` |  |
| `UPWARDS_BRANCHING_TRUNK_PLACER` | `TrunkPlacerType<UpwardsBranchingTrunkPlacer>` |  |
| `CHERRY_TRUNK_PLACER` | `TrunkPlacerType<CherryTrunkPlacer>` |  |

## Methods

### register

```java
<P extends TrunkPlacer> private static <P extends TrunkPlacer> TrunkPlacerType<P> register(String p_70327_, MapCodec<P> p_338770_)
```

**Parameters:**

- `p_70327_` (`String`)
- `p_338770_` (`MapCodec<P>`)

**Returns:** `private static <P extends TrunkPlacer> TrunkPlacerType<P>`

### TrunkPlacerType

```java
public TrunkPlacerType(MapCodec<P> p_338550_)
```

**Parameters:**

- `p_338550_` (`MapCodec<P>`)

**Returns:** `public`

### codec

```java
public MapCodec<P> codec()
```

**Returns:** `public MapCodec<P>`
