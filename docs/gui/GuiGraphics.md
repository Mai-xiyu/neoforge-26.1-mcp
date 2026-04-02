# GuiGraphics

**Package:** `net.minecraft.client.gui`
**Type:** class
**Implements:** `net.neoforged.neoforge.client.extensions.IGuiGraphicsExtension`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_GUI_Z` | `float` |  |
| `MIN_GUI_Z` | `float` |  |

## Methods

### GuiGraphics

```java
private GuiGraphics(Minecraft p_282144_, PoseStack p_281551_, MultiBufferSource.BufferSource p_281460_)
```

**Parameters:**

- `p_282144_` (`Minecraft`)
- `p_281551_` (`PoseStack`)
- `p_281460_` (`MultiBufferSource.BufferSource`)

**Returns:** `private`

### GuiGraphics

```java
public GuiGraphics(Minecraft p_283406_, MultiBufferSource.BufferSource p_282238_)
```

**Parameters:**

- `p_283406_` (`Minecraft`)
- `p_282238_` (`MultiBufferSource.BufferSource`)

**Returns:** `public`

### drawManaged

```java
public void drawManaged(Runnable p_286277_)
```

**Parameters:**

- `p_286277_` (`Runnable`)

### guiWidth

```java
public int guiWidth()
```

**Returns:** `public int`

### guiHeight

```java
public int guiHeight()
```

**Returns:** `public int`

### pose

```java
public PoseStack pose()
```

**Returns:** `public PoseStack`

### bufferSource

```java
public MultiBufferSource.BufferSource bufferSource()
```

**Returns:** `public MultiBufferSource.BufferSource`

### flush

```java
public void flush()
```

**Returns:** `public void`

### hLine

```java
public void hLine(int p_283318_, int p_281662_, int p_281346_, int p_281672_)
```

**Parameters:**

- `p_283318_` (`int`)
- `p_281662_` (`int`)
- `p_281346_` (`int`)
- `p_281672_` (`int`)

**Returns:** `public void`

### hLine

```java
public void hLine(RenderType p_286630_, int p_286453_, int p_286247_, int p_286814_, int p_286623_)
```

**Parameters:**

- `p_286630_` (`RenderType`)
- `p_286453_` (`int`)
- `p_286247_` (`int`)
- `p_286814_` (`int`)
- `p_286623_` (`int`)

**Returns:** `public void`

### vLine

```java
public void vLine(int p_282951_, int p_281591_, int p_281568_, int p_282718_)
```

**Parameters:**

- `p_282951_` (`int`)
- `p_281591_` (`int`)
- `p_281568_` (`int`)
- `p_282718_` (`int`)

**Returns:** `public void`

### vLine

```java
public void vLine(RenderType p_286607_, int p_286309_, int p_286480_, int p_286707_, int p_286855_)
```

**Parameters:**

- `p_286607_` (`RenderType`)
- `p_286309_` (`int`)
- `p_286480_` (`int`)
- `p_286707_` (`int`)
- `p_286855_` (`int`)

**Returns:** `public void`

### enableScissor

```java
public void enableScissor(int p_281479_, int p_282788_, int p_282924_, int p_282826_)
```

**Parameters:**

- `p_281479_` (`int`)
- `p_282788_` (`int`)
- `p_282924_` (`int`)
- `p_282826_` (`int`)

**Returns:** `public void`

### disableScissor

```java
public void disableScissor()
```

**Returns:** `public void`

### containsPointInScissor

```java
public boolean containsPointInScissor(int p_332689_, int p_332771_)
```

**Parameters:**

- `p_332689_` (`int`)
- `p_332771_` (`int`)

**Returns:** `public boolean`

### applyScissor

```java
private void applyScissor(ScreenRectangle p_281569_)
```

**Parameters:**

- `p_281569_` (`ScreenRectangle`)

**Returns:** `private void`

### setColor

```java
public void setColor(float p_281272_, float p_281734_, float p_282022_, float p_281752_)
```

**Parameters:**

- `p_281272_` (`float`)
- `p_281734_` (`float`)
- `p_282022_` (`float`)
- `p_281752_` (`float`)

**Returns:** `public void`

### fill

```java
public void fill(int p_282988_, int p_282861_, int p_281278_, int p_281710_, int p_281470_)
```

**Parameters:**

- `p_282988_` (`int`)
- `p_282861_` (`int`)
- `p_281278_` (`int`)
- `p_281710_` (`int`)
- `p_281470_` (`int`)

**Returns:** `public void`

### fill

```java
public void fill(int p_281437_, int p_283660_, int p_282606_, int p_283413_, int p_283428_, int p_283253_)
```

**Parameters:**

- `p_281437_` (`int`)
- `p_283660_` (`int`)
- `p_282606_` (`int`)
- `p_283413_` (`int`)
- `p_283428_` (`int`)
- `p_283253_` (`int`)

**Returns:** `public void`

### fill

```java
public void fill(RenderType p_286602_, int p_286738_, int p_286614_, int p_286741_, int p_286610_, int p_286560_)
```

**Parameters:**

- `p_286602_` (`RenderType`)
- `p_286738_` (`int`)
- `p_286614_` (`int`)
- `p_286741_` (`int`)
- `p_286610_` (`int`)
- `p_286560_` (`int`)

**Returns:** `public void`

### fill

```java
public void fill(RenderType p_286711_, int p_286234_, int p_286444_, int p_286244_, int p_286411_, int p_286671_, int p_286599_)
```

**Parameters:**

- `p_286711_` (`RenderType`)
- `p_286234_` (`int`)
- `p_286444_` (`int`)
- `p_286244_` (`int`)
- `p_286411_` (`int`)
- `p_286671_` (`int`)
- `p_286599_` (`int`)

**Returns:** `public void`

### fillGradient

```java
public void fillGradient(int p_283290_, int p_283278_, int p_282670_, int p_281698_, int p_283374_, int p_283076_)
```

**Parameters:**

- `p_283290_` (`int`)
- `p_283278_` (`int`)
- `p_282670_` (`int`)
- `p_281698_` (`int`)
- `p_283374_` (`int`)
- `p_283076_` (`int`)

**Returns:** `public void`

### fillGradient

```java
public void fillGradient(int p_282702_, int p_282331_, int p_281415_, int p_283118_, int p_282419_, int p_281954_, int p_282607_)
```

**Parameters:**

- `p_282702_` (`int`)
- `p_282331_` (`int`)
- `p_281415_` (`int`)
- `p_283118_` (`int`)
- `p_282419_` (`int`)
- `p_281954_` (`int`)
- `p_282607_` (`int`)

**Returns:** `public void`

### fillGradient

```java
public void fillGradient(RenderType p_286522_, int p_286535_, int p_286839_, int p_286242_, int p_286856_, int p_286809_, int p_286833_, int p_286706_)
```

**Parameters:**

- `p_286522_` (`RenderType`)
- `p_286535_` (`int`)
- `p_286839_` (`int`)
- `p_286242_` (`int`)
- `p_286856_` (`int`)
- `p_286809_` (`int`)
- `p_286833_` (`int`)
- `p_286706_` (`int`)

**Returns:** `public void`

### fillGradient

```java
private void fillGradient(VertexConsumer p_286862_, int p_283414_, int p_281397_, int p_283587_, int p_281521_, int p_283505_, int p_283131_, int p_282949_)
```

**Parameters:**

- `p_286862_` (`VertexConsumer`)
- `p_283414_` (`int`)
- `p_281397_` (`int`)
- `p_283587_` (`int`)
- `p_281521_` (`int`)
- `p_283505_` (`int`)
- `p_283131_` (`int`)
- `p_282949_` (`int`)

**Returns:** `private void`

### fillRenderType

```java
public void fillRenderType(RenderType p_331805_, int p_330261_, int p_330693_, int p_331143_, int p_331708_, int p_330497_)
```

**Parameters:**

- `p_331805_` (`RenderType`)
- `p_330261_` (`int`)
- `p_330693_` (`int`)
- `p_331143_` (`int`)
- `p_331708_` (`int`)
- `p_330497_` (`int`)

**Returns:** `public void`

### drawCenteredString

```java
public void drawCenteredString(Font p_282122_, String p_282898_, int p_281490_, int p_282853_, int p_281258_)
```

**Parameters:**

- `p_282122_` (`Font`)
- `p_282898_` (`String`)
- `p_281490_` (`int`)
- `p_282853_` (`int`)
- `p_281258_` (`int`)

**Returns:** `public void`

### drawCenteredString

```java
public void drawCenteredString(Font p_282901_, Component p_282456_, int p_283083_, int p_282276_, int p_281457_)
```

**Parameters:**

- `p_282901_` (`Font`)
- `p_282456_` (`Component`)
- `p_283083_` (`int`)
- `p_282276_` (`int`)
- `p_281457_` (`int`)

**Returns:** `public void`

### drawCenteredString

```java
public void drawCenteredString(Font p_282592_, FormattedCharSequence p_281854_, int p_281573_, int p_283511_, int p_282577_)
```

**Parameters:**

- `p_282592_` (`Font`)
- `p_281854_` (`FormattedCharSequence`)
- `p_281573_` (`int`)
- `p_283511_` (`int`)
- `p_282577_` (`int`)

**Returns:** `public void`

### drawString

```java
public int drawString(Font p_282003_, String p_281403_, int p_282714_, int p_282041_, int p_281908_)
```

**Parameters:**

- `p_282003_` (`Font`)
- `p_281403_` (`String`)
- `p_282714_` (`int`)
- `p_282041_` (`int`)
- `p_281908_` (`int`)

**Returns:** `public int`

### drawString

```java
public int drawString(Font p_283343_, String p_281896_, int p_283569_, int p_283418_, int p_281560_, boolean p_282130_)
```

**Parameters:**

- `p_283343_` (`Font`)
- `p_281896_` (`String`)
- `p_283569_` (`int`)
- `p_283418_` (`int`)
- `p_281560_` (`int`)
- `p_282130_` (`boolean`)

**Returns:** `public int`

### drawString

```java
Add float variant for x,y coordinates, with a string as input
    public int drawString(Font p_283343_, String p_281896_, float p_283569_, float p_283418_, int p_281560_, boolean p_282130_)
