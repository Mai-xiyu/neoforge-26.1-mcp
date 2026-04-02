# GameRenderer

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_BLUR_RADIUS` | `int` |  |
| `PROJECTION_Z_NEAR` | `float` |  |
| `itemInHandRenderer` | `ItemInHandRenderer` |  |
| `ITEM_ACTIVATION_ANIMATION_LENGTH` | `int` |  |

## Methods

### GameRenderer

```java
public GameRenderer(Minecraft p_234219_, ItemInHandRenderer p_234220_, ResourceManager p_234221_, RenderBuffers p_234222_)
```

**Parameters:**

- `p_234219_` (`Minecraft`)
- `p_234220_` (`ItemInHandRenderer`)
- `p_234221_` (`ResourceManager`)
- `p_234222_` (`RenderBuffers`)

**Returns:** `public`

### close

```java
public void close()
```

### setRenderHand

```java
public void setRenderHand(boolean p_172737_)
```

**Parameters:**

- `p_172737_` (`boolean`)

**Returns:** `public void`

### setRenderBlockOutline

```java
public void setRenderBlockOutline(boolean p_172776_)
```

**Parameters:**

- `p_172776_` (`boolean`)

**Returns:** `public void`

### setPanoramicMode

```java
public void setPanoramicMode(boolean p_172780_)
```

**Parameters:**

- `p_172780_` (`boolean`)

**Returns:** `public void`

### isPanoramicMode

```java
public boolean isPanoramicMode()
```

**Returns:** `public boolean`

### shutdownEffect

```java
public void shutdownEffect()
```

**Returns:** `public void`

### togglePostEffect

```java
public void togglePostEffect()
```

**Returns:** `public void`

### checkEntityPostEffect

```java
public void checkEntityPostEffect(Entity p_109107_)
```

**Parameters:**

- `p_109107_` (`Entity`)

**Returns:** `public void`

### loadEffect

```java
public void loadEffect(ResourceLocation p_109129_)
```

**Parameters:**

- `p_109129_` (`ResourceLocation`)

**Returns:** `public void`

### loadBlurEffect

```java
private void loadBlurEffect(ResourceProvider p_341650_)
```

**Parameters:**

- `p_341650_` (`ResourceProvider`)

**Returns:** `private void`

### processBlurEffect

```java
public void processBlurEffect(float p_331160_)
```

**Parameters:**

- `p_331160_` (`float`)

**Returns:** `public void`

### createReloadListener

```java
public PreparableReloadListener createReloadListener()
```

**Returns:** `public PreparableReloadListener`

### prepare

```java
protected GameRenderer.ResourceCache prepare(ResourceManager p_251213_, ProfilerFiller p_251006_)
```

**Parameters:**

- `p_251213_` (`ResourceManager`)
- `p_251006_` (`ProfilerFiller`)

**Returns:** `protected GameRenderer.ResourceCache`

### apply

```java
protected void apply(GameRenderer.ResourceCache p_251168_, ResourceManager p_248902_, ProfilerFiller p_251909_)
```

**Parameters:**

- `p_251168_` (`GameRenderer.ResourceCache`)
- `p_248902_` (`ResourceManager`)
- `p_251909_` (`ProfilerFiller`)

**Returns:** `protected void`

### getName

```java
public String getName()
```

**Returns:** `String`

### preloadUiShader

```java
public void preloadUiShader(ResourceProvider p_172723_)
```

**Parameters:**

- `p_172723_` (`ResourceProvider`)

**Returns:** `public void`

### RuntimeException

```java
throw new RuntimeException("Blit shader already preloaded")
```

**Parameters:**

- `preloaded"` (`"Blit shader already`)

**Returns:** `throw new`

### RuntimeException

```java
throw new RuntimeException("could not preload blit shader")
```

**Parameters:**

- `shader"` (`"could not preload blit`)

**Returns:** `throw new`

### preloadShader

```java
private ShaderInstance preloadShader(ResourceProvider p_172725_, String p_172726_, VertexFormat p_172727_)
```

**Parameters:**

- `p_172725_` (`ResourceProvider`)
- `p_172726_` (`String`)
- `p_172727_` (`VertexFormat`)

**Returns:** `private ShaderInstance`

### IllegalStateException

```java
throw new IllegalStateException("could not preload shader " + p_172726_)
```

**Parameters:**

- `p_172726_` (`"could not preload shader " +`)

**Returns:** `throw new`

### reloadShaders

```java
void reloadShaders(ResourceProvider p_250719_)
```

**Parameters:**

- `p_250719_` (`ResourceProvider`)

### RuntimeException

```java
throw new RuntimeException("could not reload shaders")
```

**Parameters:**

- `shaders"` (`"could not reload`)

**Returns:** `throw new`

### shutdownShaders

```java
private void shutdownShaders()
```

**Returns:** `private void`

### getShader

```java
public ShaderInstance getShader(String p_172735_)
```

**Parameters:**

- `p_172735_` (`String`)

**Returns:** `ShaderInstance`

### tick

```java
public void tick()
```

**Returns:** `public void`

### currentEffect

```java
public PostChain currentEffect()
```

**Returns:** `PostChain`

### resize

```java
public void resize(int p_109098_, int p_109099_)
```

**Parameters:**

- `p_109098_` (`int`)
- `p_109099_` (`int`)

**Returns:** `public void`

### pick

```java
public void pick(float p_109088_)
```

**Parameters:**

- `p_109088_` (`float`)

**Returns:** `public void`

### pick

```java
private HitResult pick(Entity p_320077_, double p_320517_, double p_320380_, float p_319901_)
```

**Parameters:**

- `p_320077_` (`Entity`)
- `p_320517_` (`double`)
- `p_320380_` (`double`)
- `p_319901_` (`float`)

**Returns:** `private HitResult`

### filterHitResult

```java
private static HitResult filterHitResult(HitResult p_319875_, Vec3 p_320631_, double p_319892_)
```

**Parameters:**

- `p_319875_` (`HitResult`)
- `p_320631_` (`Vec3`)
- `p_319892_` (`double`)

**Returns:** `private static HitResult`

### tickFov

```java
private void tickFov()
```

**Returns:** `private void`

### getFov

```java
private double getFov(Camera p_109142_, float p_109143_, boolean p_109144_)
```

**Parameters:**

- `p_109142_` (`Camera`)
- `p_109143_` (`float`)
- `p_109144_` (`boolean`)

**Returns:** `private double`

### bobHurt

```java
private void bobHurt(PoseStack p_109118_, float p_109119_)
```

**Parameters:**

- `p_109118_` (`PoseStack`)
- `p_109119_` (`float`)

**Returns:** `private void`

### bobView

```java
private void bobView(PoseStack p_109139_, float p_109140_)
```

**Parameters:**

- `p_109139_` (`PoseStack`)
- `p_109140_` (`float`)

**Returns:** `private void`

### renderZoomed

```java
public void renderZoomed(float p_172719_, float p_172720_, float p_172721_)
```

**Parameters:**

- `p_172719_` (`float`)
- `p_172720_` (`float`)
- `p_172721_` (`float`)

**Returns:** `public void`

### renderItemInHand

```java
private void renderItemInHand(Camera p_109122_, float p_109123_, Matrix4f p_333953_)
```

**Parameters:**

- `p_109122_` (`Camera`)
- `p_109123_` (`float`)
- `p_333953_` (`Matrix4f`)

**Returns:** `private void`

### resetProjectionMatrix

```java
public void resetProjectionMatrix(Matrix4f p_253668_)
```

**Parameters:**

- `p_253668_` (`Matrix4f`)

**Returns:** `public void`

### getProjectionMatrix

```java
public Matrix4f getProjectionMatrix(double p_254507_)
```

**Parameters:**

- `p_254507_` (`double`)

**Returns:** `public Matrix4f`

### getDepthFar

```java
public float getDepthFar()
```

**Returns:** `public float`

### getNightVisionScale

```java
public static float getNightVisionScale(LivingEntity p_109109_, float p_109110_)
```

**Parameters:**

- `p_109109_` (`LivingEntity`)
- `p_109110_` (`float`)

**Returns:** `public static float`

### render

```java
public void render(DeltaTracker p_348648_, boolean p_109096_)
```

**Parameters:**

- `p_348648_` (`DeltaTracker`)
- `p_109096_` (`boolean`)

**Returns:** `public void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### tryTakeScreenshotIfNeeded

