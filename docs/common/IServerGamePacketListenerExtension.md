# IServerGamePacketListenerExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface
**Extends:** `IServerCommonPacketListenerExtension`

## Description

Extension class for `ServerGamePacketListener`

## Methods

### sendBundled

```java
default void sendBundled(CustomPacketPayload[]... payloads)
```

**Parameters:**

- `payloads` (`CustomPacketPayload[]...`)

### sendBundled

```java
default void sendBundled(Iterable<CustomPacketPayload> payloads)
```

**Parameters:**

- `payloads` (`Iterable<CustomPacketPayload>`)
