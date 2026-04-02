# NbtIo

**Package:** `net.minecraft.nbt`
**Type:** class

## Methods

### readCompressed

```java
public static CompoundTag readCompressed(Path p_309661_, NbtAccounter p_307351_)
```

**Parameters:**

- `p_309661_` (`Path`)
- `p_307351_` (`NbtAccounter`)

**Returns:** `public static CompoundTag`

### try

```java
 try(InputStream inputstream = Files.newInputStream(p_309661_)
```

**Parameters:**

- `Files.newInputStream(p_309661_` (`InputStream inputstream =`)

**Returns:** ``

### createDecompressorStream

```java
private static DataInputStream createDecompressorStream(InputStream p_202494_)
```

**Parameters:**

- `p_202494_` (`InputStream`)

**Returns:** `private static DataInputStream`

### createCompressorStream

```java
private static DataOutputStream createCompressorStream(OutputStream p_309656_)
```

**Parameters:**

- `p_309656_` (`OutputStream`)

**Returns:** `private static DataOutputStream`

### readCompressed

```java
public static CompoundTag readCompressed(InputStream p_307406_, NbtAccounter p_307479_)
```

**Parameters:**

- `p_307406_` (`InputStream`)
- `p_307479_` (`NbtAccounter`)

**Returns:** `public static CompoundTag`

### parseCompressed

```java
public static void parseCompressed(Path p_309564_, StreamTagVisitor p_202489_, NbtAccounter p_302378_)
```

**Parameters:**

- `p_309564_` (`Path`)
- `p_202489_` (`StreamTagVisitor`)
- `p_302378_` (`NbtAccounter`)

**Returns:** `public static void`

### try

```java
 try(InputStream inputstream = Files.newInputStream(p_309564_)
```

**Parameters:**

- `Files.newInputStream(p_309564_` (`InputStream inputstream =`)

**Returns:** ``

### parseCompressed

```java
 parseCompressed()
```

**Returns:** ``

### parseCompressed

```java
public static void parseCompressed(InputStream p_202491_, StreamTagVisitor p_202492_, NbtAccounter p_302334_)
```

**Parameters:**

- `p_202491_` (`InputStream`)
- `p_202492_` (`StreamTagVisitor`)
- `p_302334_` (`NbtAccounter`)

**Returns:** `public static void`

### parse

```java
 parse()
```

**Returns:** ``

### writeCompressed

```java
public static void writeCompressed(CompoundTag p_128945_, Path p_309705_)
```

**Parameters:**

- `p_128945_` (`CompoundTag`)
- `p_309705_` (`Path`)

**Returns:** `public static void`

### try

```java
 try(OutputStream outputstream = Files.newOutputStream(p_309705_, SYNC_OUTPUT_OPTIONS)
```

**Parameters:**

- `SYNC_OUTPUT_OPTIONS` (`OutputStream outputstream = Files.newOutputStream(p_309705_,`)

**Returns:** ``

### writeCompressed

```java
 writeCompressed()
```

**Returns:** ``

### writeCompressed

```java
public static void writeCompressed(CompoundTag p_128948_, OutputStream p_128949_)
```

**Parameters:**

- `p_128948_` (`CompoundTag`)
- `p_128949_` (`OutputStream`)

**Returns:** `public static void`

### write

```java
 write()
```

**Returns:** ``

### write

```java
public static void write(CompoundTag p_128956_, Path p_309549_)
```

**Parameters:**

- `p_128956_` (`CompoundTag`)
- `p_309549_` (`Path`)

**Returns:** `public static void`

### try

```java
 try(OutputStream outputstream = Files.newOutputStream(p_309549_, SYNC_OUTPUT_OPTIONS)
```

**Parameters:**

- `SYNC_OUTPUT_OPTIONS` (`OutputStream outputstream = Files.newOutputStream(p_309549_,`)

**Returns:** ``

### write

```java
 write()
```

**Returns:** ``

### read

