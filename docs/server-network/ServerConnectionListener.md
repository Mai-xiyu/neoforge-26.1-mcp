# ServerConnectionListener

**Package:** `net.minecraft.server.network`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SERVER_EVENT_GROUP` | `Supplier<NioEventLoopGroup>` |  |
| `SERVER_EPOLL_EVENT_GROUP` | `Supplier<EpollEventLoopGroup>` |  |
| `running` | `volatile boolean` |  |

## Methods

### ServerConnectionListener

```java
public ServerConnectionListener(MinecraftServer p_9707_)
```

**Parameters:**

- `p_9707_` (`MinecraftServer`)

**Returns:** `public`

### startTcpServerListener

```java
public void startTcpServerListener(InetAddress p_9712_, int p_9713_)
```

**Parameters:**

- `p_9712_` (`InetAddress`)
- `p_9713_` (`int`)

**Returns:** `public void`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### initChannel

```java
protected void initChannel(Channel p_9729_)
```

**Parameters:**

- `p_9729_` (`Channel`)

### startMemoryChannel

```java
public SocketAddress startMemoryChannel()
```

**Returns:** `public SocketAddress`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### initChannel

```java
protected void initChannel(Channel p_9734_)
```

**Parameters:**

- `p_9734_` (`Channel`)

### stop

```java
public void stop()
```

**Returns:** `public void`

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

### getServer

```java
public MinecraftServer getServer()
```

**Returns:** `public MinecraftServer`

### getConnections

```java
public List<Connection> getConnections()
```

**Returns:** `public List<Connection>`

### LatencySimulator

```java
public LatencySimulator(int p_143593_, int p_143594_)
```

**Parameters:**

- `p_143593_` (`int`)
- `p_143594_` (`int`)

**Returns:** `public`

### channelRead

```java
public void channelRead(ChannelHandlerContext p_143601_, Object p_143602_)
```

**Parameters:**

- `p_143601_` (`ChannelHandlerContext`)
- `p_143602_` (`Object`)

### delayDownstream

```java
private void delayDownstream(ChannelHandlerContext p_143596_, Object p_143597_)
```

**Parameters:**

- `p_143596_` (`ChannelHandlerContext`)
- `p_143597_` (`Object`)

**Returns:** `private void`

### onTimeout

```java
private void onTimeout(Timeout p_143599_)
```

**Parameters:**

- `p_143599_` (`Timeout`)

**Returns:** `private void`

### DelayedMessage

```java
public DelayedMessage(ChannelHandlerContext p_143606_, Object p_143607_)
```

**Parameters:**

- `p_143606_` (`ChannelHandlerContext`)
- `p_143607_` (`Object`)

**Returns:** `public`
