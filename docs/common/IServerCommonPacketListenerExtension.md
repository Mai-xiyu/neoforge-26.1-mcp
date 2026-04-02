# IServerCommonPacketListenerExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface
**Extends:** `ICommonPacketListener`

## Description

Extension interface for `ServerCommonPacketListener`

## Methods

### send

```java
default void send(CustomPacketPayload payload)
```

**Parameters:**

- `payload` (`CustomPacketPayload`)

### send

```java
void send(Packet<?> packet, PacketSendListener listener)
```

**Parameters:**

- `packet` (`Packet<?>`)
- `listener` (`PacketSendListener`)

### send

```java
default void send(CustomPacketPayload payload, PacketSendListener listener)
```

**Parameters:**

- `payload` (`CustomPacketPayload`)
- `listener` (`PacketSendListener`)
