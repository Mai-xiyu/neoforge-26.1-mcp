# SculkVeinBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `MultifaceBlock`
**Implements:** `SculkBehaviour`, `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SculkVeinBlock>` |  |

## Methods

### codec

```java
public MapCodec<SculkVeinBlock> codec()
```

**Returns:** `MapCodec<SculkVeinBlock>`

### SculkVeinBlock

```java
public SculkVeinBlock(BlockBehaviour.Properties p_222353_)
```

**Parameters:**

- `p_222353_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getSpreader

```java
public MultifaceSpreader getSpreader()
```

**Returns:** `MultifaceSpreader`

### getSameSpaceSpreader

```java
public MultifaceSpreader getSameSpaceSpreader()
```

**Returns:** `public MultifaceSpreader`

### regrow

```java
public static boolean regrow(LevelAccessor p_222364_, BlockPos p_222365_, BlockState p_222366_, Collection<Direction> p_222367_)
```

**Parameters:**

- `p_222364_` (`LevelAccessor`)
- `p_222365_` (`BlockPos`)
- `p_222366_` (`BlockState`)
- `p_222367_` (`Collection<Direction>`)

**Returns:** `public static boolean`

### onDischarged

```java
public void onDischarged(LevelAccessor p_222359_, BlockState p_222360_, BlockPos p_222361_, RandomSource p_222362_)
```

**Parameters:**

- `p_222359_` (`LevelAccessor`)
- `p_222360_` (`BlockState`)
- `p_222361_` (`BlockPos`)
- `p_222362_` (`RandomSource`)

### attemptUseCharge

```java
public int attemptUseCharge(SculkSpreader.ChargeCursor p_222369_, LevelAccessor p_222370_, BlockPos p_222371_, RandomSource p_222372_, SculkSpreader p_222373_, boolean p_222374_)
```

**Parameters:**

- `p_222369_` (`SculkSpreader.ChargeCursor`)
- `p_222370_` (`LevelAccessor`)
- `p_222371_` (`BlockPos`)
- `p_222372_` (`RandomSource`)
- `p_222373_` (`SculkSpreader`)
- `p_222374_` (`boolean`)

**Returns:** `int`

### attemptPlaceSculk

```java
private boolean attemptPlaceSculk(SculkSpreader p_222376_, LevelAccessor p_222377_, BlockPos p_222378_, RandomSource p_222379_)
```

**Parameters:**

- `p_222376_` (`SculkSpreader`)
- `p_222377_` (`LevelAccessor`)
- `p_222378_` (`BlockPos`)
- `p_222379_` (`RandomSource`)

**Returns:** `private boolean`

### hasSubstrateAccess

```java
public static boolean hasSubstrateAccess(LevelAccessor p_222355_, BlockState p_222356_, BlockPos p_222357_)
```

**Parameters:**

- `p_222355_` (`LevelAccessor`)
- `p_222356_` (`BlockState`)
- `p_222357_` (`BlockPos`)

**Returns:** `public static boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_222384_, Direction p_222385_, BlockState p_222386_, LevelAccessor p_222387_, BlockPos p_222388_, BlockPos p_222389_)
```

**Parameters:**

- `p_222384_` (`BlockState`)
- `p_222385_` (`Direction`)
- `p_222386_` (`BlockState`)
- `p_222387_` (`LevelAccessor`)
- `p_222388_` (`BlockPos`)
- `p_222389_` (`BlockPos`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_222391_)
```

**Parameters:**

- `p_222391_` (`StateDefinition.Builder<Block, BlockState>`)

### canBeReplaced

```java
protected boolean canBeReplaced(BlockState p_222381_, BlockPlaceContext p_222382_)
```

**Parameters:**

- `p_222381_` (`BlockState`)
- `p_222382_` (`BlockPlaceContext`)

**Returns:** `boolean`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_222394_)
```

**Parameters:**

- `p_222394_` (`BlockState`)

**Returns:** `FluidState`

### SculkVeinSpreaderConfig

```java
public SculkVeinSpreaderConfig(MultifaceSpreader.SpreadType[]... p_222402_)
```

**Parameters:**

- `p_222402_` (`MultifaceSpreader.SpreadType[]...`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### stateCanBeReplaced

```java
public boolean stateCanBeReplaced(BlockGetter p_222405_, BlockPos p_222406_, BlockPos p_222407_, Direction p_222408_, BlockState p_222409_)
```

**Parameters:**

- `p_222405_` (`BlockGetter`)
- `p_222406_` (`BlockPos`)
- `p_222407_` (`BlockPos`)
- `p_222408_` (`Direction`)
- `p_222409_` (`BlockState`)

**Returns:** `boolean`

### getSpreadTypes

```java
public MultifaceSpreader.SpreadType[] getSpreadTypes()
```

**Returns:** `MultifaceSpreader.SpreadType[]`

### isOtherBlockValidAsSource

```java
public boolean isOtherBlockValidAsSource(BlockState p_222411_)
```

**Parameters:**

- `p_222411_` (`BlockState`)

**Returns:** `boolean`
