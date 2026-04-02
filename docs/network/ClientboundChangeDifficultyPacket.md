# ClientboundChangeDifficultyPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundChangeDifficultyPacket>` |  |

## Methods

### ClientboundChangeDifficultyPacket

```java
public ClientboundChangeDifficultyPacket(Difficulty p_131809_, boolean p_131810_)
```

**Parameters:**

- `p_131809_` (`Difficulty`)
- `p_131810_` (`boolean`)

**Returns:** `public`

### ClientboundChangeDifficultyPacket

```java
private ClientboundChangeDifficultyPacket(FriendlyByteBuf p_178774_)
```

**Parameters:**

- `p_178774_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_131819_)
```

**Parameters:**

- `p_131819_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundChangeDifficultyPacket> type()
```

**Returns:** `PacketType<ClientboundChangeDifficultyPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131816_)
```

**Parameters:**

- `p_131816_` (`ClientGamePacketListener`)

**Returns:** `public void`

### isLocked

```java
public boolean isLocked()
```

**Returns:** `public boolean`

### getDifficulty

```java
public Difficulty getDifficulty()
```

**Returns:** `public Difficulty`
