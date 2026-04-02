# ModelBaker

**Package:** `net.minecraft.client.resources.model`
**Type:** interface
**Extends:** `net.neoforged.neoforge.client.extensions.IModelBakerExtension`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### getModel

```java
UnbakedModel getModel(ResourceLocation p_252194_)
```

**Parameters:**

- `p_252194_` (`ResourceLocation`)

**Returns:** `UnbakedModel`

### bake

```java
BakedModel bake(ResourceLocation p_250776_, ModelState p_251280_)
```

**Parameters:**

- `p_250776_` (`ResourceLocation`)
- `p_251280_` (`ModelState`)

**Returns:** `BakedModel`
