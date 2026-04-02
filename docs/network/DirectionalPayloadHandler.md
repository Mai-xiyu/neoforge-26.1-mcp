# DirectionalPayloadHandler

**Package:** `net.neoforged.neoforge.network.handling`
**Type:** record<T extends CustomPacketPayload>(IPayloadHandler<T> clientSide, IPayloadHandler<T> serverSide) implements IPayloadHandler<T>

## Description

Helper class that merges two unidirectional handlers into a single bidirectional handler.

## Methods

### handle

```java
public void handle(T payload, IPayloadContext context)
```

**Parameters:**

- `payload` (`T`)
- `context` (`IPayloadContext`)
