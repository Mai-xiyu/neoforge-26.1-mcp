# CherryTrunkPlacer

**Package:** `net.minecraft.world.level.levelgen.feature.trunkplacers`
**Type:** class
**Extends:** `TrunkPlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CherryTrunkPlacer>` |  |

## Methods

### CherryTrunkPlacer

```java
public CherryTrunkPlacer(int p_273281_, int p_273327_, int p_272619_, IntProvider p_272873_, IntProvider p_272789_, UniformInt p_272917_, IntProvider p_272948_)
```

**Parameters:**

- `p_273281_` (`int`)
- `p_273327_` (`int`)
- `p_272619_` (`int`)
- `p_272873_` (`IntProvider`)
- `p_272789_` (`IntProvider`)
- `p_272917_` (`UniformInt`)
- `p_272948_` (`IntProvider`)

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
public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_272827_, BiConsumer<BlockPos, BlockState> p_272650_, RandomSource p_272993_, int p_272990_, BlockPos p_273471_, TreeConfiguration p_273355_)
```

**Parameters:**

- `p_272827_` (`LevelSimulatedReader`)
- `p_272650_` (`BiConsumer<BlockPos, BlockState>`)
- `p_272993_` (`RandomSource`)
- `p_272990_` (`int`)
- `p_273471_` (`BlockPos`)
- `p_273355_` (`TreeConfiguration`)

**Returns:** `List<FoliagePlacer.FoliageAttachment>`

### generateBranch

```java
private FoliagePlacer.FoliageAttachment generateBranch(LevelSimulatedReader p_272736_, BiConsumer<BlockPos, BlockState> p_273092_, RandomSource p_273449_, int p_272659_, BlockPos p_273743_, TreeConfiguration p_273027_, Function<BlockState, BlockState> p_273558_, Direction p_273712_, int p_272980_, boolean p_272719_, BlockPos.MutableBlockPos p_273496_)
```

**Parameters:**

- `p_272736_` (`LevelSimulatedReader`)
- `p_273092_` (`BiConsumer<BlockPos, BlockState>`)
- `p_273449_` (`RandomSource`)
- `p_272659_` (`int`)
- `p_273743_` (`BlockPos`)
- `p_273027_` (`TreeConfiguration`)
- `p_273558_` (`Function<BlockState, BlockState>`)
- `p_273712_` (`Direction`)
- `p_272980_` (`int`)
- `p_272719_` (`boolean`)
- `p_273496_` (`BlockPos.MutableBlockPos`)

**Returns:** `private FoliagePlacer.FoliageAttachment`
