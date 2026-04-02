# ServerboundClientCommandPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundClientCommandPacket>` |  |

## Methods

### ServerboundClientCommandPacket

```java
public ServerboundClientCommandPacket(ServerboundClientCommandPacket.Action p_133843_)
```

**Parameters:**

- `p_133843_` (`ServerboundClientCommandPacket.Action`)

**Returns:** `public`

### ServerboundClientCommandPacket

```java
private ServerboundClientCommandPacket(FriendlyByteBuf p_179547_)
```

**Parameters:**

- `p_179547_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133852_)
```

**Parameters:**

- `p_133852_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundClientCommandPacket> type()
```

**Returns:** `PacketType<ServerboundClientCommandPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_133849_)
```

**Parameters:**

- `p_133849_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getAction

```java
public ServerboundClientCommandPacket.Action getAction()
```

**Returns:** `public ServerboundClientCommandPacket.Action`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Action` | enum |  |
