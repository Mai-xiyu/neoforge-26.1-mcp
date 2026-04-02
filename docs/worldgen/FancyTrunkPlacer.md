# FancyTrunkPlacer

**Package:** `net.minecraft.world.level.levelgen.feature.trunkplacers`
**Type:** class
**Extends:** `TrunkPlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FancyTrunkPlacer>` |  |

## Methods

### FancyTrunkPlacer

```java
public FancyTrunkPlacer(int p_70094_, int p_70095_, int p_70096_)
```

**Parameters:**

- `p_70094_` (`int`)
- `p_70095_` (`int`)
- `p_70096_` (`int`)

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
public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226093_, BiConsumer<BlockPos, BlockState> p_226094_, RandomSource p_226095_, int p_226096_, BlockPos p_226097_, TreeConfiguration p_226098_)
```

**Parameters:**

- `p_226093_` (`LevelSimulatedReader`)
- `p_226094_` (`BiConsumer<BlockPos, BlockState>`)
- `p_226095_` (`RandomSource`)
- `p_226096_` (`int`)
- `p_226097_` (`BlockPos`)
- `p_226098_` (`TreeConfiguration`)

**Returns:** `List<FoliagePlacer.FoliageAttachment>`

### makeLimb

```java
private boolean makeLimb(LevelSimulatedReader p_226108_, BiConsumer<BlockPos, BlockState> p_226109_, RandomSource p_226110_, BlockPos p_226111_, BlockPos p_226112_, boolean p_226113_, TreeConfiguration p_226114_)
```

**Parameters:**

- `p_226108_` (`LevelSimulatedReader`)
- `p_226109_` (`BiConsumer<BlockPos, BlockState>`)
- `p_226110_` (`RandomSource`)
- `p_226111_` (`BlockPos`)
- `p_226112_` (`BlockPos`)
- `p_226113_` (`boolean`)
- `p_226114_` (`TreeConfiguration`)

**Returns:** `private boolean`

### getSteps

```java
private int getSteps(BlockPos p_70128_)
```

**Parameters:**

- `p_70128_` (`BlockPos`)

**Returns:** `private int`

### getLogAxis

```java
private Direction.Axis getLogAxis(BlockPos p_70130_, BlockPos p_70131_)
```

**Parameters:**

- `p_70130_` (`BlockPos`)
- `p_70131_` (`BlockPos`)

**Returns:** `private Direction.Axis`

### trimBranches

```java
private boolean trimBranches(int p_70099_, int p_70100_)
```

**Parameters:**

- `p_70099_` (`int`)
- `p_70100_` (`int`)

**Returns:** `private boolean`

### makeBranches

```java
private void makeBranches(LevelSimulatedReader p_226100_, BiConsumer<BlockPos, BlockState> p_226101_, RandomSource p_226102_, int p_226103_, BlockPos p_226104_, List<FancyTrunkPlacer.FoliageCoords> p_226105_, TreeConfiguration p_226106_)
```

**Parameters:**

- `p_226100_` (`LevelSimulatedReader`)
- `p_226101_` (`BiConsumer<BlockPos, BlockState>`)
- `p_226102_` (`RandomSource`)
- `p_226103_` (`int`)
- `p_226104_` (`BlockPos`)
- `p_226105_` (`List<FancyTrunkPlacer.FoliageCoords>`)
- `p_226106_` (`TreeConfiguration`)

**Returns:** `private void`

### treeShape

```java
private static float treeShape(int p_70133_, int p_70134_)
```

**Parameters:**

- `p_70133_` (`int`)
- `p_70134_` (`int`)

**Returns:** `private static float`

### FoliageCoords

```java
public FoliageCoords(BlockPos p_70140_, int p_70141_)
```

**Parameters:**

- `p_70140_` (`BlockPos`)
- `p_70141_` (`int`)

**Returns:** `public`

### getBranchBase

```java
public int getBranchBase()
```

**Returns:** `public int`
