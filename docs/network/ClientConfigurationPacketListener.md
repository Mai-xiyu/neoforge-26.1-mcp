# ClientConfigurationPacketListener

**Package:** `net.minecraft.network.protocol.configuration`
**Type:** interface
**Extends:** `ClientCommonPacketListener`

## Methods

### protocol

```java
default ConnectionProtocol protocol()
```

**Returns:** `ConnectionProtocol`

### handleConfigurationFinished

```java
void handleConfigurationFinished(ClientboundFinishConfigurationPacket p_295371_)
```

**Parameters:**

- `p_295371_` (`ClientboundFinishConfigurationPacket`)

### handleRegistryData

```java
void handleRegistryData(ClientboundRegistryDataPacket p_295674_)
```

**Parameters:**

- `p_295674_` (`ClientboundRegistryDataPacket`)

### handleEnabledFeatures

```java
void handleEnabledFeatures(ClientboundUpdateEnabledFeaturesPacket p_296241_)
```

**Parameters:**

- `p_296241_` (`ClientboundUpdateEnabledFeaturesPacket`)

### handleSelectKnownPacks

```java
void handleSelectKnownPacks(ClientboundSelectKnownPacks p_326313_)
```

**Parameters:**

- `p_326313_` (`ClientboundSelectKnownPacks`)

### handleResetChat

```java
void handleResetChat(ClientboundResetChatPacket p_338667_)
```

**Parameters:**

- `p_338667_` (`ClientboundResetChatPacket`)
