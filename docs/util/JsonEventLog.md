# JsonEventLog

**Package:** `net.minecraft.util.eventlog`
**Type:** class<T>
**Implements:** `Closeable`

## Methods

### JsonEventLog

```java
public JsonEventLog(Codec<T> p_261608_, FileChannel p_262072_)
```

**Parameters:**

- `p_261608_` (`Codec<T>`)
- `p_262072_` (`FileChannel`)

**Returns:** `public`

### open

```java
<T> public static <T> JsonEventLog<T> open(Codec<T> p_261795_, Path p_261489_)
```

**Parameters:**

- `p_261795_` (`Codec<T>`)
- `p_261489_` (`Path`)

**Returns:** `public static <T> JsonEventLog<T>`

### write

```java
public void write(T p_261929_)
```

**Parameters:**

- `p_261929_` (`T`)

**Returns:** `public void`

### openReader

```java
public JsonEventLogReader<T> openReader()
```

**Returns:** `public JsonEventLogReader<T>`

### IOException

```java
throw new IOException("Event log has already been closed")
```

**Parameters:**

- `closed"` (`"Event log has already been`)

**Returns:** `throw new`

### next

```java
public T next()
```

**Returns:** `T`

### close

```java
public void close()
```

### close

```java
public void close()
```

### releaseReference

```java
void releaseReference()
```
