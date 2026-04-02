# ItemModelBuilder

**Package:** `net.neoforged.neoforge.client.model.generators`
**Type:** class
**Extends:** `ModelBuilder<ItemModelBuilder>`
**Side:** 🖥️ Client

## Description

Builder for item models, adds the ability to build overrides via
`#override()`.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `overrides` | `List<OverrideBuilder>` |  |

## Methods

### ItemModelBuilder

```java
public ItemModelBuilder(ResourceLocation outputLocation, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `outputLocation` (`ResourceLocation`)
- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### override

```java
public OverrideBuilder override()
```

**Returns:** `public OverrideBuilder`

### override

```java
public OverrideBuilder override(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `OverrideBuilder`

### toJson

```java
public JsonObject toJson()
```

**Returns:** `JsonObject`

### model

```java
public OverrideBuilder model(ModelFile model)
```

**Parameters:**

- `model` (`ModelFile`)

**Returns:** `public OverrideBuilder`

### predicate

```java
public OverrideBuilder predicate(ResourceLocation key, float value)
```

**Parameters:**

- `key` (`ResourceLocation`)
- `value` (`float`)

**Returns:** `public OverrideBuilder`

### end

```java
public ItemModelBuilder end()
```

**Returns:** `public ItemModelBuilder`

### toJson

```java
JsonObject toJson()
```

**Returns:** `JsonObject`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `OverrideBuilder` | class |  |
