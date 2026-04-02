# SimpleTexture

**Package:** `net.minecraft.client.renderer.texture`
**Type:** class
**Extends:** `AbstractTexture`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `location` | `ResourceLocation` |  |

## Methods

### SimpleTexture

```java
public SimpleTexture(ResourceLocation p_118133_)
```

**Parameters:**

- `p_118133_` (`ResourceLocation`)

**Returns:** `public`

### load

```java
public void load(ResourceManager p_118135_)
```

**Parameters:**

- `p_118135_` (`ResourceManager`)

### doLoad

```java
private void doLoad(NativeImage p_118137_, boolean p_118138_, boolean p_118139_)
```

**Parameters:**

- `p_118137_` (`NativeImage`)
- `p_118138_` (`boolean`)
- `p_118139_` (`boolean`)

**Returns:** `private void`

### getTextureImage

```java
protected SimpleTexture.TextureImage getTextureImage(ResourceManager p_118140_)
```

**Parameters:**

- `p_118140_` (`ResourceManager`)

**Returns:** `protected SimpleTexture.TextureImage`

### TextureImage

```java
public TextureImage(IOException p_118153_)
```

**Parameters:**

- `p_118153_` (`IOException`)

**Returns:** `public`

### TextureImage

```java
public TextureImage(TextureMetadataSection p_118150_, NativeImage p_118151_)
```

**Parameters:**

- `p_118150_` (`TextureMetadataSection`)
- `p_118151_` (`NativeImage`)

**Returns:** `public`

### load

```java
public static SimpleTexture.TextureImage load(ResourceManager p_118156_, ResourceLocation p_118157_)
```

**Parameters:**

- `p_118156_` (`ResourceManager`)
- `p_118157_` (`ResourceLocation`)

**Returns:** `public static SimpleTexture.TextureImage`

### getTextureMetadata

```java
public TextureMetadataSection getTextureMetadata()
```

**Returns:** `TextureMetadataSection`

### getImage

```java
public NativeImage getImage()
```

**Returns:** `public NativeImage`

### close

```java
public void close()
```

### throwIfError

```java
public void throwIfError()
```

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TextureImage` | class |  |
