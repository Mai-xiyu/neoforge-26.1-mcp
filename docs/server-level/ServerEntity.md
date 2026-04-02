# ServerEntity

**Package:** `net.minecraft.server.level`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FORCED_POS_UPDATE_PERIOD` | `int` |  |

## Methods

### ServerEntity

```java
public ServerEntity(ServerLevel p_8528_, Entity p_8529_, int p_8530_, boolean p_8531_, Consumer<Packet<?>> p_8532_)
```

**Parameters:**

- `p_8528_` (`ServerLevel`)
- `p_8529_` (`Entity`)
- `p_8530_` (`int`)
- `p_8531_` (`boolean`)
- `p_8532_` (`Consumer<Packet<?>>`)

**Returns:** `public`

### sendChanges

```java
public void sendChanges()
```

**Returns:** `public void`

### removedPassengers

```java
private static Stream<Entity> removedPassengers(List<Entity> p_277592_, List<Entity> p_277658_)
```

**Parameters:**

- `p_277592_` (`List<Entity>`)
- `p_277658_` (`List<Entity>`)

**Returns:** `private static Stream<Entity>`

### removePairing

```java
public void removePairing(ServerPlayer p_8535_)
```

**Parameters:**

- `p_8535_` (`ServerPlayer`)

**Returns:** `public void`

### addPairing

```java
public void addPairing(ServerPlayer p_8542_)
```

**Parameters:**

- `p_8542_` (`ServerPlayer`)

**Returns:** `public void`

### sendPairingData

```java
public void sendPairingData(ServerPlayer p_289562_, net.neoforged.neoforge.network.bundle.PacketAndPayloadAcceptor<net.minecraft.network.protocol.game.ClientGamePacketListener> p_289563_)
```

**Parameters:**

- `p_289562_` (`ServerPlayer`)
- `p_289563_` (`net.neoforged.neoforge.network.bundle.PacketAndPayloadAcceptor<net.minecraft.network.protocol.game.ClientGamePacketListener>`)

**Returns:** `public void`

### getPositionBase

```java
public Vec3 getPositionBase()
```

**Returns:** `public Vec3`

### getLastSentMovement

```java
public Vec3 getLastSentMovement()
```

**Returns:** `public Vec3`

### getLastSentXRot

```java
public float getLastSentXRot()
```

**Returns:** `public float`

### getLastSentYRot

```java
public float getLastSentYRot()
```

**Returns:** `public float`

### getLastSentYHeadRot

```java
public float getLastSentYHeadRot()
```

**Returns:** `public float`

### sendDirtyEntityData

```java
private void sendDirtyEntityData()
```

**Returns:** `private void`

### broadcastAndSend

```java
private void broadcastAndSend(Packet<?> p_8539_)
```

**Parameters:**

- `p_8539_` (`Packet<?>`)

**Returns:** `private void`
