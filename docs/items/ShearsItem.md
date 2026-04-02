# ShearsItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Methods

### ShearsItem

```java
public ShearsItem(Item.Properties p_43074_)
```

**Parameters:**

- `p_43074_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createToolProperties

```java
public static Tool createToolProperties()
```

**Returns:** `public static Tool`

### mineBlock

```java
public boolean mineBlock(ItemStack p_43078_, Level p_43079_, BlockState p_43080_, BlockPos p_43081_, LivingEntity p_43082_)
```

**Parameters:**

- `p_43078_` (`ItemStack`)
- `p_43079_` (`Level`)
- `p_43080_` (`BlockState`)
- `p_43081_` (`BlockPos`)
- `p_43082_` (`LivingEntity`)

**Returns:** `boolean`

### interactLivingEntity

```java
public InteractionResult interactLivingEntity(ItemStack stack, Player player, LivingEntity entity, net.minecraft.world.InteractionHand hand)
```

**Parameters:**

- `stack` (`ItemStack`)
- `player` (`Player`)
- `entity` (`LivingEntity`)
- `hand` (`net.minecraft.world.InteractionHand`)

**Returns:** `InteractionResult`

### canPerformAction

```java
public boolean canPerformAction(ItemStack stack, net.neoforged.neoforge.common.ItemAbility itemAbility)
```

**Parameters:**

- `stack` (`ItemStack`)
- `itemAbility` (`net.neoforged.neoforge.common.ItemAbility`)

**Returns:** `boolean`

### useOn

```java
public InteractionResult useOn(UseOnContext p_186371_)
```

**Parameters:**

- `p_186371_` (`UseOnContext`)

**Returns:** `InteractionResult`
