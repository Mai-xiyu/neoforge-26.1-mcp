# DyeItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`
**Implements:** `SignApplicator`

## Methods

### DyeItem

```java
public DyeItem(DyeColor p_41080_, Item.Properties p_41081_)
```

**Parameters:**

- `p_41080_` (`DyeColor`)
- `p_41081_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### interactLivingEntity

```java
public InteractionResult interactLivingEntity(ItemStack p_41085_, Player p_41086_, LivingEntity p_41087_, InteractionHand p_41088_)
```

**Parameters:**

- `p_41085_` (`ItemStack`)
- `p_41086_` (`Player`)
- `p_41087_` (`LivingEntity`)
- `p_41088_` (`InteractionHand`)

**Returns:** `InteractionResult`

### getDyeColor

```java
public DyeColor getDyeColor()
```

**Returns:** `public DyeColor`

### byColor

```java
public static DyeItem byColor(DyeColor p_41083_)
```

**Parameters:**

- `p_41083_` (`DyeColor`)

**Returns:** `public static DyeItem`

### tryApplyToSign

```java
public boolean tryApplyToSign(Level p_277691_, SignBlockEntity p_277488_, boolean p_277951_, Player p_277932_)
```

**Parameters:**

- `p_277691_` (`Level`)
- `p_277488_` (`SignBlockEntity`)
- `p_277951_` (`boolean`)
- `p_277932_` (`Player`)

**Returns:** `boolean`
