# UnbakedStandaloneModel

**Package:** `net.neoforged.neoforge.client.model.standalone`
**Type:** interface<T>
**Extends:** `ResolvableModel`
**Side:** 🖥️ Client

## Description

An unbaked StandaloneModelKey standalone model.


Similar to `ItemModel.Unbaked` and other `ResolvableModel`s, this model can
ResolvableModel.Resolver#resolveDependencies(Resolver) depend on one or more model files, and then
combine them into a single baked model.


The baked object can be retrieved later using `ModelManager#getStandaloneModel(StandaloneModelKey)`.


`SimpleUnbakedStandaloneModel` provides a basic implementation that loads a single model.
@param <T> The type of the baked model.
@see ModelEvent.RegisterStandalone#register(StandaloneModelKey, UnbakedStandaloneModel)

## Methods

### bake

```java
T bake(ModelBaker baker)
```

**Parameters:**

- `baker` (`ModelBaker`)

**Returns:** `T`
