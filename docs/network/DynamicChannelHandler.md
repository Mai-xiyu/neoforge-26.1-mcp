# DynamicChannelHandler

**Package:** `net.neoforged.neoforge.network.filters`
**Type:** interface
**Extends:** `ChannelHandler`
**Annotations:** `@ApiStatus`

## Description

An extension to the netty `ChannelHandler` interface that allows for
dynamic injection of handlers into the pipeline, based on whether they are needed
on the current connection or not.

## Methods

### isNecessary

```java
boolean isNecessary(Connection manager)
```

**Parameters:**

- `manager` (`Connection`)

**Returns:** `boolean`
