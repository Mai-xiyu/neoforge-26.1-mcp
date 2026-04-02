# IQuadTransformer

**Package:** `net.neoforged.neoforge.client.model`
**Type:** interface
**Side:** 🖥️ Client

## Description

Transformer for `BakedQuad baked quads`.
@see QuadTransformers

## Methods

### processInPlace

```java
void processInPlace(BakedQuad quad)
```

**Parameters:**

- `quad` (`BakedQuad`)

### processInPlace

```java
default void processInPlace(List<BakedQuad> quads)
```

**Parameters:**

- `quads` (`List<BakedQuad>`)

**Returns:** `default void`

### processInPlace

```java
 processInPlace()
```

**Returns:** ``

### process

```java
default BakedQuad process(BakedQuad quad)
```

**Parameters:**

- `quad` (`BakedQuad`)

**Returns:** `default BakedQuad`

### processInPlace

```java
 processInPlace()
```

**Returns:** ``

### process

```java
default List<BakedQuad> process(List<BakedQuad> inputs)
```

**Parameters:**

- `inputs` (`List<BakedQuad>`)

**Returns:** `default List<BakedQuad>`

### andThen

```java
default IQuadTransformer andThen(IQuadTransformer other)
```

**Parameters:**

- `other` (`IQuadTransformer`)

**Returns:** `default IQuadTransformer`

### processInPlace

```java
 processInPlace()
```

**Returns:** ``

### copy

```java
private static BakedQuad copy(BakedQuad quad)
```

**Parameters:**

- `quad` (`BakedQuad`)

**Returns:** `private static BakedQuad`

### findOffset

```java
private static int findOffset(VertexFormatElement element)
```

**Parameters:**

- `element` (`VertexFormatElement`)

**Returns:** `private static int`
