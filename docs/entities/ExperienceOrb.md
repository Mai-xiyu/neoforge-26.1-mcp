# ExperienceOrb

**Package:** `net.minecraft.world.entity`
**Type:** class
**Extends:** `Entity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `value` | `int` |  |

## Methods

### ExperienceOrb

```java
public ExperienceOrb(Level p_20776_, double p_20777_, double p_20778_, double p_20779_, int p_20780_)
```

**Parameters:**

- `p_20776_` (`Level`)
- `p_20777_` (`double`)
- `p_20778_` (`double`)
- `p_20779_` (`double`)
- `p_20780_` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ExperienceOrb

```java
public ExperienceOrb(EntityType<? extends ExperienceOrb> p_20773_, Level p_20774_)
```

**Parameters:**

- `p_20773_` (`EntityType<? extends ExperienceOrb>`)
- `p_20774_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_325930_)
```

**Parameters:**

- `p_325930_` (`SynchedEntityData.Builder`)

### getDefaultGravity

```java
protected double getDefaultGravity()
```

**Returns:** `double`

### tick

```java
public void tick()
```

### getBlockPosBelowThatAffectsMyMovement

```java
public BlockPos getBlockPosBelowThatAffectsMyMovement()
```

**Returns:** `BlockPos`

### scanForEntities

```java
private void scanForEntities()
```

**Returns:** `private void`

### award

```java
public static void award(ServerLevel p_147083_, Vec3 p_147084_, int p_147085_)
```

**Parameters:**

- `p_147083_` (`ServerLevel`)
- `p_147084_` (`Vec3`)
- `p_147085_` (`int`)

**Returns:** `public static void`

### tryMergeToExisting

```java
private static boolean tryMergeToExisting(ServerLevel p_147097_, Vec3 p_147098_, int p_147099_)
```

**Parameters:**

- `p_147097_` (`ServerLevel`)
- `p_147098_` (`Vec3`)
- `p_147099_` (`int`)

**Returns:** `private static boolean`

### canMerge

```java
private boolean canMerge(ExperienceOrb p_147087_)
```

**Parameters:**

- `p_147087_` (`ExperienceOrb`)

**Returns:** `private boolean`

### canMerge

```java
private static boolean canMerge(ExperienceOrb p_147089_, int p_147090_, int p_147091_)
```

**Parameters:**

- `p_147089_` (`ExperienceOrb`)
- `p_147090_` (`int`)
- `p_147091_` (`int`)

**Returns:** `private static boolean`

### merge

```java
private void merge(ExperienceOrb p_147101_)
```

**Parameters:**

- `p_147101_` (`ExperienceOrb`)

**Returns:** `private void`

### setUnderwaterMovement

```java
private void setUnderwaterMovement()
```

**Returns:** `private void`

### doWaterSplashEffect

```java
protected void doWaterSplashEffect()
```

### hurt

```java
public boolean hurt(DamageSource p_20785_, float p_20786_)
```

**Parameters:**

- `p_20785_` (`DamageSource`)
- `p_20786_` (`float`)

**Returns:** `boolean`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_20796_)
```

**Parameters:**

- `p_20796_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_20788_)
```

**Parameters:**

- `p_20788_` (`CompoundTag`)

### playerTouch

```java
public void playerTouch(Player p_20792_)
```

**Parameters:**

- `p_20792_` (`Player`)

### repairPlayerItems

```java
private int repairPlayerItems(ServerPlayer p_344821_, int p_147094_)
```

**Parameters:**

- `p_344821_` (`ServerPlayer`)
- `p_147094_` (`int`)

**Returns:** `private int`

### getValue

```java
public int getValue()
```

**Returns:** `public int`

### getIcon

```java
public int getIcon()
```

**Returns:** `public int`

### getExperienceValue

```java
public static int getExperienceValue(int p_20783_)
```

**Parameters:**

- `p_20783_` (`int`)

**Returns:** `public static int`

### isAttackable

```java
public boolean isAttackable()
```

**Returns:** `boolean`

### getAddEntityPacket

```java
public Packet<ClientGamePacketListener> getAddEntityPacket(ServerEntity p_352351_)
```

**Parameters:**

- `p_352351_` (`ServerEntity`)

**Returns:** `Packet<ClientGamePacketListener>`

### ClientboundAddExperienceOrbPacket

```java
return new ClientboundAddExperienceOrbPacket()
```

**Returns:** `return new`

### getSoundSource

```java
public SoundSource getSoundSource()
```

**Returns:** `SoundSource`
