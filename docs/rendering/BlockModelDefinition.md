# BlockModelDefinition

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `gson` | `Gson` |  |

## Methods

### fromStream

```java
public static BlockModelDefinition fromStream(BlockModelDefinition.Context p_111541_, Reader p_111542_)
```

**Parameters:**

- `p_111541_` (`BlockModelDefinition.Context`)
- `p_111542_` (`Reader`)

**Returns:** `public static BlockModelDefinition`

### fromJsonElement

```java
public static BlockModelDefinition fromJsonElement(BlockModelDefinition.Context p_249700_, JsonElement p_250730_)
```

**Parameters:**

- `p_249700_` (`BlockModelDefinition.Context`)
- `p_250730_` (`JsonElement`)

**Returns:** `public static BlockModelDefinition`

### BlockModelDefinition

```java
public BlockModelDefinition(Map<String, MultiVariant> p_111537_, MultiPart p_111538_)
```

**Parameters:**

- `p_111537_` (`Map<String, MultiVariant>`)
- `p_111538_` (`MultiPart`)

**Returns:** `public`

### BlockModelDefinition

```java
public BlockModelDefinition(List<BlockModelDefinition> p_111535_)
```

**Parameters:**

- `p_111535_` (`List<BlockModelDefinition>`)

**Returns:** `public`

### hasVariant

```java
public boolean hasVariant(String p_173426_)
```

**Parameters:**

- `p_173426_` (`String`)

**Returns:** `boolean`

### getVariant

```java
public MultiVariant getVariant(String p_173429_)
```

**Parameters:**

- `p_173429_` (`String`)

**Returns:** `MultiVariant`

### equals

```java
public boolean equals(Object p_111546_)
```

**Parameters:**

- `p_111546_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### getVariants

```java
public Map<String, MultiVariant> getVariants()
```

**Returns:** `public Map<String, MultiVariant>`

### getMultiVariants

```java
public Set<MultiVariant> getMultiVariants()
```

**Returns:** `Set<MultiVariant>`

### isMultiPart

```java
public boolean isMultiPart()
```

**Returns:** `public boolean`

### getMultiPart

```java
public MultiPart getMultiPart()
```

**Returns:** `public MultiPart`

### getDefinition

```java
public StateDefinition<Block, BlockState> getDefinition()
```

**Returns:** `public StateDefinition<Block, BlockState>`

### setDefinition

```java
public void setDefinition(StateDefinition<Block, BlockState> p_111553_)
```

**Parameters:**

- `p_111553_` (`StateDefinition<Block, BlockState>`)

**Returns:** `public void`

### deserialize

```java
public BlockModelDefinition deserialize(JsonElement p_111559_, Type p_111560_, JsonDeserializationContext p_111561_)
```

**Parameters:**

- `p_111559_` (`JsonElement`)
- `p_111560_` (`Type`)
- `p_111561_` (`JsonDeserializationContext`)

**Returns:** `public BlockModelDefinition`

### BlockModelDefinition

```java
return new BlockModelDefinition()
```

**Returns:** `return new`

### JsonParseException

```java
throw new JsonParseException("Neither 'variants' nor 'multipart' found")
```

**Parameters:**

- `found"` (`"Neither 'variants' nor 'multipart'`)

**Returns:** `throw new`

### getVariants

```java
protected Map<String, MultiVariant> getVariants(JsonDeserializationContext p_111556_, JsonObject p_111557_)
```

**Parameters:**

- `p_111556_` (`JsonDeserializationContext`)
- `p_111557_` (`JsonObject`)

**Returns:** `protected Map<String, MultiVariant>`

### getMultiPart

```java
protected MultiPart getMultiPart(JsonDeserializationContext p_111563_, JsonObject p_111564_)
```

**Parameters:**

- `p_111563_` (`JsonDeserializationContext`)
- `p_111564_` (`JsonObject`)

**Returns:** `MultiPart`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Context` | class |  |
| `Deserializer` | class |  |
| `MissingVariantException` | class |  |
