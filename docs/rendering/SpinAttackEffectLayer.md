# SpinAttackEffectLayer

**Package:** `net.minecraft.client.renderer.entity.layers`
**Type:** class<T extends LivingEntity> extends RenderLayer<T, PlayerModel<T>>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TEXTURE` | `ResourceLocation` |  |
| `BOX` | `String` |  |

## Methods

### SpinAttackEffectLayer

```java
public SpinAttackEffectLayer(RenderLayerParent<T, PlayerModel<T>> p_174540_, EntityModelSet p_174541_)
```

**Parameters:**

- `p_174540_` (`RenderLayerParent<T, PlayerModel<T>>`)
- `p_174541_` (`EntityModelSet`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createLayer

```java
public static LayerDefinition createLayer()
```

**Returns:** `public static LayerDefinition`

### render

```java
public void render(PoseStack p_117526_, MultiBufferSource p_117527_, int p_117528_, T p_117529_, float p_117530_, float p_117531_, float p_117532_, float p_117533_, float p_117534_, float p_117535_)
```

**Parameters:**

- `p_117526_` (`PoseStack`)
- `p_117527_` (`MultiBufferSource`)
- `p_117528_` (`int`)
- `p_117529_` (`T`)
- `p_117530_` (`float`)
- `p_117531_` (`float`)
- `p_117532_` (`float`)
- `p_117533_` (`float`)
- `p_117534_` (`float`)
- `p_117535_` (`float`)

**Returns:** `public void`
