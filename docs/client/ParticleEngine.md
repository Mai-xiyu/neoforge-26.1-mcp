# ParticleEngine

**Package:** `net.minecraft.client.particle`
**Type:** class
**Implements:** `PreparableReloadListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `level` | `ClientLevel` |  |

## Methods

### ParticleEngine

```java
public ParticleEngine(ClientLevel p_107299_, TextureManager p_107300_)
```

**Parameters:**

- `p_107299_` (`ClientLevel`)
- `p_107300_` (`TextureManager`)

**Returns:** `public`

### registerProviders

```java
private void registerProviders()
```

**Returns:** `private void`

### register

```java
public <T extends ParticleOptions> void register(ParticleType<T> p_107382_, ParticleProvider<T> p_107383_)
```

**Parameters:**

- `p_107382_` (`ParticleType<T>`)
- `p_107383_` (`ParticleProvider<T>`)

### register

```java
public <T extends ParticleOptions> void register(ParticleType<T> p_273423_, ParticleProvider.Sprite<T> p_273134_)
```

**Parameters:**

- `p_273423_` (`ParticleType<T>`)
- `p_273134_` (`ParticleProvider.Sprite<T>`)

### register

```java
public <T extends ParticleOptions> void register(ParticleType<T> p_107379_, ParticleEngine.SpriteParticleRegistration<T> p_107380_)
```

**Parameters:**

- `p_107379_` (`ParticleType<T>`)
- `p_107380_` (`ParticleEngine.SpriteParticleRegistration<T>`)

### reload

```java
public CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_107305_, ResourceManager p_107306_, ProfilerFiller p_107307_, ProfilerFiller p_107308_, Executor p_107309_, Executor p_107310_)
```

**Parameters:**

- `p_107305_` (`PreparableReloadListener.PreparationBarrier`)
- `p_107306_` (`ResourceManager`)
- `p_107307_` (`ProfilerFiller`)
- `p_107308_` (`ProfilerFiller`)
- `p_107309_` (`Executor`)
- `p_107310_` (`Executor`)

**Returns:** `CompletableFuture<Void>`

### ParticleDefinition

```java
record ParticleDefinition(ResourceLocation id, Optional<List<ResourceLocation>> sprites)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `sprites` (`Optional<List<ResourceLocation>>`)

**Returns:** `record`

### close

```java
public void close()
```

**Returns:** `public void`

### loadParticleDescription

```java
private Optional<List<ResourceLocation>> loadParticleDescription(ResourceLocation p_250648_, Resource p_248793_)
```

**Parameters:**

- `p_250648_` (`ResourceLocation`)
- `p_248793_` (`Resource`)

**Returns:** `private Optional<List<ResourceLocation>>`

### IllegalStateException

```java
throw new IllegalStateException("Failed to load description for particle " + p_250648_)
```

**Parameters:**

- `p_250648_` (`"Failed to load description for particle " +`)

**Returns:** `throw new`

### createTrackingEmitter

```java
public void createTrackingEmitter(Entity p_107330_, ParticleOptions p_107331_)
```

**Parameters:**

- `p_107330_` (`Entity`)
- `p_107331_` (`ParticleOptions`)

**Returns:** `public void`

### createTrackingEmitter

```java
public void createTrackingEmitter(Entity p_107333_, ParticleOptions p_107334_, int p_107335_)
```

**Parameters:**

- `p_107333_` (`Entity`)
- `p_107334_` (`ParticleOptions`)
- `p_107335_` (`int`)

**Returns:** `public void`

### createParticle

```java
public Particle createParticle(ParticleOptions p_107371_, double p_107372_, double p_107373_, double p_107374_, double p_107375_, double p_107376_, double p_107377_)
```

**Parameters:**

- `p_107371_` (`ParticleOptions`)
- `p_107372_` (`double`)
- `p_107373_` (`double`)
- `p_107374_` (`double`)
- `p_107375_` (`double`)
- `p_107376_` (`double`)
- `p_107377_` (`double`)

**Returns:** `Particle`

### add

