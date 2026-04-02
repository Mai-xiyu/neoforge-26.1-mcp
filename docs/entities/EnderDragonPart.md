# EnderDragonPart

**Package:** `net.minecraft.world.entity.boss`
**Type:** class
**Extends:** `net.neoforged.neoforge.entity.PartEntity<EnderDragon>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `parentMob` | `EnderDragon` |  |
| `name` | `String` |  |

## Methods

### EnderDragonPart

```java
public EnderDragonPart(EnderDragon p_31014_, String p_31015_, float p_31016_, float p_31017_)
```

**Parameters:**

- `p_31014_` (`EnderDragon`)
- `p_31015_` (`String`)
- `p_31016_` (`float`)
- `p_31017_` (`float`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_325943_)
```

**Parameters:**

- `p_325943_` (`SynchedEntityData.Builder`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_31025_)
```

**Parameters:**

- `p_31025_` (`CompoundTag`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_31028_)
```

**Parameters:**

- `p_31028_` (`CompoundTag`)

### isPickable

```java
public boolean isPickable()
```

**Returns:** `boolean`

### getPickResult

```java
public ItemStack getPickResult()
```

**Returns:** `ItemStack`

### hurt

```java
public boolean hurt(DamageSource p_31020_, float p_31021_)
```

**Parameters:**

- `p_31020_` (`DamageSource`)
- `p_31021_` (`float`)

**Returns:** `boolean`

### is

```java
public boolean is(Entity p_31031_)
```

**Parameters:**

- `p_31031_` (`Entity`)

**Returns:** `boolean`

### getAddEntityPacket

```java
public Packet<ClientGamePacketListener> getAddEntityPacket(ServerEntity p_352320_)
```

**Parameters:**

- `p_352320_` (`ServerEntity`)

**Returns:** `Packet<ClientGamePacketListener>`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### getDimensions

```java
public EntityDimensions getDimensions(Pose p_31023_)
```

**Parameters:**

- `p_31023_` (`Pose`)

**Returns:** `EntityDimensions`

### shouldBeSaved

```java
public boolean shouldBeSaved()
```

**Returns:** `boolean`
