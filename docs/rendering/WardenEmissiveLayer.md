# WardenEmissiveLayer

**Package:** `net.minecraft.client.renderer.entity.layers`
**Type:** class<T extends Warden, M extends WardenModel<T>> extends RenderLayer<T, M>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### WardenEmissiveLayer

```java
public WardenEmissiveLayer(RenderLayerParent<T, M> p_234885_, ResourceLocation p_234886_, WardenEmissiveLayer.AlphaFunction<T> p_234887_, WardenEmissiveLayer.DrawSelector<T, M> p_234888_)
```

**Parameters:**

- `p_234885_` (`RenderLayerParent<T, M>`)
- `p_234886_` (`ResourceLocation`)
- `p_234887_` (`WardenEmissiveLayer.AlphaFunction<T>`)
- `p_234888_` (`WardenEmissiveLayer.DrawSelector<T, M>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(PoseStack p_234902_, MultiBufferSource p_234903_, int p_234904_, T p_234905_, float p_234906_, float p_234907_, float p_234908_, float p_234909_, float p_234910_, float p_234911_)
```

**Parameters:**

- `p_234902_` (`PoseStack`)
- `p_234903_` (`MultiBufferSource`)
- `p_234904_` (`int`)
- `p_234905_` (`T`)
- `p_234906_` (`float`)
- `p_234907_` (`float`)
- `p_234908_` (`float`)
- `p_234909_` (`float`)
- `p_234910_` (`float`)
- `p_234911_` (`float`)

**Returns:** `public void`

### onlyDrawSelectedParts

```java
private void onlyDrawSelectedParts()
```

**Returns:** `private void`

### resetDrawForAllParts

```java
private void resetDrawForAllParts()
```

**Returns:** `private void`

### apply

```java
float apply(T p_234920_, float p_234921_, float p_234922_)
```

**Parameters:**

- `p_234920_` (`T`)
- `p_234921_` (`float`)
- `p_234922_` (`float`)

**Returns:** `float`

### getPartsToDraw

```java
List<ModelPart> getPartsToDraw(M p_234924_)
```

**Parameters:**

- `p_234924_` (`M`)

**Returns:** `List<ModelPart>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `AlphaFunction` | interface |  |
| `DrawSelector` | interface |  |
