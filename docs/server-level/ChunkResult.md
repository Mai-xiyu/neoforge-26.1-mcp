# ChunkResult

**Package:** `net.minecraft.server.level`
**Type:** interface<T>

## Methods

### of

```java
<T> static <T> ChunkResult<T> of(T p_330787_)
```

**Parameters:**

- `p_330787_` (`T`)

**Returns:** `static <T> ChunkResult<T>`

### error

```java
<T> static <T> ChunkResult<T> error(String p_330756_)
```

**Parameters:**

- `p_330756_` (`String`)

**Returns:** `static <T> ChunkResult<T>`

### error

```java
<T> static <T> ChunkResult<T> error(Supplier<String> p_331226_)
```

**Parameters:**

- `p_331226_` (`Supplier<String>`)

**Returns:** `static <T> ChunkResult<T>`

### isSuccess

```java
boolean isSuccess()
```

**Returns:** `boolean`

### orElse

```java
T orElse(T p_332159_)
```

**Parameters:**

- `p_332159_` (`T`)

**Returns:** `T`

### orElse

```java
static <R> R orElse(ChunkResult<? extends R> p_331283_, R p_331474_)
```

**Parameters:**

- `p_331283_` (`ChunkResult<? extends R>`)
- `p_331474_` (`R`)

**Returns:** `R`

### getError

```java
String getError()
```

**Returns:** `String`

### ifSuccess

```java
ChunkResult<T> ifSuccess(Consumer<T> p_331126_)
```

**Parameters:**

- `p_331126_` (`Consumer<T>`)

**Returns:** `ChunkResult<T>`

### map

```java
<R> <R> ChunkResult<R> map(Function<T, R> p_331664_)
```

**Parameters:**

- `p_331664_` (`Function<T, R>`)

**Returns:** `<R> ChunkResult<R>`

### orElseThrow

```java
<E extends Throwable> <E extends Throwable> T orElseThrow(Supplier<E> p_332112_)
```

**Parameters:**

- `p_332112_` (`Supplier<E>`)

**Returns:** `<E extends Throwable> T`

### isSuccess

```java
public boolean isSuccess()
```

**Returns:** `boolean`

### orElse

```java
public T orElse(T p_332121_)
```

**Parameters:**

- `p_332121_` (`T`)

**Returns:** `T`

### getError

```java
public String getError()
```

**Returns:** `String`

### ifSuccess

```java
public ChunkResult<T> ifSuccess(Consumer<T> p_332025_)
```

**Parameters:**

- `p_332025_` (`Consumer<T>`)

**Returns:** `ChunkResult<T>`

### map

```java
public <R> ChunkResult<R> map(Function<T, R> p_331060_)
```

**Parameters:**

- `p_331060_` (`Function<T, R>`)

**Returns:** `ChunkResult<R>`

### orElseThrow

```java
public <E extends Throwable> T orElseThrow(Supplier<E> p_331373_)
```

**Parameters:**

- `p_331373_` (`Supplier<E>`)

**Returns:** `T`

### isSuccess

```java
public boolean isSuccess()
```

**Returns:** `boolean`

### orElse

```java
public T orElse(T p_331661_)
```

**Parameters:**

- `p_331661_` (`T`)

**Returns:** `T`

### getError

```java
public String getError()
```

**Returns:** `String`

### ifSuccess

```java
public ChunkResult<T> ifSuccess(Consumer<T> p_330331_)
```

**Parameters:**

- `p_330331_` (`Consumer<T>`)

**Returns:** `ChunkResult<T>`

### map

```java
public <R> ChunkResult<R> map(Function<T, R> p_330743_)
```

**Parameters:**

- `p_330743_` (`Function<T, R>`)

**Returns:** `ChunkResult<R>`

### orElseThrow

```java
public <E extends Throwable> T orElseThrow(Supplier<E> p_332180_)
```

**Parameters:**

- `p_332180_` (`Supplier<E>`)

**Returns:** `T`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Fail` | record |  |
| `Success` | record |  |
