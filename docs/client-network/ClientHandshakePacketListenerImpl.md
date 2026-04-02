# ClientHandshakePacketListenerImpl

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Implements:** `ClientLoginPacketListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ClientHandshakePacketListenerImpl

```java
public ClientHandshakePacketListenerImpl(Connection p_261697_, Minecraft p_261835_, ServerData p_261938_, Screen p_261783_, boolean p_261562_, Duration p_261673_, Consumer<Component> p_261945_, TransferState p_320762_)
```

**Parameters:**

- `p_261697_` (`Connection`)
- `p_261835_` (`Minecraft`)
- `p_261938_` (`ServerData`)
- `p_261783_` (`Screen`)
- `p_261562_` (`boolean`)
- `p_261673_` (`Duration`)
- `p_261945_` (`Consumer<Component>`)
- `p_320762_` (`TransferState`)

**Returns:** `public`

### switchState

```java
private void switchState(ClientHandshakePacketListenerImpl.State p_302230_)
```

**Parameters:**

- `p_302230_` (`ClientHandshakePacketListenerImpl.State`)

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("Tried to switch to " + p_302230_ + " from " + p_339288_ + ", but expected one of " + p_302230_.fromStates)
```

**Parameters:**

- `"` (`"Tried to switch to " + p_302230_ + " from " + p_339288_ +`)
- `p_302230_.fromStates` (`but expected one of " +`)

**Returns:** `throw new`

### handleHello

```java
public void handleHello(ClientboundHelloPacket p_104549_)
```

**Parameters:**

- `p_104549_` (`ClientboundHelloPacket`)

### IllegalStateException

```java
throw new IllegalStateException("Protocol error")
```

**Parameters:**

- `error"` (`"Protocol`)

**Returns:** `throw new`

### setEncryption

```java
private void setEncryption(ServerboundKeyPacket p_319860_, Cipher p_320550_, Cipher p_320442_)
```

**Parameters:**

- `p_319860_` (`ServerboundKeyPacket`)
- `p_320550_` (`Cipher`)
- `p_320442_` (`Cipher`)

**Returns:** `private void`

### getMinecraftSessionService

```java
private MinecraftSessionService getMinecraftSessionService()
```

**Returns:** `private MinecraftSessionService`

### handleGameProfile

```java
public void handleGameProfile(ClientboundGameProfilePacket p_104547_)
```

**Parameters:**

- `p_104547_` (`ClientboundGameProfilePacket`)

### onDisconnect

```java
public void onDisconnect(DisconnectionDetails p_350923_)
```

**Parameters:**

- `p_350923_` (`DisconnectionDetails`)

### isAcceptingMessages

```java
public boolean isAcceptingMessages()
```

**Returns:** `boolean`

### handleDisconnect

```java
public void handleDisconnect(ClientboundLoginDisconnectPacket p_104553_)
```

**Parameters:**

- `p_104553_` (`ClientboundLoginDisconnectPacket`)

### handleCompression

```java
public void handleCompression(ClientboundLoginCompressionPacket p_104551_)
```

**Parameters:**

- `p_104551_` (`ClientboundLoginCompressionPacket`)

### handleCustomQuery

```java
public void handleCustomQuery(ClientboundCustomQueryPacket p_104545_)
```

**Parameters:**

- `p_104545_` (`ClientboundCustomQueryPacket`)

### setMinigameName

```java
public void setMinigameName(String p_286653_)
```

**Parameters:**

- `p_286653_` (`String`)

**Returns:** `public void`

### handleRequestCookie

```java
public void handleRequestCookie(ClientboundCookieRequestPacket p_319938_)
```

**Parameters:**

- `p_319938_` (`ClientboundCookieRequestPacket`)

### fillListenerSpecificCrashDetails

```java
public void fillListenerSpecificCrashDetails(CrashReport p_350555_, CrashReportCategory p_315015_)
```

**Parameters:**

- `p_350555_` (`CrashReport`)
- `p_315015_` (`CrashReportCategory`)

### State

```java
private State(Component p_302239_, Set<ClientHandshakePacketListenerImpl.State> p_302236_)
```

**Parameters:**

- `p_302239_` (`Component`)
- `p_302236_` (`Set<ClientHandshakePacketListenerImpl.State>`)

**Returns:** `private`
