# LevelRenderer

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Implements:** `ResourceManagerReloadListener`, `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SECTION_SIZE` | `int` |  |
| `HALF_SECTION_SIZE` | `int` |  |
| `CLOUDS_LOCATION` | `ResourceLocation` |  |
| `DIRECTIONS` | `Direction[]` |  |

## Methods

### playJukeboxSong

```java
public void playJukeboxSong(Holder<JukeboxSong> p_350918_, BlockPos p_350830_)
```

**Parameters:**

- `p_350918_` (`Holder<JukeboxSong>`)
- `p_350830_` (`BlockPos`)

**Returns:** `public void`

### stopJukeboxSong

```java
private void stopJukeboxSong(BlockPos p_350526_)
```

**Parameters:**

- `p_350526_` (`BlockPos`)

**Returns:** `private void`

### stopJukeboxSongAndNotifyNearby

```java
public void stopJukeboxSongAndNotifyNearby(BlockPos p_350385_)
```

**Parameters:**

- `p_350385_` (`BlockPos`)

**Returns:** `public void`

### notifyNearbyEntities

```java
private void notifyNearbyEntities(Level p_109551_, BlockPos p_109552_, boolean p_109553_)
```

**Parameters:**

- `p_109551_` (`Level`)
- `p_109552_` (`BlockPos`)
- `p_109553_` (`boolean`)

**Returns:** `private void`

### addParticle

```java
public void addParticle(ParticleOptions p_109744_, boolean p_109745_, double p_109746_, double p_109747_, double p_109748_, double p_109749_, double p_109750_, double p_109751_)
```

**Parameters:**

- `p_109744_` (`ParticleOptions`)
- `p_109745_` (`boolean`)
- `p_109746_` (`double`)
- `p_109747_` (`double`)
- `p_109748_` (`double`)
- `p_109749_` (`double`)
- `p_109750_` (`double`)
- `p_109751_` (`double`)

**Returns:** `public void`

### addParticle

```java
public void addParticle(ParticleOptions p_109753_, boolean p_109754_, boolean p_109755_, double p_109756_, double p_109757_, double p_109758_, double p_109759_, double p_109760_, double p_109761_)
```

**Parameters:**

- `p_109753_` (`ParticleOptions`)
- `p_109754_` (`boolean`)
- `p_109755_` (`boolean`)
- `p_109756_` (`double`)
- `p_109757_` (`double`)
- `p_109758_` (`double`)
- `p_109759_` (`double`)
- `p_109760_` (`double`)
- `p_109761_` (`double`)

**Returns:** `public void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### addParticle

```java
<T extends ParticleOptions> private <T extends ParticleOptions> void addParticle(T p_109736_, double p_109737_, double p_109738_, double p_109739_, double p_109740_, double p_109741_, double p_109742_)
```

**Parameters:**

- `p_109736_` (`T`)
- `p_109737_` (`double`)
- `p_109738_` (`double`)
- `p_109739_` (`double`)
- `p_109740_` (`double`)
- `p_109741_` (`double`)
- `p_109742_` (`double`)

**Returns:** `private <T extends ParticleOptions> void`

### calculateParticleLevel

```java
private ParticleStatus calculateParticleLevel(boolean p_109768_)
```

**Parameters:**

- `p_109768_` (`boolean`)

**Returns:** `private ParticleStatus`

### clear

```java
public void clear()
```

**Returns:** `public void`

### globalLevelEvent

```java
public void globalLevelEvent(int p_109507_, BlockPos p_109508_, int p_109509_)
```

**Parameters:**

- `p_109507_` (`int`)
- `p_109508_` (`BlockPos`)
- `p_109509_` (`int`)

**Returns:** `public void`

### levelEvent

```java
public void levelEvent(int p_234305_, BlockPos p_234306_, int p_234307_)
```

**Parameters:**

- `p_234305_` (`int`)
- `p_234306_` (`BlockPos`)
- `p_234307_` (`int`)

**Returns:** `public void`

### destroyBlockProgress

```java
public void destroyBlockProgress(int p_109775_, BlockPos p_109776_, int p_109777_)
```

**Parameters:**

- `p_109775_` (`int`)
- `p_109776_` (`BlockPos`)
- `p_109777_` (`int`)

**Returns:** `public void`

### hasRenderedAllSections

```java
public boolean hasRenderedAllSections()
```

**Returns:** `public boolean`

### onChunkLoaded

```java
public void onChunkLoaded(ChunkPos p_295808_)
```

**Parameters:**

- `p_295808_` (`ChunkPos`)

**Returns:** `public void`

### needsUpdate

```java
public void needsUpdate()
```

**Returns:** `public void`

### updateGlobalBlockEntities

```java
public void updateGlobalBlockEntities(Collection<BlockEntity> p_109763_, Collection<BlockEntity> p_109764_)
```

**Parameters:**

- `p_109763_` (`Collection<BlockEntity>`)
- `p_109764_` (`Collection<BlockEntity>`)

**Returns:** `public void`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### getLightColor

```java
public static int getLightColor(BlockAndTintGetter p_109542_, BlockPos p_109543_)
```

**Parameters:**

- `p_109542_` (`BlockAndTintGetter`)
- `p_109543_` (`BlockPos`)

**Returns:** `public static int`

### getLightColor

```java
public static int getLightColor(BlockAndTintGetter p_109538_, BlockState p_109539_, BlockPos p_109540_)
```

**Parameters:**

- `p_109538_` (`BlockAndTintGetter`)
- `p_109539_` (`BlockState`)
- `p_109540_` (`BlockPos`)

**Returns:** `public static int`

### isSectionCompiled

```java
public boolean isSectionCompiled(BlockPos p_295788_)
```

**Parameters:**

- `p_295788_` (`BlockPos`)

**Returns:** `public boolean`

### entityTarget

```java
public RenderTarget entityTarget()
```

**Returns:** `RenderTarget`

### getTranslucentTarget

```java
public RenderTarget getTranslucentTarget()
```

**Returns:** `RenderTarget`

### getItemEntityTarget

```java
public RenderTarget getItemEntityTarget()
```

**Returns:** `RenderTarget`

### getParticlesTarget

```java
public RenderTarget getParticlesTarget()
```

**Returns:** `RenderTarget`

### getWeatherTarget

```java
public RenderTarget getWeatherTarget()
```

**Returns:** `RenderTarget`

### getCloudsTarget

```java
public RenderTarget getCloudsTarget()
```

**Returns:** `RenderTarget`

### shootParticles

```java
private void shootParticles(int p_307280_, BlockPos p_307603_, RandomSource p_307547_, SimpleParticleType p_307590_)
```

**Parameters:**

- `p_307280_` (`int`)
- `p_307603_` (`BlockPos`)
- `p_307547_` (`RandomSource`)
- `p_307590_` (`SimpleParticleType`)

**Returns:** `private void`

### TransparencyShaderException

```java
public TransparencyShaderException(String p_109868_, Throwable p_109869_)
```

**Parameters:**

- `p_109868_` (`String`)
- `p_109869_` (`Throwable`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TransparencyShaderException` | class |  |
