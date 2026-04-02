# PistonHeadRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<PistonMovingBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PistonHeadRenderer

```java
public PistonHeadRenderer(BlockEntityRendererProvider.Context p_173623_)
```

**Parameters:**

- `p_173623_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### render

```java
public void render(PistonMovingBlockEntity p_112452_, float p_112453_, PoseStack p_112454_, MultiBufferSource p_112455_, int p_112456_, int p_112457_)
```

**Parameters:**

- `p_112452_` (`PistonMovingBlockEntity`)
- `p_112453_` (`float`)
- `p_112454_` (`PoseStack`)
- `p_112455_` (`MultiBufferSource`)
- `p_112456_` (`int`)
- `p_112457_` (`int`)

**Returns:** `public void`

### renderBlock

```java
private void renderBlock(BlockPos p_112459_, BlockState p_112460_, PoseStack p_112461_, MultiBufferSource p_112462_, Level p_112463_, boolean p_112464_, int p_112465_)
```

**Parameters:**

- `p_112459_` (`BlockPos`)
- `p_112460_` (`BlockState`)
- `p_112461_` (`PoseStack`)
- `p_112462_` (`MultiBufferSource`)
- `p_112463_` (`Level`)
- `p_112464_` (`boolean`)
- `p_112465_` (`int`)

**Returns:** `private void`

### getViewDistance

```java
public int getViewDistance()
```

**Returns:** `int`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(PistonMovingBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`PistonMovingBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`
