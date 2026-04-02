# FutureChain

**Package:** `net.minecraft.util`
**Type:** class
**Implements:** `TaskChainer`, `AutoCloseable`

## Methods

### FutureChain

```java
public FutureChain(Executor p_242395_)
```

**Parameters:**

- `p_242395_` (`Executor`)

**Returns:** `public`

### append

```java
public <T> void append(CompletableFuture<T> p_307286_, Consumer<T> p_307337_)
```

**Parameters:**

- `p_307286_` (`CompletableFuture<T>`)
- `p_307337_` (`Consumer<T>`)

### close

```java
public void close()
```
