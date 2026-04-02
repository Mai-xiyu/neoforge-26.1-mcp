# MultiVariant

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Implements:** `UnbakedModel`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### MultiVariant

```java
public MultiVariant(List<Variant> p_111847_)
```

**Parameters:**

- `p_111847_` (`List<Variant>`)

**Returns:** `public`

### getVariants

```java
public List<Variant> getVariants()
```

**Returns:** `public List<Variant>`

### equals

```java
public boolean equals(Object p_111862_)
```

**Parameters:**

- `p_111862_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### getDependencies

```java
public Collection<ResourceLocation> getDependencies()
```

**Returns:** `Collection<ResourceLocation>`

### resolveParents

```java
public void resolveParents(Function<ResourceLocation, UnbakedModel> p_249314_)
```

**Parameters:**

- `p_249314_` (`Function<ResourceLocation, UnbakedModel>`)

### bake

```java
public BakedModel bake(ModelBaker p_249016_, Function<Material, TextureAtlasSprite> p_111851_, ModelState p_111852_)
```

**Parameters:**

- `p_249016_` (`ModelBaker`)
- `p_111851_` (`Function<Material, TextureAtlasSprite>`)
- `p_111852_` (`ModelState`)

**Returns:** `BakedModel`

### deserialize

```java
public MultiVariant deserialize(JsonElement p_111867_, Type p_111868_, JsonDeserializationContext p_111869_)
```

**Parameters:**

- `p_111867_` (`JsonElement`)
- `p_111868_` (`Type`)
- `p_111869_` (`JsonDeserializationContext`)

**Returns:** `public MultiVariant`

### JsonParseException

```java
throw new JsonParseException("Empty variant array")
```

**Parameters:**

- `array"` (`"Empty variant`)

**Returns:** `throw new`

### MultiVariant

```java
return new MultiVariant()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Deserializer` | class |  |
