# DynamicFluidContainerModelBuilder

**Package:** `net.neoforged.neoforge.client.model.generators.loaders`
**Type:** class<T extends ModelBuilder<T>> extends CustomLoaderBuilder<T>
**Side:** 🖥️ Client

## Methods

### begin

```java
public static <T extends ModelBuilder<T>> DynamicFluidContainerModelBuilder<T> begin(T parent, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `parent` (`T`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `public static <T extends ModelBuilder<T>> DynamicFluidContainerModelBuilder<T>`

### DynamicFluidContainerModelBuilder

```java
protected DynamicFluidContainerModelBuilder(T parent, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `parent` (`T`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `protected`

### fluid

```java
public DynamicFluidContainerModelBuilder<T> fluid(Fluid fluid)
```

**Parameters:**

- `fluid` (`Fluid`)

**Returns:** `public DynamicFluidContainerModelBuilder<T>`

### flipGas

```java
public DynamicFluidContainerModelBuilder<T> flipGas(boolean flip)
```

**Parameters:**

- `flip` (`boolean`)

**Returns:** `public DynamicFluidContainerModelBuilder<T>`

### applyTint

```java
public DynamicFluidContainerModelBuilder<T> applyTint(boolean tint)
```

**Parameters:**

- `tint` (`boolean`)

**Returns:** `public DynamicFluidContainerModelBuilder<T>`

### coverIsMask

```java
public DynamicFluidContainerModelBuilder<T> coverIsMask(boolean coverIsMask)
```

**Parameters:**

- `coverIsMask` (`boolean`)

**Returns:** `public DynamicFluidContainerModelBuilder<T>`

### applyFluidLuminosity

```java
public DynamicFluidContainerModelBuilder<T> applyFluidLuminosity(boolean applyFluidLuminosity)
```

**Parameters:**

- `applyFluidLuminosity` (`boolean`)

**Returns:** `public DynamicFluidContainerModelBuilder<T>`

### toJson

```java
public JsonObject toJson(JsonObject json)
```

**Parameters:**

- `json` (`JsonObject`)

**Returns:** `JsonObject`