```java
public static CompoundTag read(Path p_309563_)
```

**Parameters:**

- `p_309563_` (`Path`)

**Returns:** `CompoundTag`

### try

```java
 try(InputStream inputstream = Files.newInputStream(p_309563_)
```

**Parameters:**

- `Files.newInputStream(p_309563_` (`InputStream inputstream =`)

**Returns:** ``

### read

```java
public static CompoundTag read(DataInput p_128929_)
```

**Parameters:**

- `p_128929_` (`DataInput`)

**Returns:** `public static CompoundTag`

### read

```java
public static CompoundTag read(DataInput p_128935_, NbtAccounter p_128936_)
```

**Parameters:**

- `p_128935_` (`DataInput`)
- `p_128936_` (`NbtAccounter`)

**Returns:** `public static CompoundTag`

### IOException

```java
throw new IOException("Root tag must be a named compound tag")
```

**Parameters:**

- `tag"` (`"Root tag must be a named compound`)

**Returns:** `throw new`

### write

```java
public static void write(CompoundTag p_128942_, DataOutput p_128943_)
```

**Parameters:**

- `p_128942_` (`CompoundTag`)
- `p_128943_` (`DataOutput`)

**Returns:** `public static void`

### writeUnnamedTagWithFallback

```java
 writeUnnamedTagWithFallback()
```

**Returns:** ``

### parse

```java
public static void parse(DataInput p_197510_, StreamTagVisitor p_197511_, NbtAccounter p_302331_)
```

**Parameters:**

- `p_197510_` (`DataInput`)
- `p_197511_` (`StreamTagVisitor`)
- `p_302331_` (`NbtAccounter`)

**Returns:** `public static void`

### readAnyTag

```java
public static Tag readAnyTag(DataInput p_294481_, NbtAccounter p_294287_)
```

**Parameters:**

- `p_294481_` (`DataInput`)
- `p_294287_` (`NbtAccounter`)

**Returns:** `public static Tag`

### writeAnyTag

```java
public static void writeAnyTag(Tag p_294166_, DataOutput p_295552_)
```

**Parameters:**

- `p_294166_` (`Tag`)
- `p_295552_` (`DataOutput`)

**Returns:** `public static void`

### writeUnnamedTag

```java
public static void writeUnnamedTag(Tag p_128951_, DataOutput p_128952_)
```

**Parameters:**

- `p_128951_` (`Tag`)
- `p_128952_` (`DataOutput`)

**Returns:** `public static void`

### writeUnnamedTagWithFallback

```java
public static void writeUnnamedTagWithFallback(Tag p_311861_, DataOutput p_312306_)
```

**Parameters:**

- `p_311861_` (`Tag`)
- `p_312306_` (`DataOutput`)

**Returns:** `public static void`

### readUnnamedTag

```java
private static Tag readUnnamedTag(DataInput p_128931_, NbtAccounter p_128933_)
```

**Parameters:**

- `p_128931_` (`DataInput`)
- `p_128933_` (`NbtAccounter`)

**Returns:** `private static Tag`

### readTagSafe

```java
4 extra bytes for the object allocation.
            return readTagSafe()
```

**Returns:** `4 extra bytes for the object allocation.
            return`

### readTagSafe

```java
private static Tag readTagSafe(DataInput p_295228_, NbtAccounter p_294806_, byte p_294992_)
```

**Parameters:**

- `p_295228_` (`DataInput`)
- `p_294806_` (`NbtAccounter`)
- `p_294992_` (`byte`)

**Returns:** `private static Tag`

### ReportedNbtException

```java
throw new ReportedNbtException()
```

**Returns:** `throw new`

### StringFallbackDataOutput

```java
public StringFallbackDataOutput(DataOutput p_312308_)
```

**Parameters:**

- `p_312308_` (`DataOutput`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### writeUTF

```java
public void writeUTF(String p_312136_)
```

**Parameters:**

- `p_312136_` (`String`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `StringFallbackDataOutput` | class |  |
