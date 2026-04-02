# IPacketFlowExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Description

Extension for `PacketFlow` to add some utility methods.

## Methods

### self

```java
default PacketFlow self()
```

**Returns:** `PacketFlow`

### isClientbound

```java
default boolean isClientbound()
```

**Returns:** `boolean`

### isServerbound

```java
default boolean isServerbound()
```

**Returns:** `boolean`

### getReceptionSide

```java
default LogicalSide getReceptionSide()
```

**Returns:** `LogicalSide`
