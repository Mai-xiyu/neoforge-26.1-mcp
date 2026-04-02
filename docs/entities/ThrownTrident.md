# ThrownTrident

**Package:** `net.minecraft.world.entity.projectile`
**Type:** class
**Extends:** `AbstractArrow`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `clientSideReturnTridentTickCount` | `int` |  |

## Methods

### ThrownTrident

```java
public ThrownTrident(EntityType<? extends ThrownTrident> p_37561_, Level p_37562_)
```

**Parameters:**

- `p_37561_` (`EntityType<? extends ThrownTrident>`)
- `p_37562_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ThrownTrident

```java
public ThrownTrident(Level p_37569_, LivingEntity p_37570_, ItemStack p_37571_)
```

**Parameters:**

- `p_37569_` (`Level`)
- `p_37570_` (`LivingEntity`)
- `p_37571_` (`ItemStack`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ThrownTrident

```java
public ThrownTrident(Level p_338686_, double p_338771_, double p_338674_, double p_338477_, ItemStack p_338255_)
```

**Parameters:**

- `p_338686_` (`Level`)
- `p_338771_` (`double`)
- `p_338674_` (`double`)
- `p_338477_` (`double`)
- `p_338255_` (`ItemStack`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326249_)
```

**Parameters:**

- `p_326249_` (`SynchedEntityData.Builder`)

### tick

```java
public void tick()
```

### isAcceptibleReturnOwner

```java
private boolean isAcceptibleReturnOwner()
```

**Returns:** `private boolean`

### isFoil

```java
public boolean isFoil()
```

**Returns:** `public boolean`

### findHitEntity

```java
protected EntityHitResult findHitEntity(Vec3 p_37575_, Vec3 p_37576_)
```

**Parameters:**

- `p_37575_` (`Vec3`)
- `p_37576_` (`Vec3`)

**Returns:** `EntityHitResult`

### onHitEntity

```java
protected void onHitEntity(EntityHitResult p_37573_)
```

**Parameters:**

- `p_37573_` (`EntityHitResult`)

### hitBlockEnchantmentEffects

```java
protected void hitBlockEnchantmentEffects(ServerLevel p_344953_, BlockHitResult p_346320_, ItemStack p_344999_)
```

**Parameters:**

- `p_344953_` (`ServerLevel`)
- `p_346320_` (`BlockHitResult`)
- `p_344999_` (`ItemStack`)

### getWeaponItem

```java
public ItemStack getWeaponItem()
```

**Returns:** `ItemStack`

### tryPickup

```java
protected boolean tryPickup(Player p_150196_)
```

**Parameters:**

- `p_150196_` (`Player`)

**Returns:** `boolean`

### getDefaultPickupItem

```java
protected ItemStack getDefaultPickupItem()
```

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### getDefaultHitGroundSoundEvent

```java
protected SoundEvent getDefaultHitGroundSoundEvent()
```

**Returns:** `SoundEvent`

### playerTouch

```java
public void playerTouch(Player p_37580_)
```

**Parameters:**

- `p_37580_` (`Player`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_37578_)
```

**Parameters:**

- `p_37578_` (`CompoundTag`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_37582_)
```

**Parameters:**

- `p_37582_` (`CompoundTag`)

### getLoyaltyFromItem

```java
private byte getLoyaltyFromItem(ItemStack p_345571_)
```

**Parameters:**

- `p_345571_` (`ItemStack`)

**Returns:** `private byte`

### tickDespawn

```java
public void tickDespawn()
```

### getWaterInertia

```java
protected float getWaterInertia()
```

**Returns:** `float`

### shouldRender

```java
public boolean shouldRender(double p_37588_, double p_37589_, double p_37590_)
```

**Parameters:**

- `p_37588_` (`double`)
- `p_37589_` (`double`)
- `p_37590_` (`double`)

**Returns:** `boolean`
