# TheEndGatewayRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Extends:** `TheEndPortalRenderer<TheEndGatewayBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TheEndGatewayRenderer

```java
public TheEndGatewayRenderer(BlockEntityRendererProvider.Context p_173683_)
```

**Parameters:**

- `p_173683_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(TheEndGatewayBlockEntity p_112613_, float p_112614_, PoseStack p_112615_, MultiBufferSource p_112616_, int p_112617_, int p_112618_)
```

**Parameters:**

- `p_112613_` (`TheEndGatewayBlockEntity`)
- `p_112614_` (`float`)
- `p_112615_` (`PoseStack`)
- `p_112616_` (`MultiBufferSource`)
- `p_112617_` (`int`)
- `p_112618_` (`int`)

**Returns:** `public void`

### getOffsetUp

```java
protected float getOffsetUp()
```

**Returns:** `float`

### getOffsetDown

```java
protected float getOffsetDown()
```

**Returns:** `float`

### renderType

```java
protected RenderType renderType()
```

**Returns:** `RenderType`

### getViewDistance

```java
public int getViewDistance()
```

**Returns:** `int`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(TheEndGatewayBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`TheEndGatewayBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`
