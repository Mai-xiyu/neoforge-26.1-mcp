# CompressionEncoder

**Package:** `net.minecraft.network`
**Type:** class
**Extends:** `MessageToByteEncoder<ByteBuf>`

## Methods

### CompressionEncoder

```java
public CompressionEncoder(int p_129448_)
```

**Parameters:**

- `p_129448_` (`int`)

**Returns:** `public`

### encode

```java
protected void encode(ChannelHandlerContext p_129452_, ByteBuf p_129453_, ByteBuf p_129454_)
```

**Parameters:**

- `p_129452_` (`ChannelHandlerContext`)
- `p_129453_` (`ByteBuf`)
- `p_129454_` (`ByteBuf`)

**Returns:** `protected void`

### getThreshold

```java
public int getThreshold()
```

**Returns:** `public int`

### setThreshold

```java
public void setThreshold(int p_129450_)
```

**Parameters:**

- `p_129450_` (`int`)

**Returns:** `public void`
