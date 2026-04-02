# ItemLayerModelBuilder

**Package:** `net.neoforged.neoforge.client.model.generators.loaders`
**Type:** class<T extends ModelBuilder<T>> extends CustomLoaderBuilder<T>
**Side:** 🖥️ Client

## Methods

### begin

```java
public static <T extends ModelBuilder<T>> ItemLayerModelBuilder<T> begin(T parent, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `parent` (`T`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `public static <T extends ModelBuilder<T>> ItemLayerModelBuilder<T>`

### ItemLayerModelBuilder

```java
protected ItemLayerModelBuilder(T parent, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `parent` (`T`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `protected`

### emissive

```java
public ItemLayerModelBuilder<T> emissive(int blockLight, int skyLight, int[]... layers)
```

**Parameters:**

- `blockLight` (`int`)
- `skyLight` (`int`)
- `layers` (`int[]...`)

**Returns:** `ItemLayerModelBuilder<T>`

### color

```java
public ItemLayerModelBuilder<T> color(int color, int[]... layers)
```

**Parameters:**

- `color` (`int`)
- `layers` (`int[]...`)

**Returns:** `ItemLayerModelBuilder<T>`

### renderType

```java
public ItemLayerModelBuilder<T> renderType(String renderType, int[]... layers)
```

**Parameters:**

- `renderType` (`String`)
- `layers` (`int[]...`)

**Returns:** `ItemLayerModelBuilder<T>`

### renderType

```java
return renderType()
```

**Returns:** `return`

### renderType

```java
public ItemLayerModelBuilder<T> renderType(ResourceLocation renderType, int[]... layers)
```

**Parameters:**

- `renderType` (`ResourceLocation`)
- `layers` (`int[]...`)

**Returns:** `ItemLayerModelBuilder<T>`

### toJson

```java
public JsonObject toJson(JsonObject json)
```

**Parameters:**

- `json` (`JsonObject`)

**Returns:** `JsonObject`
