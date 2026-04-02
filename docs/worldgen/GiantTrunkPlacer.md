# GiantTrunkPlacer

**Package:** `net.minecraft.world.level.levelgen.feature.trunkplacers`
**Type:** class
**Extends:** `TrunkPlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<GiantTrunkPlacer>` |  |

## Methods

### GiantTrunkPlacer

```java
public GiantTrunkPlacer(int p_70165_, int p_70166_, int p_70167_)
```

**Parameters:**

- `p_70165_` (`int`)
- `p_70166_` (`int`)
- `p_70167_` (`int`)

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
public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226123_, BiConsumer<BlockPos, BlockState> p_226124_, RandomSource p_226125_, int p_226126_, BlockPos p_226127_, TreeConfiguration p_226128_)
```

**Parameters:**

- `p_226123_` (`LevelSimulatedReader`)
- `p_226124_` (`BiConsumer<BlockPos, BlockState>`)
- `p_226125_` (`RandomSource`)
- `p_226126_` (`int`)
- `p_226127_` (`BlockPos`)
- `p_226128_` (`TreeConfiguration`)

**Returns:** `List<FoliagePlacer.FoliageAttachment>`

### setDirtAt

```java
 setDirtAt()
```

**Returns:** ``

### placeLogIfFreeWithOffset

```java
private void placeLogIfFreeWithOffset(LevelSimulatedReader p_226130_, BiConsumer<BlockPos, BlockState> p_226131_, RandomSource p_226132_, BlockPos.MutableBlockPos p_226133_, TreeConfiguration p_226134_, BlockPos p_226135_, int p_226136_, int p_226137_, int p_226138_)
```

**Parameters:**

- `p_226130_` (`LevelSimulatedReader`)
- `p_226131_` (`BiConsumer<BlockPos, BlockState>`)
- `p_226132_` (`RandomSource`)
- `p_226133_` (`BlockPos.MutableBlockPos`)
- `p_226134_` (`TreeConfiguration`)
- `p_226135_` (`BlockPos`)
- `p_226136_` (`int`)
- `p_226137_` (`int`)
- `p_226138_` (`int`)

**Returns:** `private void`
