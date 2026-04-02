# ElementsModel

**Package:** `net.neoforged.neoforge.client.model`
**Type:** class
**Extends:** `SimpleUnbakedGeometry<ElementsModel>`
**Side:** 🖥️ Client

## Description

A model composed of vanilla BlockElement block elements.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `Loader` |  |

## Methods

### ElementsModel

```java
public ElementsModel(List<BlockElement> elements)
```

**Parameters:**

- `elements` (`List<BlockElement>`)

**Returns:** `public`

### addQuads

```java
protected void addQuads(IGeometryBakingContext context, IModelBuilder<?> modelBuilder, ModelBaker baker, Function<Material, TextureAtlasSprite> spriteGetter, ModelState modelState)
```

**Parameters:**

- `context` (`IGeometryBakingContext`)
- `modelBuilder` (`IModelBuilder<?>`)
- `baker` (`ModelBaker`)
- `spriteGetter` (`Function<Material, TextureAtlasSprite>`)
- `modelState` (`ModelState`)

### Loader

```java
private Loader()
```

**Returns:** `private`

### read

```java
public ElementsModel read(JsonObject jsonObject, JsonDeserializationContext deserializationContext)
```

**Parameters:**

- `jsonObject` (`JsonObject`)
- `deserializationContext` (`JsonDeserializationContext`)

**Returns:** `ElementsModel`

### JsonParseException

```java
throw new JsonParseException("An element model must have an \"elements\" member.")
```

**Parameters:**

- `member."` (`"An element model must have an \"elements\"`)

**Returns:** `throw new`

### ElementsModel

```java
return new ElementsModel()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Loader` | class |  |
