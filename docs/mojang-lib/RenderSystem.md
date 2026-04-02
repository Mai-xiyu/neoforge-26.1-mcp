# RenderSystem

**Package:** `com.mojang.blaze3d.systems`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@DontObfuscate`, `@OnlyIn(Dist.CLIENT)`

## Methods

### initRenderThread

```java
public static void initRenderThread()
```

**Returns:** `public static void`

### IllegalStateException

```java
throw new IllegalStateException("Could not initialize render thread")
```

**Parameters:**

- `thread"` (`"Could not initialize render`)

**Returns:** `throw new`

### isOnRenderThread

```java
public static boolean isOnRenderThread()
```

**Returns:** `public static boolean`

### isOnRenderThreadOrInit

```java
public static boolean isOnRenderThreadOrInit()
```

**Returns:** `public static boolean`

### assertOnRenderThreadOrInit

```java
public static void assertOnRenderThreadOrInit()
```

**Returns:** `public static void`

### constructThreadException

```java
throw constructThreadException()
```

**Returns:** `throw`

### assertOnRenderThread

```java
public static void assertOnRenderThread()
```

**Returns:** `public static void`

### constructThreadException

```java
throw constructThreadException()
```

**Returns:** `throw`

### constructThreadException

```java
private static IllegalStateException constructThreadException()
```

**Returns:** `private static IllegalStateException`

### IllegalStateException

```java
return new IllegalStateException("Rendersystem called from wrong thread")
```

**Parameters:**

- `thread"` (`"Rendersystem called from wrong`)

**Returns:** `return new`

### recordRenderCall

```java
public static void recordRenderCall(RenderCall p_69880_)
```

**Parameters:**

- `p_69880_` (`RenderCall`)

**Returns:** `public static void`

### pollEvents

```java
private static void pollEvents()
```

**Returns:** `private static void`

### isFrozenAtPollEvents

```java
public static boolean isFrozenAtPollEvents()
```

**Returns:** `public static boolean`

### flipFrame

```java
public static void flipFrame(long p_69496_)
```

**Parameters:**

- `p_69496_` (`long`)

**Returns:** `public static void`

### pollEvents

```java
 pollEvents()
```

**Returns:** ``

### replayQueue

```java
 replayQueue()
```

**Returns:** ``

### pollEvents

```java
 pollEvents()
```

**Returns:** ``

### replayQueue

```java
public static void replayQueue()
```

**Returns:** `public static void`

### limitDisplayFPS

```java
public static void limitDisplayFPS(int p_69831_)
```

**Parameters:**

- `p_69831_` (`int`)

**Returns:** `public static void`

### disableDepthTest

```java
public static void disableDepthTest()
```

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### enableDepthTest

```java
public static void enableDepthTest()
```

**Returns:** `public static void`

### enableScissor

```java
public static void enableScissor(int p_69489_, int p_69490_, int p_69491_, int p_69492_)
```

**Parameters:**

- `p_69489_` (`int`)
- `p_69490_` (`int`)
- `p_69491_` (`int`)
- `p_69492_` (`int`)

**Returns:** `public static void`

### disableScissor

```java
public static void disableScissor()
```

**Returns:** `public static void`

### depthFunc

```java
public static void depthFunc(int p_69457_)
```

**Parameters:**

- `p_69457_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### depthMask

```java
public static void depthMask(boolean p_69459_)
```

**Parameters:**

