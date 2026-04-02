# SeparateTransformsModelBuilder

**Package:** `net.neoforged.neoforge.client.model.generators.loaders`
**Type:** class<T extends ModelBuilder<T>> extends CustomLoaderBuilder<T>
**Side:** 🖥️ Client

## Methods

### begin

```java
public static <T extends ModelBuilder<T>> SeparateTransformsModelBuilder<T> begin(T parent, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `parent` (`T`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `public static <T extends ModelBuilder<T>> SeparateTransformsModelBuilder<T>`

### SeparateTransformsModelBuilder

```java
protected SeparateTransformsModelBuilder(T parent, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `parent` (`T`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `protected`

### base

```java
public SeparateTransformsModelBuilder<T> base(T modelBuilder)
```

**Parameters:**

- `modelBuilder` (`T`)

**Returns:** `public SeparateTransformsModelBuilder<T>`

### perspective

```java
public SeparateTransformsModelBuilder<T> perspective(ItemDisplayContext perspective, T modelBuilder)
```

**Parameters:**

- `perspective` (`ItemDisplayContext`)
- `modelBuilder` (`T`)

**Returns:** `public SeparateTransformsModelBuilder<T>`

### toJson

```java
public JsonObject toJson(JsonObject json)
```

**Parameters:**

- `json` (`JsonObject`)

**Returns:** `JsonObject`
