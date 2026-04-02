# AbortableIterationConsumer

**Package:** `net.minecraft.util`
**Type:** interface<T>
**Annotations:** `@FunctionalInterface`

## Methods

### accept

```java
AbortableIterationConsumer.Continuation accept(T p_261708_)
```

**Parameters:**

- `p_261708_` (`T`)

**Returns:** `AbortableIterationConsumer.Continuation`

### forConsumer

```java
<T> static <T> AbortableIterationConsumer<T> forConsumer(Consumer<T> p_261477_)
```

**Parameters:**

- `p_261477_` (`Consumer<T>`)

**Returns:** `static <T> AbortableIterationConsumer<T>`

### shouldAbort

```java
public boolean shouldAbort()
```

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Continuation` | enum |  |
