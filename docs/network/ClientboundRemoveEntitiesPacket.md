# ClientboundRemoveEntitiesPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundRemoveEntitiesPacket>` |  |

## Methods

### ClientboundRemoveEntitiesPacket

```java
public ClientboundRemoveEntitiesPacket(IntList p_182719_)
```

**Parameters:**

- `p_182719_` (`IntList`)

**Returns:** `public`

### ClientboundRemoveEntitiesPacket

```java
public ClientboundRemoveEntitiesPacket(int[]... p_182723_)
```

**Parameters:**

- `p_182723_` (`int[]...`)

**Returns:** `public`

### ClientboundRemoveEntitiesPacket

```java
private ClientboundRemoveEntitiesPacket(FriendlyByteBuf p_182721_)
```

**Parameters:**

- `p_182721_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_182725_)
```

**Parameters:**

- `p_182725_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundRemoveEntitiesPacket> type()
```

**Returns:** `PacketType<ClientboundRemoveEntitiesPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_182729_)
```

**Parameters:**

- `p_182729_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getEntityIds

```java
public IntList getEntityIds()
```

**Returns:** `public IntList`
