# SculkBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `DropExperienceBlock`
**Implements:** `SculkBehaviour`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SculkBlock>` |  |

## Methods

### codec

```java
public MapCodec<SculkBlock> codec()
```

**Returns:** `MapCodec<SculkBlock>`

### SculkBlock

```java
public SculkBlock(BlockBehaviour.Properties p_222063_)
```

**Parameters:**

- `p_222063_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### attemptUseCharge

```java
public int attemptUseCharge(SculkSpreader.ChargeCursor p_222073_, LevelAccessor p_222074_, BlockPos p_222075_, RandomSource p_222076_, SculkSpreader p_222077_, boolean p_222078_)
```

**Parameters:**

- `p_222073_` (`SculkSpreader.ChargeCursor`)
- `p_222074_` (`LevelAccessor`)
- `p_222075_` (`BlockPos`)
- `p_222076_` (`RandomSource`)
- `p_222077_` (`SculkSpreader`)
- `p_222078_` (`boolean`)

**Returns:** `int`

### getDecayPenalty

```java
private static int getDecayPenalty(SculkSpreader p_222080_, BlockPos p_222081_, BlockPos p_222082_, int p_222083_)
```

**Parameters:**

- `p_222080_` (`SculkSpreader`)
- `p_222081_` (`BlockPos`)
- `p_222082_` (`BlockPos`)
- `p_222083_` (`int`)

**Returns:** `private static int`

### getRandomGrowthState

```java
private BlockState getRandomGrowthState(LevelAccessor p_222068_, BlockPos p_222069_, RandomSource p_222070_, boolean p_222071_)
```

**Parameters:**

- `p_222068_` (`LevelAccessor`)
- `p_222069_` (`BlockPos`)
- `p_222070_` (`RandomSource`)
- `p_222071_` (`boolean`)

**Returns:** `private BlockState`

### canPlaceGrowth

```java
private static boolean canPlaceGrowth(LevelAccessor p_222065_, BlockPos p_222066_)
```

**Parameters:**

- `p_222065_` (`LevelAccessor`)
- `p_222066_` (`BlockPos`)

**Returns:** `private static boolean`

### canChangeBlockStateOnSpread

```java
public boolean canChangeBlockStateOnSpread()
```

**Returns:** `boolean`
