# AttributeTooltipContext

**Package:** `net.neoforged.neoforge.common.util`
**Type:** interface
**Extends:** `Item.TooltipContext`

## Description

Extended `TooltipContext` used when generating attribute tooltips.

## Methods

### player

```java
Player player()
```

**Returns:** `Player`

### flag

```java
TooltipFlag flag()
```

**Returns:** `TooltipFlag`

### of

```java
public static AttributeTooltipContext of(Player player, Item.TooltipContext itemCtx, TooltipFlag flag)
```

**Parameters:**

- `player` (`Player`)
- `itemCtx` (`Item.TooltipContext`)
- `flag` (`TooltipFlag`)

**Returns:** `public static AttributeTooltipContext`

### AttributeTooltipContext

```java
return new AttributeTooltipContext()
```

**Returns:** `return new`

### registries

```java
public Provider registries()
```

**Returns:** `Provider`

### tickRate

```java
public float tickRate()
```

**Returns:** `float`

### mapData

```java
public MapItemSavedData mapData(MapId id)
```

**Parameters:**

- `id` (`MapId`)

**Returns:** `MapItemSavedData`

### level

```java
public Level level()
```

**Returns:** `Level`

### player

```java
public Player player()
```

**Returns:** `Player`

### flag

```java
public TooltipFlag flag()
```

**Returns:** `TooltipFlag`
