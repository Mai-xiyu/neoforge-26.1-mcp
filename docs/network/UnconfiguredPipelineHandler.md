# UnconfiguredPipelineHandler

**Package:** `net.minecraft.network`
**Type:** class

## Methods

### setupInboundProtocol

```java
<T extends PacketListener> public static <T extends PacketListener> UnconfiguredPipelineHandler.InboundConfigurationTask setupInboundProtocol(ProtocolInfo<T> p_320435_)
```

**Parameters:**

- `p_320435_` (`ProtocolInfo<T>`)

**Returns:** `public static <T extends PacketListener> UnconfiguredPipelineHandler.InboundConfigurationTask`

### setupInboundHandler

```java
private static UnconfiguredPipelineHandler.InboundConfigurationTask setupInboundHandler(ChannelInboundHandler p_320340_)
```

**Parameters:**

- `p_320340_` (`ChannelInboundHandler`)

**Returns:** `private static UnconfiguredPipelineHandler.InboundConfigurationTask`

### setupOutboundProtocol

```java
<T extends PacketListener> public static <T extends PacketListener> UnconfiguredPipelineHandler.OutboundConfigurationTask setupOutboundProtocol(ProtocolInfo<T> p_320204_)
```

**Parameters:**

- `p_320204_` (`ProtocolInfo<T>`)

**Returns:** `public static <T extends PacketListener> UnconfiguredPipelineHandler.OutboundConfigurationTask`

### setupOutboundHandler

```java
private static UnconfiguredPipelineHandler.OutboundConfigurationTask setupOutboundHandler(ChannelOutboundHandler p_319887_)
```

**Parameters:**

- `p_319887_` (`ChannelOutboundHandler`)

**Returns:** `private static UnconfiguredPipelineHandler.OutboundConfigurationTask`

### channelRead

```java
public void channelRead(ChannelHandlerContext p_319789_, Object p_320107_)
```

**Parameters:**

- `p_319789_` (`ChannelHandlerContext`)
- `p_320107_` (`Object`)

### DecoderException

```java
throw new DecoderException("Pipeline has no inbound protocol configured, can't process packet " + p_320107_)
```

**Parameters:**

- `configured` (`"Pipeline has no inbound protocol`)
- `p_320107_` (`can't process packet " +`)

**Returns:** `throw new`

### write

```java
public void write(ChannelHandlerContext p_320891_, Object p_320121_, ChannelPromise p_320677_)
```

**Parameters:**

- `p_320891_` (`ChannelHandlerContext`)
- `p_320121_` (`Object`)
- `p_320677_` (`ChannelPromise`)

### run

```java
void run(ChannelHandlerContext p_320322_)
```

**Parameters:**

- `p_320322_` (`ChannelHandlerContext`)

### andThen

```java
default UnconfiguredPipelineHandler.InboundConfigurationTask andThen(UnconfiguredPipelineHandler.InboundConfigurationTask p_320407_)
```

**Parameters:**

- `p_320407_` (`UnconfiguredPipelineHandler.InboundConfigurationTask`)

**Returns:** `default UnconfiguredPipelineHandler.InboundConfigurationTask`

### write

```java
public void write(ChannelHandlerContext p_320511_, Object p_319817_, ChannelPromise p_320083_)
```

**Parameters:**

- `p_320511_` (`ChannelHandlerContext`)
- `p_319817_` (`Object`)
- `p_320083_` (`ChannelPromise`)

### EncoderException

```java
throw new EncoderException("Pipeline has no outbound protocol configured, can't process packet " + p_319817_)
```

**Parameters:**

- `configured` (`"Pipeline has no outbound protocol`)
- `p_319817_` (`can't process packet " +`)

**Returns:** `throw new`

### run

```java
void run(ChannelHandlerContext p_320186_)
```

**Parameters:**

- `p_320186_` (`ChannelHandlerContext`)

### andThen

```java
default UnconfiguredPipelineHandler.OutboundConfigurationTask andThen(UnconfiguredPipelineHandler.OutboundConfigurationTask p_320148_)
```

**Parameters:**

- `p_320148_` (`UnconfiguredPipelineHandler.OutboundConfigurationTask`)

**Returns:** `default UnconfiguredPipelineHandler.OutboundConfigurationTask`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Inbound` | class |  |
| `InboundConfigurationTask` | interface |  |
| `Outbound` | class |  |
| `OutboundConfigurationTask` | interface |  |
