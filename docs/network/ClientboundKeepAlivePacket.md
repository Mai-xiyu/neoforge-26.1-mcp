# ClientboundKeepAlivePacket

**Package:** `net.minecraft.network.protocol.common`
**Type:** class
**Implements:** `Packet<ClientCommonPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundKeepAlivePacket>` |  |

## Methods

### ClientboundKeepAlivePacket

```java
public ClientboundKeepAlivePacket(long p_296274_)
```

**Parameters:**

- `p_296274_` (`long`)

**Returns:** `public`

### ClientboundKeepAlivePacket

```java
private ClientboundKeepAlivePacket(FriendlyByteBuf p_296088_)
```

**Parameters:**

- `p_296088_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_295294_)
```

**Parameters:**

- `p_295294_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundKeepAlivePacket> type()
```

**Returns:** `PacketType<ClientboundKeepAlivePacket>`

### handle

```java
public void handle(ClientCommonPacketListener p_296005_)
```

**Parameters:**

- `p_296005_` (`ClientCommonPacketListener`)

**Returns:** `public void`

### getId

```java
public long getId()
```

**Returns:** `public long`
