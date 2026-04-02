# CustomWeatherEffectRenderer

**Package:** `net.neoforged.neoforge.client`
**Type:** interface
**Side:** 🖥️ Client

## Description

A custom renderer for snow and rain that can be registered using `RegisterCustomEnvironmentEffectRendererEvent#registerWeatherEffectRenderer`
and used with `net.neoforged.neoforge.common.world.NeoForgeEnvironmentAttributes#CUSTOM_WEATHER_EFFECTS`.



Custom render state needed for the various render methods must be extracted via `ExtractLevelRenderStateEvent`
and stored in the provided `LevelRenderState`.
@see RegisterCustomEnvironmentEffectRendererEvent#registerWeatherEffectRenderer
@see net.neoforged.neoforge.common.world.NeoForgeEnvironmentAttributes#CUSTOM_WEATHER_EFFECTS

## Methods

### renderSnowAndRain

```java
default boolean renderSnowAndRain(LevelRenderState levelRenderState, WeatherRenderState weatherRenderState, MultiBufferSource bufferSource, Vec3 camPos)
```

**Parameters:**

- `levelRenderState` (`LevelRenderState`)
- `weatherRenderState` (`WeatherRenderState`)
- `bufferSource` (`MultiBufferSource`)
- `camPos` (`Vec3`)

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
