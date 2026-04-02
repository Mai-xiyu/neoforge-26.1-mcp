# FallingBlockEntity

**Package:** `net.minecraft.world.entity.item`
**Type:** class
**Extends:** `Entity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `time` | `int` |  |
| `dropItem` | `boolean` |  |
| `forceTickAfterTeleportToDuplicate` | `boolean` |  |
| `DATA_START_POS` | `EntityDataAccessor<BlockPos>` |  |

## Methods

### FallingBlockEntity

```java
public FallingBlockEntity(EntityType<? extends FallingBlockEntity> p_31950_, Level p_31951_)
```

**Parameters:**

- `p_31950_` (`EntityType<? extends FallingBlockEntity>`)
- `p_31951_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### FallingBlockEntity

```java
private FallingBlockEntity(Level p_31953_, double p_31954_, double p_31955_, double p_31956_, BlockState p_31957_)
```

**Parameters:**

- `p_31953_` (`Level`)
- `p_31954_` (`double`)
- `p_31955_` (`double`)
- `p_31956_` (`double`)
- `p_31957_` (`BlockState`)

**Returns:** `private`

### this

```java
 this()
```

**Returns:** ``

### fall

```java
public static FallingBlockEntity fall(Level p_201972_, BlockPos p_201973_, BlockState p_201974_)
```

**Parameters:**

- `p_201972_` (`Level`)
- `p_201973_` (`BlockPos`)
- `p_201974_` (`BlockState`)

**Returns:** `public static FallingBlockEntity`

### isAttackable

```java
public boolean isAttackable()
```

**Returns:** `boolean`

### setStartPos

```java
public void setStartPos(BlockPos p_31960_)
```

**Parameters:**

- `p_31960_` (`BlockPos`)

**Returns:** `public void`

### getStartPos

```java
public BlockPos getStartPos()
```

**Returns:** `public BlockPos`

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326465_)
```

**Parameters:**

- `p_326465_` (`SynchedEntityData.Builder`)

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

### callOnBrokenAfterFall

```java
public void callOnBrokenAfterFall(Block p_149651_, BlockPos p_149652_)
```

**Parameters:**

- `p_149651_` (`Block`)
- `p_149652_` (`BlockPos`)

**Returns:** `public void`

### causeFallDamage

```java
public boolean causeFallDamage(float p_149643_, float p_149644_, DamageSource p_149645_)
```

**Parameters:**

- `p_149643_` (`float`)
- `p_149644_` (`float`)
- `p_149645_` (`DamageSource`)

**Returns:** `boolean`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_31973_)
```

**Parameters:**

- `p_31973_` (`CompoundTag`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_31964_)
```

**Parameters:**

- `p_31964_` (`CompoundTag`)

### setHurtsEntities

```java
public void setHurtsEntities(float p_149657_, int p_149658_)
```

**Parameters:**

- `p_149657_` (`float`)
- `p_149658_` (`int`)

**Returns:** `public void`

### disableDrop

```java
public void disableDrop()
```

**Returns:** `public void`

### displayFireAnimation

```java
public boolean displayFireAnimation()
```

**Returns:** `boolean`

### fillCrashReportCategory

```java
public void fillCrashReportCategory(CrashReportCategory p_31962_)
```

**Parameters:**

- `p_31962_` (`CrashReportCategory`)

### getBlockState

```java
public BlockState getBlockState()
```

**Returns:** `public BlockState`

### getTypeName

```java
protected Component getTypeName()
```

**Returns:** `Component`

### onlyOpCanSetNbt

```java
public boolean onlyOpCanSetNbt()
```

**Returns:** `boolean`

### getAddEntityPacket

```java
public Packet<ClientGamePacketListener> getAddEntityPacket(ServerEntity p_352287_)
```

**Parameters:**

- `p_352287_` (`ServerEntity`)

**Returns:** `Packet<ClientGamePacketListener>`

### recreateFromPacket

```java
public void recreateFromPacket(ClientboundAddEntityPacket p_149654_)
```

**Parameters:**

- `p_149654_` (`ClientboundAddEntityPacket`)

### changeDimension

```java
public Entity changeDimension(DimensionTransition p_351015_)
```

**Parameters:**

- `p_351015_` (`DimensionTransition`)

**Returns:** `Entity`
