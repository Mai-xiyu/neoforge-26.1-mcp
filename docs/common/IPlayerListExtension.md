# IPlayerListExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Description

Extension class for `PlayerList`



This interface with its default methods allows for easy sending of payloads to all, or specific, players on the server.


## Methods

### self

```java
default PlayerList self()
```

**Returns:** `PlayerList`

### broadcastAll

```java
default void broadcastAll(CustomPacketPayload payload)
```

**Parameters:**

- `payload` (`CustomPacketPayload`)

### broadcastAll

```java
default void broadcastAll(CustomPacketPayload payload, ResourceKey<Level> targetLevel)
```

**Parameters:**

- `payload` (`CustomPacketPayload`)
- `targetLevel` (`ResourceKey<Level>`)

### broadcast

```java
default void broadcast(double x, double y, double z, double range, ResourceKey<Level> level, CustomPacketPayload payload)
```

**Parameters:**

- `x` (`double`)
- `y` (`double`)
- `z` (`double`)
- `range` (`double`)
- `level` (`ResourceKey<Level>`)
- `payload` (`CustomPacketPayload`)

### broadcast

```java
default void broadcast(Player excludedPlayer, double x, double y, double z, double range, ResourceKey<Level> level, CustomPacketPayload payload)
```

**Parameters:**

- `excludedPlayer` (`Player`)
- `x` (`double`)
- `y` (`double`)
- `z` (`double`)
- `range` (`double`)
- `level` (`ResourceKey<Level>`)
- `payload` (`CustomPacketPayload`)