- `p_69459_` (`boolean`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### enableBlend

```java
public static void enableBlend()
```

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### disableBlend

```java
public static void disableBlend()
```

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### blendFunc

```java
public static void blendFunc(GlStateManager.SourceFactor p_69409_, GlStateManager.DestFactor p_69410_)
```

**Parameters:**

- `p_69409_` (`GlStateManager.SourceFactor`)
- `p_69410_` (`GlStateManager.DestFactor`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### blendFunc

```java
public static void blendFunc(int p_69406_, int p_69407_)
```

**Parameters:**

- `p_69406_` (`int`)
- `p_69407_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### blendFuncSeparate

```java
public static void blendFuncSeparate(GlStateManager.SourceFactor p_69417_, GlStateManager.DestFactor p_69418_, GlStateManager.SourceFactor p_69419_, GlStateManager.DestFactor p_69420_)
```

**Parameters:**

- `p_69417_` (`GlStateManager.SourceFactor`)
- `p_69418_` (`GlStateManager.DestFactor`)
- `p_69419_` (`GlStateManager.SourceFactor`)
- `p_69420_` (`GlStateManager.DestFactor`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### blendFuncSeparate

```java
public static void blendFuncSeparate(int p_69412_, int p_69413_, int p_69414_, int p_69415_)
```

**Parameters:**

- `p_69412_` (`int`)
- `p_69413_` (`int`)
- `p_69414_` (`int`)
- `p_69415_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### blendEquation

```java
public static void blendEquation(int p_69404_)
```

**Parameters:**

- `p_69404_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### enableCull

```java
public static void enableCull()
```

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### disableCull

```java
public static void disableCull()
```

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### polygonMode

```java
public static void polygonMode(int p_69861_, int p_69862_)
```

**Parameters:**

- `p_69861_` (`int`)
- `p_69862_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### enablePolygonOffset

```java
public static void enablePolygonOffset()
```

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### disablePolygonOffset

```java
public static void disablePolygonOffset()
```

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### polygonOffset

```java
public static void polygonOffset(float p_69864_, float p_69865_)
```

**Parameters:**

- `p_69864_` (`float`)
- `p_69865_` (`float`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### enableColorLogicOp

```java
public static void enableColorLogicOp()
```

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### disableColorLogicOp

```java
public static void disableColorLogicOp()
```

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### logicOp

```java
public static void logicOp(GlStateManager.LogicOp p_69836_)
```

**Parameters:**

- `p_69836_` (`GlStateManager.LogicOp`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### activeTexture

```java
public static void activeTexture(int p_69389_)
```

**Parameters:**

- `p_69389_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### texParameter

```java
public static void texParameter(int p_69938_, int p_69939_, int p_69940_)
```

**Parameters:**

- `p_69938_` (`int`)
- `p_69939_` (`int`)
- `p_69940_` (`int`)

**Returns:** `public static void`

### deleteTexture

```java
public static void deleteTexture(int p_69455_)
```

**Parameters:**

- `p_69455_` (`int`)

**Returns:** `public static void`

### bindTextureForSetup

```java
public static void bindTextureForSetup(int p_157185_)
```

**Parameters:**

- `p_157185_` (`int`)

**Returns:** `public static void`

### bindTexture

```java
 bindTexture()
```

**Returns:** ``

### bindTexture

```java
public static void bindTexture(int p_69397_)
```

**Parameters:**

- `p_69397_` (`int`)

**Returns:** `public static void`

### viewport

```java
public static void viewport(int p_69950_, int p_69951_, int p_69952_, int p_69953_)
```

**Parameters:**

- `p_69950_` (`int`)
- `p_69951_` (`int`)
- `p_69952_` (`int`)
- `p_69953_` (`int`)

**Returns:** `public static void`

### colorMask

```java
public static void colorMask(boolean p_69445_, boolean p_69446_, boolean p_69447_, boolean p_69448_)
```

**Parameters:**

- `p_69445_` (`boolean`)
- `p_69446_` (`boolean`)
- `p_69447_` (`boolean`)
- `p_69448_` (`boolean`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### stencilFunc

```java
public static void stencilFunc(int p_69926_, int p_69927_, int p_69928_)
```

**Parameters:**

- `p_69926_` (`int`)
- `p_69927_` (`int`)
- `p_69928_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### stencilMask

```java
public static void stencilMask(int p_69930_)
```

**Parameters:**

- `p_69930_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### stencilOp

```java
public static void stencilOp(int p_69932_, int p_69933_, int p_69934_)
```

**Parameters:**

- `p_69932_` (`int`)
- `p_69933_` (`int`)
- `p_69934_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### clearDepth

```java
public static void clearDepth(double p_69431_)
```

**Parameters:**

- `p_69431_` (`double`)

**Returns:** `public static void`

### clearColor

```java
public static void clearColor(float p_69425_, float p_69426_, float p_69427_, float p_69428_)
```

**Parameters:**

- `p_69425_` (`float`)
- `p_69426_` (`float`)
- `p_69427_` (`float`)
- `p_69428_` (`float`)

**Returns:** `public static void`

### clearStencil

```java
public static void clearStencil(int p_69433_)
```

**Parameters:**

- `p_69433_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### clear

```java
public static void clear(int p_69422_, boolean p_69423_)
```

**Parameters:**

- `p_69422_` (`int`)
- `p_69423_` (`boolean`)

**Returns:** `public static void`

### setShaderFogStart

```java
public static void setShaderFogStart(float p_157446_)
```

**Parameters:**

- `p_157446_` (`float`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### getShaderFogStart

```java
public static float getShaderFogStart()
```

**Returns:** `public static float`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderGlintAlpha

```java
public static void setShaderGlintAlpha(double p_268332_)
```

**Parameters:**

- `p_268332_` (`double`)

**Returns:** `public static void`

### setShaderGlintAlpha

```java
public static void setShaderGlintAlpha(float p_268329_)
```

**Parameters:**

- `p_268329_` (`float`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### getShaderGlintAlpha

```java
public static float getShaderGlintAlpha()
```

**Returns:** `public static float`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderFogEnd

```java
public static void setShaderFogEnd(float p_157444_)
```

**Parameters:**

- `p_157444_` (`float`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### getShaderFogEnd

```java
public static float getShaderFogEnd()
```

**Returns:** `public static float`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderFogColor

```java
public static void setShaderFogColor(float p_157439_, float p_157440_, float p_157441_, float p_157442_)
```

**Parameters:**

- `p_157439_` (`float`)
- `p_157440_` (`float`)
- `p_157441_` (`float`)
- `p_157442_` (`float`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderFogColor

```java
public static void setShaderFogColor(float p_157435_, float p_157436_, float p_157437_)
```

**Parameters:**

- `p_157435_` (`float`)
- `p_157436_` (`float`)
- `p_157437_` (`float`)

**Returns:** `public static void`

### setShaderFogColor

```java
 setShaderFogColor()
```

**Returns:** ``

### getShaderFogColor

```java
public static float[] getShaderFogColor()
```

**Returns:** `public static float[]`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderFogShape

```java
public static void setShaderFogShape(FogShape p_202161_)
```

**Parameters:**

- `p_202161_` (`FogShape`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### getShaderFogShape

```java
public static FogShape getShaderFogShape()
```

**Returns:** `public static FogShape`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderLights

```java
public static void setShaderLights(Vector3f p_254155_, Vector3f p_254006_)
```

**Parameters:**

- `p_254155_` (`Vector3f`)
- `p_254006_` (`Vector3f`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setupShaderLights

```java
public static void setupShaderLights(ShaderInstance p_157462_)
```

**Parameters:**

- `p_157462_` (`ShaderInstance`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderColor

```java
public static void setShaderColor(float p_157430_, float p_157431_, float p_157432_, float p_157433_)
```

**Parameters:**

- `p_157430_` (`float`)
- `p_157431_` (`float`)
- `p_157432_` (`float`)
- `p_157433_` (`float`)

**Returns:** `public static void`

### _setShaderColor

```java
 _setShaderColor()
```

**Returns:** ``

### _setShaderColor

```java
private static void _setShaderColor(float p_157160_, float p_157161_, float p_157162_, float p_157163_)
```

**Parameters:**

- `p_157160_` (`float`)
- `p_157161_` (`float`)
- `p_157162_` (`float`)
- `p_157163_` (`float`)

**Returns:** `private static void`

### getShaderColor

```java
public static float[] getShaderColor()
```

**Returns:** `public static float[]`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### drawElements

```java
public static void drawElements(int p_157187_, int p_157188_, int p_157189_)
```

**Parameters:**

- `p_157187_` (`int`)
- `p_157188_` (`int`)
- `p_157189_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### lineWidth

```java
public static void lineWidth(float p_69833_)
```

**Parameters:**

- `p_69833_` (`float`)

**Returns:** `public static void`

### getShaderLineWidth

```java
public static float getShaderLineWidth()
```

**Returns:** `public static float`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### pixelStore

```java
public static void pixelStore(int p_69855_, int p_69856_)
```

**Parameters:**

- `p_69855_` (`int`)
- `p_69856_` (`int`)

**Returns:** `public static void`

### readPixels

```java
public static void readPixels(int p_69872_, int p_69873_, int p_69874_, int p_69875_, int p_69876_, int p_69877_, ByteBuffer p_69878_)
```

**Parameters:**

- `p_69872_` (`int`)
- `p_69873_` (`int`)
- `p_69874_` (`int`)
- `p_69875_` (`int`)
- `p_69876_` (`int`)
- `p_69877_` (`int`)
- `p_69878_` (`ByteBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### getString

```java
public static void getString(int p_69520_, Consumer<String> p_69521_)
```

**Parameters:**

- `p_69520_` (`int`)
- `p_69521_` (`Consumer<String>`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### getBackendDescription

```java
public static String getBackendDescription()
```

**Returns:** `public static String`

### getApiDescription

```java
public static String getApiDescription()
```

**Returns:** `public static String`

### initBackendSystem

```java
public static TimeSource.NanoTimeSource initBackendSystem()
```

**Returns:** `public static TimeSource.NanoTimeSource`

### initRenderer

```java
public static void initRenderer(int p_69581_, boolean p_69582_)
```

**Parameters:**

- `p_69581_` (`int`)
- `p_69582_` (`boolean`)

**Returns:** `public static void`

### setErrorCallback

```java
public static void setErrorCallback(GLFWErrorCallbackI p_69901_)
```

**Parameters:**

- `p_69901_` (`GLFWErrorCallbackI`)

**Returns:** `public static void`

### renderCrosshair

```java
public static void renderCrosshair(int p_69882_)
```

**Parameters:**

- `p_69882_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### getCapsString

```java
public static String getCapsString()
```

**Returns:** `public static String`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setupDefaultState

```java
public static void setupDefaultState(int p_69903_, int p_69904_, int p_69905_, int p_69906_)
```

**Parameters:**

- `p_69903_` (`int`)
- `p_69904_` (`int`)
- `p_69905_` (`int`)
- `p_69906_` (`int`)

**Returns:** `public static void`

### maxSupportedTextureSize

```java
public static int maxSupportedTextureSize()
```

**Returns:** `public static int`

### assertOnRenderThreadOrInit

```java
 assertOnRenderThreadOrInit()
```

**Returns:** ``

### glBindBuffer

```java
public static void glBindBuffer(int p_157209_, int p_348585_)
```

**Parameters:**

- `p_157209_` (`int`)
- `p_348585_` (`int`)

**Returns:** `public static void`

### glBindVertexArray

```java
public static void glBindVertexArray(int p_348578_)
```

**Parameters:**

- `p_348578_` (`int`)

**Returns:** `public static void`

### glBufferData

```java
public static void glBufferData(int p_69526_, ByteBuffer p_69527_, int p_69528_)
```

**Parameters:**

- `p_69526_` (`int`)
- `p_69527_` (`ByteBuffer`)
- `p_69528_` (`int`)

**Returns:** `public static void`

### assertOnRenderThreadOrInit

```java
 assertOnRenderThreadOrInit()
```

**Returns:** ``

### glDeleteBuffers

```java
public static void glDeleteBuffers(int p_69530_)
```

**Parameters:**

- `p_69530_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glDeleteVertexArrays

```java
public static void glDeleteVertexArrays(int p_157214_)
```

**Parameters:**

- `p_157214_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniform1i

```java
public static void glUniform1i(int p_69544_, int p_69545_)
```

**Parameters:**

- `p_69544_` (`int`)
- `p_69545_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniform1

```java
public static void glUniform1(int p_69541_, IntBuffer p_69542_)
```

**Parameters:**

- `p_69541_` (`int`)
- `p_69542_` (`IntBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniform2

```java
public static void glUniform2(int p_69550_, IntBuffer p_69551_)
```

**Parameters:**

- `p_69550_` (`int`)
- `p_69551_` (`IntBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniform3

```java
public static void glUniform3(int p_69556_, IntBuffer p_69557_)
```

**Parameters:**

- `p_69556_` (`int`)
- `p_69557_` (`IntBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniform4

```java
public static void glUniform4(int p_69562_, IntBuffer p_69563_)
```

**Parameters:**

- `p_69562_` (`int`)
- `p_69563_` (`IntBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniform1

```java
public static void glUniform1(int p_69538_, FloatBuffer p_69539_)
```

**Parameters:**

- `p_69538_` (`int`)
- `p_69539_` (`FloatBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniform2

```java
public static void glUniform2(int p_69547_, FloatBuffer p_69548_)
```

**Parameters:**

- `p_69547_` (`int`)
- `p_69548_` (`FloatBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniform3

```java
public static void glUniform3(int p_69553_, FloatBuffer p_69554_)
```

**Parameters:**

- `p_69553_` (`int`)
- `p_69554_` (`FloatBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniform4

```java
public static void glUniform4(int p_69559_, FloatBuffer p_69560_)
```

**Parameters:**

- `p_69559_` (`int`)
- `p_69560_` (`FloatBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniformMatrix2

```java
public static void glUniformMatrix2(int p_69565_, boolean p_69566_, FloatBuffer p_69567_)
```

**Parameters:**

- `p_69565_` (`int`)
- `p_69566_` (`boolean`)
- `p_69567_` (`FloatBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniformMatrix3

```java
public static void glUniformMatrix3(int p_69569_, boolean p_69570_, FloatBuffer p_69571_)
```

**Parameters:**

- `p_69569_` (`int`)
- `p_69570_` (`boolean`)
- `p_69571_` (`FloatBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### glUniformMatrix4

```java
public static void glUniformMatrix4(int p_69573_, boolean p_69574_, FloatBuffer p_69575_)
```

**Parameters:**

- `p_69573_` (`int`)
- `p_69574_` (`boolean`)
- `p_69575_` (`FloatBuffer`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setupOverlayColor

```java
public static void setupOverlayColor(int p_69922_, int p_348499_)
```

**Parameters:**

- `p_69922_` (`int`)
- `p_348499_` (`int`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderTexture

```java
 setShaderTexture()
```

**Returns:** ``

### teardownOverlayColor

```java
public static void teardownOverlayColor()
```

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderTexture

```java
 setShaderTexture()
```

**Returns:** ``

### setupLevelDiffuseLighting

```java
public static void setupLevelDiffuseLighting(Vector3f p_254489_, Vector3f p_254541_)
```

**Parameters:**

- `p_254489_` (`Vector3f`)
- `p_254541_` (`Vector3f`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderLights

```java
 setShaderLights()
```

**Returns:** ``

### setupGuiFlatDiffuseLighting

```java
public static void setupGuiFlatDiffuseLighting(Vector3f p_254419_, Vector3f p_254483_)
```

**Parameters:**

- `p_254419_` (`Vector3f`)
- `p_254483_` (`Vector3f`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setupGui3DDiffuseLighting

```java
public static void setupGui3DDiffuseLighting(Vector3f p_253859_, Vector3f p_253890_)
```

**Parameters:**

- `p_253859_` (`Vector3f`)
- `p_253890_` (`Vector3f`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### beginInitialization

```java
public static void beginInitialization()
```

**Returns:** `public static void`

### finishInitialization

```java
public static void finishInitialization()
```

**Returns:** `public static void`

### replayQueue

```java
 replayQueue()
```

**Returns:** ``

### IllegalStateException

```java
throw new IllegalStateException("Recorded to render queue during initialization")
```

**Parameters:**

- `initialization"` (`"Recorded to render queue during`)

**Returns:** `throw new`

### glGenBuffers

```java
public static void glGenBuffers(Consumer<Integer> p_69532_)
```

**Parameters:**

- `p_69532_` (`Consumer<Integer>`)

**Returns:** `public static void`

### glGenVertexArrays

```java
public static void glGenVertexArrays(Consumer<Integer> p_157216_)
```

**Parameters:**

- `p_157216_` (`Consumer<Integer>`)

**Returns:** `public static void`

### renderThreadTesselator

```java
public static Tesselator renderThreadTesselator()
```

**Returns:** `public static Tesselator`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### defaultBlendFunc

```java
public static void defaultBlendFunc()
```

**Returns:** `public static void`

### blendFuncSeparate

```java
 blendFuncSeparate()
```

**Returns:** ``

### runAsFancy

```java
public static void runAsFancy(Runnable p_69891_)
```

**Parameters:**

- `p_69891_` (`Runnable`)

### setShader

```java
public static void setShader(Supplier<ShaderInstance> p_157428_)
```

**Parameters:**

- `p_157428_` (`Supplier<ShaderInstance>`)

**Returns:** `public static void`

### getShader

```java
public static ShaderInstance getShader()
```

**Returns:** `ShaderInstance`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderTexture

```java
public static void setShaderTexture(int p_157457_, ResourceLocation p_157458_)
```

**Parameters:**

- `p_157457_` (`int`)
- `p_157458_` (`ResourceLocation`)

**Returns:** `public static void`

### _setShaderTexture

```java
 _setShaderTexture()
```

**Returns:** ``

### _setShaderTexture

```java
public static void _setShaderTexture(int p_157180_, ResourceLocation p_157181_)
```

**Parameters:**

- `p_157180_` (`int`)
- `p_157181_` (`ResourceLocation`)

**Returns:** `public static void`

### setShaderTexture

```java
public static void setShaderTexture(int p_157454_, int p_157455_)
```

**Parameters:**

- `p_157454_` (`int`)
- `p_157455_` (`int`)

**Returns:** `public static void`

### _setShaderTexture

```java
 _setShaderTexture()
```

**Returns:** ``

### _setShaderTexture

```java
public static void _setShaderTexture(int p_157177_, int p_157178_)
```

**Parameters:**

- `p_157177_` (`int`)
- `p_157178_` (`int`)

**Returns:** `public static void`

### getShaderTexture

```java
public static int getShaderTexture(int p_157204_)
```

**Parameters:**

- `p_157204_` (`int`)

**Returns:** `public static int`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setProjectionMatrix

```java
public static void setProjectionMatrix(Matrix4f p_277884_, VertexSorting p_277702_)
```

**Parameters:**

- `p_277884_` (`Matrix4f`)
- `p_277702_` (`VertexSorting`)

**Returns:** `public static void`

### setTextureMatrix

```java
public static void setTextureMatrix(Matrix4f p_254081_)
```

**Parameters:**

- `p_254081_` (`Matrix4f`)

**Returns:** `public static void`

### resetTextureMatrix

```java
public static void resetTextureMatrix()
```

**Returns:** `public static void`

### applyModelViewMatrix

```java
public static void applyModelViewMatrix()
```

**Returns:** `public static void`

### backupProjectionMatrix

```java
public static void backupProjectionMatrix()
```

**Returns:** `public static void`

### _backupProjectionMatrix

```java
 _backupProjectionMatrix()
```

**Returns:** ``

### _backupProjectionMatrix

```java
private static void _backupProjectionMatrix()
```

**Returns:** `private static void`

### restoreProjectionMatrix

```java
public static void restoreProjectionMatrix()
```

**Returns:** `public static void`

### _restoreProjectionMatrix

```java
 _restoreProjectionMatrix()
```

**Returns:** ``

### _restoreProjectionMatrix

```java
private static void _restoreProjectionMatrix()
```

**Returns:** `private static void`

### getProjectionMatrix

```java
public static Matrix4f getProjectionMatrix()
```

**Returns:** `public static Matrix4f`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### getModelViewMatrix

```java
public static Matrix4f getModelViewMatrix()
```

**Returns:** `public static Matrix4f`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### getModelViewStack

```java
public static Matrix4fStack getModelViewStack()
```

**Returns:** `public static Matrix4fStack`

### getTextureMatrix

```java
public static Matrix4f getTextureMatrix()
```

**Returns:** `public static Matrix4f`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### getSequentialBuffer

```java
public static RenderSystem.AutoStorageIndexBuffer getSequentialBuffer(VertexFormat.Mode p_221942_)
```

**Parameters:**

- `p_221942_` (`VertexFormat.Mode`)

**Returns:** `public static RenderSystem.AutoStorageIndexBuffer`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### setShaderGameTime

```java
public static void setShaderGameTime(long p_157448_, float p_157449_)
```

**Parameters:**

- `p_157448_` (`long`)
- `p_157449_` (`float`)

**Returns:** `public static void`

### getShaderGameTime

```java
public static float getShaderGameTime()
```

**Returns:** `public static float`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### getVertexSorting

```java
public static VertexSorting getVertexSorting()
```

**Returns:** `public static VertexSorting`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### AutoStorageIndexBuffer

```java
 AutoStorageIndexBuffer(int p_157472_, int p_157473_, RenderSystem.AutoStorageIndexBuffer.IndexGenerator p_157474_)
```

**Parameters:**

- `p_157472_` (`int`)
- `p_157473_` (`int`)
- `p_157474_` (`RenderSystem.AutoStorageIndexBuffer.IndexGenerator`)

**Returns:** ``

### hasStorage

```java
public boolean hasStorage(int p_221945_)
```

**Parameters:**

- `p_221945_` (`int`)

**Returns:** `public boolean`

### bind

```java
public void bind(int p_221947_)
```

**Parameters:**

- `p_221947_` (`int`)

**Returns:** `public void`

### ensureStorage

```java
private void ensureStorage(int p_157477_)
```

**Parameters:**

- `p_157477_` (`int`)

**Returns:** `private void`

### RuntimeException

```java
throw new RuntimeException("Failed to map GL buffer")
```

**Parameters:**

- `buffer"` (`"Failed to map GL`)

**Returns:** `throw new`

### intConsumer

```java
private it.unimi.dsi.fastutil.ints.IntConsumer intConsumer(ByteBuffer p_157479_)
```

**Parameters:**

- `p_157479_` (`ByteBuffer`)

**Returns:** `private it.unimi.dsi.fastutil.ints.IntConsumer`

### type

```java
public VertexFormat.IndexType type()
```

**Returns:** `public VertexFormat.IndexType`

### accept

```java
void accept(it.unimi.dsi.fastutil.ints.IntConsumer p_157488_, int p_157489_)
```

**Parameters:**

- `p_157488_` (`it.unimi.dsi.fastutil.ints.IntConsumer`)
- `p_157489_` (`int`)

### backupGlState

```java
public static void backupGlState(net.neoforged.neoforge.client.GlStateBackup state)
```

**Parameters:**

- `state` (`net.neoforged.neoforge.client.GlStateBackup`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

### restoreGlState

```java
public static void restoreGlState(net.neoforged.neoforge.client.GlStateBackup state)
```

**Parameters:**

- `state` (`net.neoforged.neoforge.client.GlStateBackup`)

**Returns:** `public static void`

### assertOnRenderThread

```java
 assertOnRenderThread()
```

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `AutoStorageIndexBuffer` | class |  |
