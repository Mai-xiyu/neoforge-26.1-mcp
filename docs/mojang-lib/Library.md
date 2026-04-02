# Library

**Package:** `com.mojang.blaze3d.audio`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### acquire

```java
public Channel acquire()
```

**Returns:** `Channel`

### release

```java
public boolean release(Channel p_83708_)
```

**Parameters:**

- `p_83708_` (`Channel`)

**Returns:** `boolean`

### cleanup

```java
public void cleanup()
```

### getMaxCount

```java
public int getMaxCount()
```

**Returns:** `int`

### getUsedCount

```java
public int getUsedCount()
```

**Returns:** `int`

### Library

```java
public Library()
```

**Returns:** `public`

### init

```java
public void init(String p_231085_, boolean p_231086_)
```

**Parameters:**

- `p_231085_` (`String`)
- `p_231086_` (`boolean`)

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Failed to get OpenAL capabilities")
```

**Parameters:**

- `capabilities"` (`"Failed to get OpenAL`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("OpenAL 1.1 not supported")
```

**Parameters:**

- `supported"` (`"OpenAL 1.1 not`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Unable to create OpenAL context")
```

**Parameters:**

- `context"` (`"Unable to create OpenAL`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("AL_EXT_source_distance_model is not supported")
```

**Parameters:**

- `supported"` (`"AL_EXT_source_distance_model is not`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("AL_EXT_LINEAR_DISTANCE is not supported")
```

**Parameters:**

- `supported"` (`"AL_EXT_LINEAR_DISTANCE is not`)

**Returns:** `throw new`

### setHrtf

```java
private void setHrtf(boolean p_242278_)
```

**Parameters:**

- `p_242278_` (`boolean`)

**Returns:** `private void`

### getChannelCount

```java
private int getChannelCount()
```

**Returns:** `private int`

### IllegalStateException

```java
throw new IllegalStateException("Failed to get OpenAL attributes")
```

**Parameters:**

- `attributes"` (`"Failed to get OpenAL`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Failed to get OpenAL attributes")
```

**Parameters:**

- `attributes"` (`"Failed to get OpenAL`)

**Returns:** `throw new`

### getDefaultDeviceName

```java
public static String getDefaultDeviceName()
```

**Returns:** `String`

### getCurrentDeviceName

```java
public String getCurrentDeviceName()
```

**Returns:** `public String`

### hasDefaultDeviceChanged

```java
public synchronized boolean hasDefaultDeviceChanged()
```

**Returns:** `public synchronized boolean`

### openDeviceOrFallback

```java
private static long openDeviceOrFallback(String p_193473_)
```

**Parameters:**

- `p_193473_` (`String`)

**Returns:** `private static long`

### IllegalStateException

```java
throw new IllegalStateException("Failed to open OpenAL device")
```

**Parameters:**

- `device"` (`"Failed to open OpenAL`)

**Returns:** `throw new`

### tryOpenDevice

```java
private static OptionalLong tryOpenDevice(String p_193476_)
```

**Parameters:**

- `p_193476_` (`String`)

**Returns:** `private static OptionalLong`

### cleanup

```java
public void cleanup()
```

**Returns:** `public void`

### getListener

```java
public Listener getListener()
```

**Returns:** `public Listener`

### acquireChannel

```java
public Channel acquireChannel(Library.Pool p_83698_)
```

**Parameters:**

- `p_83698_` (`Library.Pool`)

**Returns:** `Channel`

### releaseChannel

```java
public void releaseChannel(Channel p_83696_)
```

**Parameters:**

- `p_83696_` (`Channel`)

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Tried to release unknown channel")
```

**Parameters:**

- `channel"` (`"Tried to release unknown`)

**Returns:** `throw new`

### getDebugString

```java
public String getDebugString()
```

**Returns:** `public String`

### getAvailableSoundDevices

```java
public List<String> getAvailableSoundDevices()
```

**Returns:** `public List<String>`

### isCurrentDeviceDisconnected

```java
public boolean isCurrentDeviceDisconnected()
```

**Returns:** `public boolean`

### acquire

```java
Channel acquire()
```

**Returns:** `Channel`

### release

```java
boolean release(Channel p_83712_)
```

**Parameters:**

- `p_83712_` (`Channel`)

**Returns:** `boolean`

### cleanup

```java
void cleanup()
```

### getMaxCount

```java
int getMaxCount()
```

**Returns:** `int`

### getUsedCount

```java
int getUsedCount()
```

**Returns:** `int`

### CountingChannelPool

```java
public CountingChannelPool(int p_83716_)
```

**Parameters:**

- `p_83716_` (`int`)

**Returns:** `public`

### acquire

```java
public Channel acquire()
```

**Returns:** `Channel`

### release

```java
public boolean release(Channel p_83719_)
```

**Parameters:**

- `p_83719_` (`Channel`)

**Returns:** `boolean`

### cleanup

```java
public void cleanup()
```

### getMaxCount

```java
public int getMaxCount()
```

**Returns:** `int`

### getUsedCount

```java
public int getUsedCount()
```

**Returns:** `int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Pool` | enum |  |
