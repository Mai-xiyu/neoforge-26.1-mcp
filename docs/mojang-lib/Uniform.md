# Uniform

**Package:** `com.mojang.blaze3d.shaders`
**Type:** class
**Extends:** `AbstractUniform`
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `UT_INT1` | `int` |  |
| `UT_INT2` | `int` |  |
| `UT_INT3` | `int` |  |
| `UT_INT4` | `int` |  |
| `UT_FLOAT1` | `int` |  |
| `UT_FLOAT2` | `int` |  |
| `UT_FLOAT3` | `int` |  |
| `UT_FLOAT4` | `int` |  |
| `UT_MAT2` | `int` |  |
| `UT_MAT3` | `int` |  |
| `UT_MAT4` | `int` |  |

## Methods

### Uniform

```java
public Uniform(String p_166638_, int p_166639_, int p_166640_, Shader p_166641_)
```

**Parameters:**

- `p_166638_` (`String`)
- `p_166639_` (`int`)
- `p_166640_` (`int`)
- `p_166641_` (`Shader`)

**Returns:** `public`

### glGetUniformLocation

```java
public static int glGetUniformLocation(int p_85625_, CharSequence p_85626_)
```

**Parameters:**

- `p_85625_` (`int`)
- `p_85626_` (`CharSequence`)

**Returns:** `public static int`

### uploadInteger

```java
public static void uploadInteger(int p_85617_, int p_85618_)
```

**Parameters:**

- `p_85617_` (`int`)
- `p_85618_` (`int`)

**Returns:** `public static void`

### glGetAttribLocation

```java
public static int glGetAttribLocation(int p_85640_, CharSequence p_85641_)
```

**Parameters:**

- `p_85640_` (`int`)
- `p_85641_` (`CharSequence`)

**Returns:** `public static int`

### glBindAttribLocation

```java
public static void glBindAttribLocation(int p_166711_, int p_166712_, CharSequence p_166713_)
```

**Parameters:**

- `p_166711_` (`int`)
- `p_166712_` (`int`)
- `p_166713_` (`CharSequence`)

**Returns:** `public static void`

### close

```java
public void close()
```

### markDirty

```java
private void markDirty()
```

**Returns:** `private void`

### getTypeFromString

```java
public static int getTypeFromString(String p_85630_)
```

**Parameters:**

- `p_85630_` (`String`)

**Returns:** `public static int`

### setLocation

```java
public void setLocation(int p_85615_)
```

**Parameters:**

- `p_85615_` (`int`)

**Returns:** `public void`

### getName

```java
public String getName()
```

**Returns:** `public String`

### set

```java
public final void set(float p_85601_)
```

**Parameters:**

- `p_85601_` (`float`)

### set

```java
public final void set(float p_85603_, float p_85604_)
```

**Parameters:**

- `p_85603_` (`float`)
- `p_85604_` (`float`)

### set

```java
public final void set(int p_166701_, float p_166702_)
```

**Parameters:**

- `p_166701_` (`int`)
- `p_166702_` (`float`)

**Returns:** `public final void`

### set

```java
public final void set(float p_85606_, float p_85607_, float p_85608_)
```

**Parameters:**

- `p_85606_` (`float`)
- `p_85607_` (`float`)
- `p_85608_` (`float`)

### set

```java
public final void set(Vector3f p_253931_)
```

**Parameters:**

- `p_253931_` (`Vector3f`)

### set

```java
public final void set(float p_85610_, float p_85611_, float p_85612_, float p_85613_)
```

**Parameters:**

- `p_85610_` (`float`)
- `p_85611_` (`float`)
- `p_85612_` (`float`)
- `p_85613_` (`float`)

### set

```java
public final void set(Vector4f p_254360_)
```

**Parameters:**

- `p_254360_` (`Vector4f`)

### setSafe

```java
public final void setSafe(float p_85635_, float p_85636_, float p_85637_, float p_85638_)
```

**Parameters:**

- `p_85635_` (`float`)
- `p_85636_` (`float`)
- `p_85637_` (`float`)
- `p_85638_` (`float`)

### setSafe

```java
public final void setSafe(int p_85620_, int p_85621_, int p_85622_, int p_85623_)
```

**Parameters:**

- `p_85620_` (`int`)
- `p_85621_` (`int`)
- `p_85622_` (`int`)
- `p_85623_` (`int`)

### set

```java
public final void set(int p_166699_)
```

**Parameters:**

- `p_166699_` (`int`)

### set

```java
public final void set(int p_166704_, int p_166705_)
```

**Parameters:**

- `p_166704_` (`int`)
- `p_166705_` (`int`)

### set

```java
public final void set(int p_166707_, int p_166708_, int p_166709_)
```

**Parameters:**

- `p_166707_` (`int`)
- `p_166708_` (`int`)
- `p_166709_` (`int`)

### set

```java
public final void set(int p_166748_, int p_166749_, int p_166750_, int p_166751_)
```

**Parameters:**

- `p_166748_` (`int`)
- `p_166749_` (`int`)
- `p_166750_` (`int`)
- `p_166751_` (`int`)

### set

```java
public final void set(float[] p_85632_)
```

**Parameters:**

- `p_85632_` (`float[]`)

### setMat2x2

```java
public final void setMat2x2(float p_166754_, float p_166755_, float p_166756_, float p_166757_)
```

**Parameters:**

- `p_166754_` (`float`)
- `p_166755_` (`float`)
- `p_166756_` (`float`)
- `p_166757_` (`float`)

### setMat2x3

```java
public final void setMat2x3(float p_166643_, float p_166644_, float p_166645_, float p_166646_, float p_166647_, float p_166648_)
```