```

**Parameters:**

- `p_283343_` (`Font`)
- `p_281896_` (`String`)
- `p_283569_` (`float`)
- `p_283418_` (`float`)
- `p_281560_` (`int`)
- `p_282130_` (`boolean`)

**Returns:** `Add float variant for x,y coordinates, with a string as input
    public int`

### drawString

```java
public int drawString(Font p_283019_, FormattedCharSequence p_283376_, int p_283379_, int p_283346_, int p_282119_)
```

**Parameters:**

- `p_283019_` (`Font`)
- `p_283376_` (`FormattedCharSequence`)
- `p_283379_` (`int`)
- `p_283346_` (`int`)
- `p_282119_` (`int`)

**Returns:** `public int`

### drawString

```java
public int drawString(Font p_282636_, FormattedCharSequence p_281596_, int p_281586_, int p_282816_, int p_281743_, boolean p_282394_)
```

**Parameters:**

- `p_282636_` (`Font`)
- `p_281596_` (`FormattedCharSequence`)
- `p_281586_` (`int`)
- `p_282816_` (`int`)
- `p_281743_` (`int`)
- `p_282394_` (`boolean`)

**Returns:** `public int`

### drawString

```java
Add float variant for x,y coordinates, with a formatted char sequence as input
    public int drawString(Font p_282636_, FormattedCharSequence p_281596_, float p_281586_, float p_282816_, int p_281743_, boolean p_282394_)
