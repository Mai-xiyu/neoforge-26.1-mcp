# ResourceLocationPattern

**Package:** `net.minecraft.util`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ResourceLocationPattern>` |  |

## Methods

### ResourceLocationPattern

```java
private ResourceLocationPattern(Optional<Pattern> p_261800_, Optional<Pattern> p_262131_)
```

**Parameters:**

- `p_261800_` (`Optional<Pattern>`)
- `p_262131_` (`Optional<Pattern>`)

**Returns:** `private`

### namespacePredicate

```java
public Predicate<String> namespacePredicate()
```

**Returns:** `public Predicate<String>`

### pathPredicate

```java
public Predicate<String> pathPredicate()
```

**Returns:** `public Predicate<String>`

### locationPredicate

```java
public Predicate<ResourceLocation> locationPredicate()
```

**Returns:** `public Predicate<ResourceLocation>`
