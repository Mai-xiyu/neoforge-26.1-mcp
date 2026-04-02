# CompositeBlockModel

**Package:** `net.neoforged.neoforge.client.model.block`
**Type:** class
**Implements:** `DynamicBlockStateModel`
**Side:** 🖥️ Client

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAP_CODEC` | `MapCodec<Unbaked>` |  |

## Methods

### CompositeBlockModel

```java
public CompositeBlockModel(List<BlockStateModel> models)
```

**Parameters:**

- `models` (`List<BlockStateModel>`)

**Returns:** `public`

### createGeometryKey

```java
public Object createGeometryKey(BlockAndTintGetter level, BlockPos pos, BlockState state, RandomSource random)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `random` (`RandomSource`)

**Returns:** `Object`

### GeometryKey

```java
return new GeometryKey()
```

**Returns:** `return new`

### GeometryKey

```java
private record GeometryKey(List<Object> subKeys, CompositeBlockModel composite)
```

**Parameters:**

- `subKeys` (`List<Object>`)
- `composite` (`CompositeBlockModel`)

**Returns:** `private record`

### collectParts

```java
public void collectParts(BlockAndTintGetter level, BlockPos pos, BlockState state, RandomSource random, List<BlockStateModelPart> parts)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `random` (`RandomSource`)
- `parts` (`List<BlockStateModelPart>`)

### particleMaterial

```java
public Material.Baked particleMaterial()
```

**Returns:** `Material.Baked`

### particleMaterial

```java
public Material.Baked particleMaterial(BlockAndTintGetter level, BlockPos pos, BlockState state)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)

**Returns:** `Material.Baked`

### materialFlags

```java
.MaterialFlags
    public int materialFlags()
```

**Returns:** `.MaterialFlags
    public int`

### materialFlags

```java
.MaterialFlags
    public int materialFlags(BlockAndTintGetter level, BlockPos pos, BlockState state)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)

**Returns:** `.MaterialFlags
    public int`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Composite model requires at least one submodel")
```

**Parameters:**

- `submodel"` (`"Composite model requires at least one`)

**Returns:** `throw new`

### bake

```java
public BlockStateModel bake(ModelBaker baker)
```

**Parameters:**

- `baker` (`ModelBaker`)

**Returns:** `BlockStateModel`

### resolveDependencies

```java
public void resolveDependencies(Resolver resolver)
```

**Parameters:**

- `resolver` (`Resolver`)

### codec

```java
public MapCodec<? extends CustomUnbakedBlockStateModel> codec()
```

**Returns:** `MapCodec<? extends CustomUnbakedBlockStateModel>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Unbaked` | record |  |
