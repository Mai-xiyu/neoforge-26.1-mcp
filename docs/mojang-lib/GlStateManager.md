# GlStateManager

**Package:** `com.mojang.blaze3d.platform`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@DontObfuscate`, `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TEXTURE_COUNT` | `int` |  |

## Methods

### _disableScissorTest

```java
public static void _disableScissorTest()
```

**Returns:** `public static void`

### _enableScissorTest

```java
public static void _enableScissorTest()
```

**Returns:** `public static void`

### _scissorBox

```java
public static void _scissorBox(int p_84169_, int p_84170_, int p_84171_, int p_84172_)
```

**Parameters:**

- `p_84169_` (`int`)
- `p_84170_` (`int`)
- `p_84171_` (`int`)
- `p_84172_` (`int`)

**Returns:** `public static void`

### _disableDepthTest

```java
public static void _disableDepthTest()
```

**Returns:** `public static void`

### _enableDepthTest

```java
public static void _enableDepthTest()
```

**Returns:** `public static void`

### _depthFunc

```java
public static void _depthFunc(int p_84324_)
```

**Parameters:**

- `p_84324_` (`int`)

**Returns:** `public static void`

### _depthMask

```java
public static void _depthMask(boolean p_84299_)
```

**Parameters:**

- `p_84299_` (`boolean`)

**Returns:** `public static void`

### _disableBlend

```java
public static void _disableBlend()
```

**Returns:** `public static void`

### _enableBlend

```java
public static void _enableBlend()
```

**Returns:** `public static void`

### _blendFunc

```java
public static void _blendFunc(int p_84329_, int p_84330_)
```

**Parameters:**

- `p_84329_` (`int`)
- `p_84330_` (`int`)

**Returns:** `public static void`

### _blendFuncSeparate

```java
public static void _blendFuncSeparate(int p_84336_, int p_84337_, int p_84338_, int p_84339_)
```

**Parameters:**

- `p_84336_` (`int`)
- `p_84337_` (`int`)
- `p_84338_` (`int`)
- `p_84339_` (`int`)

**Returns:** `public static void`

### glBlendFuncSeparate

```java
 glBlendFuncSeparate()
