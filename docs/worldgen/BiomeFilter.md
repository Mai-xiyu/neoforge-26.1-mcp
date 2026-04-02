# BiomeFilter

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `PlacementFilter`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BiomeFilter>` |  |

## Methods

### BiomeFilter

```java
private BiomeFilter()
```

**Returns:** `private`

### biome

```java
public static BiomeFilter biome()
```

**Returns:** `public static BiomeFilter`

### shouldPlace

```java
protected boolean shouldPlace(PlacementContext p_226317_, RandomSource p_226318_, BlockPos p_226319_)
```

**Parameters:**

- `p_226317_` (`PlacementContext`)
- `p_226318_` (`RandomSource`)
- `p_226319_` (`BlockPos`)

**Returns:** `boolean`

### type

```java
public PlacementModifierType<?> type()
```

**Returns:** `PlacementModifierType<?>`
