# WeighedSoundEvents

**Package:** `net.minecraft.client.sounds`
**Type:** class
**Implements:** `Weighted<Sound>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### WeighedSoundEvents

```java
public WeighedSoundEvents(ResourceLocation p_120446_, String p_120447_)
```

**Parameters:**

- `p_120446_` (`ResourceLocation`)
- `p_120447_` (`String`)

**Returns:** `public`

### getWeight

```java
public int getWeight()
```

**Returns:** `int`

### getSound

```java
public Sound getSound(RandomSource p_235265_)
```

**Parameters:**

- `p_235265_` (`RandomSource`)

**Returns:** `public Sound`

### addSound

```java
public void addSound(Weighted<Sound> p_120452_)
```

**Parameters:**

- `p_120452_` (`Weighted<Sound>`)

**Returns:** `public void`

### getSubtitle

```java
public Component getSubtitle()
```

**Returns:** `Component`

### preloadIfRequired

```java
public void preloadIfRequired(SoundEngine p_120450_)
```

**Parameters:**

- `p_120450_` (`SoundEngine`)
