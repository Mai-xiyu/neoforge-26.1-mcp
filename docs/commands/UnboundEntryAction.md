# UnboundEntryAction

**Package:** `net.minecraft.commands.execution`
**Type:** interface<T>
**Annotations:** `@FunctionalInterface`

## Methods

### execute

```java
void execute(T p_305930_, ExecutionContext<T> p_306291_, Frame p_309692_)
```

**Parameters:**

- `p_305930_` (`T`)
- `p_306291_` (`ExecutionContext<T>`)
- `p_309692_` (`Frame`)

### bind

```java
default EntryAction<T> bind(T p_306075_)
```

**Parameters:**

- `p_306075_` (`T`)

**Returns:** `default EntryAction<T>`
