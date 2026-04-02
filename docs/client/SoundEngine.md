# SoundEngine

**Package:** `net.minecraft.client.sounds`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MISSING_SOUND` | `String` |  |
| `OPEN_AL_SOFT_PREFIX` | `String` |  |
| `OPEN_AL_SOFT_PREFIX_LENGTH` | `int` |  |
| `soundManager` | `SoundManager` |  |

## Methods

### SoundEngine

```java
public SoundEngine(SoundManager p_120236_, Options p_120237_, ResourceProvider p_249332_)
```

**Parameters:**

- `p_120236_` (`SoundManager`)
- `p_120237_` (`Options`)
- `p_249332_` (`ResourceProvider`)

**Returns:** `public`

### reload

```java
public void reload()
```

**Returns:** `public void`

### loadLibrary

```java
private synchronized void loadLibrary()
```

**Returns:** `private synchronized void`

### getVolume

```java
private float getVolume(SoundSource p_120259_)
```

**Parameters:**

- `p_120259_` (`SoundSource`)

**Returns:** `private float`

### updateCategoryVolume

```java
public void updateCategoryVolume(SoundSource p_120261_, float p_120262_)
```

**Parameters:**

- `p_120261_` (`SoundSource`)
- `p_120262_` (`float`)

**Returns:** `public void`

### destroy

```java
public void destroy()
```

**Returns:** `public void`

### emergencyShutdown

```java
public void emergencyShutdown()
```

**Returns:** `public void`

### stop

```java
public void stop(SoundInstance p_120275_)
```

**Parameters:**

- `p_120275_` (`SoundInstance`)

**Returns:** `public void`

### stopAll

```java
public void stopAll()
```

**Returns:** `public void`

### addEventListener

```java
public void addEventListener(SoundEventListener p_120296_)
```

**Parameters:**

- `p_120296_` (`SoundEventListener`)

**Returns:** `public void`

### removeEventListener

```java
public void removeEventListener(SoundEventListener p_120308_)
```

**Parameters:**

- `p_120308_` (`SoundEventListener`)

**Returns:** `public void`

### shouldChangeDevice

```java
private boolean shouldChangeDevice()
```

**Returns:** `private boolean`

### tick

```java
public void tick(boolean p_120303_)
```

**Parameters:**

- `p_120303_` (`boolean`)

**Returns:** `public void`

### tickNonPaused

```java
private void tickNonPaused()
```

**Returns:** `private void`

### requiresManualLooping

```java
private static boolean requiresManualLooping(SoundInstance p_120316_)
```

**Parameters:**

- `p_120316_` (`SoundInstance`)

**Returns:** `private static boolean`

### shouldLoopManually

```java
private static boolean shouldLoopManually(SoundInstance p_120319_)
```

**Parameters:**

- `p_120319_` (`SoundInstance`)

**Returns:** `private static boolean`

### shouldLoopAutomatically

```java
private static boolean shouldLoopAutomatically(SoundInstance p_120322_)
```

**Parameters:**

- `p_120322_` (`SoundInstance`)

**Returns:** `private static boolean`

### isActive

```java
public boolean isActive(SoundInstance p_120306_)
```

**Parameters:**

- `p_120306_` (`SoundInstance`)

**Returns:** `public boolean`

### play

```java
public void play(SoundInstance p_120313_)
```

**Parameters:**

- `p_120313_` (`SoundInstance`)

**Returns:** `public void`

### queueTickingSound

```java
public void queueTickingSound(TickableSoundInstance p_120283_)
```

**Parameters:**

- `p_120283_` (`TickableSoundInstance`)

**Returns:** `public void`

### requestPreload

```java
public void requestPreload(Sound p_120273_)
```

**Parameters:**

- `p_120273_` (`Sound`)

**Returns:** `public void`

### calculatePitch

```java
private float calculatePitch(SoundInstance p_120325_)
```

**Parameters:**

- `p_120325_` (`SoundInstance`)

**Returns:** `private float`

### calculateVolume

```java
private float calculateVolume(SoundInstance p_120328_)
```

**Parameters:**

- `p_120328_` (`SoundInstance`)

**Returns:** `private float`

### calculateVolume

```java
private float calculateVolume(float p_235258_, SoundSource p_235259_)
```

**Parameters:**

- `p_235258_` (`float`)
- `p_235259_` (`SoundSource`)

**Returns:** `private float`

### pause

```java
public void pause()
```

**Returns:** `public void`

### resume

```java
public void resume()
```

**Returns:** `public void`

### playDelayed

```java
public void playDelayed(SoundInstance p_120277_, int p_120278_)
```

**Parameters:**

- `p_120277_` (`SoundInstance`)
- `p_120278_` (`int`)

**Returns:** `public void`

### updateSource

```java
public void updateSource(Camera p_120271_)
```

**Parameters:**

- `p_120271_` (`Camera`)

**Returns:** `public void`

### stop

```java
public void stop(ResourceLocation p_120300_, SoundSource p_120301_)
```

**Parameters:**

- `p_120300_` (`ResourceLocation`)
- `p_120301_` (`SoundSource`)

**Returns:** `public void`

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

### getListenerTransform

```java
public ListenerTransform getListenerTransform()
```

**Returns:** `public ListenerTransform`
