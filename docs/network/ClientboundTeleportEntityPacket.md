# ClientboundTeleportEntityPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundTeleportEntityPacket>` |  |

## Methods

### ClientboundTeleportEntityPacket

```java
public ClientboundTeleportEntityPacket(Entity p_133538_)
```

**Parameters:**

- `p_133538_` (`Entity`)

**Returns:** `public`

### ClientboundTeleportEntityPacket

```java
private ClientboundTeleportEntityPacket(FriendlyByteBuf p_179437_)
```

**Parameters:**

- `p_179437_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133547_)
```

**Parameters:**

- `p_133547_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundTeleportEntityPacket> type()
```

**Returns:** `PacketType<ClientboundTeleportEntityPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133544_)
```

**Parameters:**

- `p_133544_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`

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

### getyRot

```java
public byte getyRot()
```

**Returns:** `public byte`

### getxRot

```java
public byte getxRot()
```

**Returns:** `public byte`

### isOnGround

```java
public boolean isOnGround()
```

**Returns:** `public boolean`
