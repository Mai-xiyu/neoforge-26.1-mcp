# ITexturedModelExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Methods

### updateTemplate

```java
default TexturedModel updateTemplate(UnaryOperator<ModelTemplate> modifier)
```

**Parameters:**

- `modifier` (`UnaryOperator<ModelTemplate>`)

**Returns:** `TexturedModel`

### self

```java
private TexturedModel self()
```

**Returns:** `private TexturedModel`

### updateTemplate

```java
default TexturedModel.Provider updateTemplate(UnaryOperator<ModelTemplate> modifier)
```

**Parameters:**

- `modifier` (`UnaryOperator<ModelTemplate>`)

**Returns:** `TexturedModel.Provider`

### self

```java
private TexturedModel.Provider self()
```

**Returns:** `private TexturedModel.Provider`
