# ClientConfigurationPacketListenerImpl

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Extends:** `ClientCommonPacketListenerImpl`
**Implements:** `ClientConfigurationPacketListener`, `TickablePacketListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ClientConfigurationPacketListenerImpl

```java
public ClientConfigurationPacketListenerImpl(Minecraft p_295262_, Connection p_296339_, CommonListenerCookie p_294706_)
```

**Parameters:**

- `p_295262_` (`Minecraft`)
- `p_296339_` (`Connection`)
- `p_294706_` (`CommonListenerCookie`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isAcceptingMessages

```java
public boolean isAcceptingMessages()
```

**Returns:** `boolean`

### handleCustomPayload

```java
protected void handleCustomPayload(CustomPacketPayload p_295411_)
```

**Parameters:**

- `p_295411_` (`CustomPacketPayload`)

### handleUnknownCustomPayload

```java
private void handleUnknownCustomPayload(CustomPacketPayload p_296412_)
```

**Parameters:**

- `p_296412_` (`CustomPacketPayload`)

**Returns:** `private void`

### handleRegistryData

```java
public void handleRegistryData(ClientboundRegistryDataPacket p_295757_)
```

**Parameters:**

- `p_295757_` (`ClientboundRegistryDataPacket`)

### handleUpdateTags

```java
public void handleUpdateTags(ClientboundUpdateTagsPacket p_321623_)
```

**Parameters:**

- `p_321623_` (`ClientboundUpdateTagsPacket`)

### handleEnabledFeatures

```java
public void handleEnabledFeatures(ClientboundUpdateEnabledFeaturesPacket p_294410_)
```

**Parameters:**

- `p_294410_` (`ClientboundUpdateEnabledFeaturesPacket`)

### handleSelectKnownPacks

```java
public void handleSelectKnownPacks(ClientboundSelectKnownPacks p_325965_)
```

**Parameters:**

- `p_325965_` (`ClientboundSelectKnownPacks`)

### handleResetChat

```java
public void handleResetChat(ClientboundResetChatPacket p_338215_)
```

**Parameters:**

- `p_338215_` (`ClientboundResetChatPacket`)

### runWithResources

```java
<T> private <T> T runWithResources(Function<ResourceProvider, T> p_325978_)
```

**Parameters:**

- `p_325978_` (`Function<ResourceProvider, T>`)

**Returns:** `private <T> T`

### handleConfigurationFinished

```java
public void handleConfigurationFinished(ClientboundFinishConfigurationPacket p_294585_)
```

**Parameters:**

- `p_294585_` (`ClientboundFinishConfigurationPacket`)

### tick

```java
public void tick()
```

### onDisconnect

```java
public void onDisconnect(DisconnectionDetails p_351005_)
```

**Parameters:**

- `p_351005_` (`DisconnectionDetails`)

### handleCustomPayload

```java
public void handleCustomPayload(net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket packet)
```

**Parameters:**

- `packet` (`net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket`)

### createDisconnectScreen

```java
protected net.minecraft.client.gui.screens.Screen createDisconnectScreen(DisconnectionDetails p_350769_)
```

**Parameters:**

- `p_350769_` (`DisconnectionDetails`)

**Returns:** `net.minecraft.client.gui.screens.Screen`

### getConnectionType

```java
public net.neoforged.neoforge.network.connection.ConnectionType getConnectionType()
```

**Returns:** `public net.neoforged.neoforge.network.connection.ConnectionType`
