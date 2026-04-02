# ChannelAttributes

**Package:** `net.neoforged.neoforge.network.registration`
**Type:** class
**Annotations:** `@ApiStatus`

## Description

Utilities for manipulation of Netty `Channel` attributes

## Methods

### getOrCreateAdHocChannels

```java
public static final Set<ResourceLocation> getOrCreateAdHocChannels(Connection connection)
```

**Parameters:**

- `connection` (`Connection`)

**Returns:** `Set<ResourceLocation>`

### getOrCreateCommonChannels

```java
public static Set<ResourceLocation> getOrCreateCommonChannels(Connection connection, ConnectionProtocol protocol)
```

**Parameters:**

- `connection` (`Connection`)
- `protocol` (`ConnectionProtocol`)

**Returns:** `Set<ResourceLocation>`
