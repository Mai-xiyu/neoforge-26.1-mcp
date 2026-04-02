# ProtocolCodecBuilder

**Package:** `net.minecraft.network.protocol`
**Type:** class<B extends ByteBuf, L extends PacketListener>

## Methods

### ProtocolCodecBuilder

```java
public ProtocolCodecBuilder(PacketFlow p_320925_)
```

**Parameters:**

- `p_320925_` (`PacketFlow`)

**Returns:** `public`

### add

```java
public <T extends Packet<? super L>> ProtocolCodecBuilder<B, L> add(PacketType<T> p_319852_, StreamCodec<? super B, T> p_320657_)
```

**Parameters:**

- `p_319852_` (`PacketType<T>`)
- `p_320657_` (`StreamCodec<? super B, T>`)

**Returns:** `public <T extends Packet<? super L>> ProtocolCodecBuilder<B, L>`

### build

```java
public StreamCodec<B, Packet<? super L>> build()
```

**Returns:** `public StreamCodec<B, Packet<? super L>>`
