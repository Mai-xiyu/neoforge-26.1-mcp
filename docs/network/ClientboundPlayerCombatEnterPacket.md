# ClientboundPlayerCombatEnterPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `ClientboundPlayerCombatEnterPacket` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, ClientboundPlayerCombatEnterPacket>` |  |

## Methods

### ClientboundPlayerCombatEnterPacket

```java
private ClientboundPlayerCombatEnterPacket()
```

**Returns:** `private`

### type

```java
public PacketType<ClientboundPlayerCombatEnterPacket> type()
```

**Returns:** `PacketType<ClientboundPlayerCombatEnterPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_179057_)
```

**Parameters:**

- `p_179057_` (`ClientGamePacketListener`)

**Returns:** `public void`