```

**Returns:** ``

### _blendEquation

```java
public static void _blendEquation(int p_84380_)
```

**Parameters:**

- `p_84380_` (`int`)

**Returns:** `public static void`

### glGetProgrami

```java
public static int glGetProgrami(int p_84382_, int p_84383_)
```

**Parameters:**

- `p_84382_` (`int`)
- `p_84383_` (`int`)

**Returns:** `public static int`

### glAttachShader

```java
public static void glAttachShader(int p_84424_, int p_84425_)
```

**Parameters:**

- `p_84424_` (`int`)
- `p_84425_` (`int`)

**Returns:** `public static void`

### glDeleteShader

```java
public static void glDeleteShader(int p_84422_)
```

**Parameters:**

- `p_84422_` (`int`)

**Returns:** `public static void`

### glCreateShader

```java
public static int glCreateShader(int p_84448_)
```

**Parameters:**

- `p_84448_` (`int`)

**Returns:** `public static int`

### glShaderSource

```java
public static void glShaderSource(int p_157117_, List<String> p_157118_)
```

**Parameters:**

- `p_157117_` (`int`)
- `p_157118_` (`List<String>`)

**Returns:** `public static void`

### glCompileShader

```java
public static void glCompileShader(int p_84466_)
```

**Parameters:**

- `p_84466_` (`int`)

**Returns:** `public static void`

### glGetShaderi

```java
public static int glGetShaderi(int p_84450_, int p_84451_)
```

**Parameters:**

- `p_84450_` (`int`)
- `p_84451_` (`int`)

**Returns:** `public static int`

### _glUseProgram

```java
public static void _glUseProgram(int p_84479_)
```

**Parameters:**

- `p_84479_` (`int`)

**Returns:** `public static void`

### glCreateProgram

```java
public static int glCreateProgram()
```

**Returns:** `public static int`

### glDeleteProgram

```java
public static void glDeleteProgram(int p_84485_)
```

**Parameters:**

- `p_84485_` (`int`)

**Returns:** `public static void`

### glLinkProgram

```java
public static void glLinkProgram(int p_84491_)
```

**Parameters:**

- `p_84491_` (`int`)

**Returns:** `public static void`

### _glGetUniformLocation

```java
public static int _glGetUniformLocation(int p_84346_, CharSequence p_84347_)
```

**Parameters:**

- `p_84346_` (`int`)
- `p_84347_` (`CharSequence`)

**Returns:** `public static int`

### _glUniform1

```java
public static void _glUniform1(int p_84264_, IntBuffer p_84265_)
```

**Parameters:**

- `p_84264_` (`int`)
- `p_84265_` (`IntBuffer`)

**Returns:** `public static void`

### _glUniform1i

```java
public static void _glUniform1i(int p_84468_, int p_84469_)
```

**Parameters:**

- `p_84468_` (`int`)
- `p_84469_` (`int`)

**Returns:** `public static void`

### _glUniform1

```java
public static void _glUniform1(int p_84349_, FloatBuffer p_84350_)
```

**Parameters:**

- `p_84349_` (`int`)
- `p_84350_` (`FloatBuffer`)

**Returns:** `public static void`

### _glUniform2

```java
public static void _glUniform2(int p_84352_, IntBuffer p_84353_)
```

**Parameters:**

- `p_84352_` (`int`)
- `p_84353_` (`IntBuffer`)

**Returns:** `public static void`

### _glUniform2

```java
public static void _glUniform2(int p_84402_, FloatBuffer p_84403_)
```

**Parameters:**

- `p_84402_` (`int`)
- `p_84403_` (`FloatBuffer`)

**Returns:** `public static void`

### _glUniform3

```java
public static void _glUniform3(int p_84405_, IntBuffer p_84406_)
```

**Parameters:**

- `p_84405_` (`int`)
- `p_84406_` (`IntBuffer`)

**Returns:** `public static void`

### _glUniform3

```java
public static void _glUniform3(int p_84436_, FloatBuffer p_84437_)
```

**Parameters:**

- `p_84436_` (`int`)
- `p_84437_` (`FloatBuffer`)

**Returns:** `public static void`

### _glUniform4

```java
public static void _glUniform4(int p_84439_, IntBuffer p_84440_)
```

**Parameters:**

- `p_84439_` (`int`)
- `p_84440_` (`IntBuffer`)

**Returns:** `public static void`

### _glUniform4

```java
public static void _glUniform4(int p_84462_, FloatBuffer p_84463_)
```

**Parameters:**

- `p_84462_` (`int`)
- `p_84463_` (`FloatBuffer`)

**Returns:** `public static void`

### _glUniformMatrix2

```java
public static void _glUniformMatrix2(int p_84270_, boolean p_84271_, FloatBuffer p_84272_)
```

**Parameters:**

- `p_84270_` (`int`)
- `p_84271_` (`boolean`)
- `p_84272_` (`FloatBuffer`)

**Returns:** `public static void`

### _glUniformMatrix3

```java
public static void _glUniformMatrix3(int p_84355_, boolean p_84356_, FloatBuffer p_84357_)
```

**Parameters:**

- `p_84355_` (`int`)
- `p_84356_` (`boolean`)
- `p_84357_` (`FloatBuffer`)

**Returns:** `public static void`

### _glUniformMatrix4

```java
public static void _glUniformMatrix4(int p_84408_, boolean p_84409_, FloatBuffer p_84410_)
```

**Parameters:**

- `p_84408_` (`int`)
- `p_84409_` (`boolean`)
- `p_84410_` (`FloatBuffer`)

**Returns:** `public static void`

### _glGetAttribLocation

```java
public static int _glGetAttribLocation(int p_84399_, CharSequence p_84400_)
```

**Parameters:**

- `p_84399_` (`int`)
- `p_84400_` (`CharSequence`)

**Returns:** `public static int`

### _glBindAttribLocation

```java
public static void _glBindAttribLocation(int p_157062_, int p_157063_, CharSequence p_157064_)
```

**Parameters:**

- `p_157062_` (`int`)
- `p_157063_` (`int`)
- `p_157064_` (`CharSequence`)

**Returns:** `public static void`

### _glGenBuffers

```java
public static int _glGenBuffers()
```

**Returns:** `public static int`

### _glGenVertexArrays

```java
public static int _glGenVertexArrays()
```

**Returns:** `public static int`

### _glBindBuffer

```java
public static void _glBindBuffer(int p_84481_, int p_84482_)
```

**Parameters:**

- `p_84481_` (`int`)
- `p_84482_` (`int`)

**Returns:** `public static void`

### _glBindVertexArray

```java
public static void _glBindVertexArray(int p_157069_)
```

**Parameters:**

- `p_157069_` (`int`)

**Returns:** `public static void`

### _glBufferData

```java
public static void _glBufferData(int p_84257_, ByteBuffer p_84258_, int p_84259_)
```

**Parameters:**

- `p_84257_` (`int`)
- `p_84258_` (`ByteBuffer`)
- `p_84259_` (`int`)

**Returns:** `public static void`

### _glBufferData

```java
public static void _glBufferData(int p_157071_, long p_157072_, int p_157073_)
```

**Parameters:**

- `p_157071_` (`int`)
- `p_157072_` (`long`)
- `p_157073_` (`int`)

**Returns:** `public static void`

### _glMapBuffer

```java
public static ByteBuffer _glMapBuffer(int p_157091_, int p_157092_)
```

**Parameters:**

- `p_157091_` (`int`)
- `p_157092_` (`int`)

**Returns:** `ByteBuffer`

### _glUnmapBuffer

```java
public static void _glUnmapBuffer(int p_157099_)
```

**Parameters:**

- `p_157099_` (`int`)

**Returns:** `public static void`

### _glDeleteBuffers

```java
public static void _glDeleteBuffers(int p_84497_)
```

**Parameters:**

- `p_84497_` (`int`)

**Returns:** `public static void`

### _glCopyTexSubImage2D

```java
public static void _glCopyTexSubImage2D(int p_84180_, int p_84181_, int p_84182_, int p_84183_, int p_84184_, int p_84185_, int p_84186_, int p_84187_)
```

**Parameters:**

- `p_84180_` (`int`)
- `p_84181_` (`int`)
- `p_84182_` (`int`)
- `p_84183_` (`int`)
- `p_84184_` (`int`)
- `p_84185_` (`int`)
- `p_84186_` (`int`)
- `p_84187_` (`int`)

**Returns:** `public static void`

### _glDeleteVertexArrays

```java
public static void _glDeleteVertexArrays(int p_157077_)
```

**Parameters:**

- `p_157077_` (`int`)

**Returns:** `public static void`

### _glBindFramebuffer

```java
public static void _glBindFramebuffer(int p_84487_, int p_84488_)
```

**Parameters:**

- `p_84487_` (`int`)
- `p_84488_` (`int`)

**Returns:** `public static void`

### _glBlitFrameBuffer

```java
public static void _glBlitFrameBuffer(int p_84189_, int p_84190_, int p_84191_, int p_84192_, int p_84193_, int p_84194_, int p_84195_, int p_84196_, int p_84197_, int p_84198_)
```

**Parameters:**

- `p_84189_` (`int`)
- `p_84190_` (`int`)
- `p_84191_` (`int`)
- `p_84192_` (`int`)
- `p_84193_` (`int`)
- `p_84194_` (`int`)
- `p_84195_` (`int`)
- `p_84196_` (`int`)
- `p_84197_` (`int`)
- `p_84198_` (`int`)

**Returns:** `public static void`

### _glBindRenderbuffer

```java
public static void _glBindRenderbuffer(int p_157066_, int p_157067_)
```

**Parameters:**

- `p_157066_` (`int`)
- `p_157067_` (`int`)

**Returns:** `public static void`

### _glDeleteRenderbuffers

```java
public static void _glDeleteRenderbuffers(int p_157075_)
```

**Parameters:**

- `p_157075_` (`int`)

**Returns:** `public static void`

### _glDeleteFramebuffers

```java
public static void _glDeleteFramebuffers(int p_84503_)
```

**Parameters:**

- `p_84503_` (`int`)

**Returns:** `public static void`

### glGenFramebuffers

```java
public static int glGenFramebuffers()
```

**Returns:** `public static int`

### glGenRenderbuffers

```java
public static int glGenRenderbuffers()
```

**Returns:** `public static int`

### _glRenderbufferStorage

```java
public static void _glRenderbufferStorage(int p_157094_, int p_157095_, int p_157096_, int p_157097_)
```

**Parameters:**

- `p_157094_` (`int`)
- `p_157095_` (`int`)
- `p_157096_` (`int`)
- `p_157097_` (`int`)

**Returns:** `public static void`

### _glFramebufferRenderbuffer

```java
public static void _glFramebufferRenderbuffer(int p_157085_, int p_157086_, int p_157087_, int p_157088_)
```

**Parameters:**

- `p_157085_` (`int`)
- `p_157086_` (`int`)
- `p_157087_` (`int`)
- `p_157088_` (`int`)

**Returns:** `public static void`

### glCheckFramebufferStatus

```java
public static int glCheckFramebufferStatus(int p_84509_)
```

**Parameters:**

- `p_84509_` (`int`)

**Returns:** `public static int`

### _glFramebufferTexture2D

```java
public static void _glFramebufferTexture2D(int p_84174_, int p_84175_, int p_84176_, int p_84177_, int p_84178_)
```

**Parameters:**

- `p_84174_` (`int`)
- `p_84175_` (`int`)
- `p_84176_` (`int`)
- `p_84177_` (`int`)
- `p_84178_` (`int`)

**Returns:** `public static void`

### getBoundFramebuffer

```java
public static int getBoundFramebuffer()
```

**Returns:** `public static int`

### _getInteger

```java
return _getInteger()
```

**Returns:** `return`

### glActiveTexture

```java
public static void glActiveTexture(int p_84515_)
```

**Parameters:**

- `p_84515_` (`int`)

**Returns:** `public static void`

### glBlendFuncSeparate

```java
public static void glBlendFuncSeparate(int p_84389_, int p_84390_, int p_84391_, int p_84392_)
```

**Parameters:**

- `p_84389_` (`int`)
- `p_84390_` (`int`)
- `p_84391_` (`int`)
- `p_84392_` (`int`)

**Returns:** `public static void`

### glGetShaderInfoLog

```java
public static String glGetShaderInfoLog(int p_84493_, int p_84494_)
```

**Parameters:**

- `p_84493_` (`int`)
- `p_84494_` (`int`)

**Returns:** `public static String`

### glGetProgramInfoLog

```java
public static String glGetProgramInfoLog(int p_84499_, int p_84500_)
```

**Parameters:**

- `p_84499_` (`int`)
- `p_84500_` (`int`)

**Returns:** `public static String`

### setupLevelDiffuseLighting

```java
public static void setupLevelDiffuseLighting(Vector3f p_254343_, Vector3f p_254532_, Matrix4f p_254339_)
```

**Parameters:**

- `p_254343_` (`Vector3f`)
- `p_254532_` (`Vector3f`)
- `p_254339_` (`Matrix4f`)

**Returns:** `public static void`

### setupGuiFlatDiffuseLighting

```java
public static void setupGuiFlatDiffuseLighting(Vector3f p_254237_, Vector3f p_253658_)
```

**Parameters:**

- `p_254237_` (`Vector3f`)
- `p_253658_` (`Vector3f`)

**Returns:** `public static void`

### setupLevelDiffuseLighting

```java
 setupLevelDiffuseLighting()
