# UpwardsBranchingTrunkPlacer

**Package:** `net.minecraft.world.level.levelgen.feature.trunkplacers`
**Type:** class
**Extends:** `TrunkPlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<UpwardsBranchingTrunkPlacer>` |  |

## Methods

### UpwardsBranchingTrunkPlacer

```java
public UpwardsBranchingTrunkPlacer(int p_226201_, int p_226202_, int p_226203_, IntProvider p_226204_, float p_226205_, IntProvider p_226206_, HolderSet<Block> p_226207_)
```

**Parameters:**

- `p_226201_` (`int`)
- `p_226202_` (`int`)
- `p_226203_` (`int`)
- `p_226204_` (`IntProvider`)
- `p_226205_` (`float`)
- `p_226206_` (`IntProvider`)
- `p_226207_` (`HolderSet<Block>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### type

```java
protected TrunkPlacerType<?> type()
```

**Returns:** `TrunkPlacerType<?>`

### placeTrunk

```java
public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226225_, BiConsumer<BlockPos, BlockState> p_226226_, RandomSource p_226227_, int p_226228_, BlockPos p_226229_, TreeConfiguration p_226230_)
```

**Parameters:**

- `p_226225_` (`LevelSimulatedReader`)
- `p_226226_` (`BiConsumer<BlockPos, BlockState>`)
- `p_226227_` (`RandomSource`)
- `p_226228_` (`int`)
- `p_226229_` (`BlockPos`)
- `p_226230_` (`TreeConfiguration`)

**Returns:** `List<FoliagePlacer.FoliageAttachment>`

### placeBranch

```java
private void placeBranch(LevelSimulatedReader p_226213_, BiConsumer<BlockPos, BlockState> p_226214_, RandomSource p_226215_, int p_226216_, TreeConfiguration p_226217_, List<FoliagePlacer.FoliageAttachment> p_226218_, BlockPos.MutableBlockPos p_226219_, int p_226220_, Direction p_226221_, int p_226222_, int p_226223_)
```

**Parameters:**

- `p_226213_` (`LevelSimulatedReader`)
- `p_226214_` (`BiConsumer<BlockPos, BlockState>`)
- `p_226215_` (`RandomSource`)
- `p_226216_` (`int`)
- `p_226217_` (`TreeConfiguration`)
- `p_226218_` (`List<FoliagePlacer.FoliageAttachment>`)
- `p_226219_` (`BlockPos.MutableBlockPos`)
- `p_226220_` (`int`)
- `p_226221_` (`Direction`)
- `p_226222_` (`int`)
- `p_226223_` (`int`)

**Returns:** `private void`

### validTreePos

```java
protected boolean validTreePos(LevelSimulatedReader p_226210_, BlockPos p_226211_)
```

**Parameters:**

- `p_226210_` (`LevelSimulatedReader`)
- `p_226211_` (`BlockPos`)

**Returns:** `boolean`
