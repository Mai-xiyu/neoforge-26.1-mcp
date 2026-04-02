# SoundManager

**Package:** `net.minecraft.client.sounds`
**Type:** class
**Extends:** `SimplePreparableReloadListener<SoundManager.Preparations>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY_SOUND_LOCATION` | `ResourceLocation` |  |
| `EMPTY_SOUND` | `Sound` |  |
| `INTENTIONALLY_EMPTY_SOUND_LOCATION` | `ResourceLocation` |  |
| `INTENTIONALLY_EMPTY_SOUND_EVENT` | `WeighedSoundEvents` |  |
| `INTENTIONALLY_EMPTY_SOUND` | `Sound` |  |

## Methods

### SoundManager

```java
public SoundManager(Options p_250027_)
```

**Parameters:**

- `p_250027_` (`Options`)

**Returns:** `public`

### prepare

```java
protected SoundManager.Preparations prepare(ResourceManager p_120356_, ProfilerFiller p_120357_)
```

**Parameters:**

- `p_120356_` (`ResourceManager`)
- `p_120357_` (`ProfilerFiller`)

**Returns:** `protected SoundManager.Preparations`

### apply

```java
protected void apply(SoundManager.Preparations p_120377_, ResourceManager p_120378_, ProfilerFiller p_120379_)
```

**Parameters:**

- `p_120377_` (`SoundManager.Preparations`)
- `p_120378_` (`ResourceManager`)
- `p_120379_` (`ProfilerFiller`)

**Returns:** `protected void`

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

### validateSoundResource

```java
static boolean validateSoundResource(Sound p_250396_, ResourceLocation p_250879_, ResourceProvider p_248737_)
```

**Parameters:**

- `p_250396_` (`Sound`)
- `p_250879_` (`ResourceLocation`)
- `p_248737_` (`ResourceProvider`)

**Returns:** `static boolean`

### getSoundEvent

```java
public WeighedSoundEvents getSoundEvent(ResourceLocation p_120385_)
```

**Parameters:**

- `p_120385_` (`ResourceLocation`)

**Returns:** `WeighedSoundEvents`

### getAvailableSounds

```java
public Collection<ResourceLocation> getAvailableSounds()
```

**Returns:** `public Collection<ResourceLocation>`

### queueTickingSound

```java
public void queueTickingSound(TickableSoundInstance p_120373_)
```

**Parameters:**

- `p_120373_` (`TickableSoundInstance`)

**Returns:** `public void`

### play

```java
public void play(SoundInstance p_120368_)
```

**Parameters:**

- `p_120368_` (`SoundInstance`)

**Returns:** `public void`

### playDelayed

```java
public void playDelayed(SoundInstance p_120370_, int p_120371_)
```

**Parameters:**

- `p_120370_` (`SoundInstance`)
- `p_120371_` (`int`)

**Returns:** `public void`

### updateSource

```java
public void updateSource(Camera p_120362_)
```

**Parameters:**

- `p_120362_` (`Camera`)

**Returns:** `public void`

### pause

```java
public void pause()
```

**Returns:** `public void`

### stop

```java
public void stop()
```

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

### tick

```java
public void tick(boolean p_120390_)
```

**Parameters:**

- `p_120390_` (`boolean`)

**Returns:** `public void`

### resume

```java
public void resume()
```

**Returns:** `public void`

### updateSourceVolume

```java
public void updateSourceVolume(SoundSource p_120359_, float p_120360_)
```

**Parameters:**

- `p_120359_` (`SoundSource`)
- `p_120360_` (`float`)

**Returns:** `public void`

### stop

```java
public void stop(SoundInstance p_120400_)
```

**Parameters:**

- `p_120400_` (`SoundInstance`)

**Returns:** `public void`

### isActive

```java
public boolean isActive(SoundInstance p_120404_)
```

**Parameters:**

- `p_120404_` (`SoundInstance`)

**Returns:** `public boolean`

### addListener

```java
public void addListener(SoundEventListener p_120375_)
```

**Parameters:**

- `p_120375_` (`SoundEventListener`)

**Returns:** `public void`

### removeListener

```java
public void removeListener(SoundEventListener p_120402_)
```

**Parameters:**

- `p_120402_` (`SoundEventListener`)

**Returns:** `public void`

### stop

```java
public void stop(ResourceLocation p_120387_, SoundSource p_120388_)
```

**Parameters:**

- `p_120387_` (`ResourceLocation`)
- `p_120388_` (`SoundSource`)

**Returns:** `public void`

### getDebugString

```java
public String getDebugString()
```

**Returns:** `public String`

### reload

```java
public void reload()
```

**Returns:** `public void`

### listResources

```java
void listResources(ResourceManager p_249271_)
```

**Parameters:**

- `p_249271_` (`ResourceManager`)

### handleRegistration

```java
void handleRegistration(ResourceLocation p_250806_, SoundEventRegistration p_249632_)
```

**Parameters:**

- `p_250806_` (`ResourceLocation`)
- `p_249632_` (`SoundEventRegistration`)

### getWeight

```java
public int getWeight()
```

**Returns:** `int`

### getSound

```java
public Sound getSound(RandomSource p_235261_)
```

**Parameters:**

- `p_235261_` (`RandomSource`)

**Returns:** `public Sound`

### preloadIfRequired

```java
public void preloadIfRequired(SoundEngine p_120438_)
```

**Parameters:**

- `p_120438_` (`SoundEngine`)

### apply

```java
public void apply(Map<ResourceLocation, WeighedSoundEvents> p_251229_, Map<ResourceLocation, Resource> p_251045_, SoundEngine p_250302_)
```

**Parameters:**

- `p_251229_` (`Map<ResourceLocation, WeighedSoundEvents>`)
- `p_251045_` (`Map<ResourceLocation, Resource>`)
- `p_250302_` (`SoundEngine`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Preparations` | class |  |
