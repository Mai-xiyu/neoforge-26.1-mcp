# PlayerItemInHandLayer

**Package:** `net.minecraft.client.renderer.entity.layers`
**Type:** class<T extends Player, M extends EntityModel<T> & ArmedModel & HeadedModel> extends ItemInHandLayer<T, M>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PlayerItemInHandLayer

```java
public PlayerItemInHandLayer(RenderLayerParent<T, M> p_234866_, ItemInHandRenderer p_234867_)
```

**Parameters:**

- `p_234866_` (`RenderLayerParent<T, M>`)
- `p_234867_` (`ItemInHandRenderer`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### renderArmWithItem

```java
protected void renderArmWithItem(LivingEntity p_270884_, ItemStack p_270379_, ItemDisplayContext p_270607_, HumanoidArm p_270324_, PoseStack p_270124_, MultiBufferSource p_270414_, int p_270295_)
```

**Parameters:**

- `p_270884_` (`LivingEntity`)
- `p_270379_` (`ItemStack`)
- `p_270607_` (`ItemDisplayContext`)
- `p_270324_` (`HumanoidArm`)
- `p_270124_` (`PoseStack`)
- `p_270414_` (`MultiBufferSource`)
- `p_270295_` (`int`)

### renderArmWithSpyglass

```java
private void renderArmWithSpyglass(LivingEntity p_174518_, ItemStack p_174519_, HumanoidArm p_174520_, PoseStack p_174521_, MultiBufferSource p_174522_, int p_174523_)
```

**Parameters:**

- `p_174518_` (`LivingEntity`)
- `p_174519_` (`ItemStack`)
- `p_174520_` (`HumanoidArm`)
- `p_174521_` (`PoseStack`)
- `p_174522_` (`MultiBufferSource`)
- `p_174523_` (`int`)

**Returns:** `private void`
