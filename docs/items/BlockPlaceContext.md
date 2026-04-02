# BlockPlaceContext

**Package:** `net.minecraft.world.item.context`
**Type:** class
**Extends:** `UseOnContext`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `replaceClicked` | `boolean` |  |

## Methods

### BlockPlaceContext

```java
public BlockPlaceContext(Player p_43631_, InteractionHand p_43632_, ItemStack p_43633_, BlockHitResult p_43634_)
```

**Parameters:**

- `p_43631_` (`Player`)
- `p_43632_` (`InteractionHand`)
- `p_43633_` (`ItemStack`)
- `p_43634_` (`BlockHitResult`)

**Returns:** `public`

### BlockPlaceContext

```java
public BlockPlaceContext(UseOnContext p_43636_)
```

**Parameters:**

- `p_43636_` (`UseOnContext`)

**Returns:** `public`

### BlockPlaceContext

```java
public BlockPlaceContext(Level p_43638_, Player p_43639_, InteractionHand p_43640_, ItemStack p_43641_, BlockHitResult p_43642_)
```

**Parameters:**

- `p_43638_` (`Level`)
- `p_43639_` (`Player`)
- `p_43640_` (`InteractionHand`)
- `p_43641_` (`ItemStack`)
- `p_43642_` (`BlockHitResult`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### at

```java
public static BlockPlaceContext at(BlockPlaceContext p_43645_, BlockPos p_43646_, Direction p_43647_)
```

**Parameters:**

- `p_43645_` (`BlockPlaceContext`)
- `p_43646_` (`BlockPos`)
- `p_43647_` (`Direction`)

**Returns:** `public static BlockPlaceContext`

### getClickedPos

```java
public BlockPos getClickedPos()
```

**Returns:** `BlockPos`

### canPlace

```java
public boolean canPlace()
```

**Returns:** `public boolean`

### replacingClickedOnBlock

```java
public boolean replacingClickedOnBlock()
```

**Returns:** `public boolean`

### getNearestLookingDirection

```java
public Direction getNearestLookingDirection()
```

**Returns:** `public Direction`

### getNearestLookingVerticalDirection

```java
public Direction getNearestLookingVerticalDirection()
```

**Returns:** `public Direction`

### getNearestLookingDirections

```java
public Direction[] getNearestLookingDirections()
```

**Returns:** `public Direction[]`
