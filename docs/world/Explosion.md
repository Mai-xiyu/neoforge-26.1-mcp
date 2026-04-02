# Explosion

**Package:** `net.minecraft.world.level`
**Type:** class

## Methods

### getDefaultDamageSource

```java
public static DamageSource getDefaultDamageSource(Level p_312716_, Entity p_312608_)
```

**Parameters:**

- `p_312716_` (`Level`)
- `p_312608_` (`Entity`)

**Returns:** `public static DamageSource`

### Explosion

```java
public Explosion(Level p_46051_, Entity p_46052_, double p_46055_, double p_46056_, double p_46057_, float p_46058_, List<BlockPos> p_312600_, Explosion.BlockInteraction p_46060_, ParticleOptions p_312560_, ParticleOptions p_312844_, Holder<SoundEvent> p_320054_)
```

**Parameters:**

- `p_46051_` (`Level`)
- `p_46052_` (`Entity`)
- `p_46055_` (`double`)
- `p_46056_` (`double`)
- `p_46057_` (`double`)
- `p_46058_` (`float`)
- `p_312600_` (`List<BlockPos>`)
- `p_46060_` (`Explosion.BlockInteraction`)
- `p_312560_` (`ParticleOptions`)
- `p_312844_` (`ParticleOptions`)
- `p_320054_` (`Holder<SoundEvent>`)

**Returns:** `public`

### Explosion

```java
public Explosion(Level p_46041_, Entity p_46042_, double p_46043_, double p_46044_, double p_46045_, float p_46046_, boolean p_46047_, Explosion.BlockInteraction p_46048_, List<BlockPos> p_46049_)
```

**Parameters:**

- `p_46041_` (`Level`)
- `p_46042_` (`Entity`)
- `p_46043_` (`double`)
- `p_46044_` (`double`)
- `p_46045_` (`double`)
- `p_46046_` (`float`)
- `p_46047_` (`boolean`)
- `p_46048_` (`Explosion.BlockInteraction`)
- `p_46049_` (`List<BlockPos>`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### Explosion

```java
public Explosion(Level p_46032_, Entity p_46033_, double p_46034_, double p_46035_, double p_46036_, float p_46037_, boolean p_46038_, Explosion.BlockInteraction p_46039_)
```

**Parameters:**

- `p_46032_` (`Level`)
- `p_46033_` (`Entity`)
- `p_46034_` (`double`)
- `p_46035_` (`double`)
- `p_46036_` (`double`)
- `p_46037_` (`float`)
- `p_46038_` (`boolean`)
- `p_46039_` (`Explosion.BlockInteraction`)

**Returns:** `public`

### Explosion

```java
public Explosion(Level p_46024_, Entity p_46025_, DamageSource p_312268_, ExplosionDamageCalculator p_312205_, double p_46026_, double p_46027_, double p_46028_, float p_46029_, boolean p_312333_, Explosion.BlockInteraction p_312294_, ParticleOptions p_312158_, ParticleOptions p_311904_, Holder<SoundEvent> p_320270_)
```

**Parameters:**

- `p_46024_` (`Level`)
- `p_46025_` (`Entity`)
- `p_312268_` (`DamageSource`)
- `p_312205_` (`ExplosionDamageCalculator`)
- `p_46026_` (`double`)
- `p_46027_` (`double`)
- `p_46028_` (`double`)
- `p_46029_` (`float`)
- `p_312333_` (`boolean`)
- `p_312294_` (`Explosion.BlockInteraction`)
- `p_312158_` (`ParticleOptions`)
- `p_311904_` (`ParticleOptions`)
- `p_320270_` (`Holder<SoundEvent>`)

**Returns:** `public`

### makeDamageCalculator

```java
private ExplosionDamageCalculator makeDamageCalculator(Entity p_46063_)
```

**Parameters:**

- `p_46063_` (`Entity`)

**Returns:** `private ExplosionDamageCalculator`

### getSeenPercent

```java
public static float getSeenPercent(Vec3 p_46065_, Entity p_46066_)
```

**Parameters:**

- `p_46065_` (`Vec3`)
- `p_46066_` (`Entity`)

**Returns:** `public static float`

### radius

```java
public float radius()
```

**Returns:** `public float`

### center

```java
public Vec3 center()
```

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### explode

```java
public void explode()
```

**Returns:** `public void`

### finalizeExplosion

```java
public void finalizeExplosion(boolean p_46076_)
```

**Parameters:**

- `p_46076_` (`boolean`)

**Returns:** `public void`

### addOrAppendStack

```java
private static void addOrAppendStack(List<Pair<ItemStack, BlockPos>> p_312455_, ItemStack p_312913_, BlockPos p_312738_)
```

**Parameters:**

- `p_312455_` (`List<Pair<ItemStack, BlockPos>>`)
- `p_312913_` (`ItemStack`)
- `p_312738_` (`BlockPos`)

**Returns:** `private static void`

### interactsWithBlocks

```java
public boolean interactsWithBlocks()
```

**Returns:** `public boolean`

### getHitPlayers

```java
public Map<Player, Vec3> getHitPlayers()
```

**Returns:** `public Map<Player, Vec3>`

### getIndirectSourceEntity

```java
public LivingEntity getIndirectSourceEntity()
```

**Returns:** `LivingEntity`

### getIndirectSourceEntityInternal

```java
return getIndirectSourceEntityInternal()
```

**Returns:** `return`

### getDirectSourceEntity

```java
public Entity getDirectSourceEntity()
```

**Returns:** `Entity`

### clearToBlow

```java
public void clearToBlow()
```

**Returns:** `public void`

### getToBlow

```java
public List<BlockPos> getToBlow()
```

**Returns:** `public List<BlockPos>`

### getBlockInteraction

```java
public Explosion.BlockInteraction getBlockInteraction()
```

**Returns:** `public Explosion.BlockInteraction`

### getSmallExplosionParticles

```java
public ParticleOptions getSmallExplosionParticles()
```

**Returns:** `public ParticleOptions`

### getLargeExplosionParticles

```java
public ParticleOptions getLargeExplosionParticles()
```

**Returns:** `public ParticleOptions`

### getExplosionSound

```java
public Holder<SoundEvent> getExplosionSound()
```

**Returns:** `public Holder<SoundEvent>`

### canTriggerBlocks

```java
public boolean canTriggerBlocks()
```

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BlockInteraction` | enum |  |
