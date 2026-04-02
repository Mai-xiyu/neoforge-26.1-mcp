# ThrowablePotionItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `PotionItem`
**Implements:** `ProjectileItem`

## Methods

### ThrowablePotionItem

```java
public ThrowablePotionItem(Item.Properties p_43301_)
```

**Parameters:**

- `p_43301_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_43303_, Player p_43304_, InteractionHand p_43305_)
```

**Parameters:**

- `p_43303_` (`Level`)
- `p_43304_` (`Player`)
- `p_43305_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### asProjectile

```java
public Projectile asProjectile(Level p_338465_, Position p_338661_, ItemStack p_338506_, Direction p_338517_)
```

**Parameters:**

- `p_338465_` (`Level`)
- `p_338661_` (`Position`)
- `p_338506_` (`ItemStack`)
- `p_338517_` (`Direction`)

**Returns:** `Projectile`

### createDispenseConfig

```java
public ProjectileItem.DispenseConfig createDispenseConfig()
```

**Returns:** `ProjectileItem.DispenseConfig`
