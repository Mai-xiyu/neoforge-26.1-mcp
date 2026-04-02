# CustomModifierExecutor

**Package:** `net.minecraft.commands.execution`
**Type:** interface<T>

## Methods

### apply

```java
void apply(T p_309576_, List<T> p_305872_, ContextChain<T> p_306034_, ChainModifiers p_309561_, ExecutionControl<T> p_305771_)
```

**Parameters:**

- `p_309576_` (`T`)
- `p_305872_` (`List<T>`)
- `p_306034_` (`ContextChain<T>`)
- `p_309561_` (`ChainModifiers`)
- `p_305771_` (`ExecutionControl<T>`)

### apply

```java
default Collection<T> apply(CommandContext<T> p_306058_)
```

**Parameters:**

- `p_306058_` (`CommandContext<T>`)

**Returns:** `Collection<T>`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("This function should not run")
```

**Parameters:**

- `run"` (`"This function should not`)

**Returns:** `throw new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ModifierAdapter` | interface |  |
