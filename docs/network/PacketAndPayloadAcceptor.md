# PacketAndPayloadAcceptor

**Package:** `net.neoforged.neoforge.network.bundle`
**Type:** class<L extends ClientCommonPacketListener>
**Annotations:** `@ApiStatus`

## Methods

### PacketAndPayloadAcceptor

```java
public PacketAndPayloadAcceptor(Consumer<Packet<? super L>> consumer)
```

**Parameters:**

- `consumer` (`Consumer<Packet<? super L>>`)

**Returns:** `public`

### accept

```java
public PacketAndPayloadAcceptor<L> accept(Packet<? super L> packet)
```

**Parameters:**

- `packet` (`Packet<? super L>`)

**Returns:** `public PacketAndPayloadAcceptor<L>`

### accept

```java
public PacketAndPayloadAcceptor<L> accept(CustomPacketPayload payload)
```

**Parameters:**

- `payload` (`CustomPacketPayload`)

**Returns:** `public PacketAndPayloadAcceptor<L>`
