# ObjModelBuilder

**Package:** `net.neoforged.neoforge.client.model.generators.loaders`
**Type:** class<T extends ModelBuilder<T>> extends CustomLoaderBuilder<T>
**Side:** 🖥️ Client

## Methods

### begin

```java
public static <T extends ModelBuilder<T>> ObjModelBuilder<T> begin(T parent, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `parent` (`T`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `public static <T extends ModelBuilder<T>> ObjModelBuilder<T>`

### ObjModelBuilder

```java
protected ObjModelBuilder(T parent, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `parent` (`T`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `protected`

### modelLocation

```java
public ObjModelBuilder<T> modelLocation(ResourceLocation modelLocation)
```

**Parameters:**

- `modelLocation` (`ResourceLocation`)

**Returns:** `public ObjModelBuilder<T>`

### automaticCulling

```java
public ObjModelBuilder<T> automaticCulling(boolean automaticCulling)
```

**Parameters:**

- `automaticCulling` (`boolean`)

**Returns:** `public ObjModelBuilder<T>`

### shadeQuads

```java
public ObjModelBuilder<T> shadeQuads(boolean shadeQuads)
```

**Parameters:**

- `shadeQuads` (`boolean`)

**Returns:** `public ObjModelBuilder<T>`

### flipV

```java
public ObjModelBuilder<T> flipV(boolean flipV)
```

**Parameters:**

- `flipV` (`boolean`)

**Returns:** `public ObjModelBuilder<T>`

### emissiveAmbient

```java
public ObjModelBuilder<T> emissiveAmbient(boolean ambientEmissive)
```

**Parameters:**

- `ambientEmissive` (`boolean`)

**Returns:** `public ObjModelBuilder<T>`

### overrideMaterialLibrary

```java
public ObjModelBuilder<T> overrideMaterialLibrary(ResourceLocation mtlOverride)
```

**Parameters:**

- `mtlOverride` (`ResourceLocation`)

**Returns:** `public ObjModelBuilder<T>`

### toJson

```java
public JsonObject toJson(JsonObject json)
```

**Parameters:**

- `json` (`JsonObject`)

**Returns:** `JsonObject`
