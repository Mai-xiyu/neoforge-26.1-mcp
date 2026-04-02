# EndCrystal

**Package:** `net.minecraft.world.entity.boss.enderdragon`
**Type:** class
**Extends:** `Entity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `time` | `int` |  |

## Methods

### EndCrystal

```java
public EndCrystal(EntityType<? extends EndCrystal> p_31037_, Level p_31038_)
```

**Parameters:**

- `p_31037_` (`EntityType<? extends EndCrystal>`)
- `p_31038_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### EndCrystal

```java
public EndCrystal(Level p_31040_, double p_31041_, double p_31042_, double p_31043_)
```

**Parameters:**

- `p_31040_` (`Level`)
- `p_31041_` (`double`)
- `p_31042_` (`double`)
- `p_31043_` (`double`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_325991_)
```

**Parameters:**

- `p_325991_` (`SynchedEntityData.Builder`)

### tick

```java
public void tick()
```

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_31062_)
```

**Parameters:**

- `p_31062_` (`CompoundTag`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_31055_)
```

**Parameters:**

- `p_31055_` (`CompoundTag`)

### isPickable

```java
public boolean isPickable()
```

**Returns:** `boolean`

### hurt

```java
public boolean hurt(DamageSource p_31050_, float p_31051_)
```

**Parameters:**

- `p_31050_` (`DamageSource`)
- `p_31051_` (`float`)

**Returns:** `boolean`

### kill

```java
public void kill()
```

### onDestroyedBy

```java
private void onDestroyedBy(DamageSource p_31048_)
```

**Parameters:**

- `p_31048_` (`DamageSource`)

**Returns:** `private void`

### setBeamTarget

```java
public void setBeamTarget(BlockPos p_31053_)
```

**Parameters:**

- `p_31053_` (`BlockPos`)

**Returns:** `public void`

### getBeamTarget

```java
public BlockPos getBeamTarget()
```

**Returns:** `BlockPos`

### setShowBottom

```java
public void setShowBottom(boolean p_31057_)
```

**Parameters:**

- `p_31057_` (`boolean`)

**Returns:** `public void`

### showsBottom

```java
public boolean showsBottom()
```

**Returns:** `public boolean`

### shouldRenderAtSqrDistance

```java
public boolean shouldRenderAtSqrDistance(double p_31046_)
```

**Parameters:**

- `p_31046_` (`double`)

**Returns:** `boolean`

### getPickResult

```java
public ItemStack getPickResult()
```

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`
