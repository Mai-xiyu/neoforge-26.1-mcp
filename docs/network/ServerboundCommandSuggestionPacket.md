# ServerboundCommandSuggestionPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundCommandSuggestionPacket>` |  |

## Methods

### ServerboundCommandSuggestionPacket

```java
public ServerboundCommandSuggestionPacket(int p_133893_, String p_133894_)
```

**Parameters:**

- `p_133893_` (`int`)
- `p_133894_` (`String`)

**Returns:** `public`

### ServerboundCommandSuggestionPacket

```java
private ServerboundCommandSuggestionPacket(FriendlyByteBuf p_179565_)
```

**Parameters:**

- `p_179565_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133903_)
```

**Parameters:**

- `p_133903_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundCommandSuggestionPacket> type()
```

**Returns:** `PacketType<ServerboundCommandSuggestionPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_133900_)
```

**Parameters:**

- `p_133900_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getCommand

```java
public String getCommand()
```

**Returns:** `public String`
