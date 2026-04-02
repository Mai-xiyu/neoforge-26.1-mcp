# SkinManager

**Package:** `net.minecraft.client.resources`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SkinManager

```java
public SkinManager(TextureManager p_118812_, Path p_294690_, MinecraftSessionService p_118814_, Executor p_294105_)
```

**Parameters:**

- `p_118812_` (`TextureManager`)
- `p_294690_` (`Path`)
- `p_118814_` (`MinecraftSessionService`)
- `p_294105_` (`Executor`)

**Returns:** `public`

### load

```java
public CompletableFuture<PlayerSkin> load(SkinManager.CacheKey p_296373_)
```

**Parameters:**

- `p_296373_` (`SkinManager.CacheKey`)

**Returns:** `public CompletableFuture<PlayerSkin>`

### lookupInsecure

```java
public Supplier<PlayerSkin> lookupInsecure(GameProfile p_295432_)
```

**Parameters:**

- `p_295432_` (`GameProfile`)

**Returns:** `public Supplier<PlayerSkin>`

### getInsecureSkin

```java
public PlayerSkin getInsecureSkin(GameProfile p_294261_)
```

**Parameters:**

- `p_294261_` (`GameProfile`)

**Returns:** `public PlayerSkin`

### getOrLoad

```java
public CompletableFuture<PlayerSkin> getOrLoad(GameProfile p_294865_)
```

**Parameters:**

- `p_294865_` (`GameProfile`)

**Returns:** `public CompletableFuture<PlayerSkin>`

### registerTextures

```java
CompletableFuture<PlayerSkin> registerTextures(UUID p_307544_, MinecraftProfileTextures p_307606_)
```

**Parameters:**

- `p_307544_` (`UUID`)
- `p_307606_` (`MinecraftProfileTextures`)

**Returns:** `CompletableFuture<PlayerSkin>`

### CacheKey

```java
static record CacheKey(UUID profileId, Property packedTextures)
```

**Parameters:**

- `profileId` (`UUID`)
- `packedTextures` (`Property`)

**Returns:** `record`

### TextureCache

```java
 TextureCache(TextureManager p_295278_, Path p_294453_, Type p_294220_)
```

**Parameters:**

- `p_295278_` (`TextureManager`)
- `p_294453_` (`Path`)
- `p_294220_` (`Type`)

**Returns:** ``

### getOrLoad

```java
public CompletableFuture<ResourceLocation> getOrLoad(MinecraftProfileTexture p_294862_)
```

**Parameters:**

- `p_294862_` (`MinecraftProfileTexture`)

**Returns:** `public CompletableFuture<ResourceLocation>`

### registerTexture

```java
private CompletableFuture<ResourceLocation> registerTexture(MinecraftProfileTexture p_295647_)
```

**Parameters:**

- `p_295647_` (`MinecraftProfileTexture`)

**Returns:** `private CompletableFuture<ResourceLocation>`

### getTextureLocation

```java
private ResourceLocation getTextureLocation(String p_295006_)
```

**Parameters:**

- `p_295006_` (`String`)

**Returns:** `private ResourceLocation`
