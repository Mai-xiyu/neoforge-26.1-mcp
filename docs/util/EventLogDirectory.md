# EventLogDirectory

**Package:** `net.minecraft.util.eventlog`
**Type:** class

## Methods

### EventLogDirectory

```java
private EventLogDirectory(Path p_261546_, String p_261467_)
```

**Parameters:**

- `p_261546_` (`Path`)
- `p_261467_` (`String`)

**Returns:** `private`

### open

```java
public static EventLogDirectory open(Path p_261743_, String p_261659_)
```

**Parameters:**

- `p_261743_` (`Path`)
- `p_261659_` (`String`)

**Returns:** `public static EventLogDirectory`

### EventLogDirectory

```java
return new EventLogDirectory()
```

**Returns:** `return new`

### listFiles

```java
public EventLogDirectory.FileList listFiles()
```

**Returns:** `public EventLogDirectory.FileList`

### tryCompress

```java
static void tryCompress(Path p_261741_, Path p_262101_)
```

**Parameters:**

- `p_261741_` (`Path`)
- `p_262101_` (`Path`)

**Returns:** `static void`

### IOException

```java
throw new IOException("Compressed target file already exists: " + p_262101_)
```

**Parameters:**

- `p_262101_` (`"Compressed target file already exists: " +`)

**Returns:** `throw new`

### IOException

```java
throw new IOException("Raw log file is already locked, cannot compress: " + p_261741_)
```

**Parameters:**

- `locked` (`"Raw log file is already`)
- `p_261741_` (`cannot compress: " +`)

**Returns:** `throw new`

### writeCompressed

```java
 writeCompressed()
```

**Returns:** ``

### writeCompressed

```java
private static void writeCompressed(ReadableByteChannel p_262066_, Path p_262054_)
```

**Parameters:**

- `p_262066_` (`ReadableByteChannel`)
- `p_262054_` (`Path`)

**Returns:** `private static void`

### createNewFile

```java
public EventLogDirectory.RawFile createNewFile(LocalDate p_261865_)
```

**Parameters:**

- `p_261865_` (`LocalDate`)

**Returns:** `public EventLogDirectory.RawFile`

### openReader

```java
public Reader openReader()
```

**Returns:** `Reader`

### compress

```java
public EventLogDirectory.CompressedFile compress()
```

**Returns:** `EventLogDirectory.CompressedFile`

### path

```java
Path path()
```

**Returns:** `Path`

### id

```java
EventLogDirectory.FileId id()
```

**Returns:** `EventLogDirectory.FileId`

### openReader

```java
Reader openReader()
```

**Returns:** `Reader`

### compress

```java
EventLogDirectory.CompressedFile compress()
```

**Returns:** `EventLogDirectory.CompressedFile`

### FileId

```java
public static record FileId(LocalDate date, int index)
```

**Parameters:**

- `date` (`LocalDate`)
- `index` (`int`)

**Returns:** `public static record`

### parse

```java
public static EventLogDirectory.FileId parse(String p_261762_)
```

**Parameters:**

- `p_261762_` (`String`)

**Returns:** `EventLogDirectory.FileId`

### toString

```java
public String toString()
```

**Returns:** `String`

### toFileName

```java
public String toFileName(String p_261982_)
```

**Parameters:**

- `p_261982_` (`String`)

**Returns:** `public String`

### FileList

```java
 FileList(List<EventLogDirectory.File> p_261941_)
```

**Parameters:**

- `p_261941_` (`List<EventLogDirectory.File>`)

**Returns:** ``

### prune

```java
public EventLogDirectory.FileList prune(LocalDate p_261825_, int p_261918_)
```

**Parameters:**

- `p_261825_` (`LocalDate`)
- `p_261918_` (`int`)

**Returns:** `public EventLogDirectory.FileList`

### compressAll

```java
public EventLogDirectory.FileList compressAll()
```

**Returns:** `public EventLogDirectory.FileList`

### iterator

```java
public Iterator<EventLogDirectory.File> iterator()
```

**Returns:** `Iterator<EventLogDirectory.File>`

### stream

```java
public Stream<EventLogDirectory.File> stream()
```

**Returns:** `public Stream<EventLogDirectory.File>`

### ids

```java
public Set<EventLogDirectory.FileId> ids()
```

**Returns:** `public Set<EventLogDirectory.FileId>`

### openChannel

```java
public FileChannel openChannel()
```

**Returns:** `public FileChannel`

### openReader

```java
public Reader openReader()
```

**Returns:** `Reader`

### compress

```java
public EventLogDirectory.CompressedFile compress()
```

**Returns:** `EventLogDirectory.CompressedFile`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CompressedFile` | record |  |
| `File` | interface |  |
| `FileId` | record |  |
| `FileList` | class |  |
| `RawFile` | record |  |
