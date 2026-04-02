# ServerStatusPacketListenerImpl

**Package:** `net.minecraft.server.network`
**Type:** class
**Implements:** `ServerStatusPacketListener`
**Side:** 🖧 Server

## Methods

### ServerStatusPacketListenerImpl

```java
public ServerStatusPacketListenerImpl(ServerStatus p_272864_, Connection p_273586_)
```

**Parameters:**

- `p_272864_` (`ServerStatus`)
- `p_273586_` (`Connection`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ServerStatusPacketListenerImpl

```java
public ServerStatusPacketListenerImpl(ServerStatus p_272864_, Connection p_273586_, .jetbrains.annotations.Nullable String statusCache)
```

**Parameters:**

- `p_272864_` (`ServerStatus`)
- `p_273586_` (`Connection`)
- `statusCache` (`.jetbrains.annotations.Nullable String`)

**Returns:** `public`

### onDisconnect

```java
public void onDisconnect(DisconnectionDetails p_350895_)
```

**Parameters:**

- `p_350895_` (`DisconnectionDetails`)

### isAcceptingMessages

```java
public boolean isAcceptingMessages()
```

**Returns:** `boolean`

### handleStatusRequest

```java
public void handleStatusRequest(ServerboundStatusRequestPacket p_10095_)
```

**Parameters:**

- `p_10095_` (`ServerboundStatusRequestPacket`)

### handlePingRequest

```java
public void handlePingRequest(ServerboundPingRequestPacket p_320923_)
```

**Parameters:**

- `p_320923_` (`ServerboundPingRequestPacket`)
