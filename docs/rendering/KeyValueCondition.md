# KeyValueCondition

**Package:** `net.minecraft.client.renderer.block.model.multipart`
**Type:** class
**Implements:** `Condition`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### KeyValueCondition

```java
public KeyValueCondition(String p_111939_, String p_111940_)
```

**Parameters:**

- `p_111939_` (`String`)
- `p_111940_` (`String`)

**Returns:** `public`

### getPredicate

```java
public Predicate<BlockState> getPredicate(StateDefinition<Block, BlockState> p_111960_)
```

**Parameters:**

- `p_111960_` (`StateDefinition<Block, BlockState>`)

**Returns:** `Predicate<BlockState>`

### getBlockStatePredicate

```java
private Predicate<BlockState> getBlockStatePredicate(StateDefinition<Block, BlockState> p_111945_, Property<?> p_111946_, String p_111947_)
```

**Parameters:**

- `p_111945_` (`StateDefinition<Block, BlockState>`)
- `p_111946_` (`Property<?>`)
- `p_111947_` (`String`)

**Returns:** `private Predicate<BlockState>`

### toString

```java
public String toString()
```

**Returns:** `String`
