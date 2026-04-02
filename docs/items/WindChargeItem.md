# WindChargeItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`
**Implements:** `ProjectileItem`

## Methods

### WindChargeItem

```java
public WindChargeItem(Item.Properties p_326377_)
```

**Parameters:**

- `p_326377_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_326306_, Player p_326042_, InteractionHand p_326470_)
```

**Parameters:**

- `p_326306_` (`Level`)
- `p_326042_` (`Player`)
- `p_326470_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### asProjectile

```java
public Projectile asProjectile(Level p_338589_, Position p_338670_, ItemStack p_338308_, Direction p_338206_)
```

**Parameters:**

- `p_338589_` (`Level`)
- `p_338670_` (`Position`)
- `p_338308_` (`ItemStack`)
- `p_338206_` (`Direction`)

**Returns:** `Projectile`

### shoot

```java
public void shoot(Projectile p_338260_, double p_338763_, double p_338177_, double p_338349_, float p_338273_, float p_338257_)
```

**Parameters:**

- `p_338260_` (`Projectile`)
- `p_338763_` (`double`)
- `p_338177_` (`double`)
- `p_338349_` (`double`)
- `p_338273_` (`float`)
- `p_338257_` (`float`)

### createDispenseConfig

```java
public ProjectileItem.DispenseConfig createDispenseConfig()
```

**Returns:** `ProjectileItem.DispenseConfig`
