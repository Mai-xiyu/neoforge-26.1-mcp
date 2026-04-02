# JOrbisAudioStream

**Package:** `net.minecraft.client.sounds`
**Type:** class
**Implements:** `FloatSampleSource`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### JOrbisAudioStream

```java
public JOrbisAudioStream(InputStream p_341241_)
```

**Parameters:**

- `p_341241_` (`InputStream`)

**Returns:** `public`

### IOException

```java
throw new IOException("Invalid Ogg file - can't find first page")
```

**Parameters:**

- `page"` (`"Invalid Ogg file - can't find first`)

**Returns:** `throw new`

### IOException

```java
throw new IOException("Invalid Ogg identification packet")
```

**Parameters:**

- `packet"` (`"Invalid Ogg identification`)

**Returns:** `throw new`

### IOException

```java
throw new IOException("Unexpected end of Ogg stream")
```

**Parameters:**

- `stream"` (`"Unexpected end of Ogg`)

**Returns:** `throw new`

### IOException

```java
throw new IOException("Invalid Ogg header packet " + i)
```

**Parameters:**

- `i` (`"Invalid Ogg header packet " +`)

**Returns:** `throw new`

### isError

```java
private static boolean isError(int p_340842_)
```

**Parameters:**

- `p_340842_` (`int`)

**Returns:** `private static boolean`

### getFormat

```java
public AudioFormat getFormat()
```

**Returns:** `AudioFormat`

### readToBuffer

```java
private boolean readToBuffer()
```

**Returns:** `private boolean`

### IllegalStateException

```java
throw new IllegalStateException("Corrupt or missing data in bitstream")
```

**Parameters:**

- `bitstream"` (`"Corrupt or missing data in`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Unknown page decode result: " + i)
```

**Parameters:**

- `i` (`"Unknown page decode result: " +`)

**Returns:** `throw new`

### readIdentificationPacket

```java
private Packet readIdentificationPacket(Page p_340874_)
```

**Parameters:**

- `p_340874_` (`Page`)

**Returns:** `private Packet`

### IOException

```java
throw new IOException("Failed to parse page")
```

**Parameters:**

- `page"` (`"Failed to parse`)

**Returns:** `throw new`

### IOException

```java
throw new IOException("Failed to read identification packet: " + i)
```

**Parameters:**

- `i` (`"Failed to read identification packet: " +`)

**Returns:** `throw new`

### IOException

```java
throw new IOException("Failed to parse packet")
```

**Parameters:**

- `packet"` (`"Failed to parse`)

**Returns:** `throw new`

### IOException

```java
throw new IOException("Failed to parse page")
```

**Parameters:**

- `page"` (`"Failed to parse`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Unknown packet decode result: " + i)
```

**Parameters:**

- `i` (`"Unknown packet decode result: " +`)

**Returns:** `throw new`

### getSamplesToWrite

```java
private long getSamplesToWrite(int p_341351_)
```

**Parameters:**

- `p_341351_` (`int`)

**Returns:** `private long`

### readChunk

```java
public boolean readChunk(FloatConsumer p_341270_)
```

**Parameters:**

- `p_341270_` (`FloatConsumer`)

**Returns:** `boolean`

### IOException

```java
throw new IOException("Can't decode audio packet")
```

**Parameters:**

- `packet"` (`"Can't decode audio`)

**Returns:** `throw new`

### copyMono

```java
 copyMono()
```

**Returns:** ``

### copyStereo

```java
 copyStereo()
```

**Returns:** ``

### copyAnyChannels

```java
 copyAnyChannels()
```

**Returns:** ``

### copyAnyChannels

```java
private static void copyAnyChannels(float[][] p_340927_, int p_341332_, int[] p_341269_, long p_341072_, FloatConsumer p_341382_)
```

**Parameters:**

- `p_340927_` (`float[][]`)
- `p_341332_` (`int`)
- `p_341269_` (`int[]`)
- `p_341072_` (`long`)
- `p_341382_` (`FloatConsumer`)

**Returns:** `private static void`

### copyMono

```java
private static void copyMono(float[] p_340838_, int p_341058_, long p_341397_, FloatConsumer p_340852_)
```

**Parameters:**

- `p_340838_` (`float[]`)
- `p_341058_` (`int`)
- `p_341397_` (`long`)
- `p_340852_` (`FloatConsumer`)

**Returns:** `private static void`

### copyStereo

```java
private static void copyStereo(float[] p_341142_, int p_341000_, float[] p_340922_, int p_341132_, long p_341389_, FloatConsumer p_341076_)
```

**Parameters:**

- `p_341142_` (`float[]`)
- `p_341000_` (`int`)
- `p_340922_` (`float[]`)
- `p_341132_` (`int`)
- `p_341389_` (`long`)
- `p_341076_` (`FloatConsumer`)

**Returns:** `private static void`

### close

```java
public void close()
```
