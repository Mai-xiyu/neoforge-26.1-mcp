# LegacyServerPinger

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Extends:** `SimpleChannelInboundHandler<ByteBuf>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### LegacyServerPinger

```java
public LegacyServerPinger(ServerAddress p_295697_, LegacyServerPinger.Output p_295291_)
```

**Parameters:**

- `p_295697_` (`ServerAddress`)
- `p_295291_` (`LegacyServerPinger.Output`)

**Returns:** `public`

### channelActive

```java
public void channelActive(ChannelHandlerContext p_294106_)
```

**Parameters:**

- `p_294106_` (`ChannelHandlerContext`)

### channelRead0

```java
protected void channelRead0(ChannelHandlerContext p_295830_, ByteBuf p_294393_)
```

**Parameters:**

- `p_295830_` (`ChannelHandlerContext`)
- `p_294393_` (`ByteBuf`)

**Returns:** `protected void`

### exceptionCaught

```java
public void exceptionCaught(ChannelHandlerContext p_296319_, Throwable p_296239_)
```

**Parameters:**

- `p_296319_` (`ChannelHandlerContext`)
- `p_296239_` (`Throwable`)

### handleResponse

```java
void handleResponse(int p_295657_, String p_296381_, String p_295397_, int p_295673_, int p_295810_)
```

**Parameters:**

- `p_295657_` (`int`)
- `p_296381_` (`String`)
- `p_295397_` (`String`)
- `p_295673_` (`int`)
- `p_295810_` (`int`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Output` | interface |  |
