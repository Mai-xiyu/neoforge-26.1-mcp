# ServerboundPaddleBoatPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundPaddleBoatPacket>` |  |

## Methods

### ServerboundPaddleBoatPacket

```java
public ServerboundPaddleBoatPacket(boolean p_134210_, boolean p_134211_)
```

**Parameters:**

- `p_134210_` (`boolean`)
- `p_134211_` (`boolean`)

**Returns:** `public`

### ServerboundPaddleBoatPacket

```java
private ServerboundPaddleBoatPacket(FriendlyByteBuf p_179702_)
```

**Parameters:**

- `p_179702_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134220_)
```

**Parameters:**

- `p_134220_` (`FriendlyByteBuf`)

**Returns:** `private void`

### handle

```java
public void handle(ServerGamePacketListener p_134217_)
```

**Parameters:**

- `p_134217_` (`ServerGamePacketListener`)

**Returns:** `public void`

### type

```java
public PacketType<ServerboundPaddleBoatPacket> type()
```

**Returns:** `PacketType<ServerboundPaddleBoatPacket>`

### getLeft

```java
public boolean getLeft()
```

**Returns:** `public boolean`

### getRight

```java
public boolean getRight()
```

**Returns:** `public boolean`
