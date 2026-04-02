# ClientboundPlayerAbilitiesPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundPlayerAbilitiesPacket>` |  |

## Methods

### ClientboundPlayerAbilitiesPacket

```java
public ClientboundPlayerAbilitiesPacket(Abilities p_132667_)
```

**Parameters:**

- `p_132667_` (`Abilities`)

**Returns:** `public`

### ClientboundPlayerAbilitiesPacket

```java
private ClientboundPlayerAbilitiesPacket(FriendlyByteBuf p_179033_)
```

**Parameters:**

- `p_179033_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132676_)
```

**Parameters:**

- `p_132676_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundPlayerAbilitiesPacket> type()
```

**Returns:** `PacketType<ClientboundPlayerAbilitiesPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132673_)
```

**Parameters:**

- `p_132673_` (`ClientGamePacketListener`)

**Returns:** `public void`

### isInvulnerable

```java
public boolean isInvulnerable()
```

**Returns:** `public boolean`

### isFlying

```java
public boolean isFlying()
```

**Returns:** `public boolean`

### canFly

```java
public boolean canFly()
```

**Returns:** `public boolean`

### canInstabuild

```java
public boolean canInstabuild()
```

**Returns:** `public boolean`

### getFlyingSpeed

```java
public float getFlyingSpeed()
```

**Returns:** `public float`

### getWalkingSpeed

```java
public float getWalkingSpeed()
```

**Returns:** `public float`
