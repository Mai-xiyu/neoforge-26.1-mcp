# MainThreadPayloadHandler

**Package:** `net.neoforged.neoforge.network.handling`
**Type:** record<T extends CustomPacketPayload>(IPayloadHandler<T> handler) implements IPayloadHandler<T>

## Description

Helper class that always executes the wrapped handler on the main thread.

## Methods

### handle

```java
public void handle(T payload, IPayloadContext context)
```

**Parameters:**

- `payload` (`T`)
- `context` (`IPayloadContext`)
