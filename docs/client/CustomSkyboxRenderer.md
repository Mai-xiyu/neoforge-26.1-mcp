# CustomSkyboxRenderer

**Package:** `net.neoforged.neoforge.client`
**Type:** interface
**Side:** 🖥️ Client

## Description

A custom skybox renderer that can be registered using `RegisterCustomEnvironmentEffectRendererEvent#registerSkyboxRenderer`
and used with `net.neoforged.neoforge.common.world.NeoForgeEnvironmentAttributes#CUSTOM_SKYBOX`.



Custom render state needed for the various render methods must be extracted via `ExtractLevelRenderStateEvent`
and stored in the provided `LevelRenderState`.
@see RegisterCustomEnvironmentEffectRendererEvent#registerSkyboxRenderer
@see net.neoforged.neoforge.common.world.NeoForgeEnvironmentAttributes#CUSTOM_SKYBOX

## Methods

### renderSky

```java
default boolean renderSky(LevelRenderState levelRenderState, SkyRenderState skyRenderState, Matrix4fc modelViewMatrix, Runnable setupFog)
```

**Parameters:**

- `levelRenderState` (`LevelRenderState`)
- `skyRenderState` (`SkyRenderState`)
- `modelViewMatrix` (`Matrix4fc`)
- `setupFog` (`Runnable`)

**Returns:** `boolean`
