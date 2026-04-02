# IGeometryLoader

**Package:** `net.neoforged.neoforge.client.model.geometry`
**Type:** interface<T extends IUnbakedGeometry<T>>
**Side:** 🖥️ Client

## Description

A loader for custom IUnbakedGeometry model geometries.



If you do any caching, you should implement `ResourceManagerReloadListener` and register it with
`RegisterClientReloadListenersEvent`.
@see ModelEvent.RegisterGeometryLoaders
@see RegisterClientReloadListenersEvent

## Methods

### read

```java
T read(JsonObject jsonObject, JsonDeserializationContext deserializationContext)
```

**Parameters:**

- `jsonObject` (`JsonObject`)
- `deserializationContext` (`JsonDeserializationContext`)

**Returns:** `T`
