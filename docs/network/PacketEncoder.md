# PacketEncoder

**Package:** `net.minecraft.network`
**Type:** class<T extends PacketListener> extends MessageToByteEncoder<Packet<T>>

## Methods

### PacketEncoder

```java
public PacketEncoder(ProtocolInfo<T> p_320006_)
```

**Parameters:**

- `p_320006_` (`ProtocolInfo<T>`)

**Returns:** `public`

### encode

```java
protected void encode(ChannelHandlerContext p_130545_, Packet<T> p_130546_, ByteBuf p_130547_)
```

**Parameters:**

- `p_130545_` (`ChannelHandlerContext`)
- `p_130546_` (`Packet<T>`)
- `p_130547_` (`ByteBuf`)

**Returns:** `protected void`

### SkipPacketException

```java
throw new SkipPacketException()
```

**Returns:** `throw new`

### getProtocolInfo

```java
public ProtocolInfo<T> getProtocolInfo()
```

**Returns:** `public ProtocolInfo<T>`
