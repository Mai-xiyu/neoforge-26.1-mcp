# JsonUtils

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class

## Methods

### deserialize

```java
public ImmutableList<?> deserialize(JsonElement json, Type type, JsonDeserializationContext context)
```

**Parameters:**

- `json` (`JsonElement`)
- `type` (`Type`)
- `context` (`JsonDeserializationContext`)

**Returns:** `ImmutableList<?>`

### serialize

```java
public JsonElement serialize(ImmutableList<?> src, Type type, JsonSerializationContext context)
```

**Parameters:**

- `src` (`ImmutableList<?>`)
- `type` (`Type`)
- `context` (`JsonSerializationContext`)

**Returns:** `JsonElement`

### deserialize

```java
public ImmutableMap<String, ?> deserialize(JsonElement json, Type type, JsonDeserializationContext context)
```

**Parameters:**

- `json` (`JsonElement`)
- `type` (`Type`)
- `context` (`JsonDeserializationContext`)

**Returns:** `ImmutableMap<String, ?>`

### serialize

```java
public JsonElement serialize(ImmutableMap<String, ?> src, Type type, JsonSerializationContext context)
```

**Parameters:**

- `src` (`ImmutableMap<String, ?>`)
- `type` (`Type`)
- `context` (`JsonSerializationContext`)

**Returns:** `JsonElement`

### readNBT

```java
public static CompoundTag readNBT(JsonObject json, String key)
```

**Parameters:**

- `json` (`JsonObject`)
- `key` (`String`)

**Returns:** `CompoundTag`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Malformed NBT tag")
```

**Parameters:**

- `tag"` (`"Malformed NBT`)

**Returns:** `throw new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ImmutableListTypeAdapter` | enum |  |
| `ImmutableMapTypeAdapter` | enum |  |
