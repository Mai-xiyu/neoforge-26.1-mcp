# ServerStatusPinger

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### pingServer

```java
public void pingServer(ServerData p_105460_, Runnable p_105461_, Runnable p_316316_)
```

**Parameters:**

- `p_105460_` (`ServerData`)
- `p_105461_` (`Runnable`)
- `p_316316_` (`Runnable`)

**Returns:** `public void`

### handleStatusResponse

```java
public void handleStatusResponse(ClientboundStatusResponsePacket p_105489_)
```

**Parameters:**

- `p_105489_` (`ClientboundStatusResponsePacket`)

### handlePongResponse

```java
public void handlePongResponse(ClientboundPongResponsePacket p_320841_)
```

**Parameters:**

- `p_320841_` (`ClientboundPongResponsePacket`)

### onDisconnect

```java
public void onDisconnect(DisconnectionDetails p_350468_)
```

**Parameters:**

- `p_350468_` (`DisconnectionDetails`)

### isAcceptingMessages

```java
public boolean isAcceptingMessages()
```

**Returns:** `boolean`

### onPingFailed

```java
void onPingFailed(Component p_171815_, ServerData p_171816_)
```

**Parameters:**

- `p_171815_` (`Component`)
- `p_171816_` (`ServerData`)

### pingLegacyServer

```java
void pingLegacyServer(InetSocketAddress p_171812_, ServerAddress p_295436_, ServerData p_171813_)
```

**Parameters:**

- `p_171812_` (`InetSocketAddress`)
- `p_295436_` (`ServerAddress`)
- `p_171813_` (`ServerData`)

### initChannel

```java
protected void initChannel(Channel p_105498_)
```

**Parameters:**

- `p_105498_` (`Channel`)

### formatPlayerCount

```java
public static Component formatPlayerCount(int p_105467_, int p_105468_)
```

**Parameters:**

- `p_105467_` (`int`)
- `p_105468_` (`int`)

**Returns:** `public static Component`

### tick

```java
public void tick()
```

**Returns:** `public void`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### removeAll

```java
public void removeAll()
```

**Returns:** `public void`

### synchronized

```java
 synchronized()
```

**Returns:** ``
