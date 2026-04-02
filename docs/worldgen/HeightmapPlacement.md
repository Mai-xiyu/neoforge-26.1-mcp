# HeightmapPlacement

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `PlacementModifier`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<HeightmapPlacement>` |  |

## Methods

### HeightmapPlacement

```java
private HeightmapPlacement(Heightmap.Types p_191699_)
```

**Parameters:**

- `p_191699_` (`Heightmap.Types`)

**Returns:** `private`

### onHeightmap

```java
public static HeightmapPlacement onHeightmap(Heightmap.Types p_191703_)
```

**Parameters:**

- `p_191703_` (`Heightmap.Types`)

**Returns:** `public static HeightmapPlacement`

### HeightmapPlacement

```java
return new HeightmapPlacement()
```

**Returns:** `return new`

### getPositions

```java
public Stream<BlockPos> getPositions(PlacementContext p_226344_, RandomSource p_226345_, BlockPos p_226346_)
```

**Parameters:**

- `p_226344_` (`PlacementContext`)
- `p_226345_` (`RandomSource`)
- `p_226346_` (`BlockPos`)

**Returns:** `Stream<BlockPos>`

### type

```java
public PlacementModifierType<?> type()
```

**Returns:** `PlacementModifierType<?>`
