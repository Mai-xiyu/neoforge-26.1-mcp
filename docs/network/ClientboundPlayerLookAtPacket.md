# ClientboundPlayerLookAtPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundPlayerLookAtPacket>` |  |

## Methods

### ClientboundPlayerLookAtPacket

```java
public ClientboundPlayerLookAtPacket(EntityAnchorArgument.Anchor p_132777_, double p_132778_, double p_132779_, double p_132780_)
```

**Parameters:**

- `p_132777_` (`EntityAnchorArgument.Anchor`)
- `p_132778_` (`double`)
- `p_132779_` (`double`)
- `p_132780_` (`double`)

**Returns:** `public`

### ClientboundPlayerLookAtPacket

```java
public ClientboundPlayerLookAtPacket(EntityAnchorArgument.Anchor p_132782_, Entity p_132783_, EntityAnchorArgument.Anchor p_132784_)
```

**Parameters:**

- `p_132782_` (`EntityAnchorArgument.Anchor`)
- `p_132783_` (`Entity`)
- `p_132784_` (`EntityAnchorArgument.Anchor`)

**Returns:** `public`

### ClientboundPlayerLookAtPacket

```java
private ClientboundPlayerLookAtPacket(FriendlyByteBuf p_179146_)
```

**Parameters:**

- `p_179146_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132795_)
```

**Parameters:**

- `p_132795_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundPlayerLookAtPacket> type()
```

**Returns:** `PacketType<ClientboundPlayerLookAtPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132792_)
```

**Parameters:**

- `p_132792_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getFromAnchor

```java
public EntityAnchorArgument.Anchor getFromAnchor()
```

**Returns:** `public EntityAnchorArgument.Anchor`

### getPosition

```java
public Vec3 getPosition(Level p_132786_)
```

**Parameters:**

- `p_132786_` (`Level`)

**Returns:** `Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`
