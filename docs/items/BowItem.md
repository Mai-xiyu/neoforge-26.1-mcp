# BowItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `ProjectileWeaponItem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_DRAW_DURATION` | `int` |  |
| `DEFAULT_RANGE` | `int` |  |

## Methods

### BowItem

```java
public BowItem(Item.Properties p_40660_)
```

**Parameters:**

- `p_40660_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### releaseUsing

```java
public void releaseUsing(ItemStack p_40667_, Level p_40668_, LivingEntity p_40669_, int p_40670_)
```

**Parameters:**

- `p_40667_` (`ItemStack`)
- `p_40668_` (`Level`)
- `p_40669_` (`LivingEntity`)
- `p_40670_` (`int`)

### shootProjectile

```java
protected void shootProjectile(LivingEntity p_331372_, Projectile p_332000_, int p_330631_, float p_331251_, float p_331199_, float p_330857_, LivingEntity p_331572_)
```

**Parameters:**

- `p_331372_` (`LivingEntity`)
- `p_332000_` (`Projectile`)
- `p_330631_` (`int`)
- `p_331251_` (`float`)
- `p_331199_` (`float`)
- `p_330857_` (`float`)
- `p_331572_` (`LivingEntity`)

### getPowerForTime

```java
public static float getPowerForTime(int p_40662_)
```

**Parameters:**

- `p_40662_` (`int`)

**Returns:** `public static float`

### getUseDuration

```java
public int getUseDuration(ItemStack p_40680_, LivingEntity p_345962_)
```

**Parameters:**

- `p_40680_` (`ItemStack`)
- `p_345962_` (`LivingEntity`)

**Returns:** `int`

### getUseAnimation

```java
public UseAnim getUseAnimation(ItemStack p_40678_)
```

**Parameters:**

- `p_40678_` (`ItemStack`)

**Returns:** `UseAnim`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_40672_, Player p_40673_, InteractionHand p_40674_)
```

**Parameters:**

- `p_40672_` (`Level`)
- `p_40673_` (`Player`)
- `p_40674_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### getAllSupportedProjectiles

```java
public Predicate<ItemStack> getAllSupportedProjectiles()
```

**Returns:** `Predicate<ItemStack>`

### getDefaultProjectileRange

```java
public int getDefaultProjectileRange()
```

**Returns:** `int`
