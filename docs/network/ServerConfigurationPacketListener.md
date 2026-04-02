# ServerConfigurationPacketListener

**Package:** `net.minecraft.network.protocol.configuration`
**Type:** interface
**Extends:** `ServerCommonPacketListener, net.neoforged.neoforge.common.extensions.IServerConfigurationPacketListenerExtension`

## Methods

### protocol

```java
default ConnectionProtocol protocol()
```

**Returns:** `ConnectionProtocol`

### handleConfigurationFinished

```java
void handleConfigurationFinished(ServerboundFinishConfigurationPacket p_295218_)
```

**Parameters:**

- `p_295218_` (`ServerboundFinishConfigurationPacket`)

### handleSelectKnownPacks

```java
void handleSelectKnownPacks(ServerboundSelectKnownPacks p_326510_)
```

**Parameters:**

- `p_326510_` (`ServerboundSelectKnownPacks`)
