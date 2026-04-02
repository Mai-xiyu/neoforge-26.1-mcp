# ClientboundMoveVehiclePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundMoveVehiclePacket>` |  |

## Methods

### ClientboundMoveVehiclePacket

```java
public ClientboundMoveVehiclePacket(Entity p_132584_)
```

**Parameters:**

- `p_132584_` (`Entity`)

**Returns:** `public`

### ClientboundMoveVehiclePacket

```java
private ClientboundMoveVehiclePacket(FriendlyByteBuf p_179007_)
```

**Parameters:**

- `p_179007_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132593_)
```

**Parameters:**

- `p_132593_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundMoveVehiclePacket> type()
```

**Returns:** `PacketType<ClientboundMoveVehiclePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132590_)
```

**Parameters:**

- `p_132590_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getX

```java
public double getX()
```

**Returns:** `public double`

### getY

```java
public double getY()
```

**Returns:** `public double`

### getZ

```java
public double getZ()
```

**Returns:** `public double`

### getYRot

```java
public float getYRot()
```

**Returns:** `public float`

### getXRot

```java
public float getXRot()
```

**Returns:** `public float`
