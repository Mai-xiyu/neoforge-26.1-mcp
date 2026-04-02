# ClientHooks

**Package:** `net.neoforged.neoforge.client`
**Type:** class
**Side:** 🖥️ Client

## Description

Class for various client-side-only hooks.

## Methods

### fixDomain

```java
This properly moves the domain, if provided, to the front of the string before concatenating
    public static String fixDomain(String base, String complex)
```

**Parameters:**

- `base` (`String`)
- `complex` (`String`)

**Returns:** `This properly moves the domain, if provided, to the front of the string before concatenating
    public static String`

### getFieldOfViewModifier

```java
public static float getFieldOfViewModifier(Player entity, float fovModifier)
```

**Parameters:**

- `entity` (`Player`)
- `fovModifier` (`float`)

**Returns:** `public static float`

### getFieldOfView

```java
public static double getFieldOfView(GameRenderer renderer, Camera camera, double partialTick, double fov, boolean usedConfiguredFov)
```

**Parameters:**

- `renderer` (`GameRenderer`)
- `camera` (`Camera`)
- `partialTick` (`double`)
- `fov` (`double`)
- `usedConfiguredFov` (`boolean`)

**Returns:** `public static double`

### getTurnPlayerValues

```java
public static CalculatePlayerTurnEvent getTurnPlayerValues(double mouseSensitivity, boolean cinematicCameraEnabled)
```

**Parameters:**

- `mouseSensitivity` (`double`)
- `cinematicCameraEnabled` (`boolean`)

**Returns:** `public static CalculatePlayerTurnEvent`

### getDetachedCameraDistance

```java
public static float getDetachedCameraDistance(Camera camera, boolean flipped, float entityScale, float distance)
```

**Parameters:**

- `camera` (`Camera`)
- `flipped` (`boolean`)
- `entityScale` (`float`)
- `distance` (`float`)

**Returns:** `public static float`

### getEntityRenderType

```java
static RenderType getEntityRenderType(RenderType chunkRenderType, boolean cull)
```

**Parameters:**

- `chunkRenderType` (`RenderType`)
- `cull` (`boolean`)

**Returns:** `RenderType`

### getEntityTranslucentUnlitShader

```java
public static ShaderInstance getEntityTranslucentUnlitShader()
```

**Returns:** `public static ShaderInstance`

### registerShaders

```java
public static void registerShaders(RegisterShadersEvent event)
```

**Parameters:**

- `event` (`RegisterShadersEvent`)

### getTooltipFont

```java
public static Font getTooltipFont(ItemStack stack, Font fallbackFont)
```

**Parameters:**

- `stack` (`ItemStack`)
- `fallbackFont` (`Font`)

**Returns:** `public static Font`

### onRenderTooltipPre

```java
public static RenderTooltipEvent.Pre onRenderTooltipPre(ItemStack stack, GuiGraphics graphics, int x, int y, int screenWidth, int screenHeight, List<ClientTooltipComponent> components, Font fallbackFont, ClientTooltipPositioner positioner)
```

**Parameters:**

- `stack` (`ItemStack`)
- `graphics` (`GuiGraphics`)
- `x` (`int`)
- `y` (`int`)
- `screenWidth` (`int`)
- `screenHeight` (`int`)
- `components` (`List<ClientTooltipComponent>`)
- `fallbackFont` (`Font`)
- `positioner` (`ClientTooltipPositioner`)

**Returns:** `public static RenderTooltipEvent.Pre`

### onRenderTooltipColor

```java
public static RenderTooltipEvent.Color onRenderTooltipColor(ItemStack stack, GuiGraphics graphics, int x, int y, Font font, List<ClientTooltipComponent> components)
```

**Parameters:**

- `stack` (`ItemStack`)
- `graphics` (`GuiGraphics`)
- `x` (`int`)
- `y` (`int`)
- `font` (`Font`)
- `components` (`List<ClientTooltipComponent>`)

**Returns:** `public static RenderTooltipEvent.Color`

### gatherTooltipComponents

```java
public static List<ClientTooltipComponent> gatherTooltipComponents(ItemStack stack, List<? extends FormattedText> textElements, int mouseX, int screenWidth, int screenHeight, Font fallbackFont)
```

**Parameters:**

- `stack` (`ItemStack`)
- `textElements` (`List<? extends FormattedText>`)
- `mouseX` (`int`)
- `screenWidth` (`int`)
- `screenHeight` (`int`)
- `fallbackFont` (`Font`)

