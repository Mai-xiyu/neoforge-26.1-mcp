# GuiLayerManager

**Package:** `net.neoforged.neoforge.client.gui`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@ApiStatus`

## Description

Adaptation of `LayeredDraw` that is used for `Gui` rendering specifically,
to give layers a name and fire appropriate events.


Overlays can be registered using the `RegisterGuiLayersEvent` event.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `Z_SEPARATION` | `float` |  |

## Methods

### NamedLayer

```java
public record NamedLayer(ResourceLocation name, LayeredDraw.Layer layer)
```

**Parameters:**

- `name` (`ResourceLocation`)
- `layer` (`LayeredDraw.Layer`)

**Returns:** `public record`

### add

```java
public GuiLayerManager add(ResourceLocation name, LayeredDraw.Layer layer)
```

**Parameters:**

- `name` (`ResourceLocation`)
- `layer` (`LayeredDraw.Layer`)

**Returns:** `public GuiLayerManager`

### add

```java
public GuiLayerManager add(GuiLayerManager child, BooleanSupplier shouldRender)
```

**Parameters:**

- `child` (`GuiLayerManager`)
- `shouldRender` (`BooleanSupplier`)

**Returns:** `public GuiLayerManager`

### render

```java
public void render(GuiGraphics guiGraphics, DeltaTracker partialTick)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `partialTick` (`DeltaTracker`)

**Returns:** `public void`

### renderInner

```java
 renderInner()
```

**Returns:** ``

### renderInner

```java
private void renderInner(GuiGraphics guiGraphics, DeltaTracker partialTick)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `partialTick` (`DeltaTracker`)

**Returns:** `private void`

### initModdedLayers

```java
public void initModdedLayers()
```

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate initialization of NamedLayeredDraw")
```

**Parameters:**

- `NamedLayeredDraw"` (`"Duplicate initialization of`)

**Returns:** `throw new`

### getLayerCount

```java
public int getLayerCount()
```

**Returns:** `public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `NamedLayer` | record |  |
