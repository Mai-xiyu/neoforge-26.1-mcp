# FloatSampleSource

**Package:** `net.minecraft.client.sounds`
**Type:** interface
**Extends:** `FiniteAudioStream`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### readChunk

```java
boolean readChunk(FloatConsumer p_340937_)
```

**Parameters:**

- `p_340937_` (`FloatConsumer`)

**Returns:** `boolean`

### read

```java
default ByteBuffer read(int p_341345_)
```

**Parameters:**

- `p_341345_` (`int`)

**Returns:** `ByteBuffer`

### readAll

```java
default ByteBuffer readAll()
```

**Returns:** `ByteBuffer`
