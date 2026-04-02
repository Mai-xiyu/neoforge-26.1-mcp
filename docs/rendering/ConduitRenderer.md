# ConduitRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class
**Implements:** `BlockEntityRenderer<ConduitBlockEntity>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SHELL_TEXTURE` | `Material` |  |
| `ACTIVE_SHELL_TEXTURE` | `Material` |  |
| `WIND_TEXTURE` | `Material` |  |
| `VERTICAL_WIND_TEXTURE` | `Material` |  |
| `OPEN_EYE_TEXTURE` | `Material` |  |
| `CLOSED_EYE_TEXTURE` | `Material` |  |

## Methods

### ConduitRenderer

```java
public ConduitRenderer(BlockEntityRendererProvider.Context p_173613_)
```

**Parameters:**

- `p_173613_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### createEyeLayer

```java
public static LayerDefinition createEyeLayer()
```

**Returns:** `public static LayerDefinition`

### createWindLayer

```java
public static LayerDefinition createWindLayer()
```

**Returns:** `public static LayerDefinition`

### createShellLayer

```java
public static LayerDefinition createShellLayer()
```

**Returns:** `public static LayerDefinition`

### createCageLayer

```java
public static LayerDefinition createCageLayer()
```

**Returns:** `public static LayerDefinition`

### render

```java
public void render(ConduitBlockEntity p_112399_, float p_112400_, PoseStack p_112401_, MultiBufferSource p_112402_, int p_112403_, int p_112404_)
```

**Parameters:**

- `p_112399_` (`ConduitBlockEntity`)
- `p_112400_` (`float`)
- `p_112401_` (`PoseStack`)
- `p_112402_` (`MultiBufferSource`)
- `p_112403_` (`int`)
- `p_112404_` (`int`)

**Returns:** `public void`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(ConduitBlockEntity blockEntity)
```

**Parameters:**

- `blockEntity` (`ConduitBlockEntity`)

**Returns:** `net.minecraft.world.phys.AABB`
