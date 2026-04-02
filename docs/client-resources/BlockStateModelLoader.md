# BlockStateModelLoader

**Package:** `net.minecraft.client.resources.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BLOCKSTATE_LISTER` | `FileToIdConverter` |  |

## Methods

### BlockStateModelLoader

```java
public BlockStateModelLoader(Map<ResourceLocation, List<BlockStateModelLoader.LoadedJson>> p_352185_, ProfilerFiller p_352252_, UnbakedModel p_352193_, BlockColors p_352120_, BiConsumer<ModelResourceLocation, UnbakedModel> p_352414_)
```

**Parameters:**

- `p_352185_` (`Map<ResourceLocation, List<BlockStateModelLoader.LoadedJson>>`)
- `p_352252_` (`ProfilerFiller`)
- `p_352193_` (`UnbakedModel`)
- `p_352120_` (`BlockColors`)
- `p_352414_` (`BiConsumer<ModelResourceLocation, UnbakedModel>`)

**Returns:** `public`

### loadAllBlockStates

```java
public void loadAllBlockStates()
```

**Returns:** `public void`

### loadBlockStateDefinitions

```java
private void loadBlockStateDefinitions(ResourceLocation p_352059_, StateDefinition<Block, BlockState> p_352064_)
```

**Parameters:**

- `p_352059_` (`ResourceLocation`)
- `p_352064_` (`StateDefinition<Block, BlockState>`)

**Returns:** `private void`

### predicate

```java
private static Predicate<BlockState> predicate(StateDefinition<Block, BlockState> p_352099_, String p_352078_)
```

**Parameters:**

- `p_352099_` (`StateDefinition<Block, BlockState>`)
- `p_352078_` (`String`)

**Returns:** `private static Predicate<BlockState>`

### RuntimeException

```java
throw new RuntimeException("Unknown blockstate property: '" + s1 + "'")
```

**Parameters:**

- `"'"` (`"Unknown blockstate property: '" + s1 +`)

**Returns:** `throw new`

### getValueHelper

```java
static <T extends Comparable<T>> T getValueHelper(Property<T> p_352301_, String p_352273_)
```

**Parameters:**

- `p_352301_` (`Property<T>`)
- `p_352273_` (`String`)

**Returns:** `<T extends Comparable<T>> T`

### registerModelGroup

```java
private void registerModelGroup(Iterable<BlockState> p_352382_)
```

**Parameters:**

- `p_352382_` (`Iterable<BlockState>`)

**Returns:** `private void`

### getModelGroups

```java
public Object2IntMap<BlockState> getModelGroups()
```

**Returns:** `public Object2IntMap<BlockState>`

### BlockStateDefinitionException

```java
public BlockStateDefinitionException(String p_352118_)
```

**Parameters:**

- `p_352118_` (`String`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### LoadedJson

```java
public static record LoadedJson(String source, JsonElement data)
```

**Parameters:**

- `source` (`String`)
- `data` (`JsonElement`)

**Returns:** `record`

### parse

```java
BlockModelDefinition parse(ResourceLocation p_352102_, BlockModelDefinition.Context p_352217_)
```

**Parameters:**

- `p_352102_` (`ResourceLocation`)
- `p_352217_` (`BlockModelDefinition.Context`)

**Returns:** `BlockModelDefinition`

### LoadedModel

```java
static record LoadedModel(UnbakedModel model, Supplier<BlockStateModelLoader.ModelGroupKey> key)
```

**Parameters:**

- `model` (`UnbakedModel`)
- `key` (`Supplier<BlockStateModelLoader.ModelGroupKey>`)

**Returns:** `record`

### ModelGroupKey

```java
static record ModelGroupKey(List<UnbakedModel> models, List<Object> coloringValues)
```

**Parameters:**

- `models` (`List<UnbakedModel>`)
- `coloringValues` (`List<Object>`)

**Returns:** `record`

### create

```java
public static BlockStateModelLoader.ModelGroupKey create(BlockState p_352381_, MultiPart p_352248_, Collection<Property<?>> p_352227_)
```

**Parameters:**

- `p_352381_` (`BlockState`)
- `p_352248_` (`MultiPart`)
- `p_352227_` (`Collection<Property<?>>`)

**Returns:** `public static BlockStateModelLoader.ModelGroupKey`

### create

```java
public static BlockStateModelLoader.ModelGroupKey create(BlockState p_352440_, UnbakedModel p_352383_, Collection<Property<?>> p_352085_)
```

**Parameters:**

- `p_352440_` (`BlockState`)
- `p_352383_` (`UnbakedModel`)
- `p_352085_` (`Collection<Property<?>>`)

**Returns:** `public static BlockStateModelLoader.ModelGroupKey`

### getColoringValues

```java
private static List<Object> getColoringValues(BlockState p_352214_, Collection<Property<?>> p_352157_)
```

**Parameters:**

- `p_352214_` (`BlockState`)
- `p_352157_` (`Collection<Property<?>>`)

**Returns:** `private static List<Object>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LoadedJson` | record |  |
