# ConfigurationPacketTypes

**Package:** `net.minecraft.network.protocol.configuration`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CLIENTBOUND_FINISH_CONFIGURATION` | `PacketType<ClientboundFinishConfigurationPacket>` |  |
| `CLIENTBOUND_REGISTRY_DATA` | `PacketType<ClientboundRegistryDataPacket>` |  |
| `CLIENTBOUND_UPDATE_ENABLED_FEATURES` | `PacketType<ClientboundUpdateEnabledFeaturesPacket>` |  |
| `CLIENTBOUND_SELECT_KNOWN_PACKS` | `PacketType<ClientboundSelectKnownPacks>` |  |
| `CLIENTBOUND_RESET_CHAT` | `PacketType<ClientboundResetChatPacket>` |  |
| `SERVERBOUND_FINISH_CONFIGURATION` | `PacketType<ServerboundFinishConfigurationPacket>` |  |
| `SERVERBOUND_SELECT_KNOWN_PACKS` | `PacketType<ServerboundSelectKnownPacks>` |  |

## Methods

### createClientbound

```java
private static <T extends Packet<ClientConfigurationPacketListener>> PacketType<T> createClientbound(String p_320514_)
```

**Parameters:**

- `p_320514_` (`String`)

**Returns:** `private static <T extends Packet<ClientConfigurationPacketListener>> PacketType<T>`

### createServerbound

```java
private static <T extends Packet<ServerConfigurationPacketListener>> PacketType<T> createServerbound(String p_320087_)
```

**Parameters:**

- `p_320087_` (`String`)

**Returns:** `private static <T extends Packet<ServerConfigurationPacketListener>> PacketType<T>`
