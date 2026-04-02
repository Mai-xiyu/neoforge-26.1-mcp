# EnderDragon

**Package:** `net.minecraft.world.entity.boss.enderdragon`
**Type:** class
**Extends:** `Mob`
**Implements:** `Enemy`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DATA_PHASE` | `EntityDataAccessor<Integer>` |  |
| `positions` | `double[][]` |  |
| `posPointer` | `int` |  |
| `head` | `EnderDragonPart` |  |
| `oFlapTime` | `float` |  |
| `flapTime` | `float` |  |
| `inWall` | `boolean` |  |
| `dragonDeathTime` | `int` |  |
| `yRotA` | `float` |  |

## Methods

### EnderDragon

```java
public EnderDragon(EntityType<? extends EnderDragon> p_31096_, Level p_31097_)
```

**Parameters:**

- `p_31096_` (`EntityType<? extends EnderDragon>`)
- `p_31097_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setId

```java
public void setId(int id)
```

**Parameters:**

- `id` (`int`)

### setDragonFight

```java
public void setDragonFight(EndDragonFight p_287736_)
```

**Parameters:**

- `p_287736_` (`EndDragonFight`)

**Returns:** `public void`

### setFightOrigin

```java
public void setFightOrigin(BlockPos p_287665_)
```

**Parameters:**

- `p_287665_` (`BlockPos`)

**Returns:** `public void`

### getFightOrigin

```java
public BlockPos getFightOrigin()
```

**Returns:** `public BlockPos`

### createAttributes

```java
public static AttributeSupplier.Builder createAttributes()
```

**Returns:** `public static AttributeSupplier.Builder`

### isFlapping

```java
public boolean isFlapping()
```

**Returns:** `boolean`

### onFlap

```java
public void onFlap()
```

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326491_)
```

**Parameters:**

- `p_326491_` (`SynchedEntityData.Builder`)

### getLatencyPos

```java
public double[] getLatencyPos(int p_31102_, float p_31103_)
```

**Parameters:**

- `p_31102_` (`int`)
- `p_31103_` (`float`)

**Returns:** `public double[]`

### aiStep

```java
public void aiStep()
```

### tickPart

```java
private void tickPart(EnderDragonPart p_31116_, double p_31117_, double p_31118_, double p_31119_)
```

**Parameters:**

- `p_31116_` (`EnderDragonPart`)
- `p_31117_` (`double`)
- `p_31118_` (`double`)
- `p_31119_` (`double`)

**Returns:** `private void`

### getHeadYOffset

```java
private float getHeadYOffset()
```

**Returns:** `private float`

### checkCrystals

```java
private void checkCrystals()
```

**Returns:** `private void`

### knockBack

```java
private void knockBack(ServerLevel p_345435_, List<Entity> p_31132_)
```

**Parameters:**

- `p_345435_` (`ServerLevel`)
- `p_31132_` (`List<Entity>`)

**Returns:** `private void`

### hurt

```java
private void hurt(List<Entity> p_31142_)
```

**Parameters:**

- `p_31142_` (`List<Entity>`)

**Returns:** `private void`

### rotWrap

```java
private float rotWrap(double p_31165_)
```

**Parameters:**

- `p_31165_` (`double`)

**Returns:** `private float`

### checkWalls

```java
private boolean checkWalls(AABB p_31140_)
```

**Parameters:**

- `p_31140_` (`AABB`)

**Returns:** `private boolean`

### hurt

```java
public boolean hurt(EnderDragonPart p_31121_, DamageSource p_31122_, float p_31123_)
```

**Parameters:**

- `p_31121_` (`EnderDragonPart`)
- `p_31122_` (`DamageSource`)
- `p_31123_` (`float`)

**Returns:** `public boolean`

### hurt

```java
public boolean hurt(DamageSource p_31113_, float p_31114_)
```

**Parameters:**

- `p_31113_` (`DamageSource`)
- `p_31114_` (`float`)

**Returns:** `boolean`

### reallyHurt

```java
protected boolean reallyHurt(DamageSource p_31162_, float p_31163_)
```

**Parameters:**

- `p_31162_` (`DamageSource`)
- `p_31163_` (`float`)

**Returns:** `protected boolean`

### kill

```java
public void kill()
```

### tickDeath

```java
protected void tickDeath()
```

### findClosestNode

```java
public int findClosestNode()
```

**Returns:** `public int`

### findClosestNode

```java
public int findClosestNode(double p_31171_, double p_31172_, double p_31173_)
```

**Parameters:**

- `p_31171_` (`double`)
- `p_31172_` (`double`)
- `p_31173_` (`double`)

**Returns:** `public int`

### findPath

```java
public Path findPath(int p_31105_, int p_31106_, Node p_31107_)
```

**Parameters:**

- `p_31105_` (`int`)
- `p_31106_` (`int`)
- `p_31107_` (`Node`)

**Returns:** `Path`

### reconstructPath

```java
private Path reconstructPath(Node p_31129_, Node p_31130_)
```

**Parameters:**

- `p_31129_` (`Node`)
- `p_31130_` (`Node`)

**Returns:** `private Path`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_31144_)
```

