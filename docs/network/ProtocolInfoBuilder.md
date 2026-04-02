# ProtocolInfoBuilder

**Package:** `net.minecraft.network.protocol`
**Type:** class<T extends PacketListener, B extends ByteBuf>

## Methods

### ProtocolInfoBuilder

```java
public ProtocolInfoBuilder(ConnectionProtocol p_320213_, PacketFlow p_320424_)
```

**Parameters:**

- `p_320213_` (`ConnectionProtocol`)
- `p_320424_` (`PacketFlow`)

**Returns:** `public`

### addPacket

```java
public <P extends Packet<? super T>> ProtocolInfoBuilder<T, B> addPacket(PacketType<P> p_320673_, StreamCodec<? super B, P> p_319828_)
```

**Parameters:**

- `p_320673_` (`PacketType<P>`)
- `p_319828_` (`StreamCodec<? super B, P>`)

**Returns:** `public <P extends Packet<? super T>> ProtocolInfoBuilder<T, B>`

### withBundlePacket

```java
public <P extends BundlePacket<? super T>, D extends BundleDelimiterPacket<? super T>> ProtocolInfoBuilder<T, B> withBundlePacket(PacketType<P> p_320954_, Function<Iterable<Packet<? super T>>, P> p_320241_, D p_320202_)
```

**Parameters:**

- `p_320954_` (`PacketType<P>`)
- `p_320241_` (`Function<Iterable<Packet<? super T>>, P>`)
- `p_320202_` (`D`)

**Returns:** `public <P extends BundlePacket<? super T>, D extends BundleDelimiterPacket<? super T>> ProtocolInfoBuilder<T, B>`

### buildPacketCodec

```java
StreamCodec<ByteBuf, Packet<? super T>> buildPacketCodec(Function<ByteBuf, B> p_320922_, List<ProtocolInfoBuilder.CodecEntry<T, ?, B>> p_320733_)
```

**Parameters:**

- `p_320922_` (`Function<ByteBuf, B>`)
- `p_320733_` (`List<ProtocolInfoBuilder.CodecEntry<T, ?, B>>`)

**Returns:** `StreamCodec<ByteBuf, Packet<? super T>>`

### build

```java
public ProtocolInfo<T> build(Function<ByteBuf, B> p_319806_)
```

**Parameters:**

- `p_319806_` (`Function<ByteBuf, B>`)

**Returns:** `public ProtocolInfo<T>`

### buildUnbound

```java
public ProtocolInfo.Unbound<T, B> buildUnbound()
```

**Returns:** `public ProtocolInfo.Unbound<T, B>`

### bind

```java
public ProtocolInfo<T> bind(Function<ByteBuf, B> p_352173_)
```

**Parameters:**

- `p_352173_` (`Function<ByteBuf, B>`)

**Returns:** `ProtocolInfo<T>`

### id

```java
public ConnectionProtocol id()
```

**Returns:** `ConnectionProtocol`

### flow

```java
public PacketFlow flow()
```

**Returns:** `PacketFlow`

### listPackets

```java
public void listPackets(ProtocolInfo.Unbound.PacketVisitor p_352332_)
```

**Parameters:**

- `p_352332_` (`ProtocolInfo.Unbound.PacketVisitor`)

### protocol

```java
<L extends PacketListener, B extends ByteBuf> private static <L extends PacketListener, B extends ByteBuf> ProtocolInfo.Unbound<L, B> protocol(ConnectionProtocol p_320849_, PacketFlow p_320146_, Consumer<ProtocolInfoBuilder<L, B>> p_320140_)
```

**Parameters:**

- `p_320849_` (`ConnectionProtocol`)
- `p_320146_` (`PacketFlow`)
- `p_320140_` (`Consumer<ProtocolInfoBuilder<L, B>>`)

**Returns:** `private static <L extends PacketListener, B extends ByteBuf> ProtocolInfo.Unbound<L, B>`

### serverboundProtocol

```java
<T extends ServerboundPacketListener, B extends ByteBuf> public static <T extends ServerboundPacketListener, B extends ByteBuf> ProtocolInfo.Unbound<T, B> serverboundProtocol(ConnectionProtocol p_319767_, Consumer<ProtocolInfoBuilder<T, B>> p_320799_)
```

**Parameters:**

- `p_319767_` (`ConnectionProtocol`)
- `p_320799_` (`Consumer<ProtocolInfoBuilder<T, B>>`)

**Returns:** `public static <T extends ServerboundPacketListener, B extends ByteBuf> ProtocolInfo.Unbound<T, B>`

### protocol

```java
return protocol()
```

**Returns:** `return`

### clientboundProtocol

```java
<T extends ClientboundPacketListener, B extends ByteBuf> public static <T extends ClientboundPacketListener, B extends ByteBuf> ProtocolInfo.Unbound<T, B> clientboundProtocol(ConnectionProtocol p_320428_, Consumer<ProtocolInfoBuilder<T, B>> p_320292_)
```

**Parameters:**

- `p_320428_` (`ConnectionProtocol`)
- `p_320292_` (`Consumer<ProtocolInfoBuilder<T, B>>`)

**Returns:** `public static <T extends ClientboundPacketListener, B extends ByteBuf> ProtocolInfo.Unbound<T, B>`

### protocol

```java
return protocol()
```

**Returns:** `return`

### addToBuilder

```java
public void addToBuilder(ProtocolCodecBuilder<ByteBuf, T> p_320857_, Function<ByteBuf, B> p_320646_)
```

**Parameters:**

- `p_320857_` (`ProtocolCodecBuilder<ByteBuf, T>`)
- `p_320646_` (`Function<ByteBuf, B>`)

**Returns:** `public void`
