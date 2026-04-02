# PayloadRegistrar

**Package:** `net.neoforged.neoforge.network.registration`
**Type:** class

## Description

Builder-style helper for registering `CustomPacketPayload`s, used for modded networking.
@see Class-level documentation on `RegisterPayloadHandlersEvent` for baseline rules.
@see Method-level documentation on `RegisterPayloadHandlersEvent#register` for parameter information.

## Methods

### PayloadRegistrar

```java
public PayloadRegistrar(String version)
```

**Parameters:**

- `version` (`String`)

**Returns:** `public`

### PayloadRegistrar

```java
private PayloadRegistrar(PayloadRegistrar source)
```

**Parameters:**

- `source` (`PayloadRegistrar`)

**Returns:** `private`

### playToClient

```java
public <T extends CustomPacketPayload> PayloadRegistrar playToClient(CustomPacketPayload.Type<T> type, StreamCodec<? super RegistryFriendlyByteBuf, T> reader, IPayloadHandler<T> handler)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<T>`)
- `reader` (`StreamCodec<? super RegistryFriendlyByteBuf, T>`)
- `handler` (`IPayloadHandler<T>`)

**Returns:** `PayloadRegistrar`

### playToServer

```java
public <T extends CustomPacketPayload> PayloadRegistrar playToServer(CustomPacketPayload.Type<T> type, StreamCodec<? super RegistryFriendlyByteBuf, T> reader, IPayloadHandler<T> handler)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<T>`)
- `reader` (`StreamCodec<? super RegistryFriendlyByteBuf, T>`)
- `handler` (`IPayloadHandler<T>`)

**Returns:** `PayloadRegistrar`

### playBidirectional

```java
public <T extends CustomPacketPayload> PayloadRegistrar playBidirectional(CustomPacketPayload.Type<T> type, StreamCodec<? super RegistryFriendlyByteBuf, T> reader, IPayloadHandler<T> handler)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<T>`)
- `reader` (`StreamCodec<? super RegistryFriendlyByteBuf, T>`)
- `handler` (`IPayloadHandler<T>`)

**Returns:** `PayloadRegistrar`

### configurationToClient

```java
public <T extends CustomPacketPayload> PayloadRegistrar configurationToClient(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> reader, IPayloadHandler<T> handler)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<T>`)
- `reader` (`StreamCodec<? super FriendlyByteBuf, T>`)
- `handler` (`IPayloadHandler<T>`)

**Returns:** `PayloadRegistrar`

### configurationToServer

```java
public <T extends CustomPacketPayload> PayloadRegistrar configurationToServer(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> reader, IPayloadHandler<T> handler)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<T>`)
- `reader` (`StreamCodec<? super FriendlyByteBuf, T>`)
- `handler` (`IPayloadHandler<T>`)

**Returns:** `PayloadRegistrar`

### configurationBidirectional

```java
public <T extends CustomPacketPayload> PayloadRegistrar configurationBidirectional(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> reader, IPayloadHandler<T> handler)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<T>`)
- `reader` (`StreamCodec<? super FriendlyByteBuf, T>`)
- `handler` (`IPayloadHandler<T>`)

**Returns:** `PayloadRegistrar`

### commonToClient

```java
public <T extends CustomPacketPayload> PayloadRegistrar commonToClient(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> reader, IPayloadHandler<T> handler)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<T>`)
- `reader` (`StreamCodec<? super FriendlyByteBuf, T>`)
- `handler` (`IPayloadHandler<T>`)

**Returns:** `PayloadRegistrar`

### commonToServer

```java
public <T extends CustomPacketPayload> PayloadRegistrar commonToServer(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> reader, IPayloadHandler<T> handler)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<T>`)
- `reader` (`StreamCodec<? super FriendlyByteBuf, T>`)
- `handler` (`IPayloadHandler<T>`)

**Returns:** `PayloadRegistrar`

### commonBidirectional

```java
public <T extends CustomPacketPayload> PayloadRegistrar commonBidirectional(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> reader, IPayloadHandler<T> handler)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<T>`)
- `reader` (`StreamCodec<? super FriendlyByteBuf, T>`)
- `handler` (`IPayloadHandler<T>`)

**Returns:** `PayloadRegistrar`

### executesOn

```java
public PayloadRegistrar executesOn(HandlerThread thread)
```

**Parameters:**

- `thread` (`HandlerThread`)

**Returns:** `PayloadRegistrar`

### versioned

```java
public PayloadRegistrar versioned(String version)
```

**Parameters:**

- `version` (`String`)

**Returns:** `PayloadRegistrar`

### optional

```java
public PayloadRegistrar optional()
```

**Returns:** `PayloadRegistrar`

### register

```java
<T extends CustomPacketPayload, B extends FriendlyByteBuf> private <T extends CustomPacketPayload, B extends FriendlyByteBuf> void register(CustomPacketPayload.Type<T> type, StreamCodec<? super B, T> codec, IPayloadHandler<T> handler, List<ConnectionProtocol> protocols, Optional<PacketFlow> flow, String version, boolean optional)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<T>`)
- `codec` (`StreamCodec<? super B, T>`)
- `handler` (`IPayloadHandler<T>`)
- `protocols` (`List<ConnectionProtocol>`)
- `flow` (`Optional<PacketFlow>`)
- `version` (`String`)
- `optional` (`boolean`)

**Returns:** `private <T extends CustomPacketPayload, B extends FriendlyByteBuf> void`
