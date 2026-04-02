# PostPass

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `inTarget` | `RenderTarget` |  |
| `outTarget` | `RenderTarget` |  |

## Methods

### PostPass

```java
public PostPass(ResourceProvider p_331087_, String p_110062_, RenderTarget p_110063_, RenderTarget p_110064_, boolean p_333761_)
```

**Parameters:**

- `p_331087_` (`ResourceProvider`)
- `p_110062_` (`String`)
- `p_110063_` (`RenderTarget`)
- `p_110064_` (`RenderTarget`)
- `p_333761_` (`boolean`)

**Returns:** `public`

### close

```java
public void close()
```

### getName

```java
public final String getName()
```

**Returns:** `public final String`

### addAuxAsset

```java
public void addAuxAsset(String p_110070_, IntSupplier p_110071_, int p_110072_, int p_110073_)
```

**Parameters:**

- `p_110070_` (`String`)
- `p_110071_` (`IntSupplier`)
- `p_110072_` (`int`)
- `p_110073_` (`int`)

**Returns:** `public void`

### setOrthoMatrix

```java
public void setOrthoMatrix(Matrix4f p_253811_)
```

**Parameters:**

- `p_253811_` (`Matrix4f`)

**Returns:** `public void`

### process

```java
public void process(float p_110066_)
```

**Parameters:**

- `p_110066_` (`float`)

**Returns:** `public void`

### getEffect

```java
public EffectInstance getEffect()
```

**Returns:** `public EffectInstance`

### getFilterMode

```java
public int getFilterMode()
```

**Returns:** `public int`
