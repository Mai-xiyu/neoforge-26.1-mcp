# StandingAndWallBlockItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `BlockItem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `wallBlock` | `Block` |  |

## Methods

### StandingAndWallBlockItem

```java
public StandingAndWallBlockItem(Block p_248873_, Block p_251044_, Item.Properties p_249308_, Direction p_250800_)
```

**Parameters:**

- `p_248873_` (`Block`)
- `p_251044_` (`Block`)
- `p_249308_` (`Item.Properties`)
- `p_250800_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canPlace

```java
protected boolean canPlace(LevelReader p_250350_, BlockState p_249311_, BlockPos p_250328_)
```

**Parameters:**

- `p_250350_` (`LevelReader`)
- `p_249311_` (`BlockState`)
- `p_250328_` (`BlockPos`)

**Returns:** `protected boolean`

### getPlacementState

```java
protected BlockState getPlacementState(BlockPlaceContext p_43255_)
```

**Parameters:**

- `p_43255_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### registerBlocks

```java
public void registerBlocks(Map<Block, Item> p_43252_, Item p_43253_)
```

**Parameters:**

- `p_43252_` (`Map<Block, Item>`)
- `p_43253_` (`Item`)

### removeFromBlockToItemMap

```java
public void removeFromBlockToItemMap(Map<Block, Item> blockToItemMap, Item itemIn)
```

**Parameters:**

- `blockToItemMap` (`Map<Block, Item>`)
- `itemIn` (`Item`)
