# ClientRegistryManager

**Package:** `net.neoforged.neoforge.client.registries`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@ApiStatus`

## Methods

### handleDataMapSync

```java
<R> public static <R> void handleDataMapSync(RegistryDataMapSyncPayload<R> payload, IPayloadContext context)
```

**Parameters:**

- `payload` (`RegistryDataMapSyncPayload<R>`)
- `context` (`IPayloadContext`)

**Returns:** `public static <R> void`

### handleKnownDataMaps

```java
public static void handleKnownDataMaps(KnownRegistryDataMapsPayload payload, IPayloadContext context)
```

**Parameters:**

- `payload` (`KnownRegistryDataMapsPayload`)
- `context` (`IPayloadContext`)

**Returns:** `public static void`

### MandatoryEntry

```java
record MandatoryEntry(ResourceKey<? extends Registry<?>> registry, Identifier id)
```

**Parameters:**

- `registry` (`ResourceKey<? extends Registry<?>>`)
- `id` (`Identifier`)

**Returns:** `record`
