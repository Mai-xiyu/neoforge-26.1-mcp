# JfrStatsParser

**Package:** `net.minecraft.util.profiling.jfr.parse`
**Type:** class

## Methods

### JfrStatsParser

```java
private JfrStatsParser(Stream<RecordedEvent> p_185443_)
```

**Parameters:**

- `p_185443_` (`Stream<RecordedEvent>`)

**Returns:** `private`

### parse

```java
public static JfrStatsResult parse(Path p_185448_)
```

**Parameters:**

- `p_185448_` (`Path`)

**Returns:** `public static JfrStatsResult`

### hasNext

```java
public boolean hasNext()
```

**Returns:** `boolean`

### next

```java
public RecordedEvent next()
```

**Returns:** `public RecordedEvent`

### NoSuchElementException

```java
throw new NoSuchElementException()
```

**Returns:** `throw new`

### UncheckedIOException

```java
throw new UncheckedIOException()
```

**Returns:** `throw new`

### UncheckedIOException

```java
throw new UncheckedIOException()
```

**Returns:** `throw new`

### results

```java
private JfrStatsResult results()
```

**Returns:** `private JfrStatsResult`

### capture

```java
private void capture(Stream<RecordedEvent> p_185455_)
```

**Parameters:**

- `p_185455_` (`Stream<RecordedEvent>`)

**Returns:** `private void`

### incrementPacket

```java
private void incrementPacket(RecordedEvent p_185459_, int p_185460_, Map<PacketIdentification, JfrStatsParser.MutableCountAndSize> p_185461_)
```

**Parameters:**

- `p_185459_` (`RecordedEvent`)
- `p_185460_` (`int`)
- `p_185461_` (`Map<PacketIdentification, JfrStatsParser.MutableCountAndSize>`)

**Returns:** `private void`

### incrementChunk

```java
private void incrementChunk(RecordedEvent p_326116_, int p_326437_, Map<ChunkIdentification, JfrStatsParser.MutableCountAndSize> p_326416_)
```

**Parameters:**

- `p_326116_` (`RecordedEvent`)
- `p_326437_` (`int`)
- `p_326416_` (`Map<ChunkIdentification, JfrStatsParser.MutableCountAndSize>`)

**Returns:** `private void`

### appendFileIO

```java
private void appendFileIO(RecordedEvent p_185463_, List<FileIOStat> p_185464_, String p_185465_)
```

**Parameters:**

- `p_185463_` (`RecordedEvent`)
- `p_185464_` (`List<FileIOStat>`)
- `p_185465_` (`String`)

**Returns:** `private void`

### collectIoStats

```java
<T> private static <T> IoSummary<T> collectIoStats(Duration p_325942_, Map<T, JfrStatsParser.MutableCountAndSize> p_325951_)
```

**Parameters:**

- `p_325942_` (`Duration`)
- `p_325951_` (`Map<T, JfrStatsParser.MutableCountAndSize>`)

**Returns:** `private static <T> IoSummary<T>`

### increment

```java
public void increment(int p_185477_)
```

**Parameters:**

- `p_185477_` (`int`)

**Returns:** `public void`

### toCountAndSize

```java
public IoSummary.CountAndSize toCountAndSize()
```

**Returns:** `public IoSummary.CountAndSize`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `MutableCountAndSize` | class |  |
