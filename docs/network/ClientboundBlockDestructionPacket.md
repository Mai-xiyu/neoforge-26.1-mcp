# ClientboundBlockDestructionPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundBlockDestructionPacket>` |  |

## Methods

### ClientboundBlockDestructionPacket

```java
public ClientboundBlockDestructionPacket(int p_131676_, BlockPos p_131677_, int p_131678_)
```

**Parameters:**

- `p_131676_` (`int`)
- `p_131677_` (`BlockPos`)
- `p_131678_` (`int`)

**Returns:** `public`

### ClientboundBlockDestructionPacket

```java
private ClientboundBlockDestructionPacket(FriendlyByteBuf p_178606_)
```

**Parameters:**

- `p_178606_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_131687_)
```

**Parameters:**

- `p_131687_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundBlockDestructionPacket> type()
```

**Returns:** `PacketType<ClientboundBlockDestructionPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131684_)
```

**Parameters:**

- `p_131684_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### getProgress

```java
public int getProgress()
```

**Returns:** `public int`