**Parameters:**

- `p_31144_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_31134_)
```

**Parameters:**

- `p_31134_` (`CompoundTag`)

### checkDespawn

```java
public void checkDespawn()
```

### getSubEntities

```java
public EnderDragonPart[] getSubEntities()
```

**Returns:** `public EnderDragonPart[]`

### isPickable

```java
public boolean isPickable()
```

**Returns:** `boolean`

### getSoundSource

```java
public SoundSource getSoundSource()
```

**Returns:** `SoundSource`

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_31154_)
```

**Parameters:**

- `p_31154_` (`DamageSource`)

**Returns:** `SoundEvent`

### getSoundVolume

```java
protected float getSoundVolume()
```

**Returns:** `float`

### getHeadPartYOffset

```java
public float getHeadPartYOffset(int p_31109_, double[] p_31110_, double[] p_31111_)
```

**Parameters:**

- `p_31109_` (`int`)
- `p_31110_` (`double[]`)
- `p_31111_` (`double[]`)

**Returns:** `public float`

### getHeadLookVector

```java
public Vec3 getHeadLookVector(float p_31175_)
```

**Parameters:**

- `p_31175_` (`float`)

**Returns:** `public Vec3`

### onCrystalDestroyed

```java
public void onCrystalDestroyed(EndCrystal p_31125_, BlockPos p_31126_, DamageSource p_31127_)
```

**Parameters:**

- `p_31125_` (`EndCrystal`)
- `p_31126_` (`BlockPos`)
- `p_31127_` (`DamageSource`)

**Returns:** `public void`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_31136_)
```

**Parameters:**

- `p_31136_` (`EntityDataAccessor<?>`)

### getPhaseManager

```java
public EnderDragonPhaseManager getPhaseManager()
```

**Returns:** `public EnderDragonPhaseManager`

### getDragonFight

```java
public EndDragonFight getDragonFight()
```

**Returns:** `EndDragonFight`

### addEffect

```java
public boolean addEffect(MobEffectInstance p_182394_, Entity p_182395_)
```

**Parameters:**

- `p_182394_` (`MobEffectInstance`)
- `p_182395_` (`Entity`)

**Returns:** `boolean`

### canRide

```java
protected boolean canRide(Entity p_31169_)
```

**Parameters:**

- `p_31169_` (`Entity`)

**Returns:** `boolean`

### canUsePortal

```java
public boolean canUsePortal(boolean p_352948_)
```

**Parameters:**

- `p_352948_` (`boolean`)

**Returns:** `boolean`

### isMultipartEntity

```java
public boolean isMultipartEntity()
```

**Returns:** `boolean`

### getParts

```java
public net.neoforged.neoforge.entity.PartEntity<?>[] getParts()
```

**Returns:** `net.neoforged.neoforge.entity.PartEntity<?>[]`

### recreateFromPacket

```java
public void recreateFromPacket(ClientboundAddEntityPacket p_218825_)
```

**Parameters:**

- `p_218825_` (`ClientboundAddEntityPacket`)

### canAttack

```java
public boolean canAttack(LivingEntity p_149576_)
```

**Parameters:**

- `p_149576_` (`LivingEntity`)

**Returns:** `boolean`

### sanitizeScale

```java
protected float sanitizeScale(float p_341615_)
```

**Parameters:**

- `p_341615_` (`float`)

**Returns:** `float`
