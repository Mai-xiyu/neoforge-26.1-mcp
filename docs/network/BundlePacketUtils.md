# BundlePacketUtils

**Package:** `net.neoforged.neoforge.network.bundle`
**Type:** class
**Annotations:** `@ApiStatus`

## Description

Utility class for dealing with `net.minecraft.network.protocol.BundlePacket`s.

## Methods

### BundlePacketUtils

```java
private BundlePacketUtils()
```

**Returns:** `private`

### IllegalStateException

```java
throw new IllegalStateException("Tried to create utility class!")
```

**Parameters:**

- `class!"` (`"Tried to create utility`)

**Returns:** `throw new`

### flatten

```java
<T extends PacketListener> public static <T extends PacketListener> List<Packet<? super T>> flatten(Iterable<Packet<? super T>> packets)
```

**Parameters:**

- `packets` (`Iterable<Packet<? super T>>`)

**Returns:** `public static <T extends PacketListener> List<Packet<? super T>>`
