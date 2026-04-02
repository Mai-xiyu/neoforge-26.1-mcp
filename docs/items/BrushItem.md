# BrushItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ANIMATION_DURATION` | `int` |  |

## Methods

### BrushItem

```java
public BrushItem(Item.Properties p_272907_)
```

**Parameters:**

- `p_272907_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useOn

```java
public InteractionResult useOn(UseOnContext p_272607_)
```

**Parameters:**

- `p_272607_` (`UseOnContext`)

**Returns:** `InteractionResult`

### getUseAnimation

```java
public UseAnim getUseAnimation(ItemStack p_273490_)
```

**Parameters:**

- `p_273490_` (`ItemStack`)

**Returns:** `UseAnim`

### getUseDuration

```java
public int getUseDuration(ItemStack p_272765_, LivingEntity p_344739_)
```

**Parameters:**

- `p_272765_` (`ItemStack`)
- `p_344739_` (`LivingEntity`)

**Returns:** `int`

### onUseTick

```java
public void onUseTick(Level p_273467_, LivingEntity p_273619_, ItemStack p_273316_, int p_273101_)
```

**Parameters:**

- `p_273467_` (`Level`)
- `p_273619_` (`LivingEntity`)
- `p_273316_` (`ItemStack`)
- `p_273101_` (`int`)

### calculateHitResult

```java
private HitResult calculateHitResult(Player p_305856_)
```

**Parameters:**

- `p_305856_` (`Player`)

**Returns:** `private HitResult`

### spawnDustParticles

```java
private void spawnDustParticles(Level p_278327_, BlockHitResult p_278272_, BlockState p_278235_, Vec3 p_278337_, HumanoidArm p_285071_)
```

**Parameters:**

- `p_278327_` (`Level`)
- `p_278272_` (`BlockHitResult`)
- `p_278235_` (`BlockState`)
- `p_278337_` (`Vec3`)
- `p_285071_` (`HumanoidArm`)

**Returns:** `private void`

### DustParticlesDelta

```java
static record DustParticlesDelta(double xd, double yd, double zd)
```

**Parameters:**

- `xd` (`double`)
- `yd` (`double`)
- `zd` (`double`)

**Returns:** `static record`

### fromDirection

```java
public static BrushItem.DustParticlesDelta fromDirection(Vec3 p_273421_, Direction p_272987_)
```

**Parameters:**

- `p_273421_` (`Vec3`)
- `p_272987_` (`Direction`)

**Returns:** `public static BrushItem.DustParticlesDelta`

### canPerformAction

```java
public boolean canPerformAction(ItemStack stack, net.neoforged.neoforge.common.ItemAbility itemAbility)
```

**Parameters:**

- `stack` (`ItemStack`)
- `itemAbility` (`net.neoforged.neoforge.common.ItemAbility`)

**Returns:** `boolean`
