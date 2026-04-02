# Marker

**Package:** `net.minecraft.world.entity`
**Type:** class
**Extends:** `Entity`

## Methods

### Marker

```java
public Marker(EntityType<?> p_147250_, Level p_147251_)
```

**Parameters:**

- `p_147250_` (`EntityType<?>`)
- `p_147251_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### tick

```java
public void tick()
```

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326105_)
```

**Parameters:**

- `p_326105_` (`SynchedEntityData.Builder`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_147254_)
```

**Parameters:**

- `p_147254_` (`CompoundTag`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_147257_)
```

**Parameters:**

- `p_147257_` (`CompoundTag`)

### getAddEntityPacket

```java
public Packet<ClientGamePacketListener> getAddEntityPacket(ServerEntity p_352275_)
```

**Parameters:**

- `p_352275_` (`ServerEntity`)

**Returns:** `Packet<ClientGamePacketListener>`

### IllegalStateException

```java
throw new IllegalStateException("Markers should never be sent")
```

**Parameters:**

- `sent"` (`"Markers should never be`)

**Returns:** `throw new`

### canAddPassenger

```java
protected boolean canAddPassenger(Entity p_265289_)
```

**Parameters:**

- `p_265289_` (`Entity`)

**Returns:** `boolean`

### couldAcceptPassenger

```java
protected boolean couldAcceptPassenger()
```

**Returns:** `boolean`

### addPassenger

```java
protected void addPassenger(Entity p_270306_)
```

**Parameters:**

- `p_270306_` (`Entity`)

### getPistonPushReaction

```java
public PushReaction getPistonPushReaction()
```

**Returns:** `PushReaction`

### isIgnoringBlockTriggers

```java
public boolean isIgnoringBlockTriggers()
```

**Returns:** `boolean`
