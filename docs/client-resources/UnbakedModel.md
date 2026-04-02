# UnbakedModel

**Package:** `net.minecraft.client.resources.model`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### getDependencies

```java
Collection<ResourceLocation> getDependencies()
```

**Returns:** `Collection<ResourceLocation>`

### resolveParents

```java
void resolveParents(Function<ResourceLocation, UnbakedModel> p_119538_)
```

**Parameters:**

- `p_119538_` (`Function<ResourceLocation, UnbakedModel>`)

### bake

```java
BakedModel bake(ModelBaker p_250133_, Function<Material, TextureAtlasSprite> p_119535_, ModelState p_119536_)
```

**Parameters:**

- `p_250133_` (`ModelBaker`)
- `p_119535_` (`Function<Material, TextureAtlasSprite>`)
- `p_119536_` (`ModelState`)

**Returns:** `BakedModel`