**Returns:** `public static List<ClientTooltipComponent>`

### gatherTooltipComponents

```java
public static List<ClientTooltipComponent> gatherTooltipComponents(ItemStack stack, List<? extends FormattedText> textElements, Optional<TooltipComponent> itemComponent, int mouseX, int screenWidth, int screenHeight, Font fallbackFont)
```

**Parameters:**

- `stack` (`ItemStack`)
- `textElements` (`List<? extends FormattedText>`)
- `itemComponent` (`Optional<TooltipComponent>`)
- `mouseX` (`int`)
- `screenWidth` (`int`)
- `screenHeight` (`int`)
- `fallbackFont` (`Font`)

**Returns:** `public static List<ClientTooltipComponent>`

### gatherTooltipComponentsFromElements

```java
return gatherTooltipComponentsFromElements()
```

**Returns:** `return`

### gatherTooltipComponentsFromElements

```java
public static List<ClientTooltipComponent> gatherTooltipComponentsFromElements(ItemStack stack, List<Either<FormattedText, TooltipComponent>> elements, int mouseX, int screenWidth, int screenHeight, Font fallbackFont)
```

**Parameters:**

- `stack` (`ItemStack`)
- `elements` (`List<Either<FormattedText, TooltipComponent>>`)
- `mouseX` (`int`)
- `screenWidth` (`int`)
- `screenHeight` (`int`)
- `fallbackFont` (`Font`)

**Returns:** `public static List<ClientTooltipComponent>`

### splitLine

```java
private static Stream<ClientTooltipComponent> splitLine(FormattedText text, Font font, int maxWidth)
```

**Parameters:**

- `text` (`FormattedText`)
- `font` (`Font`)
- `maxWidth` (`int`)

**Returns:** `private static Stream<ClientTooltipComponent>`

### makeParticleRenderTypeComparator

```java
public static Comparator<ParticleRenderType> makeParticleRenderTypeComparator(List<ParticleRenderType> renderOrder)
```

**Parameters:**

- `renderOrder` (`List<ParticleRenderType>`)

**Returns:** `public static Comparator<ParticleRenderType>`

### onScreenPotionSize

```java
public static ScreenEvent.RenderInventoryMobEffects onScreenPotionSize(Screen screen, int availableSpace, boolean compact, int horizontalOffset)
```

**Parameters:**

- `screen` (`Screen`)
- `availableSpace` (`int`)
- `compact` (`boolean`)
- `horizontalOffset` (`int`)

**Returns:** `public static ScreenEvent.RenderInventoryMobEffects`

### onToastAdd

```java
public static boolean onToastAdd(Toast toast)
```

**Parameters:**

- `toast` (`Toast`)

**Returns:** `public static boolean`

### isBlockInSolidLayer

```java
public static boolean isBlockInSolidLayer(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `public static boolean`

### renderFireOverlay

```java
public static boolean renderFireOverlay(Player player, PoseStack mat)
```

**Parameters:**

- `player` (`Player`)
- `mat` (`PoseStack`)

**Returns:** `public static boolean`

### renderWaterOverlay

```java
public static boolean renderWaterOverlay(Player player, PoseStack mat)
```

**Parameters:**

- `player` (`Player`)
- `mat` (`PoseStack`)

**Returns:** `public static boolean`

### renderBlockOverlay

```java
public static boolean renderBlockOverlay(Player player, PoseStack mat, RenderBlockScreenEffectEvent.OverlayType type, BlockState block, BlockPos pos)
```

**Parameters:**

- `player` (`Player`)
- `mat` (`PoseStack`)
- `type` (`RenderBlockScreenEffectEvent.OverlayType`)
- `block` (`BlockState`)
- `pos` (`BlockPos`)

**Returns:** `public static boolean`

### getMaxMipmapLevel

```java
public static int getMaxMipmapLevel(int width, int height)
```

**Parameters:**

- `width` (`int`)
- `height` (`int`)

**Returns:** `public static int`

### getShaderImportLocation

```java
public static ResourceLocation getShaderImportLocation(String basePath, boolean isRelative, String importPath)
```

**Parameters:**

- `basePath` (`String`)
- `isRelative` (`boolean`)
- `importPath` (`String`)

**Returns:** `public static ResourceLocation`

### makeSpriteSourceTypesMap

```java
public static BiMap<ResourceLocation, SpriteSourceType> makeSpriteSourceTypesMap()
```

**Returns:** `public static BiMap<ResourceLocation, SpriteSourceType>`

### registerSpriteSourceTypes

```java
.Internal
    public static void registerSpriteSourceTypes()
