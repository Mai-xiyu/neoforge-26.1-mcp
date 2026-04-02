# SurfaceRelativeThresholdFilter

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `PlacementFilter`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SurfaceRelativeThresholdFilter>` |  |

## Methods

### SurfaceRelativeThresholdFilter

```java
private SurfaceRelativeThresholdFilter(Heightmap.Types p_191925_, int p_191926_, int p_191927_)
```

**Parameters:**

- `p_191925_` (`Heightmap.Types`)
- `p_191926_` (`int`)
- `p_191927_` (`int`)

**Returns:** `private`

### of

```java
public static SurfaceRelativeThresholdFilter of(Heightmap.Types p_191931_, int p_191932_, int p_191933_)
```

**Parameters:**

- `p_191931_` (`Heightmap.Types`)
- `p_191932_` (`int`)
- `p_191933_` (`int`)

**Returns:** `public static SurfaceRelativeThresholdFilter`

### SurfaceRelativeThresholdFilter

```java
return new SurfaceRelativeThresholdFilter()
```

**Returns:** `return new`

### shouldPlace

```java
protected boolean shouldPlace(PlacementContext p_226407_, RandomSource p_226408_, BlockPos p_226409_)
```

**Parameters:**

- `p_226407_` (`PlacementContext`)
- `p_226408_` (`RandomSource`)
- `p_226409_` (`BlockPos`)

**Returns:** `boolean`

### type

```java
public PlacementModifierType<?> type()
```

**Returns:** `PlacementModifierType<?>`
