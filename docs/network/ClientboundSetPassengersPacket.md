# ClientboundSetPassengersPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetPassengersPacket>` |  |

## Methods

### ClientboundSetPassengersPacket

```java
public ClientboundSetPassengersPacket(Entity p_133276_)
```

**Parameters:**

- `p_133276_` (`Entity`)

**Returns:** `public`

### ClientboundSetPassengersPacket

```java
private ClientboundSetPassengersPacket(FriendlyByteBuf p_179308_)
```

**Parameters:**

- `p_179308_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133285_)
```

**Parameters:**

- `p_133285_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetPassengersPacket> type()
```

**Returns:** `PacketType<ClientboundSetPassengersPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133282_)
```

**Parameters:**

- `p_133282_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getPassengers

```java
public int[] getPassengers()
```

**Returns:** `public int[]`

### getVehicle

```java
public int getVehicle()
```

**Returns:** `public int`
