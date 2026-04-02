# CompositeModelBuilder

**Package:** `net.neoforged.neoforge.client.model.generators.loaders`
**Type:** class<T extends ModelBuilder<T>> extends CustomLoaderBuilder<T>
**Side:** 🖥️ Client

## Methods

### begin

```java
public static <T extends ModelBuilder<T>> CompositeModelBuilder<T> begin(T parent, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `parent` (`T`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `public static <T extends ModelBuilder<T>> CompositeModelBuilder<T>`

### CompositeModelBuilder

```java
protected CompositeModelBuilder(T parent, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `parent` (`T`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `protected`

### child

```java
public CompositeModelBuilder<T> child(String name, T modelBuilder)
```

**Parameters:**

- `name` (`String`)
- `modelBuilder` (`T`)

**Returns:** `public CompositeModelBuilder<T>`

### itemRenderOrder

```java
public CompositeModelBuilder<T> itemRenderOrder(String[]... names)
```

**Parameters:**

- `names` (`String[]...`)

**Returns:** `public CompositeModelBuilder<T>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("names contains \"" + name + "\", which is not a child of this model")
```

**Parameters:**

- `"\"` (`"names contains \"" + name +`)
- `model"` (`which is not a child of this`)

**Returns:** `throw new`

### toJson

```java
public JsonObject toJson(JsonObject json)
```

**Parameters:**

- `json` (`JsonObject`)

**Returns:** `JsonObject`