```java
public void add(Particle p_107345_)
```

**Parameters:**

- `p_107345_` (`Particle`)

**Returns:** `public void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### tickParticleList

```java
private void tickParticleList(Collection<Particle> p_107385_)
```

**Parameters:**

- `p_107385_` (`Collection<Particle>`)

**Returns:** `private void`

### updateCount

```java
private void updateCount(ParticleGroup p_172282_, int p_172283_)
```

**Parameters:**

- `p_172282_` (`ParticleGroup`)
- `p_172283_` (`int`)

**Returns:** `private void`

### tickParticle

```java
private void tickParticle(Particle p_107394_)
```

**Parameters:**

- `p_107394_` (`Particle`)

**Returns:** `private void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### render

```java
public void render(LightTexture p_107339_, Camera p_107340_, float p_107341_)
```

**Parameters:**

- `p_107339_` (`LightTexture`)
- `p_107340_` (`Camera`)
- `p_107341_` (`float`)

### render

```java
 render(type -> true)
```

**Parameters:**

- `true` (`type ->`)

**Returns:** ``

### render

```java
public void render(LightTexture p_107339_, Camera p_107340_, float p_107341_, net.minecraft.client.renderer.culling.Frustum frustum, java.util.function.Predicate<ParticleRenderType> renderTypePredicate)
```

**Parameters:**

- `p_107339_` (`LightTexture`)
- `p_107340_` (`Camera`)
- `p_107341_` (`float`)
- `frustum` (`net.minecraft.client.renderer.culling.Frustum`)
- `renderTypePredicate` (`java.util.function.Predicate<ParticleRenderType>`)

**Returns:** `public void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### setLevel

```java
public void setLevel(ClientLevel p_107343_)
```

**Parameters:**

- `p_107343_` (`ClientLevel`)

**Returns:** `public void`

### destroy

```java
public void destroy(BlockPos p_107356_, BlockState p_107357_)
```

**Parameters:**

- `p_107356_` (`BlockPos`)
- `p_107357_` (`BlockState`)

**Returns:** `public void`

### crack

```java
public void crack(BlockPos p_107368_, Direction p_107369_)
```

**Parameters:**

- `p_107368_` (`BlockPos`)
- `p_107369_` (`Direction`)

**Returns:** `public void`

### countParticles

```java
public String countParticles()
```

**Returns:** `public String`

### iterateParticles

```java
public void iterateParticles(java.util.function.Consumer<Particle> consumer)
```

**Parameters:**

- `consumer` (`java.util.function.Consumer<Particle>`)

**Returns:** `public void`

### addBlockHitEffects

```java
public void addBlockHitEffects(BlockPos pos, net.minecraft.world.phys.BlockHitResult target)
```

**Parameters:**

- `pos` (`BlockPos`)
- `target` (`net.minecraft.world.phys.BlockHitResult`)

**Returns:** `public void`

### hasSpaceInParticleLimit

```java
private boolean hasSpaceInParticleLimit(ParticleGroup p_172280_)
```

**Parameters:**

- `p_172280_` (`ParticleGroup`)

**Returns:** `private boolean`

### clearParticles

```java
private void clearParticles()
```

**Returns:** `private void`

### get

```java
public TextureAtlasSprite get(int p_107413_, int p_107414_)
```

**Parameters:**

- `p_107413_` (`int`)
- `p_107414_` (`int`)

**Returns:** `TextureAtlasSprite`

### get

```java
public TextureAtlasSprite get(RandomSource p_233889_)
```

**Parameters:**

- `p_233889_` (`RandomSource`)

**Returns:** `TextureAtlasSprite`

### rebind

```java
public void rebind(List<TextureAtlasSprite> p_107416_)
```

**Parameters:**

- `p_107416_` (`List<TextureAtlasSprite>`)

**Returns:** `public void`

### create

```java
ParticleProvider<T> create(SpriteSet p_107420_)
```

**Parameters:**

- `p_107420_` (`SpriteSet`)

**Returns:** `ParticleProvider<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SpriteParticleRegistration` | interface |  |
