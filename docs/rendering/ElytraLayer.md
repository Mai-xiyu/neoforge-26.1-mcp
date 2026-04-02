# ElytraLayer

**Package:** `net.minecraft.client.renderer.entity.layers`
**Type:** class<T extends LivingEntity, M extends EntityModel<T>> extends RenderLayer<T, M>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ElytraLayer

```java
public ElytraLayer(RenderLayerParent<T, M> p_174493_, EntityModelSet p_174494_)
```

**Parameters:**

- `p_174493_` (`RenderLayerParent<T, M>`)
- `p_174494_` (`EntityModelSet`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(PoseStack p_116951_, MultiBufferSource p_116952_, int p_116953_, T p_116954_, float p_116955_, float p_116956_, float p_116957_, float p_116958_, float p_116959_, float p_116960_)
```

**Parameters:**

- `p_116951_` (`PoseStack`)
- `p_116952_` (`MultiBufferSource`)
- `p_116953_` (`int`)
- `p_116954_` (`T`)
- `p_116955_` (`float`)
- `p_116956_` (`float`)
- `p_116957_` (`float`)
- `p_116958_` (`float`)
- `p_116959_` (`float`)
- `p_116960_` (`float`)

**Returns:** `public void`

### shouldRender

```java
public boolean shouldRender(ItemStack stack, T entity)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`T`)

**Returns:** `boolean`

### getElytraTexture

```java
public ResourceLocation getElytraTexture(ItemStack stack, T entity)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`T`)

**Returns:** `ResourceLocation`
