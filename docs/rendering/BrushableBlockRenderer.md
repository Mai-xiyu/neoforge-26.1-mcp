# BrushableBlockRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<BrushableBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BrushableBlockRenderer

```java
public BrushableBlockRenderer(BlockEntityRendererProvider.Context p_277899_)
```

**Parameters:**

- `p_277899_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### render

```java
public void render(BrushableBlockEntity p_277712_, float p_277981_, PoseStack p_277490_, MultiBufferSource p_278015_, int p_277463_, int p_277346_)
```

**Parameters:**

- `p_277712_` (`BrushableBlockEntity`)
- `p_277981_` (`float`)
- `p_277490_` (`PoseStack`)
- `p_278015_` (`MultiBufferSource`)
- `p_277463_` (`int`)
- `p_277346_` (`int`)

**Returns:** `public void`

### translations

```java
private float[] translations(Direction p_278030_, int p_277997_)
```

**Parameters:**

- `p_278030_` (`Direction`)
- `p_277997_` (`int`)

**Returns:** `private float[]`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(BrushableBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`BrushableBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`
