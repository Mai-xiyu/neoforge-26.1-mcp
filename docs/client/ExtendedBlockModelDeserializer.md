# ExtendedBlockModelDeserializer

**Package:** `net.neoforged.neoforge.client.model`
**Type:** class
**Extends:** `BlockModel.Deserializer`
**Side:** 🖥️ Client

## Description

A version of `BlockModel.Deserializer` capable of deserializing models with custom loaders, as well as other
changes introduced to the spec by Forge.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `Gson` |  |

## Methods

### deserialize

```java
public BlockModel deserialize(JsonElement element, Type targetType, JsonDeserializationContext deserializationContext)
```

**Parameters:**

- `element` (`JsonElement`)
- `targetType` (`Type`)
- `deserializationContext` (`JsonDeserializationContext`)

**Returns:** `BlockModel`

### deserializeGeometry

```java
public static IUnbakedGeometry<?> deserializeGeometry(JsonDeserializationContext deserializationContext, JsonObject object)
```

**Parameters:**

- `deserializationContext` (`JsonDeserializationContext`)
- `object` (`JsonObject`)

**Returns:** `IUnbakedGeometry<?>`
