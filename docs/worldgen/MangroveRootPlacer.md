# MangroveRootPlacer

**Package:** `net.minecraft.world.level.levelgen.feature.rootplacers`
**Type:** class
**Extends:** `RootPlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ROOT_WIDTH_LIMIT` | `int` |  |
| `ROOT_LENGTH_LIMIT` | `int` |  |
| `CODEC` | `MapCodec<MangroveRootPlacer>` |  |

## Methods

### MangroveRootPlacer

```java
public MangroveRootPlacer(IntProvider p_225817_, BlockStateProvider p_225818_, Optional<AboveRootPlacement> p_225819_, MangroveRootPlacement p_225820_)
```

**Parameters:**

- `p_225817_` (`IntProvider`)
- `p_225818_` (`BlockStateProvider`)
- `p_225819_` (`Optional<AboveRootPlacement>`)
- `p_225820_` (`MangroveRootPlacement`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### placeRoots

```java
public boolean placeRoots(LevelSimulatedReader p_225840_, BiConsumer<BlockPos, BlockState> p_225841_, RandomSource p_225842_, BlockPos p_225843_, BlockPos p_225844_, TreeConfiguration p_225845_)
```

**Parameters:**

- `p_225840_` (`LevelSimulatedReader`)
- `p_225841_` (`BiConsumer<BlockPos, BlockState>`)
- `p_225842_` (`RandomSource`)
- `p_225843_` (`BlockPos`)
- `p_225844_` (`BlockPos`)
- `p_225845_` (`TreeConfiguration`)

**Returns:** `boolean`

### simulateRoots

```java
private boolean simulateRoots(LevelSimulatedReader p_225823_, RandomSource p_225824_, BlockPos p_225825_, Direction p_225826_, BlockPos p_225827_, List<BlockPos> p_225828_, int p_225829_)
```

**Parameters:**

- `p_225823_` (`LevelSimulatedReader`)
- `p_225824_` (`RandomSource`)
- `p_225825_` (`BlockPos`)
- `p_225826_` (`Direction`)
- `p_225827_` (`BlockPos`)
- `p_225828_` (`List<BlockPos>`)
- `p_225829_` (`int`)

**Returns:** `private boolean`

### potentialRootPositions

```java
protected List<BlockPos> potentialRootPositions(BlockPos p_225851_, Direction p_225852_, RandomSource p_225853_, BlockPos p_225854_)
```

**Parameters:**

- `p_225851_` (`BlockPos`)
- `p_225852_` (`Direction`)
- `p_225853_` (`RandomSource`)
- `p_225854_` (`BlockPos`)

**Returns:** `protected List<BlockPos>`

### canPlaceRoot

```java
protected boolean canPlaceRoot(LevelSimulatedReader p_225831_, BlockPos p_225832_)
```

**Parameters:**

- `p_225831_` (`LevelSimulatedReader`)
- `p_225832_` (`BlockPos`)

**Returns:** `boolean`

### placeRoot

```java
protected void placeRoot(LevelSimulatedReader p_225834_, BiConsumer<BlockPos, BlockState> p_225835_, RandomSource p_225836_, BlockPos p_225837_, TreeConfiguration p_225838_)
```

**Parameters:**

- `p_225834_` (`LevelSimulatedReader`)
- `p_225835_` (`BiConsumer<BlockPos, BlockState>`)
- `p_225836_` (`RandomSource`)
- `p_225837_` (`BlockPos`)
- `p_225838_` (`TreeConfiguration`)

### type

```java
protected RootPlacerType<?> type()
```

**Returns:** `RootPlacerType<?>`
