# IMapDecorationRenderer

**Package:** `net.neoforged.neoforge.client.gui.map`
**Type:** interface
**Side:** 🖥️ Client

## Description

Interface for custom `MapDecoration` renderers

## Methods

### render

```java
boolean render(MapDecoration decoration, PoseStack poseStack, MultiBufferSource bufferSource, MapItemSavedData mapData, MapDecorationTextureManager decorationTextures, boolean inItemFrame, int packedLight, int index)
```

**Parameters:**

- `decoration` (`MapDecoration`)
- `poseStack` (`PoseStack`)
- `bufferSource` (`MultiBufferSource`)
- `mapData` (`MapItemSavedData`)
- `decorationTextures` (`MapDecorationTextureManager`)
- `inItemFrame` (`boolean`)
- `packedLight` (`int`)
- `index` (`int`)

**Returns:** `boolean`
