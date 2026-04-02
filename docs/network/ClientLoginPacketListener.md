# ClientLoginPacketListener

**Package:** `net.minecraft.network.protocol.login`
**Type:** interface
**Extends:** `ClientCookiePacketListener, ClientboundPacketListener`

## Methods

### protocol

```java
default ConnectionProtocol protocol()
```

**Returns:** `ConnectionProtocol`

### handleHello

```java
void handleHello(ClientboundHelloPacket p_134742_)
```

**Parameters:**

- `p_134742_` (`ClientboundHelloPacket`)

### handleGameProfile

```java
void handleGameProfile(ClientboundGameProfilePacket p_134741_)
```

**Parameters:**

- `p_134741_` (`ClientboundGameProfilePacket`)

### handleDisconnect

```java
void handleDisconnect(ClientboundLoginDisconnectPacket p_134744_)
```

**Parameters:**

- `p_134744_` (`ClientboundLoginDisconnectPacket`)

### handleCompression

```java
void handleCompression(ClientboundLoginCompressionPacket p_134743_)
```

**Parameters:**

- `p_134743_` (`ClientboundLoginCompressionPacket`)

### handleCustomQuery

```java
void handleCustomQuery(ClientboundCustomQueryPacket p_134740_)
```

**Parameters:**

- `p_134740_` (`ClientboundCustomQueryPacket`)
