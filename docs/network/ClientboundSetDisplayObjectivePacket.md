# ClientboundSetDisplayObjectivePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetDisplayObjectivePacket>` |  |

## Methods

### ClientboundSetDisplayObjectivePacket

```java
public ClientboundSetDisplayObjectivePacket(DisplaySlot p_294785_, Objective p_133132_)
```

**Parameters:**

- `p_294785_` (`DisplaySlot`)
- `p_133132_` (`Objective`)

**Returns:** `public`

### ClientboundSetDisplayObjectivePacket

```java
private ClientboundSetDisplayObjectivePacket(FriendlyByteBuf p_179288_)
```

**Parameters:**

- `p_179288_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133141_)
```

**Parameters:**

- `p_133141_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetDisplayObjectivePacket> type()
```

**Returns:** `PacketType<ClientboundSetDisplayObjectivePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133138_)
```

**Parameters:**

- `p_133138_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getSlot

```java
public DisplaySlot getSlot()
```

**Returns:** `public DisplaySlot`

### getObjectiveName

```java
public String getObjectiveName()
```

**Returns:** `String`
