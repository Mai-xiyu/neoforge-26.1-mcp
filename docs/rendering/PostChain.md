# PostChain

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PostChain

```java
public PostChain(TextureManager p_110018_, ResourceProvider p_330592_, RenderTarget p_110020_, ResourceLocation p_110021_)
```

**Parameters:**

- `p_110018_` (`TextureManager`)
- `p_330592_` (`ResourceProvider`)
- `p_110020_` (`RenderTarget`)
- `p_110021_` (`ResourceLocation`)

**Returns:** `public`

### load

```java
private void load(TextureManager p_110034_, ResourceLocation p_110035_)
```

**Parameters:**

- `p_110034_` (`TextureManager`)
- `p_110035_` (`ResourceLocation`)

**Returns:** `private void`

### parseTargetNode

```java
private void parseTargetNode(JsonElement p_110029_)
```

**Parameters:**

- `p_110029_` (`JsonElement`)

**Returns:** `private void`

### ChainedJsonException

```java
throw new ChainedJsonException(s + " is already defined")
```

**Parameters:**

- `defined"` (`s + " is already`)

**Returns:** `throw new`

### parsePassNode

```java
private void parsePassNode(TextureManager p_110031_, JsonElement p_110032_)
```

**Parameters:**

- `p_110031_` (`TextureManager`)
- `p_110032_` (`JsonElement`)

**Returns:** `private void`

### ChainedJsonException

```java
throw new ChainedJsonException("Input target '" + s1 + "' does not exist")
```

**Parameters:**

- `exist"` (`"Input target '" + s1 + "' does not`)

**Returns:** `throw new`

### ChainedJsonException

```java
throw new ChainedJsonException("Output target '" + s2 + "' does not exist")
```

**Parameters:**

- `exist"` (`"Output target '" + s2 + "' does not`)

**Returns:** `throw new`

### ChainedJsonException

```java
throw new ChainedJsonException("Render target '" + s4 + "' can't be used as depth buffer")
```

**Parameters:**

- `buffer"` (`"Render target '" + s4 + "' can't be used as depth`)

**Returns:** `throw new`

### parseUniformNode

```java
private void parseUniformNode(JsonElement p_110048_)
```

**Parameters:**

- `p_110048_` (`JsonElement`)

**Returns:** `private void`

### ChainedJsonException

```java
throw new ChainedJsonException("Uniform '" + s + "' does not exist")
```

**Parameters:**

- `exist"` (`"Uniform '" + s + "' does not`)

**Returns:** `throw new`

### getTempTarget

```java
public RenderTarget getTempTarget(String p_110037_)
```

**Parameters:**

- `p_110037_` (`String`)

**Returns:** `public RenderTarget`

### addTempTarget

```java
public void addTempTarget(String p_110039_, int p_110040_, int p_110041_)
```

**Parameters:**

- `p_110039_` (`String`)
- `p_110040_` (`int`)
- `p_110041_` (`int`)

**Returns:** `public void`

### close

```java
public void close()
```

### addPass

```java
public PostPass addPass(String p_110043_, RenderTarget p_110044_, RenderTarget p_110045_, boolean p_334079_)
```

**Parameters:**

- `p_110043_` (`String`)
- `p_110044_` (`RenderTarget`)
- `p_110045_` (`RenderTarget`)
- `p_334079_` (`boolean`)

**Returns:** `public PostPass`

### updateOrthoMatrix

```java
private void updateOrthoMatrix()
```

**Returns:** `private void`

### resize

```java
public void resize(int p_110026_, int p_110027_)
```

**Parameters:**

- `p_110026_` (`int`)
- `p_110027_` (`int`)

**Returns:** `public void`

### setFilterMode

```java
private void setFilterMode(int p_333852_)
```

**Parameters:**

- `p_333852_` (`int`)

**Returns:** `private void`

### process

```java
public void process(float p_110024_)
```

**Parameters:**

- `p_110024_` (`float`)

**Returns:** `public void`

### setUniform

```java
public void setUniform(String p_332204_, float p_331999_)
```

**Parameters:**

- `p_332204_` (`String`)
- `p_331999_` (`float`)

**Returns:** `public void`

### getName

```java
public final String getName()
```

**Returns:** `public final String`
