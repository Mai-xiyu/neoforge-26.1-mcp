# CarvingMaskPlacement

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `PlacementModifier`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CarvingMaskPlacement>` |  |

## Methods

### CarvingMaskPlacement

```java
private CarvingMaskPlacement(GenerationStep.Carving p_191589_)
```

**Parameters:**

- `p_191589_` (`GenerationStep.Carving`)

**Returns:** `private`

### forStep

```java
public static CarvingMaskPlacement forStep(GenerationStep.Carving p_191591_)
```

**Parameters:**

- `p_191591_` (`GenerationStep.Carving`)

**Returns:** `public static CarvingMaskPlacement`

### CarvingMaskPlacement

```java
return new CarvingMaskPlacement()
```

**Returns:** `return new`

### getPositions

```java
public Stream<BlockPos> getPositions(PlacementContext p_226325_, RandomSource p_226326_, BlockPos p_226327_)
```

**Parameters:**

- `p_226325_` (`PlacementContext`)
- `p_226326_` (`RandomSource`)
- `p_226327_` (`BlockPos`)

**Returns:** `Stream<BlockPos>`

### type

```java
public PlacementModifierType<?> type()
```

**Returns:** `PlacementModifierType<?>`
