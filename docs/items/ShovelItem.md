# ShovelItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `DiggerItem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FLATTENABLES` | `Map<Block, BlockState>` |  |

## Methods

### ShovelItem

```java
public ShovelItem(Tier p_43114_, Item.Properties p_43117_)
```

**Parameters:**

- `p_43114_` (`Tier`)
- `p_43117_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useOn

```java
public InteractionResult useOn(UseOnContext p_43119_)
```

**Parameters:**

- `p_43119_` (`UseOnContext`)

**Returns:** `InteractionResult`

### getShovelPathingState

```java
.jetbrains.annotations.Nullable
    public static BlockState getShovelPathingState(BlockState originalState)
```

**Parameters:**

- `originalState` (`BlockState`)

**Returns:** `.jetbrains.annotations.Nullable
    public static BlockState`

### canPerformAction

```java
public boolean canPerformAction(ItemStack stack, net.neoforged.neoforge.common.ItemAbility itemAbility)
```

**Parameters:**

- `stack` (`ItemStack`)
- `itemAbility` (`net.neoforged.neoforge.common.ItemAbility`)

**Returns:** `boolean`