```java
private void tryTakeScreenshotIfNeeded()
```

**Returns:** `private void`

### takeAutoScreenshot

```java
private void takeAutoScreenshot(Path p_182643_)
```

**Parameters:**

- `p_182643_` (`Path`)

**Returns:** `private void`

### shouldRenderBlockOutline

```java
private boolean shouldRenderBlockOutline()
```

**Returns:** `private boolean`

### renderLevel

```java
public void renderLevel(DeltaTracker p_348589_)
```

**Parameters:**

- `p_348589_` (`DeltaTracker`)

**Returns:** `public void`

### resetData

```java
public void resetData()
```

**Returns:** `public void`

### getMapRenderer

```java
public MapRenderer getMapRenderer()
```

**Returns:** `public MapRenderer`

### displayItemActivation

```java
public void displayItemActivation(ItemStack p_109114_)
```

**Parameters:**

- `p_109114_` (`ItemStack`)

**Returns:** `public void`

### renderItemActivationAnimation

```java
private void renderItemActivationAnimation(GuiGraphics p_350868_, float p_109103_)
```

**Parameters:**

- `p_350868_` (`GuiGraphics`)
- `p_109103_` (`float`)

**Returns:** `private void`

### renderConfusionOverlay

```java
private void renderConfusionOverlay(GuiGraphics p_282460_, float p_282656_)
```

