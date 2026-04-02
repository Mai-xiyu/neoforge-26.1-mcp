# ServerboundSetCommandMinecartPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundSetCommandMinecartPacket>` |  |

## Methods

### ServerboundSetCommandMinecartPacket

```java
public ServerboundSetCommandMinecartPacket(int p_134534_, String p_134535_, boolean p_134536_)
```

**Parameters:**

- `p_134534_` (`int`)
- `p_134535_` (`String`)
- `p_134536_` (`boolean`)

**Returns:** `public`

### ServerboundSetCommandMinecartPacket

```java
private ServerboundSetCommandMinecartPacket(FriendlyByteBuf p_179758_)
```

**Parameters:**

- `p_179758_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134547_)
```

**Parameters:**

- `p_134547_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundSetCommandMinecartPacket> type()
```

**Returns:** `PacketType<ServerboundSetCommandMinecartPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134544_)
```

**Parameters:**

- `p_134544_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getCommandBlock

```java
public BaseCommandBlock getCommandBlock(Level p_134538_)
```

**Parameters:**

- `p_134538_` (`Level`)

**Returns:** `BaseCommandBlock`

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
