# MapDecorationRenderStateModifier

**Package:** `net.neoforged.neoforge.client.renderstate`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@FunctionalInterface`

## Description

Function interface for render state modifiers that target MapDecorations. Useful for adding custom data for rendering
in `IMapDecorationRenderer`s.

## Methods

### accept

```java
void accept(MapItemSavedData mapItemSavedData, MapRenderState mapRenderState, MapRenderState.MapDecorationRenderState mapDecorationRenderState)
```

**Parameters:**

- `mapItemSavedData` (`MapItemSavedData`)
- `mapRenderState` (`MapRenderState`)
- `mapDecorationRenderState` (`MapRenderState.MapDecorationRenderState`)
