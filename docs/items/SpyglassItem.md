# SpyglassItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `USE_DURATION` | `int` |  |
| `ZOOM_FOV_MODIFIER` | `float` |  |

## Methods

### SpyglassItem

```java
public SpyglassItem(Item.Properties p_151205_)
```

**Parameters:**

- `p_151205_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getUseDuration

```java
public int getUseDuration(ItemStack p_151222_, LivingEntity p_345399_)
```

**Parameters:**

- `p_151222_` (`ItemStack`)
- `p_345399_` (`LivingEntity`)

**Returns:** `int`

### getUseAnimation

```java
public UseAnim getUseAnimation(ItemStack p_151224_)
```

**Parameters:**

- `p_151224_` (`ItemStack`)

**Returns:** `UseAnim`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_151218_, Player p_151219_, InteractionHand p_151220_)
```

**Parameters:**

- `p_151218_` (`Level`)
- `p_151219_` (`Player`)
- `p_151220_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### finishUsingItem

```java
public ItemStack finishUsingItem(ItemStack p_151209_, Level p_151210_, LivingEntity p_151211_)
```

**Parameters:**

- `p_151209_` (`ItemStack`)
- `p_151210_` (`Level`)
- `p_151211_` (`LivingEntity`)

**Returns:** `ItemStack`

### releaseUsing

```java
public void releaseUsing(ItemStack p_151213_, Level p_151214_, LivingEntity p_151215_, int p_151216_)
```

**Parameters:**

- `p_151213_` (`ItemStack`)
- `p_151214_` (`Level`)
- `p_151215_` (`LivingEntity`)
- `p_151216_` (`int`)

### stopUsing

```java
private void stopUsing(LivingEntity p_151207_)
```

**Parameters:**

- `p_151207_` (`LivingEntity`)

**Returns:** `private void`
