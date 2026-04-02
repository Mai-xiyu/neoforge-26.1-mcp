# BedRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<BedBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BedRenderer

```java
public BedRenderer(BlockEntityRendererProvider.Context p_173540_)
```

**Parameters:**

- `p_173540_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### createHeadLayer

```java
public static LayerDefinition createHeadLayer()
```

**Returns:** `public static LayerDefinition`

### createFootLayer

```java
public static LayerDefinition createFootLayer()
```

**Returns:** `public static LayerDefinition`

### render

```java
public void render(BedBlockEntity p_112205_, float p_112206_, PoseStack p_112207_, MultiBufferSource p_112208_, int p_112209_, int p_112210_)
```

**Parameters:**

- `p_112205_` (`BedBlockEntity`)
- `p_112206_` (`float`)
- `p_112207_` (`PoseStack`)
- `p_112208_` (`MultiBufferSource`)
- `p_112209_` (`int`)
- `p_112210_` (`int`)

**Returns:** `public void`

### renderPiece

```java
private void renderPiece(PoseStack p_173542_, MultiBufferSource p_173543_, ModelPart p_173544_, Direction p_173545_, Material p_173546_, int p_173547_, int p_173548_, boolean p_173549_)
```

**Parameters:**

- `p_173542_` (`PoseStack`)
- `p_173543_` (`MultiBufferSource`)
- `p_173544_` (`ModelPart`)
- `p_173545_` (`Direction`)
- `p_173546_` (`Material`)
- `p_173547_` (`int`)
- `p_173548_` (`int`)
- `p_173549_` (`boolean`)

**Returns:** `private void`
