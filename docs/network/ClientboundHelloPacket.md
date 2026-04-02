# ClientboundHelloPacket

**Package:** `net.minecraft.network.protocol.login`
**Type:** class
**Implements:** `Packet<ClientLoginPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundHelloPacket>` |  |

## Methods

### ClientboundHelloPacket

```java
public ClientboundHelloPacket(String p_134782_, byte[] p_134783_, byte[] p_134784_, boolean p_320681_)
```

**Parameters:**

- `p_134782_` (`String`)
- `p_134783_` (`byte[]`)
- `p_134784_` (`byte[]`)
- `p_320681_` (`boolean`)

**Returns:** `public`

### ClientboundHelloPacket

```java
private ClientboundHelloPacket(FriendlyByteBuf p_179816_)
```

**Parameters:**

- `p_179816_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134793_)
```

**Parameters:**

- `p_134793_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundHelloPacket> type()
```

**Returns:** `PacketType<ClientboundHelloPacket>`

### handle

```java
public void handle(ClientLoginPacketListener p_134790_)
```

**Parameters:**

- `p_134790_` (`ClientLoginPacketListener`)

**Returns:** `public void`

### getServerId

```java
public String getServerId()
```

**Returns:** `public String`

### getPublicKey

```java
public PublicKey getPublicKey()
```

**Returns:** `public PublicKey`

### getChallenge

```java
public byte[] getChallenge()
```

**Returns:** `public byte[]`

### shouldAuthenticate

```java
public boolean shouldAuthenticate()
```

**Returns:** `public boolean`
