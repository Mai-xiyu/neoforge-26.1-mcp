# DebugRenderer

**Package:** `net.minecraft.client.renderer.debug`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `pathfindingRenderer` | `PathfindingRenderer` |  |
| `waterDebugRenderer` | `DebugRenderer.SimpleDebugRenderer` |  |
| `chunkBorderRenderer` | `DebugRenderer.SimpleDebugRenderer` |  |
| `heightMapRenderer` | `DebugRenderer.SimpleDebugRenderer` |  |
| `collisionBoxRenderer` | `DebugRenderer.SimpleDebugRenderer` |  |
| `supportBlockRenderer` | `DebugRenderer.SimpleDebugRenderer` |  |
| `neighborsUpdateRenderer` | `DebugRenderer.SimpleDebugRenderer` |  |
| `structureRenderer` | `StructureRenderer` |  |
| `lightDebugRenderer` | `DebugRenderer.SimpleDebugRenderer` |  |
| `worldGenAttemptRenderer` | `DebugRenderer.SimpleDebugRenderer` |  |
| `solidFaceRenderer` | `DebugRenderer.SimpleDebugRenderer` |  |
| `chunkRenderer` | `DebugRenderer.SimpleDebugRenderer` |  |
| `brainDebugRenderer` | `BrainDebugRenderer` |  |
| `villageSectionsDebugRenderer` | `VillageSectionsDebugRenderer` |  |
| `beeDebugRenderer` | `BeeDebugRenderer` |  |
| `raidDebugRenderer` | `RaidDebugRenderer` |  |
| `goalSelectorRenderer` | `GoalSelectorDebugRenderer` |  |
| `gameTestDebugRenderer` | `GameTestDebugRenderer` |  |
| `gameEventListenerRenderer` | `GameEventListenerRenderer` |  |
| `skyLightSectionDebugRenderer` | `LightSectionDebugRenderer` |  |
| `breezeDebugRenderer` | `BreezeDebugRenderer` |  |

## Methods

### DebugRenderer

```java
public DebugRenderer(Minecraft p_113433_)
```

**Parameters:**

- `p_113433_` (`Minecraft`)

**Returns:** `public`

### clear

```java
public void clear()
```

**Returns:** `public void`

### switchRenderChunkborder

```java
public boolean switchRenderChunkborder()
```

**Returns:** `public boolean`

### render

```java
public void render(PoseStack p_113458_, MultiBufferSource.BufferSource p_113459_, double p_113460_, double p_113461_, double p_113462_)
```

**Parameters:**

- `p_113458_` (`PoseStack`)
- `p_113459_` (`MultiBufferSource.BufferSource`)
- `p_113460_` (`double`)
- `p_113461_` (`double`)
- `p_113462_` (`double`)

**Returns:** `public void`

### getTargetedEntity

```java
public static Optional<Entity> getTargetedEntity(Entity p_113449_, int p_113450_)
```

**Parameters:**

- `p_113449_` (`Entity`)
- `p_113450_` (`int`)

**Returns:** `public static Optional<Entity>`

### renderFilledUnitCube

```java
public static void renderFilledUnitCube(PoseStack p_308923_, MultiBufferSource p_309126_, BlockPos p_309015_, float p_308976_, float p_308978_, float p_309148_, float p_309159_)
```

**Parameters:**

- `p_308923_` (`PoseStack`)
- `p_309126_` (`MultiBufferSource`)
- `p_309015_` (`BlockPos`)
- `p_308976_` (`float`)
- `p_308978_` (`float`)
- `p_309148_` (`float`)
- `p_309159_` (`float`)

**Returns:** `public static void`

### renderFilledBox

```java
public static void renderFilledBox(PoseStack p_270169_, MultiBufferSource p_270417_, BlockPos p_270790_, BlockPos p_270610_, float p_270515_, float p_270494_, float p_270869_, float p_270844_)
```

**Parameters:**

- `p_270169_` (`PoseStack`)
- `p_270417_` (`MultiBufferSource`)
- `p_270790_` (`BlockPos`)
- `p_270610_` (`BlockPos`)
- `p_270515_` (`float`)
- `p_270494_` (`float`)
- `p_270869_` (`float`)
- `p_270844_` (`float`)

**Returns:** `public static void`

### renderFilledBox

```java
 renderFilledBox()
```

**Returns:** ``

### renderFilledBox

```java
public static void renderFilledBox(PoseStack p_270877_, MultiBufferSource p_270925_, BlockPos p_270480_, float p_270569_, float p_270315_, float p_270182_, float p_270862_, float p_270973_)
```

**Parameters:**

- `p_270877_` (`PoseStack`)
- `p_270925_` (`MultiBufferSource`)
- `p_270480_` (`BlockPos`)
- `p_270569_` (`float`)
- `p_270315_` (`float`)
- `p_270182_` (`float`)
- `p_270862_` (`float`)
- `p_270973_` (`float`)