```

**Returns:** ``

### setupGui3DDiffuseLighting

```java
public static void setupGui3DDiffuseLighting(Vector3f p_254290_, Vector3f p_254528_)
```

**Parameters:**

- `p_254290_` (`Vector3f`)
- `p_254528_` (`Vector3f`)

**Returns:** `public static void`

### setupLevelDiffuseLighting

```java
 setupLevelDiffuseLighting()
```

**Returns:** ``

### _enableCull

```java
public static void _enableCull()
```

**Returns:** `public static void`

### _disableCull

```java
public static void _disableCull()
```

**Returns:** `public static void`

### _polygonMode

```java
public static void _polygonMode(int p_84517_, int p_84518_)
```

**Parameters:**

- `p_84517_` (`int`)
- `p_84518_` (`int`)

**Returns:** `public static void`

### _enablePolygonOffset

```java
public static void _enablePolygonOffset()
```

**Returns:** `public static void`

### _disablePolygonOffset

```java
public static void _disablePolygonOffset()
```

**Returns:** `public static void`

### _polygonOffset

```java
public static void _polygonOffset(float p_84137_, float p_84138_)
```

**Parameters:**

- `p_84137_` (`float`)
- `p_84138_` (`float`)

**Returns:** `public static void`

### _enableColorLogicOp

```java
public static void _enableColorLogicOp()
```

**Returns:** `public static void`

### _disableColorLogicOp

```java
public static void _disableColorLogicOp()
```

**Returns:** `public static void`

### _logicOp

```java
public static void _logicOp(int p_84533_)
```

**Parameters:**

- `p_84533_` (`int`)

**Returns:** `public static void`

### _activeTexture

```java
public static void _activeTexture(int p_84539_)
```

**Parameters:**

- `p_84539_` (`int`)

**Returns:** `public static void`

### glActiveTexture

```java
 glActiveTexture()
