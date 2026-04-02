# Packet

**Package:** `net.minecraft.network.protocol`
**Type:** interface<T extends PacketListener>

## Methods

### type

```java
PacketType<? extends Packet<T>> type()
```

**Returns:** `PacketType<? extends Packet<T>>`

### handle

```java
void handle(T p_131342_)
```

**Parameters:**

- `p_131342_` (`T`)

### isSkippable

```java
default boolean isSkippable()
```

**Returns:** `default boolean`

### isTerminal

```java
default boolean isTerminal()
```

**Returns:** `default boolean`

### codec

```java
static <B extends ByteBuf, T extends Packet<?>> StreamCodec<B, T> codec(StreamMemberEncoder<B, T> p_319871_, StreamDecoder<B, T> p_319793_)
```

**Parameters:**

- `p_319871_` (`StreamMemberEncoder<B, T>`)
- `p_319793_` (`StreamDecoder<B, T>`)

**Returns:** `static <B extends ByteBuf, T extends Packet<?>> StreamCodec<B, T>`
