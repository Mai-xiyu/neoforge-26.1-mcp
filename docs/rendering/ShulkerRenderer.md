# ShulkerRenderer

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class
**Extends:** `MobRenderer<Shulker, ShulkerModel<Shulker>>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ShulkerRenderer

```java
public ShulkerRenderer(EntityRendererProvider.Context p_174370_)
```

**Parameters:**

- `p_174370_` (`EntityRendererProvider.Context`)

**Returns:** `public`

### getRenderOffset

```java
public Vec3 getRenderOffset(Shulker p_115904_, float p_115905_)
```

**Parameters:**

- `p_115904_` (`Shulker`)
- `p_115905_` (`float`)

**Returns:** `public Vec3`

### shouldRender

```java
public boolean shouldRender(Shulker p_115913_, Frustum p_115914_, double p_115915_, double p_115916_, double p_115917_)
```

**Parameters:**

- `p_115913_` (`Shulker`)
- `p_115914_` (`Frustum`)
- `p_115915_` (`double`)
- `p_115916_` (`double`)
- `p_115917_` (`double`)

**Returns:** `public boolean`

### getTextureLocation

```java
public ResourceLocation getTextureLocation(Shulker p_115902_)
```

**Parameters:**

- `p_115902_` (`Shulker`)

**Returns:** `public ResourceLocation`

### getTextureLocation

```java
public static ResourceLocation getTextureLocation(DyeColor p_174376_)
```

**Parameters:**

- `p_174376_` (`DyeColor`)

**Returns:** `public static ResourceLocation`

### setupRotations

```java
protected void setupRotations(Shulker p_320913_, PoseStack p_115891_, float p_115892_, float p_115893_, float p_115894_, float p_319950_)
```

**Parameters:**

- `p_320913_` (`Shulker`)
- `p_115891_` (`PoseStack`)
- `p_115892_` (`float`)
- `p_115893_` (`float`)
- `p_115894_` (`float`)
- `p_319950_` (`float`)

**Returns:** `protected void`