**Parameters:**

- `p_282460_` (`GuiGraphics`)
- `p_282656_` (`float`)

**Returns:** `private void`

### getMinecraft

```java
public Minecraft getMinecraft()
```

**Returns:** `public Minecraft`

### getDarkenWorldAmount

```java
public float getDarkenWorldAmount(float p_109132_)
```

**Parameters:**

- `p_109132_` (`float`)

**Returns:** `public float`

### getRenderDistance

```java
public float getRenderDistance()
```

**Returns:** `public float`

### getMainCamera

```java
public Camera getMainCamera()
```

**Returns:** `public Camera`

### lightTexture

```java
public LightTexture lightTexture()
```

**Returns:** `public LightTexture`

### overlayTexture

```java
public OverlayTexture overlayTexture()
```

**Returns:** `public OverlayTexture`

### getPositionShader

```java
public static ShaderInstance getPositionShader()
```

**Returns:** `ShaderInstance`

### getPositionColorShader

```java
public static ShaderInstance getPositionColorShader()
```

**Returns:** `ShaderInstance`

### getPositionTexShader

```java
public static ShaderInstance getPositionTexShader()
```

**Returns:** `ShaderInstance`

### getPositionTexColorShader

```java
public static ShaderInstance getPositionTexColorShader()
```

**Returns:** `ShaderInstance`

### getParticleShader

```java
public static ShaderInstance getParticleShader()
```

**Returns:** `ShaderInstance`

### getPositionColorLightmapShader

```java
public static ShaderInstance getPositionColorLightmapShader()
```

**Returns:** `ShaderInstance`

### getPositionColorTexLightmapShader

```java
public static ShaderInstance getPositionColorTexLightmapShader()
```

**Returns:** `ShaderInstance`

### getRendertypeSolidShader

```java
public static ShaderInstance getRendertypeSolidShader()
```

**Returns:** `ShaderInstance`

### getRendertypeCutoutMippedShader

```java
public static ShaderInstance getRendertypeCutoutMippedShader()
```

**Returns:** `ShaderInstance`

### getRendertypeCutoutShader

```java
public static ShaderInstance getRendertypeCutoutShader()
```

**Returns:** `ShaderInstance`

### getRendertypeTranslucentShader

```java
public static ShaderInstance getRendertypeTranslucentShader()
```

**Returns:** `ShaderInstance`

### getRendertypeTranslucentMovingBlockShader

```java
public static ShaderInstance getRendertypeTranslucentMovingBlockShader()
```

**Returns:** `ShaderInstance`

### getRendertypeArmorCutoutNoCullShader

```java
public static ShaderInstance getRendertypeArmorCutoutNoCullShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntitySolidShader

```java
public static ShaderInstance getRendertypeEntitySolidShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityCutoutShader

```java
public static ShaderInstance getRendertypeEntityCutoutShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityCutoutNoCullShader

```java
public static ShaderInstance getRendertypeEntityCutoutNoCullShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityCutoutNoCullZOffsetShader

```java
public static ShaderInstance getRendertypeEntityCutoutNoCullZOffsetShader()
```

**Returns:** `ShaderInstance`

### getRendertypeItemEntityTranslucentCullShader

```java
public static ShaderInstance getRendertypeItemEntityTranslucentCullShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityTranslucentCullShader

```java
public static ShaderInstance getRendertypeEntityTranslucentCullShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityTranslucentShader

```java
public static ShaderInstance getRendertypeEntityTranslucentShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityTranslucentEmissiveShader

```java
public static ShaderInstance getRendertypeEntityTranslucentEmissiveShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntitySmoothCutoutShader

```java
public static ShaderInstance getRendertypeEntitySmoothCutoutShader()
```

**Returns:** `ShaderInstance`

### getRendertypeBeaconBeamShader

```java
public static ShaderInstance getRendertypeBeaconBeamShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityDecalShader

```java
public static ShaderInstance getRendertypeEntityDecalShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityNoOutlineShader

```java
public static ShaderInstance getRendertypeEntityNoOutlineShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityShadowShader

```java
public static ShaderInstance getRendertypeEntityShadowShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityAlphaShader

