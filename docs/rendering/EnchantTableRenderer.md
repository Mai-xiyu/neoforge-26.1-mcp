# EnchantTableRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<EnchantingTableBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BOOK_LOCATION` | `Material` |  |

## Methods

### EnchantTableRenderer

```java
public EnchantTableRenderer(BlockEntityRendererProvider.Context p_173619_)
```

**Parameters:**

- `p_173619_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### render

```java
public void render(EnchantingTableBlockEntity p_341203_, float p_112419_, PoseStack p_112420_, MultiBufferSource p_112421_, int p_112422_, int p_112423_)
```

**Parameters:**

- `p_341203_` (`EnchantingTableBlockEntity`)
- `p_112419_` (`float`)
- `p_112420_` (`PoseStack`)
- `p_112421_` (`MultiBufferSource`)
- `p_112422_` (`int`)
- `p_112423_` (`int`)

**Returns:** `public void`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(EnchantingTableBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`EnchantingTableBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`
