# GenericPacketSplitter

**Package:** `net.neoforged.neoforge.network.filters`
**Type:** class
**Extends:** `MessageToMessageEncoder<Packet<?>>`
**Implements:** `DynamicChannelHandler`
**Annotations:** `@EventBusSubscriber(modid = NeoForgeVersion.MOD_ID, bus = EventBusSubscriber.Bus.MOD)`, `@ApiStatus`

## Description

A generic packet splitter that can be used to split packets that are too large to be sent in one go.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CHANNEL_HANDLER_NAME` | `String` |  |

## Methods

### SizeLimits

```java
private record SizeLimits(int packet, int part)
```

**Parameters:**

- `packet` (`int`)
- `part` (`int`)

**Returns:** `private record`

### SizeLimits

```java
public SizeLimits(int packet)
```

**Parameters:**

- `packet` (`int`)

**Returns:** `public`

### handle

```java
private static void handle(SplitPacketPayload payload, IPayloadContext context)
```

**Parameters:**

- `payload` (`SplitPacketPayload`)
- `context` (`IPayloadContext`)

**Returns:** `private static void`

### encode

```java
protected void encode(ChannelHandlerContext ctx, Packet<?> packet, List<Object> out)
```

**Parameters:**

- `ctx` (`ChannelHandlerContext`)
- `packet` (`Packet<?>`)
- `out` (`List<Object>`)

### receivedPacket

```java
private void receivedPacket(SplitPacketPayload payload, IPayloadContext context)
```

**Parameters:**

- `payload` (`SplitPacketPayload`)
- `context` (`IPayloadContext`)

**Returns:** `private void`

### createPacket

```java
private static Packet<?> createPacket(PacketFlow flow, byte[] payload)
```

**Parameters:**

- `flow` (`PacketFlow`)
- `payload` (`byte[]`)

**Returns:** `private static Packet<?>`

### isNecessary

```java
public boolean isNecessary(Connection manager)
```

**Parameters:**

- `manager` (`Connection`)

**Returns:** `boolean`

### isRemoteCompatible

```java
return isRemoteCompatible()
```

**Returns:** `return`

### getRemoteCompatibility

```java
public static RemoteCompatibility getRemoteCompatibility(Connection manager)
```

**Parameters:**

- `manager` (`Connection`)

**Returns:** `public static RemoteCompatibility`

### isRemoteCompatible

```java
public static boolean isRemoteCompatible(Connection manager)
```

**Parameters:**

- `manager` (`Connection`)

**Returns:** `public static boolean`

### determineMaxPayloadSize

```java
public static int determineMaxPayloadSize(int maxPacketSize)
```

**Parameters:**

- `maxPacketSize` (`int`)

**Returns:** `public static int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `RemoteCompatibility` | enum |  |
