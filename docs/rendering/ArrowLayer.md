# ArrowLayer

**Package:** `net.minecraft.client.renderer.entity.layers`
**Type:** class<T extends LivingEntity, M extends PlayerModel<T>> extends StuckInBodyLayer<T, M>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ArrowLayer

```java
public ArrowLayer(EntityRendererProvider.Context p_174465_, LivingEntityRenderer<T, M> p_174466_)
```

**Parameters:**

- `p_174465_` (`EntityRendererProvider.Context`)
- `p_174466_` (`LivingEntityRenderer<T, M>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### numStuck

```java
protected int numStuck(T p_116567_)
```

**Parameters:**

- `p_116567_` (`T`)

**Returns:** `int`

### renderStuckItem

```java
protected void renderStuckItem(PoseStack p_116569_, MultiBufferSource p_116570_, int p_116571_, Entity p_116572_, float p_116573_, float p_116574_, float p_116575_, float p_116576_)
```

**Parameters:**

- `p_116569_` (`PoseStack`)
- `p_116570_` (`MultiBufferSource`)
- `p_116571_` (`int`)
- `p_116572_` (`Entity`)
- `p_116573_` (`float`)
- `p_116574_` (`float`)
- `p_116575_` (`float`)
- `p_116576_` (`float`)
