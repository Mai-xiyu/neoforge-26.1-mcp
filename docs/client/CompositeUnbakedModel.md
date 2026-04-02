# CompositeUnbakedModel

**Package:** `net.neoforged.neoforge.client.model`
**Type:** class
**Extends:** `AbstractUnbakedModel`
**Side:** 🖥️ Client

## Description

A model composed of several named children.


All geometry always has one render type: the type specified in the composite model itself.
To combine multiple render types, use either a CompositeBlockModel composite block state model
or a CompositeModel composite item model, depending on the use case.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `CompositeUnbakedModel.Loader` |  |

## Methods

### CompositeUnbakedModel

```java
public CompositeUnbakedModel(StandardModelParameters parameters, CompositeUnbakedGeometry geometry)
```

**Parameters:**

- `parameters` (`StandardModelParameters`)
- `geometry` (`CompositeUnbakedGeometry`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### geometry

```java
public UnbakedGeometry geometry()
```

**Returns:** `UnbakedGeometry`

### resolveDependencies

```java
public void resolveDependencies(Resolver resolver)
```

**Parameters:**

- `resolver` (`Resolver`)

### Loader

```java
private Loader()
```

**Returns:** `private`

### read

```java
public CompositeUnbakedModel read(JsonObject jsonObject, JsonDeserializationContext jsonDeserializationContext)
```

**Parameters:**

- `jsonObject` (`JsonObject`)
- `jsonDeserializationContext` (`JsonDeserializationContext`)

**Returns:** `CompositeUnbakedModel`

### readChildren

```java
 readChildren()
```

**Returns:** ``

### JsonParseException

```java
throw new JsonParseException("Composite model requires a \"children\" element with at least one element.")
```

**Parameters:**

- `element."` (`"Composite model requires a \"children\" element with at least one`)

**Returns:** `throw new`

### readChildren

```java
private static void readChildren(JsonObject jsonObject, String name, ImmutableMap.Builder<String, Either<Identifier, UnbakedModel>> children, JsonDeserializationContext context)
```

**Parameters:**

- `jsonObject` (`JsonObject`)
- `name` (`String`)
- `children` (`ImmutableMap.Builder<String, Either<Identifier, UnbakedModel>>`)
- `context` (`JsonDeserializationContext`)

**Returns:** `private static void`

### IllegalArgumentException

```java
> throw new IllegalArgumentException()
```

**Returns:** `> throw new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Loader` | class |  |
