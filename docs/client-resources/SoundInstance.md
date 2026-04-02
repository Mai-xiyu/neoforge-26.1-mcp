# SoundInstance

**Package:** `net.minecraft.client.resources.sounds`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### getLocation

```java
ResourceLocation getLocation()
```

**Returns:** `ResourceLocation`

### resolve

```java
WeighedSoundEvents resolve(SoundManager p_119841_)
```

**Parameters:**

- `p_119841_` (`SoundManager`)

**Returns:** `WeighedSoundEvents`

### getSound

```java
Sound getSound()
```

**Returns:** `Sound`

### getSource

```java
SoundSource getSource()
```

**Returns:** `SoundSource`

### isLooping

```java
boolean isLooping()
```

**Returns:** `boolean`

### isRelative

```java
boolean isRelative()
```

**Returns:** `boolean`

### getDelay

```java
int getDelay()
```

**Returns:** `int`

### getVolume

```java
float getVolume()
```

**Returns:** `float`

### getPitch

```java
float getPitch()
```

**Returns:** `float`

### getX

```java
double getX()
```

**Returns:** `double`

### getY

```java
double getY()
```

**Returns:** `double`

### getZ

```java
double getZ()
```

**Returns:** `double`

### getAttenuation

```java
SoundInstance.Attenuation getAttenuation()
```

**Returns:** `SoundInstance.Attenuation`

### canStartSilent

```java
default boolean canStartSilent()
```

**Returns:** `default boolean`

### canPlaySound

```java
default boolean canPlaySound()
```

**Returns:** `default boolean`

### createUnseededRandom

```java
static RandomSource createUnseededRandom()
```

**Returns:** `static RandomSource`

### getStream

```java
Allow SoundInstances to change source of audio stream if needed
    default java.util.concurrent.CompletableFuture<net.minecraft.client.sounds.AudioStream> getStream(net.minecraft.client.sounds.SoundBufferLibrary soundBuffers, Sound sound, boolean looping)
```

**Parameters:**

- `soundBuffers` (`net.minecraft.client.sounds.SoundBufferLibrary`)
- `sound` (`Sound`)
- `looping` (`boolean`)

**Returns:** `Allow SoundInstances to change source of audio stream if needed
    default java.util.concurrent.CompletableFuture<net.minecraft.client.sounds.AudioStream>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Attenuation` | enum |  |
