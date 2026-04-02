# ByteBufferBuilder

**Package:** `com.mojang.blaze3d.vertex`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ByteBufferBuilder

```java
public ByteBufferBuilder(int p_350446_)
```

**Parameters:**

- `p_350446_` (`int`)

**Returns:** `public`

### OutOfMemoryError

```java
throw new OutOfMemoryError("Failed to allocate " + p_350446_ + " bytes")
```

**Parameters:**

- `bytes"` (`"Failed to allocate " + p_350446_ + "`)

**Returns:** `throw new`

### reserve

```java
public long reserve(int p_350289_)
```

**Parameters:**

- `p_350289_` (`int`)

**Returns:** `public long`

### ensureCapacity

```java
private void ensureCapacity(int p_350893_)
```

**Parameters:**

- `p_350893_` (`int`)

**Returns:** `private void`

### resize

```java
private void resize(int p_350909_)
```

**Parameters:**

- `p_350909_` (`int`)

**Returns:** `private void`

### OutOfMemoryError

```java
throw new OutOfMemoryError("Failed to resize buffer from " + this.capacity + " bytes to " + p_350909_ + " bytes")
```

**Parameters:**

- `bytes"` (`"Failed to resize buffer from " + this.capacity + " bytes to " + p_350909_ + "`)

**Returns:** `throw new`

### build

```java
public ByteBufferBuilder.Result build()
```

**Returns:** `ByteBufferBuilder.Result`

### clear

```java
public void clear()
```

**Returns:** `public void`

### discard

```java
public void discard()
```

**Returns:** `public void`

### isValid

```java
boolean isValid(int p_350321_)
```

**Parameters:**

- `p_350321_` (`int`)

**Returns:** `boolean`

### freeResult

```java
void freeResult()
```

### discardResults

```java
private void discardResults()
```

**Returns:** `private void`

### close

```java
public void close()
```

### checkOpen

```java
private void checkOpen()
```

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("Buffer has been freed")
```

**Parameters:**

- `freed"` (`"Buffer has been`)

**Returns:** `throw new`

### Result

```java
 Result(int p_350632_, int p_350856_, int p_350616_)
```

**Parameters:**

- `p_350632_` (`int`)
- `p_350856_` (`int`)
- `p_350616_` (`int`)

**Returns:** ``

### byteBuffer

```java
public ByteBuffer byteBuffer()
```

**Returns:** `public ByteBuffer`

### IllegalStateException

```java
throw new IllegalStateException("Buffer is no longer valid")
```

**Parameters:**

- `valid"` (`"Buffer is no longer`)

**Returns:** `throw new`

### close

```java
public void close()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Result` | class |  |
