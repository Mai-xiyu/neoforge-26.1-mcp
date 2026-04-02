# Connection

**Package:** `net.minecraft.network`
**Type:** class
**Extends:** `SimpleChannelInboundHandler<Packet<?>>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ROOT_MARKER` | `Marker` |  |
| `PACKET_MARKER` | `Marker` |  |
| `PACKET_RECEIVED_MARKER` | `Marker` |  |
| `PACKET_SENT_MARKER` | `Marker` |  |
| `NETWORK_WORKER_GROUP` | `Supplier<NioEventLoopGroup>` |  |
| `NETWORK_EPOLL_WORKER_GROUP` | `Supplier<EpollEventLoopGroup>` |  |
| `LOCAL_WORKER_GROUP` | `Supplier<DefaultEventLoopGroup>` |  |

## Methods

### Connection

```java
public Connection(PacketFlow p_129482_)
```

**Parameters:**

- `p_129482_` (`PacketFlow`)

**Returns:** `public`

### channelActive

```java
public void channelActive(ChannelHandlerContext p_129525_)
```

**Parameters:**

- `p_129525_` (`ChannelHandlerContext`)

### channelInactive

```java
public void channelInactive(ChannelHandlerContext p_129527_)
```

**Parameters:**

- `p_129527_` (`ChannelHandlerContext`)

### exceptionCaught

```java
public void exceptionCaught(ChannelHandlerContext p_129533_, Throwable p_129534_)
```

**Parameters:**

- `p_129533_` (`ChannelHandlerContext`)
- `p_129534_` (`Throwable`)

### channelRead0

```java
protected void channelRead0(ChannelHandlerContext p_129487_, Packet<?> p_129488_)
```

**Parameters:**

- `p_129487_` (`ChannelHandlerContext`)
- `p_129488_` (`Packet<?>`)

**Returns:** `protected void`

### IllegalStateException

```java
throw new IllegalStateException("Received a packet before the packet listener was initialized")
```

**Parameters:**

- `initialized"` (`"Received a packet before the packet listener was`)

**Returns:** `throw new`

### genericsFtw

```java
 genericsFtw()
```

**Returns:** ``

### genericsFtw

```java
<T extends PacketListener> private static <T extends PacketListener> void genericsFtw(Packet<T> p_129518_, PacketListener p_129519_)
```

**Parameters:**

- `p_129518_` (`Packet<T>`)
- `p_129519_` (`PacketListener`)

**Returns:** `private static <T extends PacketListener> void`

### validateListener

```java
private void validateListener(ProtocolInfo<?> p_320630_, PacketListener p_320459_)
```

**Parameters:**

- `p_320630_` (`ProtocolInfo<?>`)
- `p_320459_` (`PacketListener`)

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("Trying to set listener for wrong side: connection is " + this.receiving + ", but listener is " + packetflow)
```

**Parameters:**

- `"` (`"Trying to set listener for wrong side: connection is " + this.receiving +`)
- `packetflow` (`but listener is " +`)

**Returns:** `throw new`

### syncAfterConfigurationChange

```java
private static void syncAfterConfigurationChange(ChannelFuture p_341671_)
```

**Parameters:**

- `p_341671_` (`ChannelFuture`)

**Returns:** `private static void`

### setupInboundProtocol

```java
<T extends PacketListener> public <T extends PacketListener> void setupInboundProtocol(ProtocolInfo<T> p_320903_, T p_320940_)
```

**Parameters:**

- `p_320903_` (`ProtocolInfo<T>`)
- `p_320940_` (`T`)

**Returns:** `public <T extends PacketListener> void`

### setupOutboundProtocol

```java
public void setupOutboundProtocol(ProtocolInfo<?> p_319974_)
```

**Parameters:**

- `p_319974_` (`ProtocolInfo<?>`)

**Returns:** `public void`

### setListenerForServerboundHandshake

```java
public void setListenerForServerboundHandshake(PacketListener p_294829_)
```

**Parameters:**

- `p_294829_` (`PacketListener`)

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Listener already set")
```

**Parameters:**

- `set"` (`"Listener already`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Invalid initial listener")
```

**Parameters:**

- `listener"` (`"Invalid initial`)

**Returns:** `throw new`

### initiateServerboundStatusConnection

```java
public void initiateServerboundStatusConnection(String p_294457_, int p_294964_, ClientStatusPacketListener p_295216_)
```

**Parameters:**

- `p_294457_` (`String`)
- `p_294964_` (`int`)
- `p_295216_` (`ClientStatusPacketListener`)

**Returns:** `public void`

### initiateServerboundPlayConnection

```java
public void initiateServerboundPlayConnection(String p_294126_, int p_296126_, ClientLoginPacketListener p_296049_)
```

**Parameters:**

- `p_294126_` (`String`)
- `p_296126_` (`int`)
- `p_296049_` (`ClientLoginPacketListener`)

**Returns:** `public void`

### initiateServerboundPlayConnection

