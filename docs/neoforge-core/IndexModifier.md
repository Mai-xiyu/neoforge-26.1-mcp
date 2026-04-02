# IndexModifier

**Package:** `net.neoforged.neoforge.transfer`
**Type:** interface<T extends Resource>
**Annotations:** `@FunctionalInterface`

## Description

Represents a function to directly mutate the resource and amount at a specific index of a `ResourceHandler`.

## Methods

### set

```java
void set(int index, T resource, int amount)
```

**Parameters:**

- `index` (`int`)
- `resource` (`T`)
- `amount` (`int`)
