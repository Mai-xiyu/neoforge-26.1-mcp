# WitherBoss

**Package:** `net.minecraft.world.entity.boss.wither`
**Type:** class
**Extends:** `Monster`
**Implements:** `PowerableMob`, `RangedAttackMob`

## Methods

### WitherBoss

```java
public WitherBoss(EntityType<? extends WitherBoss> p_31437_, Level p_31438_)
```

**Parameters:**

- `p_31437_` (`EntityType<? extends WitherBoss>`)
- `p_31438_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createNavigation

```java
protected PathNavigation createNavigation(Level p_186262_)
```

**Parameters:**

- `p_186262_` (`Level`)

**Returns:** `PathNavigation`

### registerGoals

```java
protected void registerGoals()
```

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326207_)
```

**Parameters:**

- `p_326207_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_31485_)
```

**Parameters:**

- `p_31485_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_31474_)
```

**Parameters:**

- `p_31474_` (`CompoundTag`)

### setCustomName

```java
public void setCustomName(Component p_31476_)
```

**Parameters:**

- `p_31476_` (`Component`)

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_31500_)
```

**Parameters:**

- `p_31500_` (`DamageSource`)

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### aiStep

```java
public void aiStep()
```

### customServerAiStep

```java
protected void customServerAiStep()
```

### canDestroy

```java
public static boolean canDestroy(BlockState p_31492_)
```

**Parameters:**

- `p_31492_` (`BlockState`)

**Returns:** `boolean`

### makeInvulnerable

```java
public void makeInvulnerable()
```

**Returns:** `public void`

### makeStuckInBlock

```java
public void makeStuckInBlock(BlockState p_31471_, Vec3 p_31472_)
```

**Parameters:**

- `p_31471_` (`BlockState`)
- `p_31472_` (`Vec3`)

### startSeenByPlayer

```java
public void startSeenByPlayer(ServerPlayer p_31483_)
```

**Parameters:**

- `p_31483_` (`ServerPlayer`)

### stopSeenByPlayer

```java
public void stopSeenByPlayer(ServerPlayer p_31488_)
```

**Parameters:**

- `p_31488_` (`ServerPlayer`)

### getHeadX

```java
private double getHeadX(int p_31515_)
```

**Parameters:**

- `p_31515_` (`int`)

**Returns:** `private double`

### getHeadY

```java
private double getHeadY(int p_31517_)
```

**Parameters:**

- `p_31517_` (`int`)

**Returns:** `private double`

### getHeadZ

```java
private double getHeadZ(int p_31519_)
```

**Parameters:**

- `p_31519_` (`int`)

**Returns:** `private double`

### rotlerp

```java
private float rotlerp(float p_31443_, float p_31444_, float p_31445_)
```

**Parameters:**

- `p_31443_` (`float`)
- `p_31444_` (`float`)
- `p_31445_` (`float`)

**Returns:** `private float`

### performRangedAttack

```java
private void performRangedAttack(int p_31458_, LivingEntity p_31459_)
```

**Parameters:**

- `p_31458_` (`int`)
- `p_31459_` (`LivingEntity`)

**Returns:** `private void`

### performRangedAttack

```java
private void performRangedAttack(int p_31449_, double p_31450_, double p_31451_, double p_31452_, boolean p_31453_)
```

**Parameters:**

- `p_31449_` (`int`)
- `p_31450_` (`double`)
- `p_31451_` (`double`)
- `p_31452_` (`double`)
- `p_31453_` (`boolean`)

**Returns:** `private void`

### performRangedAttack

```java
public void performRangedAttack(LivingEntity p_31468_, float p_31469_)
```

**Parameters:**

- `p_31468_` (`LivingEntity`)
- `p_31469_` (`float`)

### hurt

```java
public boolean hurt(DamageSource p_31461_, float p_31462_)
```

**Parameters:**

- `p_31461_` (`DamageSource`)
- `p_31462_` (`float`)

**Returns:** `boolean`

### dropCustomDeathLoot

```java
protected void dropCustomDeathLoot(ServerLevel p_348644_, DamageSource p_31464_, boolean p_31466_)
```

**Parameters:**

- `p_348644_` (`ServerLevel`)
- `p_31464_` (`DamageSource`)
- `p_31466_` (`boolean`)

### checkDespawn

```java
public void checkDespawn()
```

### addEffect

```java
public boolean addEffect(MobEffectInstance p_182397_, Entity p_182398_)
```

**Parameters:**

- `p_182397_` (`MobEffectInstance`)
- `p_182398_` (`Entity`)

**Returns:** `boolean`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### getHeadYRot

```java
public float getHeadYRot(int p_31447_)
```

**Parameters:**

- `p_31447_` (`int`)

**Returns:** `public float`

### getHeadXRot

```java
public float getHeadXRot(int p_31481_)
```

**Parameters:**

- `p_31481_` (`int`)

**Returns:** `public float`

### getInvulnerableTicks

```java
public int getInvulnerableTicks()
```

**Returns:** `public int`

### setInvulnerableTicks

```java
public void setInvulnerableTicks(int p_31511_)
```

**Parameters:**

- `p_31511_` (`int`)

**Returns:** `public void`

### getAlternativeTarget

```java
public int getAlternativeTarget(int p_31513_)
```

**Parameters:**

- `p_31513_` (`int`)

**Returns:** `public int`

### setAlternativeTarget

```java
public void setAlternativeTarget(int p_31455_, int p_31456_)
```

**Parameters:**

- `p_31455_` (`int`)
- `p_31456_` (`int`)

**Returns:** `public void`

### isPowered

```java
public boolean isPowered()
```

**Returns:** `boolean`

### canRide

```java
protected boolean canRide(Entity p_31508_)
```

**Parameters:**

- `p_31508_` (`Entity`)

**Returns:** `boolean`

### canUsePortal

```java
public boolean canUsePortal(boolean p_352936_)
```

**Parameters:**

- `p_352936_` (`boolean`)

**Returns:** `boolean`

### canBeAffected

```java
public boolean canBeAffected(MobEffectInstance p_31495_)
```

**Parameters:**

- `p_31495_` (`MobEffectInstance`)

**Returns:** `boolean`

### WitherDoNothingGoal

```java
public WitherDoNothingGoal()
```

**Returns:** `public`

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`
