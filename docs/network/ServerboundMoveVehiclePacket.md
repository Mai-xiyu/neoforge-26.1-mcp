# ServerboundMoveVehiclePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundMoveVehiclePacket>` |  |

## Methods

### ServerboundMoveVehiclePacket

```java
public ServerboundMoveVehiclePacket(Entity p_134192_)
```

**Parameters:**

- `p_134192_` (`Entity`)

**Returns:** `public`

### ServerboundMoveVehiclePacket

```java
private ServerboundMoveVehiclePacket(FriendlyByteBuf p_179700_)
```

**Parameters:**

- `p_179700_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134201_)
```

**Parameters:**

- `p_134201_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundMoveVehiclePacket> type()
```

**Returns:** `PacketType<ServerboundMoveVehiclePacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134198_)
```

**Parameters:**

- `p_134198_` (`ServerGamePacketListener`)

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
