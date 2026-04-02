# ServerboundSignUpdatePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundSignUpdatePacket>` |  |

## Methods

### ServerboundSignUpdatePacket

```java
public ServerboundSignUpdatePacket(BlockPos p_277902_, boolean p_277750_, String p_278086_, String p_277504_, String p_277814_, String p_277726_)
```

**Parameters:**

- `p_277902_` (`BlockPos`)
- `p_277750_` (`boolean`)
- `p_278086_` (`String`)
- `p_277504_` (`String`)
- `p_277814_` (`String`)
- `p_277726_` (`String`)

**Returns:** `public`

### ServerboundSignUpdatePacket

```java
private ServerboundSignUpdatePacket(FriendlyByteBuf p_179790_)
```

**Parameters:**

- `p_179790_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134662_)
```

**Parameters:**

- `p_134662_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundSignUpdatePacket> type()
```

**Returns:** `PacketType<ServerboundSignUpdatePacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134659_)
```

**Parameters:**

- `p_134659_` (`ServerGamePacketListener`)

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

### getLines

```java
public String[] getLines()
```

**Returns:** `public String[]`
