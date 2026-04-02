# LightningBolt

**Package:** `net.minecraft.world.entity`
**Type:** class
**Extends:** `Entity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `seed` | `long` |  |

## Methods

### LightningBolt

```java
public LightningBolt(EntityType<? extends LightningBolt> p_20865_, Level p_20866_)
```

**Parameters:**

- `p_20865_` (`EntityType<? extends LightningBolt>`)
- `p_20866_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setVisualOnly

```java
public void setVisualOnly(boolean p_20875_)
```

**Parameters:**

- `p_20875_` (`boolean`)

**Returns:** `public void`

### getSoundSource

```java
public SoundSource getSoundSource()
```

**Returns:** `SoundSource`

### getCause

```java
public ServerPlayer getCause()
```

**Returns:** `ServerPlayer`

### setCause

```java
public void setCause(ServerPlayer p_20880_)
```

**Parameters:**

- `p_20880_` (`ServerPlayer`)

**Returns:** `public void`

### powerLightningRod

```java
private void powerLightningRod()
```

**Returns:** `private void`

### setDamage

```java
public void setDamage(float damage)
```

**Parameters:**

- `damage` (`float`)

**Returns:** `public void`

### getDamage

```java
public float getDamage()
```

**Returns:** `public float`

### tick

```java
public void tick()
```

### getStrikePosition

```java
private BlockPos getStrikePosition()
```

**Returns:** `private BlockPos`

### spawnFire

```java
private void spawnFire(int p_20871_)
```

**Parameters:**

- `p_20871_` (`int`)

**Returns:** `private void`

### clearCopperOnLightningStrike

```java
private static void clearCopperOnLightningStrike(Level p_147151_, BlockPos p_147152_)
```

**Parameters:**

- `p_147151_` (`Level`)
- `p_147152_` (`BlockPos`)

**Returns:** `private static void`

### randomWalkCleaningCopper

```java
 randomWalkCleaningCopper()
```

**Returns:** ``

### randomWalkCleaningCopper

```java
private static void randomWalkCleaningCopper(Level p_147146_, BlockPos p_147147_, BlockPos.MutableBlockPos p_147148_, int p_147149_)
```

**Parameters:**

- `p_147146_` (`Level`)
- `p_147147_` (`BlockPos`)
- `p_147148_` (`BlockPos.MutableBlockPos`)
- `p_147149_` (`int`)

**Returns:** `private static void`

### randomStepCleaningCopper

```java
private static Optional<BlockPos> randomStepCleaningCopper(Level p_147154_, BlockPos p_147155_)
```

**Parameters:**

- `p_147154_` (`Level`)
- `p_147155_` (`BlockPos`)

**Returns:** `private static Optional<BlockPos>`

### shouldRenderAtSqrDistance

```java
public boolean shouldRenderAtSqrDistance(double p_20869_)
```

**Parameters:**

- `p_20869_` (`double`)

**Returns:** `boolean`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_325966_)
```

**Parameters:**

- `p_325966_` (`SynchedEntityData.Builder`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_20873_)
```

**Parameters:**

- `p_20873_` (`CompoundTag`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_20877_)
```

**Parameters:**

- `p_20877_` (`CompoundTag`)

### getBlocksSetOnFire

```java
public int getBlocksSetOnFire()
```

**Returns:** `public int`

### getHitEntities

```java
public Stream<Entity> getHitEntities()
```

**Returns:** `public Stream<Entity>`