```

**Parameters:**

- `p_282636_` (`Font`)
- `p_281596_` (`FormattedCharSequence`)
- `p_281586_` (`float`)
- `p_282816_` (`float`)
- `p_281743_` (`int`)
- `p_282394_` (`boolean`)

**Returns:** `Add float variant for x,y coordinates, with a formatted char sequence as input
    public int`

### drawString

```java
public int drawString(Font p_281653_, Component p_283140_, int p_283102_, int p_282347_, int p_281429_)
```

**Parameters:**

- `p_281653_` (`Font`)
- `p_283140_` (`Component`)
- `p_283102_` (`int`)
- `p_282347_` (`int`)
- `p_281429_` (`int`)

**Returns:** `public int`

### drawString

```java
public int drawString(Font p_281547_, Component p_282131_, int p_282857_, int p_281250_, int p_282195_, boolean p_282791_)
```

**Parameters:**

- `p_281547_` (`Font`)
- `p_282131_` (`Component`)
- `p_282857_` (`int`)
- `p_281250_` (`int`)
- `p_282195_` (`int`)
- `p_282791_` (`boolean`)

**Returns:** `public int`

### drawWordWrap

```java
public void drawWordWrap(Font p_281494_, FormattedText p_283463_, int p_282183_, int p_283250_, int p_282564_, int p_282629_)
```

**Parameters:**

- `p_281494_` (`Font`)
- `p_283463_` (`FormattedText`)
- `p_282183_` (`int`)
- `p_283250_` (`int`)
- `p_282564_` (`int`)
- `p_282629_` (`int`)

**Returns:** `public void`

### drawStringWithBackdrop

```java
public int drawStringWithBackdrop(Font p_348650_, Component p_348614_, int p_348465_, int p_348495_, int p_348581_, int p_348666_)
```

**Parameters:**

- `p_348650_` (`Font`)
- `p_348614_` (`Component`)
- `p_348465_` (`int`)
- `p_348495_` (`int`)
- `p_348581_` (`int`)
- `p_348666_` (`int`)

**Returns:** `public int`

### blit

```java
public void blit(int p_282225_, int p_281487_, int p_281985_, int p_281329_, int p_283035_, TextureAtlasSprite p_281614_)
```

**Parameters:**

- `p_282225_` (`int`)
- `p_281487_` (`int`)
- `p_281985_` (`int`)
- `p_281329_` (`int`)
- `p_283035_` (`int`)
- `p_281614_` (`TextureAtlasSprite`)

**Returns:** `public void`

### blit

```java
public void blit(int p_282416_, int p_282989_, int p_282618_, int p_282755_, int p_281717_, TextureAtlasSprite p_281874_, float p_283559_, float p_282730_, float p_283530_, float p_282246_)
```

**Parameters:**

- `p_282416_` (`int`)
- `p_282989_` (`int`)
- `p_282618_` (`int`)
- `p_282755_` (`int`)
- `p_281717_` (`int`)
- `p_281874_` (`TextureAtlasSprite`)
- `p_283559_` (`float`)
- `p_282730_` (`float`)
- `p_283530_` (`float`)
- `p_282246_` (`float`)

**Returns:** `public void`

### renderOutline

```java
public void renderOutline(int p_281496_, int p_282076_, int p_281334_, int p_283576_, int p_283618_)
```

**Parameters:**

- `p_281496_` (`int`)
- `p_282076_` (`int`)
- `p_281334_` (`int`)
- `p_283576_` (`int`)
- `p_283618_` (`int`)

**Returns:** `public void`

### blitSprite

```java
public void blitSprite(ResourceLocation p_294915_, int p_295058_, int p_294415_, int p_294535_, int p_295510_)
```

**Parameters:**

- `p_294915_` (`ResourceLocation`)
- `p_295058_` (`int`)
- `p_294415_` (`int`)
- `p_294535_` (`int`)
- `p_295510_` (`int`)

**Returns:** `public void`

### blitSprite

```java
public void blitSprite(ResourceLocation p_294549_, int p_294560_, int p_295075_, int p_294098_, int p_295872_, int p_294414_)
```

**Parameters:**

- `p_294549_` (`ResourceLocation`)
- `p_294560_` (`int`)
- `p_295075_` (`int`)
- `p_294098_` (`int`)
- `p_295872_` (`int`)
- `p_294414_` (`int`)

**Returns:** `public void`

### blitSprite

```java
public void blitSprite(ResourceLocation p_295983_, int p_295194_, int p_295164_, int p_294823_, int p_295650_, int p_295401_, int p_295170_, int p_294104_, int p_294577_)
```

**Parameters:**

- `p_295983_` (`ResourceLocation`)
- `p_295194_` (`int`)
- `p_295164_` (`int`)
- `p_294823_` (`int`)
- `p_295650_` (`int`)
- `p_295401_` (`int`)
- `p_295170_` (`int`)
- `p_294104_` (`int`)
- `p_294577_` (`int`)

**Returns:** `public void`

### blitSprite

```java
public void blitSprite(ResourceLocation p_295389_, int p_294223_, int p_296245_, int p_296255_, int p_295669_, int p_296061_, int p_295546_, int p_294648_, int p_296423_, int p_295837_)
```

**Parameters:**

- `p_295389_` (`ResourceLocation`)
- `p_294223_` (`int`)
- `p_296245_` (`int`)
- `p_296255_` (`int`)
- `p_295669_` (`int`)
- `p_296061_` (`int`)
- `p_295546_` (`int`)
- `p_294648_` (`int`)
- `p_296423_` (`int`)
- `p_295837_` (`int`)

**Returns:** `public void`

### blitSprite

```java
private void blitSprite(TextureAtlasSprite p_295420_, int p_294695_, int p_296458_, int p_294279_, int p_295235_, int p_295034_, int p_295689_, int p_294096_, int p_294846_, int p_295282_)
```

**Parameters:**

- `p_295420_` (`TextureAtlasSprite`)
- `p_294695_` (`int`)
- `p_296458_` (`int`)
- `p_294279_` (`int`)
- `p_295235_` (`int`)
- `p_295034_` (`int`)
- `p_295689_` (`int`)
- `p_294096_` (`int`)
- `p_294846_` (`int`)
- `p_295282_` (`int`)

**Returns:** `private void`

### blitSprite

```java
private void blitSprite(TextureAtlasSprite p_295122_, int p_295850_, int p_296348_, int p_295804_, int p_296465_, int p_295717_)
```

**Parameters:**

- `p_295122_` (`TextureAtlasSprite`)
- `p_295850_` (`int`)
- `p_296348_` (`int`)
- `p_295804_` (`int`)
- `p_296465_` (`int`)
- `p_295717_` (`int`)

**Returns:** `private void`

### blit

```java
public void blit(ResourceLocation p_283377_, int p_281970_, int p_282111_, int p_283134_, int p_282778_, int p_281478_, int p_281821_)
```

**Parameters:**

- `p_283377_` (`ResourceLocation`)
- `p_281970_` (`int`)
- `p_282111_` (`int`)
- `p_283134_` (`int`)
- `p_282778_` (`int`)
- `p_281478_` (`int`)
- `p_281821_` (`int`)

**Returns:** `public void`

### blit

```java
public void blit(ResourceLocation p_283573_, int p_283574_, int p_283670_, int p_283545_, float p_283029_, float p_283061_, int p_282845_, int p_282558_, int p_282832_, int p_281851_)
```

**Parameters:**

- `p_283573_` (`ResourceLocation`)
- `p_283574_` (`int`)
- `p_283670_` (`int`)
- `p_283545_` (`int`)
- `p_283029_` (`float`)
- `p_283061_` (`float`)
- `p_282845_` (`int`)
- `p_282558_` (`int`)
- `p_282832_` (`int`)
- `p_281851_` (`int`)

**Returns:** `public void`

### blit

```java
public void blit(ResourceLocation p_282034_, int p_283671_, int p_282377_, int p_282058_, int p_281939_, float p_282285_, float p_283199_, int p_282186_, int p_282322_, int p_282481_, int p_281887_)
```

**Parameters:**

- `p_282034_` (`ResourceLocation`)
- `p_283671_` (`int`)
- `p_282377_` (`int`)
- `p_282058_` (`int`)
- `p_281939_` (`int`)
- `p_282285_` (`float`)
- `p_283199_` (`float`)
- `p_282186_` (`int`)
- `p_282322_` (`int`)
- `p_282481_` (`int`)
- `p_281887_` (`int`)

**Returns:** `public void`

### blit

```java
public void blit(ResourceLocation p_283272_, int p_283605_, int p_281879_, float p_282809_, float p_282942_, int p_281922_, int p_282385_, int p_282596_, int p_281699_)
```

**Parameters:**

- `p_283272_` (`ResourceLocation`)
- `p_283605_` (`int`)
- `p_281879_` (`int`)
- `p_282809_` (`float`)
- `p_282942_` (`float`)
- `p_281922_` (`int`)
- `p_282385_` (`int`)
- `p_282596_` (`int`)
- `p_281699_` (`int`)

**Returns:** `public void`

### blit

```java
void blit(ResourceLocation p_282639_, int p_282732_, int p_283541_, int p_281760_, int p_283298_, int p_283429_, int p_282193_, int p_281980_, float p_282660_, float p_281522_, int p_282315_, int p_281436_)
```

**Parameters:**

- `p_282639_` (`ResourceLocation`)
- `p_282732_` (`int`)
- `p_283541_` (`int`)
- `p_281760_` (`int`)
- `p_283298_` (`int`)
- `p_283429_` (`int`)
- `p_282193_` (`int`)
- `p_281980_` (`int`)
- `p_282660_` (`float`)
- `p_281522_` (`float`)
- `p_282315_` (`int`)
- `p_281436_` (`int`)

### innerBlit

```java
void innerBlit(ResourceLocation p_283461_, int p_281399_, int p_283222_, int p_283615_, int p_283430_, int p_281729_, float p_283247_, float p_282598_, float p_282883_, float p_283017_)
```

**Parameters:**

- `p_283461_` (`ResourceLocation`)
- `p_281399_` (`int`)
- `p_283222_` (`int`)
- `p_283615_` (`int`)
- `p_283430_` (`int`)
- `p_281729_` (`int`)
- `p_283247_` (`float`)
- `p_282598_` (`float`)
- `p_282883_` (`float`)
- `p_283017_` (`float`)

### innerBlit

```java
void innerBlit(ResourceLocation p_283254_, int p_283092_, int p_281930_, int p_282113_, int p_281388_, int p_283583_, float p_281327_, float p_281676_, float p_283166_, float p_282630_, float p_282800_, float p_282850_, float p_282375_, float p_282754_)
```

**Parameters:**

- `p_283254_` (`ResourceLocation`)
- `p_283092_` (`int`)
- `p_281930_` (`int`)
- `p_282113_` (`int`)
- `p_281388_` (`int`)
- `p_283583_` (`int`)
- `p_281327_` (`float`)
- `p_281676_` (`float`)
- `p_283166_` (`float`)
- `p_282630_` (`float`)
- `p_282800_` (`float`)
- `p_282850_` (`float`)
- `p_282375_` (`float`)
- `p_282754_` (`float`)

### blitNineSlicedSprite

```java
private void blitNineSlicedSprite(TextureAtlasSprite p_294394_, GuiSpriteScaling.NineSlice p_295735_, int p_294769_, int p_294546_, int p_294421_, int p_295807_, int p_295009_)
```

**Parameters:**

- `p_294394_` (`TextureAtlasSprite`)
- `p_295735_` (`GuiSpriteScaling.NineSlice`)
- `p_294769_` (`int`)
- `p_294546_` (`int`)
- `p_294421_` (`int`)
- `p_295807_` (`int`)
- `p_295009_` (`int`)

**Returns:** `private void`

### blitTiledSprite

```java
private void blitTiledSprite(TextureAtlasSprite p_294349_, int p_295093_, int p_296434_, int p_295268_, int p_295203_, int p_296398_, int p_295542_, int p_296165_, int p_296256_, int p_294814_, int p_296352_, int p_296203_)
```

**Parameters:**

- `p_294349_` (`TextureAtlasSprite`)
- `p_295093_` (`int`)
- `p_296434_` (`int`)
- `p_295268_` (`int`)
- `p_295203_` (`int`)
- `p_296398_` (`int`)
- `p_295542_` (`int`)
- `p_296165_` (`int`)
- `p_296256_` (`int`)
- `p_294814_` (`int`)
- `p_296352_` (`int`)
- `p_296203_` (`int`)

**Returns:** `private void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Tiled sprite texture size must be positive, got " + p_296256_ + "x" + p_294814_)
```

**Parameters:**

- `positive` (`"Tiled sprite texture size must be`)
- `p_294814_` (`got " + p_296256_ + "x" +`)

