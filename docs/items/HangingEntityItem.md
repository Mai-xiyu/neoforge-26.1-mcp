# HangingEntityItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Methods

### HangingEntityItem

```java
public HangingEntityItem(EntityType<? extends HangingEntity> p_41324_, Item.Properties p_41325_)
```

**Parameters:**

- `p_41324_` (`EntityType<? extends HangingEntity>`)
- `p_41325_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useOn

```java
public InteractionResult useOn(UseOnContext p_41331_)
```

**Parameters:**

- `p_41331_` (`UseOnContext`)

**Returns:** `InteractionResult`

### mayPlace

```java
protected boolean mayPlace(Player p_41326_, Direction p_41327_, ItemStack p_41328_, BlockPos p_41329_)
```

**Parameters:**

- `p_41326_` (`Player`)
- `p_41327_` (`Direction`)
- `p_41328_` (`ItemStack`)
- `p_41329_` (`BlockPos`)

**Returns:** `protected boolean`

### appendHoverText

```java
public void appendHoverText(ItemStack p_270235_, Item.TooltipContext p_339644_, List<Component> p_270630_, TooltipFlag p_270170_)
```

**Parameters:**

- `p_270235_` (`ItemStack`)
- `p_339644_` (`Item.TooltipContext`)
- `p_270630_` (`List<Component>`)
- `p_270170_` (`TooltipFlag`)
