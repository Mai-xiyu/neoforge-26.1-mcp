# GameTestDebugRenderer

**Package:** `net.minecraft.client.renderer.debug`
**Type:** class
**Implements:** `DebugRenderer.SimpleDebugRenderer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `color` | `int` |  |
| `text` | `String` |  |
| `removeAtTime` | `long` |  |

## Methods

### addMarker

```java
public void addMarker(BlockPos p_113525_, int p_113526_, String p_113527_, int p_113528_)
```

**Parameters:**

- `p_113525_` (`BlockPos`)
- `p_113526_` (`int`)
- `p_113527_` (`String`)
- `p_113528_` (`int`)

**Returns:** `public void`

### clear

```java
public void clear()
```

### render

```java
public void render(PoseStack p_113519_, MultiBufferSource p_113520_, double p_113521_, double p_113522_, double p_113523_)
```

**Parameters:**

- `p_113519_` (`PoseStack`)
- `p_113520_` (`MultiBufferSource`)
- `p_113521_` (`double`)
- `p_113522_` (`double`)
- `p_113523_` (`double`)

### renderMarker

```java
private void renderMarker(PoseStack p_270274_, MultiBufferSource p_271018_, BlockPos p_270918_, GameTestDebugRenderer.Marker p_270827_)
```

**Parameters:**

- `p_270274_` (`PoseStack`)
- `p_271018_` (`MultiBufferSource`)
- `p_270918_` (`BlockPos`)
- `p_270827_` (`GameTestDebugRenderer.Marker`)

**Returns:** `private void`

### Marker

```java
public Marker(int p_113536_, String p_113537_, long p_113538_)
```

**Parameters:**

- `p_113536_` (`int`)
- `p_113537_` (`String`)
- `p_113538_` (`long`)

**Returns:** `public`

### getR

```java
public float getR()
```

**Returns:** `public float`

### getG

```java
public float getG()
```

**Returns:** `public float`

### getB

```java
public float getB()
```

**Returns:** `public float`

### getA

```java
public float getA()
```

**Returns:** `public float`
