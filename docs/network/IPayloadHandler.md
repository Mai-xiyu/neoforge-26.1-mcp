# IPayloadHandler

**Package:** `net.neoforged.neoforge.network.handling`
**Type:** interface<T extends CustomPacketPayload>
**Annotations:** `@FunctionalInterface`

## Description

Callback for handling custom packets.
@param <T> The type of payload.

## Methods

### handle

```java
void handle(T payload, IPayloadContext context)
```

**Parameters:**

- `payload` (`T`)
- `context` (`IPayloadContext`)
