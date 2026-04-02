# ServerboundLockDifficultyPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundLockDifficultyPacket>` |  |

## Methods

### ServerboundLockDifficultyPacket

```java
public ServerboundLockDifficultyPacket(boolean p_134108_)
```

**Parameters:**

- `p_134108_` (`boolean`)

**Returns:** `public`

### ServerboundLockDifficultyPacket

```java
private ServerboundLockDifficultyPacket(FriendlyByteBuf p_179673_)
```

**Parameters:**

- `p_179673_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134117_)
```

**Parameters:**

- `p_134117_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundLockDifficultyPacket> type()
```

**Returns:** `PacketType<ServerboundLockDifficultyPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134114_)
```

**Parameters:**

- `p_134114_` (`ServerGamePacketListener`)

**Returns:** `public void`

### isLocked

```java
public boolean isLocked()
```

**Returns:** `public boolean`
