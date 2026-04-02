# AndCondition

**Package:** `net.minecraft.client.renderer.block.model.multipart`
**Type:** class
**Implements:** `Condition`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TOKEN` | `String` |  |

## Methods

### AndCondition

```java
public AndCondition(Iterable<? extends Condition> p_111910_)
```

**Parameters:**

- `p_111910_` (`Iterable<? extends Condition>`)

**Returns:** `public`

### getPredicate

```java
public Predicate<BlockState> getPredicate(StateDefinition<Block, BlockState> p_111921_)
```

**Parameters:**

- `p_111921_` (`StateDefinition<Block, BlockState>`)

**Returns:** `Predicate<BlockState>`
