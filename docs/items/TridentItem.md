# TridentItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`
**Implements:** `ProjectileItem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `THROW_THRESHOLD_TIME` | `int` |  |
| `BASE_DAMAGE` | `float` |  |
| `SHOOT_POWER` | `float` |  |

## Methods

### TridentItem

```java
public TridentItem(Item.Properties p_43381_)
```

**Parameters:**

- `p_43381_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createAttributes

```java
public static ItemAttributeModifiers createAttributes()
```

**Returns:** `public static ItemAttributeModifiers`

### createToolProperties

```java
public static Tool createToolProperties()
```

**Returns:** `public static Tool`

### canAttackBlock

```java
public boolean canAttackBlock(BlockState p_43409_, Level p_43410_, BlockPos p_43411_, Player p_43412_)
```

**Parameters:**

- `p_43409_` (`BlockState`)
- `p_43410_` (`Level`)
- `p_43411_` (`BlockPos`)
- `p_43412_` (`Player`)

**Returns:** `boolean`

### getUseAnimation

```java
public UseAnim getUseAnimation(ItemStack p_43417_)
```

**Parameters:**

- `p_43417_` (`ItemStack`)

**Returns:** `UseAnim`

### getUseDuration

```java
public int getUseDuration(ItemStack p_43419_, LivingEntity p_345001_)
```

**Parameters:**

- `p_43419_` (`ItemStack`)
- `p_345001_` (`LivingEntity`)

**Returns:** `int`

### releaseUsing

```java
public void releaseUsing(ItemStack p_43394_, Level p_43395_, LivingEntity p_43396_, int p_43397_)
```

**Parameters:**

- `p_43394_` (`ItemStack`)
- `p_43395_` (`Level`)
- `p_43396_` (`LivingEntity`)
- `p_43397_` (`int`)

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_43405_, Player p_43406_, InteractionHand p_43407_)
```

**Parameters:**

- `p_43405_` (`Level`)
- `p_43406_` (`Player`)
- `p_43407_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### isTooDamagedToUse

```java
private static boolean isTooDamagedToUse(ItemStack p_353073_)
```

**Parameters:**

- `p_353073_` (`ItemStack`)

**Returns:** `private static boolean`

### hurtEnemy

```java
public boolean hurtEnemy(ItemStack p_43390_, LivingEntity p_43391_, LivingEntity p_43392_)
```

**Parameters:**

- `p_43390_` (`ItemStack`)
- `p_43391_` (`LivingEntity`)
- `p_43392_` (`LivingEntity`)

**Returns:** `boolean`

### postHurtEnemy

```java
public void postHurtEnemy(ItemStack p_345950_, LivingEntity p_345617_, LivingEntity p_345537_)
```

**Parameters:**

- `p_345950_` (`ItemStack`)
- `p_345617_` (`LivingEntity`)
- `p_345537_` (`LivingEntity`)

### getEnchantmentValue

```java
public int getEnchantmentValue()
```

**Returns:** `int`

### asProjectile

```java
public Projectile asProjectile(Level p_338505_, Position p_338277_, ItemStack p_338353_, Direction p_338220_)
```

**Parameters:**

- `p_338505_` (`Level`)
- `p_338277_` (`Position`)
- `p_338353_` (`ItemStack`)
- `p_338220_` (`Direction`)

**Returns:** `Projectile`

### canPerformAction

```java
public boolean canPerformAction(ItemStack stack, net.neoforged.neoforge.common.ItemAbility itemAbility)
```

**Parameters:**

- `stack` (`ItemStack`)
- `itemAbility` (`net.neoforged.neoforge.common.ItemAbility`)

**Returns:** `boolean`
