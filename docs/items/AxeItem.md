# AxeItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `DiggerItem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STRIPPABLES` | `Map<Block, Block>` |  |

## Methods

### AxeItem

```java
public AxeItem(Tier p_40521_, Item.Properties p_40524_)
```

**Parameters:**

- `p_40521_` (`Tier`)
- `p_40524_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useOn

```java
public InteractionResult useOn(UseOnContext p_40529_)
```

**Parameters:**

- `p_40529_` (`UseOnContext`)

**Returns:** `InteractionResult`

### playerHasShieldUseIntent

```java
private static boolean playerHasShieldUseIntent(UseOnContext p_345141_)
```

**Parameters:**

- `p_345141_` (`UseOnContext`)

**Returns:** `private static boolean`

### evaluateNewBlockState

```java
private Optional<BlockState> evaluateNewBlockState(Level p_308922_, BlockPos p_308899_, Player p_309192_, BlockState p_308900_, UseOnContext p_40529_)
```

**Parameters:**

- `p_308922_` (`Level`)
- `p_308899_` (`BlockPos`)
- `p_309192_` (`Player`)
- `p_308900_` (`BlockState`)
- `p_40529_` (`UseOnContext`)

**Returns:** `private Optional<BlockState>`

### getAxeStrippingState

```java
.jetbrains.annotations.Nullable
    public static BlockState getAxeStrippingState(BlockState originalState)
```

**Parameters:**

- `originalState` (`BlockState`)

**Returns:** `.jetbrains.annotations.Nullable
    public static BlockState`

### getStripped

```java
private Optional<BlockState> getStripped(BlockState p_150691_)
```

**Parameters:**

- `p_150691_` (`BlockState`)

**Returns:** `private Optional<BlockState>`

### canPerformAction

```java
public boolean canPerformAction(ItemStack stack, net.neoforged.neoforge.common.ItemAbility itemAbility)
```

**Parameters:**

- `stack` (`ItemStack`)
- `itemAbility` (`net.neoforged.neoforge.common.ItemAbility`)

**Returns:** `boolean`
