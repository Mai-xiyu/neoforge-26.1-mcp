# NetworkRegistry

**Package:** `net.neoforged.neoforge.network.registration`
**Type:** class
**Annotations:** `@ApiStatus`

## Description

Core registry for all modded networking.



This registry is responsible for storing all known modded payloads, and for handling the negotiation of modded network channels between the client and the server.



Additionally, this registry is responsible for handling all packets that are not natively known once they arrive at the receiving end.



To prevent payloads from being send to a client that has no idea what to do with them, the registry provides endpoints for the vanilla code base to check if a packet can be send to a client.

## Methods

### setup

```java
public static final void setup()
```

### IllegalStateException

```java
throw new IllegalStateException("The network registry can only be setup once.")
```

**Parameters:**

- `once."` (`"The network registry can only be setup`)

**Returns:** `throw new`

### register

```java
public static <T extends CustomPacketPayload, B extends FriendlyByteBuf> void register(CustomPacketPayload.Type<T> type, StreamCodec<? super B, T> codec, IPayloadHandler<T> handler, List<ConnectionProtocol> protocols, Optional<PacketFlow> flow, String version, boolean optional)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<T>`)
- `codec` (`StreamCodec<? super B, T>`)
- `handler` (`IPayloadHandler<T>`)
- `protocols` (`List<ConnectionProtocol>`)
- `flow` (`Optional<PacketFlow>`)
- `version` (`String`)
- `optional` (`boolean`)

### getCodec

```java
public static StreamCodec<? super FriendlyByteBuf, ? extends CustomPacketPayload> getCodec(ResourceLocation id, ConnectionProtocol protocol, PacketFlow flow)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `protocol` (`ConnectionProtocol`)
- `flow` (`PacketFlow`)

**Returns:** `StreamCodec<? super FriendlyByteBuf, ? extends CustomPacketPayload>`

### dumpStackToLog

```java
 dumpStackToLog()
```

**Returns:** ``

### isModdedPayload

```java
public static boolean isModdedPayload(CustomPacketPayload payload)
```

**Parameters:**

- `payload` (`CustomPacketPayload`)

**Returns:** `boolean`

### handleModdedPayload

```java
public static void handleModdedPayload(ServerCommonPacketListener listener, ServerboundCustomPayloadPacket packet)
```

**Parameters:**

- `listener` (`ServerCommonPacketListener`)
- `packet` (`ServerboundCustomPayloadPacket`)

### dumpStackToLog

```java
 dumpStackToLog()
```

**Returns:** ``

### handleModdedPayload

```java
public static void handleModdedPayload(ClientCommonPacketListener listener, ClientboundCustomPayloadPacket packet)
```

**Parameters:**

- `listener` (`ClientCommonPacketListener`)
- `packet` (`ClientboundCustomPayloadPacket`)

### dumpStackToLog

```java
 dumpStackToLog()
