# ClientCommonPacketListener

**Package:** `net.minecraft.network.protocol.common`
**Type:** interface
**Extends:** `ClientCookiePacketListener, ClientboundPacketListener, net.neoforged.neoforge.common.extensions.IClientCommonPacketListenerExtension`

## Methods

### handleKeepAlive

```java
void handleKeepAlive(ClientboundKeepAlivePacket p_295236_)
```

**Parameters:**

- `p_295236_` (`ClientboundKeepAlivePacket`)

### handlePing

```java
void handlePing(ClientboundPingPacket p_296451_)
```

**Parameters:**

- `p_296451_` (`ClientboundPingPacket`)

### handleCustomPayload

```java
void handleCustomPayload(ClientboundCustomPayloadPacket p_294344_)
```

**Parameters:**

- `p_294344_` (`ClientboundCustomPayloadPacket`)

### handleDisconnect

```java
void handleDisconnect(ClientboundDisconnectPacket p_294847_)
```

**Parameters:**

- `p_294847_` (`ClientboundDisconnectPacket`)

### handleResourcePackPush

```java
void handleResourcePackPush(ClientboundResourcePackPushPacket p_314475_)
```

**Parameters:**

- `p_314475_` (`ClientboundResourcePackPushPacket`)

### handleResourcePackPop

```java
void handleResourcePackPop(ClientboundResourcePackPopPacket p_314490_)
```

**Parameters:**

- `p_314490_` (`ClientboundResourcePackPopPacket`)

### handleUpdateTags

```java
void handleUpdateTags(ClientboundUpdateTagsPacket p_294883_)
```

**Parameters:**

- `p_294883_` (`ClientboundUpdateTagsPacket`)

### handleStoreCookie

```java
void handleStoreCookie(ClientboundStoreCookiePacket p_320452_)
```

**Parameters:**

- `p_320452_` (`ClientboundStoreCookiePacket`)

### handleTransfer

```java
void handleTransfer(ClientboundTransferPacket p_320836_)
```

**Parameters:**

- `p_320836_` (`ClientboundTransferPacket`)

### handleCustomReportDetails

```java
void handleCustomReportDetails(ClientboundCustomReportDetailsPacket p_350481_)
```

**Parameters:**

- `p_350481_` (`ClientboundCustomReportDetailsPacket`)

### handleServerLinks

```java
void handleServerLinks(ClientboundServerLinksPacket p_350776_)
```

**Parameters:**

- `p_350776_` (`ClientboundServerLinksPacket`)
