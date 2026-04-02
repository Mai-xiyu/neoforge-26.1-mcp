# IClientCommonPacketListenerExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface
**Extends:** `ICommonPacketListener`

## Description

Extension interface for `ClientCommonPacketListener`

## Methods

### send

```java
default void send(CustomPacketPayload payload)
```

**Parameters:**

- `payload` (`CustomPacketPayload`)

### disconnect

```java
default void disconnect(Component reason)
```

**Parameters:**

- `reason` (`Component`)

### getMainThreadEventLoop

```java
default ReentrantBlockableEventLoop<?> getMainThreadEventLoop()
```

**Returns:** `ReentrantBlockableEventLoop<?>`
