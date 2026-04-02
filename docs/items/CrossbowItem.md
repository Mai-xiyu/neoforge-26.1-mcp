# CrossbowItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `ProjectileWeaponItem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_RANGE` | `int` |  |
| `MOB_ARROW_POWER` | `float` |  |

## Methods

### CrossbowItem

```java
public CrossbowItem(Item.Properties p_40850_)
```

**Parameters:**

- `p_40850_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getSupportedHeldProjectiles

```java
public Predicate<ItemStack> getSupportedHeldProjectiles()
```

**Returns:** `Predicate<ItemStack>`

### getAllSupportedProjectiles

```java
public Predicate<ItemStack> getAllSupportedProjectiles()
```

**Returns:** `Predicate<ItemStack>`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_40920_, Player p_40921_, InteractionHand p_40922_)
```

**Parameters:**

- `p_40920_` (`Level`)
- `p_40921_` (`Player`)
- `p_40922_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### getShootingPower

```java
private static float getShootingPower(ChargedProjectiles p_330249_)
```

**Parameters:**

- `p_330249_` (`ChargedProjectiles`)

**Returns:** `private static float`

### releaseUsing

```java
public void releaseUsing(ItemStack p_40875_, Level p_40876_, LivingEntity p_40877_, int p_40878_)
```

**Parameters:**

- `p_40875_` (`ItemStack`)
- `p_40876_` (`Level`)
- `p_40877_` (`LivingEntity`)
- `p_40878_` (`int`)

### tryLoadProjectiles

```java
private static boolean tryLoadProjectiles(LivingEntity p_40860_, ItemStack p_40861_)
```

**Parameters:**

- `p_40860_` (`LivingEntity`)
- `p_40861_` (`ItemStack`)

**Returns:** `private static boolean`

### isCharged

```java
public static boolean isCharged(ItemStack p_40933_)
```

**Parameters:**

- `p_40933_` (`ItemStack`)

**Returns:** `public static boolean`

### shootProjectile

```java
protected void shootProjectile(LivingEntity p_40896_, Projectile p_332122_, int p_331865_, float p_40900_, float p_40902_, float p_40903_, LivingEntity p_330303_)
```

**Parameters:**

- `p_40896_` (`LivingEntity`)
- `p_332122_` (`Projectile`)
- `p_331865_` (`int`)
- `p_40900_` (`float`)
- `p_40902_` (`float`)
- `p_40903_` (`float`)
- `p_330303_` (`LivingEntity`)

### getProjectileShotVector

```java
private static Vector3f getProjectileShotVector(LivingEntity p_331584_, Vec3 p_331590_, float p_331104_)
```

**Parameters:**

- `p_331584_` (`LivingEntity`)
- `p_331590_` (`Vec3`)
- `p_331104_` (`float`)

**Returns:** `private static Vector3f`

### createProjectile

```java
protected Projectile createProjectile(Level p_331583_, LivingEntity p_40863_, ItemStack p_40864_, ItemStack p_40865_, boolean p_40866_)
```

**Parameters:**

- `p_331583_` (`Level`)
- `p_40863_` (`LivingEntity`)
- `p_40864_` (`ItemStack`)
- `p_40865_` (`ItemStack`)
- `p_40866_` (`boolean`)

**Returns:** `Projectile`

### getDurabilityUse

```java
protected int getDurabilityUse(ItemStack p_331489_)
```

**Parameters:**

- `p_331489_` (`ItemStack`)

**Returns:** `int`

### performShooting

```java
public void performShooting(Level p_40888_, LivingEntity p_40889_, InteractionHand p_40890_, ItemStack p_40891_, float p_40892_, float p_40893_, LivingEntity p_331602_)
```

**Parameters:**

- `p_40888_` (`Level`)
- `p_40889_` (`LivingEntity`)
- `p_40890_` (`InteractionHand`)
- `p_40891_` (`ItemStack`)
- `p_40892_` (`float`)
- `p_40893_` (`float`)
- `p_331602_` (`LivingEntity`)

**Returns:** `public void`

### getShotPitch

```java
private static float getShotPitch(RandomSource p_331176_, int p_331542_)
```

**Parameters:**

- `p_331176_` (`RandomSource`)
- `p_331542_` (`int`)

**Returns:** `private static float`

### getRandomShotPitch

```java
private static float getRandomShotPitch(boolean p_220026_, RandomSource p_220027_)
```

**Parameters:**

- `p_220026_` (`boolean`)
- `p_220027_` (`RandomSource`)

**Returns:** `private static float`

### onUseTick

```java
public void onUseTick(Level p_40910_, LivingEntity p_40911_, ItemStack p_40912_, int p_40913_)
```

**Parameters:**

- `p_40910_` (`Level`)
- `p_40911_` (`LivingEntity`)
- `p_40912_` (`ItemStack`)
- `p_40913_` (`int`)

### getUseDuration

```java
public int getUseDuration(ItemStack p_40938_, LivingEntity p_344898_)
```

**Parameters:**

- `p_40938_` (`ItemStack`)
- `p_344898_` (`LivingEntity`)

**Returns:** `int`

### getChargeDuration

```java
public static int getChargeDuration(ItemStack p_352255_, LivingEntity p_345687_)
```

**Parameters:**

- `p_352255_` (`ItemStack`)
- `p_345687_` (`LivingEntity`)

**Returns:** `public static int`

### getUseAnimation

```java
public UseAnim getUseAnimation(ItemStack p_40935_)
```

**Parameters:**

- `p_40935_` (`ItemStack`)

**Returns:** `UseAnim`

### getChargingSounds

```java
CrossbowItem.ChargingSounds getChargingSounds(ItemStack p_345050_)
```

**Parameters:**

- `p_345050_` (`ItemStack`)

**Returns:** `CrossbowItem.ChargingSounds`

### getPowerForTime

```java
private static float getPowerForTime(int p_40854_, ItemStack p_40855_, LivingEntity p_344803_)
```

**Parameters:**

- `p_40854_` (`int`)
- `p_40855_` (`ItemStack`)
- `p_344803_` (`LivingEntity`)

**Returns:** `private static float`

### appendHoverText

```java
public void appendHoverText(ItemStack p_40880_, Item.TooltipContext p_339686_, List<Component> p_40882_, TooltipFlag p_40883_)
```

**Parameters:**

- `p_40880_` (`ItemStack`)
- `p_339686_` (`Item.TooltipContext`)
- `p_40882_` (`List<Component>`)
- `p_40883_` (`TooltipFlag`)

### useOnRelease

```java
public boolean useOnRelease(ItemStack p_150801_)
```

**Parameters:**

- `p_150801_` (`ItemStack`)

**Returns:** `boolean`

### getDefaultProjectileRange

```java
public int getDefaultProjectileRange()
```

**Returns:** `int`

### ChargingSounds

```java
public static record ChargingSounds(Optional<Holder<SoundEvent>> start, Optional<Holder<SoundEvent>> mid, Optional<Holder<SoundEvent>> end)
```

**Parameters:**

- `start` (`Optional<Holder<SoundEvent>>`)
- `mid` (`Optional<Holder<SoundEvent>>`)
- `end` (`Optional<Holder<SoundEvent>>`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ChargingSounds` | record |  |
