# ClientboundProjectilePowerPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundProjectilePowerPacket>` |  |

## Methods

### ClientboundProjectilePowerPacket

```java
public ClientboundProjectilePowerPacket(int p_339664_, double p_339660_)
```

**Parameters:**

- `p_339664_` (`int`)
- `p_339660_` (`double`)

**Returns:** `public`

### ClientboundProjectilePowerPacket

```java
private ClientboundProjectilePowerPacket(FriendlyByteBuf p_339617_)
```

**Parameters:**

- `p_339617_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_339614_)
```

**Parameters:**

- `p_339614_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundProjectilePowerPacket> type()
```

**Returns:** `PacketType<ClientboundProjectilePowerPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_339610_)
```

**Parameters:**

- `p_339610_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getAccelerationPower

```java
public double getAccelerationPower()
```

**Returns:** `public double`
