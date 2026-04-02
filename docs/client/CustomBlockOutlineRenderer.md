# CustomBlockOutlineRenderer

**Package:** `net.neoforged.neoforge.client`
**Type:** interface
**Side:** 🖥️ Client

## Description

A rendering callback invoked when a block outline is about to be rendered.



Implementations of this class must not capture the level provided in `ExtractBlockOutlineRenderStateEvent`,
instead the necessary data must be extracted in the event handler and only the extracted data may be captured by
the custom renderer implementation.

## Methods

### render

```java
boolean render(BlockOutlineRenderState renderState, MultiBufferSource.BufferSource buffer, PoseStack poseStack, boolean translucentPass, LevelRenderState levelRenderState)
```

**Parameters:**

- `renderState` (`BlockOutlineRenderState`)
- `buffer` (`MultiBufferSource.BufferSource`)
- `poseStack` (`PoseStack`)
- `translucentPass` (`boolean`)
- `levelRenderState` (`LevelRenderState`)

**Returns:** `boolean`
