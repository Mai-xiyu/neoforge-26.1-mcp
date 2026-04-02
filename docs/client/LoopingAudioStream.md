# LoopingAudioStream

**Package:** `net.minecraft.client.sounds`
**Type:** class
**Implements:** `AudioStream`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### LoopingAudioStream

```java
public LoopingAudioStream(LoopingAudioStream.AudioStreamProvider p_120163_, InputStream p_120164_)
```

**Parameters:**

- `p_120163_` (`LoopingAudioStream.AudioStreamProvider`)
- `p_120164_` (`InputStream`)

**Returns:** `public`

### getFormat

```java
public AudioFormat getFormat()
```

**Returns:** `AudioFormat`

### read

```java
public ByteBuffer read(int p_120167_)
```

**Parameters:**

- `p_120167_` (`int`)

**Returns:** `ByteBuffer`

### close

```java
public void close()
```

### create

```java
AudioStream create(InputStream p_120170_)
```

**Parameters:**

- `p_120170_` (`InputStream`)

**Returns:** `AudioStream`

### NoCloseBuffer

```java
 NoCloseBuffer(InputStream p_120172_)
```

**Parameters:**

- `p_120172_` (`InputStream`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### close

```java
public void close()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `AudioStreamProvider` | interface |  |
