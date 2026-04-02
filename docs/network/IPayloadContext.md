# IPayloadContext

**Package:** `net.neoforged.neoforge.network.handling`
**Type:** interface
**Annotations:** `@ApiStatus`

## Description

Common context interface for payload handlers.

## Methods

### listener

```java
ICommonPacketListener listener()
```

**Returns:** `ICommonPacketListener`

### connection

```java
default Connection connection()
```

**Returns:** `Connection`

### player

```java
Player player()
```

**Returns:** `Player`

### reply

```java
default void reply(CustomPacketPayload payload)
```

**Parameters:**

- `payload` (`CustomPacketPayload`)

### disconnect

```java
default void disconnect(Component reason)
```

**Parameters:**

- `reason` (`Component`)

### enqueueWork

```java
CompletableFuture<Void> enqueueWork(Runnable task)
```

**Parameters:**

- `task` (`Runnable`)

**Returns:** `CompletableFuture<Void>`

### enqueueWork

```java
<T> CompletableFuture<T> enqueueWork(Supplier<T> task)
```

**Parameters:**

- `task` (`Supplier<T>`)

**Returns:** `CompletableFuture<T>`

### flow

```java
PacketFlow flow()
```

**Returns:** `PacketFlow`

### protocol

```java
default ConnectionProtocol protocol()
```

**Returns:** `ConnectionProtocol`

### handle

```java
default void handle(Packet<?> packet)
```

**Parameters:**

- `packet` (`Packet<?>`)

### handle

```java
void handle(CustomPacketPayload payload)
```

**Parameters:**

- `payload` (`CustomPacketPayload`)

### finishCurrentTask

```java
void finishCurrentTask(ConfigurationTask.Type type)
```

**Parameters:**

- `type` (`ConfigurationTask.Type`)

### channelHandlerContext

```java
default ChannelHandlerContext channelHandlerContext()
```

**Returns:** `ChannelHandlerContext`
