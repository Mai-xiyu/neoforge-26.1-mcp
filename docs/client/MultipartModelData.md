# MultipartModelData

**Package:** `net.neoforged.neoforge.client.model.data`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@ApiStatus`

## Methods

### resolve

```java
public static ModelData resolve(ModelData modelData, BakedModel model)
```

**Parameters:**

- `modelData` (`ModelData`)
- `model` (`BakedModel`)

**Returns:** `ModelData`

### create

```java
public static ModelData create(List<Pair<Predicate<BlockState>, BakedModel>> selectors, BitSet bitset, BlockAndTintGetter level, BlockPos pos, BlockState state, ModelData tileModelData)
```

**Parameters:**

- `selectors` (`List<Pair<Predicate<BlockState>, BakedModel>>`)
- `bitset` (`BitSet`)
- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `tileModelData` (`ModelData`)

**Returns:** `public static ModelData`
