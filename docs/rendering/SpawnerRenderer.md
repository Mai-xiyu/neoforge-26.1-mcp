# SpawnerRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<SpawnerBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SpawnerRenderer

```java
public SpawnerRenderer(BlockEntityRendererProvider.Context p_173673_)
```

**Parameters:**

- `p_173673_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### render

```java
public void render(SpawnerBlockEntity p_112563_, float p_112564_, PoseStack p_112565_, MultiBufferSource p_112566_, int p_112567_, int p_112568_)
```

**Parameters:**

- `p_112563_` (`SpawnerBlockEntity`)
- `p_112564_` (`float`)
- `p_112565_` (`PoseStack`)
- `p_112566_` (`MultiBufferSource`)
- `p_112567_` (`int`)
- `p_112568_` (`int`)

**Returns:** `public void`

### renderEntityInSpawner

```java
public static void renderEntityInSpawner(float p_311943_, PoseStack p_312805_, MultiBufferSource p_312394_, int p_311996_, Entity p_312223_, EntityRenderDispatcher p_312703_, double p_312192_, double p_312929_)
```

**Parameters:**

- `p_311943_` (`float`)
- `p_312805_` (`PoseStack`)
- `p_312394_` (`MultiBufferSource`)
- `p_311996_` (`int`)
- `p_312223_` (`Entity`)
- `p_312703_` (`EntityRenderDispatcher`)
- `p_312192_` (`double`)
- `p_312929_` (`double`)

**Returns:** `public static void`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(SpawnerBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`SpawnerBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`
