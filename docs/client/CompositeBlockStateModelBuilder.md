# CompositeBlockStateModelBuilder

**Package:** `net.neoforged.neoforge.client.model.generators.blockstate`
**Type:** class
**Extends:** `CustomBlockStateModelBuilder`
**Side:** 🖥️ Client

## Description

This builder creates a `CompositeBlockModel.Unbaked`.

## Methods

### addPartModel

```java
public void addPartModel(BlockStateModel.Unbaked partModel)
```

**Parameters:**

- `partModel` (`BlockStateModel.Unbaked`)

### with

```java
public CompositeBlockStateModelBuilder with(VariantMutator variantMutator)
```

**Parameters:**

- `variantMutator` (`VariantMutator`)

**Returns:** `CompositeBlockStateModelBuilder`

### with

```java
public CustomBlockStateModelBuilder with(UnbakedMutator variantMutator)
```

**Parameters:**

- `variantMutator` (`UnbakedMutator`)

**Returns:** `CustomBlockStateModelBuilder`

### toUnbaked

```java
public CustomUnbakedBlockStateModel toUnbaked()
```

**Returns:** `CustomUnbakedBlockStateModel`
