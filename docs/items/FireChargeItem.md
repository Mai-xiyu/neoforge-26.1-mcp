# FireChargeItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`
**Implements:** `ProjectileItem`

## Methods

### FireChargeItem

```java
public FireChargeItem(Item.Properties p_41202_)
```

**Parameters:**

- `p_41202_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useOn

```java
public InteractionResult useOn(UseOnContext p_41204_)
```

**Parameters:**

- `p_41204_` (`UseOnContext`)

**Returns:** `InteractionResult`

### playSound

```java
private void playSound(Level p_41206_, BlockPos p_41207_)
```

**Parameters:**

- `p_41206_` (`Level`)
- `p_41207_` (`BlockPos`)

**Returns:** `private void`

### asProjectile

```java
public Projectile asProjectile(Level p_338826_, Position p_338780_, ItemStack p_338320_, Direction p_338841_)
```

**Parameters:**

- `p_338826_` (`Level`)
- `p_338780_` (`Position`)
- `p_338320_` (`ItemStack`)
- `p_338841_` (`Direction`)

**Returns:** `Projectile`

### shoot

```java
public void shoot(Projectile p_338389_, double p_338344_, double p_338646_, double p_338223_, float p_338688_, float p_338812_)
```

**Parameters:**

- `p_338389_` (`Projectile`)
- `p_338344_` (`double`)
- `p_338646_` (`double`)
- `p_338223_` (`double`)
- `p_338688_` (`float`)
- `p_338812_` (`float`)

### createDispenseConfig

```java
public ProjectileItem.DispenseConfig createDispenseConfig()
```

**Returns:** `ProjectileItem.DispenseConfig`

### canPerformAction

```java
public boolean canPerformAction(ItemStack stack, net.neoforged.neoforge.common.ItemAbility itemAbility)
```

**Parameters:**

- `stack` (`ItemStack`)
- `itemAbility` (`net.neoforged.neoforge.common.ItemAbility`)

**Returns:** `boolean`
