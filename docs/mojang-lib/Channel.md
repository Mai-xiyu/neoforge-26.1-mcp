# Channel

**Package:** `com.mojang.blaze3d.audio`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BUFFER_DURATION_SECONDS` | `int` |  |

## Methods

### create

```java
static Channel create()
```

**Returns:** `Channel`

### Channel

```java
private Channel(int p_83648_)
```

**Parameters:**

- `p_83648_` (`int`)

**Returns:** `private`

### destroy

```java
public void destroy()
```

**Returns:** `public void`

### play

```java
public void play()
```

**Returns:** `public void`

### getState

```java
private int getState()
```

**Returns:** `private int`

### pause

```java
public void pause()
```

**Returns:** `public void`

### unpause

```java
public void unpause()
```

**Returns:** `public void`

### stop

```java
public void stop()
```

**Returns:** `public void`

### playing

```java
public boolean playing()
```

**Returns:** `public boolean`

### stopped

```java
public boolean stopped()
```

**Returns:** `public boolean`

### setSelfPosition

```java
public void setSelfPosition(Vec3 p_83655_)
```

**Parameters:**

- `p_83655_` (`Vec3`)

**Returns:** `public void`

### setPitch

```java
public void setPitch(float p_83651_)
```

**Parameters:**

- `p_83651_` (`float`)

**Returns:** `public void`

### setLooping

```java
public void setLooping(boolean p_83664_)
```

**Parameters:**

- `p_83664_` (`boolean`)

**Returns:** `public void`

### setVolume

```java
public void setVolume(float p_83667_)
```

**Parameters:**

- `p_83667_` (`float`)

**Returns:** `public void`

### disableAttenuation

```java
public void disableAttenuation()
```

**Returns:** `public void`

### linearAttenuation

```java
public void linearAttenuation(float p_83674_)
```

**Parameters:**

- `p_83674_` (`float`)

**Returns:** `public void`

### setRelative

```java
public void setRelative(boolean p_83671_)
```

**Parameters:**

- `p_83671_` (`boolean`)

**Returns:** `public void`

### attachStaticBuffer

```java
public void attachStaticBuffer(SoundBuffer p_83657_)
```

**Parameters:**

- `p_83657_` (`SoundBuffer`)

**Returns:** `public void`

### attachBufferStream

```java
public void attachBufferStream(AudioStream p_83659_)
```

**Parameters:**

- `p_83659_` (`AudioStream`)

**Returns:** `public void`

### calculateBufferSize

```java
private static int calculateBufferSize(AudioFormat p_83661_, int p_83662_)
```

**Parameters:**

- `p_83661_` (`AudioFormat`)
- `p_83662_` (`int`)

**Returns:** `private static int`

### pumpBuffers

```java
private void pumpBuffers(int p_83653_)
```

**Parameters:**

- `p_83653_` (`int`)

**Returns:** `private void`

### updateStream

```java
public void updateStream()
```

**Returns:** `public void`

### removeProcessedBuffers

```java
private int removeProcessedBuffers()
```

**Returns:** `private int`
