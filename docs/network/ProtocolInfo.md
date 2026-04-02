# ProtocolInfo

**Package:** `net.minecraft.network`
**Type:** interface<T extends PacketListener>

## Methods

### id

```java
ConnectionProtocol id()
```

**Returns:** `ConnectionProtocol`

### flow

```java
PacketFlow flow()
```

**Returns:** `PacketFlow`

### codec

```java
StreamCodec<ByteBuf, Packet<? super T>> codec()
```

**Returns:** `StreamCodec<ByteBuf, Packet<? super T>>`

### bundlerInfo

```java
BundlerInfo bundlerInfo()
```

**Returns:** `BundlerInfo`

### bind

```java
ProtocolInfo<T> bind(Function<ByteBuf, B> p_319787_)
```

**Parameters:**

- `p_319787_` (`Function<ByteBuf, B>`)

**Returns:** `ProtocolInfo<T>`

### id

```java
ConnectionProtocol id()
```

**Returns:** `ConnectionProtocol`

### flow

```java
PacketFlow flow()
```

**Returns:** `PacketFlow`

### listPackets

```java
void listPackets(ProtocolInfo.Unbound.PacketVisitor p_352215_)
```

**Parameters:**

- `p_352215_` (`ProtocolInfo.Unbound.PacketVisitor`)

### accept

```java
void accept(PacketType<?> p_352070_, int p_352333_)
```

**Parameters:**

- `p_352070_` (`PacketType<?>`)
- `p_352333_` (`int`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Unbound` | interface |  |
| `PacketVisitor` | interface |  |
