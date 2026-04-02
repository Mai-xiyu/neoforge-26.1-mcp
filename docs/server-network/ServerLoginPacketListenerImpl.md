# ServerLoginPacketListenerImpl

**Package:** `net.minecraft.server.network`
**Type:** class
**Implements:** `ServerLoginPacketListener`, `TickablePacketListener`
**Side:** 🖧 Server

## Methods

### ServerLoginPacketListenerImpl

```java
public ServerLoginPacketListenerImpl(MinecraftServer p_10027_, Connection p_10028_, boolean p_320815_)
```

**Parameters:**

- `p_10027_` (`MinecraftServer`)
- `p_10028_` (`Connection`)
- `p_320815_` (`boolean`)

**Returns:** `public`

### tick

```java
public void tick()
```

### isAcceptingMessages

```java
public boolean isAcceptingMessages()
```

**Returns:** `boolean`

### disconnect

```java
public void disconnect(Component p_10054_)
```

**Parameters:**

- `p_10054_` (`Component`)

**Returns:** `public void`

### isPlayerAlreadyInWorld

```java
private boolean isPlayerAlreadyInWorld(GameProfile p_294314_)
```

**Parameters:**

- `p_294314_` (`GameProfile`)

**Returns:** `private boolean`

### onDisconnect

```java
public void onDisconnect(DisconnectionDetails p_350676_)
```

**Parameters:**

- `p_350676_` (`DisconnectionDetails`)

### getUserName

```java
public String getUserName()
```

**Returns:** `public String`

### handleHello

```java
public void handleHello(ServerboundHelloPacket p_10047_)
```

**Parameters:**

- `p_10047_` (`ServerboundHelloPacket`)

### startClientVerification

```java
void startClientVerification(GameProfile p_295643_)
```

**Parameters:**

- `p_295643_` (`GameProfile`)

### verifyLoginAndFinishConnectionSetup

```java
private void verifyLoginAndFinishConnectionSetup(GameProfile p_294502_)
```

**Parameters:**

- `p_294502_` (`GameProfile`)

**Returns:** `private void`

### finishLoginAndWaitForClient

```java
private void finishLoginAndWaitForClient(GameProfile p_295520_)
```

**Parameters:**

- `p_295520_` (`GameProfile`)

**Returns:** `private void`

### handleKey

```java
public void handleKey(ServerboundKeyPacket p_10049_)
```

**Parameters:**

- `p_10049_` (`ServerboundKeyPacket`)

### IllegalStateException

```java
throw new IllegalStateException("Protocol error")
```

**Parameters:**

- `error"` (`"Protocol`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Protocol error")
```

**Parameters:**

- `error"` (`"Protocol`)

**Returns:** `throw new`

### run

```java
public void run()
```

### handleCustomQueryPacket

```java
public void handleCustomQueryPacket(ServerboundCustomQueryAnswerPacket p_295398_)
```

**Parameters:**

- `p_295398_` (`ServerboundCustomQueryAnswerPacket`)

### handleLoginAcknowledgement

```java
public void handleLoginAcknowledgement(ServerboundLoginAcknowledgedPacket p_295661_)
```

**Parameters:**

- `p_295661_` (`ServerboundLoginAcknowledgedPacket`)

### fillListenerSpecificCrashDetails

```java
public void fillListenerSpecificCrashDetails(CrashReport p_350283_, CrashReportCategory p_314941_)
```

**Parameters:**

- `p_350283_` (`CrashReport`)
- `p_314941_` (`CrashReportCategory`)

### handleCookieResponse

```java
public void handleCookieResponse(ServerboundCookieResponsePacket p_320866_)
```

**Parameters:**

- `p_320866_` (`ServerboundCookieResponsePacket`)
