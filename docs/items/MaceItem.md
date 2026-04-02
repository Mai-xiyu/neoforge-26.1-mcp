# MaceItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SMASH_ATTACK_FALL_THRESHOLD` | `float` |  |
| `SMASH_ATTACK_KNOCKBACK_RADIUS` | `float` |  |

## Methods

### MaceItem

```java
public MaceItem(Item.Properties p_333796_)
```

**Parameters:**

- `p_333796_` (`Item.Properties`)

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
public boolean canAttackBlock(BlockState p_333875_, Level p_333847_, BlockPos p_334073_, Player p_334042_)
```

**Parameters:**

- `p_333875_` (`BlockState`)
- `p_333847_` (`Level`)
- `p_334073_` (`BlockPos`)
- `p_334042_` (`Player`)

**Returns:** `boolean`

### getEnchantmentValue

```java
public int getEnchantmentValue()
```

**Returns:** `int`

### hurtEnemy

```java
public boolean hurtEnemy(ItemStack p_334046_, LivingEntity p_333712_, LivingEntity p_333812_)
```

**Parameters:**

- `p_334046_` (`ItemStack`)
- `p_333712_` (`LivingEntity`)
- `p_333812_` (`LivingEntity`)

**Returns:** `boolean`

### knockback

```java
 knockback()
```

**Returns:** ``

### postHurtEnemy

```java
public void postHurtEnemy(ItemStack p_345716_, LivingEntity p_345817_, LivingEntity p_346003_)
```

**Parameters:**

- `p_345716_` (`ItemStack`)
- `p_345817_` (`LivingEntity`)
- `p_346003_` (`LivingEntity`)

### isValidRepairItem

```java
public boolean isValidRepairItem(ItemStack p_334031_, ItemStack p_334058_)
```

**Parameters:**

- `p_334031_` (`ItemStack`)
- `p_334058_` (`ItemStack`)

**Returns:** `boolean`

### getAttackDamageBonus

```java
public float getAttackDamageBonus(Entity p_344900_, float p_335575_, DamageSource p_344972_)
```

**Parameters:**

- `p_344900_` (`Entity`)
- `p_335575_` (`float`)
- `p_344972_` (`DamageSource`)

**Returns:** `float`

### knockback

```java
private static void knockback(Level p_335716_, Player p_335955_, Entity p_335810_)
```

**Parameters:**

- `p_335716_` (`Level`)
- `p_335955_` (`Player`)
- `p_335810_` (`Entity`)

**Returns:** `private static void`

### knockbackPredicate

```java
private static Predicate<LivingEntity> knockbackPredicate(Player p_338613_, Entity p_338698_)
```

**Parameters:**

- `p_338613_` (`Player`)
- `p_338698_` (`Entity`)

**Returns:** `private static Predicate<LivingEntity>`

### getKnockbackPower

```java
private static double getKnockbackPower(Player p_338265_, LivingEntity p_338630_, Vec3 p_338866_)
```

**Parameters:**

- `p_338265_` (`Player`)
- `p_338630_` (`LivingEntity`)
- `p_338866_` (`Vec3`)

**Returns:** `private static double`

### canSmashAttack

```java
public static boolean canSmashAttack(LivingEntity p_344836_)
```

**Parameters:**

- `p_344836_` (`LivingEntity`)

**Returns:** `public static boolean`
