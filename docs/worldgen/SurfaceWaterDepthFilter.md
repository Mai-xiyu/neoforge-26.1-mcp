# SurfaceWaterDepthFilter

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `PlacementFilter`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SurfaceWaterDepthFilter>` |  |

## Methods

### SurfaceWaterDepthFilter

```java
private SurfaceWaterDepthFilter(int p_191949_)
```

**Parameters:**

- `p_191949_` (`int`)

**Returns:** `private`

### forMaxDepth

```java
public static SurfaceWaterDepthFilter forMaxDepth(int p_191951_)
```

**Parameters:**

- `p_191951_` (`int`)

**Returns:** `public static SurfaceWaterDepthFilter`

### SurfaceWaterDepthFilter

```java
return new SurfaceWaterDepthFilter()
```

**Returns:** `return new`

### shouldPlace

```java
protected boolean shouldPlace(PlacementContext p_226411_, RandomSource p_226412_, BlockPos p_226413_)
```

**Parameters:**

- `p_226411_` (`PlacementContext`)
- `p_226412_` (`RandomSource`)
- `p_226413_` (`BlockPos`)

**Returns:** `boolean`

### type

```java
public PlacementModifierType<?> type()
```

**Returns:** `PlacementModifierType<?>`
