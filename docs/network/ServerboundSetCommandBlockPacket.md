# ServerboundSetCommandBlockPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundSetCommandBlockPacket>` |  |

## Methods

### ServerboundSetCommandBlockPacket

```java
public ServerboundSetCommandBlockPacket(BlockPos p_134509_, String p_134510_, CommandBlockEntity.Mode p_134511_, boolean p_134512_, boolean p_134513_, boolean p_134514_)
```

**Parameters:**

- `p_134509_` (`BlockPos`)
- `p_134510_` (`String`)
- `p_134511_` (`CommandBlockEntity.Mode`)
- `p_134512_` (`boolean`)
- `p_134513_` (`boolean`)
- `p_134514_` (`boolean`)

**Returns:** `public`

### ServerboundSetCommandBlockPacket

```java
private ServerboundSetCommandBlockPacket(FriendlyByteBuf p_179756_)
```

**Parameters:**

- `p_179756_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134523_)
```

**Parameters:**

- `p_134523_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundSetCommandBlockPacket> type()
```

**Returns:** `PacketType<ServerboundSetCommandBlockPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134520_)
```

**Parameters:**

- `p_134520_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### getCommand

```java
public String getCommand()
```

**Returns:** `public String`

### isTrackOutput

```java
public boolean isTrackOutput()
```

**Returns:** `public boolean`

### isConditional

```java
public boolean isConditional()
```

**Returns:** `public boolean`

### isAutomatic

```java
public boolean isAutomatic()
```

**Returns:** `public boolean`

### getMode

```java
public CommandBlockEntity.Mode getMode()
```

**Returns:** `public CommandBlockEntity.Mode`