**Returns:** `throw new`

### renderItem

```java
public void renderItem(ItemStack p_281978_, int p_282647_, int p_281944_)
```

**Parameters:**

- `p_281978_` (`ItemStack`)
- `p_282647_` (`int`)
- `p_281944_` (`int`)

**Returns:** `public void`

### renderItem

```java
public void renderItem(ItemStack p_282262_, int p_283221_, int p_283496_, int p_283435_)
```

**Parameters:**

- `p_282262_` (`ItemStack`)
- `p_283221_` (`int`)
- `p_283496_` (`int`)
- `p_283435_` (`int`)

**Returns:** `public void`

### renderItem

```java
public void renderItem(ItemStack p_282786_, int p_282502_, int p_282976_, int p_281592_, int p_282314_)
```

**Parameters:**

- `p_282786_` (`ItemStack`)
- `p_282502_` (`int`)
- `p_282976_` (`int`)
- `p_281592_` (`int`)
- `p_282314_` (`int`)

**Returns:** `public void`

### renderFakeItem

```java
public void renderFakeItem(ItemStack p_281946_, int p_283299_, int p_283674_)
```

**Parameters:**

- `p_281946_` (`ItemStack`)
- `p_283299_` (`int`)
- `p_283674_` (`int`)

**Returns:** `public void`

