# ClientboundUpdateTagsPacket

**Package:** `net.minecraft.network.protocol.common`
**Type:** class
**Implements:** `Packet<ClientCommonPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundUpdateTagsPacket>` |  |

## Methods

### ClientboundUpdateTagsPacket

```java
public ClientboundUpdateTagsPacket(Map<ResourceKey<? extends Registry<?>>, TagNetworkSerialization.NetworkPayload> p_296316_)
```

**Parameters:**

- `p_296316_` (`Map<ResourceKey<? extends Registry<?>>, TagNetworkSerialization.NetworkPayload>`)

**Returns:** `public`

### ClientboundUpdateTagsPacket

```java
private ClientboundUpdateTagsPacket(FriendlyByteBuf p_296024_)
```

**Parameters:**

- `p_296024_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_295095_)
```

**Parameters:**

- `p_295095_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundUpdateTagsPacket> type()
```

**Returns:** `PacketType<ClientboundUpdateTagsPacket>`

### handle

```java
public void handle(ClientCommonPacketListener p_296193_)
```

**Parameters:**

- `p_296193_` (`ClientCommonPacketListener`)

**Returns:** `public void`

### getTags

```java
public Map<ResourceKey<? extends Registry<?>>, TagNetworkSerialization.NetworkPayload> getTags()
```

**Returns:** `public Map<ResourceKey<? extends Registry<?>>, TagNetworkSerialization.NetworkPayload>`
