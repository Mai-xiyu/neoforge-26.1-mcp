# Varint21FrameDecoder

**Package:** `net.minecraft.network`
**Type:** class
**Extends:** `ByteToMessageDecoder`

## Methods

### Varint21FrameDecoder

```java
public Varint21FrameDecoder(BandwidthDebugMonitor p_298640_)
```

**Parameters:**

- `p_298640_` (`BandwidthDebugMonitor`)

**Returns:** `public`

### handlerRemoved0

```java
protected void handlerRemoved0(ChannelHandlerContext p_294580_)
```

**Parameters:**

- `p_294580_` (`ChannelHandlerContext`)

### copyVarint

```java
private static boolean copyVarint(ByteBuf p_294780_, ByteBuf p_294299_)
```

**Parameters:**

- `p_294780_` (`ByteBuf`)
- `p_294299_` (`ByteBuf`)

**Returns:** `private static boolean`

### CorruptedFrameException

```java
throw new CorruptedFrameException("length wider than 21-bit")
```

**Parameters:**

- `21-bit"` (`"length wider than`)

**Returns:** `throw new`

### decode

```java
protected void decode(ChannelHandlerContext p_130566_, ByteBuf p_130567_, List<Object> p_130568_)
```

**Parameters:**

- `p_130566_` (`ChannelHandlerContext`)
- `p_130567_` (`ByteBuf`)
- `p_130568_` (`List<Object>`)
