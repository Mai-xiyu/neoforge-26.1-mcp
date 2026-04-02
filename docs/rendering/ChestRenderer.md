# ChestRenderer

**Package:** `net.minecraft.client.renderer.blockentity`
**Type:** class<T extends BlockEntity & LidBlockEntity> implements BlockEntityRenderer<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ChestRenderer

```java
public ChestRenderer(BlockEntityRendererProvider.Context p_173607_)
```

**Parameters:**

- `p_173607_` (`BlockEntityRendererProvider.Context`)

**Returns:** `public`

### createSingleBodyLayer

```java
public static LayerDefinition createSingleBodyLayer()
```

**Returns:** `public static LayerDefinition`

### createDoubleBodyRightLayer

```java
public static LayerDefinition createDoubleBodyRightLayer()
```

**Returns:** `public static LayerDefinition`

### createDoubleBodyLeftLayer

```java
public static LayerDefinition createDoubleBodyLeftLayer()
```

**Returns:** `public static LayerDefinition`

### render

```java
public void render(T p_112363_, float p_112364_, PoseStack p_112365_, MultiBufferSource p_112366_, int p_112367_, int p_112368_)
```

**Parameters:**

- `p_112363_` (`T`)
- `p_112364_` (`float`)
- `p_112365_` (`PoseStack`)
- `p_112366_` (`MultiBufferSource`)
- `p_112367_` (`int`)
- `p_112368_` (`int`)

### render

```java
private void render(PoseStack p_112370_, VertexConsumer p_112371_, ModelPart p_112372_, ModelPart p_112373_, ModelPart p_112374_, float p_112375_, int p_112376_, int p_112377_)
```

**Parameters:**

- `p_112370_` (`PoseStack`)
- `p_112371_` (`VertexConsumer`)
- `p_112372_` (`ModelPart`)
- `p_112373_` (`ModelPart`)
- `p_112374_` (`ModelPart`)
- `p_112375_` (`float`)
- `p_112376_` (`int`)
- `p_112377_` (`int`)

**Returns:** `private void`

### getMaterial

```java
protected Material getMaterial(T blockEntity, ChestType chestType)
```

**Parameters:**

- `blockEntity` (`T`)
- `chestType` (`ChestType`)

**Returns:** `protected Material`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(T blockEntity)
```

**Parameters:**

- `blockEntity` (`T`)

**Returns:** `net.minecraft.world.phys.AABB`
