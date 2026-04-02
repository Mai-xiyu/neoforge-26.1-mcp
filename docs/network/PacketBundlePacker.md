# PacketBundlePacker

**Package:** `net.minecraft.network`
**Type:** class
**Extends:** `MessageToMessageDecoder<Packet<?>>`

## Methods

### PacketBundlePacker

```java
public PacketBundlePacker(BundlerInfo p_320870_)
```

**Parameters:**

- `p_320870_` (`BundlerInfo`)

**Returns:** `public`

### decode

```java
protected void decode(ChannelHandlerContext p_265208_, Packet<?> p_265182_, List<Object> p_265368_)
```

**Parameters:**

- `p_265208_` (`ChannelHandlerContext`)
- `p_265182_` (`Packet<?>`)
- `p_265368_` (`List<Object>`)

**Returns:** `protected void`

### verifyNonTerminalPacket

```java
 verifyNonTerminalPacket()
```

**Returns:** ``

### verifyNonTerminalPacket

```java
 verifyNonTerminalPacket()
```

**Returns:** ``

### verifyNonTerminalPacket

```java
private static void verifyNonTerminalPacket(Packet<?> p_319833_)
```

**Parameters:**

- `p_319833_` (`Packet<?>`)

**Returns:** `private static void`

### DecoderException

```java
throw new DecoderException("Terminal message received in bundle")
```

**Parameters:**

- `bundle"` (`"Terminal message received in`)

**Returns:** `throw new`
