# EntityRendererProvider

**Package:** `net.minecraft.client.renderer.entity`
**Type:** interface<T extends Entity>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`, `@FunctionalInterface`

## Methods

### create

```java
EntityRenderer<T> create(EntityRendererProvider.Context p_174010_)
```

**Parameters:**

- `p_174010_` (`EntityRendererProvider.Context`)

**Returns:** `EntityRenderer<T>`

### Context

```java
public Context(EntityRenderDispatcher p_234590_, ItemRenderer p_234591_, BlockRenderDispatcher p_234592_, ItemInHandRenderer p_234593_, ResourceManager p_234594_, EntityModelSet p_234595_, Font p_234596_)
```

**Parameters:**

- `p_234590_` (`EntityRenderDispatcher`)
- `p_234591_` (`ItemRenderer`)
- `p_234592_` (`BlockRenderDispatcher`)
- `p_234593_` (`ItemInHandRenderer`)
- `p_234594_` (`ResourceManager`)
- `p_234595_` (`EntityModelSet`)
- `p_234596_` (`Font`)

**Returns:** `public`

### getEntityRenderDispatcher

```java
public EntityRenderDispatcher getEntityRenderDispatcher()
```

**Returns:** `public EntityRenderDispatcher`

### getItemRenderer

```java
public ItemRenderer getItemRenderer()
```

**Returns:** `public ItemRenderer`

### getBlockRenderDispatcher

```java
public BlockRenderDispatcher getBlockRenderDispatcher()
```

**Returns:** `public BlockRenderDispatcher`

### getItemInHandRenderer

```java
public ItemInHandRenderer getItemInHandRenderer()
```

**Returns:** `public ItemInHandRenderer`

### getResourceManager

```java
public ResourceManager getResourceManager()
```

**Returns:** `public ResourceManager`

### getModelSet

```java
public EntityModelSet getModelSet()
```

**Returns:** `public EntityModelSet`

### getModelManager

```java
public ModelManager getModelManager()
```

**Returns:** `public ModelManager`

### bakeLayer

```java
public ModelPart bakeLayer(ModelLayerLocation p_174024_)
```

**Parameters:**

- `p_174024_` (`ModelLayerLocation`)

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