```

**Returns:** `.Internal
    public static void`

### isBlockEntityRendererVisible

```java
public static <T extends BlockEntity> boolean isBlockEntityRendererVisible(BlockEntityRenderDispatcher dispatcher, BlockEntity blockEntity, Frustum frustum)
```

**Parameters:**

- `dispatcher` (`BlockEntityRenderDispatcher`)
- `blockEntity` (`BlockEntity`)
- `frustum` (`Frustum`)

**Returns:** `boolean`

### fixItemModelSeams

```java
public static List<BlockElement> fixItemModelSeams(List<BlockElement> elements, TextureAtlasSprite sprite)
```

**Parameters:**

- `elements` (`List<BlockElement>`)
- `sprite` (`TextureAtlasSprite`)

**Returns:** `List<BlockElement>`

### gatherAdditionalRenderers

```java
public static List<AddSectionGeometryEvent.AdditionalSectionRenderer> gatherAdditionalRenderers(BlockPos sectionOrigin, Level level)
```

**Parameters:**

- `sectionOrigin` (`BlockPos`)
- `level` (`Level`)

**Returns:** `public static List<AddSectionGeometryEvent.AdditionalSectionRenderer>`

### addAdditionalGeometry

```java
public static void addAdditionalGeometry(List<AddSectionGeometryEvent.AdditionalSectionRenderer> additionalRenderers, Function<RenderType, VertexConsumer> getOrCreateBuilder, RenderChunkRegion region, PoseStack transformation)
```

**Parameters:**

- `additionalRenderers` (`List<AddSectionGeometryEvent.AdditionalSectionRenderer>`)
- `getOrCreateBuilder` (`Function<RenderType, VertexConsumer>`)
- `region` (`RenderChunkRegion`)
- `transformation` (`PoseStack`)

**Returns:** `public static void`

### initClientHooks

```java
.Internal
    public static void initClientHooks(Minecraft mc, ReloadableResourceManager resourceManager)
```

**Parameters:**

- `mc` (`Minecraft`)
- `resourceManager` (`ReloadableResourceManager`)

**Returns:** `.Internal
    public static void`

### IllegalStateException

```java
throw new IllegalStateException("Client hooks initialized more than once")
```

**Parameters:**

- `once"` (`"Client hooks initialized more than`)

**Returns:** `throw new`

### registerSpriteSourceTypes

```java
 registerSpriteSourceTypes()
```

**Returns:** ``

### fireRenderFramePre

```java
public static void fireRenderFramePre(DeltaTracker partialTick)
```

**Parameters:**

- `partialTick` (`DeltaTracker`)

### fireRenderFramePost

```java
public static void fireRenderFramePost(DeltaTracker partialRick)
```

**Parameters:**

- `partialRick` (`DeltaTracker`)

### fireClientTickPre

```java
public static void fireClientTickPre()
```

### fireClientTickPost

```java
public static void fireClientTickPost()
```

### resolveLookup

```java
public static <T> RegistryLookup<T> resolveLookup(ResourceKey<? extends Registry<T>> key)
```

**Parameters:**

- `key` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `RegistryLookup<T>`

### getEffectTooltip

```java
public static List<Component> getEffectTooltip(EffectRenderingInventoryScreen<?> screen, MobEffectInstance effectInst, List<Component> tooltip)
```

**Parameters:**

- `screen` (`EffectRenderingInventoryScreen<?>`)
- `effectInst` (`MobEffectInstance`)
- `tooltip` (`List<Component>`)

**Returns:** `List<Component>`

### getFilteredRecipeBookTypeValues

```java
public static RecipeBookType[] getFilteredRecipeBookTypeValues()
```

**Returns:** `public static RecipeBookType[]`

### reloadRenderer

```java
public static void reloadRenderer()
```

**Returns:** `public static void`

### gatherMaterialAtlases

```java
public static Map<ResourceLocation, ResourceLocation> gatherMaterialAtlases(Map<ResourceLocation, ResourceLocation> vanillaAtlases)
```

**Parameters:**

- `vanillaAtlases` (`Map<ResourceLocation, ResourceLocation>`)

**Returns:** `public static Map<ResourceLocation, ResourceLocation>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ClientEvents` | class |  |
