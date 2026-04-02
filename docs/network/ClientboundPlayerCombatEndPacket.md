# ClientboundPlayerCombatEndPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundPlayerCombatEndPacket>` |  |

## Methods

### ClientboundPlayerCombatEndPacket

```java
public ClientboundPlayerCombatEndPacket(CombatTracker p_179040_)
```

**Parameters:**

- `p_179040_` (`CombatTracker`)

**Returns:** `public`

### ClientboundPlayerCombatEndPacket

```java
public ClientboundPlayerCombatEndPacket(int p_289544_)
```

**Parameters:**

- `p_289544_` (`int`)

**Returns:** `public`

### ClientboundPlayerCombatEndPacket

```java
private ClientboundPlayerCombatEndPacket(FriendlyByteBuf p_179042_)
```

**Parameters:**

- `p_179042_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_179044_)
```

**Parameters:**

- `p_179044_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundPlayerCombatEndPacket> type()
```

**Returns:** `PacketType<ClientboundPlayerCombatEndPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_179048_)
```

**Parameters:**

- `p_179048_` (`ClientGamePacketListener`)

**Returns:** `public void`
