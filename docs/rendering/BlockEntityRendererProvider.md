# BlockEntityRendererProvider

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** interface<T extends BlockEntity>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`, `@FunctionalInterface`

## Methods

### create

```java
BlockEntityRenderer<T> create(BlockEntityRendererProvider.Context p_173571_)
```

**Parameters:**

- `p_173571_` (`BlockEntityRendererProvider.Context`)

**Returns:** `BlockEntityRenderer<T>`

### Context

```java
public Context(BlockEntityRenderDispatcher p_234440_, BlockRenderDispatcher p_234441_, ItemRenderer p_234442_, EntityRenderDispatcher p_234443_, EntityModelSet p_234444_, Font p_234445_)
```

**Parameters:**

- `p_234440_` (`BlockEntityRenderDispatcher`)
- `p_234441_` (`BlockRenderDispatcher`)
- `p_234442_` (`ItemRenderer`)
- `p_234443_` (`EntityRenderDispatcher`)
- `p_234444_` (`EntityModelSet`)
- `p_234445_` (`Font`)

**Returns:** `public`

### getBlockEntityRenderDispatcher

```java
public BlockEntityRenderDispatcher getBlockEntityRenderDispatcher()
```

**Returns:** `public BlockEntityRenderDispatcher`

### getBlockRenderDispatcher

```java
public BlockRenderDispatcher getBlockRenderDispatcher()
```

**Returns:** `public BlockRenderDispatcher`

### getEntityRenderer

```java
public EntityRenderDispatcher getEntityRenderer()
```

**Returns:** `public EntityRenderDispatcher`

### getItemRenderer

```java
public ItemRenderer getItemRenderer()
```

**Returns:** `public ItemRenderer`

### getModelSet

```java
public EntityModelSet getModelSet()
```

**Returns:** `public EntityModelSet`

### bakeLayer

```java
public ModelPart bakeLayer(ModelLayerLocation p_173583_)
```

**Parameters:**

- `p_173583_` (`ModelLayerLocation`)

**Returns:** `public ModelPart`

### getFont

```java
public Font getFont()
```

**Returns:** `public Font`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Context` | class |  |
