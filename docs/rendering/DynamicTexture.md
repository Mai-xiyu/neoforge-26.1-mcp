# DynamicTexture

**Package:** `net.minecraft.client.renderer.texture`
**Type:** class
**Extends:** `AbstractTexture`
**Implements:** `Dumpable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### DynamicTexture

```java
public DynamicTexture(NativeImage p_117984_)
```

**Parameters:**

- `p_117984_` (`NativeImage`)

**Returns:** `public`

### DynamicTexture

```java
public DynamicTexture(int p_117980_, int p_117981_, boolean p_117982_)
```

**Parameters:**

- `p_117980_` (`int`)
- `p_117981_` (`int`)
- `p_117982_` (`boolean`)

**Returns:** `public`

### load

```java
public void load(ResourceManager p_117987_)
```

**Parameters:**

- `p_117987_` (`ResourceManager`)

### upload

```java
public void upload()
```

**Returns:** `public void`

### getPixels

```java
public NativeImage getPixels()
```

**Returns:** `NativeImage`

### setPixels

```java
public void setPixels(NativeImage p_117989_)
```

**Parameters:**

- `p_117989_` (`NativeImage`)

**Returns:** `public void`

### close

```java
public void close()
```

### dumpContents

```java
public void dumpContents(ResourceLocation p_276119_, Path p_276105_)
```

**Parameters:**

- `p_276119_` (`ResourceLocation`)
- `p_276105_` (`Path`)
