# Selector

**Package:** `net.minecraft.client.renderer.block.model.multipart`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### Selector

```java
public Selector(Condition p_112018_, MultiVariant p_112019_)
```

**Parameters:**

- `p_112018_` (`Condition`)
- `p_112019_` (`MultiVariant`)

**Returns:** `public`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Missing condition for selector")
```

**Parameters:**

- `selector"` (`"Missing condition for`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Missing variant for selector")
```

**Parameters:**

- `selector"` (`"Missing variant for`)

**Returns:** `throw new`

### getVariant

```java
public MultiVariant getVariant()
```

**Returns:** `public MultiVariant`

### getPredicate

```java
public Predicate<BlockState> getPredicate(StateDefinition<Block, BlockState> p_112022_)
```

**Parameters:**

- `p_112022_` (`StateDefinition<Block, BlockState>`)

**Returns:** `public Predicate<BlockState>`

### equals

```java
public boolean equals(Object p_112024_)
```

**Parameters:**

- `p_112024_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### deserialize

```java
public Selector deserialize(JsonElement p_112030_, Type p_112031_, JsonDeserializationContext p_112032_)
```

**Parameters:**

- `p_112030_` (`JsonElement`)
- `p_112031_` (`Type`)
- `p_112032_` (`JsonDeserializationContext`)

**Returns:** `public Selector`

### getSelector

```java
private Condition getSelector(JsonObject p_112040_)
```

**Parameters:**

- `p_112040_` (`JsonObject`)

**Returns:** `private Condition`

### getCondition

```java
static Condition getCondition(JsonObject p_112034_)
```

**Parameters:**

- `p_112034_` (`JsonObject`)

**Returns:** `Condition`

### JsonParseException

```java
throw new JsonParseException("No elements found in selector")
```

**Parameters:**

- `selector"` (`"No elements found in`)

**Returns:** `throw new`

### OrCondition

```java
return new OrCondition()
```

**Returns:** `return new`

### AndCondition

```java
return new AndCondition()
```

**Returns:** `return new`

### getKeyValueCondition

```java
private static Condition getKeyValueCondition(Entry<String, JsonElement> p_112036_)
```

**Parameters:**

- `p_112036_` (`Entry<String, JsonElement>`)

**Returns:** `private static Condition`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Deserializer` | class |  |
