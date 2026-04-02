# FireworkRocketItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`
**Implements:** `ProjectileItem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CRAFTABLE_DURATIONS` | `byte[]` |  |
| `ROCKET_PLACEMENT_OFFSET` | `double` |  |

## Methods

### FireworkRocketItem

```java
public FireworkRocketItem(Item.Properties p_41209_)
```

**Parameters:**

- `p_41209_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useOn

```java
public InteractionResult useOn(UseOnContext p_41216_)
```

**Parameters:**

- `p_41216_` (`UseOnContext`)

**Returns:** `InteractionResult`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_41218_, Player p_41219_, InteractionHand p_41220_)
```

**Parameters:**

- `p_41218_` (`Level`)
- `p_41219_` (`Player`)
- `p_41220_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### appendHoverText

```java
public void appendHoverText(ItemStack p_41211_, Item.TooltipContext p_339661_, List<Component> p_41213_, TooltipFlag p_41214_)
```

**Parameters:**

- `p_41211_` (`ItemStack`)
- `p_339661_` (`Item.TooltipContext`)
- `p_41213_` (`List<Component>`)
- `p_41214_` (`TooltipFlag`)

### asProjectile

```java
public Projectile asProjectile(Level p_338390_, Position p_338574_, ItemStack p_338487_, Direction p_338368_)
```

**Parameters:**

- `p_338390_` (`Level`)
- `p_338574_` (`Position`)
- `p_338487_` (`ItemStack`)
- `p_338368_` (`Direction`)

**Returns:** `Projectile`

### createDispenseConfig

```java
public ProjectileItem.DispenseConfig createDispenseConfig()
```

**Returns:** `ProjectileItem.DispenseConfig`

### getEntityPokingOutOfBlockPos

```java
private static Vec3 getEntityPokingOutOfBlockPos(BlockSource p_338806_, Direction p_338706_)
```

**Parameters:**

- `p_338806_` (`BlockSource`)
- `p_338706_` (`Direction`)

**Returns:** `private static Vec3`