```

**Returns:** ``

### _texParameter

```java
public static void _texParameter(int p_84161_, int p_84162_, float p_84163_)
```

**Parameters:**

- `p_84161_` (`int`)
- `p_84162_` (`int`)
- `p_84163_` (`float`)

**Returns:** `public static void`

### _texParameter

```java
public static void _texParameter(int p_84332_, int p_84333_, int p_84334_)
```

**Parameters:**

- `p_84332_` (`int`)
- `p_84333_` (`int`)
- `p_84334_` (`int`)

**Returns:** `public static void`

### _getTexLevelParameter

```java
public static int _getTexLevelParameter(int p_84385_, int p_84386_, int p_84387_)
```

**Parameters:**

- `p_84385_` (`int`)
- `p_84386_` (`int`)
- `p_84387_` (`int`)

**Returns:** `public static int`

### _genTexture

```java
public static int _genTexture()
```

**Returns:** `public static int`

### _genTextures

```java
public static void _genTextures(int[] p_84306_)
```

**Parameters:**

- `p_84306_` (`int[]`)

**Returns:** `public static void`

### _deleteTexture

```java
public static void _deleteTexture(int p_84542_)
```

**Parameters:**

- `p_84542_` (`int`)

**Returns:** `public static void`

### _deleteTextures

```java
public static void _deleteTextures(int[] p_84366_)
```

**Parameters:**

- `p_84366_` (`int[]`)

**Returns:** `public static void`

### _bindTexture

```java
public static void _bindTexture(int p_84545_)
```

**Parameters:**

- `p_84545_` (`int`)

**Returns:** `public static void`

### _getActiveTexture

```java
public static int _getActiveTexture()
```

**Returns:** `public static int`

### _texImage2D

```java
public static void _texImage2D(int p_84210_, int p_84211_, int p_84212_, int p_84213_, int p_84214_, int p_84215_, int p_84216_, int p_84217_, IntBuffer p_84218_)
```

**Parameters:**

- `p_84210_` (`int`)
- `p_84211_` (`int`)
- `p_84212_` (`int`)
- `p_84213_` (`int`)
- `p_84214_` (`int`)
- `p_84215_` (`int`)
- `p_84216_` (`int`)
- `p_84217_` (`int`)
- `p_84218_` (`IntBuffer`)

**Returns:** `public static void`

### _texSubImage2D

```java
public static void _texSubImage2D(int p_84200_, int p_84201_, int p_84202_, int p_84203_, int p_84204_, int p_84205_, int p_84206_, int p_84207_, long p_84208_)
```

**Parameters:**

- `p_84200_` (`int`)
- `p_84201_` (`int`)
- `p_84202_` (`int`)
- `p_84203_` (`int`)
- `p_84204_` (`int`)
- `p_84205_` (`int`)
- `p_84206_` (`int`)
- `p_84207_` (`int`)
- `p_84208_` (`long`)

**Returns:** `public static void`

### upload

```java
public static void upload(int p_287776_, int p_287602_, int p_287633_, int p_287778_, int p_287752_, NativeImage.Format p_287608_, IntBuffer p_287753_, Consumer<IntBuffer> p_287739_)
```

**Parameters:**

- `p_287776_` (`int`)
- `p_287602_` (`int`)
- `p_287633_` (`int`)
- `p_287778_` (`int`)
- `p_287752_` (`int`)
- `p_287608_` (`NativeImage.Format`)
- `p_287753_` (`IntBuffer`)
- `p_287739_` (`Consumer<IntBuffer>`)

**Returns:** `public static void`

### _upload

```java
 _upload()
