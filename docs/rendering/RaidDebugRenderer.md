# RaidDebugRenderer

**Package:** `net.minecraft.client.renderer.debug`
**Type:** class
**Implements:** `DebugRenderer.SimpleDebugRenderer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RaidDebugRenderer

```java
public RaidDebugRenderer(Minecraft p_113650_)
```

**Parameters:**

- `p_113650_` (`Minecraft`)

**Returns:** `public`

### setRaidCenters

```java
public void setRaidCenters(Collection<BlockPos> p_113664_)
```

**Parameters:**

- `p_113664_` (`Collection<BlockPos>`)

**Returns:** `public void`

### render

```java
public void render(PoseStack p_113652_, MultiBufferSource p_113653_, double p_113654_, double p_113655_, double p_113656_)
```

**Parameters:**

- `p_113652_` (`PoseStack`)
- `p_113653_` (`MultiBufferSource`)
- `p_113654_` (`double`)
- `p_113655_` (`double`)
- `p_113656_` (`double`)

### highlightRaidCenter

```java
 highlightRaidCenter()
```

**Returns:** ``

### highlightRaidCenter

```java
private static void highlightRaidCenter(PoseStack p_270914_, MultiBufferSource p_270517_, BlockPos p_270208_)
```

**Parameters:**

- `p_270914_` (`PoseStack`)
- `p_270517_` (`MultiBufferSource`)
- `p_270208_` (`BlockPos`)

**Returns:** `private static void`

### renderTextOverBlock

```java
 renderTextOverBlock("Raid center")
```

**Parameters:**

- `center"` (`"Raid`)

**Returns:** ``

### renderTextOverBlock

```java
private static void renderTextOverBlock(PoseStack p_270092_, MultiBufferSource p_270518_, String p_270237_, BlockPos p_270941_, int p_270307_)
```

**Parameters:**

- `p_270092_` (`PoseStack`)
- `p_270518_` (`MultiBufferSource`)
- `p_270237_` (`String`)
- `p_270941_` (`BlockPos`)
- `p_270307_` (`int`)

**Returns:** `private static void`

### getCamera

```java
private Camera getCamera()
```

**Returns:** `private Camera`
