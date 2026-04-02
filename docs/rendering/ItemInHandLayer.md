# ItemInHandLayer

**Package:** `net.minecraft.client.renderer.entity.layers`
**Type:** class<T extends LivingEntity, M extends EntityModel<T> & ArmedModel> extends RenderLayer<T, M>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ItemInHandLayer

```java
public ItemInHandLayer(RenderLayerParent<T, M> p_234846_, ItemInHandRenderer p_234847_)
```

**Parameters:**

- `p_234846_` (`RenderLayerParent<T, M>`)
- `p_234847_` (`ItemInHandRenderer`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(PoseStack p_117204_, MultiBufferSource p_117205_, int p_117206_, T p_117207_, float p_117208_, float p_117209_, float p_117210_, float p_117211_, float p_117212_, float p_117213_)
```

**Parameters:**

- `p_117204_` (`PoseStack`)
- `p_117205_` (`MultiBufferSource`)
- `p_117206_` (`int`)
- `p_117207_` (`T`)
- `p_117208_` (`float`)
- `p_117209_` (`float`)
- `p_117210_` (`float`)
- `p_117211_` (`float`)
- `p_117212_` (`float`)
- `p_117213_` (`float`)

**Returns:** `public void`

### renderArmWithItem

```java
protected void renderArmWithItem(LivingEntity p_117185_, ItemStack p_117186_, ItemDisplayContext p_270970_, HumanoidArm p_117188_, PoseStack p_117189_, MultiBufferSource p_117190_, int p_117191_)
```

**Parameters:**

- `p_117185_` (`LivingEntity`)
- `p_117186_` (`ItemStack`)
- `p_270970_` (`ItemDisplayContext`)
- `p_117188_` (`HumanoidArm`)
- `p_117189_` (`PoseStack`)
- `p_117190_` (`MultiBufferSource`)
- `p_117191_` (`int`)

**Returns:** `protected void`