```

**Returns:** ``

### _upload

```java
private static void _upload(int p_287672_, int p_287577_, int p_287618_, int p_287777_, int p_287707_, NativeImage.Format p_287692_, IntBuffer p_287674_, Consumer<IntBuffer> p_287588_)
```

**Parameters:**

- `p_287672_` (`int`)
- `p_287577_` (`int`)
- `p_287618_` (`int`)
- `p_287777_` (`int`)
- `p_287707_` (`int`)
- `p_287692_` (`NativeImage.Format`)
- `p_287674_` (`IntBuffer`)
- `p_287588_` (`Consumer<IntBuffer>`)

**Returns:** `private static void`

### _pixelStore

```java
 _pixelStore()
```

**Returns:** ``

### _pixelStore

```java
 _pixelStore()
```

**Returns:** ``

### _pixelStore

```java
 _pixelStore()
```

**Returns:** ``

### _getTexImage

```java
public static void _getTexImage(int p_84228_, int p_84229_, int p_84230_, int p_84231_, long p_84232_)
```

**Parameters:**

- `p_84228_` (`int`)
- `p_84229_` (`int`)
- `p_84230_` (`int`)
- `p_84231_` (`int`)
- `p_84232_` (`long`)

**Returns:** `public static void`

### _viewport

```java
public static void _viewport(int p_84431_, int p_84432_, int p_84433_, int p_84434_)
```

**Parameters:**

- `p_84431_` (`int`)
- `p_84432_` (`int`)
- `p_84433_` (`int`)
- `p_84434_` (`int`)

**Returns:** `public static void`

### _colorMask

```java
public static void _colorMask(boolean p_84301_, boolean p_84302_, boolean p_84303_, boolean p_84304_)
```

**Parameters:**

- `p_84301_` (`boolean`)
- `p_84302_` (`boolean`)
- `p_84303_` (`boolean`)
- `p_84304_` (`boolean`)

**Returns:** `public static void`

### _stencilFunc

```java
public static void _stencilFunc(int p_84427_, int p_84428_, int p_84429_)
```

**Parameters:**

- `p_84427_` (`int`)
- `p_84428_` (`int`)
- `p_84429_` (`int`)

**Returns:** `public static void`

### _stencilMask

```java
public static void _stencilMask(int p_84551_)
```

**Parameters:**

- `p_84551_` (`int`)

**Returns:** `public static void`

### _stencilOp

```java
public static void _stencilOp(int p_84453_, int p_84454_, int p_84455_)
```

**Parameters:**

- `p_84453_` (`int`)
- `p_84454_` (`int`)
- `p_84455_` (`int`)

**Returns:** `public static void`

### _clearDepth

```java
public static void _clearDepth(double p_84122_)
```

**Parameters:**

- `p_84122_` (`double`)

**Returns:** `public static void`

### _clearColor

```java
public static void _clearColor(float p_84319_, float p_84320_, float p_84321_, float p_84322_)
```

**Parameters:**

- `p_84319_` (`float`)
- `p_84320_` (`float`)
- `p_84321_` (`float`)
- `p_84322_` (`float`)

**Returns:** `public static void`

### _clearStencil

```java
public static void _clearStencil(int p_84554_)
```

**Parameters:**

- `p_84554_` (`int`)

**Returns:** `public static void`

### _clear

```java
public static void _clear(int p_84267_, boolean p_84268_)
```

**Parameters:**

- `p_84267_` (`int`)
- `p_84268_` (`boolean`)

**Returns:** `public static void`

### _getError

```java
 _getError()
