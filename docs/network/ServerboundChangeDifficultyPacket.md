# ServerboundChangeDifficultyPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundChangeDifficultyPacket>` |  |

## Methods

### ServerboundChangeDifficultyPacket

```java
public ServerboundChangeDifficultyPacket(Difficulty p_133817_)
```

**Parameters:**

- `p_133817_` (`Difficulty`)

**Returns:** `public`

### ServerboundChangeDifficultyPacket

```java
private ServerboundChangeDifficultyPacket(FriendlyByteBuf p_179542_)
```

**Parameters:**

- `p_179542_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133826_)
```

**Parameters:**

- `p_133826_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundChangeDifficultyPacket> type()
```

**Returns:** `PacketType<ServerboundChangeDifficultyPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_133823_)
```

**Parameters:**

- `p_133823_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getDifficulty

```java
public Difficulty getDifficulty()
```

**Returns:** `public Difficulty`
