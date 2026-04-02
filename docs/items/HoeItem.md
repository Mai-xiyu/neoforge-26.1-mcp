# HoeItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `DiggerItem`

## Methods

### HoeItem

```java
public HoeItem(Tier p_41336_, Item.Properties p_41339_)
```

**Parameters:**

- `p_41336_` (`Tier`)
- `p_41339_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useOn

```java
public InteractionResult useOn(UseOnContext p_41341_)
```

**Parameters:**

- `p_41341_` (`UseOnContext`)

**Returns:** `InteractionResult`

### changeIntoState

```java
public static Consumer<UseOnContext> changeIntoState(BlockState p_150859_)
```

**Parameters:**

- `p_150859_` (`BlockState`)

**Returns:** `public static Consumer<UseOnContext>`

### changeIntoStateAndDropItem

```java
public static Consumer<UseOnContext> changeIntoStateAndDropItem(BlockState p_150850_, ItemLike p_150851_)
```

**Parameters:**

- `p_150850_` (`BlockState`)
- `p_150851_` (`ItemLike`)

**Returns:** `public static Consumer<UseOnContext>`

### onlyIfAirAbove

```java
public static boolean onlyIfAirAbove(UseOnContext p_150857_)
```

**Parameters:**

- `p_150857_` (`UseOnContext`)

**Returns:** `public static boolean`

### canPerformAction

```java
public boolean canPerformAction(ItemStack stack, net.neoforged.neoforge.common.ItemAbility itemAbility)
```

**Parameters:**

- `stack` (`ItemStack`)
- `itemAbility` (`net.neoforged.neoforge.common.ItemAbility`)

**Returns:** `boolean`
