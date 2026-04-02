# TexturedModel

**Package:** `net.minecraft.data.models.model`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CUBE` | `TexturedModel.Provider` |  |
| `CUBE_INNER_FACES` | `TexturedModel.Provider` |  |
| `CUBE_MIRRORED` | `TexturedModel.Provider` |  |
| `COLUMN` | `TexturedModel.Provider` |  |
| `COLUMN_HORIZONTAL` | `TexturedModel.Provider` |  |
| `CUBE_TOP_BOTTOM` | `TexturedModel.Provider` |  |
| `CUBE_TOP` | `TexturedModel.Provider` |  |
| `ORIENTABLE_ONLY_TOP` | `TexturedModel.Provider` |  |
| `ORIENTABLE` | `TexturedModel.Provider` |  |
| `CARPET` | `TexturedModel.Provider` |  |
| `FLOWERBED_1` | `TexturedModel.Provider` |  |
| `FLOWERBED_2` | `TexturedModel.Provider` |  |
| `FLOWERBED_3` | `TexturedModel.Provider` |  |
| `FLOWERBED_4` | `TexturedModel.Provider` |  |
| `GLAZED_TERRACOTTA` | `TexturedModel.Provider` |  |
| `CORAL_FAN` | `TexturedModel.Provider` |  |
| `PARTICLE_ONLY` | `TexturedModel.Provider` |  |
| `ANVIL` | `TexturedModel.Provider` |  |
| `LEAVES` | `TexturedModel.Provider` |  |
| `LANTERN` | `TexturedModel.Provider` |  |
| `HANGING_LANTERN` | `TexturedModel.Provider` |  |
| `SEAGRASS` | `TexturedModel.Provider` |  |
| `COLUMN_ALT` | `TexturedModel.Provider` |  |
| `COLUMN_HORIZONTAL_ALT` | `TexturedModel.Provider` |  |
| `TOP_BOTTOM_WITH_WALL` | `TexturedModel.Provider` |  |
| `COLUMN_WITH_WALL` | `TexturedModel.Provider` |  |

## Methods

### TexturedModel

```java
private TexturedModel(TextureMapping p_125930_, ModelTemplate p_125931_)
```

**Parameters:**

- `p_125930_` (`TextureMapping`)
- `p_125931_` (`ModelTemplate`)

**Returns:** `private`

### getTemplate

```java
public ModelTemplate getTemplate()
```

**Returns:** `public ModelTemplate`

### getMapping

```java
public TextureMapping getMapping()
```

**Returns:** `public TextureMapping`

### updateTextures

```java
public TexturedModel updateTextures(Consumer<TextureMapping> p_125941_)
```

**Parameters:**

- `p_125941_` (`Consumer<TextureMapping>`)

**Returns:** `public TexturedModel`

### create

```java
public ResourceLocation create(Block p_125938_, BiConsumer<ResourceLocation, Supplier<JsonElement>> p_125939_)
```

**Parameters:**

- `p_125938_` (`Block`)
- `p_125939_` (`BiConsumer<ResourceLocation, Supplier<JsonElement>>`)

**Returns:** `public ResourceLocation`

### createWithSuffix

```java
public ResourceLocation createWithSuffix(Block p_125934_, String p_125935_, BiConsumer<ResourceLocation, Supplier<JsonElement>> p_125936_)
```

**Parameters:**

- `p_125934_` (`Block`)
- `p_125935_` (`String`)
- `p_125936_` (`BiConsumer<ResourceLocation, Supplier<JsonElement>>`)

**Returns:** `public ResourceLocation`

### createDefault

```java
private static TexturedModel.Provider createDefault(Function<Block, TextureMapping> p_125943_, ModelTemplate p_125944_)
```

**Parameters:**

- `p_125943_` (`Function<Block, TextureMapping>`)
- `p_125944_` (`ModelTemplate`)

**Returns:** `private static TexturedModel.Provider`

### createAllSame

```java
public static TexturedModel createAllSame(ResourceLocation p_125950_)
```

**Parameters:**

- `p_125950_` (`ResourceLocation`)

**Returns:** `public static TexturedModel`

### get

```java
TexturedModel get(Block p_125965_)
```

**Parameters:**

- `p_125965_` (`Block`)

**Returns:** `TexturedModel`

### create

```java
default ResourceLocation create(Block p_125957_, BiConsumer<ResourceLocation, Supplier<JsonElement>> p_125958_)
```

**Parameters:**

- `p_125957_` (`Block`)
- `p_125958_` (`BiConsumer<ResourceLocation, Supplier<JsonElement>>`)

**Returns:** `default ResourceLocation`

### createWithSuffix

```java
default ResourceLocation createWithSuffix(Block p_125953_, String p_125954_, BiConsumer<ResourceLocation, Supplier<JsonElement>> p_125955_)
```

**Parameters:**

- `p_125953_` (`Block`)
- `p_125954_` (`String`)
- `p_125955_` (`BiConsumer<ResourceLocation, Supplier<JsonElement>>`)

**Returns:** `default ResourceLocation`

### updateTexture

```java
default TexturedModel.Provider updateTexture(Consumer<TextureMapping> p_125960_)
```

**Parameters:**

- `p_125960_` (`Consumer<TextureMapping>`)

**Returns:** `default TexturedModel.Provider`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | interface |  |
