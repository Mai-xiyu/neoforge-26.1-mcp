# EnvironmentScanPlacement

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `PlacementModifier`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EnvironmentScanPlacement>` |  |

## Methods

### EnvironmentScanPlacement

```java
private EnvironmentScanPlacement(Direction p_191645_, BlockPredicate p_191646_, BlockPredicate p_191647_, int p_191648_)
```

**Parameters:**

- `p_191645_` (`Direction`)
- `p_191646_` (`BlockPredicate`)
- `p_191647_` (`BlockPredicate`)
- `p_191648_` (`int`)

**Returns:** `private`

### scanningFor

```java
public static EnvironmentScanPlacement scanningFor(Direction p_191658_, BlockPredicate p_191659_, BlockPredicate p_191660_, int p_191661_)
```

**Parameters:**

- `p_191658_` (`Direction`)
- `p_191659_` (`BlockPredicate`)
- `p_191660_` (`BlockPredicate`)
- `p_191661_` (`int`)

**Returns:** `public static EnvironmentScanPlacement`

### EnvironmentScanPlacement

```java
return new EnvironmentScanPlacement()
```

**Returns:** `return new`

### scanningFor

```java
public static EnvironmentScanPlacement scanningFor(Direction p_191654_, BlockPredicate p_191655_, int p_191656_)
```

**Parameters:**

- `p_191654_` (`Direction`)
- `p_191655_` (`BlockPredicate`)
- `p_191656_` (`int`)

**Returns:** `public static EnvironmentScanPlacement`

### getPositions

```java
public Stream<BlockPos> getPositions(PlacementContext p_226336_, RandomSource p_226337_, BlockPos p_226338_)
```

**Parameters:**

- `p_226336_` (`PlacementContext`)
- `p_226337_` (`RandomSource`)
- `p_226338_` (`BlockPos`)

**Returns:** `Stream<BlockPos>`

### type

```java
public PlacementModifierType<?> type()
```

**Returns:** `PlacementModifierType<?>`
