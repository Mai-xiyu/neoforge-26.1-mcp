# ItemEntityRenderer

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class
**Extends:** `EntityRenderer<ItemEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ItemEntityRenderer

```java
public ItemEntityRenderer(EntityRendererProvider.Context p_174198_)
```

**Parameters:**

- `p_174198_` (`EntityRendererProvider.Context`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getTextureLocation

```java
public ResourceLocation getTextureLocation(ItemEntity p_115034_)
```

**Parameters:**

- `p_115034_` (`ItemEntity`)

**Returns:** `public ResourceLocation`

### render

```java
public void render(ItemEntity p_115036_, float p_115037_, float p_115038_, PoseStack p_115039_, MultiBufferSource p_115040_, int p_115041_)
```

**Parameters:**

- `p_115036_` (`ItemEntity`)
- `p_115037_` (`float`)
- `p_115038_` (`float`)
- `p_115039_` (`PoseStack`)
- `p_115040_` (`MultiBufferSource`)
- `p_115041_` (`int`)

**Returns:** `public void`

### renderMultipleFromCount

```java
 renderMultipleFromCount()
```

**Returns:** ``

### getSeedForItemStack

```java
public static int getSeedForItemStack(ItemStack p_324105_)
```

**Parameters:**

- `p_324105_` (`ItemStack`)

**Returns:** `public static int`

### getRenderedAmount

```java
static int getRenderedAmount(int p_324603_)
```

**Parameters:**

- `p_324603_` (`int`)

**Returns:** `int`

### renderMultipleFromCount

```java
public static void renderMultipleFromCount(ItemRenderer p_323875_, PoseStack p_323763_, MultiBufferSource p_324606_, int p_323603_, ItemStack p_323969_, RandomSource p_324507_, Level p_323902_)
```

**Parameters:**

- `p_323875_` (`ItemRenderer`)
- `p_323763_` (`PoseStack`)
- `p_324606_` (`MultiBufferSource`)
- `p_323603_` (`int`)
- `p_323969_` (`ItemStack`)
- `p_324507_` (`RandomSource`)
- `p_323902_` (`Level`)

**Returns:** `public static void`

### renderMultipleFromCount

```java
public static void renderMultipleFromCount(ItemRenderer p_324541_, PoseStack p_323733_, MultiBufferSource p_324107_, int p_323740_, ItemStack p_323718_, BakedModel p_324183_, boolean p_324462_, RandomSource p_324565_)
```

**Parameters:**

- `p_324541_` (`ItemRenderer`)
- `p_323733_` (`PoseStack`)
- `p_324107_` (`MultiBufferSource`)
- `p_323740_` (`int`)
- `p_323718_` (`ItemStack`)
- `p_324183_` (`BakedModel`)
- `p_324462_` (`boolean`)
- `p_324565_` (`RandomSource`)

**Returns:** `public static void`
