# LeashFenceKnotEntity

**Package:** `net.minecraft.world.entity.decoration`
**Type:** class
**Extends:** `BlockAttachedEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `OFFSET_Y` | `double` |  |

## Methods

### LeashFenceKnotEntity

```java
public LeashFenceKnotEntity(EntityType<? extends LeashFenceKnotEntity> p_31828_, Level p_31829_)
```

**Parameters:**

- `p_31828_` (`EntityType<? extends LeashFenceKnotEntity>`)
- `p_31829_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### LeashFenceKnotEntity

```java
public LeashFenceKnotEntity(Level p_31831_, BlockPos p_31832_)
```

**Parameters:**

- `p_31831_` (`Level`)
- `p_31832_` (`BlockPos`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_344730_)
```

**Parameters:**

- `p_344730_` (`SynchedEntityData.Builder`)

### recalculateBoundingBox

```java
protected void recalculateBoundingBox()
```

### shouldRenderAtSqrDistance

```java
public boolean shouldRenderAtSqrDistance(double p_31835_)
```

**Parameters:**

- `p_31835_` (`double`)

**Returns:** `boolean`

### dropItem

```java
public void dropItem(Entity p_31837_)
```

**Parameters:**

- `p_31837_` (`Entity`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_31852_)
```

**Parameters:**

- `p_31852_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_31850_)
```

**Parameters:**

- `p_31850_` (`CompoundTag`)

### interact

```java
public InteractionResult interact(Player p_31842_, InteractionHand p_31843_)
```

**Parameters:**

- `p_31842_` (`Player`)
- `p_31843_` (`InteractionHand`)

**Returns:** `InteractionResult`

### survives

```java
public boolean survives()
```

**Returns:** `boolean`

### getOrCreateKnot

```java
public static LeashFenceKnotEntity getOrCreateKnot(Level p_31845_, BlockPos p_31846_)
```

**Parameters:**

- `p_31845_` (`Level`)
- `p_31846_` (`BlockPos`)

**Returns:** `public static LeashFenceKnotEntity`

### playPlacementSound

```java
public void playPlacementSound()
```

**Returns:** `public void`

### getAddEntityPacket

```java
public Packet<ClientGamePacketListener> getAddEntityPacket(ServerEntity p_352402_)
```

**Parameters:**

- `p_352402_` (`ServerEntity`)

**Returns:** `Packet<ClientGamePacketListener>`

### getRopeHoldPosition

```java
public Vec3 getRopeHoldPosition(float p_31863_)
```

**Parameters:**

- `p_31863_` (`float`)

**Returns:** `Vec3`

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
