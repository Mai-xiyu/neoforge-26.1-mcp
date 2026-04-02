# DecoratedPotRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<DecoratedPotBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### DecoratedPotRenderer

```java
public DecoratedPotRenderer(BlockEntityRendererProvider.Context p_272872_)
```

**Parameters:**

- `p_272872_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### createBaseLayer

```java
public static LayerDefinition createBaseLayer()
```

**Returns:** `public static LayerDefinition`

### createSidesLayer

```java
public static LayerDefinition createSidesLayer()
```

**Returns:** `public static LayerDefinition`

### getSideMaterial

```java
private static Material getSideMaterial(Optional<Item> p_347523_)
```

**Parameters:**

- `p_347523_` (`Optional<Item>`)

**Returns:** `private static Material`

### render

```java
public void render(DecoratedPotBlockEntity p_273776_, float p_273103_, PoseStack p_273455_, MultiBufferSource p_273010_, int p_273407_, int p_273059_)
```

**Parameters:**

- `p_273776_` (`DecoratedPotBlockEntity`)
- `p_273103_` (`float`)
- `p_273455_` (`PoseStack`)
- `p_273010_` (`MultiBufferSource`)
- `p_273407_` (`int`)
- `p_273059_` (`int`)

**Returns:** `public void`

### renderSide

```java
private void renderSide(ModelPart p_273495_, PoseStack p_272899_, MultiBufferSource p_273582_, int p_273242_, int p_273108_, Material p_273173_)
```

**Parameters:**

- `p_273495_` (`ModelPart`)
- `p_272899_` (`PoseStack`)
- `p_273582_` (`MultiBufferSource`)
- `p_273242_` (`int`)
- `p_273108_` (`int`)
- `p_273173_` (`Material`)

**Returns:** `private void`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(DecoratedPotBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`DecoratedPotBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`
