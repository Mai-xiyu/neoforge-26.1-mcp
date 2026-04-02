# ICommonPacketListener

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface
**Extends:** `PacketListener`

## Description

Extension interface and functionality hoist for both `ServerCommonPacketListener`
and `ClientCommonPacketListener`.

## Methods

### send

```java
void send(Packet<?> packet)
```

**Parameters:**

- `packet` (`Packet<?>`)

### send

```java
void send(CustomPacketPayload payload)
```

**Parameters:**

- `payload` (`CustomPacketPayload`)

### disconnect

```java
void disconnect(Component reason)
```

**Parameters:**

- `reason` (`Component`)

### getConnection

```java
Connection getConnection()
```

**Returns:** `Connection`

### getMainThreadEventLoop

```java
ReentrantBlockableEventLoop<?> getMainThreadEventLoop()
```

**Returns:** `ReentrantBlockableEventLoop<?>`

### hasChannel

```java
default boolean hasChannel(ResourceLocation payloadId)
```

**Parameters:**

- `payloadId` (`ResourceLocation`)

**Returns:** `boolean`

### hasChannel

```java
default boolean hasChannel(CustomPacketPayload.Type<?> type)
```

**Parameters:**

- `type` (`CustomPacketPayload.Type<?>`)

**Returns:** `boolean`

### hasChannel

```java
default boolean hasChannel(CustomPacketPayload payload)
```

**Parameters:**

- `payload` (`CustomPacketPayload`)

**Returns:** `boolean`

### getConnectionType

```java
ConnectionType getConnectionType()
```

**Returns:** `ConnectionType`
