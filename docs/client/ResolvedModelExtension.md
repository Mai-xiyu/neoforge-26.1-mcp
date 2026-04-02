# ResolvedModelExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Description

Extension for `ResolvedModel`.

## Methods

### self

```java
private ResolvedModel self()
```

**Returns:** `private ResolvedModel`

### findTopAdditionalProperties

```java
static ContextMap findTopAdditionalProperties(ResolvedModel topModel)
```

**Parameters:**

- `topModel` (`ResolvedModel`)

**Returns:** `ContextMap`

### fillAdditionalProperties

```java
 fillAdditionalProperties()
```

**Returns:** ``

### fillAdditionalProperties

```java
private static void fillAdditionalProperties(ResolvedModel model, ContextMap.Builder propertiesBuilder)
```

**Parameters:**

- `model` (`ResolvedModel`)
- `propertiesBuilder` (`ContextMap.Builder`)

**Returns:** `private static void`

### getTopAdditionalProperties

```java
default ContextMap getTopAdditionalProperties()
```

**Returns:** `default ContextMap`
