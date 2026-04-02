# ClientboundAddExperienceOrbPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundAddExperienceOrbPacket>` |  |

## Methods

### ClientboundAddExperienceOrbPacket

```java
public ClientboundAddExperienceOrbPacket(ExperienceOrb p_131517_, ServerEntity p_352182_)
```

**Parameters:**

- `p_131517_` (`ExperienceOrb`)
- `p_352182_` (`ServerEntity`)

**Returns:** `public`

### ClientboundAddExperienceOrbPacket

```java
private ClientboundAddExperienceOrbPacket(FriendlyByteBuf p_178564_)
```

**Parameters:**

- `p_178564_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_131526_)
```

**Parameters:**

- `p_131526_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundAddExperienceOrbPacket> type()
```

**Returns:** `PacketType<ClientboundAddExperienceOrbPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131523_)
```

**Parameters:**

- `p_131523_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getX

```java
public double getX()
```

**Returns:** `public double`

### getY

```java
public double getY()
```

**Returns:** `public double`

### getZ

```java
public double getZ()
```

**Returns:** `public double`

### getValue

```java
public int getValue()
```

**Returns:** `public int`