```java
public static ShaderInstance getRendertypeEntityAlphaShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEyesShader

```java
public static ShaderInstance getRendertypeEyesShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEnergySwirlShader

```java
public static ShaderInstance getRendertypeEnergySwirlShader()
```

**Returns:** `ShaderInstance`

### getRendertypeBreezeWindShader

```java
public static ShaderInstance getRendertypeBreezeWindShader()
```

**Returns:** `ShaderInstance`

### getRendertypeLeashShader

```java
public static ShaderInstance getRendertypeLeashShader()
```

**Returns:** `ShaderInstance`

### getRendertypeWaterMaskShader

```java
public static ShaderInstance getRendertypeWaterMaskShader()
```

**Returns:** `ShaderInstance`

### getRendertypeOutlineShader

```java
public static ShaderInstance getRendertypeOutlineShader()
```

**Returns:** `ShaderInstance`

### getRendertypeArmorGlintShader

```java
public static ShaderInstance getRendertypeArmorGlintShader()
```

**Returns:** `ShaderInstance`

### getRendertypeArmorEntityGlintShader

```java
public static ShaderInstance getRendertypeArmorEntityGlintShader()
```

**Returns:** `ShaderInstance`

### getRendertypeGlintTranslucentShader

```java
public static ShaderInstance getRendertypeGlintTranslucentShader()
```

**Returns:** `ShaderInstance`

### getRendertypeGlintShader

```java
public static ShaderInstance getRendertypeGlintShader()
```

**Returns:** `ShaderInstance`

### getRendertypeGlintDirectShader

```java
public static ShaderInstance getRendertypeGlintDirectShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityGlintShader

```java
public static ShaderInstance getRendertypeEntityGlintShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEntityGlintDirectShader

```java
public static ShaderInstance getRendertypeEntityGlintDirectShader()
```

**Returns:** `ShaderInstance`

### getRendertypeTextShader

```java
public static ShaderInstance getRendertypeTextShader()
```

**Returns:** `ShaderInstance`

### getRendertypeTextBackgroundShader

```java
public static ShaderInstance getRendertypeTextBackgroundShader()
```

**Returns:** `ShaderInstance`

### getRendertypeTextIntensityShader

```java
public static ShaderInstance getRendertypeTextIntensityShader()
```

**Returns:** `ShaderInstance`

### getRendertypeTextSeeThroughShader

```java
public static ShaderInstance getRendertypeTextSeeThroughShader()
```

**Returns:** `ShaderInstance`

### getRendertypeTextBackgroundSeeThroughShader

```java
public static ShaderInstance getRendertypeTextBackgroundSeeThroughShader()
```

**Returns:** `ShaderInstance`

### getRendertypeTextIntensitySeeThroughShader

```java
public static ShaderInstance getRendertypeTextIntensitySeeThroughShader()
```

**Returns:** `ShaderInstance`

### getRendertypeLightningShader

```java
public static ShaderInstance getRendertypeLightningShader()
```

**Returns:** `ShaderInstance`

### getRendertypeTripwireShader

```java
public static ShaderInstance getRendertypeTripwireShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEndPortalShader

```java
public static ShaderInstance getRendertypeEndPortalShader()
```

**Returns:** `ShaderInstance`

### getRendertypeEndGatewayShader

```java
public static ShaderInstance getRendertypeEndGatewayShader()
```

**Returns:** `ShaderInstance`

### getRendertypeCloudsShader

```java
public static ShaderInstance getRendertypeCloudsShader()
```

**Returns:** `ShaderInstance`

### getRendertypeLinesShader

```java
public static ShaderInstance getRendertypeLinesShader()
```

**Returns:** `ShaderInstance`

### getRendertypeCrumblingShader

```java
public static ShaderInstance getRendertypeCrumblingShader()
```

**Returns:** `ShaderInstance`

### getRendertypeGuiShader

```java
public static ShaderInstance getRendertypeGuiShader()
```

**Returns:** `ShaderInstance`

### getRendertypeGuiOverlayShader

```java
public static ShaderInstance getRendertypeGuiOverlayShader()
```

**Returns:** `ShaderInstance`

### getRendertypeGuiTextHighlightShader

```java
public static ShaderInstance getRendertypeGuiTextHighlightShader()
```

**Returns:** `ShaderInstance`

### getRendertypeGuiGhostRecipeOverlayShader

```java
public static ShaderInstance getRendertypeGuiGhostRecipeOverlayShader()
```

**Returns:** `ShaderInstance`

### getResource

```java
public Optional<Resource> getResource(ResourceLocation p_251007_)
```

**Parameters:**

- `p_251007_` (`ResourceLocation`)

**Returns:** `Optional<Resource>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ResourceCache` | record |  |
