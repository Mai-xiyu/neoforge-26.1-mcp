# ServerCommonPacketListener

**Package:** `net.minecraft.network.protocol.common`
**Type:** interface
**Extends:** `ServerCookiePacketListener, ServerPacketListener, net.neoforged.neoforge.common.extensions.IServerCommonPacketListenerExtension`

## Methods

### handleKeepAlive

```java
void handleKeepAlive(ServerboundKeepAlivePacket p_296457_)
```

**Parameters:**

- `p_296457_` (`ServerboundKeepAlivePacket`)

### handlePong

```java
void handlePong(ServerboundPongPacket p_294309_)
```

**Parameters:**

- `p_294309_` (`ServerboundPongPacket`)

### handleCustomPayload

```java
void handleCustomPayload(ServerboundCustomPayloadPacket p_295175_)
```

**Parameters:**

- `p_295175_` (`ServerboundCustomPayloadPacket`)

### handleResourcePackResponse

```java
void handleResourcePackResponse(ServerboundResourcePackPacket p_294545_)
```

**Parameters:**

- `p_294545_` (`ServerboundResourcePackPacket`)

### handleClientInformation

```java
void handleClientInformation(ServerboundClientInformationPacket p_301982_)
```

**Parameters:**

- `p_301982_` (`ServerboundClientInformationPacket`)
