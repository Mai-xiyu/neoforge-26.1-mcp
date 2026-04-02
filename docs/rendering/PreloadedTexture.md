# PreloadedTexture

**Package:** `net.minecraft.client.renderer.texture`
**Type:** class
**Extends:** `SimpleTexture`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PreloadedTexture

```java
public PreloadedTexture(ResourceManager p_118102_, ResourceLocation p_118103_, Executor p_118104_)
```

**Parameters:**

- `p_118102_` (`ResourceManager`)
- `p_118103_` (`ResourceLocation`)
- `p_118104_` (`Executor`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getTextureImage

```java
protected SimpleTexture.TextureImage getTextureImage(ResourceManager p_118126_)
```

**Parameters:**

- `p_118126_` (`ResourceManager`)

**Returns:** `SimpleTexture.TextureImage`

### getFuture

```java
public CompletableFuture<Void> getFuture()
```

**Returns:** `public CompletableFuture<Void>`

### reset

```java
public void reset(TextureManager p_118114_, ResourceManager p_118115_, ResourceLocation p_118116_, Executor p_118117_)
```

**Parameters:**

- `p_118114_` (`TextureManager`)
- `p_118115_` (`ResourceManager`)
- `p_118116_` (`ResourceLocation`)
- `p_118117_` (`Executor`)

### executor

```java
private static Executor executor(Executor p_118121_)
```

**Parameters:**

- `p_118121_` (`Executor`)

**Returns:** `private static Executor`
