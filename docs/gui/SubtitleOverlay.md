# SubtitleOverlay

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Implements:** `SoundEventListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SubtitleOverlay

```java
public SubtitleOverlay(Minecraft p_94641_)
```

**Parameters:**

- `p_94641_` (`Minecraft`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_282562_)
```

**Parameters:**

- `p_282562_` (`GuiGraphics`)

**Returns:** `public void`

### onPlaySound

```java
public void onPlaySound(SoundInstance p_94645_, WeighedSoundEvents p_94646_, float p_314721_)
```

**Parameters:**

- `p_94645_` (`SoundInstance`)
- `p_94646_` (`WeighedSoundEvents`)
- `p_314721_` (`float`)

### SoundPlayedAt

```java
static record SoundPlayedAt(Vec3 location, long time)
```

**Parameters:**

- `location` (`Vec3`)
- `time` (`long`)

**Returns:** `record`

### Subtitle

```java
public Subtitle(Component p_169072_, float p_314705_, Vec3 p_169073_)
```

**Parameters:**

- `p_169072_` (`Component`)
- `p_314705_` (`float`)
- `p_169073_` (`Vec3`)

**Returns:** `public`

### getText

```java
public Component getText()
```

**Returns:** `public Component`

### getClosest

```java
public SubtitleOverlay.SoundPlayedAt getClosest(Vec3 p_347452_)
```

**Parameters:**

- `p_347452_` (`Vec3`)

**Returns:** `SubtitleOverlay.SoundPlayedAt`

### refresh

```java
public void refresh(Vec3 p_94657_)
```

**Parameters:**

- `p_94657_` (`Vec3`)

**Returns:** `public void`

### isAudibleFrom

```java
public boolean isAudibleFrom(Vec3 p_314706_)
```

**Parameters:**

- `p_314706_` (`Vec3`)

**Returns:** `public boolean`

### purgeOldInstances

```java
public void purgeOldInstances(double p_347730_)
```

**Parameters:**

- `p_347730_` (`double`)

**Returns:** `public void`

### isStillActive

```java
public boolean isStillActive()
```

**Returns:** `public boolean`