```java
<S extends ServerboundPacketListener, C extends ClientboundPacketListener> public <S extends ServerboundPacketListener, C extends ClientboundPacketListener> void initiateServerboundPlayConnection(String p_320416_, int p_320043_, ProtocolInfo<S> p_320648_, ProtocolInfo<C> p_320919_, C p_319801_, boolean p_319971_)
```

**Parameters:**

- `p_320416_` (`String`)
- `p_320043_` (`int`)
- `p_320648_` (`ProtocolInfo<S>`)
- `p_320919_` (`ProtocolInfo<C>`)
- `p_319801_` (`C`)
- `p_319971_` (`boolean`)

**Returns:** `public <S extends ServerboundPacketListener, C extends ClientboundPacketListener> void`

### initiateServerboundConnection

```java
<S extends ServerboundPacketListener, C extends ClientboundPacketListener> private <S extends ServerboundPacketListener, C extends ClientboundPacketListener> void initiateServerboundConnection(String p_294633_, int p_295471_, ProtocolInfo<S> p_320358_, ProtocolInfo<C> p_320237_, C p_320783_, ClientIntent p_294281_)
```

**Parameters:**

- `p_294633_` (`String`)
- `p_295471_` (`int`)
- `p_320358_` (`ProtocolInfo<S>`)
- `p_320237_` (`ProtocolInfo<C>`)
- `p_320783_` (`C`)
- `p_294281_` (`ClientIntent`)

**Returns:** `private <S extends ServerboundPacketListener, C extends ClientboundPacketListener> void`

### IllegalStateException

```java
throw new IllegalStateException("Mismatched initial protocols")
```

**Parameters:**

- `protocols"` (`"Mismatched initial`)

**Returns:** `throw new`

### send

```java
public void send(Packet<?> p_129513_)
```

**Parameters:**

- `p_129513_` (`Packet<?>`)

**Returns:** `public void`

### send

```java
public void send(Packet<?> p_243248_, PacketSendListener p_243316_)
```

**Parameters:**

- `p_243248_` (`Packet<?>`)
- `p_243316_` (`PacketSendListener`)

**Returns:** `public void`

### send

```java
public void send(Packet<?> p_295839_, PacketSendListener p_294866_, boolean p_294265_)
```

**Parameters:**

- `p_295839_` (`Packet<?>`)
- `p_294866_` (`PacketSendListener`)
- `p_294265_` (`boolean`)

**Returns:** `public void`

### runOnceConnected

```java
public void runOnceConnected(Consumer<Connection> p_294674_)
```

**Parameters:**

- `p_294674_` (`Consumer<Connection>`)

**Returns:** `public void`

### sendPacket

```java
private void sendPacket(Packet<?> p_129521_, PacketSendListener p_243246_, boolean p_294510_)
```

**Parameters:**

- `p_129521_` (`Packet<?>`)
- `p_243246_` (`PacketSendListener`)
- `p_294510_` (`boolean`)

**Returns:** `private void`

### doSendPacket

```java
private void doSendPacket(Packet<?> p_243260_, PacketSendListener p_243290_, boolean p_294125_)
```

**Parameters:**

- `p_243260_` (`Packet<?>`)
- `p_243290_` (`PacketSendListener`)
- `p_294125_` (`boolean`)

**Returns:** `private void`

### flushChannel

```java
public void flushChannel()
```

**Returns:** `public void`

### flush

```java
private void flush()
```

**Returns:** `private void`

### flushQueue

```java
private void flushQueue()
```

**Returns:** `private void`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### tick

```java
public void tick()
```

**Returns:** `public void`

### tickSecond

```java
protected void tickSecond()
```

**Returns:** `protected void`

### getRemoteAddress

```java
public SocketAddress getRemoteAddress()
```

**Returns:** `public SocketAddress`

### getLoggableAddress

```java
public String getLoggableAddress(boolean p_295875_)
```

**Parameters:**

- `p_295875_` (`boolean`)

**Returns:** `public String`

### disconnect

```java
public void disconnect(Component p_129508_)
```

**Parameters:**

- `p_129508_` (`Component`)

**Returns:** `public void`

### disconnect

```java
public void disconnect(DisconnectionDetails p_350867_)
```

**Parameters:**

- `p_350867_` (`DisconnectionDetails`)

**Returns:** `public void`

### isMemoryConnection

```java
public boolean isMemoryConnection()
```

**Returns:** `public boolean`

### getReceiving

```java
public PacketFlow getReceiving()
```

**Returns:** `public PacketFlow`

### getSending

```java
public PacketFlow getSending()
```

**Returns:** `public PacketFlow`

### connectToServer

```java
public static Connection connectToServer(InetSocketAddress p_178301_, boolean p_178302_, LocalSampleLogger p_324075_)
```

**Parameters:**

- `p_178301_` (`InetSocketAddress`)
- `p_178302_` (`boolean`)
- `p_324075_` (`LocalSampleLogger`)

**Returns:** `public static Connection`

### connect

```java
public static ChannelFuture connect(InetSocketAddress p_290034_, boolean p_290035_, Connection p_290031_)
```

**Parameters:**

