# CompressionDecoder

**Package:** `net.minecraft.network`
**Type:** class
**Extends:** `ByteToMessageDecoder`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAXIMUM_COMPRESSED_LENGTH` | `int` |  |
| `MAXIMUM_UNCOMPRESSED_LENGTH` | `int` |  |

## Methods

### CompressionDecoder

```java
public CompressionDecoder(int p_182675_, boolean p_182676_)
```

**Parameters:**

- `p_182675_` (`int`)
- `p_182676_` (`boolean`)

**Returns:** `public`

### decode

```java
protected void decode(ChannelHandlerContext p_129441_, ByteBuf p_129442_, List<Object> p_129443_)
```

**Parameters:**

- `p_129441_` (`ChannelHandlerContext`)
- `p_129442_` (`ByteBuf`)
- `p_129443_` (`List<Object>`)

### DecoderException

```java
throw new DecoderException("Badly compressed packet - size of " + i + " is below server threshold of " + this.threshold)
```

**Parameters:**

- `this.threshold` (`"Badly compressed packet - size of " + i + " is below server threshold of " +`)

**Returns:** `throw new`

### DecoderException

```java
throw new DecoderException("Badly compressed packet - size of " + i + " is larger than protocol maximum of 8388608")
```

**Parameters:**

- `8388608"` (`"Badly compressed packet - size of " + i + " is larger than protocol maximum of`)

**Returns:** `throw new`

### setupInflaterInput

```java
private void setupInflaterInput(ByteBuf p_296004_)
```

**Parameters:**

- `p_296004_` (`ByteBuf`)

**Returns:** `private void`

### inflate

```java
private ByteBuf inflate(ChannelHandlerContext p_295791_, int p_295281_)
```

**Parameters:**

- `p_295791_` (`ChannelHandlerContext`)
- `p_295281_` (`int`)

**Returns:** `private ByteBuf`

### DecoderException

```java
throw new DecoderException("Badly compressed packet - actual length of uncompressed payload " + j + " is does not match declared size " + p_295281_)
```

**Parameters:**

- `p_295281_` (`"Badly compressed packet - actual length of uncompressed payload " + j + " is does not match declared size " +`)

**Returns:** `throw new`

### setThreshold

```java
public void setThreshold(int p_182678_, boolean p_182679_)
```

**Parameters:**

- `p_182678_` (`int`)
- `p_182679_` (`boolean`)

**Returns:** `public void`
