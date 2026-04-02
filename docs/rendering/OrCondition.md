# OrCondition

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

### OrCondition

```java
public OrCondition(Iterable<? extends Condition> p_112003_)
```

**Parameters:**

- `p_112003_` (`Iterable<? extends Condition>`)

**Returns:** `public`

### getPredicate

```java
public Predicate<BlockState> getPredicate(StateDefinition<Block, BlockState> p_112014_)
```

**Parameters:**

- `p_112014_` (`StateDefinition<Block, BlockState>`)

**Returns:** `Predicate<BlockState>`
