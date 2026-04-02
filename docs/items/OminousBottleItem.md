# OminousBottleItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EFFECT_DURATION` | `int` |  |
| `MIN_AMPLIFIER` | `int` |  |
| `MAX_AMPLIFIER` | `int` |  |

## Methods

### OminousBottleItem

```java
public OminousBottleItem(Item.Properties p_338721_)
```

**Parameters:**

- `p_338721_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### finishUsingItem

```java
public ItemStack finishUsingItem(ItemStack p_338871_, Level p_338693_, LivingEntity p_338370_)
```

**Parameters:**

- `p_338871_` (`ItemStack`)
- `p_338693_` (`Level`)
- `p_338370_` (`LivingEntity`)

**Returns:** `ItemStack`

### getUseDuration

```java
public int getUseDuration(ItemStack p_338822_, LivingEntity p_345182_)
```

**Parameters:**

- `p_338822_` (`ItemStack`)
- `p_345182_` (`LivingEntity`)

**Returns:** `int`

### getUseAnimation

```java
public UseAnim getUseAnimation(ItemStack p_338722_)
```

**Parameters:**

- `p_338722_` (`ItemStack`)

**Returns:** `UseAnim`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_338229_, Player p_338350_, InteractionHand p_338729_)
```

**Parameters:**

- `p_338229_` (`Level`)
- `p_338350_` (`Player`)
- `p_338729_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### appendHoverText

```java
public void appendHoverText(ItemStack p_338470_, Item.TooltipContext p_339656_, List<Component> p_338463_, TooltipFlag p_338317_)
```

**Parameters:**

- `p_338470_` (`ItemStack`)
- `p_339656_` (`Item.TooltipContext`)
- `p_338463_` (`List<Component>`)
- `p_338317_` (`TooltipFlag`)
