# BlockEntityRenderDispatcher

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `ResourceManagerReloadListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `level` | `Level` |  |
| `camera` | `Camera` |  |
| `cameraHitResult` | `HitResult` |  |

## Methods

### BlockEntityRenderDispatcher

```java
public BlockEntityRenderDispatcher(Font p_234432_, EntityModelSet p_234433_, Supplier<BlockRenderDispatcher> p_234434_, Supplier<ItemRenderer> p_234435_, Supplier<EntityRenderDispatcher> p_234436_)
```

**Parameters:**

- `p_234432_` (`Font`)
- `p_234433_` (`EntityModelSet`)
- `p_234434_` (`Supplier<BlockRenderDispatcher>`)
- `p_234435_` (`Supplier<ItemRenderer>`)
- `p_234436_` (`Supplier<EntityRenderDispatcher>`)

**Returns:** `public`

### getRenderer

```java
public <E extends BlockEntity> BlockEntityRenderer<E> getRenderer(E p_112266_)
```

**Parameters:**

- `p_112266_` (`E`)

**Returns:** `BlockEntityRenderer<E>`

### prepare

```java
public void prepare(Level p_173565_, Camera p_173566_, HitResult p_173567_)
```

**Parameters:**

- `p_173565_` (`Level`)
- `p_173566_` (`Camera`)
- `p_173567_` (`HitResult`)

**Returns:** `public void`

### render

```java
<E extends BlockEntity> public <E extends BlockEntity> void render(E p_112268_, float p_112269_, PoseStack p_112270_, MultiBufferSource p_112271_)
```

**Parameters:**

- `p_112268_` (`E`)
- `p_112269_` (`float`)
- `p_112270_` (`PoseStack`)
- `p_112271_` (`MultiBufferSource`)

**Returns:** `public <E extends BlockEntity> void`

### setupAndRender

```java
<T extends BlockEntity> private static <T extends BlockEntity> void setupAndRender(BlockEntityRenderer<T> p_112285_, T p_112286_, float p_112287_, PoseStack p_112288_, MultiBufferSource p_112289_)
```

**Parameters:**

- `p_112285_` (`BlockEntityRenderer<T>`)
- `p_112286_` (`T`)
- `p_112287_` (`float`)
- `p_112288_` (`PoseStack`)
- `p_112289_` (`MultiBufferSource`)

**Returns:** `private static <T extends BlockEntity> void`

### renderItem

```java
<E extends BlockEntity> public <E extends BlockEntity> boolean renderItem(E p_112273_, PoseStack p_112274_, MultiBufferSource p_112275_, int p_112276_, int p_112277_)
```

**Parameters:**

- `p_112273_` (`E`)
- `p_112274_` (`PoseStack`)
- `p_112275_` (`MultiBufferSource`)
- `p_112276_` (`int`)
- `p_112277_` (`int`)

**Returns:** `public <E extends BlockEntity> boolean`

### tryRender

```java
private static void tryRender(BlockEntity p_112279_, Runnable p_112280_)
```

**Parameters:**

- `p_112279_` (`BlockEntity`)
- `p_112280_` (`Runnable`)

**Returns:** `private static void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### setLevel

```java
public void setLevel(Level p_112258_)
```

**Parameters:**

- `p_112258_` (`Level`)

**Returns:** `public void`

### onResourceManagerReload

```java
public void onResourceManagerReload(ResourceManager p_173563_)
```

**Parameters:**

- `p_173563_` (`ResourceManager`)
