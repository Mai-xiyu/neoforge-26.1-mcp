# ServerConfigurationPacketListenerImpl

**Package:** `net.minecraft.server.network`
**Type:** class
**Extends:** `ServerCommonPacketListenerImpl`
**Implements:** `ServerConfigurationPacketListener`, `TickablePacketListener`
**Side:** 🖧 Server

## Methods

### ServerConfigurationPacketListenerImpl

```java
public ServerConfigurationPacketListenerImpl(MinecraftServer p_294645_, Connection p_295787_, CommonListenerCookie p_302003_)
```

**Parameters:**

- `p_294645_` (`MinecraftServer`)
- `p_295787_` (`Connection`)
- `p_302003_` (`CommonListenerCookie`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### playerProfile

```java
protected GameProfile playerProfile()
```

**Returns:** `GameProfile`

### onDisconnect

```java
public void onDisconnect(DisconnectionDetails p_350569_)
```

**Parameters:**

- `p_350569_` (`DisconnectionDetails`)

### isAcceptingMessages

```java
public boolean isAcceptingMessages()
```

**Returns:** `boolean`

### startConfiguration

```java
public void startConfiguration()
```

**Returns:** `public void`

### runConfiguration

```java
in this method so we can call it in handlePong below.
    private void runConfiguration()
```

**Returns:** `in this method so we can call it in handlePong below.
    private void`

### returnToWorld

```java
public void returnToWorld()
```

**Returns:** `public void`

### addOptionalTasks

```java
private void addOptionalTasks()
```

**Returns:** `private void`

### handleCustomPayload

```java
public void handleCustomPayload(net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket p_294276_)
```

**Parameters:**

- `p_294276_` (`net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket`)

### handlePong

```java
public void handlePong(net.minecraft.network.protocol.common.ServerboundPongPacket p_295142_)
```

**Parameters:**

- `p_295142_` (`net.minecraft.network.protocol.common.ServerboundPongPacket`)

### handleClientInformation

```java
public void handleClientInformation(ServerboundClientInformationPacket p_302032_)
```

**Parameters:**

- `p_302032_` (`ServerboundClientInformationPacket`)

### handleResourcePackResponse

```java
public void handleResourcePackResponse(ServerboundResourcePackPacket p_294250_)
```

**Parameters:**

- `p_294250_` (`ServerboundResourcePackPacket`)

### handleSelectKnownPacks

```java
public void handleSelectKnownPacks(ServerboundSelectKnownPacks p_326180_)
```

**Parameters:**

- `p_326180_` (`ServerboundSelectKnownPacks`)

### IllegalStateException

```java
throw new IllegalStateException("Unexpected response from client: received pack selection, but no negotiation ongoing")
```

**Parameters:**

- `selection` (`"Unexpected response from client: received pack`)
- `ongoing"` (`but no negotiation`)

**Returns:** `throw new`

### handleConfigurationFinished

```java
public void handleConfigurationFinished(ServerboundFinishConfigurationPacket p_294283_)
```

**Parameters:**

- `p_294283_` (`ServerboundFinishConfigurationPacket`)

### tick

```java
public void tick()
```

### startNextTask

```java
private void startNextTask()
```

**Returns:** `private void`

### finishCurrentTask

```java
public void finishCurrentTask(ConfigurationTask.Type p_294853_)
```

**Parameters:**

- `p_294853_` (`ConfigurationTask.Type`)

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Unexpected request for task finish, current task: " + configurationtask$type + ", requested: " + p_294853_)
```

**Parameters:**

- `finish` (`"Unexpected request for task`)
- `"` (`current task: " + configurationtask$type +`)
- `p_294853_` (`requested: " +`)

**Returns:** `throw new`
