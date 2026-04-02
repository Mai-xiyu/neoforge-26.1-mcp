# ArrowItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`
**Implements:** `ProjectileItem`

## Methods

### ArrowItem

```java
public ArrowItem(Item.Properties p_40512_)
```

**Parameters:**

- `p_40512_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createArrow

```java
public AbstractArrow createArrow(Level p_40513_, ItemStack p_40514_, LivingEntity p_40515_, ItemStack p_344832_)
```

**Parameters:**

- `p_40513_` (`Level`)
- `p_40514_` (`ItemStack`)
- `p_40515_` (`LivingEntity`)
- `p_344832_` (`ItemStack`)

**Returns:** `public AbstractArrow`

### asProjectile

```java
public Projectile asProjectile(Level p_338330_, Position p_338329_, ItemStack p_338197_, Direction p_338469_)
```

**Parameters:**

- `p_338330_` (`Level`)
- `p_338329_` (`Position`)
- `p_338197_` (`ItemStack`)
- `p_338469_` (`Direction`)

**Returns:** `Projectile`

### isInfinite

```java
public boolean isInfinite(ItemStack ammo, ItemStack bow, net.minecraft.world.entity.LivingEntity livingEntity)
```

**Parameters:**

- `ammo` (`ItemStack`)
- `bow` (`ItemStack`)
- `livingEntity` (`net.minecraft.world.entity.LivingEntity`)

**Returns:** `boolean`
