# ClientboundSetExperiencePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundSetExperiencePacket>` |  |

## Methods

### ClientboundSetExperiencePacket

```java
public ClientboundSetExperiencePacket(float p_133219_, int p_133220_, int p_133221_)
```

**Parameters:**

- `p_133219_` (`float`)
- `p_133220_` (`int`)
- `p_133221_` (`int`)

**Returns:** `public`

### ClientboundSetExperiencePacket

```java
private ClientboundSetExperiencePacket(FriendlyByteBuf p_179299_)
```

**Parameters:**

- `p_179299_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_133230_)
```

**Parameters:**

- `p_133230_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetExperiencePacket> type()
```

**Returns:** `PacketType<ClientboundSetExperiencePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133227_)
```

**Parameters:**

- `p_133227_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getExperienceProgress

```java
public float getExperienceProgress()
```

**Returns:** `public float`

### getTotalExperience

```java
public int getTotalExperience()
```

**Returns:** `public int`

### getExperienceLevel

```java
public int getExperienceLevel()
```

**Returns:** `public int`
