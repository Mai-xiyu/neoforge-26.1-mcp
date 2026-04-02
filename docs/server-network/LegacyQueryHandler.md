# LegacyQueryHandler

**Package:** `net.minecraft.server.network`
**Type:** class
**Extends:** `ChannelInboundHandlerAdapter`
**Side:** 🖧 Server

## Methods

### LegacyQueryHandler

```java
public LegacyQueryHandler(ServerInfo p_296029_)
```

**Parameters:**

- `p_296029_` (`ServerInfo`)

**Returns:** `public`

### channelRead

```java
public void channelRead(ChannelHandlerContext p_9686_, Object p_9687_)
```

**Parameters:**

- `p_9686_` (`ChannelHandlerContext`)
- `p_9687_` (`Object`)

### readCustomPayloadPacket

```java
private static boolean readCustomPayloadPacket(ByteBuf p_294725_)
```

**Parameters:**

- `p_294725_` (`ByteBuf`)

**Returns:** `private static boolean`

### createVersion0Response

```java
private static String createVersion0Response(ServerInfo p_294449_)
```

**Parameters:**

- `p_294449_` (`ServerInfo`)

**Returns:** `private static String`

### createVersion1Response

```java
private static String createVersion1Response(ServerInfo p_295503_)
```

**Parameters:**

- `p_295503_` (`ServerInfo`)

**Returns:** `private static String`

### sendFlushAndClose

```java
private static void sendFlushAndClose(ChannelHandlerContext p_9681_, ByteBuf p_9682_)
```

**Parameters:**

- `p_9681_` (`ChannelHandlerContext`)
- `p_9682_` (`ByteBuf`)

**Returns:** `private static void`

### createLegacyDisconnectPacket

```java
private static ByteBuf createLegacyDisconnectPacket(ByteBufAllocator p_294764_, String p_296452_)
```

**Parameters:**

- `p_294764_` (`ByteBufAllocator`)
- `p_296452_` (`String`)

**Returns:** `private static ByteBuf`
