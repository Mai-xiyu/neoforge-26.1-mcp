# HeightRangePlacement

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `PlacementModifier`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<HeightRangePlacement>` |  |

## Methods

### HeightRangePlacement

```java
private HeightRangePlacement(HeightProvider p_191677_)
```

**Parameters:**

- `p_191677_` (`HeightProvider`)

**Returns:** `private`

### of

```java
public static HeightRangePlacement of(HeightProvider p_191684_)
```

**Parameters:**

- `p_191684_` (`HeightProvider`)

**Returns:** `public static HeightRangePlacement`

### HeightRangePlacement

```java
return new HeightRangePlacement()
```

**Returns:** `return new`

### uniform

```java
public static HeightRangePlacement uniform(VerticalAnchor p_191681_, VerticalAnchor p_191682_)
```

**Parameters:**

- `p_191681_` (`VerticalAnchor`)
- `p_191682_` (`VerticalAnchor`)

**Returns:** `public static HeightRangePlacement`

### triangle

```java
public static HeightRangePlacement triangle(VerticalAnchor p_191693_, VerticalAnchor p_191694_)
```

**Parameters:**

- `p_191693_` (`VerticalAnchor`)
- `p_191694_` (`VerticalAnchor`)

**Returns:** `public static HeightRangePlacement`

### getPositions

```java
public Stream<BlockPos> getPositions(PlacementContext p_226340_, RandomSource p_226341_, BlockPos p_226342_)
```

**Parameters:**

- `p_226340_` (`PlacementContext`)
- `p_226341_` (`RandomSource`)
- `p_226342_` (`BlockPos`)

**Returns:** `Stream<BlockPos>`

### type

```java
public PlacementModifierType<?> type()
```

**Returns:** `PlacementModifierType<?>`
