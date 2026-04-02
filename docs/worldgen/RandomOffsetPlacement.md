# RandomOffsetPlacement

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `PlacementModifier`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RandomOffsetPlacement>` |  |

## Methods

### of

```java
public static RandomOffsetPlacement of(IntProvider p_191880_, IntProvider p_191881_)
```

**Parameters:**

- `p_191880_` (`IntProvider`)
- `p_191881_` (`IntProvider`)

**Returns:** `public static RandomOffsetPlacement`

### RandomOffsetPlacement

```java
return new RandomOffsetPlacement()
```

**Returns:** `return new`

### vertical

```java
public static RandomOffsetPlacement vertical(IntProvider p_191878_)
```

**Parameters:**

- `p_191878_` (`IntProvider`)

**Returns:** `public static RandomOffsetPlacement`

### horizontal

```java
public static RandomOffsetPlacement horizontal(IntProvider p_191892_)
```

**Parameters:**

- `p_191892_` (`IntProvider`)

**Returns:** `public static RandomOffsetPlacement`

### RandomOffsetPlacement

```java
private RandomOffsetPlacement(IntProvider p_191875_, IntProvider p_191876_)
```

**Parameters:**

- `p_191875_` (`IntProvider`)
- `p_191876_` (`IntProvider`)

**Returns:** `private`

### getPositions

```java
public Stream<BlockPos> getPositions(PlacementContext p_226393_, RandomSource p_226394_, BlockPos p_226395_)
```

**Parameters:**

- `p_226393_` (`PlacementContext`)
- `p_226394_` (`RandomSource`)
- `p_226395_` (`BlockPos`)

**Returns:** `Stream<BlockPos>`

### type

```java
public PlacementModifierType<?> type()
```

**Returns:** `PlacementModifierType<?>`
