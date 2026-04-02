# ServerLoginPacketListener

**Package:** `net.minecraft.network.protocol.login`
**Type:** interface
**Extends:** `ServerCookiePacketListener, ServerPacketListener`

## Methods

### protocol

```java
default ConnectionProtocol protocol()
```

**Returns:** `ConnectionProtocol`

### handleHello

```java
void handleHello(ServerboundHelloPacket p_134823_)
```

**Parameters:**

- `p_134823_` (`ServerboundHelloPacket`)

### handleKey

```java
void handleKey(ServerboundKeyPacket p_134824_)
```

**Parameters:**

- `p_134824_` (`ServerboundKeyPacket`)

### handleCustomQueryPacket

```java
void handleCustomQueryPacket(ServerboundCustomQueryAnswerPacket p_296280_)
```

**Parameters:**

- `p_296280_` (`ServerboundCustomQueryAnswerPacket`)

### handleLoginAcknowledgement

```java
void handleLoginAcknowledgement(ServerboundLoginAcknowledgedPacket p_294889_)
```

**Parameters:**

- `p_294889_` (`ServerboundLoginAcknowledgedPacket`)
