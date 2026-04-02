# SupportBlockRenderer

**Package:** `net.minecraft.client.renderer.debug`
**Type:** class
**Implements:** `DebugRenderer.SimpleDebugRenderer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SupportBlockRenderer

```java
public SupportBlockRenderer(Minecraft p_286424_)
```

**Parameters:**

- `p_286424_` (`Minecraft`)

**Returns:** `public`

### render

```java
public void render(PoseStack p_286297_, MultiBufferSource p_286436_, double p_286291_, double p_286388_, double p_286330_)
```

**Parameters:**

- `p_286297_` (`PoseStack`)
- `p_286436_` (`MultiBufferSource`)
- `p_286291_` (`double`)
- `p_286388_` (`double`)
- `p_286330_` (`double`)

### drawHighlights

```java
private void drawHighlights(PoseStack p_286525_, MultiBufferSource p_286495_, double p_286696_, double p_286417_, double p_286386_, Entity p_286273_, DoubleSupplier p_286458_, float p_286487_, float p_286710_, float p_286793_)
```

**Parameters:**

- `p_286525_` (`PoseStack`)
- `p_286495_` (`MultiBufferSource`)
- `p_286696_` (`double`)
- `p_286417_` (`double`)
- `p_286386_` (`double`)
- `p_286273_` (`Entity`)
- `p_286458_` (`DoubleSupplier`)
- `p_286487_` (`float`)
- `p_286710_` (`float`)
- `p_286793_` (`float`)

**Returns:** `private void`

### getBias

```java
private double getBias(Entity p_286713_)
```

**Parameters:**

- `p_286713_` (`Entity`)

**Returns:** `private double`

### highlightPosition

```java
private void highlightPosition(BlockPos p_286268_, PoseStack p_286592_, double p_286463_, double p_286552_, double p_286660_, MultiBufferSource p_286314_, double p_286880_, float p_286918_, float p_286304_, float p_286672_)
```

**Parameters:**

- `p_286268_` (`BlockPos`)
- `p_286592_` (`PoseStack`)
- `p_286463_` (`double`)
- `p_286552_` (`double`)
- `p_286660_` (`double`)
- `p_286314_` (`MultiBufferSource`)
- `p_286880_` (`double`)
- `p_286918_` (`float`)
- `p_286304_` (`float`)
- `p_286672_` (`float`)

**Returns:** `private void`
