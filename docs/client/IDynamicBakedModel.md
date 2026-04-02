# IDynamicBakedModel

**Package:** `net.neoforged.neoforge.client.model`
**Type:** interface
**Extends:** `BakedModel`
**Side:** 🖥️ Client

## Description

Convenience interface with default implementation of `IBakedModelExtension#getQuads(BlockState, Direction, RandomSource, ModelData, RenderType)`.

## Methods

### getQuads

```java
default List<BakedQuad> getQuads(BlockState state, Direction side, RandomSource rand)
```

**Parameters:**

- `state` (`BlockState`)
- `side` (`Direction`)
- `rand` (`RandomSource`)

**Returns:** `List<BakedQuad>`

### getQuads

```java
return getQuads()
```

**Returns:** `return`

### getQuads

```java
List<BakedQuad> getQuads(BlockState state, Direction side, RandomSource rand, ModelData extraData, RenderType renderType)
```

**Parameters:**

- `state` (`BlockState`)
- `side` (`Direction`)
- `rand` (`RandomSource`)
- `extraData` (`ModelData`)
- `renderType` (`RenderType`)

**Returns:** `List<BakedQuad>`
