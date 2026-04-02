# ModelBakerExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Methods

### resolveInlineModel

```java
default ResolvedModel resolveInlineModel(UnbakedModel inlineModel, ModelDebugName debugName)
```

**Parameters:**

- `inlineModel` (`UnbakedModel`)
- `debugName` (`ModelDebugName`)

**Returns:** `ResolvedModel`

### ResolvedModel

```java
return new ResolvedModel()
```

**Returns:** `return new`

### wrapped

```java
public UnbakedModel wrapped()
```

**Returns:** `UnbakedModel`

### parent

```java
public ResolvedModel parent()
```

**Returns:** `ResolvedModel`

### debugName

```java
public String debugName()
```

**Returns:** `String`

### self

```java
private ModelBaker self()
```

**Returns:** `private ModelBaker`
