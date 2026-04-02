# HumanoidArmorLayer

**Package:** `net.minecraft.client.renderer.entity.layers`
**Type:** class<T extends LivingEntity, M extends HumanoidModel<T>, A extends HumanoidModel<T>> extends RenderLayer<T, M>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### HumanoidArmorLayer

```java
public HumanoidArmorLayer(RenderLayerParent<T, M> p_267286_, A p_267110_, A p_267150_, ModelManager p_267238_)
```

**Parameters:**

- `p_267286_` (`RenderLayerParent<T, M>`)
- `p_267110_` (`A`)
- `p_267150_` (`A`)
- `p_267238_` (`ModelManager`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(PoseStack p_117096_, MultiBufferSource p_117097_, int p_117098_, T p_117099_, float p_117100_, float p_117101_, float p_117102_, float p_117103_, float p_117104_, float p_117105_)
```

**Parameters:**

- `p_117096_` (`PoseStack`)
- `p_117097_` (`MultiBufferSource`)
- `p_117098_` (`int`)
- `p_117099_` (`T`)
- `p_117100_` (`float`)
- `p_117101_` (`float`)
- `p_117102_` (`float`)
- `p_117103_` (`float`)
- `p_117104_` (`float`)
- `p_117105_` (`float`)

**Returns:** `public void`

### renderArmorPiece

```java
private void renderArmorPiece(PoseStack p_117119_, MultiBufferSource p_117120_, T p_117121_, EquipmentSlot p_117122_, int p_117123_, A p_117124_, float limbSwing, float limbSwingAmount, float partialTick, float ageInTicks, float netHeadYaw, float headPitch)
```

**Parameters:**

- `p_117119_` (`PoseStack`)
- `p_117120_` (`MultiBufferSource`)
- `p_117121_` (`T`)
- `p_117122_` (`EquipmentSlot`)
- `p_117123_` (`int`)
- `p_117124_` (`A`)
- `limbSwing` (`float`)
- `limbSwingAmount` (`float`)
- `partialTick` (`float`)
- `ageInTicks` (`float`)
- `netHeadYaw` (`float`)
- `headPitch` (`float`)

**Returns:** `private void`

### setPartVisibility

```java
protected void setPartVisibility(A p_117126_, EquipmentSlot p_117127_)
```

**Parameters:**

- `p_117126_` (`A`)
- `p_117127_` (`EquipmentSlot`)

**Returns:** `protected void`

### renderModel

```java
private void renderModel(PoseStack p_289664_, MultiBufferSource p_289689_, int p_289681_, A p_289658_, int p_350798_, ResourceLocation p_324344_)
```

**Parameters:**

- `p_289664_` (`PoseStack`)
- `p_289689_` (`MultiBufferSource`)
- `p_289681_` (`int`)
- `p_289658_` (`A`)
- `p_350798_` (`int`)
- `p_324344_` (`ResourceLocation`)

**Returns:** `private void`

### renderModel

```java
private void renderModel(PoseStack p_289664_, MultiBufferSource p_289689_, int p_289681_, net.minecraft.client.model.Model p_289658_, int p_350798_, ResourceLocation p_324344_)
```

**Parameters:**

- `p_289664_` (`PoseStack`)
- `p_289689_` (`MultiBufferSource`)
- `p_289681_` (`int`)
- `p_289658_` (`net.minecraft.client.model.Model`)
- `p_350798_` (`int`)
- `p_324344_` (`ResourceLocation`)

**Returns:** `private void`

### renderTrim

```java
private void renderTrim(Holder<ArmorMaterial> p_323506_, PoseStack p_289687_, MultiBufferSource p_289643_, int p_289683_, ArmorTrim p_289692_, A p_289663_, boolean p_289651_)
```

**Parameters:**

- `p_323506_` (`Holder<ArmorMaterial>`)
- `p_289687_` (`PoseStack`)
- `p_289643_` (`MultiBufferSource`)
- `p_289683_` (`int`)
- `p_289692_` (`ArmorTrim`)
- `p_289663_` (`A`)
- `p_289651_` (`boolean`)

**Returns:** `private void`

### renderTrim

```java
private void renderTrim(Holder<ArmorMaterial> p_323506_, PoseStack p_289687_, MultiBufferSource p_289643_, int p_289683_, ArmorTrim p_289692_, net.minecraft.client.model.Model p_289663_, boolean p_289651_)
```

**Parameters:**

- `p_323506_` (`Holder<ArmorMaterial>`)
- `p_289687_` (`PoseStack`)
- `p_289643_` (`MultiBufferSource`)
- `p_289683_` (`int`)
- `p_289692_` (`ArmorTrim`)
- `p_289663_` (`net.minecraft.client.model.Model`)
- `p_289651_` (`boolean`)

**Returns:** `private void`

### renderGlint

```java
private void renderGlint(PoseStack p_289673_, MultiBufferSource p_289654_, int p_289649_, A p_289659_)
```

**Parameters:**

- `p_289673_` (`PoseStack`)
- `p_289654_` (`MultiBufferSource`)
- `p_289649_` (`int`)
- `p_289659_` (`A`)

**Returns:** `private void`

### renderGlint

```java
private void renderGlint(PoseStack p_289673_, MultiBufferSource p_289654_, int p_289649_, net.minecraft.client.model.Model p_289659_)
```

**Parameters:**

- `p_289673_` (`PoseStack`)
- `p_289654_` (`MultiBufferSource`)
- `p_289649_` (`int`)
- `p_289659_` (`net.minecraft.client.model.Model`)

**Returns:** `private void`

### getArmorModel

```java
private A getArmorModel(EquipmentSlot p_117079_)
```

**Parameters:**

- `p_117079_` (`EquipmentSlot`)

**Returns:** `private A`

### usesInnerModel

```java
private boolean usesInnerModel(EquipmentSlot p_117129_)
```

**Parameters:**

- `p_117129_` (`EquipmentSlot`)

**Returns:** `private boolean`

### getArmorModelHook

```java
protected net.minecraft.client.model.Model getArmorModelHook(T entity, ItemStack itemStack, EquipmentSlot slot, A model)
```

**Parameters:**

- `entity` (`T`)
- `itemStack` (`ItemStack`)
- `slot` (`EquipmentSlot`)
- `model` (`A`)

**Returns:** `net.minecraft.client.model.Model`
