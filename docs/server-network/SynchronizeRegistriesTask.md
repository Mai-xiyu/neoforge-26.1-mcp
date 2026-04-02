# SynchronizeRegistriesTask

**Package:** `net.minecraft.server.network.config`
**Type:** class
**Implements:** `ConfigurationTask`
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `ConfigurationTask.Type` |  |

## Methods

### SynchronizeRegistriesTask

```java
public SynchronizeRegistriesTask(List<KnownPack> p_326209_, LayeredRegistryAccess<RegistryLayer> p_326049_)
```

**Parameters:**

- `p_326209_` (`List<KnownPack>`)
- `p_326049_` (`LayeredRegistryAccess<RegistryLayer>`)

**Returns:** `public`

### start

```java
public void start(Consumer<Packet<?>> p_326485_)
```

**Parameters:**

- `p_326485_` (`Consumer<Packet<?>>`)

### sendRegistries

```java
private void sendRegistries(Consumer<Packet<?>> p_325923_, Set<KnownPack> p_326322_)
```

**Parameters:**

- `p_325923_` (`Consumer<Packet<?>>`)
- `p_326322_` (`Set<KnownPack>`)

**Returns:** `private void`

### handleResponse

```java
public void handleResponse(List<KnownPack> p_326076_, Consumer<Packet<?>> p_326167_)
```

**Parameters:**

- `p_326076_` (`List<KnownPack>`)
- `p_326167_` (`Consumer<Packet<?>>`)

**Returns:** `public void`

### type

```java
public ConfigurationTask.Type type()
```

**Returns:** `ConfigurationTask.Type`
