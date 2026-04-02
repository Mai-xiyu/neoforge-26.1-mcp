# VanillaConnectionNetworkFilter

**Package:** `net.neoforged.neoforge.network.filters`
**Type:** class
**Extends:** `VanillaPacketFilter`
**Annotations:** `@ChannelHandler`, `@ApiStatus`

## Description

A filter for impl packets, used to filter/modify parts of vanilla impl messages that
will cause errors or warnings on vanilla clients, for example entity attributes that are added by Forge or mods.

## Methods

### VanillaConnectionNetworkFilter

```java
public VanillaConnectionNetworkFilter(ConnectionType connectionType)
```

**Parameters:**

- `connectionType` (`ConnectionType`)

**Returns:** `public`

### isNecessary

```java
public boolean isNecessary(Connection manager)
```

**Parameters:**

- `manager` (`Connection`)

**Returns:** `boolean`

### ClientboundCommandsPacket

```java
return new ClientboundCommandsPacket()
```

**Returns:** `return new`

### ClientboundUpdateTagsPacket

```java
return new ClientboundUpdateTagsPacket()
```

**Returns:** `return new`

### isVanillaRegistry

```java
private static boolean isVanillaRegistry(ResourceLocation location)
```

**Parameters:**

- `location` (`ResourceLocation`)

**Returns:** `private static boolean`
