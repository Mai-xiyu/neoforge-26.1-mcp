# RegionFile

**Package:** `net.minecraft.world.level.chunk.storage`
**Type:** class
**Implements:** `AutoCloseable`

## Methods

### RegionFile

```java
public RegionFile(RegionStorageInfo p_326174_, Path p_196950_, Path p_196951_, boolean p_196952_)
```

**Parameters:**

- `p_326174_` (`RegionStorageInfo`)
- `p_196950_` (`Path`)
- `p_196951_` (`Path`)
- `p_196952_` (`boolean`)

**Returns:** `public`

### RegionFile

```java
public RegionFile(RegionStorageInfo p_326221_, Path p_63633_, Path p_63634_, RegionFileVersion p_63635_, boolean p_63636_)
```

**Parameters:**

- `p_326221_` (`RegionStorageInfo`)
- `p_63633_` (`Path`)
- `p_63634_` (`Path`)
- `p_63635_` (`RegionFileVersion`)
- `p_63636_` (`boolean`)

**Returns:** `public`

### getPath

```java
public Path getPath()
```

**Returns:** `public Path`

### getExternalChunkPath

```java
private Path getExternalChunkPath(ChunkPos p_63685_)
```

**Parameters:**

- `p_63685_` (`ChunkPos`)

**Returns:** `private Path`

### getChunkDataInputStream

```java
public synchronized DataInputStream getChunkDataInputStream(ChunkPos p_63646_)
```

**Parameters:**

- `p_63646_` (`ChunkPos`)

**Returns:** `DataInputStream`

### getTimestamp

```java
private static int getTimestamp()
```

**Returns:** `private static int`

### isExternalStreamChunk

```java
private static boolean isExternalStreamChunk(byte p_63639_)
```

**Parameters:**

- `p_63639_` (`byte`)

**Returns:** `private static boolean`

### getExternalChunkVersion

```java
private static byte getExternalChunkVersion(byte p_63670_)
```

**Parameters:**

- `p_63670_` (`byte`)

**Returns:** `private static byte`

### createStream

```java
private static ByteArrayInputStream createStream(ByteBuffer p_63660_, int p_63661_)
```

**Parameters:**

- `p_63660_` (`ByteBuffer`)
- `p_63661_` (`int`)

**Returns:** `private static ByteArrayInputStream`

### packSectorOffset

```java
private int packSectorOffset(int p_63643_, int p_63644_)
```

**Parameters:**

- `p_63643_` (`int`)
- `p_63644_` (`int`)

**Returns:** `private int`

### getNumSectors

```java
private static int getNumSectors(int p_63641_)
```

**Parameters:**

- `p_63641_` (`int`)

**Returns:** `private static int`

### getSectorNumber

```java
private static int getSectorNumber(int p_63672_)
```

**Parameters:**

- `p_63672_` (`int`)

**Returns:** `private static int`

### sizeToSectors

```java
private static int sizeToSectors(int p_63677_)
```

**Parameters:**

- `p_63677_` (`int`)

**Returns:** `private static int`

### doesChunkExist

```java
public boolean doesChunkExist(ChunkPos p_63674_)
```

**Parameters:**

- `p_63674_` (`ChunkPos`)

**Returns:** `public boolean`

### getChunkDataOutputStream

```java
public DataOutputStream getChunkDataOutputStream(ChunkPos p_63679_)
```

**Parameters:**

- `p_63679_` (`ChunkPos`)

**Returns:** `public DataOutputStream`

### flush

```java
public void flush()
```

**Returns:** `public void`

### clear

```java
public void clear(ChunkPos p_156614_)
```

**Parameters:**

- `p_156614_` (`ChunkPos`)

**Returns:** `public void`

### write

```java
protected synchronized void write(ChunkPos p_63655_, ByteBuffer p_63656_)
```

**Parameters:**

- `p_63655_` (`ChunkPos`)
- `p_63656_` (`ByteBuffer`)

**Returns:** `protected synchronized void`

### createExternalStub

```java
private ByteBuffer createExternalStub()
```

**Returns:** `private ByteBuffer`

### writeToExternalFile

```java
private RegionFile.CommitOp writeToExternalFile(Path p_63663_, ByteBuffer p_63664_)
```

**Parameters:**

- `p_63663_` (`Path`)
- `p_63664_` (`ByteBuffer`)

**Returns:** `private RegionFile.CommitOp`

### writeHeader

```java
private void writeHeader()
```

**Returns:** `private void`

### getOffset

```java
private int getOffset(ChunkPos p_63687_)
```

**Parameters:**

- `p_63687_` (`ChunkPos`)

**Returns:** `private int`

### hasChunk

```java
public boolean hasChunk(ChunkPos p_63683_)
```

**Parameters:**

- `p_63683_` (`ChunkPos`)

**Returns:** `public boolean`

### getOffsetIndex

```java
private static int getOffsetIndex(ChunkPos p_63689_)
```

**Parameters:**

- `p_63689_` (`ChunkPos`)

**Returns:** `private static int`

### close

```java
public void close()
```

### padToFullSector

```java
private void padToFullSector()
```

**Returns:** `private void`

### ChunkBuffer

```java
public ChunkBuffer(ChunkPos p_63696_)
```

**Parameters:**

- `p_63696_` (`ChunkPos`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### close

```java
public void close()
```

### run

```java
void run()
```