**Parameters:**

- `p_166643_` (`float`)
- `p_166644_` (`float`)
- `p_166645_` (`float`)
- `p_166646_` (`float`)
- `p_166647_` (`float`)
- `p_166648_` (`float`)

### setMat2x4

```java
public final void setMat2x4(float p_166650_, float p_166651_, float p_166652_, float p_166653_, float p_166654_, float p_166655_, float p_166656_, float p_166657_)
```

**Parameters:**

- `p_166650_` (`float`)
- `p_166651_` (`float`)
- `p_166652_` (`float`)
- `p_166653_` (`float`)
- `p_166654_` (`float`)
- `p_166655_` (`float`)
- `p_166656_` (`float`)
- `p_166657_` (`float`)

### setMat3x2

```java
public final void setMat3x2(float p_166719_, float p_166720_, float p_166721_, float p_166722_, float p_166723_, float p_166724_)
```

**Parameters:**

- `p_166719_` (`float`)
- `p_166720_` (`float`)
- `p_166721_` (`float`)
- `p_166722_` (`float`)
- `p_166723_` (`float`)
- `p_166724_` (`float`)

### setMat3x3

```java
public final void setMat3x3(float p_166659_, float p_166660_, float p_166661_, float p_166662_, float p_166663_, float p_166664_, float p_166665_, float p_166666_, float p_166667_)
```

**Parameters:**

- `p_166659_` (`float`)
- `p_166660_` (`float`)
- `p_166661_` (`float`)
- `p_166662_` (`float`)
- `p_166663_` (`float`)
- `p_166664_` (`float`)
- `p_166665_` (`float`)
- `p_166666_` (`float`)
- `p_166667_` (`float`)

### setMat3x4

```java
public final void setMat3x4(float p_166669_, float p_166670_, float p_166671_, float p_166672_, float p_166673_, float p_166674_, float p_166675_, float p_166676_, float p_166677_, float p_166678_, float p_166679_, float p_166680_)
```

**Parameters:**

- `p_166669_` (`float`)
- `p_166670_` (`float`)
- `p_166671_` (`float`)
- `p_166672_` (`float`)
- `p_166673_` (`float`)
- `p_166674_` (`float`)
- `p_166675_` (`float`)
- `p_166676_` (`float`)
- `p_166677_` (`float`)
- `p_166678_` (`float`)
- `p_166679_` (`float`)
- `p_166680_` (`float`)

### setMat4x2

```java
public final void setMat4x2(float p_166726_, float p_166727_, float p_166728_, float p_166729_, float p_166730_, float p_166731_, float p_166732_, float p_166733_)
```

**Parameters:**

- `p_166726_` (`float`)
- `p_166727_` (`float`)
- `p_166728_` (`float`)
- `p_166729_` (`float`)
- `p_166730_` (`float`)
- `p_166731_` (`float`)
- `p_166732_` (`float`)
- `p_166733_` (`float`)

### setMat4x3

```java
public final void setMat4x3(float p_166735_, float p_166736_, float p_166737_, float p_166738_, float p_166739_, float p_166740_, float p_166741_, float p_166742_, float p_166743_, float p_166744_, float p_166745_, float p_166746_)
```

**Parameters:**

- `p_166735_` (`float`)
- `p_166736_` (`float`)
- `p_166737_` (`float`)
- `p_166738_` (`float`)
- `p_166739_` (`float`)
- `p_166740_` (`float`)
- `p_166741_` (`float`)
- `p_166742_` (`float`)
- `p_166743_` (`float`)
- `p_166744_` (`float`)
- `p_166745_` (`float`)
- `p_166746_` (`float`)

### setMat4x4

```java
public final void setMat4x4(float p_166682_, float p_166683_, float p_166684_, float p_166685_, float p_166686_, float p_166687_, float p_166688_, float p_166689_, float p_166690_, float p_166691_, float p_166692_, float p_166693_, float p_166694_, float p_166695_, float p_166696_, float p_166697_)
```

**Parameters:**

- `p_166682_` (`float`)
- `p_166683_` (`float`)
- `p_166684_` (`float`)
- `p_166685_` (`float`)
- `p_166686_` (`float`)
- `p_166687_` (`float`)
- `p_166688_` (`float`)
- `p_166689_` (`float`)
- `p_166690_` (`float`)
- `p_166691_` (`float`)
- `p_166692_` (`float`)
- `p_166693_` (`float`)
- `p_166694_` (`float`)
- `p_166695_` (`float`)
- `p_166696_` (`float`)
- `p_166697_` (`float`)

### set

```java
public final void set(Matrix4f p_254249_)
```

**Parameters:**

- `p_254249_` (`Matrix4f`)

### set

```java
public final void set(Matrix3f p_254556_)
```

**Parameters:**

- `p_254556_` (`Matrix3f`)

### upload

```java
public void upload()
```

**Returns:** `public void`

### uploadAsInteger

```java
private void uploadAsInteger()
```

**Returns:** `private void`

### uploadAsFloat

```java
private void uploadAsFloat()
```

**Returns:** `private void`

### uploadAsMatrix

```java
private void uploadAsMatrix()
```

**Returns:** `private void`

### getLocation

```java
public int getLocation()
```

**Returns:** `public int`

### getCount

```java
public int getCount()
```

**Returns:** `public int`

### getType

```java
public int getType()
```

**Returns:** `public int`

### getIntBuffer

```java
public IntBuffer getIntBuffer()
```

**Returns:** `public IntBuffer`

### getFloatBuffer

```java
public FloatBuffer getFloatBuffer()
```

**Returns:** `public FloatBuffer`
