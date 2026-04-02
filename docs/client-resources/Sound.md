# Sound

**Package:** `net.minecraft.client.resources.sounds`
**Type:** class
**Implements:** `Weighted<Sound>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SOUND_LISTER` | `FileToIdConverter` |  |

## Methods

### Sound

```java
public Sound(ResourceLocation p_350972_, SampledFloat p_235135_, SampledFloat p_235136_, int p_235137_, Sound.Type p_235138_, boolean p_235139_, boolean p_235140_, int p_235141_)
```

**Parameters:**

- `p_350972_` (`ResourceLocation`)
- `p_235135_` (`SampledFloat`)
- `p_235136_` (`SampledFloat`)
- `p_235137_` (`int`)
- `p_235138_` (`Sound.Type`)
- `p_235139_` (`boolean`)
- `p_235140_` (`boolean`)
- `p_235141_` (`int`)

**Returns:** `public`

### getLocation

```java
public ResourceLocation getLocation()
```

**Returns:** `public ResourceLocation`

### getPath

```java
public ResourceLocation getPath()
```

**Returns:** `public ResourceLocation`

### getVolume

```java
public SampledFloat getVolume()
```

**Returns:** `public SampledFloat`

### getPitch

```java
public SampledFloat getPitch()
```

**Returns:** `public SampledFloat`

### getWeight

```java
public int getWeight()
```

**Returns:** `int`

### getSound

```java
public Sound getSound(RandomSource p_235143_)
```

**Parameters:**

- `p_235143_` (`RandomSource`)

**Returns:** `public Sound`

### preloadIfRequired

```java
public void preloadIfRequired(SoundEngine p_119789_)
```

**Parameters:**

- `p_119789_` (`SoundEngine`)

### getType

```java
public Sound.Type getType()
```

**Returns:** `public Sound.Type`

### shouldStream

```java
public boolean shouldStream()
```

**Returns:** `public boolean`

### shouldPreload

```java
public boolean shouldPreload()
```

**Returns:** `public boolean`

### getAttenuationDistance

```java
public int getAttenuationDistance()
```

**Returns:** `public int`

### toString

```java
public String toString()
```

**Returns:** `String`

### SOUND_EVENT

```java
, SOUND_EVENT()
```

**Returns:** `,`

### Type

```java
private Type(String p_119809_)
```

**Parameters:**

- `p_119809_` (`String`)

**Returns:** `private`

### getByName

```java
public static Sound.Type getByName(String p_119811_)
```

**Parameters:**

- `p_119811_` (`String`)

**Returns:** `Sound.Type`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | enum |  |
