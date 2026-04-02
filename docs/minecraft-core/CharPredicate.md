# CharPredicate

**Package:** `net.minecraft`
**Type:** interface
**Annotations:** `@FunctionalInterface`

## Methods

### test

```java
boolean test(char p_125855_)
```

**Parameters:**

- `p_125855_` (`char`)

**Returns:** `boolean`

### and

```java
default CharPredicate and(CharPredicate p_178287_)
```

**Parameters:**

- `p_178287_` (`CharPredicate`)

**Returns:** `default CharPredicate`

### negate

```java
default CharPredicate negate()
```

**Returns:** `default CharPredicate`

### or

```java
default CharPredicate or(CharPredicate p_178292_)
```

**Parameters:**

- `p_178292_` (`CharPredicate`)

**Returns:** `default CharPredicate`
