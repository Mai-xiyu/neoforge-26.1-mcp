# BlockPredicateFilter

**Package:** `net.minecraft.world.level.levelgen.placement`
**Type:** class
**Extends:** `PlacementFilter`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BlockPredicateFilter>` |  |

## Methods

### BlockPredicateFilter

```java
private BlockPredicateFilter(BlockPredicate p_191573_)
```

**Parameters:**

- `p_191573_` (`BlockPredicate`)

**Returns:** `private`

### forPredicate

```java
public static BlockPredicateFilter forPredicate(BlockPredicate p_191577_)
```

**Parameters:**

- `p_191577_` (`BlockPredicate`)

**Returns:** `public static BlockPredicateFilter`

### BlockPredicateFilter

```java
return new BlockPredicateFilter()
```

**Returns:** `return new`

### shouldPlace

```java
protected boolean shouldPlace(PlacementContext p_226321_, RandomSource p_226322_, BlockPos p_226323_)
```

**Parameters:**

- `p_226321_` (`PlacementContext`)
- `p_226322_` (`RandomSource`)
- `p_226323_` (`BlockPos`)

**Returns:** `boolean`

### type

```java
public PlacementModifierType<?> type()
```

**Returns:** `PlacementModifierType<?>`