```

**Returns:** ``

### _glDrawPixels

```java
public static void _glDrawPixels(int p_157079_, int p_157080_, int p_157081_, int p_157082_, long p_157083_)
```

**Parameters:**

- `p_157079_` (`int`)
- `p_157080_` (`int`)
- `p_157081_` (`int`)
- `p_157082_` (`int`)
- `p_157083_` (`long`)

**Returns:** `public static void`

### _vertexAttribPointer

```java
public static void _vertexAttribPointer(int p_84239_, int p_84240_, int p_84241_, boolean p_84242_, int p_84243_, long p_84244_)
```

**Parameters:**

- `p_84239_` (`int`)
- `p_84240_` (`int`)
- `p_84241_` (`int`)
- `p_84242_` (`boolean`)
- `p_84243_` (`int`)
- `p_84244_` (`long`)

**Returns:** `public static void`

### _vertexAttribIPointer

```java
public static void _vertexAttribIPointer(int p_157109_, int p_157110_, int p_157111_, int p_157112_, long p_157113_)
```

**Parameters:**

- `p_157109_` (`int`)
- `p_157110_` (`int`)
- `p_157111_` (`int`)
- `p_157112_` (`int`)
- `p_157113_` (`long`)

**Returns:** `public static void`

### _enableVertexAttribArray

```java
public static void _enableVertexAttribArray(int p_84566_)
```

**Parameters:**

- `p_84566_` (`int`)

**Returns:** `public static void`

### _disableVertexAttribArray

```java
public static void _disableVertexAttribArray(int p_84087_)
```

**Parameters:**

- `p_84087_` (`int`)

**Returns:** `public static void`

### _drawElements

```java
public static void _drawElements(int p_157054_, int p_157055_, int p_157056_, long p_157057_)
```

**Parameters:**

- `p_157054_` (`int`)
- `p_157055_` (`int`)
- `p_157056_` (`int`)
- `p_157057_` (`long`)

**Returns:** `public static void`

### _pixelStore

```java
public static void _pixelStore(int p_84523_, int p_84524_)
```

**Parameters:**

- `p_84523_` (`int`)
- `p_84524_` (`int`)

**Returns:** `public static void`

### _readPixels

```java
public static void _readPixels(int p_84220_, int p_84221_, int p_84222_, int p_84223_, int p_84224_, int p_84225_, ByteBuffer p_84226_)
```

**Parameters:**

- `p_84220_` (`int`)
- `p_84221_` (`int`)
- `p_84222_` (`int`)
- `p_84223_` (`int`)
- `p_84224_` (`int`)
- `p_84225_` (`int`)
- `p_84226_` (`ByteBuffer`)

**Returns:** `public static void`

### _readPixels

```java
public static void _readPixels(int p_157101_, int p_157102_, int p_157103_, int p_157104_, int p_157105_, int p_157106_, long p_157107_)
```

**Parameters:**

- `p_157101_` (`int`)
- `p_157102_` (`int`)
- `p_157103_` (`int`)
- `p_157104_` (`int`)
- `p_157105_` (`int`)
- `p_157106_` (`int`)
- `p_157107_` (`long`)

**Returns:** `public static void`

### _getError

```java
public static int _getError()
```

**Returns:** `public static int`

### _getString

```java
public static String _getString(int p_84090_)
```

**Parameters:**

- `p_84090_` (`int`)

**Returns:** `public static String`

### _getInteger

```java
public static int _getInteger(int p_84093_)
```

**Parameters:**

- `p_84093_` (`int`)

**Returns:** `public static int`

### BooleanState

```java
public BooleanState(int p_84588_)
```

**Parameters:**

- `p_84588_` (`int`)

**Returns:** `public`

### disable

```java
public void disable()
```

**Returns:** `public void`

### enable

```java
public void enable()
```

**Returns:** `public void`

### setEnabled

```java
public void setEnabled(boolean p_84591_)
```

**Parameters:**

- `p_84591_` (`boolean`)

**Returns:** `public void`

### ZERO

```java
, ZERO()
```

**Returns:** `,`

### DestFactor

```java
private DestFactor(int p_84652_)
```

**Parameters:**

- `p_84652_` (`int`)

**Returns:** `private`

### XOR

```java
, XOR()
```

**Returns:** `,`

### LogicOp

```java
private LogicOp(int p_84721_)
```

**Parameters:**

- `p_84721_` (`int`)

**Returns:** `private`

### ZERO

```java
, ZERO()
```

**Returns:** `,`

### SourceFactor

```java
private SourceFactor(int p_84757_)
```

**Parameters:**

- `p_84757_` (`int`)

**Returns:** `private`

### x

```java
public static int x()
```

**Returns:** `public static int`

### y

```java
public static int y()
```

**Returns:** `public static int`

### width

```java
public static int width()
```

**Returns:** `public static int`

### height

```java
public static int height()
```

**Returns:** `public static int`

### _backupGlState

```java
public static void _backupGlState(net.neoforged.neoforge.client.GlStateBackup state)
```

**Parameters:**

- `state` (`net.neoforged.neoforge.client.GlStateBackup`)

**Returns:** `public static void`

### _restoreGlState

```java
public static void _restoreGlState(net.neoforged.neoforge.client.GlStateBackup state)
```

**Parameters:**

- `state` (`net.neoforged.neoforge.client.GlStateBackup`)

**Returns:** `public static void`

### _blendFuncSeparate

```java
 _blendFuncSeparate()
```

**Returns:** ``

### _depthMask

```java
 _depthMask()
```

**Returns:** ``

### _depthFunc

```java
 _depthFunc()
```

**Returns:** ``

### _polygonOffset

```java
 _polygonOffset()
```

**Returns:** ``

### _logicOp

```java
 _logicOp()
```

**Returns:** ``

### _stencilFunc

```java
 _stencilFunc()
```

**Returns:** ``

### _stencilMask

```java
 _stencilMask()
```

**Returns:** ``

### _stencilOp

```java
 _stencilOp()
```

**Returns:** ``

### _colorMask

```java
 _colorMask()
```

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DestFactor` | enum |  |
| `LogicOp` | enum |  |
| `SourceFactor` | enum |  |
| `Viewport` | enum |  |
