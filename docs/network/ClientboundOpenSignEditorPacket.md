# ClientboundOpenSignEditorPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundOpenSignEditorPacket>` |  |

## Methods

### ClientboundOpenSignEditorPacket

```java
public ClientboundOpenSignEditorPacket(BlockPos p_277843_, boolean p_277748_)
```

**Parameters:**

- `p_277843_` (`BlockPos`)
- `p_277748_` (`boolean`)

**Returns:** `public`

### ClientboundOpenSignEditorPacket

```java
private ClientboundOpenSignEditorPacket(FriendlyByteBuf p_179013_)
```

**Parameters:**

- `p_179013_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132642_)
```

**Parameters:**

- `p_132642_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundOpenSignEditorPacket> type()
```

**Returns:** `PacketType<ClientboundOpenSignEditorPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132639_)
```

**Parameters:**

- `p_132639_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### isFrontText

```java
public boolean isFrontText()
```

**Returns:** `public boolean`
