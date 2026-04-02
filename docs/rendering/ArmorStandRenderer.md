# ArmorStandRenderer

**Package:** `net.minecraft.client.renderer.entity`
**Type:** class
**Extends:** `LivingEntityRenderer<ArmorStand, ArmorStandArmorModel>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_SKIN_LOCATION` | `ResourceLocation` |  |

## Methods

### ArmorStandRenderer

```java
public ArmorStandRenderer(EntityRendererProvider.Context p_173915_)
```

**Parameters:**

- `p_173915_` (`EntityRendererProvider.Context`)

**Returns:** `public`

### getTextureLocation

```java
public ResourceLocation getTextureLocation(ArmorStand p_113798_)
```

**Parameters:**

- `p_113798_` (`ArmorStand`)

**Returns:** `public ResourceLocation`

### setupRotations

```java
protected void setupRotations(ArmorStand p_113800_, PoseStack p_113801_, float p_113802_, float p_113803_, float p_113804_, float p_319811_)
```

**Parameters:**

- `p_113800_` (`ArmorStand`)
- `p_113801_` (`PoseStack`)
- `p_113802_` (`float`)
- `p_113803_` (`float`)
- `p_113804_` (`float`)
- `p_319811_` (`float`)

**Returns:** `protected void`

### shouldShowName

```java
protected boolean shouldShowName(ArmorStand p_113815_)
```

**Parameters:**

- `p_113815_` (`ArmorStand`)

**Returns:** `protected boolean`

### getRenderType

```java
protected RenderType getRenderType(ArmorStand p_113806_, boolean p_113807_, boolean p_113808_, boolean p_113809_)
```

**Parameters:**

- `p_113806_` (`ArmorStand`)
- `p_113807_` (`boolean`)
- `p_113808_` (`boolean`)
- `p_113809_` (`boolean`)

**Returns:** `RenderType`
