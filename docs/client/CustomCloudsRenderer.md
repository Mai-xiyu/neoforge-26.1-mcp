# CustomCloudsRenderer

**Package:** `net.neoforged.neoforge.client`
**Type:** interface
**Side:** 🖥️ Client

## Description

A custom cloud renderer that can be registered using `RegisterCustomEnvironmentEffectRendererEvent#registerCloudRenderer)`
and used with `net.neoforged.neoforge.common.world.NeoForgeEnvironmentAttributes#CUSTOM_CLOUDS`.



Custom render state needed for the various render methods must be extracted via `ExtractLevelRenderStateEvent`
and stored in the provided `LevelRenderState`.
@see RegisterCustomEnvironmentEffectRendererEvent#registerCloudRenderer
@see net.neoforged.neoforge.common.world.NeoForgeEnvironmentAttributes#CUSTOM_CLOUDS

## Methods

### renderClouds

```java
default boolean renderClouds(LevelRenderState levelRenderState, Vec3 camPos, CloudStatus cloudStatus, int cloudColor, float cloudHeight, int cloudRange, Matrix4fc modelViewMatrix)
```

**Parameters:**

- `levelRenderState` (`LevelRenderState`)
- `camPos` (`Vec3`)
- `cloudStatus` (`CloudStatus`)
- `cloudColor` (`int`)
- `cloudHeight` (`float`)
- `cloudRange` (`int`)
- `modelViewMatrix` (`Matrix4fc`)

**Returns:** `boolean`
