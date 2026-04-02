# MultiPart

**Package:** `net.minecraft.client.renderer.block.model.multipart`
**Type:** class
**Implements:** `UnbakedModel`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### MultiPart

```java
public MultiPart(StateDefinition<Block, BlockState> p_111965_, List<Selector> p_111966_)
```

**Parameters:**

- `p_111965_` (`StateDefinition<Block, BlockState>`)
- `p_111966_` (`List<Selector>`)

**Returns:** `public`

### getSelectors

```java
public List<Selector> getSelectors()
```

**Returns:** `public List<Selector>`

### getMultiVariants

```java
public Set<MultiVariant> getMultiVariants()
```

**Returns:** `public Set<MultiVariant>`

### equals

```java
public boolean equals(Object p_111984_)
```

**Parameters:**

- `p_111984_` (`Object`)

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
public void resolveParents(Function<ResourceLocation, UnbakedModel> p_251539_)
```

**Parameters:**

- `p_251539_` (`Function<ResourceLocation, UnbakedModel>`)

### bake

```java
public BakedModel bake(ModelBaker p_249988_, Function<Material, TextureAtlasSprite> p_111972_, ModelState p_111973_)
```

**Parameters:**

- `p_249988_` (`ModelBaker`)
- `p_111972_` (`Function<Material, TextureAtlasSprite>`)
- `p_111973_` (`ModelState`)

**Returns:** `BakedModel`

### Deserializer

```java
public Deserializer(BlockModelDefinition.Context p_111989_)
```

**Parameters:**

- `p_111989_` (`BlockModelDefinition.Context`)

**Returns:** `public`

### deserialize

```java
public MultiPart deserialize(JsonElement p_111994_, Type p_111995_, JsonDeserializationContext p_111996_)
```

**Parameters:**

- `p_111994_` (`JsonElement`)
- `p_111995_` (`Type`)
- `p_111996_` (`JsonDeserializationContext`)

**Returns:** `public MultiPart`

### getSelectors

```java
private List<Selector> getSelectors(JsonDeserializationContext p_111991_, JsonArray p_111992_)
```

**Parameters:**

- `p_111991_` (`JsonDeserializationContext`)
- `p_111992_` (`JsonArray`)

**Returns:** `private List<Selector>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Deserializer` | class |  |
