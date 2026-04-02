# FaviconTexture

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### FaviconTexture

```java
private FaviconTexture(TextureManager p_289556_, ResourceLocation p_289549_)
```

**Parameters:**

- `p_289556_` (`TextureManager`)
- `p_289549_` (`ResourceLocation`)

**Returns:** `private`

### forWorld

```java
public static FaviconTexture forWorld(TextureManager p_289550_, String p_289565_)
```

**Parameters:**

- `p_289550_` (`TextureManager`)
- `p_289565_` (`String`)

**Returns:** `public static FaviconTexture`

### forServer

```java
public static FaviconTexture forServer(TextureManager p_289553_, String p_289535_)
```

**Parameters:**

- `p_289553_` (`TextureManager`)
- `p_289535_` (`String`)

**Returns:** `public static FaviconTexture`

### upload

```java
public void upload(NativeImage p_289543_)
```

**Parameters:**

- `p_289543_` (`NativeImage`)

**Returns:** `public void`

### clear

```java
public void clear()
```

**Returns:** `public void`

### textureLocation

```java
public ResourceLocation textureLocation()
```

**Returns:** `public ResourceLocation`

### close

```java
public void close()
```

### checkOpen

```java
private void checkOpen()
```

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("Icon already closed")
```

**Parameters:**

- `closed"` (`"Icon already`)

**Returns:** `throw new`
