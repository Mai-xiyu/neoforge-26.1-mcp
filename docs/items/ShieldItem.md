# ShieldItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`
**Implements:** `Equipable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EFFECTIVE_BLOCK_DELAY` | `int` |  |
| `MINIMUM_DURABILITY_DAMAGE` | `float` |  |

## Methods

### ShieldItem

```java
public ShieldItem(Item.Properties p_43089_)
```

**Parameters:**

- `p_43089_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDescriptionId

```java
public String getDescriptionId(ItemStack p_43109_)
```

**Parameters:**

- `p_43109_` (`ItemStack`)

**Returns:** `String`

### appendHoverText

```java
public void appendHoverText(ItemStack p_43094_, Item.TooltipContext p_339613_, List<Component> p_43096_, TooltipFlag p_43097_)
```

**Parameters:**

- `p_43094_` (`ItemStack`)
- `p_339613_` (`Item.TooltipContext`)
- `p_43096_` (`List<Component>`)
- `p_43097_` (`TooltipFlag`)

### getUseAnimation

```java
public UseAnim getUseAnimation(ItemStack p_43105_)
```

**Parameters:**

- `p_43105_` (`ItemStack`)

**Returns:** `UseAnim`

### getUseDuration

```java
public int getUseDuration(ItemStack p_43107_, LivingEntity p_346168_)
```

**Parameters:**

- `p_43107_` (`ItemStack`)
- `p_346168_` (`LivingEntity`)

**Returns:** `int`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_43099_, Player p_43100_, InteractionHand p_43101_)
```

**Parameters:**

- `p_43099_` (`Level`)
- `p_43100_` (`Player`)
- `p_43101_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### isValidRepairItem

```java
public boolean isValidRepairItem(ItemStack p_43091_, ItemStack p_43092_)
```

**Parameters:**

- `p_43091_` (`ItemStack`)
- `p_43092_` (`ItemStack`)

**Returns:** `boolean`

### getEquipmentSlot

```java
public EquipmentSlot getEquipmentSlot()
```

**Returns:** `EquipmentSlot`

### canPerformAction

```java
public boolean canPerformAction(ItemStack stack, net.neoforged.neoforge.common.ItemAbility itemAbility)
```

**Parameters:**

- `stack` (`ItemStack`)
- `itemAbility` (`net.neoforged.neoforge.common.ItemAbility`)

**Returns:** `boolean`