### renderFakeItem

```java
public void renderFakeItem(ItemStack p_312904_, int p_312257_, int p_312674_, int p_312138_)
```

**Parameters:**

- `p_312904_` (`ItemStack`)
- `p_312257_` (`int`)
- `p_312674_` (`int`)
- `p_312138_` (`int`)

**Returns:** `public void`

### renderItem

```java
public void renderItem(LivingEntity p_282154_, ItemStack p_282777_, int p_282110_, int p_281371_, int p_283572_)
```

**Parameters:**

- `p_282154_` (`LivingEntity`)
- `p_282777_` (`ItemStack`)
- `p_282110_` (`int`)
- `p_281371_` (`int`)
- `p_283572_` (`int`)

**Returns:** `public void`

### renderItem

```java
private void renderItem(LivingEntity p_283524_, Level p_282461_, ItemStack p_283653_, int p_283141_, int p_282560_, int p_282425_)
```

**Parameters:**

- `p_283524_` (`LivingEntity`)
- `p_282461_` (`Level`)
- `p_283653_` (`ItemStack`)
- `p_283141_` (`int`)
- `p_282560_` (`int`)
- `p_282425_` (`int`)

**Returns:** `private void`

### renderItem

```java
private void renderItem(LivingEntity p_282619_, Level p_281754_, ItemStack p_281675_, int p_281271_, int p_282210_, int p_283260_, int p_281995_)
```

