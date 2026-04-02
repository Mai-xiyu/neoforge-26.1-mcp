# ClientboundSetTitlesAnimationPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetTitlesAnimationPacket>` |  |

## Methods

### ClientboundSetTitlesAnimationPacket

```java
public ClientboundSetTitlesAnimationPacket(int p_179404_, int p_179405_, int p_179406_)
```

**Parameters:**

- `p_179404_` (`int`)
- `p_179405_` (`int`)
- `p_179406_` (`int`)

**Returns:** `public`

### ClientboundSetTitlesAnimationPacket

```java
private ClientboundSetTitlesAnimationPacket(FriendlyByteBuf p_179408_)
```

**Parameters:**

- `p_179408_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_179410_)
```

**Parameters:**

- `p_179410_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetTitlesAnimationPacket> type()
```

**Returns:** `PacketType<ClientboundSetTitlesAnimationPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_179414_)
```

**Parameters:**

- `p_179414_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getFadeIn

```java
public int getFadeIn()
```

**Returns:** `public int`

### getStay

```java
public int getStay()
```

**Returns:** `public int`

### getFadeOut

```java
public int getFadeOut()
```

**Returns:** `public int`