- `p_290034_` (`InetSocketAddress`)
- `p_290035_` (`boolean`)
- `p_290031_` (`Connection`)

**Returns:** `public static ChannelFuture`

### initChannel

```java
protected void initChannel(Channel p_129552_)
```

**Parameters:**

- `p_129552_` (`Channel`)

### outboundHandlerName

```java
private static String outboundHandlerName(boolean p_319809_)
```

**Parameters:**

- `p_319809_` (`boolean`)

**Returns:** `private static String`

### inboundHandlerName

```java
private static String inboundHandlerName(boolean p_320267_)
```

**Parameters:**

- `p_320267_` (`boolean`)

**Returns:** `private static String`

### configurePacketHandler

```java
public void configurePacketHandler(ChannelPipeline p_302007_)
```

**Parameters:**

- `p_302007_` (`ChannelPipeline`)

**Returns:** `public void`

### ChannelOutboundHandlerAdapter

```java
, new ChannelOutboundHandlerAdapter()
```

**Returns:** `, new`

### write

```java
public void write(ChannelHandlerContext p_320587_, Object p_320392_, ChannelPromise p_320515_)
```

**Parameters:**

- `p_320587_` (`ChannelHandlerContext`)
- `p_320392_` (`Object`)
- `p_320515_` (`ChannelPromise`)

### configureSerialization

```java
public static void configureSerialization(ChannelPipeline p_265436_, PacketFlow p_265104_, boolean p_341592_, BandwidthDebugMonitor p_299246_)
```

**Parameters:**

- `p_265436_` (`ChannelPipeline`)
- `p_265104_` (`PacketFlow`)
- `p_341592_` (`boolean`)
- `p_299246_` (`BandwidthDebugMonitor`)

**Returns:** `public static void`

### createFrameEncoder

```java
private static ChannelOutboundHandler createFrameEncoder(boolean p_341616_)
```

**Parameters:**

- `p_341616_` (`boolean`)

**Returns:** `private static ChannelOutboundHandler`

### createFrameDecoder

```java
private static ChannelInboundHandler createFrameDecoder(BandwidthDebugMonitor p_341605_, boolean p_341702_)
```

**Parameters:**

- `p_341605_` (`BandwidthDebugMonitor`)
- `p_341702_` (`boolean`)

**Returns:** `private static ChannelInboundHandler`

### Varint21FrameDecoder

```java
return new Varint21FrameDecoder()
```

**Returns:** `return new`

### configureInMemoryPipeline

```java
public static void configureInMemoryPipeline(ChannelPipeline p_295541_, PacketFlow p_294540_)
```

**Parameters:**

- `p_295541_` (`ChannelPipeline`)
- `p_294540_` (`PacketFlow`)

**Returns:** `public static void`

### configureSerialization

```java
 configureSerialization()
```

**Returns:** ``

### connectToLocalServer

```java
public static Connection connectToLocalServer(SocketAddress p_129494_)
```

**Parameters:**

- `p_129494_` (`SocketAddress`)

**Returns:** `public static Connection`

### initChannel

```java
protected void initChannel(Channel p_320092_)
```

**Parameters:**

- `p_320092_` (`Channel`)

### setEncryptionKey

```java
public void setEncryptionKey(Cipher p_129496_, Cipher p_129497_)
```

**Parameters:**

- `p_129496_` (`Cipher`)
- `p_129497_` (`Cipher`)

**Returns:** `public void`

### isEncrypted

```java
public boolean isEncrypted()
```

**Returns:** `public boolean`

### isConnected

```java
public boolean isConnected()
```

**Returns:** `public boolean`

### isConnecting

```java
public boolean isConnecting()
```

**Returns:** `public boolean`

### getPacketListener

```java
public PacketListener getPacketListener()
```

**Returns:** `PacketListener`

### getDisconnectionDetails

```java
public DisconnectionDetails getDisconnectionDetails()
```

**Returns:** `DisconnectionDetails`

### setReadOnly

```java
public void setReadOnly()
```

**Returns:** `public void`

### setupCompression

```java
public void setupCompression(int p_129485_, boolean p_182682_)
```

**Parameters:**

- `p_129485_` (`int`)
- `p_182682_` (`boolean`)

**Returns:** `public void`

### handleDisconnection

```java
public void handleDisconnection()
```

**Returns:** `public void`

### getAverageReceivedPackets

```java
public float getAverageReceivedPackets()
```

**Returns:** `public float`

### getAverageSentPackets

```java
public float getAverageSentPackets()
```

**Returns:** `public float`

### setBandwidthLogger

```java
public void setBandwidthLogger(LocalSampleLogger p_323799_)
```

**Parameters:**

- `p_323799_` (`LocalSampleLogger`)

**Returns:** `public void`

### channel

```java
public Channel channel()
```

**Returns:** `public Channel`

### getDirection

```java
public PacketFlow getDirection()
```

**Returns:** `public PacketFlow`

### getInboundProtocol

```java
public ProtocolInfo<?> getInboundProtocol()
```

**Returns:** `public ProtocolInfo<?>`
