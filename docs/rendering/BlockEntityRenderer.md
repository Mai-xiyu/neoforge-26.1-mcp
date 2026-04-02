# BlockEntityRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** interface<T extends BlockEntity> extends net.neoforged.neoforge.client.extensions.IBlockEntityRendererExtension<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### render

```java
void render(T p_112307_, float p_112308_, PoseStack p_112309_, MultiBufferSource p_112310_, int p_112311_, int p_112312_)
```

**Parameters:**

- `p_112307_` (`T`)
- `p_112308_` (`float`)
- `p_112309_` (`PoseStack`)
- `p_112310_` (`MultiBufferSource`)
- `p_112311_` (`int`)
- `p_112312_` (`int`)

### shouldRenderOffScreen

```java
default boolean shouldRenderOffScreen(T p_112306_)
```

**Parameters:**

- `p_112306_` (`T`)

**Returns:** `default boolean`

### getViewDistance

```java
default int getViewDistance()
```

**Returns:** `default int`

### shouldRender

```java
default boolean shouldRender(T p_173568_, Vec3 p_173569_)
```

**Parameters:**

- `p_173568_` (`T`)
- `p_173569_` (`Vec3`)

**Returns:** `default boolean`