**Parameters:**

- `p_282619_` (`LivingEntity`)
- `p_281754_` (`Level`)
- `p_281675_` (`ItemStack`)
- `p_281271_` (`int`)
- `p_282210_` (`int`)
- `p_283260_` (`int`)
- `p_281995_` (`int`)

**Returns:** `private void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### renderItemDecorations

```java
public void renderItemDecorations(Font p_281721_, ItemStack p_281514_, int p_282056_, int p_282683_)
```

**Parameters:**

- `p_281721_` (`Font`)
- `p_281514_` (`ItemStack`)
- `p_282056_` (`int`)
- `p_282683_` (`int`)

**Returns:** `public void`

### renderItemDecorations

```java
public void renderItemDecorations(Font p_282005_, ItemStack p_283349_, int p_282641_, int p_282146_, String p_282803_)
```

**Parameters:**

- `p_282005_` (`Font`)
- `p_283349_` (`ItemStack`)
- `p_282641_` (`int`)
- `p_282146_` (`int`)
- `p_282803_` (`String`)

**Returns:** `public void`

### renderTooltip

```java
public void renderTooltip(Font p_282308_, ItemStack p_282781_, int p_282687_, int p_282292_)
```

**Parameters:**

- `p_282308_` (`Font`)
- `p_282781_` (`ItemStack`)
- `p_282687_` (`int`)
- `p_282292_` (`int`)

**Returns:** `public void`

### renderTooltip

```java
public void renderTooltip(Font font, List<Component> textComponents, Optional<TooltipComponent> tooltipComponent, ItemStack stack, int mouseX, int mouseY)
```

**Parameters:**

- `font` (`Font`)
- `textComponents` (`List<Component>`)
- `tooltipComponent` (`Optional<TooltipComponent>`)
- `stack` (`ItemStack`)
- `mouseX` (`int`)
- `mouseY` (`int`)

**Returns:** `public void`

### renderTooltip

```java
public void renderTooltip(Font p_283128_, List<Component> p_282716_, Optional<TooltipComponent> p_281682_, int p_283678_, int p_281696_)
```

**Parameters:**

- `p_283128_` (`Font`)
- `p_282716_` (`List<Component>`)
- `p_281682_` (`Optional<TooltipComponent>`)
- `p_283678_` (`int`)
- `p_281696_` (`int`)

**Returns:** `public void`

### renderTooltip

```java
public void renderTooltip(Font p_282269_, Component p_282572_, int p_282044_, int p_282545_)
```

**Parameters:**

- `p_282269_` (`Font`)
- `p_282572_` (`Component`)
- `p_282044_` (`int`)
- `p_282545_` (`int`)

**Returns:** `public void`

### renderComponentTooltip

```java
public void renderComponentTooltip(Font p_282739_, List<Component> p_281832_, int p_282191_, int p_282446_)
```

**Parameters:**

- `p_282739_` (`Font`)
- `p_281832_` (`List<Component>`)
- `p_282191_` (`int`)
- `p_282446_` (`int`)

**Returns:** `public void`

### renderComponentTooltip

```java
public void renderComponentTooltip(Font font, List<? extends net.minecraft.network.chat.FormattedText> tooltips, int mouseX, int mouseY, ItemStack stack)
```

**Parameters:**

- `font` (`Font`)
- `tooltips` (`List<? extends net.minecraft.network.chat.FormattedText>`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `stack` (`ItemStack`)

**Returns:** `public void`

### renderComponentTooltipFromElements

```java
public void renderComponentTooltipFromElements(Font font, List<com.mojang.datafixers.util.Either<FormattedText, TooltipComponent>> elements, int mouseX, int mouseY, ItemStack stack)
```

**Parameters:**

- `font` (`Font`)
- `elements` (`List<com.mojang.datafixers.util.Either<FormattedText, TooltipComponent>>`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `stack` (`ItemStack`)

**Returns:** `public void`

### renderTooltip

```java
public void renderTooltip(Font p_282192_, List<? extends FormattedCharSequence> p_282297_, int p_281680_, int p_283325_)
```

**Parameters:**

- `p_282192_` (`Font`)
- `p_282297_` (`List<? extends FormattedCharSequence>`)
- `p_281680_` (`int`)
- `p_283325_` (`int`)

**Returns:** `public void`

### renderTooltip

```java
public void renderTooltip(Font p_281627_, List<FormattedCharSequence> p_283313_, ClientTooltipPositioner p_283571_, int p_282367_, int p_282806_)
```

**Parameters:**

- `p_281627_` (`Font`)
- `p_283313_` (`List<FormattedCharSequence>`)
- `p_283571_` (`ClientTooltipPositioner`)
- `p_282367_` (`int`)
- `p_282806_` (`int`)

**Returns:** `public void`

### renderTooltipInternal

```java
private void renderTooltipInternal(Font p_282675_, List<ClientTooltipComponent> p_282615_, int p_283230_, int p_283417_, ClientTooltipPositioner p_282442_)
```

**Parameters:**

- `p_282675_` (`Font`)
- `p_282615_` (`List<ClientTooltipComponent>`)
- `p_283230_` (`int`)
- `p_283417_` (`int`)
- `p_282442_` (`ClientTooltipPositioner`)

**Returns:** `private void`

### renderComponentHoverEffect

```java
public void renderComponentHoverEffect(Font p_282584_, Style p_282156_, int p_283623_, int p_282114_)
```

**Parameters:**

- `p_282584_` (`Font`)
- `p_282156_` (`Style`)
- `p_283623_` (`int`)
- `p_282114_` (`int`)

**Returns:** `public void`

### push

```java
public ScreenRectangle push(ScreenRectangle p_281812_)
```

**Parameters:**

- `p_281812_` (`ScreenRectangle`)

**Returns:** `public ScreenRectangle`

### pop

```java
public ScreenRectangle pop()
```

**Returns:** `ScreenRectangle`

### IllegalStateException

```java
throw new IllegalStateException("Scissor stack underflow")
```

**Parameters:**

- `underflow"` (`"Scissor stack`)

**Returns:** `throw new`

### containsPoint

```java
public boolean containsPoint(int p_332682_, int p_332655_)
```

**Parameters:**

- `p_332682_` (`int`)
- `p_332655_` (`int`)

**Returns:** `public boolean`
