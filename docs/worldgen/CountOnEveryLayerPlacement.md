# CountOnEveryLayerPlacement

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `PlacementModifier`
**Annotations:** `@Deprecated`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CountOnEveryLayerPlacement>` |  |

## Methods

### CountOnEveryLayerPlacement

```java
private CountOnEveryLayerPlacement(IntProvider p_191603_)
```

**Parameters:**

- `p_191603_` (`IntProvider`)

**Returns:** `private`

### of

```java
public static CountOnEveryLayerPlacement of(IntProvider p_191607_)
```

**Parameters:**

- `p_191607_` (`IntProvider`)

**Returns:** `public static CountOnEveryLayerPlacement`

### CountOnEveryLayerPlacement

```java
return new CountOnEveryLayerPlacement()
```

**Returns:** `return new`

### of

```java
public static CountOnEveryLayerPlacement of(int p_191605_)
```

**Parameters:**

- `p_191605_` (`int`)

**Returns:** `public static CountOnEveryLayerPlacement`

### getPositions

```java
public Stream<BlockPos> getPositions(PlacementContext p_226329_, RandomSource p_226330_, BlockPos p_226331_)
```

**Parameters:**

- `p_226329_` (`PlacementContext`)
- `p_226330_` (`RandomSource`)
- `p_226331_` (`BlockPos`)

**Returns:** `Stream<BlockPos>`

### type

```java
public PlacementModifierType<?> type()
```

**Returns:** `PlacementModifierType<?>`

### findOnGroundYPosition

```java
private static int findOnGroundYPosition(PlacementContext p_191613_, int p_191614_, int p_191615_, int p_191616_, int p_191617_)
```

**Parameters:**

- `p_191613_` (`PlacementContext`)
- `p_191614_` (`int`)
- `p_191615_` (`int`)
- `p_191616_` (`int`)
- `p_191617_` (`int`)

**Returns:** `private static int`

### isEmpty

```java
private static boolean isEmpty(BlockState p_191609_)
```

**Parameters:**

- `p_191609_` (`BlockState`)

**Returns:** `private static boolean`
