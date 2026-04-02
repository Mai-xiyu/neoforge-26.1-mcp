# UnbakedModelLoader

**Package:** `net.neoforged.neoforge.client.model`
**Type:** interface<T extends UnbakedModel>
**Side:** 🖥️ Client

## Description

A loader for custom UnbakedModel unbaked models.



If you do any caching, you should implement `ResourceManagerReloadListener` and register it with
`AddClientReloadListenersEvent`.
@see ModelEvent.RegisterLoaders
@see AddClientReloadListenersEvent

## Methods

### read

```java
T read(JsonObject jsonObject, JsonDeserializationContext deserializationContext)
```

**Parameters:**

- `jsonObject` (`JsonObject`)
- `deserializationContext` (`JsonDeserializationContext`)

**Returns:** `T`
