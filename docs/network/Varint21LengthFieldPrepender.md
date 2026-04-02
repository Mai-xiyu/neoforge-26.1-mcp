# Varint21LengthFieldPrepender

**Package:** `net.minecraft.network`
**Type:** class
**Extends:** `MessageToByteEncoder<ByteBuf>`
**Annotations:** `@Sharable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_VARINT21_BYTES` | `int` |  |

## Methods

### encode

```java
protected void encode(ChannelHandlerContext p_130571_, ByteBuf p_130572_, ByteBuf p_130573_)
```

**Parameters:**

- `p_130571_` (`ChannelHandlerContext`)
- `p_130572_` (`ByteBuf`)
- `p_130573_` (`ByteBuf`)

**Returns:** `protected void`

### EncoderException

```java
throw new EncoderException("Packet too large: size " + i + " is over 8")
```

**Parameters:**

- `8"` (`"Packet too large: size " + i + " is over`)

**Returns:** `throw new`
