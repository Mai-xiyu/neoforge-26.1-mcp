# UnbakedModelParser

**Package:** `net.neoforged.neoforge.client.model`
**Type:** class
**Side:** 🖥️ Client

## Methods

### get

```java
public static UnbakedModelLoader<?> get(Identifier name)
```

**Parameters:**

- `name` (`Identifier`)

**Returns:** `UnbakedModelLoader<?>`

### init

```java
.Internal
    public static void init()
```

**Returns:** `.Internal
    public static void`

### parse

```java
public static UnbakedModel parse(Reader reader)
```

**Parameters:**

- `reader` (`Reader`)

**Returns:** `public static UnbakedModel`

### deserialize

```java
public UnbakedModel deserialize(JsonElement jsonElement, Type type, JsonDeserializationContext jsonDeserializationContext)
```

**Parameters:**

- `jsonElement` (`JsonElement`)
- `type` (`Type`)
- `jsonDeserializationContext` (`JsonDeserializationContext`)

**Returns:** `UnbakedModel`

### JsonParseException

```java
throw new JsonParseException("Expected object, got " + jsonElement)
```

**Parameters:**

- `object` (`"Expected`)
- `jsonElement` (`got " +`)

**Returns:** `throw new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Deserializer` | class |  |
