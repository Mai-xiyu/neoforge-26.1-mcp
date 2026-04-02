# AtlasSet

**Package:** `net.minecraft.client.resources.model`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### AtlasSet

```java
public AtlasSet(Map<ResourceLocation, ResourceLocation> p_249969_, TextureManager p_252059_)
```

**Parameters:**

- `p_249969_` (`Map<ResourceLocation, ResourceLocation>`)
- `p_252059_` (`TextureManager`)

**Returns:** `public`

### getAtlas

```java
public TextureAtlas getAtlas(ResourceLocation p_250828_)
```

**Parameters:**

- `p_250828_` (`ResourceLocation`)

**Returns:** `public TextureAtlas`

### close

```java
public void close()
```

### scheduleLoad

```java
public Map<ResourceLocation, CompletableFuture<AtlasSet.StitchResult>> scheduleLoad(ResourceManager p_249256_, int p_251059_, Executor p_250751_)
```

**Parameters:**

- `p_249256_` (`ResourceManager`)
- `p_251059_` (`int`)
- `p_250751_` (`Executor`)

**Returns:** `public Map<ResourceLocation, CompletableFuture<AtlasSet.StitchResult>>`

### close

```java
public void close()
```

### StitchResult

```java
public StitchResult(TextureAtlas p_250381_, SpriteLoader.Preparations p_251137_)
```

**Parameters:**

- `p_250381_` (`TextureAtlas`)
- `p_251137_` (`SpriteLoader.Preparations`)

**Returns:** `public`

### getSprite

```java
public TextureAtlasSprite getSprite(ResourceLocation p_249039_)
```

**Parameters:**

- `p_249039_` (`ResourceLocation`)

**Returns:** `TextureAtlasSprite`

### missing

```java
public TextureAtlasSprite missing()
```

**Returns:** `public TextureAtlasSprite`

### readyForUpload

```java
public CompletableFuture<Void> readyForUpload()
```

**Returns:** `public CompletableFuture<Void>`

### upload

```java
public void upload()
```

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `StitchResult` | class |  |
