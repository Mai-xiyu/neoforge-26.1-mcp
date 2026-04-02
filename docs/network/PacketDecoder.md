# PacketDecoder

**Package:** `net.minecraft.network`
**Type:** class<T extends PacketListener>
**Extends:** `ByteToMessageDecoder`
**Implements:** `ProtocolSwapHandler`

## Methods

### PacketDecoder

```java
public PacketDecoder(ProtocolInfo<T> p_320637_)
```

**Parameters:**

- `p_320637_` (`ProtocolInfo<T>`)

**Returns:** `public`

### decode

```java
protected void decode(ChannelHandlerContext p_130535_, ByteBuf p_130536_, List<Object> p_130537_)
```

**Parameters:**

- `p_130535_` (`ChannelHandlerContext`)
- `p_130536_` (`ByteBuf`)
- `p_130537_` (`List<Object>`)
