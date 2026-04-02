# IServerChunkCacheExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface
**Annotations:** `@SuppressWarnings("resource")`

## Description

Extension class for `ServerChunkCache`



This interface with its default methods allows for easy sending of payloads players watching a specific entity.


## Methods

### self

```java
default ServerChunkCache self()
```

**Returns:** `default ServerChunkCache`

### broadcastAndSend

```java
default void broadcastAndSend(Entity entity, CustomPacketPayload payload)
```

**Parameters:**

- `entity` (`Entity`)
- `payload` (`CustomPacketPayload`)

### broadcast

```java
default void broadcast(Entity entity, CustomPacketPayload payload)
```

**Parameters:**

- `entity` (`Entity`)
- `payload` (`CustomPacketPayload`)
