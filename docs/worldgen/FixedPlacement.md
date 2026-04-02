# FixedPlacement

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `PlacementModifier`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FixedPlacement>` |  |

## Methods

### of

```java
public static FixedPlacement of(BlockPos[]... p_352896_)
```

**Parameters:**

- `p_352896_` (`BlockPos[]...`)

**Returns:** `public static FixedPlacement`

### FixedPlacement

```java
private FixedPlacement(List<BlockPos> p_352933_)
```

**Parameters:**

- `p_352933_` (`List<BlockPos>`)

**Returns:** `private`

### getPositions

```java
public Stream<BlockPos> getPositions(PlacementContext p_352915_, RandomSource p_352928_, BlockPos p_352899_)
```

**Parameters:**

- `p_352915_` (`PlacementContext`)
- `p_352928_` (`RandomSource`)
- `p_352899_` (`BlockPos`)

**Returns:** `Stream<BlockPos>`

### isSameChunk

```java
private static boolean isSameChunk(int p_352906_, int p_352932_, BlockPos p_352907_)
```

**Parameters:**

- `p_352906_` (`int`)
- `p_352932_` (`int`)
- `p_352907_` (`BlockPos`)

**Returns:** `private static boolean`

### type

```java
public PlacementModifierType<?> type()
```

**Returns:** `PlacementModifierType<?>`
