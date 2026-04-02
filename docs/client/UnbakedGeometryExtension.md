# UnbakedGeometryExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Methods

### self

```java
private UnbakedGeometry self()
```

**Returns:** `private UnbakedGeometry`

### bake

```java
default QuadCollection bake(TextureSlots textureSlots, ModelBaker baker, ModelState state, ModelDebugName debugName, ContextMap additionalProperties)
```

**Parameters:**

- `textureSlots` (`TextureSlots`)
- `baker` (`ModelBaker`)
- `state` (`ModelState`)
- `debugName` (`ModelDebugName`)
- `additionalProperties` (`ContextMap`)

**Returns:** `QuadCollection`