**Returns:** `public static void`

### renderFilledBox

```java
 renderFilledBox()
```

**Returns:** ``

### renderFilledBox

```java
public static void renderFilledBox(PoseStack p_271017_, MultiBufferSource p_270356_, AABB p_270833_, float p_270850_, float p_270249_, float p_270654_, float p_270476_)
```

**Parameters:**

- `p_271017_` (`PoseStack`)
- `p_270356_` (`MultiBufferSource`)
- `p_270833_` (`AABB`)
- `p_270850_` (`float`)
- `p_270249_` (`float`)
- `p_270654_` (`float`)
- `p_270476_` (`float`)

**Returns:** `public static void`

### renderFilledBox

```java
 renderFilledBox()
```

**Returns:** ``

### renderFilledBox

```java
public static void renderFilledBox(PoseStack p_270616_, MultiBufferSource p_270769_, double p_270653_, double p_270967_, double p_270556_, double p_270724_, double p_270427_, double p_270138_, float p_270391_, float p_270093_, float p_270312_, float p_270567_)
```

**Parameters:**

- `p_270616_` (`PoseStack`)
- `p_270769_` (`MultiBufferSource`)
- `p_270653_` (`double`)
- `p_270967_` (`double`)
- `p_270556_` (`double`)
- `p_270724_` (`double`)
- `p_270427_` (`double`)
- `p_270138_` (`double`)
- `p_270391_` (`float`)
- `p_270093_` (`float`)
- `p_270312_` (`float`)
- `p_270567_` (`float`)

**Returns:** `public static void`

### renderFloatingText

```java
public static void renderFloatingText(PoseStack p_270671_, MultiBufferSource p_271023_, String p_270521_, int p_270729_, int p_270562_, int p_270828_, int p_270164_)
```

**Parameters:**

- `p_270671_` (`PoseStack`)
- `p_271023_` (`MultiBufferSource`)
- `p_270521_` (`String`)
- `p_270729_` (`int`)
- `p_270562_` (`int`)
- `p_270828_` (`int`)
- `p_270164_` (`int`)

**Returns:** `public static void`

### renderFloatingText

```java
public static void renderFloatingText(PoseStack p_270905_, MultiBufferSource p_270581_, String p_270305_, double p_270645_, double p_270746_, double p_270364_, int p_270977_)
```

**Parameters:**

- `p_270905_` (`PoseStack`)
- `p_270581_` (`MultiBufferSource`)
- `p_270305_` (`String`)
- `p_270645_` (`double`)
- `p_270746_` (`double`)
- `p_270364_` (`double`)
- `p_270977_` (`int`)

**Returns:** `public static void`

### renderFloatingText

```java
 renderFloatingText()
```

**Returns:** ``

### renderFloatingText

```java
public static void renderFloatingText(PoseStack p_270216_, MultiBufferSource p_270684_, String p_270564_, double p_270935_, double p_270856_, double p_270908_, int p_270180_, float p_270685_)
```

**Parameters:**

- `p_270216_` (`PoseStack`)
- `p_270684_` (`MultiBufferSource`)
- `p_270564_` (`String`)
- `p_270935_` (`double`)
- `p_270856_` (`double`)
- `p_270908_` (`double`)
- `p_270180_` (`int`)
- `p_270685_` (`float`)

**Returns:** `public static void`

### renderFloatingText

```java
 renderFloatingText()
```

**Returns:** ``

### renderFloatingText

```java
public static void renderFloatingText(PoseStack p_270649_, MultiBufferSource p_270695_, String p_270703_, double p_270942_, double p_270292_, double p_270885_, int p_270956_, float p_270657_, boolean p_270731_, float p_270825_, boolean p_270222_)
```

**Parameters:**

- `p_270649_` (`PoseStack`)
- `p_270695_` (`MultiBufferSource`)
- `p_270703_` (`String`)
- `p_270942_` (`double`)
- `p_270292_` (`double`)
- `p_270885_` (`double`)
- `p_270956_` (`int`)
- `p_270657_` (`float`)
- `p_270731_` (`boolean`)
- `p_270825_` (`float`)
- `p_270222_` (`boolean`)

**Returns:** `public static void`

### render

```java
void render(PoseStack p_113507_, MultiBufferSource p_113508_, double p_113509_, double p_113510_, double p_113511_)
```

**Parameters:**

- `p_113507_` (`PoseStack`)
- `p_113508_` (`MultiBufferSource`)
- `p_113509_` (`double`)
- `p_113510_` (`double`)
- `p_113511_` (`double`)

### clear

```java
default void clear()
```

**Returns:** `default void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SimpleDebugRenderer` | interface |  |
