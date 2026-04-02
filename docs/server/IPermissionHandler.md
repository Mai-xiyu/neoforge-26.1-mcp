# IPermissionHandler

**Package:** `net.neoforged.neoforge.server.permission.handler`
**Type:** interface
**Side:** 🖧 Server

## Description

This is the Heart of the PermissionAPI, it manages `PermissionNode`s
as well as it handles all permission queries.


Note: You do not need to implement a PermissionHandler to query for permissions.
@implNote The `DefaultPermissionHandler` does forward all permission queries to the PermissionNodes default resolver.
@apiNote You can implement your own PermissionHandler using the `PermissionGatherEvent.Handler` event.

## Methods

### getIdentifier

```java
ResourceLocation getIdentifier()
```

**Returns:** `ResourceLocation`

### getRegisteredNodes

```java
Set<PermissionNode<?>> getRegisteredNodes()
```

**Returns:** `Set<PermissionNode<?>>`

### getPermission

```java
<T> T getPermission(ServerPlayer player, PermissionNode<T> node, PermissionDynamicContext<?>[]... context)
```

**Parameters:**

- `player` (`ServerPlayer`)
- `node` (`PermissionNode<T>`)
- `context` (`PermissionDynamicContext<?>[]...`)

**Returns:** `T`

### getOfflinePermission

```java
<T> T getOfflinePermission(UUID player, PermissionNode<T> node, PermissionDynamicContext<?>[]... context)
```

**Parameters:**

- `player` (`UUID`)
- `node` (`PermissionNode<T>`)
- `context` (`PermissionDynamicContext<?>[]...`)

**Returns:** `T`
