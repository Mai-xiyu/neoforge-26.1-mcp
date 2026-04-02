# PotionItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Methods

### PotionItem

```java
public PotionItem(Item.Properties p_42979_)
```

**Parameters:**

- `p_42979_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDefaultInstance

```java
public ItemStack getDefaultInstance()
```

**Returns:** `ItemStack`

### finishUsingItem

```java
public ItemStack finishUsingItem(ItemStack p_42984_, Level p_42985_, LivingEntity p_42986_)
```

**Parameters:**

- `p_42984_` (`ItemStack`)
- `p_42985_` (`Level`)
- `p_42986_` (`LivingEntity`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### useOn

```java
public InteractionResult useOn(UseOnContext p_220235_)
```

**Parameters:**

- `p_220235_` (`UseOnContext`)

**Returns:** `InteractionResult`

### getUseDuration

```java
public int getUseDuration(ItemStack p_43001_, LivingEntity p_346041_)
```

**Parameters:**

- `p_43001_` (`ItemStack`)
- `p_346041_` (`LivingEntity`)

**Returns:** `int`

### getUseAnimation

```java
public UseAnim getUseAnimation(ItemStack p_42997_)
```

**Parameters:**

- `p_42997_` (`ItemStack`)

**Returns:** `UseAnim`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_42993_, Player p_42994_, InteractionHand p_42995_)
```

**Parameters:**

- `p_42993_` (`Level`)
- `p_42994_` (`Player`)
- `p_42995_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### getDescriptionId

```java
public String getDescriptionId(ItemStack p_43003_)
```

**Parameters:**

- `p_43003_` (`ItemStack`)

**Returns:** `String`

### appendHoverText

```java
public void appendHoverText(ItemStack p_42988_, Item.TooltipContext p_339608_, List<Component> p_42990_, TooltipFlag p_42991_)
```

**Parameters:**

- `p_42988_` (`ItemStack`)
- `p_339608_` (`Item.TooltipContext`)
- `p_42990_` (`List<Component>`)
- `p_42991_` (`TooltipFlag`)
