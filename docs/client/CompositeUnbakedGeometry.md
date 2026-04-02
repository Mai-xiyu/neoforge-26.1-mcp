# CompositeUnbakedGeometry

**Package:** `net.neoforged.neoforge.client.model`
**Type:** class
**Implements:** `ExtendedUnbakedGeometry`
**Side:** 🖥️ Client

## Methods

### CompositeUnbakedGeometry

```java
public CompositeUnbakedGeometry(ImmutableMap<String, Either<Identifier, UnbakedModel>> children)
```

**Parameters:**

- `children` (`ImmutableMap<String, Either<Identifier, UnbakedModel>>`)

**Returns:** `public`

### bake

```java
public QuadCollection bake(TextureSlots textureSlots, ModelBaker baker, ModelState state, ModelDebugName debugName, ContextMap additionalProperties)
```

**Parameters:**

- `textureSlots` (`TextureSlots`)
- `baker` (`ModelBaker`)
- `state` (`ModelState`)
- `debugName` (`ModelDebugName`)
- `additionalProperties` (`ContextMap`)

**Returns:** `QuadCollection`
