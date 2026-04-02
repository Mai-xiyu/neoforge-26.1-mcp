# ExtendedUnbakedGeometry

**Package:** `net.neoforged.neoforge.client.model`
**Type:** interface
**Extends:** `UnbakedGeometry`
**Side:** 🖥️ Client
**Annotations:** `@FunctionalInterface`

## Description

Base interface for unbaked models that wish to support the NeoForge-added `bake` method
that receives UnbakedModelExtension#fillAdditionalProperties(ContextMap.Builder) additional properties.

## Methods

### bake

```java
default QuadCollection bake(TextureSlots textureSlots, ModelBaker modelBaker, ModelState modelState, ModelDebugName name)
```

**Parameters:**

- `textureSlots` (`TextureSlots`)
- `modelBaker` (`ModelBaker`)
- `modelState` (`ModelState`)
- `name` (`ModelDebugName`)

**Returns:** `QuadCollection`

### bake

```java
return bake()
```

**Returns:** `return`

### bake

```java
QuadCollection bake(TextureSlots textureSlots, ModelBaker baker, ModelState state, ModelDebugName debugName, ContextMap additionalProperties)
```

**Parameters:**

- `textureSlots` (`TextureSlots`)
- `baker` (`ModelBaker`)
- `state` (`ModelState`)
- `debugName` (`ModelDebugName`)
- `additionalProperties` (`ContextMap`)

**Returns:** `QuadCollection`
