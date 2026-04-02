# ServerboundRenameItemPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundRenameItemPacket>` |  |

## Methods

### ServerboundRenameItemPacket

```java
public ServerboundRenameItemPacket(String p_134396_)
```

**Parameters:**

- `p_134396_` (`String`)

**Returns:** `public`

### ServerboundRenameItemPacket

```java
private ServerboundRenameItemPacket(FriendlyByteBuf p_179738_)
```

**Parameters:**

- `p_179738_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134405_)
```

**Parameters:**

- `p_134405_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundRenameItemPacket> type()
```

**Returns:** `PacketType<ServerboundRenameItemPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134402_)
```

**Parameters:**

- `p_134402_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getName

```java
public String getName()
```

**Returns:** `public String`