```

**Returns:** ``

### initializeNeoForgeConnection

```java
public static void initializeNeoForgeConnection(ServerConfigurationPacketListener listener, Map<ConnectionProtocol, Set<ModdedNetworkQueryComponent>> clientChannels)
```

**Parameters:**

- `listener` (`ServerConfigurationPacketListener`)
- `clientChannels` (`Map<ConnectionProtocol, Set<ModdedNetworkQueryComponent>>`)

### initializeOtherConnection

```java
public static boolean initializeOtherConnection(ServerConfigurationPacketListener listener)
```

**Parameters:**

- `listener` (`ServerConfigurationPacketListener`)

**Returns:** `boolean`

### checkPacket

```java
public static void checkPacket(Packet<?> packet, ServerCommonPacketListener listener)
```

**Parameters:**

- `packet` (`Packet<?>`)
- `listener` (`ServerCommonPacketListener`)

### checkPacket

```java
public static void checkPacket(Packet<?> packet, ClientCommonPacketListener listener)
```

**Parameters:**

- `packet` (`Packet<?>`)
- `listener` (`ClientCommonPacketListener`)

### onNetworkQuery

```java
public static void onNetworkQuery(ClientConfigurationPacketListener listener)
```

**Parameters:**

- `listener` (`ClientConfigurationPacketListener`)

### initializeNeoForgeConnection

```java
public static void initializeNeoForgeConnection(ClientConfigurationPacketListener listener, NetworkPayloadSetup setup)
```

**Parameters:**

- `listener` (`ClientConfigurationPacketListener`)
- `setup` (`NetworkPayloadSetup`)

### initializeOtherConnection

```java
public static void initializeOtherConnection(ClientConfigurationPacketListener listener)
```

**Parameters:**

- `listener` (`ClientConfigurationPacketListener`)

### hasChannel

```java
public static boolean hasChannel(ICommonPacketListener listener, ResourceLocation payloadId)
```

**Parameters:**

- `listener` (`ICommonPacketListener`)
- `payloadId` (`ResourceLocation`)

**Returns:** `boolean`

### hasChannel

```java
public static boolean hasChannel(Connection connection, ConnectionProtocol protocol, ResourceLocation payloadId)
```

**Parameters:**

- `connection` (`Connection`)
- `protocol` (`ConnectionProtocol`)
- `payloadId` (`ResourceLocation`)

**Returns:** `boolean`

### filterGameBundlePackets

```java
public static <T extends PacketListener> List<Packet<?>> filterGameBundlePackets(ChannelHandlerContext context, Iterable<Packet<? super T>> packets)
```

**Parameters:**

- `context` (`ChannelHandlerContext`)
- `packets` (`Iterable<Packet<? super T>>`)

**Returns:** `List<Packet<?>>`

### configureMockConnection

```java
public static void configureMockConnection(Connection connection)
```

**Parameters:**

- `connection` (`Connection`)

### onMinecraftRegister

```java
public static void onMinecraftRegister(Connection connection, Set<ResourceLocation> resourceLocations)
```

**Parameters:**

- `connection` (`Connection`)
- `resourceLocations` (`Set<ResourceLocation>`)

### onMinecraftUnregister

```java
public static void onMinecraftUnregister(Connection connection, Set<ResourceLocation> resourceLocations)
```

**Parameters:**

- `connection` (`Connection`)
- `resourceLocations` (`Set<ResourceLocation>`)

### getInitialListeningChannels

```java
public static Set<ResourceLocation> getInitialListeningChannels(PacketFlow flow)
```

**Parameters:**

- `flow` (`PacketFlow`)

**Returns:** `Set<ResourceLocation>`

### getInitialServerUnregisterChannels

```java
public static Set<ResourceLocation> getInitialServerUnregisterChannels()
```

**Returns:** `public static Set<ResourceLocation>`

### checkCommonVersion

```java
public static void checkCommonVersion(ICommonPacketListener listener, CommonVersionPayload payload)
```

**Parameters:**

- `listener` (`ICommonPacketListener`)
- `payload` (`CommonVersionPayload`)

### onCommonRegister

```java
public static void onCommonRegister(ICommonPacketListener listener, CommonRegisterPayload payload)
```

**Parameters:**

- `listener` (`ICommonPacketListener`)
- `payload` (`CommonRegisterPayload`)

### getCommonPlayChannels

```java
public static Set<ResourceLocation> getCommonPlayChannels(PacketFlow flow)
```

**Parameters:**

- `flow` (`PacketFlow`)

**Returns:** `public static Set<ResourceLocation>`

### onConfigurationFinished

```java
public static void onConfigurationFinished(ICommonPacketListener listener)
```

**Parameters:**

- `listener` (`ICommonPacketListener`)

### getConnectionType

```java
public static ConnectionType getConnectionType(Connection connection)
```

**Parameters:**

- `connection` (`Connection`)

**Returns:** `public static ConnectionType`

### guard

```java
public static <T> CompletableFuture<T> guard(CompletableFuture<T> future, ResourceLocation payloadId)
```

**Parameters:**

- `future` (`CompletableFuture<T>`)
- `payloadId` (`ResourceLocation`)

**Returns:** `CompletableFuture<T>`

### handlePacketUnchecked

```java
public static <T extends PacketListener> void handlePacketUnchecked(Packet<T> packet, PacketListener listener)
```

**Parameters:**

- `packet` (`Packet<T>`)
- `listener` (`PacketListener`)

### IllegalStateException

```java
throw new IllegalStateException("Attempted to handle a packet in a listener that does not support it.")
```

**Parameters:**

- `it."` (`"Attempted to handle a packet in a listener that does not support`)

**Returns:** `throw new`
