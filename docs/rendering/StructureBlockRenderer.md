# StructureBlockRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<StructureBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### StructureBlockRenderer

```java
public StructureBlockRenderer(BlockEntityRendererProvider.Context p_173675_)
```

**Parameters:**

- `p_173675_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### render

```java
public void render(StructureBlockEntity p_112583_, float p_112584_, PoseStack p_112585_, MultiBufferSource p_112586_, int p_112587_, int p_112588_)
```

**Parameters:**

- `p_112583_` (`StructureBlockEntity`)
- `p_112584_` (`float`)
- `p_112585_` (`PoseStack`)
- `p_112586_` (`MultiBufferSource`)
- `p_112587_` (`int`)
- `p_112588_` (`int`)

**Returns:** `public void`

### renderInvisibleBlocks

```java
private void renderInvisibleBlocks(StructureBlockEntity p_173677_, MultiBufferSource p_352319_, PoseStack p_173680_)
```

**Parameters:**

- `p_173677_` (`StructureBlockEntity`)
- `p_352319_` (`MultiBufferSource`)
- `p_173680_` (`PoseStack`)

**Returns:** `private void`

### renderStructureVoids

```java
private void renderStructureVoids(StructureBlockEntity p_352299_, VertexConsumer p_352113_, PoseStack p_352426_)
```

**Parameters:**

- `p_352299_` (`StructureBlockEntity`)
- `p_352113_` (`VertexConsumer`)
- `p_352426_` (`PoseStack`)

**Returns:** `private void`

### shouldRenderOffScreen

```java
public boolean shouldRenderOffScreen(StructureBlockEntity p_112581_)
```

**Parameters:**

- `p_112581_` (`StructureBlockEntity`)

**Returns:** `public boolean`

### getViewDistance

```java
public int getViewDistance()
```

**Returns:** `int`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(StructureBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`StructureBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`
