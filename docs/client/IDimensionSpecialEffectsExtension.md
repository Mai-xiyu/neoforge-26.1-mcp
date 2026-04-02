# IDimensionSpecialEffectsExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Description

Extension interface for `DimensionSpecialEffects`.

## Methods

### self

```java
private DimensionSpecialEffects self()
```

**Returns:** `private DimensionSpecialEffects`

### renderClouds

```java
default boolean renderClouds(ClientLevel level, int ticks, float partialTick, PoseStack poseStack, double camX, double camY, double camZ, Matrix4f modelViewMatrix, Matrix4f projectionMatrix)
```

**Parameters:**

- `level` (`ClientLevel`)
- `ticks` (`int`)
- `partialTick` (`float`)
- `poseStack` (`PoseStack`)
- `camX` (`double`)
- `camY` (`double`)
- `camZ` (`double`)
- `modelViewMatrix` (`Matrix4f`)
- `projectionMatrix` (`Matrix4f`)

**Returns:** `boolean`

### renderSky

```java
default boolean renderSky(ClientLevel level, int ticks, float partialTick, Matrix4f modelViewMatrix, Camera camera, Matrix4f projectionMatrix, boolean isFoggy, Runnable setupFog)
```

**Parameters:**

- `level` (`ClientLevel`)
- `ticks` (`int`)
- `partialTick` (`float`)
- `modelViewMatrix` (`Matrix4f`)
- `camera` (`Camera`)
- `projectionMatrix` (`Matrix4f`)
- `isFoggy` (`boolean`)
- `setupFog` (`Runnable`)

**Returns:** `boolean`

### renderSnowAndRain

```java
default boolean renderSnowAndRain(ClientLevel level, int ticks, float partialTick, LightTexture lightTexture, double camX, double camY, double camZ)
```

**Parameters:**

- `level` (`ClientLevel`)
- `ticks` (`int`)
- `partialTick` (`float`)
- `lightTexture` (`LightTexture`)
- `camX` (`double`)
- `camY` (`double`)
- `camZ` (`double`)

**Returns:** `boolean`

### tickRain

```java
default boolean tickRain(ClientLevel level, int ticks, Camera camera)
```

**Parameters:**

- `level` (`ClientLevel`)
- `ticks` (`int`)
- `camera` (`Camera`)

**Returns:** `boolean`

### adjustLightmapColors

```java
default void adjustLightmapColors(ClientLevel level, float partialTicks, float skyDarken, float blockLightRedFlicker, float skyLight, int pixelX, int pixelY, Vector3f colors)
```

**Parameters:**

- `level` (`ClientLevel`)
- `partialTicks` (`float`)
- `skyDarken` (`float`)
- `blockLightRedFlicker` (`float`)
- `skyLight` (`float`)
- `pixelX` (`int`)
- `pixelY` (`int`)
- `colors` (`Vector3f`)
