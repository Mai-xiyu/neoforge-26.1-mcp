# PrimedTnt

**Package:** `net.minecraft.world.entity.item`
**Type:** class
**Extends:** `Entity`
**Implements:** `TraceableEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TAG_FUSE` | `String` |  |

## Methods

### shouldBlockExplode

```java
public boolean shouldBlockExplode(Explosion p_353087_, BlockGetter p_353096_, BlockPos p_353092_, BlockState p_353086_, float p_353094_)
```

**Parameters:**

- `p_353087_` (`Explosion`)
- `p_353096_` (`BlockGetter`)
- `p_353092_` (`BlockPos`)
- `p_353086_` (`BlockState`)
- `p_353094_` (`float`)

**Returns:** `boolean`

### getBlockExplosionResistance

```java
public Optional<Float> getBlockExplosionResistance(Explosion p_353090_, BlockGetter p_353088_, BlockPos p_353091_, BlockState p_353093_, FluidState p_353095_)
```

**Parameters:**

- `p_353090_` (`Explosion`)
- `p_353088_` (`BlockGetter`)
- `p_353091_` (`BlockPos`)
- `p_353093_` (`BlockState`)
- `p_353095_` (`FluidState`)

**Returns:** `Optional<Float>`

### PrimedTnt

```java
public PrimedTnt(EntityType<? extends PrimedTnt> p_32076_, Level p_32077_)
```

**Parameters:**

- `p_32076_` (`EntityType<? extends PrimedTnt>`)
- `p_32077_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### PrimedTnt

```java
public PrimedTnt(Level p_32079_, double p_32080_, double p_32081_, double p_32082_, LivingEntity p_32083_)
```

**Parameters:**

- `p_32079_` (`Level`)
- `p_32080_` (`double`)
- `p_32081_` (`double`)
- `p_32082_` (`double`)
- `p_32083_` (`LivingEntity`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326113_)
```

**Parameters:**

- `p_326113_` (`SynchedEntityData.Builder`)

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### isPickable

```java
public boolean isPickable()
```

**Returns:** `boolean`

### getDefaultGravity

```java
protected double getDefaultGravity()
```

**Returns:** `double`

### tick

```java
public void tick()
```

### explode

```java
protected void explode()
```

**Returns:** `protected void`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_32097_)
```

**Parameters:**

- `p_32097_` (`CompoundTag`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_32091_)
```

**Parameters:**

- `p_32091_` (`CompoundTag`)

### getOwner

```java
public LivingEntity getOwner()
```

**Returns:** `LivingEntity`

### restoreFrom

```java
public void restoreFrom(Entity p_306185_)
```

**Parameters:**

- `p_306185_` (`Entity`)

### setFuse

```java
public void setFuse(int p_32086_)
```

**Parameters:**

- `p_32086_` (`int`)

**Returns:** `public void`

### getFuse

```java
public int getFuse()
```

**Returns:** `public int`

### setBlockState

```java
public void setBlockState(BlockState p_307211_)
```

**Parameters:**

- `p_307211_` (`BlockState`)

**Returns:** `public void`

### getBlockState

```java
public BlockState getBlockState()
```

**Returns:** `public BlockState`

### setUsedPortal

```java
private void setUsedPortal(boolean p_353089_)
```

**Parameters:**

- `p_353089_` (`boolean`)

**Returns:** `private void`

### changeDimension

```java
public Entity changeDimension(DimensionTransition p_353097_)
```

**Parameters:**

- `p_353097_` (`DimensionTransition`)

**Returns:** `Entity`
